/**
 * Indonesian translation file template
 * Indonesian (id) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'id' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'Untuk diterjemahkan',
	completeness: 0
};

export const translations: TranslationKeys = {
	common: {
		loading: 'Memuat...',
		error: 'Terjadi kesalahan',
		success: 'Berhasil',
		cancel: 'Batal',
		save: 'Simpan',
		delete: 'Hapus',
		edit: 'Edit',
		close: 'Tutup',
		back: 'Kembali',
		next: 'Selanjutnya',
		previous: 'Sebelumnya',
		search: 'Cari',
		clear: 'Bersihkan',
		reset: 'Reset',
		copy: 'Salin',
		download: 'Unduh',
		share: 'Bagikan',
		print: 'Cetak',
		export: 'Ekspor',
		import: 'Impor',
		settings: 'Pengaturan',
		help: 'Bantuan',
		about: 'Tentang',
		privacy: 'Privasi',
		terms: 'Ketentuan',
		home: 'Beranda',
		menu: 'Menu',
		languages: 'Bahasa',
		darkMode: 'Mode Gelap',
		lightMode: 'Mode Terang',
		systemMode: 'Sistem',
		guide: 'Guide',
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
		}
	},
	app: {
		title: 'Daftar Periksa Fakta Praktis',
		subtitle: 'Sistem komprehensif untuk mengevaluasi keandalan informasi secara ilmiah',
		description:
			'Daftar periksa untuk mengevaluasi keandalan informasi secara ilmiah dan sistematis',
		version: '1.0.0',
		author: 'Tim Daftar Periksa Fakta',
		copyright: '© 2025 Tim Daftar Periksa Fakta',
		poweredBy: 'Didukung oleh'
	},
	navigation: {
		home: 'Beranda',
		about: 'Tentang',
		help: 'Bantuan & Penggunaan',
		privacy: 'Privasi',
		checklist: 'Daftar Periksa',
		history: 'Riwayat',
		settings: 'Pengaturan'
	},
	checklist: {
		title: 'Informasi Daftar Periksa',
		description: 'Detail daftar periksa',
		newChecklist: 'Daftar Periksa Baru',
		createChecklist: 'Buat Daftar Periksa',
		editChecklist: 'Edit Daftar Periksa',
		deleteChecklist: 'Hapus Daftar Periksa',
		completeChecklist: 'Selesaikan Evaluasi',
		checklistTitle: 'Judul',
		checklistDescription: 'Ringkasan Informasi Target',
		targetInfo: 'Informasi Target',
		targetInfoPlaceholder: 'Contoh: Artikel tentang efektivitas vaksin COVID-19',
		evaluationNotes: 'Catatan Evaluasi & Item Verifikasi Tambahan',
		evaluationNotesPlaceholder: 'Catat pertanyaan, item untuk diverifikasi, kesan umum, dll...',
		score: 'Skor Evaluasi',
		confidenceLevel: 'Tingkat Kepercayaan',
		finalJudgment: 'Penilaian Akhir',
		judgment: {
			accept: 'Terima',
			caution: 'Hati-hati',
			reject: 'Tolak',
			pending: 'Menunggu'
		},
		judgmentAdvice: {
			accept: 'Adopsi disarankan. Verifikasi yang cukup telah dilakukan.',
			caution: 'Verifikasi tambahan disarankan. Berhati-hatilah dengan keputusan penting.',
			reject: 'Penolakan disarankan. Cari sumber yang lebih dapat diandalkan.'
		},
		confidence: {
			high: 'High Reliability',
			medium: 'Moderate Reliability',
			low: 'Low Reliability',
			poor: 'Reliability Issues'
		},
		advice: {
			high: 'Adoption recommended. Sufficient verification has been conducted.',
			medium: 'Additional confirmation recommended. Be cautious with important decisions.',
			low: 'Caution required. Further verification is needed.',
			poor: 'Rejection recommended. Look for reliable information sources.'
		}
	},
	categories: {
		critical: {
			name: 'Evaluasi Kritis (Diperlukan)',
			description: 'Item paling penting untuk menentukan keandalan dasar informasi',
			emoji: '🚨'
		},
		detailed: {
			name: 'Evaluasi Detail (Penting)',
			description: 'Item untuk mengevaluasi kualitas dan keahlian informasi',
			emoji: '📝'
		},
		verification: {
			name: 'Verifikasi & Pemeriksaan Silang',
			description: 'Item untuk mengkonfirmasi kemampuan verifikasi dan dukungan informasi',
			emoji: '🔍'
		},
		context: {
			name: 'Evaluasi Konteks & Bias',
			description: 'Item untuk mengevaluasi kesesuaian bias dan konteks',
			emoji: '🌐'
		}
	},
	export: {
		title: 'Ekspor',
		description: 'Ekspor daftar periksa dalam berbagai format',
		format: 'Format',
		options: 'Opsi',
		includeGuides: 'Sertakan Panduan',
		includeNotes: 'Sertakan Catatan',
		includeSummary: 'Sertakan Ringkasan',
		sectionBreaks: 'Jeda Bagian',
		pdfModes: {
			pixelPerfect: 'Piksel Sempurna',
			reliableFont: 'Fokus Keandalan Font',
			textBased: 'Berbasis Teks'
		},
		formats: {
			pdf: 'PDF',
			html: 'HTML',
			json: 'JSON',
			markdown: 'Markdown'
		},
		progress: {
			initializing: 'Menginisialisasi...',
			generating: 'Menghasilkan...',
			processing: 'Memproses...',
			finalizing: 'Menyelesaikan...',
			completed: 'Selesai',
			failed: 'Gagal'
		}
	},
	history: {
		title: 'Riwayat Evaluasi',
		description: 'Hasil evaluasi sebelumnya',
		empty: 'Tidak ada riwayat tersedia',
		lastEvaluated: 'Terakhir Dievaluasi',
		viewResults: 'Lihat Hasil',
		deleteHistory: 'Hapus Riwayat',
		clearAll: 'Bersihkan Semua',
		recent: 'Evaluasi Terbaru',
		viewAll: 'Lihat Semua',
		createFirst: 'Mari buat daftar periksa pertama Anda!'
	},
	errors: {
		general: 'Terjadi kesalahan yang tidak terduga',
		network: 'Terjadi kesalahan jaringan',
		storage: 'Terjadi kesalahan penyimpanan',
		export: 'Ekspor gagal',
		import: 'Impor gagal',
		invalidData: 'Data tidak valid',
		unsupportedFeature: 'Fitur tidak didukung',
		permissionDenied: 'Izin ditolak',
		fileNotFound: 'File tidak ditemukan',
		fileTooLarge: 'File terlalu besar',
		invalidFileFormat: 'Format file tidak valid'
	},
	success: {
		saved: 'Disimpan',
		exported: 'Diekspor',
		imported: 'Diimpor',
		deleted: 'Dihapus',
		copied: 'Disalin',
		shared: 'Dibagikan'
	},
	confirmations: {
		delete: 'Apakah Anda yakin ingin menghapus?',
		reset: 'Reset?',
		clearHistory: 'Bersihkan semua riwayat?',
		overwrite: 'Timpa?',
		discard: 'Buang perubahan?'
	},
	help: {
		title: 'Bantuan & Penggunaan',
		overview: 'Ringkasan',
		howToUse: 'Cara Menggunakan',
		categories: 'Kategori',
		scoring: 'Perhitungan Skor',
		features: 'Fitur',
		troubleshooting: 'Pemecahan Masalah',
		faq: 'FAQ'
	},
	accessibility: {
		skipToContent: 'Lompat ke konten',
		mainNavigation: 'Navigasi utama',
		searchForm: 'Form pencarian',
		languageSelector: 'Pemilih bahasa',
		themeToggle: 'Beralih tema',
		closeDialog: 'Tutup dialog',
		openMenu: 'Buka menu',
		expandSection: 'Perluas bagian',
		collapseSection: 'Ciutkan bagian'
	},
	datetime: {
		justNow: 'Baru saja',
		minutesAgo: 'menit yang lalu',
		hoursAgo: 'jam yang lalu',
		daysAgo: 'hari yang lalu',
		weeksAgo: 'minggu yang lalu',
		monthsAgo: 'bulan yang lalu',
		yearsAgo: 'tahun yang lalu',
		createdAt: 'Dibuat pada',
		updatedAt: 'Diperbarui pada',
		completedAt: 'Diselesaikan pada'
	},
	units: {
		items: 'item',
		percent: '%',
		score: 'skor',
		total: 'total',
		completed: 'selesai',
		remaining: 'tersisa',
		of: 'dari'
	},

	// Form
	forms: {
		titleLabel: 'Judul',
		titlePlaceholder: 'Masukkan judul informasi atau sumber yang akan dievaluasi',
		descriptionLabel: 'Ringkasan Informasi Target',
		descriptionPlaceholder: 'Jelaskan secara singkat konten informasi yang akan dievaluasi',
		notesLabel: 'Catatan Evaluasi & Item Verifikasi Tambahan',
		notesPlaceholder: 'Catat pertanyaan, item untuk diverifikasi, kesan umum, dll...'
	},

	// Teks UI
	ui: {
		quickStartGuide: '💡 Gunakan panduan ini untuk memulai dengan cepat!',
		guideModeDetailed: '🔍 Mode Panduan Detail',
		guideModeNormal: '📝 Mode Normal',
		completeEvaluation: 'Selesaikan Evaluasi'
	},

	// Checklist items (placeholder - needs translation)
	checklistItems: {
		'source-authority': {
			title: 'Publication from authoritative sources',
			description:
				'Government agencies, academic institutions, professional organizations, peer-reviewed papers, reliable media, etc.',
			guideTitle: '🏛️ Criteria for Authoritative Sources',
			guideContent:
				'Government/Public institutions: Ministries, statistical bureaus, central banks, courts, etc.',
			examplesGood: ['Ministry of Health statistical data', 'Nature journal peer-reviewed papers'],
			examplesBad: ['Personal blog information', 'Anonymous forum posts']
		},
		'source-primary': {
			title: 'Primary source verification',
			description: 'Direct information from the source, not hearsay or secondhand reports',
			guideTitle: '🎯 How to Identify Primary Sources',
			guideContent:
				'Primary sources: Research papers by authors themselves, witness testimonies, official announcements',
			examplesGood: [
				'Papers published by researchers themselves',
				'Company earnings announcements'
			],
			examplesBad: ['According to experts', 'A certain survey without clear attribution']
		},
		'source-multiple': {
			title: 'Multiple independent sources',
			description: 'Similar reports or confirmations from different positions/organizations',
			guideTitle: '🔄 How to Verify Independence',
			guideContent:
				'Independent sources: Sources with different organizations, funding, and interests',
			examplesGood: ['Government announcement + academic research + multiple media reports'],
			examplesBad: ['Multiple media within the same corporate group']
		},
		'warning-anonymous': {
			title: 'Not anonymous or unattributed information',
			description: 'Creator/publisher can be clearly identified',
			guideTitle: '🔍 Key Points for Source Identification',
			guideContent: 'Required information: Real name of creator, affiliation, contact information',
			examplesGood: ['According to Prof. X (University Medical School)'],
			examplesBad: ['According to a certain doctor', 'Anonymous expert']
		},
		'warning-sensational': {
			title: 'Few sensational or inflammatory expressions',
			description: 'Calm and objective description, no excessive emotional appeals',
			guideTitle: '⚠️ How to Identify Sensational Expressions',
			guideContent: 'Warning expressions: Absolutely, Completely, Shocking, Stunning',
			examplesGood: ['Research showed improvement in 75% of subjects'],
			examplesBad: ['Shocking truth doctors never tell!']
		},
		'warning-logical': {
			title: 'No logical contradictions',
			description: 'Content is consistent with no obvious logical leaps',
			guideTitle: '🧠 How to Check Logical Consistency',
			guideContent: 'Check if premises and conclusions are properly connected',
			examplesGood: ['Statistically significant analysis considering other factors'],
			examplesBad: ['A and B happened together so A caused B']
		},
		'time-recent': {
			title: 'Information freshness',
			description: 'Publication date is specified and content maintains appropriate freshness',
			guideTitle: '⏰ Judging Appropriate Information Freshness',
			guideContent: 'Field-specific standards for freshness requirements',
			examplesGood: ['Published December 2024', 'Last updated: January 2025'],
			examplesBad: ['No date listed', '5-year-old technical information']
		},
		'time-update': {
			title: 'Update and correction history',
			description: 'Content is updated as necessary with transparent corrections',
			guideTitle: '📝 Checking Transparent Updates and Corrections',
			guideContent: 'Good update characteristics include clear description of updates',
			examplesGood: ['Clear correction history'],
			examplesBad: ['No correction records']
		},
		'expert-knowledge': {
			title: 'Appropriate expertise',
			description: 'Creator has sufficient knowledge/experience in the relevant field',
			guideTitle: '🎓 How to Verify Expertise',
			guideContent: 'Check items: Degrees/qualifications in related fields',
			examplesGood: ['Infectious disease specialist explaining vaccines'],
			examplesBad: ['Celebrity outside their field making medical claims']
		},
		'detail-sufficient': {
			title: 'Sufficient detail and evidence',
			description:
				'Process leading to conclusions and supporting evidence are appropriately explained',
			guideTitle: '📋 Judging Sufficiency of Evidence',
			guideContent: 'Required elements: Specific data supporting claims',
			examplesGood: ['Sample size, statistical methods, confidence intervals included'],
			examplesBad: ['Only states effect proven without details']
		},
		'citation-proper': {
			title: 'Proper citations and references',
			description: 'Reliable sources are shown for important claims',
			guideTitle: '📚 Standards for Proper Citations',
			guideContent: 'Content requiring citation: Statistical data/numbers',
			examplesGood: ['According to research with proper citation'],
			examplesBad: ['According to research (source unclear)']
		},
		'citation-accessible': {
			title: 'Verifiability of cited sources',
			description: 'Cited sources can actually be accessed and verified',
			guideTitle: '🌐 Checking Citation Accessibility',
			guideContent: 'Ideal state: Direct links or DOI',
			examplesGood: ['With URL links', 'Papers with DOI numbers'],
			examplesBad: ['According to internal materials']
		},
		'cross-check': {
			title: 'Cross-reference with other sources',
			description: 'Similar content can be confirmed by multiple independent sources',
			guideTitle: '🔍 Effective Cross-checking Methods',
			guideContent: 'Step-by-step verification process',
			examplesGood: ['Similar results in multiple peer-reviewed papers'],
			examplesBad: ['Only one source']
		},
		'fact-check': {
			title: 'Verification by fact-checking organizations',
			description: 'Verification exists from reliable fact-checking institutions',
			guideTitle: '✅ Reliable Fact-checking Organizations',
			guideContent: 'International organizations: Snopes, PolitiFact, AFP Fact Check',
			examplesGood: ['Multiple fact-checking organizations judged as true'],
			examplesBad: ['Judged as false information by fact-checking']
		},
		'data-verifiable': {
			title: 'Verifiable data',
			description: 'Data supporting claims can be objectively verified',
			guideTitle: '📈 Checking Data Verifiability',
			guideContent: 'Elements to verify: Data source, collection methods',
			examplesGood: ['Government statistics data'],
			examplesBad: ['Internal data only']
		},
		methodology: {
			title: 'Validity of methods/methodology',
			description: 'Research or survey methodology is appropriate and reproducible',
			guideTitle: '🔬 Evaluating Methodological Validity',
			guideContent: 'Evaluation points: Research design appropriateness',
			examplesGood: ['Double-blind trials', 'Appropriate control group setting'],
			examplesBad: ['No methodology description']
		},
		'bias-disclosure': {
			title: 'Disclosure of conflicts of interest',
			description: 'Financial, political, and personal interests are appropriately disclosed',
			guideTitle: '💰 Items to Check for Conflicts of Interest',
			guideContent: 'Interests to disclose: Research funding sources',
			examplesGood: ['COI clearly stated'],
			examplesBad: ['No COI disclosure']
		},
		'balanced-view': {
			title: 'Balanced perspective',
			description: 'Different positions and opposing views are also considered',
			guideTitle: '⚖️ Perspectives for Balance Evaluation',
			guideContent: 'Check points: Introduction of opposing/critical views',
			examplesGood: ['Comparison of multiple research results'],
			examplesBad: ['Only listing supporting evidence']
		},
		'context-adequate': {
			title: 'Sufficient background information',
			description:
				'Background and context necessary for understanding the information are provided',
			guideTitle: '🌍 Items to Check for Contextual Information',
			guideContent: 'Necessary background information: Historical background/previous research',
			examplesGood: ['Past similar cases', 'Historical background explanation'],
			examplesBad: ['Single numbers only', 'No background information']
		},
		'scope-clear': {
			title: 'Clear scope of application',
			description: 'Applicable scope and limitations of information are clearly shown',
			guideTitle: '🎯 Clarifying Scope of Application',
			guideContent: 'Scope to clarify: Target people/regions/periods',
			examplesGood: ['Clear limitation statements'],
			examplesBad: ['Unlimited generalization of limited research results']
		}
	}
};

export default translations;
