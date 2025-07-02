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
    guide: 'Leitfaden',
    showGuide: 'Leitfaden anzeigen',
    rip: {
      high: 'Hohes Risiko',
      medium: 'Mittleres Risiko',
      low: 'Niedriges Risiko'
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

  // Seitenspezifische Metadaten
  pages: {
    home: {
      title: 'Fact Checklist - Praktische Bewertung der Informationszuverlässigkeit',
      description:
        'Bewerten Sie systematisch die Informationszuverlässigkeit mit 20 Checklisten-Elementen. Beurteilen Sie Informationen mit Ihren eigenen Augen und Ihrem Verstand, ohne auf KI oder Regierung angewiesen zu sein.',
      keywords:
        'Faktenchecking,Informationsverifizierung,Zuverlässigkeitsbewertung,PWA,Informationskompetenz,Desinformations-Gegenmaßnahmen'
    },
    about: {
      title: 'Über Diese App - Fact Checklist',
      description:
        'Erfahren Sie mehr über den Entwicklungshintergrund, die Funktionen und die Nutzung von Fact Checklist. Ein Tool zur eigenständigen Beurteilung der Informationszuverlässigkeit.',
      keywords:
        'App-Überblick,Entwicklungsphilosophie,Informationsbewertung,Zuverlässigkeitsbeurteilung,Faktenchecking,Anleitung'
    },
    help: {
      title: 'Hilfe & Anleitung - Fact Checklist',
      description:
        'Detaillierte Nutzungsanweisungen, Erklärungen der Checklisten-Elemente und Tipps für eine effektive Informationsbewertung.',
      keywords: 'Anleitung,Hilfe,Checklisten-Elemente,Informationsbewertung,Leitfaden,Anweisungen'
    },
    privacy: {
      title: 'Datenschutzrichtlinie - Fact Checklist',
      description:
        'Informationen über den Umgang mit persönlichen Daten. Alle Daten werden lokal gespeichert und nicht extern übertragen.',
      keywords:
        'Datenschutz,persönliche Informationen,Datensicherheit,lokale Speicherung,Sicherheit'
    },
    intro: {
      title: 'Praktische Faktencheck-Checkliste zum Überleben in einer Welt voller Desinformation',
      description:
        'Eine einfache Checkliste zur Bewertung der Informationszuverlässigkeit mit Ihren eigenen Augen und Ihrem Verstand, während die staatliche Regulierung sozialer Netzwerke voranschreitet. Bewerten Sie Informationen wissenschaftlich und systematisch, ohne blind KI oder Medien zu vertrauen.',
      keywords:
        'Faktenchecking,Informationsverifizierung,Zuverlässigkeitsbewertung,PWA,Informationskompetenz,Desinformations-Gegenmaßnahmen,Social-Media-Regulierung,Informationskontrolle,Informationsqualität,KI-Faktenchecking'
    }
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
    completed: 'Abgeschlossen',
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
      high: 'Hohe Zuverlässigkeit',
      medium: 'Mittlere Zuverlässigkeit',
      low: 'Niedrige Zuverlässigkeit',
      poor: 'Zuverlässigkeitsprobleme'
    },
    advice: {
      high: 'Annahme empfohlen. Ausreichende Verifizierung wurde durchgeführt.',
      medium:
        'Zusätzliche Bestätigung empfohlen. Seien Sie bei wichtigen Entscheidungen vorsichtig.',
      low: 'Vorsicht erforderlich. Weitere Verifizierung ist nötig.',
      poor: 'Ablehnung empfohlen. Suchen Sie nach zuverlässigen Informationsquellen.'
    },
    evaluationCompleted: '✓ Bewertung Abgeschlossen!',
    evaluationCompletedDescription: 'Sie können die Ergebnisse der Checklisten-Bewertung einsehen.',
    evaluationResults: 'Bewertungsergebnisse',
    totalScore: 'Gesamtpunktzahl',
    itemsDetail: 'Detaillierte Elemente',
    recommendedActions: 'Empfohlene Maßnahmen',
    improvementTips: 'Zur Verbesserung der Zuverlässigkeit',
    checkUncheckedItems: 'Ungeprüfte Elemente überprüfen',
    additionalSourceResearch: 'Zusätzliche Quellenforschung',
    expertConsultation: 'Expertenberatung',
    factCheckOrganizations: 'Faktenprüfungsorganisationen nutzen',
    statistics: 'Statistiken',
    checkedItems: 'Geprüft',
    uncheckedItems: 'Ungeprüft',
    completionRate: 'Fertigstellungsgrad',
    actions: 'Aktionen',
    exportShare: 'Exportieren & Teilen',
    reEdit: 'Neu bearbeiten'
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
    pdfMode: 'PDF-Generierungsmodus',
    pdfModes: {
      pixelPerfect: 'Pixel Perfect',
      pixelPerfectDescription: 'Exakte Browser-Anzeige-Übereinstimmung',
      reliableFont: 'Schrift-Zuverlässigkeitsfokus',
      reliableFontDescription: 'Zuverlässige mehrsprachige Schrift-Einbettung',
      textBased: 'Textbasiert',
      textBasedDescription: 'Durchsuchbares leichtgewichtiges PDF'
    },
    formats: {
      pdf: 'PDF',
      html: 'HTML',
      json: 'JSON',
      markdown: 'Markdown'
    },
    progress: {
      starting: 'Wird gestartet...',
      initializing: 'Initialisierung...',
      generating: 'Generierung...',
      processing: 'Verarbeitung...',
      finalizing: 'Finalisierung...',
      completed: 'Abgeschlossen',
      failed: 'Fehlgeschlagen'
    },
    generatedAt: 'Erstellt am',
    summaryTable: {
      item: 'Element',
      value: 'Wert'
    },
    table: {
      section: 'Abschnitt',
      completionRate: 'Fertigstellungsgrad',
      completedItems: 'Abgeschlossene Elemente'
    },
    sectionCompletionRates: 'Abschnitts-Fertigstellungsgrade',
    achievementStatus: 'Erfolgsstatus',
    goodExamples: 'Gute Beispiele',
    badExamples: 'Schlechte Beispiele',
    completed: 'Abgeschlossen',
    items: 'Elemente',
    metadata: {
      created: 'Erstellt',
      score: 'Punktzahl',
      confidence: 'Vertrauen',
      language: 'Sprache'
    },
    summary: {
      title: 'Bewertungszusammenfassung',
      totalScore: 'Gesamtpunktzahl',
      completionRate: 'Fertigstellungsgrad',
      confidenceLevel: 'Vertrauensniveau',
      checkedItems: 'Geprüfte Elemente'
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
    subtitle: 'Detaillierte Anleitung zur Verwendung der Faktencheck-Checkliste',
    tableOfContents: 'Inhaltsverzeichnis',
    navigation: {
      overview: 'Übersicht',
      usage: 'Verwendung',
      categories: 'Kategorien',
      scoring: 'Bewertung',
      features: 'Funktionen',
      privacy: 'Datenschutz',
      troubleshooting: 'Fehlerbehebung'
    },
    sections: {
      overview: {
        title: 'App-Übersicht',
        emoji: '📋',
        description: 'Grundlegende Verwendung der Faktencheck-Checkliste',
        content:
          'Diese App ist ein Werkzeug zur wissenschaftlichen und systematischen Bewertung der Glaubwürdigkeit von Informationen im Internet.',
        subSections: {
          features: {
            title: 'Hauptmerkmale',
            content:
              '• Vollständige Privatsphäre: Alle Daten werden lokal gespeichert\n• Offline-fähig\n• Wissenschaftliche Bewertung\n• Verlaufsverwaltung'
          },
          targetUsers: {
            title: 'Zielgruppe',
            content:
              'Journalisten, Forscher, Studenten und alle, die an der Bewertung der Informationsglaubwürdigkeit interessiert sind'
          }
        }
      },
      usage: {
        title: 'Verwendung',
        emoji: '🔍',
        description: 'Schritt-für-Schritt-Anleitung zur App-Nutzung',
        content:
          'Folgen Sie diesen Schritten, um die Glaubwürdigkeit von Informationen systematisch zu bewerten.',
        subSections: {
          step1: {
            title: 'Schritt 1: Informationen eingeben',
            content: 'Geben Sie Titel und Beschreibung der zu bewertenden Informationen ein'
          },
          step2: {
            title: 'Schritt 2: Elemente bewerten',
            content: 'Bewerten Sie jedes Listenelement basierend auf verfügbaren Belegen'
          },
          step3: {
            title: 'Schritt 3: Ergebnis überprüfen',
            content: 'Überprüfen Sie das berechnete Ergebnis und Vertrauensniveau'
          },
          step4: {
            title: 'Schritt 4: Endgültige Entscheidung',
            content:
              'Treffen Sie Ihre endgültige Entscheidung basierend auf der Bewertung: Akzeptieren, Vorsicht oder Ablehnen'
          }
        }
      },
      categories: {
        title: 'Bewertungskategorien',
        emoji: '📊',
        description: 'Die vier Hauptkategorien der Bewertung',
        content:
          'Bewertungselemente sind in vier Hauptkategorien organisiert, um eine umfassende Bewertung zu gewährleisten.',
        subSections: {
          critical: {
            title: 'Kritische Bewertung',
            content:
              'Die wichtigsten Elemente zur Bestimmung der grundlegenden Glaubwürdigkeit von Informationen'
          },
          detailed: {
            title: 'Detaillierte Bewertung',
            content: 'Elemente zur Bewertung der Qualität und Expertise von Informationen'
          },
          verification: {
            title: 'Verifikation und Kreuzprüfung',
            content:
              'Elemente zur Bestätigung der Überprüfbarkeit und Unterstützung von Informationen'
          },
          context: {
            title: 'Kontext- und Bias-Bewertung',
            content: 'Elemente zur Bewertung der Angemessenheit von Bias und Kontext'
          }
        }
      },
      scoring: {
        title: 'Bewertungssystem',
        emoji: '🎯',
        description: 'Wie Punkte und Vertrauensniveau berechnet werden',
        content:
          'Die Punktzahl wird basierend auf der Anzahl erfüllter Elemente von der Gesamtzahl der Elemente berechnet.',
        subSections: {
          calculation: {
            title: 'Berechnungsmethode',
            content: 'Punktzahl = (Anzahl erfüllter Elemente / Gesamtzahl der Elemente) × 100'
          },
          criteria: {
            title: 'Bewertungskriterien',
            content:
              '• 80%+: Hohe Glaubwürdigkeit\n• 60-79%: Mittlere Glaubwürdigkeit\n• 40-59%: Niedrige Glaubwürdigkeit\n• <40%: Glaubwürdigkeitsprobleme'
          },
          finalJudgment: {
            title: 'Endgültige Entscheidung',
            content:
              'Verwenden Sie die Punktzahl als Leitfaden, aber die endgültige Entscheidung hängt von Ihrem persönlichen Urteil ab'
          }
        }
      },
      features: {
        title: 'Funktionen',
        emoji: '⭐',
        description: 'Erweiterte App-Funktionen',
        content:
          'Die App bietet mehrere erweiterte Funktionen zur Verbesserung der Benutzererfahrung.',
        subSections: {
          detailedGuide: {
            title: 'Detaillierte Leitfäden',
            content:
              'Jedes Bewertungselement enthält einen detaillierten Leitfaden und praktische Beispiele zur Unterstützung Ihrer Bewertung'
          },
          exportFunction: {
            title: 'Exportfunktion',
            content:
              'Sie können Bewertungsergebnisse in mehreren Formaten exportieren (PDF, HTML, JSON, Markdown)',
            exportFormats: {
              title: 'Exportformate',
              formats: {
                pdf: {
                  name: 'PDF',
                  features: 'Professionelles Format zum Drucken und Teilen',
                  usage: 'Geeignet für offizielle Berichte und Archivierung'
                },
                html: {
                  name: 'HTML',
                  features: 'Interaktive Anzeige im Browser',
                  usage: 'Geeignet zum Teilen über das Web'
                },
                json: {
                  name: 'JSON',
                  features: 'Strukturiertes Datenformat',
                  usage: 'Geeignet für automatische Analyse und Import'
                },
                markdown: {
                  name: 'Markdown',
                  features: 'Flexibles Textformat',
                  usage: 'Geeignet für Blogs und Dokumentation'
                }
              }
            },
            pdfModes: {
              title: 'PDF-Modi',
              modes: {
                pixelPerfect: {
                  name: 'Pixelgenau',
                  subtitle: 'Beste visuelle Qualität',
                  description: 'Behält das ursprüngliche Design mit hoher Genauigkeit bei',
                  features: 'Interface-konformes Design, genaue Farben, klare Schriften'
                },
                reliableFont: {
                  name: 'Zuverlässige Schrift',
                  description: 'Fokus auf Textklarheit und Lesbarkeit',
                  features: 'Optimierte Schriften, schnelle Leistung, kleinere Dateigröße'
                },
                textBased: {
                  name: 'Textbasiert',
                  subtitle: 'Durchsuchbarer und kopierbarer Text',
                  description: 'Erzeugt rein textuelle, durchsuchbare PDF',
                  features: 'Durchsuchbarer Text, kleine Größe, hohe Kompatibilität'
                }
              }
            },
            exportOptions: {
              title: 'Exportoptionen',
              options: {
                summary: {
                  name: 'Zusammenfassung einschließen',
                  description: 'Fügt Ergebnis- und Bewertungszusammenfassung hinzu',
                  formats: 'Verfügbar in allen Formaten'
                },
                guides: {
                  name: 'Leitfäden einschließen',
                  description: 'Fügt detaillierte Leitfäden für jedes Element hinzu',
                  formats: 'Verfügbar in PDF und HTML'
                },
                notes: {
                  name: 'Notizen einschließen',
                  description: 'Fügt Ihre persönlichen Notizen hinzu',
                  formats: 'Verfügbar in allen Formaten'
                },
                sectionBreaks: {
                  name: 'Abschnittsumbrüche',
                  description: 'Fügt separate Seiten für Abschnitte hinzu',
                  formats: 'Nur in PDF verfügbar'
                }
              }
            },
            exportNote:
              'Denken Sie daran: Alle Exporte erfolgen lokal auf Ihrem Gerät ohne Datenübertragung'
          },
          historyManagement: {
            title: 'Verlaufsverwaltung',
            content:
              'Die App speichert automatisch die letzten 5 Bewertungen und ermöglicht Ihnen den Zugriff und die Verwaltung'
          },
          pwaSupport: {
            title: 'PWA-Unterstützung',
            content:
              'Die App kann auf dem Gerät installiert und vollständig offline verwendet werden'
          }
        }
      },
      privacy: {
        title: 'Datenschutz und Sicherheit',
        emoji: '🔒',
        description: 'Wie wir Ihre Privatsphäre und Daten schützen',
        content:
          'Wir sind dem Schutz Ihrer Privatsphäre durch datenschutzorientiertes Design verpflichtet.',
        subSections: {
          localStorage: {
            title: 'Lokale Speicherung',
            content:
              'Alle Ihre Daten werden lokal in Ihrem Browser gespeichert und verlassen niemals Ihr Gerät'
          },
          security: {
            title: 'Sicherheit',
            content: 'Keine externen Verbindungen oder Benutzer-Tracking'
          },
          dataDeletion: {
            title: 'Datenlöschung',
            content:
              'Sie können alle Ihre Daten jederzeit durch Löschen der Browser-Daten entfernen'
          }
        }
      },
      troubleshooting: {
        title: 'Fehlerbehebung',
        emoji: '🔧',
        description: 'Lösungen für häufige Probleme',
        content: 'Wenn Sie Probleme haben, versuchen Sie diese häufigen Lösungen.',
        subSections: {
          dataNotSaved: {
            title: 'Daten werden nicht gespeichert',
            content:
              'Stellen Sie sicher, dass lokale Speicherung im Browser aktiviert ist und der Browser aktuell ist'
          },
          scoreNotDisplayed: {
            title: 'Punktzahl wird nicht angezeigt',
            content: 'Stellen Sie sicher, dass alle erforderlichen Elemente bewertet wurden'
          },
          exportFailed: {
            title: 'Export fehlgeschlagen',
            content:
              'Stellen Sie sicher, dass Downloads im Browser erlaubt sind und ausreichend Speicherplatz vorhanden ist'
          },
          otherIssues: {
            title: 'Andere Probleme',
            content: 'Versuchen Sie, die Seite zu aktualisieren oder den Browser-Cache zu leeren'
          }
        }
      }
    }
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

  // Datenschutzerklärung
  privacy: {
    title: 'Datenschutzerklärung',
    subtitle: 'Unser Engagement für den Schutz Ihrer Privatsphäre',
    lastUpdated: 'Zuletzt aktualisiert: 1. Januar 2025',
    introduction: {
      title: 'Datenschutz-orientiertes Design',
      content:
        'Fact Checklist ist mit Datenschutz als Kernprinzip entworfen. Alle Datenverarbeitung erfolgt lokal auf Ihrem Gerät ohne Server-Kommunikation oder Datensammlung.'
    },
    dataCollection: {
      title: 'Datensammlung',
      description: 'Wir sammeln keine persönlichen Daten oder Nutzungsstatistiken.',
      details: [
        'Keine Server-Kommunikation - alle Verarbeitung lokal',
        'Keine Tracking-Cookies oder Statistiken installiert',
        'Keine persönlichen Informationen gesammelt',
        'Keine Nutzungsdaten übertragen'
      ]
    },
    localStorage: {
      title: 'Lokale Speichernutzung',
      description: 'Daten werden nur in Ihrem Browser für Anwendungsfunktionalität gespeichert.',
      details: [
        'Bewertungsdaten im Browser-localStorage gespeichert',
        'Spracheinstellungen lokal gespeichert',
        'Keine Cloud-Synchronisation oder Backup',
        'Daten bleiben nur auf Ihrem Gerät'
      ]
    },
    offlineFunctionality: {
      title: 'Offline-Funktionalität',
      description: 'Die Anwendung funktioniert vollständig offline ohne jegliche Netzwerkanfragen.',
      details: [
        'Progressive Web App mit Service Worker',
        'Alle Ressourcen lokal zwischengespeichert',
        'Keine externen API-Aufrufe oder Datenabrufe',
        'Vollständige Funktionalität ohne Internet'
      ]
    },
    securityMeasures: {
      title: 'Sicherheitsmaßnahmen',
      description: 'Eingebaute Sicherheitsmaßnahmen zum Schutz Ihrer Daten und Privatsphäre.',
      details: [
        'Content Security Policy (CSP) implementiert',
        'Keine Drittanbieter-Skripte oder Tracking',
        'Sichere Kodierungspraktiken befolgt',
        'Regelmäßige Sicherheitsupdates'
      ]
    },
    dataRetention: {
      title: 'Datenaufbewahrung',
      description: 'Sie haben vollständige Kontrolle über Ihre Datenaufbewahrung.',
      details: [
        'Daten bleiben nur so lange, wie Sie sie behalten',
        'Einfache Löschung über Browser-Einstellungen',
        'Keine automatische Datenablaufzeit',
        'Klare Anweisungen zur Datenentfernung'
      ]
    },
    policyUpdates: {
      title: 'Richtlinien-Updates',
      description: 'Alle Änderungen an dieser Datenschutzerklärung werden klar kommuniziert.',
      details: [
        'Updates auf GitHub-Repository angekündigt',
        'Versionshistorie wird gepflegt',
        'Klare Benachrichtigung über wichtige Änderungen',
        'Fortgesetzte Nutzung impliziert Akzeptanz'
      ]
    },
    contact: {
      title: 'Kontaktinformationen',
      content:
        'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte über ',
      githubText: 'GitHub Issues',
      suffix: '.'
    }
  },

  // Über die App
  about: {
    title: 'Über die App',
    subtitle: 'Erfahren Sie mehr über unser umfassendes Faktencheck-System',
    hero: {
      title: 'Praktische Faktencheck-Checkliste',
      subtitle:
        'Eine Progressive Web App (PWA) zur wissenschaftlichen und systematischen Bewertung der Informationszuverlässigkeit',
      description: [
        'In einer Zeit, die von Fehlinformationen und irreführenden Inhalten überflutet wird, unterstützt dieses praktische Tool die Verbesserung der Informationskompetenz.',
        'Durch die Überprüfung von 20 Elementen in 4 Kategorien quantifiziert es die Informationszuverlässigkeit und unterstützt objektive Urteile.'
      ],
      startButton: 'Jetzt Loslegen'
    },
    sections: {
      features: 'Funktionen',
      howItWorks: 'Wie es funktioniert',
      categories: 'Bewertungskategorien',
      techStack: 'Technologie',
      performance: 'Leistung'
    },
    sectionDescriptions: {
      howItWorks: 'Bewerten Sie die Informationszuverlässigkeit in 4 einfachen Schritten',
      categories: 'Mehrdimensionale Informationsbewertung über 4 Kategorien',
      techStack: 'Hochleistungsanwendung mit modernster Technologie',
      performance: 'Hochwertige Bewertungen von Lighthouse-Audits'
    },
    stats: {
      performance: 'Leistung',
      accessibility: 'Barrierefreiheit',
      bestPractices: 'Bewährte Praktiken',
      seo: 'SEO'
    },
    cta: {
      title: 'Jetzt loslegen',
      description:
        'Bereit, die Informationszuverlässigkeit wissenschaftlich und systematisch zu bewerten?',
      startButton: 'Bewertung starten',
      helpButton: 'Mehr erfahren'
    },
    features: {
      privacy: {
        title: 'Datenschutz zuerst',
        description: 'Alle Daten bleiben auf Ihrem Gerät ohne Tracking oder Datensammlung',
        details: [
          'Keine Server-Kommunikation - alle Verarbeitung lokal',
          'Keine Tracking oder Analytics installiert',
          'Alle Daten nur im Browser-localStorage gespeichert',
          'Vollständiger Datenschutz gewährleistet'
        ]
      },
      offline: {
        title: 'Offline-Funktionalität',
        description: 'Funktioniert vollständig offline als Progressive Web App',
        details: [
          'Vollständige Funktionalität ohne Internetverbindung verfügbar',
          'Installierbar als Desktop-/Mobile-App',
          'Service Worker für Offline-Caching',
          'Schneller Start und reaktionsfähige Leistung'
        ]
      },
      scientific: {
        title: 'Wissenschaftliche Methodik',
        description: 'Evidenzbasiertes Bewertungssystem nach akademischen Standards',
        details: [
          '20-Punkte strukturierte Checkliste über 4 Kategorien',
          'Quantitative Bewertung mit Vertrauensniveaus',
          'Basiert auf Journalismus- und akademischen Forschungsstandards',
          'Objektiver und reproduzierbarer Bewertungsprozess'
        ]
      },
      export: {
        title: 'Multi-Format-Export',
        description:
          'Exportieren Sie Bewertungsergebnisse in verschiedenen Formaten für Teilen und Archivierung',
        details: [
          'PDF-Export mit deutscher Schriftunterstützung',
          'HTML-Format für Web-Sharing',
          'JSON für Datenaustausch',
          'Markdown für Dokumentation'
        ]
      },
      history: {
        title: 'Bewertungsverlauf',
        description: 'Automatisches Speichern und Verwalten vergangener Bewertungen',
        details: [
          'Automatisches Speichern abgeschlossener Bewertungen',
          'Schneller Zugriff auf kürzliche Bewertungen',
          'Vergleichsanalysefähigkeiten',
          'Export historischer Daten'
        ]
      },
      support: {
        title: 'Barrierefreiheits-Unterstützung',
        description: 'Entworfen für universellen Zugang und Benutzerfreundlichkeit',
        details: [
          'Bildschirmleser-Kompatibilität',
          'Tastaturnavigations-Unterstützung',
          'Hoher Kontrast-Modus verfügbar',
          'Reaktionsfähiges Design für alle Geräte'
        ]
      }
    },
    steps: {
      step1: {
        title: 'Informationen eingeben',
        description: 'Geben Sie Titel und Übersicht der zu bewertenden Informationen ein'
      },
      step2: {
        title: 'Systematische Bewertung',
        description: 'Arbeiten Sie durch die 20-Punkte-Checkliste über 4 Kategorien'
      },
      step3: {
        title: 'Bewertung der Punktzahl',
        description:
          'Überprüfen Sie die automatisch berechnete Zuverlässigkeitspunktzahl und Vertrauensniveau'
      },
      step4: {
        title: 'Endurteil',
        description:
          'Treffen Sie Ihre endgültige Entscheidung und exportieren Sie Ergebnisse nach Bedarf'
      }
    },
    categories: {
      critical: {
        name: 'Kritische Bewertung',
        description: 'Wesentliche Punkte für grundlegende Zuverlässigkeitsbewertung',
        items: 6
      },
      detailed: {
        name: 'Detaillierte Bewertung',
        description: 'Tiefgehende Qualitäts- und Expertise-Bewertung',
        items: 5
      },
      verification: {
        name: 'Verifizierung & Kreuzprüfung',
        description: 'Verifizierung und unterstützende Evidenz-Bewertung',
        items: 5
      },
      context: {
        name: 'Kontext & Vorurteil',
        description: 'Kontextangemessenheit und Vorurteilsbewertung',
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: 'Neuestes reaktives Framework mit Runes für optimale Leistung'
      },
      framework: {
        name: 'SvelteKit',
        description: 'Full-Stack-Framework mit statischer Generierung'
      },
      language: {
        name: 'TypeScript',
        description: 'Typsichere Entwicklung mit strikter Konfiguration'
      },
      styling: {
        name: 'Benutzerdefiniertes CSS',
        description: 'Modernes Styling mit CSS-Custom-Properties und Dunkelmodus'
      },
      pwa: {
        name: 'Progressive Web App',
        description: 'Installierbare App mit Offline-Funktionalität'
      },
      export: {
        name: 'Multi-Format-Export',
        description: 'PDF-, HTML-, JSON-, Markdown-Exportfähigkeiten'
      }
    }
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
  },
  intro: {
    meta: {
      title:
        'Praktische Faktencheck-Checkliste zum Überleben in einer Welt voller Fehlinformationen',
      keywords:
        'Faktencheck,Faktenuberprufung,Informationsverifikation,Zuverlassigkeitsbewertung,PWA,Informationskompetenz,Fehlinformationsbekampfung'
    },
    hero: {
      title:
        'Praktische Faktencheck-Checkliste zum Überleben in einer Welt voller Fehlinformationen',
      subtitle:
        'Eine einfache Checkliste zur Bewertung der Informationszuverlässigkeit mit eigenen Augen und Verstand, während staatliche SNS-Regulierungen voranschreiten'
    },
    cta: {
      startNow: 'Jetzt Prüfung starten',
      useChecklist: 'Checkliste verwenden',
      learnMore: 'Mehr erfahren'
    },
    sections: {
      regulation: {
        title: 'Staatliche SNS-Regulierung und die Realität der Informationskontrolle',
        quote:
          'Unter dem noblen Vorwand der "Entfernung von Fehlinformationen" - wer entscheidet, was "Wahrheit" ist?',
        content1:
          'Weltweit voranschreitende SNS-Regulierungen behaupten, "Anti-Fehlinformations-Maßnahmen" zu sein, drohen aber in Wirklichkeit zu Werkzeugen zur Kontrolle regierungsunbequemer Informationen zu werden.',
        content2:
          'Was wir brauchen, ist die Fähigkeit, Informationszuverlässigkeit selbst zu beurteilen, ohne uns auf Regierungen, Mainstream-Medien oder KI zu verlassen.'
      },
      balance: {
        title: 'Meinungskontrolle vs. Informationsqualität: Ein ausgewogener Ansatz',
        control: {
          title: 'Risiken der Kontrolle',
          content:
            'Willkürliche Bestimmung der "Wahrheit" durch die Macht, Unterdrückung vielfältiger Meinungen, Behinderung von Innovation'
        },
        quality: {
          title: 'Qualitätsverbesserung',
          content:
            'Verbesserung der individuellen Informationskompetenz, Förderung kritischen Denkens, Stärkung der Selbsturteilsfähigkeit'
        },
        conclusion:
          'Anstatt sich auf Regulierungen zu verlassen, bildet die Entwicklung der Fähigkeit jedes Einzelnen, Informationen zu unterscheiden, das Fundament einer gesunden Gesellschaft.'
      },
      aiLimitations: {
        title: 'Grenzen des KI-Faktenchecks',
        lead: 'Während KI wie ChatGPT und Gemini praktisch sind, haben sie erhebliche Einschränkungen beim Faktencheck:',
        point1: 'Trainingsdaten-Bias: KI spiegelt in Trainingsdaten enthaltene Vorurteile wider',
        point2:
          'Unvollständiges Kontextverständnis: Missversteht subtile Nuancen, Sarkasmus und kulturelle Kontexte',
        point3:
          'Überabhängigkeit von Autorität: Beurteilt unkritisch Informationen von Mainstream-Medien und Regierungsbehörden als "korrekt"',
        conclusion:
          'Während KI als Referenz hilfreich sein kann, sollten endgültige Urteile von Menschen gefällt werden.'
      },
      features: {
        title: 'Funktionen dieser App'
      }
    },
    features: {
      systematic: {
        title: 'Systematische Bewertung',
        description:
          'Umfassende Bewertung von Informationsquellen bis zur logischen Struktur mit einer 20-Punkte-Checkliste'
      },
      privacy: {
        title: 'Vollständige Privatsphäre',
        description: 'Alle Daten auf dem Gerät gespeichert. Keine Übertragung an externe Server'
      },
      pwa: {
        title: 'Offline-Unterstützung',
        description: 'Dank PWA-Technologie auch ohne Internetverbindung verfügbar'
      },
      multilingual: {
        title: '12-Sprachen-Unterstützung',
        description:
          'Vollständige Unterstützung für 12 Sprachen einschließlich Japanisch, Englisch und Chinesisch'
      }
    },
    finalCta: {
      title: 'Lassen Sie uns jetzt beginnen',
      subtitle: 'Trainieren Sie Ihr Urteilsvermögen, um nicht im Informationsmeer zu ertrinken'
    },
    share: {
      title: 'Dieses Tool teilen'
    }
  }
};

export default translations;
