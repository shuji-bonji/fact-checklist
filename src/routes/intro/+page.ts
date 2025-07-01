import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	// Generate SEO metadata for the intro page
	const seoData = {
		title: '偽情報・誤情報だらけの世界を生き抜く、実用的ファクトチェックシート',
		description: '政府のSNS規制が進む中、情報の信頼性を自分の目と頭で見極めるためのシンプルなチェックリスト。AIやメディアを鵜呑みにせず、科学的・体系的に情報を評価するPWAアプリ。',
		keywords: '事実確認,ファクトチェック,情報検証,信頼性評価,PWA,情報リテラシー,偽情報対策,SNS規制,言論統制,情報の質,AIファクトチェック,誤情報,フェイクニュース',
		ogImage: `${url.origin}/og-image-intro.png`,
		canonicalUrl: url.href,
		author: 'shuji-bonji'
	};

	return {
		seoData,
		// Date for SEO and social media
		publishedDate: '2024-01-01T00:00:00.000Z',
		lastModified: new Date().toISOString()
	};
};

export const prerender = true;
export const ssr = false;