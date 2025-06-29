/**
 * Indonesian translation file template
 * Indonesian (id) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'id' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'Claude Code AI',
	completeness: 100
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

	// Item daftar periksa
	checklistItems: {
		// Evaluasi kritis
		'source-authority': {
			title: 'Publikasi dari sumber berwenang',
			description:
				'Instansi pemerintah, institusi akademik, organisasi profesional, makalah peer-review, media terpercaya, dll.',
			guideTitle: '🏛️ Kriteria Sumber Berwenang',
			guideContent:
				'Institusi Pemerintah/Publik: Kementerian, badan statistik, bank sentral, pengadilan, dll.\nInstitusi Akademik: Universitas, lembaga penelitian, perhimpunan akademik, jurnal peer-review\nOrganisasi Profesional: Organisasi nasional dan internasional di bidang terkait\nMedia Terpercaya: Organisasi berita dengan kebijakan editorial yang jelas dan rekam jejak koreksi/permintaan maaf',
			examplesGood: [
				'Data statistik Kementerian Kesehatan',
				'Makalah peer-review di jurnal Nature',
				'Pengumuman resmi Bank Indonesia'
			],
			examplesBad: ['Informasi blog pribadi', 'Postingan forum anonim', 'Situs bertujuan iklan']
		},
		'source-primary': {
			title: 'Verifikasi sumber primer',
			description: 'Informasi langsung dari sumber asli, bukan kabar angin atau laporan kedua',
			guideTitle: '🎯 Cara Mengidentifikasi Sumber Primer',
			guideContent:
				'Sumber primer: Makalah peneliti sendiri, kesaksian saksi, pengumuman resmi, data mentah\nSumber sekunder: Artikel komentar, situs ringkasan, analisis pihak ketiga\nPoin verifikasi: Perhatikan ekspresi seperti "menurut..." atau "dilaporkan oleh..."',
			examplesGood: [
				'Makalah yang diterbitkan oleh peneliti sendiri',
				'Pengumuman laba perusahaan',
				'Statistik resmi pemerintah'
			],
			examplesBad: ['"Menurut para ahli"', '"Dalam survei tertentu" tanpa atribusi yang jelas']
		},
		'source-multiple': {
			title: 'Beberapa sumber independen',
			description: 'Laporan atau konfirmasi serupa dari posisi/organisasi yang berbeda',
			guideTitle: '🔄 Cara Memverifikasi Independensi',
			guideContent:
				'Sumber independen: Sumber dengan organisasi, dana, dan kepentingan yang berbeda\nStandar minimum: Konfirmasi dari 2-3 sumber terpercaya independen\nCatatan: Artikel berdasarkan siaran pers yang sama bukan "independen"',
			examplesGood: [
				'Pengumuman pemerintah + penelitian akademik + laporan media berbagai',
				'Hasil serupa dari institusi penelitian berbeda'
			],
			examplesBad: [
				'Beberapa media dalam grup perusahaan yang sama',
				'Hanya artikel yang di-repost'
			]
		},
		'warning-anonymous': {
			title: 'Bukan informasi anonim atau tidak teridentifikasi',
			description: 'Pencipta/penerbit dapat diidentifikasi dengan jelas',
			guideTitle: '🔍 Poin Kunci untuk Identifikasi Sumber',
			guideContent:
				'Informasi yang diperlukan: Nama asli pencipta, afiliasi, kontak, keahlian\nTanda peringatan: "Menurut sumber internal", "ahli anonim", "studi tertentu"\nAnonimitas yang dapat diterima: Perlindungan sumber dalam jurnalisme (namun reporter harus dapat diidentifikasi)',
			examplesGood: [
				'Menurut Prof. Dr. Ahmad Suroso (Profesor Fakultas Kedokteran Universitas Indonesia)',
				'Pernyataan Kepala Divisi Kementerian Kesehatan'
			],
			examplesBad: ['Menurut dokter tertentu', 'Kata sumber', 'Ahli anonim']
		},
		'warning-sensational': {
			title: 'Sedikit ekspresi sensasional atau provokatif',
			description: 'Deskripsi tenang dan objektif, tanpa imbauan emosional berlebihan',
			guideTitle: '⚠️ Cara Mengidentifikasi Ekspresi Sensasional',
			guideContent:
				'Ekspresi peringatan: "Benar-benar", "Sepenuhnya", "Mengejutkan", "Menakjubkan", "Yang disembunyikan industri X"\nManipulasi emosional: Ekspresi yang memicu ketakutan, kemarahan, kecemburuan\nEkspresi yang tepat: "Menurut penelitian", "Data menunjukkan", "Pendapat ahli"',
			examplesGood: [
				'Penelitian menunjukkan perbaikan pada 75% subjek',
				'Perbedaan signifikan secara statistik dikonfirmasi oleh data'
			],
			examplesBad: [
				'Kebenaran mengejutkan yang tidak pernah dikatakan dokter!',
				'Fakta tersembunyi industri terungkap'
			]
		},
		'warning-logical': {
			title: 'Tidak ada kontradiksi logis',
			description: 'Konten konsisten tanpa lompatan logis yang jelas',
			guideTitle: '🧠 Cara Memeriksa Konsistensi Logis',
			guideContent:
				'Item periksa:\n• Apakah premis dan kesimpulan terhubung dengan benar?\n• Apakah hubungan sebab akibat ditunjukkan dengan jelas?\n• Apakah klaim yang kontradiktif dibuat secara bersamaan?\nKesalahan logis umum: Mencampuradukkan korelasi dengan kausalitas, generalisasi ekstrem',
			examplesGood: [
				'Analisis signifikan secara statistik mempertimbangkan faktor lain',
				'Pengembangan logis langkah demi langkah'
			],
			examplesBad: [
				'A dan B terjadi bersamaan jadi A menyebabkan B',
				'Generalisasi dari contoh ekstrem'
			]
		},
		// Evaluasi terperinci
		'time-recent': {
			title: 'Kesegaran informasi',
			description: 'Tanggal publikasi ditentukan dan konten mempertahankan kesegaran yang sesuai',
			guideTitle: '⏰ Menilai Kesegaran Informasi yang Tepat',
			guideContent:
				'Standar khusus bidang:\n• Berita/Peristiwa terkini: Dalam hari hingga 1 minggu\n• Kedokteran/Sains: Dalam 2-3 tahun (penelitian dasar hingga 5 tahun)\n• Teknologi/IT: Dalam 1-2 tahun\n• Hukum/Sistem: Mencerminkan revisi terbaru\nPoin periksa: Tanggal/waktu publikasi jelas, tanggal pembaruan terakhir tercatat',
			examplesGood: [
				'Diterbitkan Desember 2024',
				'Terakhir diperbarui: Januari 2025',
				'Mencerminkan revisi hukum terbaru'
			],
			examplesBad: [
				'Tidak ada tanggal tercantum',
				'Informasi teknologi 5 tahun lalu',
				'Penjelasan berdasarkan hukum lama'
			]
		},
		'time-update': {
			title: 'Riwayat pembaruan dan koreksi',
			description: 'Konten diperbarui sesuai kebutuhan dengan koreksi transparan',
			guideTitle: '📝 Memeriksa Pembaruan dan Koreksi Transparan',
			guideContent:
				'Karakteristik pembaruan yang baik:\n• Deskripsi pembaruan yang jelas\n• Penjelasan alasan koreksi\n• Pencatatan tanggal/waktu pembaruan\n• Catatan untuk perubahan penting\nIndikator keandalan: Sikap mengakui dan memperbaiki kesalahan',
			examplesGood: [
				'Diperbarui 15 Januari 2025: Data statistik diganti dengan versi terbaru',
				'Riwayat koreksi yang jelas'
			],
			examplesBad: [
				'Informasi lama dibiarkan tidak berubah',
				'Tidak ada catatan koreksi',
				'Perubahan konten diam-diam'
			]
		},
		'expert-knowledge': {
			title: 'Keahlian yang tepat',
			description: 'Pencipta memiliki pengetahuan/pengalaman yang cukup di bidang terkait',
			guideTitle: '🎓 Cara Memverifikasi Keahlian',
			guideContent:
				'Item periksa:\n• Gelar/kualifikasi di bidang terkait\n• Pengalaman praktis/riwayat penelitian\n• Rekam jejak presentasi akademik/publikasi\n• Pengalaman institusi profesional\nCatatan: Keahlian di bidang terkait penting (mis. dokter membahas ekonomi)',
			examplesGood: [
				'Spesialis penyakit menular menjelaskan vaksin',
				'PhD Ekonomi menganalisis kebijakan moneter'
			],
			examplesBad: [
				'Selebriti di luar bidang mereka membuat klaim medis',
				'Orang dengan kualifikasi tidak jelas menjelaskan hukum'
			]
		},
		'detail-sufficient': {
			title: 'Detail dan bukti yang cukup',
			description: 'Proses yang mengarah ke kesimpulan dan bukti pendukung dijelaskan dengan tepat',
			guideTitle: '📋 Menilai Kecukupan Bukti',
			guideContent:
				'Elemen yang diperlukan:\n• Data spesifik yang mendukung klaim\n• Penjelasan metodologi\n• Penyebutan keterbatasan/kendala\n• Referensi ke pandangan oposisi\nTanda peringatan: Hanya kesimpulan dengan proses tidak jelas, bukti samar',
			examplesGood: [
				'Ukuran sampel, metode statistik, interval kepercayaan disertakan',
				'Penjelasan metodologi terperinci'
			],
			examplesBad: ['Hanya menyatakan efek terbukti tanpa detail', 'Hanya kesimpulan tanpa bukti']
		},
		'citation-proper': {
			title: 'Kutipan dan referensi yang tepat',
			description: 'Sumber terpercaya ditunjukkan untuk klaim penting',
			guideTitle: '📚 Standar Kutipan yang Tepat',
			guideContent:
				'Konten yang memerlukan kutipan:\n• Data statistik/angka\n• Klaim khusus\n• Hasil penelitian lain\n• Konten hukum/peraturan\nFormat kutipan: Informasi minimum termasuk nama penulis, tahun publikasi, judul, penerbit',
			examplesGood: [
				'Menurut penelitian Susanto (2024)...',
				'Statistik Kementerian Kesehatan (2025)...'
			],
			examplesBad: [
				'Menurut penelitian (sumber tidak jelas)',
				'Data menunjukkan (detail tidak jelas)'
			]
		},
		'citation-accessible': {
			title: 'Verifikabilitas sumber yang dikutip',
			description: 'Sumber yang dikutip dapat benar-benar diakses dan diverifikasi',
			guideTitle: '🌐 Memeriksa Aksesibilitas Kutipan',
			guideContent:
				'Keadaan ideal:\n• Tautan langsung atau DOI\n• Sumber yang tersedia untuk umum\n• Informasi spesifik yang dapat dicari\nKisaran yang dapat diterima: Database berbayar, materi yang dapat diverifikasi di perpustakaan\nKutipan bermasalah: Percakapan pribadi, materi internal yang tidak dapat diverifikasi',
			examplesGood: ['Dengan tautan URL', 'Makalah dengan nomor DOI', 'Buku dengan nomor ISBN'],
			examplesBad: [
				'Menurut materi internal',
				'Dalam diskusi pribadi',
				'Materi yang tidak dapat diakses'
			]
		},
		// Verifikasi dan pengecekan silang
		'cross-check': {
			title: 'Referensi silang dengan sumber lain',
			description: 'Konten serupa dapat dikonfirmasi oleh beberapa sumber independen',
			guideTitle: '🔍 Metode Pengecekan Silang yang Efektif',
			guideContent:
				'Verifikasi langkah demi langkah:\n1. Temukan sumber terpercaya lain yang melaporkan fakta yang sama\n2. Periksa laporan dari sudut berbeda tentang peristiwa yang sama\n3. Teliti pandangan oposisi dan perspektif kritis\nAlat verifikasi: Google Scholar, database publik, situs fact-checking',
			examplesGood: [
				'Hasil serupa dalam beberapa makalah peer-review',
				'Verifikasi konsistensi dengan statistik pemerintah'
			],
			examplesBad: ['Hanya satu sumber', 'Beberapa artikel menggunakan sumber yang sama']
		},
		'fact-check': {
			title: 'Verifikasi oleh organisasi fact-checking',
			description: 'Verifikasi ada dari institusi fact-checking yang terpercaya',
			guideTitle: '✅ Organisasi Fact-checking yang Terpercaya',
			guideContent:
				'Organisasi internasional: Snopes, PolitiFact, AFP Fact Check, Full Fact (UK), dll.\nOrganisasi Indonesia: Cek Fakta, TurnBackHoax, Mafindo, dll.\nBerbasis media: Departemen fact-checking Kompas, Tempo, detikcom\nMetode verifikasi: Cari informasi terkait di situs fact-checking',
			examplesGood: [
				'Beberapa organisasi fact-checking menilai sebagai "benar"',
				'Verifikasi oleh organisasi internasional'
			],
			examplesBad: [
				'Dinilai sebagai "informasi palsu" oleh fact-checking',
				'Informasi yang tidak terverifikasi'
			]
		},
		'data-verifiable': {
			title: 'Data yang dapat diverifikasi',
			description: 'Data yang mendukung klaim dapat dikonfirmasi secara objektif',
			guideTitle: '📈 Memeriksa Verifikabilitas Data',
			guideContent:
				'Elemen untuk diverifikasi:\n• Sumber data (institusi penelitian, badan statistik, dll.)\n• Metode pengumpulan/periode yang jelas\n• Detail ukuran sampel/target\n• Akses ke data mentah atau terperinci\nTanda peringatan: Hanya "data internal" atau "penelitian proprietary" tanpa detail',
			examplesGood: [
				'Data Badan Pusat Statistik',
				'Data dipublikasikan dalam materi tambahan makalah'
			],
			examplesBad: ['Menurut survei kami (tanpa gambaran survei terperinci)', 'Hanya data internal']
		},
		methodology: {
			title: 'Validitas metode/metodologi',
			description: 'Metodologi penelitian atau survei tepat dan dapat direproduksi',
			guideTitle: '🔬 Mengevaluasi Validitas Metodologi',
			guideContent:
				'Poin evaluasi:\n• Kesesuaian desain penelitian (RCT, studi kohort, dll.)\n• Kehadiran tindakan pencegahan bias\n• Validitas metode statistik\n• Jaminan reprodusibilitas (publikasi protokol, dll.)\nPoin yang dapat diverifikasi oleh non-ahli: Deskripsi metodologi terperinci, perbandingan dengan penelitian lain',
			examplesGood: [
				'Uji coba double-blind',
				'Pengaturan grup kontrol yang tepat',
				'Publikasi protokol'
			],
			examplesBad: [
				'Tidak ada deskripsi metodologi',
				'Pemilihan sampel bias',
				'Metode yang tidak dapat direproduksi'
			]
		},
		// Evaluasi konteks dan bias
		'bias-disclosure': {
			title: 'Pengungkapan konflik kepentingan',
			description: 'Kepentingan finansial, politik, dan personal diungkapkan dengan tepat',
			guideTitle: '💰 Item untuk Diperiksa untuk Konflik Kepentingan',
			guideContent:
				'Kepentingan untuk diungkapkan:\n• Sumber dana penelitian\n• Biaya/pembayaran konsultasi perusahaan\n• Manfaat finansial seperti kepemilikan saham\n• Posisi politik/ideologi\nMetode verifikasi: Cari penyebutan "konflik kepentingan", "COI", "dana"',
			examplesGood: [
				'Penelitian ini dilakukan dengan dana dari Yayasan XX',
				'COI (konflik kepentingan) jelas dinyatakan'
			],
			examplesBad: [
				'Penelitian perusahaan farmasi tanpa pengungkapan COI',
				'Sumber dana tidak jelas'
			]
		},
		'balanced-view': {
			title: 'Perspektif seimbang',
			description: 'Posisi berbeda dan pandangan oposisi juga dipertimbangkan',
			guideTitle: '⚖️ Perspektif untuk Evaluasi Keseimbangan',
			guideContent:
				'Poin periksa:\n• Pengenalan pandangan oposisi/kritis\n• Penyebutan hasil penelitian berbeda\n• Penyebutan ketidakpastian/keterbatasan\n• Pendapat beberapa ahli\nTanda peringatan: Hanya klaim sepihak, cherry-picking informasi yang menguntungkan',
			examplesGood: [
				'Di sisi lain, Profesor XX menunjukkan pandangan berbeda',
				'Perbandingan beberapa hasil penelitian'
			],
			examplesBad: ['Hanya mendaftar bukti pendukung', 'Tidak ada penyebutan pandangan oposisi']
		},
		'context-adequate': {
			title: 'Informasi latar belakang yang cukup',
			description: 'Latar belakang dan konteks yang diperlukan untuk memahami informasi disediakan',
			guideTitle: '🌍 Item untuk Diperiksa untuk Informasi Kontekstual',
			guideContent:
				'Informasi latar belakang yang diperlukan:\n• Latar belakang sejarah/penelitian sebelumnya\n• Hukum/sistem terkait\n• Latar belakang sosial/budaya\n• Tren/perbandingan internasional\nPoin evaluasi: Menyediakan konteks bagi pembaca untuk memahami/menilai dengan benar',
			examplesGood: [
				'Kasus serupa masa lalu',
				'Data perbandingan dengan negara lain juga disajikan',
				'Penjelasan latar belakang sejarah'
			],
			examplesBad: [
				'Hanya angka tunggal',
				'Tidak ada informasi latar belakang',
				'Perbandingan mengabaikan konteks'
			]
		},
		'scope-clear': {
			title: 'Ruang lingkup penerapan yang jelas',
			description:
				'Ruang lingkup yang dapat diterapkan dan keterbatasan informasi ditunjukkan dengan jelas',
			guideTitle: '🎯 Mengklarifikasi Ruang Lingkup Penerapan',
			guideContent:
				'Ruang lingkup untuk diklarifikasi:\n• Orang/wilayah/periode target\n• Keterbatasan/kendala penelitian\n• Tingkat generalisabilitas\n• Kasus yang dikecualikan\nPentingnya: Untuk mencegah generalisasi berlebihan atau penyalahgunaan',
			examplesGood: [
				'Penelitian menargetkan pria dewasa Indonesia, jadi penerapan pada kelompok lain harus hati-hati',
				'Pernyataan keterbatasan yang jelas'
			],
			examplesBad: [
				'Generalisasi tanpa batas hasil penelitian terbatas',
				'Ruang lingkup penerapan tidak jelas'
			]
		}
	}
};

// Teks kepercayaan
export const confidenceTexts = {
	high: 'Keandalan tinggi',
	medium: 'Keandalan sedang',
	low: 'Keandalan rendah',
	veryLow: 'Masalah keandalan'
};

// Saran penilaian
export const judgmentAdvices = {
	accept: 'Adopsi disarankan. Verifikasi yang memadai telah dilakukan.',
	caution: 'Verifikasi tambahan disarankan. Berhati-hatilah dengan keputusan penting.',
	reject: 'Penolakan disarankan. Cari sumber yang lebih terpercaya.',
	lowConfidence: 'Kehati-hatian diperlukan. Verifikasi lebih lanjut diperlukan.'
};

// Teks khusus UI
export const uiTexts = {
	quickStartGuide:
		'Mulai dengan "Evaluasi Kritis" terlebih dahulu untuk memverifikasi keandalan dasar. Saat Anda memeriksa setiap item, skor di sebelah kanan akan diperbarui secara real-time.',
	guideMode: {
		detailed: '📖 Mode Panduan Terperinci',
		normal: '📝 Mode Normal'
	},
	placeholders: {
		title: 'Contoh: Artikel tentang efektivitas vaksin COVID-19',
		description: 'Silakan masukkan detail informasi yang akan dievaluasi...',
		notes: 'Catat pertanyaan, item tambahan untuk diverifikasi, kesan keseluruhan, dll...'
	},
	defaultTitle: 'Periksa_Fakta_',
	menuToggleAriaLabel: 'Toggle menu',
	scoreLabels: {
		critical: '🚨 Kritis',
		detailed: '📝 Terperinci',
		verification: '🔍 Verifikasi',
		context: '🌐 Konteks',
		total: 'Skor Total'
	}
};

export default translations;
