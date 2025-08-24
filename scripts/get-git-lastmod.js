#!/usr/bin/env node

/**
 * Script to get git last modified dates for all pages
 * This runs during build time to generate a static JSON file
 */

import { execSync } from 'child_process';
import { existsSync, writeFileSync, mkdirSync } from 'fs';
import path from 'path';
// fileURLToPath not needed for this script

// Not needed for this script

// Map route paths to actual file paths
const routeToFileMap = {
  '/': [
    'src/routes/+page.svelte',
    'src/routes/+page.ts',
    'src/lib/components/CheckSection.svelte',
    'src/lib/components/CheckItem.svelte',
    'src/lib/stores/checklistStore.svelte.ts'
  ],
  '/about': ['src/routes/about/+page.svelte', 'src/routes/about/+page.ts'],
  '/help': ['src/routes/help/+page.svelte', 'src/routes/help/+page.ts'],
  '/privacy': ['src/routes/privacy/+page.svelte', 'src/routes/privacy/+page.ts'],
  '/intro': ['src/routes/intro/+page.svelte', 'src/routes/intro/+page.ts']
};

/**
 * Get the last modified date for a specific route from Git history
 */
function getGitLastModified(routePath, filePaths) {
  try {
    let mostRecentDate = null;

    for (const filePath of filePaths) {
      const fullPath = path.join(process.cwd(), filePath);

      // Check if file exists
      if (!existsSync(fullPath)) {
        continue;
      }

      try {
        // Get the last commit date for this file
        const gitCommand = `git log -1 --format=%cI -- "${filePath}"`;
        const result = execSync(gitCommand, {
          encoding: 'utf8',
          cwd: process.cwd()
        }).trim();

        if (result) {
          const fileDate = new Date(result);
          if (!mostRecentDate || fileDate > mostRecentDate) {
            mostRecentDate = fileDate;
          }
        }
      } catch {
        // File might not be in git history yet
        continue;
      }
    }

    if (mostRecentDate) {
      // Return date in ISO format (YYYY-MM-DD)
      return mostRecentDate.toISOString().split('T')[0];
    }

    // Fallback to current date if no git history
    return new Date().toISOString().split('T')[0];
  } catch (error) {
    console.warn(`Git lastmod detection failed for ${routePath}:`, error.message);
    return new Date().toISOString().split('T')[0];
  }
}

// Generate lastmod data for all routes
const lastmodData = {};

for (const [route, files] of Object.entries(routeToFileMap)) {
  lastmodData[route] = getGitLastModified(route, files);
  // Log each route's lastmod date (using console.warn for ESLint)
  console.warn(`${route}: ${lastmodData[route]}`);
}

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'src/lib/data');
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

// Write to JSON file
const outputPath = path.join(dataDir, 'git-lastmod.json');
writeFileSync(outputPath, JSON.stringify(lastmodData, null, 2));

// Use console.warn for success message (allowed by ESLint)
console.warn(`\n✅ Git lastmod data written to ${outputPath}`);
