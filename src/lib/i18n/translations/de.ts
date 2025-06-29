/**
 * German translation file template
 * German (de) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'de' as const,
	version: '1.0.0',
	lastUpdated: '2025-06-29',
	translator: 'Claude Code',
	completeness: 100
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

	// Checklist items - German translations
	checklistItems: {
		'source-authority': {
			title: 'Veröffentlichung von maßgeblichen Quellen',
			description:
				'Behörden, Hochschulen, Berufsverbände, Peer-Review-Publikationen, seriöse Medien, etc.',
			guideTitle: '🏛️ Kriterien für maßgebliche Quellen',
			guideContent:
				'Staatliche/Öffentliche Institutionen: Ministerien, Statistikbehörden, Bundesbank, Gerichte, etc. Wissenschaftliche Institutionen: Universitäten, Max-Planck-Institute, Fraunhofer-Gesellschaft. Berufsverbände: Ärztekammern, Anwaltskammern, Ingenieurverbände. Qualitätsmedien: ARD, ZDF, Zeit, FAZ, Süddeutsche Zeitung, Spiegel.',
			examplesGood: [
				'RKI-Statistiken zur Pandemie',
				'Charité-Forschungsergebnisse in Nature',
				'Bundesbank-Berichte zur Inflation'
			],
			examplesBad: [
				'Persönlicher Blog ohne Impressum',
				'Anonyme Forenbeiträge',
				'Telegram-Kanäle ohne Quellennachweise'
			]
		},
		'source-primary': {
			title: 'Primärquellen-Verifizierung',
			description: 'Direkte Informationen von der Quelle, nicht Hörensagen oder Sekundärberichte',
			guideTitle: '🎯 Wie man Primärquellen identifiziert',
			guideContent:
				'Primärquellen: Originalforschung der Autoren selbst, Augenzeugenberichte, Behördenverordnungen, Pressemitteilungen der betroffenen Organisationen. Sekundärquellen: Berichte über Forschung, Interpretationen durch Dritte, Zusammenfassungen ohne Zugang zu Originaldaten.',
			examplesGood: [
				'Vom Forscher selbst veröffentlichte Studie',
				'Quartalsberichte direkt vom Unternehmen',
				'Polizeiberichte zu Ereignissen'
			],
			examplesBad: [
				'"Laut Experten" ohne Namensnennung',
				'"Eine Studie besagt" ohne Quellenangabe',
				'Berichte über Berichte ohne Originalzugang'
			]
		},
		'source-multiple': {
			title: 'Mehrere unabhängige Quellen',
			description:
				'Ähnliche Berichte oder Bestätigungen von verschiedenen Positionen/Organisationen',
			guideTitle: '🔄 Wie man Unabhängigkeit überprüft',
			guideContent:
				'Unabhängige Quellen: Quellen mit unterschiedlichen Organisationen, Finanzierung und Interessen. Verschiedene Medienhäuser, verschiedene Forschungsgruppen, verschiedene Länder/Regionen. Wichtig: Nicht nur verschiedene Artikel derselben Nachrichtenagentur.',
			examplesGood: [
				'Regierungsankündigung + Universitätsforschung + Medienberichte',
				'Deutsche und internationale Studien zum selben Thema',
				'Bestätigung durch mehrere Fachgesellschaften'
			],
			examplesBad: [
				'Mehrere Medien derselben Verlagsgruppe',
				'Nur dpa-Meldungen in verschiedenen Zeitungen',
				'Berichte, die alle auf dieselbe Quelle zurückgehen'
			]
		},
		'warning-anonymous': {
			title: 'Keine anonymen oder unzugewiesenen Informationen',
			description: 'Urheber/Herausgeber können klar identifiziert werden',
			guideTitle: '🔍 Hauptpunkte für Quellenidentifikation',
			guideContent:
				'Erforderliche Informationen: Vollständiger Name des Autors, institutionelle Zugehörigkeit, Kontaktinformationen oder Impressum. Bei Journalisten: Redaktion und Kontaktdaten. Bei Forschern: Institution und Abteilung. Warnsignale: "Ein Experte", "Insider", "Anonyme Quelle" ohne Begründung.',
			examplesGood: [
				'Laut Prof. Dr. Schmidt (Charité Berlin)',
				'Studie von Dr. Müller, Uniklinik München',
				'Artikel von Maria Weber, Zeit-Redakteurin'
			],
			examplesBad: [
				'"Laut einem Arzt"',
				'"Anonymer Experte behauptet"',
				'"Insider aus der Regierung"'
			]
		},
		'warning-sensational': {
			title: 'Wenige sensationelle oder aufwiegelnde Ausdrücke',
			description: 'Ruhige und objektive Beschreibung, keine übertriebenen emotionalen Appelle',
			guideTitle: '⚠️ Wie man sensationelle Ausdrücke identifiziert',
			guideContent:
				'Warnausdrücke: "Absolut", "Komplett", "Schockierend", "Verblüffend", "Nie dagewesenes", "Sensation", "Unglaublich", "Geheimnis", "Verschwörung". Emotionale Manipulation: Übertriebene Adjektive, Großschreibung, viele Ausrufezeichen, apokalyptische Sprache.',
			examplesGood: [
				'Studie zeigte Verbesserung bei 75% der Probanden',
				'Forschung deutet auf Zusammenhang hin',
				'Experten bewerten Maßnahme als wirksam'
			],
			examplesBad: [
				'SCHOCKIERENDE Wahrheit, die Ärzte verschweigen!',
				'UNFASSBARE Entdeckung verändert alles!',
				'Absolut tödliche Gefahr für JEDEN!'
			]
		},
		'warning-logical': {
			title: 'Keine logischen Widersprüche',
			description: 'Inhalt ist konsistent ohne offensichtliche logische Sprünge',
			guideTitle: '🧠 Wie man logische Konsistenz überprüft',
			guideContent:
				'Prüfen Sie, ob Prämissen und Schlussfolgerungen ordnungsgemäß verbunden sind. Häufige Fehler: Korrelation mit Kausalität verwechseln, Verallgemeinerung von Einzelfällen, Zirkelschlüsse, falsche Dichotomien ("Entweder-Oder" ohne Alternativen).',
			examplesGood: [
				'Statistisch signifikante Analyse unter Berücksichtigung anderer Faktoren',
				'Kausale Mechanismen werden erklärt',
				'Einschränkungen werden genannt'
			],
			examplesBad: [
				'A und B passierten zusammen, also verursachte A B',
				'Alle Experten sind sich einig (ohne Belege)',
				'Wenn Sie das nicht glauben, sind Sie Teil der Verschwörung'
			]
		},
		'time-recent': {
			title: 'Informationsaktualität',
			description: 'Veröffentlichungsdatum ist angegeben und Inhalt behält angemessene Aktualität',
			guideTitle: '⏰ Beurteilung angemessener Informationsaktualität',
			guideContent:
				'Fachspezifische Standards für Aktualitätsanforderungen: Medizin/Gesundheit: 1-2 Jahre, Technologie: 6-12 Monate, Wirtschaftsdaten: 3-6 Monate, Rechtslage: Aktuell gültig, Wissenschaft: Je nach Disziplin 2-5 Jahre. Wichtig: Datum der Veröffentlichung UND der letzten Aktualisierung.',
			examplesGood: [
				'Veröffentlicht Dezember 2024',
				'Letzte Aktualisierung: Januar 2025',
				'Stand: 15. Juni 2024'
			],
			examplesBad: [
				'Kein Datum angegeben',
				'5 Jahre alte Technologie-Informationen',
				'Medizinische Ratschläge von 2019'
			]
		},
		'time-update': {
			title: 'Update- und Korrekturhistorie',
			description: 'Inhalt wird bei Bedarf mit transparenten Korrekturen aktualisiert',
			guideTitle: '📝 Überprüfung transparenter Updates und Korrekturen',
			guideContent:
				'Gute Update-Eigenschaften: Klare Beschreibung der Aktualisierungen, Datum der Änderungen, Grund für die Korrektur. Versionsnummern oder Änderungshistorie. Bei wichtigen Korrekturen: Hinweis am Artikelanfang.',
			examplesGood: [
				'Klare Korrekturhistorie mit Datum',
				'"Update 15.6.24: Zahlen korrigiert"',
				'Durchgestrichener Text mit Korrektur'
			],
			examplesBad: [
				'Keine Korrekturaufzeichnungen',
				'Stillschweigende Änderungen',
				'Veraltete Informationen ohne Hinweis'
			]
		},
		'expert-knowledge': {
			title: 'Angemessene Expertise',
			description: 'Urheber hat ausreichende Kenntnisse/Erfahrungen im entsprechenden Bereich',
			guideTitle: '🎓 Wie man Expertise verifiziert',
			guideContent:
				'Zu prüfende Punkte: Abschlüsse/Qualifikationen in verwandten Bereichen, Berufserfahrung, Publikationshistorie, institutionelle Zugehörigkeit. Warnsignale: Selbsternannte Experten, Expertise in völlig anderen Bereichen, keine nachweisbaren Qualifikationen.',
			examplesGood: [
				'Infektiologe erklärt Impfstoffe',
				'Klimaforscher spricht über Erderwärmung',
				'Bundesbank-Ökonom zu Inflation'
			],
			examplesBad: [
				'Prominenter ohne Fachkenntnisse macht medizinische Aussagen',
				'IT-Experte spricht über Virologie',
				'Selbsternannter "Experte" ohne Nachweise'
			]
		},
		'detail-sufficient': {
			title: 'Ausreichende Details und Beweise',
			description:
				'Prozess zu Schlussfolgerungen und unterstützende Beweise werden angemessen erklärt',
			guideTitle: '📋 Beurteilung der Evidenzsuffizienz',
			guideContent:
				'Erforderliche Elemente: Spezifische Daten zur Untermauerung von Behauptungen, Methoden-beschreibung, Stichprobengröße, statistische Signifikanz, Konfidenzintervalle. Bei Studien: Studiendesign, Teilnehmerzahl, Dauer, Kontrollgruppen.',
			examplesGood: [
				'Stichprobengröße, statistische Methoden, Konfidenzintervalle enthalten',
				'Detaillierte Methodenbeschreibung',
				'Rohdaten oder Zusammenfassungen verfügbar'
			],
			examplesBad: [
				'Nur Aussage "Wirkung bewiesen" ohne Details',
				'"Studien zeigen" ohne Spezifikation',
				'Prozentsätze ohne Grundgesamtheit'
			]
		},
		'citation-proper': {
			title: 'Ordnungsgemäße Zitate und Referenzen',
			description: 'Zuverlässige Quellen werden für wichtige Behauptungen gezeigt',
			guideTitle: '📚 Standards für ordnungsgemäße Zitate',
			guideContent:
				'Zitierungspflichtige Inhalte: Statistische Daten/Zahlen, wissenschaftliche Behauptungen, Expertenmeinungen, historische Fakten. Zitierformat: Autor, Titel, Publikation, Datum, Seitenzahl oder DOI. Bei Online-Quellen: URL und Zugriffsdatum.',
			examplesGood: [
				'Laut Forschung mit ordnungsgemäßer Zitation',
				'(Schmidt et al., 2024, Nature)',
				'RKI-Bericht vom 15.3.2024'
			],
			examplesBad: [
				'Laut Forschung (Quelle unklar)',
				'"Studien beweisen" ohne Referenz',
				'Nur "Wissenschaftler sagen"'
			]
		},
		'citation-accessible': {
			title: 'Überprüfbarkeit der zitierten Quellen',
			description: 'Zitierte Quellen können tatsächlich zugänglich gemacht und überprüft werden',
			guideTitle: '🌐 Überprüfung der Zitierungszugänglichkeit',
			guideContent:
				'Idealer Zustand: Direkte Links oder DOI-Nummern, frei zugängliche Quellen, Bibliothekszugang für Fachpublikationen. Problematisch: "Interne Materialien", "Vertrauliche Studien", tote Links, Bezahlschranken ohne Bibliothekszugang.',
			examplesGood: ['Mit URL-Links', 'Papers mit DOI-Nummern', 'Öffentlich zugängliche Berichte'],
			examplesBad: [
				'Laut internen Materialien',
				'Vertrauliche Studie',
				'Tote Links oder Bezahlschranken ohne Alternative'
			]
		},
		'cross-check': {
			title: 'Querverweise mit anderen Quellen',
			description: 'Ähnlicher Inhalt kann durch mehrere unabhängige Quellen bestätigt werden',
			guideTitle: '🔍 Effektive Querprüfungsmethoden',
			guideContent:
				'Schritt-für-Schritt-Verifizierungsprozess: 1. Kernbehauptung identifizieren, 2. Unabhängige Quellen suchen, 3. Widersprüche analysieren, 4. Konsens bewerten. Nutzen Sie verschiedene Suchmaschinen, Datenbanken und Länder/Sprachen.',
			examplesGood: [
				'Ähnliche Ergebnisse in mehreren Peer-Review-Papieren',
				'Bestätigung durch internationale Studien',
				'Konsens mehrerer Fachgesellschaften'
			],
			examplesBad: [
				'Nur eine Quelle',
				'Alle Quellen stammen aus derselben Studie',
				'Widersprüchliche Quellen ohne Erklärung'
			]
		},
		'fact-check': {
			title: 'Verifizierung durch Faktencheck-Organisationen',
			description: 'Verifizierung existiert von zuverlässigen Faktencheck-Institutionen',
			guideTitle: '✅ Zuverlässige Faktencheck-Organisationen',
			guideContent:
				'Internationale Organisationen: Snopes, PolitiFact, AFP Fact Check, Reuters Fact Check. Deutsche Organisationen: Correctiv, ARD-faktenfinder, ZDF-Faktencheck, Deutsche Presse-Agentur Faktencheck. Achten Sie auf: Transparente Methoden, Quellenangaben, Unabhängigkeit.',
			examplesGood: [
				'Mehrere Faktencheck-Organisationen bewerteten als wahr',
				'Correctiv-Recherche bestätigt Fakten',
				'ARD-faktenfinder überprüft positiv'
			],
			examplesBad: [
				'Als Falschinformation durch Faktencheck beurteilt',
				'Mehrere Faktenchecker widersprechen',
				'Keine Überprüfung durch seriöse Organisationen'
			]
		},
		'data-verifiable': {
			title: 'Überprüfbare Daten',
			description: 'Daten zur Untermauerung von Behauptungen können objektiv überprüft werden',
			guideTitle: '📈 Überprüfung der Datenverifizierbarkeit',
			guideContent:
				'Zu verifizierende Elemente: Datenquelle, Erhebungsmethoden, Stichprobengröße, statistische Methoden, Rohdaten-Verfügbarkeit. Vertrauenswürdige Datenquellen: Statistisches Bundesamt, Bundesbank, Eurostat, Weltbank, peer-reviewte Studien.',
			examplesGood: [
				'Statistisches Bundesamt Daten',
				'Bundesbank-Statistiken',
				'Eurostat-Datenbank'
			],
			examplesBad: ['Nur interne Daten', 'Nicht reproduzierbare Messungen', 'Anonyme Datenquellen']
		},
		methodology: {
			title: 'Gültigkeit der Methoden/Methodologie',
			description: 'Forschungs- oder Umfragemethodologie ist angemessen und reproduzierbar',
			guideTitle: '🔬 Bewertung der methodologischen Gültigkeit',
			guideContent:
				'Bewertungspunkte: Angemessenheit des Forschungsdesigns, Stichprobenauswahl, Kontrollvariablen, Randomisierung, Verblindung, statistische Analyse. Goldstandard: Randomisierte kontrollierte Studien, Doppelblind-Studien, Metaanalysen.',
			examplesGood: [
				'Doppelblinde Studien',
				'Angemessene Kontrollgruppen-Einstellung',
				'Randomisierte Stichproben'
			],
			examplesBad: [
				'Keine Methodenbeschreibung',
				'Selektive Stichproben ohne Begründung',
				'Fehlende Kontrollgruppen'
			]
		},
		'bias-disclosure': {
			title: 'Offenlegung von Interessenkonflikten',
			description:
				'Finanzielle, politische und persönliche Interessen werden angemessen offengelegt',
			guideTitle: '💰 Zu prüfende Punkte für Interessenkonflikte',
			guideContent:
				'Offenzulegende Interessen: Forschungsfinanzierungsquellen, Beratungshonorare, Aktienbesitz, politische Zugehörigkeit, persönliche Beziehungen. Standard in wissenschaftlichen Publikationen: COI-Erklärung am Ende des Artikels.',
			examplesGood: [
				'COI klar angegeben',
				'"Studie finanziert von X, Autoren haben keine Interessenkonflikte"',
				'Transparente Förderungsangaben'
			],
			examplesBad: [
				'Keine COI-Offenlegung',
				'Versteckte Finanzierungsquellen',
				'Persönliche Interessen nicht erwähnt'
			]
		},
		'balanced-view': {
			title: 'Ausgewogene Perspektive',
			description: 'Verschiedene Positionen und Gegenmeinungen werden ebenfalls berücksichtigt',
			guideTitle: '⚖️ Perspektiven für Ausgewogenheitsbewertung',
			guideContent:
				'Zu prüfende Punkte: Einführung gegensätzlicher/kritischer Ansichten, Diskussion von Limitationen, Berücksichtigung alternativer Erklärungen, faire Darstellung verschiedener Standpunkte. Warnsignale: Nur bestätigende Evidenz, Strohmänner, Ignorieren von Kritik.',
			examplesGood: [
				'Vergleich mehrerer Forschungsergebnisse',
				'Diskussion von Studien-Limitationen',
				'Darstellung verschiedener Expertenmeinungen'
			],
			examplesBad: [
				'Nur unterstützende Evidenz aufgelistet',
				'Kritik ignoriert oder verzerrt dargestellt',
				'Einseitige Quellenauswahl'
			]
		},
		'context-adequate': {
			title: 'Ausreichende Hintergrundinformationen',
			description:
				'Hintergrund und Kontext, die zum Verständnis der Informationen erforderlich sind, werden bereitgestellt',
			guideTitle: '🌍 Zu prüfende Punkte für Kontextinformationen',
			guideContent:
				'Notwendige Hintergrundinformationen: Historischer Hintergrund/frühere Forschung, politischer/sozialer Kontext, methodische Einschränkungen, Vergleich mit ähnlichen Fällen. Kontext hilft bei der Einordnung der Bedeutung und Relevanz.',
			examplesGood: [
				'Vergangene ähnliche Fälle',
				'Historische Hintergrunderklärung',
				'Einordnung in größeren Kontext'
			],
			examplesBad: [
				'Nur einzelne Zahlen',
				'Keine Hintergrundinformationen',
				'Fehlende Einordnung der Bedeutung'
			]
		},
		'scope-clear': {
			title: 'Klarer Anwendungsbereich',
			description: 'Anwendbarer Bereich und Grenzen der Informationen werden klar gezeigt',
			guideTitle: '🎯 Klärung des Anwendungsbereichs',
			guideContent:
				'Zu klärender Bereich: Zielpersonen/Regionen/Zeiträume, Anwendungsgrenzen, Generalisierbarkeit, spezifische Populationen. Wichtig: Was die Studie/Information NICHT aussagt, Einschränkungen der Verallgemeinerbarkeit.',
			examplesGood: [
				'Klare Einschränkungsangaben',
				'"Gilt für Erwachsene 18-65 Jahre"',
				'"Ergebnisse auf deutsche Bevölkerung beschränkt"'
			],
			examplesBad: [
				'Unbegrenzte Verallgemeinerung begrenzter Forschungsergebnisse',
				'"Alle Menschen" ohne Spezifikation',
				'Fehlende Angabe von Einschränkungen'
			]
		}
	}
};

export default translations;
