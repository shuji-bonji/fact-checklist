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
		systemMode: 'System'
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
		recent: 'Kürzliche Bewertungen'
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
	}
};

export default translations;
