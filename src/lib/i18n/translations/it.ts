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

  // Metadati specifici delle pagine
  pages: {
    home: {
      title: "Fact Checklist - Valutazione Pratica dell'Affidabilità delle Informazioni",
      description:
        "Valuta sistematicamente l'affidabilità delle informazioni con 20 elementi di controllo. Giudica le informazioni con i tuoi occhi e la tua mente senza dipendere da IA o governo.",
      keywords:
        "verifica dei fatti,verifica delle informazioni,valutazione dell'affidabilità,PWA,alfabetizzazione informativa,contromisure alla disinformazione"
    },
    about: {
      title: 'Informazioni su Questa App - Fact Checklist',
      description:
        "Scopri il contesto di sviluppo, le caratteristiche e l'uso di Fact Checklist. Uno strumento per giudicare l'affidabilità delle informazioni da solo.",
      keywords:
        "panoramica dell'app,filosofia di sviluppo,valutazione delle informazioni,giudizio di affidabilità,verifica dei fatti,come usare"
    },
    help: {
      title: 'Aiuto e Guida - Fact Checklist',
      description:
        "Istruzioni dettagliate per l'uso, spiegazioni degli elementi della lista di controllo e consigli per una valutazione efficace delle informazioni.",
      keywords:
        'come usare,aiuto,elementi di controllo,valutazione delle informazioni,guida,istruzioni'
    },
    privacy: {
      title: 'Politica sulla Privacy - Fact Checklist',
      description:
        'Informazioni sulla gestione dei dati personali. Tutti i dati sono memorizzati localmente e non vengono trasmessi esternamente.',
      keywords: 'privacy,informazioni personali,protezione dei dati,memorizzazione locale,sicurezza'
    },
    intro: {
      title:
        'Lista di Controllo Pratica per Fact-Check per Sopravvivere in un Mondo Pieno di Disinformazione',
      description:
        "Una lista di controllo semplice per valutare l'affidabilità delle informazioni con i tuoi occhi e la tua mente mentre avanza la regolamentazione governativa dei social media. Valuta le informazioni scientificamente e sistematicamente senza fidarti ciecamente di IA o media.",
      keywords:
        "verifica dei fatti,verifica delle informazioni,valutazione dell'affidabilità,PWA,alfabetizzazione informativa,contromisure alla disinformazione,regolamentazione dei social media,controllo delle informazioni,qualità delle informazioni,verifica dei fatti tramite IA"
    }
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
    completed: 'Completato',
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
    },
    evaluationCompleted: '✓ Valutazione Completata!',
    evaluationCompletedDescription: 'Puoi rivedere i risultati della valutazione della checklist.',
    evaluationResults: 'Risultati Valutazione',
    totalScore: 'Punteggio Totale',
    itemsDetail: 'Dettagli Elementi',
    recommendedActions: 'Azioni Raccomandate',
    improvementTips: "Per migliorare l'affidabilità",
    checkUncheckedItems: 'Verifica elementi non controllati',
    additionalSourceResearch: 'Ricerca fonti aggiuntive',
    expertConsultation: 'Consultazione esperti',
    factCheckOrganizations: 'Usa organizzazioni di fact-checking',
    statistics: 'Statistiche',
    checkedItems: 'Verificato',
    uncheckedItems: 'Non verificato',
    completionRate: 'Tasso di Completamento',
    actions: 'Azioni',
    exportShare: 'Esporta e Condividi',
    reEdit: 'Ri-modifica'
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
    pdfMode: 'Modalità Generazione PDF',
    pdfModes: {
      pixelPerfect: 'Pixel Perfect',
      pixelPerfectDescription: 'Corrispondenza esatta con la visualizzazione del browser',
      reliableFont: 'Focus Affidabilità Font',
      reliableFontDescription: 'Incorporamento font multilingue affidabile',
      textBased: 'Basato su Testo',
      textBasedDescription: 'PDF leggero con ricerca abilitata'
    },
    formats: {
      pdf: 'PDF',
      html: 'HTML',
      json: 'JSON',
      markdown: 'Markdown'
    },
    progress: {
      starting: 'Avvio...',
      initializing: 'Inizializzazione...',
      generating: 'Generazione...',
      processing: 'Elaborazione...',
      finalizing: 'Finalizzazione...',
      completed: 'Completato',
      failed: 'Fallito'
    },
    generatedAt: 'Generato il',
    summaryTable: {
      item: 'Elemento',
      value: 'Valore'
    },
    table: {
      section: 'Sezione',
      completionRate: 'Tasso di Completamento',
      completedItems: 'Elementi Completati'
    },
    sectionCompletionRates: 'Tassi di Completamento Sezioni',
    achievementStatus: 'Stato di Completamento',
    goodExamples: 'Buoni Esempi',
    badExamples: 'Cattivi Esempi',
    completed: 'Completato',
    items: 'Elementi',
    metadata: {
      created: 'Creato',
      score: 'Punteggio',
      confidence: 'Fiducia',
      language: 'Lingua'
    },
    summary: {
      title: 'Riepilogo Valutazione',
      totalScore: 'Punteggio Totale',
      completionRate: 'Tasso di Completamento',
      confidenceLevel: 'Livello di Fiducia',
      checkedItems: 'Elementi Verificati'
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
    subtitle: 'Guida dettagliata per usare la checklist del fact-checking',
    tableOfContents: 'Indice',
    navigation: {
      overview: 'Panoramica',
      usage: 'Utilizzo',
      categories: 'Categorie',
      scoring: 'Punteggio',
      features: 'Funzioni',
      privacy: 'Privacy',
      troubleshooting: 'Risoluzione Problemi'
    },
    sections: {
      overview: {
        title: 'Panoramica Applicazione',
        emoji: '📋',
        description: 'Utilizzo base della checklist fact-checking',
        content:
          'Questa applicazione è uno strumento per valutare la credibilità delle informazioni su internet in modo scientifico e sistematico.',
        subSections: {
          features: {
            title: 'Caratteristiche Principali',
            content:
              '• Privacy completa: tutti i dati memorizzati localmente\n• Funziona offline\n• Valutazione scientifica\n• Gestione cronologia'
          },
          targetUsers: {
            title: 'Utenti Target',
            content:
              'Giornalisti, ricercatori, studenti e chiunque sia interessato a valutare la credibilità delle informazioni'
          }
        }
      },
      usage: {
        title: 'Utilizzo',
        emoji: '🔍',
        description: "Guida passo-passo per usare l'applicazione",
        content:
          'Segui questi passi per valutare sistematicamente la credibilità delle informazioni.',
        subSections: {
          step1: {
            title: 'Passo 1: Inserire informazioni',
            content: 'Inserisci il titolo e la descrizione delle informazioni che vuoi valutare'
          },
          step2: {
            title: 'Passo 2: Valutare elementi',
            content: 'Valuta ogni elemento della lista basandoti sulle prove disponibili'
          },
          step3: {
            title: 'Passo 3: Rivedere risultato',
            content: 'Rivedi il risultato calcolato e il livello di fiducia'
          },
          step4: {
            title: 'Passo 4: Decisione finale',
            content:
              'Prendi la tua decisione finale basata sulla valutazione: accettare, cautela o rifiutare'
          }
        }
      },
      categories: {
        title: 'Categorie di Valutazione',
        emoji: '📊',
        description: 'Le quattro categorie principali di valutazione',
        content:
          'Gli elementi di valutazione sono organizzati in quattro categorie principali per garantire una valutazione completa.',
        subSections: {
          critical: {
            title: 'Valutazione Critica',
            content:
              'Gli elementi più importanti per determinare la credibilità di base delle informazioni'
          },
          detailed: {
            title: 'Valutazione Dettagliata',
            content: "Elementi per valutare la qualità e l'esperienza delle informazioni"
          },
          verification: {
            title: 'Verifica e Cross-checking',
            content: 'Elementi per confermare la verificabilità e il supporto delle informazioni'
          },
          context: {
            title: 'Valutazione Contesto e Pregiudizio',
            content: "Elementi per valutare l'adeguatezza del pregiudizio e contesto"
          }
        }
      },
      scoring: {
        title: 'Sistema di Punteggio',
        emoji: '🎯',
        description: 'Come vengono calcolati punteggio e livello di fiducia',
        content:
          'Il punteggio è calcolato basandosi sul numero di elementi soddisfatti sul totale degli elementi.',
        subSections: {
          calculation: {
            title: 'Metodo di Calcolo',
            content: 'Punteggio = (numero di elementi soddisfatti / totale elementi) × 100'
          },
          criteria: {
            title: 'Criteri di Valutazione',
            content:
              '• 80%+: Alta credibilità\n• 60-79%: Credibilità media\n• 40-59%: Credibilità bassa\n• <40%: Problemi di credibilità'
          },
          finalJudgment: {
            title: 'Giudizio Finale',
            content:
              'Usa il punteggio come guida, ma la decisione finale dipende dal tuo giudizio personale'
          }
        }
      },
      features: {
        title: 'Funzioni',
        emoji: '⭐',
        description: "Funzioni avanzate dell'applicazione",
        content:
          "L'applicazione offre diverse funzioni avanzate per migliorare l'esperienza utente.",
        subSections: {
          detailedGuide: {
            title: 'Guide Dettagliate',
            content:
              'Ogni elemento di valutazione contiene una guida dettagliata ed esempi pratici per aiutare nella tua valutazione'
          },
          exportFunction: {
            title: 'Funzione di Esportazione',
            content:
              'Puoi esportare i risultati di valutazione in più formati (PDF, HTML, JSON, Markdown)',
            exportFormats: {
              title: 'Formati di Esportazione',
              formats: {
                pdf: {
                  name: 'PDF',
                  features: 'Formato professionale per stampa e condivisione',
                  usage: 'Adatto per rapporti ufficiali e archiviazione'
                },
                html: {
                  name: 'HTML',
                  features: 'Visualizzazione interattiva nel browser',
                  usage: 'Adatto per condivisione via web'
                },
                json: {
                  name: 'JSON',
                  features: 'Formato dati strutturato',
                  usage: 'Adatto per analisi automatica e importazione'
                },
                markdown: {
                  name: 'Markdown',
                  features: 'Formato testo flessibile',
                  usage: 'Adatto per blog e documentazione'
                }
              }
            },
            pdfModes: {
              title: 'Modalità PDF',
              modes: {
                pixelPerfect: {
                  name: 'Pixel Perfect',
                  subtitle: 'Migliore qualità visiva',
                  description: 'Mantiene il design originale con alta precisione',
                  features: 'Design conforme interfaccia, colori precisi, font chiari'
                },
                reliableFont: {
                  name: 'Font Affidabile',
                  description: 'Si concentra sulla chiarezza del testo e leggibilità',
                  features: 'Font ottimizzati, prestazioni veloci, dimensione file minore'
                },
                textBased: {
                  name: 'Basato su Testo',
                  subtitle: 'Testo ricercabile e copiabile',
                  description: 'Produce PDF puramente testuale e ricercabile',
                  features: 'Testo ricercabile, dimensione piccola, alta compatibilità'
                }
              }
            },
            exportOptions: {
              title: 'Opzioni di Esportazione',
              options: {
                summary: {
                  name: 'Includi Riassunto',
                  description: 'Aggiunge riassunto di risultato e valutazione',
                  formats: 'Disponibile in tutti i formati'
                },
                guides: {
                  name: 'Includi Guide',
                  description: 'Aggiunge guide dettagliate per ogni elemento',
                  formats: 'Disponibile in PDF e HTML'
                },
                notes: {
                  name: 'Includi Note',
                  description: 'Aggiunge le tue note personali',
                  formats: 'Disponibile in tutti i formati'
                },
                sectionBreaks: {
                  name: 'Interruzioni Sezione',
                  description: 'Aggiunge pagine separate per sezioni',
                  formats: 'Disponibile solo in PDF'
                }
              }
            },
            exportNote:
              'Ricorda: tutte le esportazioni sono fatte localmente sul tuo dispositivo senza trasferimento dati'
          },
          historyManagement: {
            title: 'Gestione Cronologia',
            content:
              "L'applicazione salva automaticamente le ultime 5 valutazioni e ti permette di accedere e gestire"
          },
          pwaSupport: {
            title: 'Supporto PWA',
            content:
              "L'applicazione può essere installata sul dispositivo e funzionare completamente offline"
          }
        }
      },
      privacy: {
        title: 'Privacy e Sicurezza',
        emoji: '🔒',
        description: 'Come proteggiamo la tua privacy e i dati',
        content:
          'Siamo impegnati a proteggere la tua privacy attraverso design orientato alla privacy.',
        subSections: {
          localStorage: {
            title: 'Archiviazione Locale',
            content:
              'Tutti i tuoi dati sono memorizzati localmente nel tuo browser e non lasciano mai il tuo dispositivo'
          },
          security: {
            title: 'Sicurezza',
            content: 'Nessuna connessione esterna o tracciamento utenti'
          },
          dataDeletion: {
            title: 'Eliminazione Dati',
            content:
              'Puoi eliminare tutti i tuoi dati in qualsiasi momento cancellando i dati del browser'
          }
        }
      },
      troubleshooting: {
        title: 'Risoluzione Problemi',
        emoji: '🔧',
        description: 'Soluzioni per problemi comuni',
        content: 'Se hai problemi, prova queste soluzioni comuni.',
        subSections: {
          dataNotSaved: {
            title: 'Dati non salvati',
            content:
              "Assicurati che l'archiviazione locale sia abilitata nel browser e che il browser sia aggiornato"
          },
          scoreNotDisplayed: {
            title: 'Punteggio non visualizzato',
            content: 'Assicurati di aver completato la valutazione di tutti gli elementi necessari'
          },
          exportFailed: {
            title: 'Esportazione fallita',
            content:
              'Assicurati che i download siano permessi nel browser e che ci sia spazio sufficiente'
          },
          otherIssues: {
            title: 'Altri problemi',
            content: 'Prova ad aggiornare la pagina o cancellare la cache del browser'
          }
        }
      }
    }
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

  // Informativa sulla Privacy
  privacy: {
    title: 'Informativa sulla Privacy',
    subtitle: 'Il nostro impegno per proteggere la tua privacy',
    lastUpdated: 'Ultimo aggiornamento: 1 gennaio 2025',
    introduction: {
      title: 'Design orientato alla privacy',
      content:
        "Fact Checklist è progettato con la privacy come principio fondamentale. Tutto l'elaborazione dei dati avviene localmente sul tuo dispositivo senza comunicazione server o raccolta dati."
    },
    dataCollection: {
      title: 'Raccolta Dati',
      description: 'Non raccogliamo dati personali o statistiche di utilizzo.',
      details: [
        "Nessuna comunicazione server - tutta l'elaborazione è locale",
        'Nessun cookie di tracciamento o analytics installato',
        'Nessuna informazione personale raccolta',
        'Nessun dato di utilizzo trasmesso'
      ]
    },
    localStorage: {
      title: "Uso dell'Archiviazione Locale",
      description:
        "I dati sono memorizzati solo nel tuo browser per la funzionalità dell'applicazione.",
      details: [
        'Dati di valutazione memorizzati nel localStorage del browser',
        'Preferenze linguistiche salvate localmente',
        'Nessuna sincronizzazione cloud o backup',
        'I dati rimangono solo sul tuo dispositivo'
      ]
    },
    offlineFunctionality: {
      title: 'Funzionalità Offline',
      description: "L'applicazione funziona completamente offline senza richieste di rete.",
      details: [
        'Progressive Web App con service worker',
        'Tutte le risorse memorizzate nella cache localmente',
        'Nessuna chiamata API esterna o recupero dati',
        'Funzionalità completa senza internet'
      ]
    },
    securityMeasures: {
      title: 'Misure di Sicurezza',
      description: 'Misure di sicurezza integrate per proteggere i tuoi dati e la privacy.',
      details: [
        'Content Security Policy (CSP) implementata',
        'Nessun script di terze parti o tracciamento',
        'Pratiche di codifica sicura seguite',
        'Aggiornamenti di sicurezza regolari'
      ]
    },
    dataRetention: {
      title: 'Conservazione dei Dati',
      description: 'Hai il controllo completo sulla conservazione dei tuoi dati.',
      details: [
        'I dati persistono solo finché li mantieni',
        'Cancellazione facile tramite le impostazioni del browser',
        'Nessuna scadenza automatica dei dati',
        'Istruzioni chiare per la rimozione dei dati'
      ]
    },
    policyUpdates: {
      title: 'Aggiornamenti della Politica',
      description:
        'Qualsiasi modifica a questa informativa sulla privacy sarà chiaramente comunicata.',
      details: [
        'Aggiornamenti annunciati sul repository GitHub',
        'Cronologia delle versioni mantenuta',
        'Notifica chiara di cambiamenti significativi',
        "L'uso continuato implica l'accettazione"
      ]
    },
    contact: {
      title: 'Informazioni di Contatto',
      content: 'Se hai domande su questa informativa sulla privacy, contattaci tramite ',
      githubText: 'GitHub Issues',
      suffix: '.'
    }
  },

  // Info sull\'App
  about: {
    title: "Info sull'App",
    subtitle: 'Scopri il nostro sistema completo di verifica dei fatti',
    hero: {
      title: 'Lista di Controllo Pratica per la Verifica dei Fatti',
      subtitle:
        "Un'Applicazione Web Progressiva (PWA) per valutare scientificamente e sistematicamente l'affidabilità delle informazioni",
      description: [
        "In un'era inondata di disinformazione e contenuti fuorvianti, questo strumento pratico supporta il miglioramento dell'alfabetizzazione informativa.",
        "Controllando 20 elementi in 4 categorie, quantifica l'affidabilità delle informazioni e supporta il giudizio oggettivo."
      ],
      startButton: 'Inizia Ora'
    },
    sections: {
      features: 'Caratteristiche',
      howItWorks: 'Come Funziona',
      categories: 'Categorie di Valutazione',
      techStack: 'Tecnologia',
      performance: 'Prestazioni'
    },
    sectionDescriptions: {
      howItWorks: "Valuta l'affidabilità delle informazioni in 4 semplici passaggi",
      categories: 'Valutazione multidimensionale delle informazioni attraverso 4 categorie',
      techStack: "Applicazione ad alte prestazioni costruita con tecnologia all'avanguardia",
      performance: 'Punteggi di alta qualità dagli audit Lighthouse'
    },
    stats: {
      performance: 'Prestazioni',
      accessibility: 'Accessibilità',
      bestPractices: 'Migliori Pratiche',
      seo: 'SEO'
    },
    cta: {
      title: 'Inizia Ora',
      description:
        "Pronto a valutare l'affidabilità delle informazioni in modo scientifico e sistematico?",
      startButton: 'Inizia Valutazione',
      helpButton: 'Scopri di Più'
    },
    features: {
      privacy: {
        title: 'Privacy Prima',
        description:
          'Tutti i dati rimangono sul tuo dispositivo senza tracciamento o raccolta dati',
        details: [
          "Nessuna comunicazione server - tutta l'elaborazione avviene localmente",
          'Nessun tracciamento o analytics installato',
          'Tutti i dati memorizzati solo nel localStorage del browser',
          'Protezione completa della privacy assicurata'
        ]
      },
      offline: {
        title: 'Funzionalità Offline',
        description: 'Funziona completamente offline come Progressive Web App',
        details: [
          'Funzionalità completa disponibile senza connessione internet',
          'Installabile come app desktop/mobile',
          'Service worker per cache offline',
          'Avvio rapido e prestazioni reattive'
        ]
      },
      scientific: {
        title: 'Metodologia Scientifica',
        description: 'Sistema di valutazione basato su evidenze seguendo standard accademici',
        details: [
          'Checklist strutturata di 20 elementi su 4 categorie',
          'Punteggio quantitativo con livelli di confidenza',
          'Basato su standard di giornalismo e ricerca accademica',
          'Processo di valutazione oggettivo e riproducibile'
        ]
      },
      export: {
        title: 'Esportazione Multi-Formato',
        description:
          'Esporta risultati di valutazione in vari formati per condivisione e archiviazione',
        details: [
          'Esportazione PDF con supporto font italiano',
          'Formato HTML per condivisione web',
          'JSON per scambio dati',
          'Markdown per documentazione'
        ]
      },
      history: {
        title: 'Cronologia Valutazioni',
        description: 'Salvataggio automatico e gestione delle valutazioni passate',
        details: [
          'Salvataggio automatico delle valutazioni completate',
          'Accesso rapido alle valutazioni recenti',
          'Capacità di analisi comparativa',
          'Esportazione dei dati storici'
        ]
      },
      support: {
        title: 'Supporto Accessibilità',
        description: 'Progettato per accesso universale e usabilità',
        details: [
          'Compatibilità con screen reader',
          'Supporto navigazione da tastiera',
          'Modalità alto contrasto disponibile',
          'Design responsive per tutti i dispositivi'
        ]
      }
    },
    steps: {
      step1: {
        title: 'Inserire Informazioni',
        description: 'Inserisci il titolo e panoramica delle informazioni da valutare'
      },
      step2: {
        title: 'Valutazione Sistematica',
        description: 'Lavora attraverso la checklist di 20 elementi su 4 categorie'
      },
      step3: {
        title: 'Valutazione Punteggio',
        description:
          'Rivedi il punteggio di affidabilità calcolato automaticamente e il livello di confidenza'
      },
      step4: {
        title: 'Giudizio Finale',
        description: 'Prendi la tua decisione finale ed esporta i risultati se necessario'
      }
    },
    categories: {
      critical: {
        name: 'Valutazione Critica',
        description: 'Elementi essenziali per valutazione di affidabilità di base',
        items: 6
      },
      detailed: {
        name: 'Valutazione Dettagliata',
        description: 'Valutazione approfondita di qualità ed expertise',
        items: 5
      },
      verification: {
        name: 'Verifica e Controllo Incrociato',
        description: 'Valutazione di verifica e evidenze di supporto',
        items: 5
      },
      context: {
        name: 'Contesto e Bias',
        description: "Valutazione dell'adeguatezza del contesto e del bias",
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: 'Framework reattivo più recente con runes per prestazioni ottimali'
      },
      framework: {
        name: 'SvelteKit',
        description: 'Framework full-stack con supporto generazione statica'
      },
      language: {
        name: 'TypeScript',
        description: 'Sviluppo type-safe con configurazione rigorosa'
      },
      styling: {
        name: 'CSS Personalizzato',
        description: 'Styling moderno con proprietà personalizzate CSS e modalità scura'
      },
      pwa: {
        name: 'Progressive Web App',
        description: 'App installabile con funzionalità offline'
      },
      export: {
        name: 'Esportazione Multi-Formato',
        description: 'Capacità di esportazione PDF, HTML, JSON, Markdown'
      }
    }
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
  },
  intro: {
    meta: {
      title:
        'Checklist Pratica di Verifica dei Fatti per Sopravvivere in un Mondo Pieno di Disinformazione',
      keywords:
        "verifica dei fatti,verifica delle informazioni,valutazione dell'affidabilità,PWA,alfabetizzazione informativa,contromisure alla disinformazione"
    },
    hero: {
      title:
        'Checklist Pratica di Verifica dei Fatti per Sopravvivere in un Mondo Pieno di Disinformazione',
      subtitle:
        "Una semplice checklist per valutare l'affidabilità delle informazioni con i tuoi occhi e la tua mente mentre avanzano le regolamentazioni governative dei social media"
    },
    cta: {
      startNow: 'Inizia la Verifica Ora',
      useChecklist: 'Usa la Checklist',
      learnMore: 'Scopri di Più'
    },
    sections: {
      regulation: {
        title:
          "Regolamentazione Governativa dei Social Media e la Realtà del Controllo dell'Informazione",
        quote:
          'Sotto la nobile causa di "rimuovere la disinformazione", chi decide cosa sia la "verità"?',
        content1:
          'Le regolamentazioni dei social media che avanzano a livello mondiale affermano di essere "misure anti-disinformazione", ma in realtà, rischiano di diventare strumenti per controllare informazioni scomode per i governi.',
        content2:
          "Quello di cui abbiamo bisogno è la capacità di giudicare l'affidabilità delle informazioni da soli, senza fare affidamento su governi, media tradizionali o IA."
      },
      balance: {
        title: "Controllo del Discorso vs. Qualità dell'Informazione: Un Approccio Equilibrato",
        control: {
          title: 'Rischi del Controllo',
          content:
            'Determinazione arbitraria della "verità" da parte del potere, soppressione di opinioni diverse, ostacolo all\'innovazione'
        },
        quality: {
          title: 'Miglioramento della Qualità',
          content:
            "Migliorare l'alfabetizzazione informativa individuale, promuovere il pensiero critico, rafforzare le capacità di autogiudizio"
        },
        conclusion:
          'Piuttosto che fare affidamento sulle regolamentazioni, avere ogni persona che sviluppa la capacità di discernere le informazioni forma la base di una società sana.'
      },
      aiLimitations: {
        title: 'Limitazioni della Verifica dei Fatti tramite IA',
        lead: "Mentre l'IA come ChatGPT e Gemini sono convenienti, hanno limitazioni significative per la verifica dei fatti:",
        point1:
          "Bias dei dati di addestramento: L'IA riflette i pregiudizi inerenti nei suoi dati di addestramento",
        point2:
          'Comprensione incompleta del contesto: Interpreta male sfumature sottili, sarcasmo e contesti culturali',
        point3:
          'Eccessiva dipendenza dall\'autorità: Giudica acriticamente le informazioni dai media tradizionali e dalle agenzie governative come "corrette"',
        conclusion:
          "Mentre l'IA può essere utile come riferimento, i giudizi finali dovrebbero essere fatti dagli esseri umani."
      },
      features: {
        title: 'Caratteristiche di Questa App'
      }
    },
    features: {
      systematic: {
        title: 'Valutazione Sistematica',
        description:
          'Valutazione completa dalle fonti di informazione alla struttura logica con una checklist di 20 elementi'
      },
      privacy: {
        title: 'Privacy Completa',
        description:
          'Tutti i dati memorizzati sul dispositivo. Nessuna trasmissione a server esterni'
      },
      pwa: {
        title: 'Supporto Offline',
        description: 'Disponibile anche senza connessione internet grazie alla tecnologia PWA'
      },
      multilingual: {
        title: 'Supporto per 12 Lingue',
        description: 'Supporto completo per 12 lingue inclusi giapponese, inglese e cinese'
      }
    },
    finalCta: {
      title: 'Iniziamo Ora',
      subtitle: 'Allena il tuo giudizio per evitare di annegare nel mare di informazioni'
    },
    share: {
      title: 'Condividi Questo Strumento'
    }
  }
};

export default translations;
