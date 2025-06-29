/**
 * Italian translation file template
 * Italian (it) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'it' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'Da tradurre',
	completeness: 0
};

export const translations: TranslationKeys = {
	common: {
		loading: 'Caricamento...',
		error: 'Si è verificato un errore',
		success: 'Successo',
		cancel: 'Annulla',
		save: 'Salva',
		delete: 'Elimina',
		edit: 'Modifica',
		close: 'Chiudi',
		back: 'Indietro',
		next: 'Avanti',
		previous: 'Precedente',
		search: 'Cerca',
		clear: 'Pulisci',
		reset: 'Ripristina',
		copy: 'Copia',
		download: 'Scarica',
		share: 'Condividi',
		print: 'Stampa',
		export: 'Esporta',
		import: 'Importa',
		settings: 'Impostazioni',
		help: 'Aiuto',
		about: 'Informazioni',
		privacy: 'Privacy',
		terms: 'Termini',
		home: 'Home',
		menu: 'Menu',
		languages: 'Lingue',
		darkMode: 'Modalità Scura',
		lightMode: 'Modalità Chiara',
		systemMode: 'Sistema'
	},
	app: {
		title: 'Lista di Controllo Pratica per Fact-Check',
		subtitle: "Un sistema completo per valutare scientificamente l'affidabilità delle informazioni",
		description:
			"Una lista di controllo per valutare scientificamente e sistematicamente l'affidabilità delle informazioni",
		version: '1.0.0',
		author: 'Team Lista di Controllo Fact-Check',
		copyright: '© 2025 Team Lista di Controllo Fact-Check',
		poweredBy: 'Sviluppato da'
	},
	navigation: {
		home: 'Home',
		about: 'Informazioni',
		help: 'Aiuto & Utilizzo',
		privacy: 'Privacy',
		checklist: 'Lista di Controllo',
		history: 'Cronologia',
		settings: 'Impostazioni'
	},
	checklist: {
		title: 'Informazioni Lista di Controllo',
		description: 'Dettagli lista di controllo',
		newChecklist: 'Nuova Lista di Controllo',
		createChecklist: 'Crea Lista di Controllo',
		editChecklist: 'Modifica Lista di Controllo',
		deleteChecklist: 'Elimina Lista di Controllo',
		completeChecklist: 'Completa Valutazione',
		checklistTitle: 'Titolo',
		checklistDescription: 'Panoramica Informazioni Target',
		targetInfo: 'Informazioni Target',
		targetInfoPlaceholder: "Esempio: Articolo sull'efficacia del vaccino COVID-19",
		evaluationNotes: 'Note di Valutazione & Elementi di Verifica Aggiuntivi',
		evaluationNotesPlaceholder:
			'Registra domande, elementi da verificare, impressioni generali, ecc...',
		score: 'Punteggio di Valutazione',
		confidenceLevel: 'Livello di Fiducia',
		finalJudgment: 'Giudizio Finale',
		judgment: {
			accept: 'Accetta',
			caution: 'Attenzione',
			reject: 'Rifiuta',
			pending: 'In attesa'
		},
		judgmentAdvice: {
			accept: 'Adozione raccomandata. Verifica sufficiente è stata condotta.',
			caution: 'Verifica aggiuntiva raccomandata. Sii cauto con decisioni importanti.',
			reject: 'Rifiuto raccomandato. Cerca fonti più affidabili.'
		}
	},
	categories: {
		critical: {
			name: 'Valutazione Critica (Richiesta)',
			description:
				"Elementi più importanti per determinare l'affidabilità di base delle informazioni",
			emoji: '🚨'
		},
		detailed: {
			name: 'Valutazione Dettagliata (Importante)',
			description: 'Elementi per valutare la qualità e competenza delle informazioni',
			emoji: '📝'
		},
		verification: {
			name: 'Verifica & Controllo Incrociato',
			description: 'Elementi per confermare la verificabilità e supporto delle informazioni',
			emoji: '🔍'
		},
		context: {
			name: 'Valutazione Contesto & Bias',
			description: "Elementi per valutare l'appropriatezza del bias e contesto",
			emoji: '🌐'
		}
	},
	export: {
		title: 'Esporta',
		description: 'Esporta lista di controllo in vari formati',
		format: 'Formato',
		options: 'Opzioni',
		includeGuides: 'Includi Guide',
		includeNotes: 'Includi Note',
		includeSummary: 'Includi Riassunto',
		sectionBreaks: 'Interruzioni Sezione',
		pdfModes: {
			pixelPerfect: 'Pixel Perfect',
			reliableFont: 'Focus Affidabilità Font',
			textBased: 'Basato su Testo'
		},
		formats: {
			pdf: 'PDF',
			html: 'HTML',
			json: 'JSON',
			markdown: 'Markdown'
		},
		progress: {
			initializing: 'Inizializzazione...',
			generating: 'Generazione...',
			processing: 'Elaborazione...',
			finalizing: 'Finalizzazione...',
			completed: 'Completato',
			failed: 'Fallito'
		}
	},
	history: {
		title: 'Cronologia Valutazione',
		description: 'Risultati valutazione passati',
		empty: 'Nessuna cronologia disponibile',
		lastEvaluated: 'Ultima Valutazione',
		viewResults: 'Visualizza Risultati',
		deleteHistory: 'Elimina Cronologia',
		clearAll: 'Pulisci Tutto',
		recent: 'Valutazioni Recenti'
	},
	errors: {
		general: 'Si è verificato un errore imprevisto',
		network: 'Si è verificato un errore di rete',
		storage: 'Si è verificato un errore di archiviazione',
		export: 'Esportazione fallita',
		import: 'Importazione fallita',
		invalidData: 'Dati non validi',
		unsupportedFeature: 'Funzione non supportata',
		permissionDenied: 'Permesso negato',
		fileNotFound: 'File non trovato',
		fileTooLarge: 'File troppo grande',
		invalidFileFormat: 'Formato file non valido'
	},
	success: {
		saved: 'Salvato',
		exported: 'Esportato',
		imported: 'Importato',
		deleted: 'Eliminato',
		copied: 'Copiato',
		shared: 'Condiviso'
	},
	confirmations: {
		delete: 'Sei sicuro di voler eliminare?',
		reset: 'Ripristinare?',
		clearHistory: 'Pulire tutta la cronologia?',
		overwrite: 'Sovrascrivere?',
		discard: 'Scartare le modifiche?'
	},
	help: {
		title: 'Aiuto & Utilizzo',
		overview: 'Panoramica',
		howToUse: 'Come Usare',
		categories: 'Categorie',
		scoring: 'Calcolo Punteggio',
		features: 'Funzioni',
		troubleshooting: 'Risoluzione Problemi',
		faq: 'FAQ'
	},
	accessibility: {
		skipToContent: 'Salta al contenuto',
		mainNavigation: 'Navigazione principale',
		searchForm: 'Modulo di ricerca',
		languageSelector: 'Selettore lingua',
		themeToggle: 'Cambia tema',
		closeDialog: 'Chiudi finestra di dialogo',
		openMenu: 'Apri menu',
		expandSection: 'Espandi sezione',
		collapseSection: 'Comprimi sezione'
	},
	datetime: {
		justNow: 'Proprio ora',
		minutesAgo: 'minuti fa',
		hoursAgo: 'ore fa',
		daysAgo: 'giorni fa',
		weeksAgo: 'settimane fa',
		monthsAgo: 'mesi fa',
		yearsAgo: 'anni fa',
		createdAt: 'Creato il',
		updatedAt: 'Aggiornato il',
		completedAt: 'Completato il'
	},
	units: {
		items: 'elementi',
		percent: '%',
		score: 'punteggio',
		total: 'totale',
		completed: 'completato',
		remaining: 'rimanente',
		of: 'di'
	}
};

export default translations;
