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
    guide: 'Panduan',
    showGuide: 'Tampilkan Panduan',
    rip: {
      high: 'Risiko Tinggi',
      medium: 'Risiko Sedang',
      low: 'Risiko Rendah'
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

  // Metadata khusus halaman
  pages: {
    home: {
      title: 'Fact Checklist - Evaluasi Praktis Keandalan Informasi',
      description:
        'Evaluasi keandalan informasi secara sistematis dengan 20 item pemeriksaan. Nilai informasi dengan mata dan pikiran Anda sendiri tanpa bergantung pada AI atau pemerintah.',
      keywords:
        'pengecekan fakta,verifikasi informasi,evaluasi keandalan,PWA,literasi informasi,penanggulangan misinformasi'
    },
    about: {
      title: 'Tentang Aplikasi Ini - Fact Checklist',
      description:
        'Pelajari latar belakang pengembangan, fitur, dan penggunaan Fact Checklist. Alat untuk menilai keandalan informasi sendiri.',
      keywords:
        'gambaran umum aplikasi,filosofi pengembangan,evaluasi informasi,penilaian keandalan,pengecekan fakta,cara penggunaan'
    },
    help: {
      title: 'Bantuan & Panduan - Fact Checklist',
      description:
        'Instruksi penggunaan terperinci, penjelasan item daftar periksa, dan tips untuk evaluasi informasi yang efektif.',
      keywords: 'cara penggunaan,bantuan,item pemeriksaan,evaluasi informasi,panduan,instruksi'
    },
    privacy: {
      title: 'Kebijakan Privasi - Fact Checklist',
      description:
        'Informasi tentang penanganan data pribadi. Semua data disimpan secara lokal dan tidak dikirim ke luar.',
      keywords: 'privasi,informasi pribadi,perlindungan data,penyimpanan lokal,keamanan'
    },
    intro: {
      title: 'Daftar Periksa Fakta Praktis untuk Bertahan di Dunia Penuh Misinformasi',
      description:
        'Daftar periksa sederhana untuk mengevaluasi keandalan informasi dengan mata dan pikiran Anda sendiri saat regulasi media sosial pemerintah berkembang. Evaluasi informasi secara ilmiah dan sistematis tanpa mempercayai AI atau media secara membabi buta.',
      keywords:
        'pengecekan fakta,verifikasi informasi,evaluasi keandalan,PWA,literasi informasi,penanggulangan misinformasi,regulasi media sosial,kontrol informasi,kualitas informasi,pengecekan fakta AI'
    }
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
    completed: 'Selesai',
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
    },
    evaluationCompleted: '✓ Evaluasi Selesai!',
    evaluationCompletedDescription: 'Anda dapat meninjau hasil evaluasi daftar periksa.',
    evaluationResults: 'Hasil Evaluasi',
    totalScore: 'Skor Total',
    itemsDetail: 'Detail Item',
    recommendedActions: 'Tindakan yang Disarankan',
    improvementTips: 'Untuk meningkatkan keandalan',
    checkUncheckedItems: 'Periksa item yang belum dicentang',
    additionalSourceResearch: 'Penelitian sumber tambahan',
    expertConsultation: 'Konsultasi ahli',
    factCheckOrganizations: 'Gunakan organisasi pengecekan fakta',
    statistics: 'Statistik',
    checkedItems: 'Diperiksa',
    uncheckedItems: 'Belum diperiksa',
    completionRate: 'Tingkat Penyelesaian',
    actions: 'Tindakan',
    exportShare: 'Ekspor & Bagikan',
    reEdit: 'Edit Ulang'
  },
  categories: {
    critical: {
      name: 'Evaluasi Kritis (Diperlukan)',
      description: 'Item paling penting untuk menentukan keandalan dasar informasi',
      emoji: '🚨',
      short: 'Kritis'
    },
    detailed: {
      name: 'Evaluasi Detail (Penting)',
      description: 'Item untuk mengevaluasi kualitas dan keahlian informasi',
      emoji: '📝',
      short: 'Detail'
    },
    verification: {
      name: 'Verifikasi & Pemeriksaan Silang',
      description: 'Item untuk mengkonfirmasi kemampuan verifikasi dan dukungan informasi',
      emoji: '🔍',
      short: 'Verifikasi'
    },
    context: {
      name: 'Evaluasi Konteks & Bias',
      description: 'Item untuk mengevaluasi kesesuaian bias dan konteks',
      emoji: '🌐',
      short: 'Konteks'
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
    pdfMode: 'Mode Generasi PDF',
    pdfModes: {
      pixelPerfect: 'Piksel Sempurna',
      pixelPerfectDescription: 'Kecocokan tampilan browser yang tepat',
      reliableFont: 'Fokus Keandalan Font',
      reliableFontDescription: 'Penyematan font multibahasa yang andal',
      textBased: 'Berbasis Teks',
      textBasedDescription: 'PDF ringan yang dapat dicari'
    },
    formats: {
      pdf: 'PDF',
      html: 'HTML',
      json: 'JSON',
      markdown: 'Markdown'
    },
    progress: {
      starting: 'Memulai...',
      initializing: 'Menginisialisasi...',
      generating: 'Menghasilkan...',
      processing: 'Memproses...',
      saving: 'Menyimpan...',
      finalizing: 'Menyelesaikan...',
      completed: 'Selesai',
      failed: 'Gagal'
    },
    generatedAt: 'Dihasilkan pada',
    summaryTable: {
      item: 'Item',
      value: 'Nilai'
    },
    table: {
      section: 'Bagian',
      completionRate: 'Tingkat Penyelesaian',
      completedItems: 'Item Selesai'
    },
    sectionCompletionRates: 'Tingkat Penyelesaian per Bagian',
    achievementStatus: 'Status Pencapaian',
    completionStatus: 'Status Penyelesaian',
    goodExamples: 'Contoh Baik',
    badExamples: 'Contoh Buruk',
    completed: 'Selesai',
    notCompleted: 'Belum Selesai',
    items: 'Item',
    examples: 'Contoh',
    metadata: {
      title: 'Metadata',
      created: 'Dibuat',
      score: 'Skor',
      confidence: 'Kepercayaan',
      language: 'Bahasa',
      judgment: 'Penilaian Akhir'
    },
    summary: {
      title: 'Ringkasan Evaluasi',
      totalScore: 'Skor Total',
      completionRate: 'Tingkat Penyelesaian',
      confidenceLevel: 'Tingkat Kepercayaan',
      checkedItems: 'Item yang Diperiksa',
      result: 'Hasil Evaluasi',
      confidenceText: 'Teks Kepercayaan',
      judgmentAdvice: 'Saran Penilaian'
    },
    clipboardTitle: 'Hasil Evaluasi Pemeriksaan Fakta',
    sectionCompletion: 'Tingkat Penyelesaian per Bagian',
    notes: 'Catatan Evaluasi',
    judgment: {
      accept: 'Direkomendasikan',
      caution: 'Perhatian Diperlukan',
      reject: 'Tidak Direkomendasikan',
      notEvaluated: 'Tidak Dievaluasi'
    },
    csv: {
      id: 'ID',
      title: 'Judul',
      description: 'Deskripsi',
      checked: 'Diperiksa',
      category: 'Kategori'
    },
    error: {
      pdfGeneration: 'Pembuatan PDF gagal'
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
    subtitle: 'Panduan lengkap untuk menggunakan daftar periksa fakta',
    tableOfContents: 'Daftar Isi',
    navigation: {
      overview: 'Ringkasan',
      usage: 'Penggunaan',
      categories: 'Kategori',
      scoring: 'Penilaian',
      features: 'Fitur',
      privacy: 'Privasi',
      troubleshooting: 'Pemecahan Masalah'
    },
    sections: {
      overview: {
        title: 'Ringkasan Aplikasi',
        emoji: '📋',
        description: 'Penggunaan dasar daftar periksa fakta',
        content:
          'Aplikasi ini adalah alat untuk mengevaluasi kredibilitas informasi di internet secara ilmiah dan sistematis.',
        subSections: {
          features: {
            title: 'Fitur Utama',
            content:
              '• Privasi lengkap: semua data disimpan secara lokal\n• Berfungsi offline\n• Evaluasi ilmiah\n• Manajemen riwayat'
          },
          targetUsers: {
            title: 'Pengguna Target',
            content:
              'Jurnalis, peneliti, mahasiswa, dan siapa saja yang tertarik mengevaluasi kredibilitas informasi'
          }
        }
      },
      usage: {
        title: 'Penggunaan',
        emoji: '🔍',
        description: 'Panduan langkah demi langkah untuk menggunakan aplikasi',
        content:
          'Ikuti langkah-langkah ini untuk mengevaluasi kredibilitas informasi secara sistematis.',
        subSections: {
          step1: {
            title: 'Langkah 1: Masukkan informasi',
            content: 'Masukkan judul dan deskripsi informasi yang ingin Anda evaluasi'
          },
          step2: {
            title: 'Langkah 2: Evaluasi elemen',
            content: 'Evaluasi setiap elemen daftar berdasarkan bukti yang tersedia'
          },
          step3: {
            title: 'Langkah 3: Tinjau hasil',
            content: 'Tinjau hasil yang dihitung dan tingkat kepercayaan'
          },
          step4: {
            title: 'Langkah 4: Keputusan akhir',
            content: 'Buat keputusan akhir berdasarkan evaluasi: terima, hati-hati, atau tolak'
          }
        }
      },
      categories: {
        title: 'Kategori Evaluasi',
        emoji: '📊',
        description: 'Empat kategori utama evaluasi',
        content:
          'Elemen evaluasi diorganisir dalam empat kategori utama untuk memastikan evaluasi yang komprehensif.',
        subSections: {
          critical: {
            title: 'Evaluasi Kritis',
            content: 'Elemen paling penting untuk menentukan kredibilitas dasar informasi'
          },
          detailed: {
            title: 'Evaluasi Rinci',
            content: 'Elemen untuk mengevaluasi kualitas dan keahlian informasi'
          },
          verification: {
            title: 'Verifikasi dan Cross-checking',
            content: 'Elemen untuk mengonfirmasi verifikabilitas dan dukungan informasi'
          },
          context: {
            title: 'Evaluasi Konteks dan Bias',
            content: 'Elemen untuk mengevaluasi kesesuaian bias dan konteks'
          }
        }
      },
      scoring: {
        title: 'Sistem Penilaian',
        emoji: '🎯',
        description: 'Bagaimana skor dan tingkat kepercayaan dihitung',
        content: 'Skor dihitung berdasarkan jumlah elemen yang terpenuhi dari total elemen.',
        subSections: {
          calculation: {
            title: 'Metode Perhitungan',
            content: 'Skor = (jumlah elemen terpenuhi / total elemen) × 100'
          },
          criteria: {
            title: 'Kriteria Evaluasi',
            content:
              '• 80%+: Kredibilitas tinggi\n• 60-79%: Kredibilitas sedang\n• 40-59%: Kredibilitas rendah\n• <40%: Masalah kredibilitas'
          },
          finalJudgment: {
            title: 'Keputusan Akhir',
            content:
              'Gunakan skor sebagai panduan, tetapi keputusan akhir bergantung pada penilaian pribadi Anda'
          }
        }
      },
      features: {
        title: 'Fitur',
        emoji: '⭐',
        description: 'Fitur canggih aplikasi',
        content:
          'Aplikasi menyediakan beberapa fitur canggih untuk meningkatkan pengalaman pengguna.',
        subSections: {
          detailedGuide: {
            title: 'Panduan Rinci',
            content:
              'Setiap elemen evaluasi berisi panduan rinci dan contoh praktis untuk membantu evaluasi Anda'
          },
          exportFunction: {
            title: 'Fungsi Ekspor',
            content:
              'Anda dapat mengekspor hasil evaluasi dalam berbagai format (PDF, HTML, JSON, Markdown)',
            exportFormats: {
              title: 'Format Ekspor',
              formats: {
                pdf: {
                  name: 'PDF',
                  features: 'Format profesional untuk cetak dan berbagi',
                  usage: 'Cocok untuk laporan resmi dan pengarsipan'
                },
                html: {
                  name: 'HTML',
                  features: 'Tampilan interaktif di browser',
                  usage: 'Cocok untuk berbagi melalui web'
                },
                json: {
                  name: 'JSON',
                  features: 'Format data terstruktur',
                  usage: 'Cocok untuk analisis otomatis dan impor'
                },
                markdown: {
                  name: 'Markdown',
                  features: 'Format teks fleksibel',
                  usage: 'Cocok untuk blog dan dokumentasi'
                }
              }
            },
            pdfModes: {
              title: 'Mode PDF',
              modes: {
                pixelPerfect: {
                  name: 'Pixel Perfect',
                  subtitle: 'Kualitas visual terbaik',
                  description: 'Mempertahankan desain asli dengan akurasi tinggi',
                  features: 'Desain sesuai antarmuka, warna akurat, font jelas'
                },
                reliableFont: {
                  name: 'Font Andal',
                  description: 'Fokus pada kejelasan teks dan keterbacaan',
                  features: 'Font yang dioptimalkan, performa cepat, ukuran file lebih kecil'
                },
                textBased: {
                  name: 'Berbasis Teks',
                  subtitle: 'Teks yang dapat dicari dan disalin',
                  description: 'Menghasilkan PDF murni tekstual yang dapat dicari',
                  features: 'Teks dapat dicari, ukuran kecil, kompatibilitas tinggi'
                }
              }
            },
            exportOptions: {
              title: 'Opsi Ekspor',
              options: {
                summary: {
                  name: 'Sertakan Ringkasan',
                  description: 'Menambahkan ringkasan hasil dan evaluasi',
                  formats: 'Tersedia di semua format'
                },
                guides: {
                  name: 'Sertakan Panduan',
                  description: 'Menambahkan panduan rinci untuk setiap elemen',
                  formats: 'Tersedia di PDF dan HTML'
                },
                notes: {
                  name: 'Sertakan Catatan',
                  description: 'Menambahkan catatan pribadi Anda',
                  formats: 'Tersedia di semua format'
                },
                sectionBreaks: {
                  name: 'Pemisah Bagian',
                  description: 'Menambahkan halaman terpisah untuk bagian',
                  formats: 'Hanya tersedia di PDF'
                }
              }
            },
            exportNote:
              'Ingat: semua ekspor dilakukan secara lokal di perangkat Anda tanpa transfer data'
          },
          historyManagement: {
            title: 'Manajemen Riwayat',
            content:
              'Aplikasi menyimpan 5 evaluasi terakhir secara otomatis dan memungkinkan Anda mengakses dan mengelolanya'
          },
          pwaSupport: {
            title: 'Dukungan PWA',
            content: 'Aplikasi dapat diinstal di perangkat dan bekerja sepenuhnya offline'
          }
        }
      },
      privacy: {
        title: 'Privasi dan Keamanan',
        emoji: '🔒',
        description: 'Bagaimana kami melindungi privasi dan data Anda',
        content:
          'Kami berkomitmen melindungi privasi Anda melalui desain yang mengutamakan privasi.',
        subSections: {
          localStorage: {
            title: 'Penyimpanan Lokal',
            content:
              'Semua data Anda disimpan secara lokal di browser dan tidak pernah meninggalkan perangkat Anda'
          },
          security: {
            title: 'Keamanan',
            content: 'Tidak ada koneksi eksternal atau pelacakan pengguna'
          },
          dataDeletion: {
            title: 'Penghapusan Data',
            content: 'Anda dapat menghapus semua data kapan saja dengan menghapus data browser'
          }
        }
      },
      troubleshooting: {
        title: 'Pemecahan Masalah',
        emoji: '🔧',
        description: 'Solusi untuk masalah umum',
        content: 'Jika Anda mengalami masalah, coba solusi umum ini.',
        subSections: {
          dataNotSaved: {
            title: 'Data tidak tersimpan',
            content: 'Pastikan penyimpanan lokal diaktifkan di browser dan browser terbaru'
          },
          scoreNotDisplayed: {
            title: 'Skor tidak ditampilkan',
            content: 'Pastikan Anda telah menyelesaikan evaluasi semua elemen yang diperlukan'
          },
          exportFailed: {
            title: 'Ekspor gagal',
            content: 'Pastikan unduhan diizinkan di browser dan ruang yang cukup tersedia'
          },
          otherIssues: {
            title: 'Masalah lain',
            content: 'Coba refresh halaman atau bersihkan cache browser'
          }
        }
      }
    }
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

  // Kebijakan Privasi
  privacy: {
    title: 'Kebijakan Privasi',
    subtitle: 'Komitmen kami melindungi privasi Anda',
    lastUpdated: 'Terakhir diperbarui: 1 Januari 2025',
    introduction: {
      title: 'Desain Mengutamakan Privasi',
      content:
        'Daftar Periksa Fakta dirancang dengan prinsip privasi sebagai inti. Semua pemrosesan data dilakukan secara lokal di perangkat Anda, tanpa komunikasi server atau pengumpulan data.'
    },
    dataCollection: {
      title: 'Pengumpulan Data',
      description: 'Kami tidak mengumpulkan data pribadi atau statistik penggunaan apapun.',
      details: [
        'Tidak ada komunikasi server - semua pemrosesan dilakukan secara lokal',
        'Tidak ada cookie pelacakan atau analitik yang dipasang',
        'Tidak ada informasi pribadi yang dikumpulkan',
        'Tidak ada data penggunaan yang dikirim'
      ]
    },
    localStorage: {
      title: 'Penggunaan Penyimpanan Lokal',
      description: 'Data hanya disimpan di browser Anda untuk fungsi aplikasi.',
      details: [
        'Data evaluasi disimpan di localStorage browser',
        'Preferensi bahasa disimpan secara lokal',
        'Tidak ada sinkronisasi atau pencadangan cloud',
        'Data tetap berada di perangkat Anda'
      ]
    },
    offlineFunctionality: {
      title: 'Fungsionalitas Offline',
      description: 'Aplikasi beroperasi sepenuhnya offline tanpa permintaan jaringan.',
      details: [
        'Progressive Web App dengan service worker',
        'Semua sumber daya di-cache secara lokal',
        'Tidak ada panggilan API eksternal atau pengambilan data',
        'Fungsionalitas penuh tanpa koneksi internet'
      ]
    },
    securityMeasures: {
      title: 'Langkah-langkah Keamanan',
      description: 'Langkah-langkah keamanan bawaan melindungi data dan privasi Anda.',
      details: [
        'Content Security Policy (CSP) diterapkan',
        'Tidak ada skrip pihak ketiga atau pelacakan',
        'Mengikuti praktik pengkodean yang aman',
        'Pembaruan keamanan reguler'
      ]
    },
    dataRetention: {
      title: 'Retensi Data',
      description: 'Anda memiliki kontrol penuh atas retensi data.',
      details: [
        'Data bertahan hanya selama Anda menyimpannya',
        'Mudah dihapus melalui pengaturan browser',
        'Tidak ada kedaluwarsa data otomatis',
        'Instruksi jelas untuk penghapusan data'
      ]
    },
    policyUpdates: {
      title: 'Pembaruan Kebijakan',
      description: 'Setiap perubahan pada kebijakan privasi ini akan dikomunikasikan dengan jelas.',
      details: [
        'Pembaruan diumumkan di repositori GitHub',
        'Riwayat versi dipelihara',
        'Pemberitahuan jelas untuk perubahan signifikan',
        'Penggunaan berkelanjutan berarti persetujuan'
      ]
    },
    contact: {
      title: 'Informasi Kontak',
      content:
        'Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui ',
      githubText: 'GitHub Issues',
      suffix: '.'
    }
  },

  // Tentang Aplikasi
  about: {
    title: 'Tentang Aplikasi',
    subtitle: 'Pelajari sistem pengecekan fakta komprehensif kami',
    hero: {
      title: 'Daftar Periksa Fakta Praktis',
      subtitle:
        'Aplikasi Web Progresif (PWA) untuk mengevaluasi keandalan informasi secara ilmiah dan sistematis',
      description: [
        'Di era yang dibanjiri misinformasi dan konten menyesatkan, alat praktis ini mendukung peningkatan literasi informasi.',
        'Dengan memeriksa 20 item dalam 4 kategori, ini mengukur keandalan informasi dan mendukung penilaian objektif.'
      ],
      startButton: 'Mulai Sekarang'
    },
    sections: {
      features: 'Fitur',
      howItWorks: 'Cara Kerja',
      categories: 'Kategori Evaluasi',
      techStack: 'Teknologi',
      performance: 'Performa'
    },
    sectionDescriptions: {
      howItWorks: 'Evaluasi keandalan informasi dalam 4 langkah sederhana',
      categories: 'Evaluasi informasi multidimensional melalui 4 kategori',
      techStack: 'Aplikasi berkinerja tinggi yang dibangun dengan teknologi terdepan',
      performance: 'Skor berkualitas tinggi dari audit Lighthouse'
    },
    stats: {
      performance: 'Performa',
      accessibility: 'Aksesibilitas',
      bestPractices: 'Praktik Terbaik',
      seo: 'SEO'
    },
    cta: {
      title: 'Mulai Sekarang',
      description: 'Siap untuk mengevaluasi keandalan informasi secara ilmiah dan sistematis?',
      startButton: 'Mulai Evaluasi',
      helpButton: 'Pelajari Lebih Lanjut'
    },
    features: {
      privacy: {
        title: 'Mengutamakan Privasi',
        description:
          'Semua data tetap berada di perangkat Anda, tanpa pelacakan atau pengumpulan data',
        details: [
          'Tidak ada komunikasi server - semua pemrosesan dilakukan secara lokal',
          'Tidak ada pelacakan atau analitik yang dipasang',
          'Semua data hanya disimpan di localStorage browser',
          'Jaminan perlindungan privasi lengkap'
        ]
      },
      offline: {
        title: 'Fungsionalitas Offline',
        description: 'Beroperasi sepenuhnya offline sebagai Progressive Web App',
        details: [
          'Fungsionalitas penuh tanpa koneksi internet',
          'Dapat dipasang sebagai aplikasi desktop/mobile',
          'Service worker menyediakan caching offline',
          'Startup cepat dan performa responsif'
        ]
      },
      scientific: {
        title: 'Metodologi Ilmiah',
        description: 'Sistem evaluasi berbasis bukti mengikuti standar akademik',
        details: [
          'Daftar periksa terstruktur 20 item dalam 4 kategori',
          'Penilaian kuantitatif dengan tingkat kepercayaan',
          'Berdasarkan standar jurnalisme dan penelitian akademik',
          'Proses evaluasi objektif dan dapat direproduksi'
        ]
      },
      export: {
        title: 'Ekspor Multi-Format',
        description: 'Ekspor hasil evaluasi dalam berbagai format untuk berbagi dan pengarsipan',
        details: [
          'Ekspor PDF dengan dukungan font Indonesia',
          'Format HTML untuk berbagi web',
          'JSON untuk pertukaran data',
          'Markdown untuk dokumentasi'
        ]
      },
      history: {
        title: 'Riwayat Evaluasi',
        description: 'Menyimpan dan mengelola evaluasi masa lalu secara otomatis',
        details: [
          'Penyimpanan otomatis evaluasi yang selesai',
          'Akses cepat ke evaluasi terbaru',
          'Kemampuan analisis perbandingan',
          'Ekspor data historis'
        ]
      },
      support: {
        title: 'Dukungan Aksesibilitas',
        description: 'Dirancang untuk akses universal dan kegunaan',
        details: [
          'Kompatibilitas screen reader',
          'Dukungan navigasi keyboard',
          'Mode kontras tinggi tersedia',
          'Desain responsif untuk semua perangkat'
        ]
      }
    },
    steps: {
      step1: {
        title: 'Masukkan Informasi',
        description: 'Masukkan judul dan ikhtisar informasi yang akan dievaluasi'
      },
      step2: {
        title: 'Evaluasi Sistematis',
        description: 'Evaluasi melalui daftar periksa 20 item dalam 4 kategori'
      },
      step3: {
        title: 'Tinjau Skor',
        description: 'Tinjau skor keandalan dan tingkat kepercayaan yang dihitung otomatis'
      },
      step4: {
        title: 'Keputusan Akhir',
        description: 'Buat keputusan akhir dan ekspor hasil sesuai kebutuhan'
      }
    },
    categories: {
      critical: {
        name: 'Evaluasi Kritis',
        description: 'Item kunci untuk penilaian keandalan dasar',
        items: 6
      },
      detailed: {
        name: 'Evaluasi Detail',
        description: 'Penilaian kualitas dan profesionalisme mendalam',
        items: 5
      },
      verification: {
        name: 'Verifikasi & Pengecekan Silang',
        description: 'Penilaian verifikasi dan bukti pendukung',
        items: 5
      },
      context: {
        name: 'Konteks & Bias',
        description: 'Penilaian kesesuaian konteks dan bias',
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: 'Framework reaktif terbaru dengan runes untuk performa optimal'
      },
      framework: {
        name: 'SvelteKit',
        description: 'Framework full-stack dengan dukungan generasi statis'
      },
      language: {
        name: 'TypeScript',
        description: 'Pengembangan type-safe dengan konfigurasi ketat'
      },
      styling: {
        name: 'CSS Kustom',
        description: 'Gaya modern dengan properti kustom CSS dan mode gelap'
      },
      pwa: {
        name: 'Progressive Web App',
        description: 'Aplikasi yang dapat dipasang dengan fungsionalitas offline'
      },
      export: {
        name: 'Ekspor Multi-Format',
        description: 'Kemampuan ekspor PDF, HTML, JSON, Markdown'
      }
    }
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
  },

  // Intro page
  intro: {
    meta: {
      title:
        'Daftar Periksa Praktis Pemeriksaan Fakta untuk Bertahan di Dunia yang Penuh Disinformasi',
      keywords:
        'pemeriksaan fakta,verifikasi informasi,penilaian keandalan,PWA,literasi informasi,penanggulangan disinformasi'
    },
    hero: {
      title:
        'Daftar Periksa Praktis Pemeriksaan Fakta untuk Bertahan di Dunia yang Penuh Disinformasi',
      subtitle:
        'Daftar periksa sederhana untuk mengevaluasi keandalan informasi dengan mata dan pikiran Anda sendiri saat regulasi media sosial pemerintah berkembang'
    },
    cta: {
      startNow: 'Mulai Periksa Sekarang',
      useChecklist: 'Gunakan Daftar Periksa',
      learnMore: 'Pelajari Lebih Lanjut'
    },
    sections: {
      regulation: {
        title: 'Regulasi Media Sosial Pemerintah dan Realitas Kontrol Informasi',
        quote:
          'Di bawah tujuan mulia "menghapus disinformasi", siapa yang memutuskan apa yang "benar"?',
        content1:
          'Regulasi media sosial yang berkembang di seluruh dunia mengklaim sebagai "tindakan anti-disinformasi", tetapi pada kenyataannya, mereka berisiko menjadi alat untuk mengontrol informasi yang tidak nyaman bagi pemerintah.',
        content2:
          'Yang kita butuhkan adalah kemampuan untuk menilai keandalan informasi sendiri, tanpa bergantung pada pemerintah, media mainstream, atau AI.'
      },
      balance: {
        title: 'Kontrol Ucapan vs. Kualitas Informasi: Pendekatan Seimbang',
        control: {
          title: 'Risiko Kontrol',
          content:
            'Penentuan sewenang-wenang "kebenaran" oleh kekuasaan, penindasan pendapat yang beragam, hambatan terhadap inovasi'
        },
        quality: {
          title: 'Peningkatan Kualitas',
          content:
            'Meningkatkan literasi informasi individu, memupuk pemikiran kritis, memperkuat kemampuan penilaian diri'
        },
        conclusion:
          'Daripada bergantung pada regulasi, setiap orang mengembangkan kemampuan untuk membedakan informasi membentuk fondasi masyarakat yang sehat.'
      },
      aiLimitations: {
        title: 'Keterbatasan Pemeriksaan Fakta AI',
        lead: 'Meskipun AI seperti ChatGPT dan Gemini nyaman, mereka memiliki keterbatasan signifikan untuk pemeriksaan fakta:',
        point1: 'Bias data pelatihan: AI mencerminkan bias yang melekat dalam data pelatihannya',
        point2:
          'Pemahaman konteks yang tidak lengkap: Salah mengartikan nuansa halus, sarkasme, dan konteks budaya',
        point3:
          'Ketergantungan berlebihan pada otoritas: Menilai tanpa kritis informasi dari media mainstream dan lembaga pemerintah sebagai "benar"',
        conclusion:
          'Meskipun AI dapat membantu sebagai referensi, penilaian akhir harus dibuat oleh manusia.'
      },
      features: {
        title: 'Fitur-fitur Aplikasi Ini'
      }
    },
    features: {
      systematic: {
        title: 'Evaluasi Sistematis',
        description:
          'Penilaian komprehensif dari sumber informasi hingga struktur logis dengan daftar periksa 20 item'
      },
      privacy: {
        title: 'Privasi Lengkap',
        description: 'Semua data disimpan di perangkat. Tidak ada transmisi ke server eksternal'
      },
      pwa: {
        title: 'Dukungan Offline',
        description: 'Tersedia bahkan tanpa koneksi internet berkat teknologi PWA'
      },
      multilingual: {
        title: 'Dukungan 12 Bahasa',
        description: 'Dukungan penuh untuk 12 bahasa termasuk Jepang, Inggris, dan Mandarin'
      }
    },
    finalCta: {
      title: 'Mari Mulai Sekarang',
      subtitle: 'Latih penilaian Anda untuk menghindari tenggelam di lautan informasi'
    },
    share: {
      title: 'Bagikan Alat Ini'
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
