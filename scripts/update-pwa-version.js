// scripts/update-pwa-version.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function updatePWAVersion() {
  const packageJsonPath = path.join(__dirname, '../package.json');

  // package.jsonからバージョンを読み取り
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const version = packageJson.version;

  console.log(`🔄 Updating PWA version to ${version}`);

  // PWA manifest.webmanifestを更新
  const manifestPath = path.join(__dirname, '../static/manifest.webmanifest');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    manifest.version = version;
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('✅ manifest.webmanifest version updated');
  }

  // vite.config.tsのPWA設定を更新
  const viteConfigPath = path.join(__dirname, '../vite.config.ts');
  if (fs.existsSync(viteConfigPath)) {
    let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

    // workboxのversion設定を更新
    viteConfig = viteConfig.replace(/workbox:\s*{[\s\S]*?runtimeCaching:/, match => {
      return match.replace(/\/\/ version: ['"][\d.]+['"]/, `// version: '${version}'`);
    });

    fs.writeFileSync(viteConfigPath, viteConfig);
    console.log('✅ vite.config.ts PWA version updated');
  }

  console.log(`✅ PWA version updated to ${version}`);
}

updatePWAVersion();
