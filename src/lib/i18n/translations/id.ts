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
		systemMode: 'Sistem'
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
		recent: 'Evaluasi Terbaru'
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
	}
};

export default translations;
