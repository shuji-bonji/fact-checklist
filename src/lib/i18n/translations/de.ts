/**
 * German translation file template
 * German (de) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'de' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'Zu übersetzen',
	completeness: 0
};

export const translations: TranslationKeys = {
	common: {
		loading: 'Lädt...',
		error: 'Ein Fehler ist aufgetreten',
		success: 'Erfolg',
		cancel: 'Abbrechen',
		save: 'Speichern',
		delete: 'Löschen',
		edit: 'Bearbeiten',
		close: 'Schließen',
		back: 'Zurück',
		next: 'Weiter',
		previous: 'Vorherige',
		search: 'Suchen',
		clear: 'Löschen',
		reset: 'Zurücksetzen',
		copy: 'Kopieren',
		download: 'Herunterladen',
		share: 'Teilen',
		print: 'Drucken',
		export: 'Exportieren',
		import: 'Importieren',
		settings: 'Einstellungen',
		help: 'Hilfe',
		about: 'Über',
		privacy: 'Datenschutz',
		terms: 'Bedingungen',
		home: 'Startseite',
		menu: 'Menü',
		languages: 'Sprachen',
		darkMode: 'Dunkler Modus',
		lightMode: 'Heller Modus',
		systemMode: 'System',
		guide: 'Guide',
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
		}
	},
	app: {
		title: 'Praktische Faktencheck-Checkliste',
		subtitle:
			'Ein umfassendes System zur wissenschaftlichen Bewertung der Informationszuverlässigkeit',
		description:
			'Eine Checkliste zur wissenschaftlichen und systematischen Bewertung der Informationszuverlässigkeit',
		version: '1.0.0',
		author: 'Faktencheck-Checkliste Team',
		copyright: '© 2025 Faktencheck-Checkliste Team',
		poweredBy: 'Betrieben von'
	},
	navigation: {
		home: 'Startseite',
		about: 'Über',
		help: 'Hilfe & Nutzung',
		privacy: 'Datenschutz',
		checklist: 'Checkliste',
		history: 'Verlauf',
		settings: 'Einstellungen'
	},
	checklist: {
		title: 'Checklisten-Informationen',
		description: 'Checklisten-Details',
		newChecklist: 'Neue Checkliste',
		createChecklist: 'Checkliste erstellen',
		editChecklist: 'Checkliste bearbeiten',
		deleteChecklist: 'Checkliste löschen',
		completeChecklist: 'Bewertung abschließen',
		checklistTitle: 'Titel',
		checklistDescription: 'Zielinformations-Übersicht',
		targetInfo: 'Zielinformationen',
		targetInfoPlaceholder: 'Beispiel: Artikel über COVID-19-Impfstoff-Wirksamkeit',
		evaluationNotes: 'Bewertungsnotizen & Zusätzliche Verifizierungseinträge',
		evaluationNotesPlaceholder:
			'Notieren Sie Fragen, zu verifizierende Einträge, allgemeine Eindrücke usw...',
		score: 'Bewertungspunktzahl',
		confidenceLevel: 'Vertrauensniveau',
		finalJudgment: 'Endurteil',
		judgment: {
			accept: 'Akzeptieren',
			caution: 'Vorsicht',
			reject: 'Ablehnen',
			pending: 'Ausstehend'
		},
		judgmentAdvice: {
			accept: 'Annahme empfohlen. Ausreichende Verifizierung wurde durchgeführt.',
			caution:
				'Zusätzliche Verifizierung empfohlen. Seien Sie bei wichtigen Entscheidungen vorsichtig.',
			reject: 'Ablehnung empfohlen. Suchen Sie zuverlässigere Quellen.'
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
			name: 'Kritische Bewertung (Erforderlich)',
			description:
				'Wichtigste Einträge zur Bestimmung der grundlegenden Informationszuverlässigkeit',
			emoji: '🚨'
		},
		detailed: {
			name: 'Detaillierte Bewertung (Wichtig)',
			description: 'Einträge zur Bewertung der Informationsqualität und Expertise',
			emoji: '📝'
		},
		verification: {
			name: 'Verifizierung & Kreuzprüfung',
			description: 'Einträge zur Bestätigung der Informationsverifizierbarkeit und Unterstützung',
			emoji: '🔍'
		},
		context: {
			name: 'Kontext & Vorurteilsbewertung',
			description: 'Einträge zur Bewertung der Angemessenheit von Vorurteilen und Kontext',
			emoji: '🌐'
		}
	},
	export: {
		title: 'Exportieren',
		description: 'Checkliste in verschiedenen Formaten exportieren',
		format: 'Format',
		options: 'Optionen',
		includeGuides: 'Leitfäden einbeziehen',
		includeNotes: 'Notizen einbeziehen',
		includeSummary: 'Zusammenfassung einbeziehen',
		sectionBreaks: 'Abschnittsumbrüche',
		pdfModes: {
			pixelPerfect: 'Pixel Perfect',
			reliableFont: 'Schrift-Zuverlässigkeitsfokus',
			textBased: 'Textbasiert'
		},
		formats: {
			pdf: 'PDF',
			html: 'HTML',
			json: 'JSON',
			markdown: 'Markdown'
		},
		progress: {
			initializing: 'Initialisierung...',
			generating: 'Generierung...',
			processing: 'Verarbeitung...',
			finalizing: 'Finalisierung...',
			completed: 'Abgeschlossen',
			failed: 'Fehlgeschlagen'
		}
	},
	history: {
		title: 'Bewertungsverlauf',
		description: 'Vergangene Bewertungsergebnisse',
		empty: 'Kein Verlauf verfügbar',
		lastEvaluated: 'Zuletzt bewertet',
		viewResults: 'Ergebnisse anzeigen',
		deleteHistory: 'Verlauf löschen',
		clearAll: 'Alles löschen',
		recent: 'Kürzliche Bewertungen',
		viewAll: 'Alle anzeigen',
		createFirst: 'Lass uns deine erste Checkliste erstellen!'
	},
	errors: {
		general: 'Ein unerwarteter Fehler ist aufgetreten',
		network: 'Ein Netzwerkfehler ist aufgetreten',
		storage: 'Ein Speicherfehler ist aufgetreten',
		export: 'Export fehlgeschlagen',
		import: 'Import fehlgeschlagen',
		invalidData: 'Ungültige Daten',
		unsupportedFeature: 'Nicht unterstützte Funktion',
		permissionDenied: 'Berechtigung verweigert',
		fileNotFound: 'Datei nicht gefunden',
		fileTooLarge: 'Datei zu groß',
		invalidFileFormat: 'Ungültiges Dateiformat'
	},
	success: {
		saved: 'Gespeichert',
		exported: 'Exportiert',
		imported: 'Importiert',
		deleted: 'Gelöscht',
		copied: 'Kopiert',
		shared: 'Geteilt'
	},
	confirmations: {
		delete: 'Sind Sie sicher, dass Sie löschen möchten?',
		reset: 'Zurücksetzen?',
		clearHistory: 'Gesamten Verlauf löschen?',
		overwrite: 'Überschreiben?',
		discard: 'Änderungen verwerfen?'
	},
	help: {
		title: 'Hilfe & Nutzung',
		overview: 'Übersicht',
		howToUse: 'Wie zu verwenden',
		categories: 'Kategorien',
		scoring: 'Punktzahl-Berechnung',
		features: 'Funktionen',
		troubleshooting: 'Fehlerbehebung',
		faq: 'FAQ'
	},
	accessibility: {
		skipToContent: 'Zum Inhalt springen',
		mainNavigation: 'Hauptnavigation',
		searchForm: 'Suchformular',
		languageSelector: 'Sprachauswahl',
		themeToggle: 'Design umschalten',
		closeDialog: 'Dialog schließen',
		openMenu: 'Menü öffnen',
		expandSection: 'Abschnitt erweitern',
		collapseSection: 'Abschnitt einklappen'
	},
	datetime: {
		justNow: 'Gerade eben',
		minutesAgo: 'vor Minuten',
		hoursAgo: 'vor Stunden',
		daysAgo: 'vor Tagen',
		weeksAgo: 'vor Wochen',
		monthsAgo: 'vor Monaten',
		yearsAgo: 'vor Jahren',
		createdAt: 'Erstellt am',
		updatedAt: 'Aktualisiert am',
		completedAt: 'Abgeschlossen am'
	},
	units: {
		items: 'Einträge',
		percent: '%',
		score: 'Punktzahl',
		total: 'Gesamt',
		completed: 'Abgeschlossen',
		remaining: 'Verbleibend',
		of: 'von'
	},

	// Formulare
	forms: {
		titleLabel: 'Titel',
		titlePlaceholder: 'Geben Sie den Titel der zu bewertenden Informationen oder Quelle ein',
		descriptionLabel: 'Zielinformations-Übersicht',
		descriptionPlaceholder: 'Beschreiben Sie kurz den Inhalt der zu bewertenden Informationen',
		notesLabel: 'Bewertungsnotizen & Zusätzliche Verifizierungseinträge',
		notesPlaceholder: 'Notieren Sie Fragen, zu verifizierende Einträge, allgemeine Eindrücke usw...'
	},

	// UI-Text
	ui: {
		quickStartGuide: '💡 Verwenden Sie diesen Leitfaden, um schnell zu beginnen!',
		guideModeDetailed: '🔍 Detaillierter Leitfaden-Modus',
		guideModeNormal: '📝 Normaler Modus',
		completeEvaluation: 'Bewertung abschließen'
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
