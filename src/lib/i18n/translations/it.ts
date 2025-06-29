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
		systemMode: 'Sistema',
		guide: 'Guide',
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
		}
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
		recent: 'Valutazioni Recenti',
		viewAll: 'Visualizza Tutto',
		createFirst: 'Creiamo la tua prima lista di controllo!'
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
	},

	// Moduli form
	forms: {
		titleLabel: 'Titolo',
		titlePlaceholder: 'Inserisci il titolo delle informazioni o della fonte da valutare',
		descriptionLabel: 'Panoramica Informazioni Target',
		descriptionPlaceholder: 'Descrivi brevemente il contenuto delle informazioni da valutare',
		notesLabel: 'Note di Valutazione & Elementi di Verifica Aggiuntivi',
		notesPlaceholder: 'Registra domande, elementi da verificare, impressioni generali, ecc...'
	},

	// Testo UI
	ui: {
		quickStartGuide: '💡 Usa questa guida per iniziare rapidamente!',
		guideModeDetailed: '🔍 Modalità Guida Dettagliata',
		guideModeNormal: '📝 Modalità Normale',
		completeEvaluation: 'Completa Valutazione'
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
