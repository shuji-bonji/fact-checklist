/**
 * Italian translation file
 * Italian (it) - Complete translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'it' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-30',
	translator: 'Claude',
	completeness: 100
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
		showGuide: 'Mostra Guida',
		rip: {
			high: 'Alto Rischio',
			medium: 'Rischio Medio',
			low: 'Basso Rischio'
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
			high: 'Alta Affidabilità',
			medium: 'Affidabilità Moderata',
			low: 'Bassa Affidabilità',
			poor: 'Problemi di Affidabilità'
		},
		advice: {
			high: 'Adozione raccomandata. È stata condotta una verifica sufficiente.',
			medium: 'Si raccomanda ulteriore conferma. Sii cauto con decisioni importanti.',
			low: 'Cautela necessaria. È richiesta ulteriore verifica.',
			poor: 'Rifiuto raccomandato. Cerca fonti di informazione affidabili.'
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

	// Checklist items
	checklistItems: {
		'source-authority': {
			title: 'Pubblicazione da fonti autorevoli',
			description:
				'Agenzie governative, istituzioni accademiche, organizzazioni professionali, articoli peer-reviewed, media affidabili, ecc.',
			guideTitle: '🏛️ Criteri per Fonti Autorevoli',
			guideContent:
				"Istituzioni governative/pubbliche: Ministeri, ISTAT, Banca d'Italia, tribunali, CNR, AIFA, ISS, università pubbliche, ecc. Organizzazioni internazionali: OMS, ONU, UE, BCE. Media affidabili: RAI, ANSA, Corriere della Sera, Repubblica, Il Sole 24 Ore. Riviste scientifiche: Nature, Science, The Lancet, pubblicazioni peer-reviewed.",
			examplesGood: [
				'Dati statistici ISTAT',
				'Articoli peer-reviewed su Nature',
				'Report ISS (Istituto Superiore di Sanità)',
				"Comunicati stampa della Banca d'Italia"
			],
			examplesBad: [
				'Informazioni da blog personali',
				'Post di forum anonimi',
				'Catene di messaggi WhatsApp'
			]
		},
		'source-primary': {
			title: 'Verifica delle fonti primarie',
			description: 'Informazioni dirette dalla fonte, non dicerie o relazioni di seconda mano',
			guideTitle: '🎯 Come Identificare le Fonti Primarie',
			guideContent:
				"Fonti primarie: Articoli di ricerca degli autori stessi, testimonianze dirette, annunci ufficiali, documenti originali, dati grezzi, registrazioni video/audio originali, comunicati stampa diretti dall'ente interessato.",
			examplesGood: [
				'Articoli pubblicati direttamente dai ricercatori',
				'Comunicati ufficiali di bilancio aziendale',
				'Interviste dirette con i protagonisti',
				'Documenti governativi originali'
			],
			examplesBad: [
				'Secondo gli esperti',
				'Un certo sondaggio senza attribuzione chiara',
				'Si dice che...',
				'Fonti vicine affermano'
			]
		},
		'source-multiple': {
			title: 'Fonti multiple indipendenti',
			description: 'Rapporti simili o conferme da diverse posizioni/organizzazioni',
			guideTitle: "🔄 Come Verificare l'Indipendenza",
			guideContent:
				'Fonti indipendenti: Fonti con organizzazioni, finanziamenti e interessi diversi. Verificare: proprietà diversa, prospettive diverse, metodologie indipendenti, nessun conflitto di interesse comune.',
			examplesGood: [
				'Annuncio governativo + ricerca accademica + molteplici testate giornalistiche',
				'Conferma da ANSA + Reuters + Associated Press',
				'Studio universitario + rapporto ONG + dati ISTAT'
			],
			examplesBad: [
				'Media multipli dello stesso gruppo editoriale',
				'Solo fonti governative',
				'Citazioni circolari tra le stesse fonti'
			]
		},
		'warning-anonymous': {
			title: 'Non anonimo o informazioni senza attribuzione',
			description: 'Il creatore/editore può essere chiaramente identificato',
			guideTitle: "🔍 Punti Chiave per l'Identificazione della Fonte",
			guideContent:
				'Informazioni richieste: Nome reale del creatore, affiliazione istituzionale, informazioni di contatto verificabili, credenziali professionali, storico delle pubblicazioni.',
			examplesGood: [
				'Secondo il Prof. Mario Rossi (Università La Sapienza, Facoltà di Medicina)',
				"Dott.ssa Anna Bianchi, virologa presso l'Ospedale Spallanzani"
			],
			examplesBad: [
				'Secondo un certo medico',
				'Esperto anonimo',
				'Fonte autorevole che preferisce rimanere anonima'
			]
		},
		'warning-sensational': {
			title: 'Poche espressioni sensazionali o infiammatorie',
			description: 'Descrizione calma e obiettiva, senza appelli emotivi eccessivi',
			guideTitle: '⚠️ Come Identificare Espressioni Sensazionali',
			guideContent:
				'Espressioni di avvertimento: Assolutamente, Completamente, Scioccante, Incredibile, Miracoloso, Segreto nascosto, Verità che non vogliono farti sapere, Clamoroso, Bomba.',
			examplesGood: [
				'La ricerca ha mostrato un miglioramento nel 75% dei soggetti',
				'I dati indicano una tendenza positiva',
				"Secondo l'analisi statistica"
			],
			examplesBad: [
				'La verità SCIOCCANTE che i medici ti nascondono!',
				'INCREDIBILE scoperta che cambierà la tua vita!',
				'Il SEGRETO che le case farmaceutiche non vogliono farti sapere'
			]
		},
		'warning-logical': {
			title: 'Nessuna contraddizione logica',
			description: 'Il contenuto è coerente senza evidenti salti logici',
			guideTitle: '🧠 Come Verificare la Coerenza Logica',
			guideContent:
				'Verificare se le premesse e le conclusioni sono adeguatamente collegate. Attenzione a: fallacie logiche, correlazione vs causalità, generalizzazioni indebite, argomenti circolari.',
			examplesGood: [
				'Analisi statisticamente significativa considerando altri fattori',
				'Studio controllato randomizzato con gruppo di controllo',
				'Conclusioni proporzionate ai dati presentati'
			],
			examplesBad: [
				'A e B sono accaduti insieme quindi A ha causato B',
				'Il 100% dei casi (su un campione di 3 persone)',
				'Post hoc ergo propter hoc'
			]
		},
		'time-recent': {
			title: 'Freschezza delle informazioni',
			description:
				'La data di pubblicazione è specificata e il contenuto mantiene una freschezza appropriata',
			guideTitle: "⏰ Valutare l'Appropriata Freschezza delle Informazioni",
			guideContent:
				'Standard specifici per campo per i requisiti di freschezza: Notizie di attualità (ore/giorni), Ricerca medica (1-3 anni), Dati economici (mesi/trimestri), Informazioni tecnologiche (6-12 mesi), Dati storici consolidati (senza scadenza).',
			examplesGood: [
				'Pubblicato dicembre 2024',
				'Ultimo aggiornamento: gennaio 2025',
				'Dati ISTAT Q3 2024',
				'Studio clinico pubblicato nel 2023'
			],
			examplesBad: [
				'Nessuna data indicata',
				'Informazioni tecniche di 5 anni fa',
				'Dati economici pre-pandemia senza contesto',
				'Ultima modifica: data sconosciuta'
			]
		},
		'time-update': {
			title: 'Storico aggiornamenti e correzioni',
			description: 'Il contenuto viene aggiornato secondo necessità con correzioni trasparenti',
			guideTitle: '📝 Verificare Aggiornamenti e Correzioni Trasparenti',
			guideContent:
				'Caratteristiche di buoni aggiornamenti: descrizione chiara delle modifiche, data di ogni aggiornamento, motivo delle correzioni, mantenimento delle versioni precedenti, nota di rettifica per errori significativi.',
			examplesGood: [
				'Storico correzioni chiaro con date',
				'Nota di rettifica: corretto errore nei dati del 15/01',
				'Versione 2.1 - Aggiornato grafico a pagina 5',
				'Changelog dettagliato disponibile'
			],
			examplesBad: [
				'Nessun registro delle correzioni',
				'Modifiche silenti senza notifica',
				'Contenuto cambiato senza traccia',
				'Errori corretti senza ammissione'
			]
		},
		'expert-knowledge': {
			title: 'Competenza appropriata',
			description: 'Il creatore ha sufficiente conoscenza/esperienza nel campo pertinente',
			guideTitle: '🎓 Come Verificare la Competenza',
			guideContent:
				'Elementi da verificare: Lauree/qualifiche nei campi correlati, pubblicazioni peer-reviewed, anni di esperienza professionale, riconoscimenti nel settore, affiliazioni professionali (ordini, associazioni), track record verificabile.',
			examplesGood: [
				'Specialista in malattie infettive che spiega i vaccini',
				"Economista della Banca d'Italia su politica monetaria",
				'Professore di climatologia su cambiamento climatico',
				'Ingegnere informatico certificato su cybersecurity'
			],
			examplesBad: [
				'Celebrità fuori dal proprio campo che fa affermazioni mediche',
				'Influencer che dà consigli finanziari senza qualifiche',
				'Politico che contesta consensus scientifico senza competenze'
			]
		},
		'detail-sufficient': {
			title: 'Dettagli ed evidenze sufficienti',
			description:
				'Il processo che porta alle conclusioni e le prove a supporto sono adeguatamente spiegate',
			guideTitle: '📋 Valutare la Sufficienza delle Prove',
			guideContent:
				'Elementi richiesti: Dati specifici a supporto delle affermazioni, metodologia chiara, limitazioni riconosciute, processo di ragionamento trasparente, dati grezzi quando possibile, analisi statistica appropriata.',
			examplesGood: [
				'Dimensione del campione, metodi statistici, intervalli di confidenza inclusi',
				'Studio su 10.000 partecipanti con p<0.001',
				'Metodologia dettagliata nella sezione materiali e metodi',
				'Dati supplementari disponibili online'
			],
			examplesBad: [
				"Afferma solo che l'effetto è provato senza dettagli",
				'Molti esperti concordano (senza specificare chi)',
				'I risultati parlano da soli',
				'Dettagli tecnici omessi per semplicità'
			]
		},
		'citation-proper': {
			title: 'Citazioni e riferimenti appropriati',
			description: 'Fonti affidabili sono indicate per affermazioni importanti',
			guideTitle: '📚 Standard per Citazioni Appropriate',
			guideContent:
				'Contenuti che richiedono citazione: Dati statistici/numeri, affermazioni fattuali specifiche, citazioni dirette, teorie o concetti non comuni, affermazioni controverse, dati di ricerca. Formati accettabili: APA, MLA, Chicago, Vancouver, note a piè di pagina.',
			examplesGood: [
				'Secondo la ricerca di Rossi et al. (2023)',
				"Come riportato dall'ISTAT (2024)",
				'Studio pubblicato su Nature Medicine (DOI: 10.1038/...)',
				'[1] Smith, J. (2024). Titolo. Rivista, 15(3), 45-62.'
			],
			examplesBad: [
				'Secondo la ricerca (fonte non chiara)',
				'Studi dimostrano che...',
				'È scientificamente provato',
				'Come tutti sanno'
			]
		},
		'citation-accessible': {
			title: 'Verificabilità delle fonti citate',
			description: 'Le fonti citate possono essere effettivamente consultate e verificate',
			guideTitle: "🌐 Verificare l'Accessibilità delle Citazioni",
			guideContent:
				'Stato ideale: Link diretti o DOI, documenti pubblicamente accessibili, archivi aperti, database consultabili. Verificare: link funzionanti, documenti non a pagamento (o indicazione chiara se a pagamento), fonti in lingue accessibili, archivi permanenti.',
			examplesGood: [
				'Con link URL funzionanti',
				'Articoli con numeri DOI',
				'Documenti su archivi istituzionali',
				'Report scaricabili da siti governativi',
				'Open access su PubMed'
			],
			examplesBad: [
				'Secondo materiali interni',
				'Comunicazione personale non verificabile',
				'Link non funzionanti',
				'Documenti riservati non accessibili',
				"Fonte: archivio privato dell'autore"
			]
		},
		'cross-check': {
			title: 'Controllo incrociato con altre fonti',
			description: 'Contenuti simili possono essere confermati da molteplici fonti indipendenti',
			guideTitle: '🔍 Metodi Efficaci di Controllo Incrociato',
			guideContent:
				'Processo di verifica passo-passo: 1) Identificare affermazioni chiave, 2) Cercare fonti indipendenti, 3) Confrontare dettagli e dati, 4) Verificare coerenza, 5) Notare eventuali discrepanze. Usare: motori di ricerca accademici, database specializzati, fact-checker multipli.',
			examplesGood: [
				'Risultati simili in molteplici articoli peer-reviewed',
				'Conferma da ANSA + Reuters + BBC',
				'Dati coerenti tra ISTAT, Eurostat e OCSE',
				'Molteplici studi indipendenti con stesse conclusioni'
			],
			examplesBad: [
				'Solo una fonte',
				'Tutte le fonti citano la stessa origine',
				'Echo chamber mediatico',
				'Nessuna verifica indipendente disponibile'
			]
		},
		'fact-check': {
			title: 'Verifica da organizzazioni di fact-checking',
			description: 'Esiste verifica da istituzioni affidabili di fact-checking',
			guideTitle: '✅ Organizzazioni Affidabili di Fact-checking',
			guideContent:
				'Organizzazioni italiane: Pagella Politica, Open Online, Facta News, Bufale.net. Internazionali: Snopes, PolitiFact, AFP Fact Check, Reuters Fact Check, FactCheck.org. Criteri IFCN (International Fact-Checking Network): imparzialità, trasparenza delle fonti, trasparenza dei finanziamenti, metodologia chiara, correzioni aperte.',
			examplesGood: [
				'Verificato come vero da Pagella Politica',
				'Molteplici fact-checker concordano',
				'Rating: Vero da Open Online',
				'Confermato da fact-checker certificati IFCN'
			],
			examplesBad: [
				'Giudicato come falso da fact-checking',
				'Bufala confermata da Bufale.net',
				'Disinformazione secondo molteplici verificatori',
				'Nessun fact-checker ha potuto confermare'
			]
		},
		'data-verifiable': {
			title: 'Dati verificabili',
			description: 'I dati a supporto delle affermazioni possono essere verificati oggettivamente',
			guideTitle: '📈 Verificare la Verificabilità dei Dati',
			guideContent:
				'Elementi da verificare: Fonte dei dati, metodi di raccolta, periodo di riferimento, dimensione del campione, margine di errore, possibilità di replicazione. Controllare: dataset pubblici, metodologia trasparente, raw data disponibili, codice di analisi condiviso.',
			examplesGood: [
				'Dati statistici ISTAT con metodologia pubblica',
				'Dataset open data del Ministero',
				'Dati Eurostat verificabili online',
				'Studio con dati grezzi su repository pubblico'
			],
			examplesBad: [
				'Solo dati interni non condivisi',
				'Sondaggio proprietario senza dettagli',
				'I nostri dati mostrano (senza specificare)',
				'Algoritmo segreto non verificabile'
			]
		},
		methodology: {
			title: 'Validità dei metodi/metodologia',
			description: 'La metodologia di ricerca o sondaggio è appropriata e riproducibile',
			guideTitle: '🔬 Valutare la Validità Metodologica',
			guideContent:
				'Punti di valutazione: Appropriatezza del design di ricerca, campionamento rappresentativo, controllo delle variabili confondenti, analisi statistica adeguata, peer review, pre-registrazione dello studio, trasparenza del protocollo, gestione dei bias.',
			examplesGood: [
				'Studi in doppio cieco',
				'Impostazione appropriata del gruppo di controllo',
				'RCT (Randomized Controlled Trial)',
				'Meta-analisi sistematica con PRISMA',
				'Studio pre-registrato su ClinicalTrials.gov'
			],
			examplesBad: [
				'Nessuna descrizione della metodologia',
				'Campione auto-selezionato',
				'Cherry picking dei dati',
				'Analisi post-hoc non dichiarata',
				'Metodologia cambiata dopo i risultati'
			]
		},
		'bias-disclosure': {
			title: 'Dichiarazione dei conflitti di interesse',
			description: 'Gli interessi finanziari, politici e personali sono adeguatamente dichiarati',
			guideTitle: '💰 Elementi da Verificare per i Conflitti di Interesse',
			guideContent:
				'Interessi da dichiarare: Fonti di finanziamento della ricerca, affiliazioni aziendali, compensi ricevuti, partecipazioni azionarie, consulenze, brevetti, relazioni personali, affiliazioni politiche, membership in organizzazioni rilevanti.',
			examplesGood: [
				'COI chiaramente dichiarato',
				'Finanziamento: Fondazione XYZ (no ruolo nel design)',
				"L'autore dichiara nessun conflitto di interesse",
				'Disclosure completa nella sezione apposita'
			],
			examplesBad: [
				'Nessuna dichiarazione COI',
				'Studio su farmaco senza dire chi finanzia',
				"Autore è CEO dell'azienda (non dichiarato)",
				'Conflitti nascosti o minimizzati'
			]
		},
		'balanced-view': {
			title: 'Prospettiva equilibrata',
			description: 'Vengono considerate anche posizioni diverse e opinioni contrastanti',
			guideTitle: "⚖️ Prospettive per la Valutazione dell'Equilibrio",
			guideContent:
				'Punti di controllo: Introduzione di opinioni opposte/critiche, riconoscimento delle limitazioni, presentazione di evidenze contrarie, spazio per il dibattito, distinzione tra consenso e controversia, peso appropriato alle diverse posizioni.',
			examplesGood: [
				'Confronto di molteplici risultati di ricerca',
				'Pro e contro presentati equamente',
				'Sebbene alcuni studi suggeriscano X, altri indicano Y',
				'Consenso scientifico vs opinioni minoritarie chiarite'
			],
			examplesBad: [
				'Solo elenco di prove a supporto',
				'Cherry picking delle evidenze',
				'Strawman delle posizioni opposte',
				'False equivalenze tra scienza e opinioni'
			]
		},
		'context-adequate': {
			title: 'Informazioni di contesto sufficienti',
			description:
				'Vengono forniti il background e il contesto necessari per comprendere le informazioni',
			guideTitle: '🌍 Elementi da Verificare per le Informazioni Contestuali',
			guideContent:
				'Informazioni di background necessarie: Contesto storico/ricerche precedenti, definizioni di termini tecnici, scale e confronti, situazione normale vs eccezionale, fattori culturali/geografici rilevanti, trend temporali, paragoni con situazioni simili.',
			examplesGood: [
				'Casi simili passati citati',
				'Spiegazione del background storico',
				'Confronto con media nazionale/europea',
				'Contesto pre e post pandemia fornito',
				'Definizioni chiare dei termini tecnici'
			],
			examplesBad: [
				'Solo numeri singoli senza confronto',
				'Nessuna informazione di background',
				'Dati fuori contesto',
				'Termini tecnici non spiegati',
				'Ignorati fattori confondenti ovvi'
			]
		},
		'scope-clear': {
			title: 'Ambito di applicazione chiaro',
			description:
				"L'ambito di applicazione e le limitazioni delle informazioni sono chiaramente indicati",
			guideTitle: "🎯 Chiarire l'Ambito di Applicazione",
			guideContent:
				'Ambito da chiarire: Persone/regioni/periodi target, condizioni di validità, eccezioni note, generalizzabilità dei risultati, limitazioni dello studio, validità esterna, applicabilità ad altri contesti.',
			examplesGood: [
				'Dichiarazioni chiare sulle limitazioni',
				'Valido solo per adulti 18-65 anni',
				'Risultati applicabili al contesto italiano',
				'Non generalizzabile a popolazioni pediatriche',
				'Studio limitato alla Lombardia'
			],
			examplesBad: [
				'Generalizzazione illimitata di risultati limitati',
				'Tutti dovrebbero... (basato su studio piccolo)',
				'Sempre vero in ogni caso',
				'Nessuna menzione delle limitazioni',
				'Estrapolazione indebita a contesti diversi'
			]
		}
	}
};

export default translations;
