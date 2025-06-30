/**
 * French translation file template
 * French (fr) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
  language: 'fr' as const,
  version: '1.0.0',
  lastUpdated: '2025-06-29',
  translator: 'Claude Code',
  completeness: 100
};

export const translations: TranslationKeys = {
  // Interface commune
  common: {
    loading: 'Chargement...',
    error: 'Une erreur est survenue',
    success: 'Succès',
    cancel: 'Annuler',
    save: 'Enregistrer',
    delete: 'Supprimer',
    edit: 'Modifier',
    close: 'Fermer',
    back: 'Retour',
    next: 'Suivant',
    previous: 'Précédent',
    search: 'Rechercher',
    clear: 'Effacer',
    reset: 'Réinitialiser',
    copy: 'Copier',
    download: 'Télécharger',
    share: 'Partager',
    print: 'Imprimer',
    export: 'Exporter',
    import: 'Importer',
    settings: 'Paramètres',
    help: 'Aide',
    about: 'À propos',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    home: 'Accueil',
    menu: 'Menu',
    languages: 'Langues',
    darkMode: 'Mode sombre',
    lightMode: 'Mode clair',
    systemMode: 'Système',
    guide: 'Guide',
    showGuide: 'Afficher le Guide',
    rip: {
      high: 'Risque Élevé',
      medium: 'Risque Moyen',
      low: 'Risque Faible'
    }
  },

  // Application spécifique
  app: {
    title: 'Liste de Vérification Factuelle Pratique',
    subtitle: 'Un système complet pour évaluer scientifiquement la fiabilité des informations',
    description:
      'Une liste de vérification pour évaluer scientifiquement et systématiquement la fiabilité des informations',
    version: '1.0.0',
    author: 'Équipe Liste de Vérification Factuelle',
    copyright: '© 2025 Équipe Liste de Vérification Factuelle',
    poweredBy: 'Propulsé par'
  },

  // Navigation
  navigation: {
    home: 'Accueil',
    about: 'À propos',
    help: 'Aide et Utilisation',
    privacy: 'Confidentialité',
    checklist: 'Liste de Vérification',
    history: 'Historique',
    settings: 'Paramètres'
  },

  // Liste de vérification
  checklist: {
    title: 'Informations de la Liste de Vérification',
    description: 'Détails de la liste de vérification',
    newChecklist: 'Nouvelle Liste de Vérification',
    createChecklist: 'Créer une Liste de Vérification',
    editChecklist: 'Modifier la Liste de Vérification',
    deleteChecklist: 'Supprimer la Liste de Vérification',
    completeChecklist: "Terminer l'Évaluation",
    checklistTitle: 'Titre',
    checklistDescription: 'Aperçu des Informations Cibles',
    targetInfo: 'Informations Cibles',
    targetInfoPlaceholder: "Exemple: Article sur l'efficacité du vaccin COVID-19",
    evaluationNotes: "Notes d'Évaluation et Éléments de Vérification Supplémentaires",
    evaluationNotesPlaceholder:
      'Enregistrez toute question, éléments à vérifier, impressions générales, etc...',
    score: "Score d'Évaluation",
    confidenceLevel: 'Niveau de Confiance',
    finalJudgment: 'Jugement Final',
    judgment: {
      accept: 'Accepter',
      caution: 'Attention',
      reject: 'Rejeter',
      pending: 'En attente'
    },
    judgmentAdvice: {
      accept: 'Adoption recommandée. Vérification suffisante effectuée.',
      caution:
        'Vérification supplémentaire recommandée. Soyez prudent avec les décisions importantes.',
      reject: 'Rejet recommandé. Recherchez des sources plus fiables.'
    },
    confidence: {
      high: 'Fiabilité Élevée',
      medium: 'Fiabilité Modérée',
      low: 'Fiabilité Faible',
      poor: 'Problèmes de Fiabilité'
    },
    advice: {
      high: 'Adoption recommandée. Vérification suffisante effectuée.',
      medium:
        'Confirmation supplémentaire recommandée. Soyez prudent avec les décisions importantes.',
      low: 'Prudence requise. Vérification supplémentaire nécessaire.',
      poor: "Rejet recommandé. Recherchez des sources d'information fiables."
    }
  },

  // Catégories d'éléments de vérification
  categories: {
    critical: {
      name: 'Évaluation Critique (Requis)',
      description:
        'Éléments les plus importants pour déterminer la fiabilité de base des informations',
      emoji: '🚨'
    },
    detailed: {
      name: 'Évaluation Détaillée (Important)',
      description: "Éléments pour évaluer la qualité et l'expertise des informations",
      emoji: '📝'
    },
    verification: {
      name: 'Vérification et Recoupement',
      description: 'Éléments pour confirmer la vérifiabilité et le soutien des informations',
      emoji: '🔍'
    },
    context: {
      name: 'Évaluation du Contexte et des Biais',
      description: "Éléments pour évaluer l'appropriateness des biais et du contexte",
      emoji: '🌐'
    }
  },

  // Fonctionnalité d'exportation
  export: {
    title: 'Exporter',
    description: 'Exporter la liste de vérification dans divers formats',
    format: 'Format',
    options: 'Options',
    includeGuides: 'Inclure les Guides',
    includeNotes: 'Inclure les Notes',
    includeSummary: 'Inclure le Résumé',
    sectionBreaks: 'Sauts de Section',
    pdfModes: {
      pixelPerfect: 'Pixel Perfect',
      reliableFont: 'Focus Fiabilité Police',
      textBased: 'Basé sur le Texte'
    },
    formats: {
      pdf: 'PDF',
      html: 'HTML',
      json: 'JSON',
      markdown: 'Markdown'
    },
    progress: {
      initializing: 'Initialisation...',
      generating: 'Génération...',
      processing: 'Traitement...',
      finalizing: 'Finalisation...',
      completed: 'Terminé',
      failed: 'Échec'
    }
  },

  // Historique
  history: {
    title: "Historique d'Évaluation",
    description: "Résultats d'évaluation passés",
    empty: 'Aucun historique disponible',
    lastEvaluated: 'Dernière Évaluation',
    viewResults: 'Voir les Résultats',
    deleteHistory: "Supprimer l'Historique",
    clearAll: 'Tout Effacer',
    recent: 'Évaluations Récentes',
    viewAll: 'Voir Tout',
    createFirst: 'Créons votre première liste de vérification!'
  },

  // Messages d'erreur
  errors: {
    general: "Une erreur inattendue s'est produite",
    network: "Une erreur réseau s'est produite",
    storage: "Une erreur de stockage s'est produite",
    export: "L'exportation a échoué",
    import: "L'importation a échoué",
    invalidData: 'Données invalides',
    unsupportedFeature: 'Fonctionnalité non supportée',
    permissionDenied: 'Permission refusée',
    fileNotFound: 'Fichier non trouvé',
    fileTooLarge: 'Fichier trop volumineux',
    invalidFileFormat: 'Format de fichier invalide'
  },

  // Messages de succès
  success: {
    saved: 'Enregistré',
    exported: 'Exporté',
    imported: 'Importé',
    deleted: 'Supprimé',
    copied: 'Copié',
    shared: 'Partagé'
  },

  // Messages de confirmation
  confirmations: {
    delete: 'Êtes-vous sûr de vouloir supprimer?',
    reset: 'Réinitialiser?',
    clearHistory: "Effacer tout l'historique?",
    overwrite: 'Écraser?',
    discard: 'Abandonner les modifications?'
  },

  // Aide et Guide
  help: {
    title: 'Aide et Utilisation',
    overview: 'Aperçu',
    howToUse: 'Comment Utiliser',
    categories: 'Catégories',
    scoring: 'Calcul du Score',
    features: 'Fonctionnalités',
    troubleshooting: 'Dépannage',
    faq: 'FAQ'
  },

  // Accessibilité
  accessibility: {
    skipToContent: 'Aller au contenu',
    mainNavigation: 'Navigation principale',
    searchForm: 'Formulaire de recherche',
    languageSelector: 'Sélecteur de langue',
    themeToggle: 'Basculer le thème',
    closeDialog: 'Fermer le dialogue',
    openMenu: 'Ouvrir le menu',
    expandSection: 'Développer la section',
    collapseSection: 'Réduire la section'
  },

  // Date et Heure
  datetime: {
    justNow: "À l'instant",
    minutesAgo: 'il y a quelques minutes',
    hoursAgo: 'il y a quelques heures',
    daysAgo: 'il y a quelques jours',
    weeksAgo: 'il y a quelques semaines',
    monthsAgo: 'il y a quelques mois',
    yearsAgo: 'il y a quelques années',
    createdAt: 'Créé le',
    updatedAt: 'Mis à jour le',
    completedAt: 'Terminé le'
  },

  // Unités et Nombres
  units: {
    items: 'éléments',
    percent: '%',
    score: 'score',
    total: 'total',
    completed: 'terminé',
    remaining: 'restant',
    of: 'de'
  },

  // Politique de Confidentialité
  privacy: {
    title: 'Politique de Confidentialité',
    subtitle: 'Notre engagement à protéger votre vie privée',
    lastUpdated: 'Dernière mise à jour : 1er janvier 2025',
    introduction: {
      title: 'Conception axée sur la confidentialité',
      content:
        'Fact Checklist est conçu avec la confidentialité comme principe fondamental. Tout le traitement des données se fait localement sur votre appareil sans communication serveur ni collecte de données.'
    },
    dataCollection: {
      title: 'Collecte de Données',
      description: "Nous ne collectons aucune donnée personnelle ni statistiques d'utilisation.",
      details: [
        'Aucune communication serveur - tout le traitement est local',
        'Aucun cookie de suivi ou statistiques installées',
        'Aucune information personnelle collectée',
        "Aucune donnée d'utilisation transmise"
      ]
    },
    localStorage: {
      title: 'Utilisation du Stockage Local',
      description:
        "Les données sont stockées uniquement dans votre navigateur pour la fonctionnalité de l'application.",
      details: [
        "Données d'evaluation stockées dans le localStorage du navigateur",
        'Préférences linguistiques enregistrées localement',
        'Aucune synchronisation cloud ou sauvegarde',
        'Les données restent uniquement sur votre appareil'
      ]
    },
    offlineFunctionality: {
      title: 'Fonctionnalité Hors Ligne',
      description: "L'application fonctionne complètement hors ligne sans aucune requête réseau.",
      details: [
        'Application Web Progressive avec service worker',
        'Toutes les ressources mises en cache localement',
        'Aucun appel API externe ou récupération de données',
        'Fonctionnalité complète sans internet'
      ]
    },
    securityMeasures: {
      title: 'Mesures de Sécurité',
      description: 'Mesures de sécurité intégrées pour protéger vos données et votre vie privée.',
      details: [
        'Politique de Sécurité du Contenu (CSP) implémentée',
        'Aucun script tiers ou suivi',
        'Pratiques de codage sécurisé suivies',
        'Mises à jour de sécurité régulières'
      ]
    },
    dataRetention: {
      title: 'Conservation des Données',
      description: 'Vous avez un contrôle complet sur la conservation de vos données.',
      details: [
        'Les données persistent seulement tant que vous les gardez',
        'Suppression facile via les paramètres du navigateur',
        'Aucune expiration automatique des données',
        'Instructions claires pour la suppression des données'
      ]
    },
    policyUpdates: {
      title: 'Mises à Jour de la Politique',
      description:
        'Tout changement à cette politique de confidentialité sera clairement communiqué.',
      details: [
        'Mises à jour annoncées sur le dépôt GitHub',
        'Historique des versions maintenu',
        'Notification claire des changements significatifs',
        "L'utilisation continue implique l'acceptation"
      ]
    },
    contact: {
      title: 'Informations de Contact',
      content:
        'Si vous avez des questions sur cette politique de confidentialité, contactez-nous via ',
      githubText: 'GitHub Issues',
      suffix: '.'
    }
  },

  // À Propos de l\'App
  about: {
    title: "À Propos de l'App",
    subtitle: 'Découvrez notre système complet de vérification des faits',
    hero: {
      title: 'Liste de Vérification Pratique des Faits',
      subtitle:
        "Une Application Web Progressive (PWA) pour évaluer scientifiquement et systématiquement la fiabilité de l'information",
      description: [
        "À une époque inondée de désinformation et de contenu trompeur, cet outil pratique soutient l'amélioration de la littératie informationnelle.",
        "En vérifiant 20 éléments à travers 4 catégories, il quantifie la fiabilité de l'information et soutient le jugement objectif."
      ],
      startButton: 'Commencer Maintenant'
    },
    sections: {
      features: 'Caractéristiques',
      howItWorks: 'Comment ça Marche',
      categories: "Catégories d'Evaluation",
      techStack: 'Technologie',
      performance: 'Performance'
    },
    sectionDescriptions: {
      howItWorks: "Évaluez la fiabilité de l'information en 4 étapes simples",
      categories: "Évaluation multidimensionnelle de l'information à travers 4 catégories",
      techStack: 'Application haute performance construite avec une technologie de pointe',
      performance: 'Scores de haute qualité des audits Lighthouse'
    },
    stats: {
      performance: 'Performance',
      accessibility: 'Accessibilité',
      bestPractices: 'Meilleures Pratiques',
      seo: 'SEO'
    },
    cta: {
      title: 'Commencer Maintenant',
      description:
        "Prêt à évaluer la fiabilité de l'information de manière scientifique et systématique ?",
      startButton: "Commencer l'Évaluation",
      helpButton: 'En Savoir Plus'
    },
    features: {
      privacy: {
        title: "Confidentialité d'Abord",
        description:
          'Toutes les données restent sur votre appareil sans suivi ni collecte de données',
        details: [
          'Aucune communication serveur - tout le traitement se fait localement',
          'Aucun suivi ou analyses installées',
          'Toutes les données stockées uniquement dans le localStorage du navigateur',
          'Protection complète de la confidentialité assurée'
        ]
      },
      offline: {
        title: 'Fonctionnalité Hors Ligne',
        description: 'Fonctionne complètement hors ligne comme Application Web Progressive',
        details: [
          'Fonctionnalité complète disponible sans connexion internet',
          'Installable comme app bureau/mobile',
          'Service worker pour le cache hors ligne',
          'Démarrage rapide et performance réactive'
        ]
      },
      scientific: {
        title: 'Méthodologie Scientifique',
        description: "Système d'evaluation basé sur les preuves suivant les standards académiques",
        details: [
          'Liste de vérification structurée de 20 éléments sur 4 catégories',
          'Notation quantitative avec niveaux de confiance',
          'Basé sur les standards de journalisme et de recherche académique',
          "Processus d'evaluation objectif et reproductible"
        ]
      },
      export: {
        title: 'Export Multi-Format',
        description:
          "Exportez les résultats d'evaluation dans divers formats pour partage et archivage",
        details: [
          'Export PDF avec support de police française',
          'Format HTML pour partage web',
          'JSON pour échange de données',
          'Markdown pour documentation'
        ]
      },
      history: {
        title: "Historique d'Evaluation",
        description: 'Sauvegarde automatique et gestion des évaluations passées',
        details: [
          'Sauvegarde automatique des évaluations complétées',
          'Accès rapide aux évaluations récentes',
          "Capacités d'analyse comparative",
          'Export des données historiques'
        ]
      },
      support: {
        title: "Support d'Accessibilité",
        description: 'Conçu pour un accès universel et une utilisabilité',
        details: [
          "Compatibilité avec les lecteurs d'ecran",
          'Support de navigation au clavier',
          'Mode haut contraste disponible',
          'Design réactif pour tous les appareils'
        ]
      }
    },
    steps: {
      step1: {
        title: 'Saisir les Informations',
        description: "Entrez le titre et l'aperçu des informations à évaluer"
      },
      step2: {
        title: 'Evaluation Systématique',
        description: 'Travaillez à travers la liste de vérification de 20 éléments sur 4 catégories'
      },
      step3: {
        title: 'Evaluation du Score',
        description:
          'Examinez le score de fiabilité calculé automatiquement et le niveau de confiance'
      },
      step4: {
        title: 'Jugement Final',
        description: 'Prenez votre décision finale et exportez les résultats si nécessaire'
      }
    },
    categories: {
      critical: {
        name: 'Evaluation Critique',
        description: "Eléments essentiels pour l'evaluation de base de la fiabilité",
        items: 6
      },
      detailed: {
        name: 'Evaluation Détaillée',
        description: "Evaluation approfondie de la qualité et de l'expertise",
        items: 5
      },
      verification: {
        name: 'Vérification et Recoupement',
        description: 'Evaluation de la vérification et des preuves de soutien',
        items: 5
      },
      context: {
        name: 'Contexte et Biais',
        description: "Evaluation de l'adéquation du contexte et du biais",
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: 'Framework réactif le plus récent avec runes pour une performance optimale'
      },
      framework: {
        name: 'SvelteKit',
        description: 'Framework full-stack avec support de génération statique'
      },
      language: {
        name: 'TypeScript',
        description: 'Développement type-safe avec configuration stricte'
      },
      styling: {
        name: 'CSS Personnalisé',
        description: 'Style moderne avec propriétés personnalisées CSS et mode sombre'
      },
      pwa: {
        name: 'Application Web Progressive',
        description: 'App installable avec fonctionnalité hors ligne'
      },
      export: {
        name: 'Export Multi-Format',
        description: "Capacités d'export PDF, HTML, JSON, Markdown"
      }
    }
  },

  // Formulaires
  forms: {
    titleLabel: 'Titre',
    titlePlaceholder: "Entrez le titre de l'information ou de la source à évaluer",
    descriptionLabel: 'Aperçu des Informations Cibles',
    descriptionPlaceholder: 'Décrivez brièvement le contenu des informations à évaluer',
    notesLabel: "Notes d'\u00c9valuation et \u00c9léments de Vérification Supplémentaires",
    notesPlaceholder:
      'Enregistrez toute question, éléments à vérifier, impressions générales, etc...'
  },

  // Texte de l\'interface utilisateur
  ui: {
    quickStartGuide: '💡 Utilisez ce guide pour commencer rapidement!',
    guideModeDetailed: '🔍 Mode Guide Détaillé',
    guideModeNormal: '📝 Mode Normal',
    completeEvaluation: "Terminer l'\u00c9valuation"
  },

  // Éléments de la liste de vérification
  checklistItems: {
    // Évaluation critique
    'source-authority': {
      title: 'Publication par des sources faisant autorité',
      description:
        'Organismes gouvernementaux, institutions académiques, organisations professionnelles, articles évalués par les pairs, médias fiables, etc.',
      guideTitle: '🏛️ Critères pour les sources faisant autorité',
      guideContent:
        "Institutions gouvernementales/publiques : Ministères, bureaux de statistiques, banques centrales, tribunaux, etc.\nInstitutions académiques : Universités, instituts de recherche, sociétés savantes, revues académiques évaluées par les pairs\nOrganisations spécialisées : Institutions nationales et internationales selon le domaine d'expertise\nMédias fiables : Organes de presse avec une politique éditoriale claire et un historique de corrections et d'excuses",
      examplesGood: [
        'Données statistiques du Ministère de la Santé',
        'Article évalué par les pairs dans Nature',
        'Annonce officielle de la Banque de France'
      ],
      examplesBad: [
        "Information d'un blog personnel",
        'Publication sur un forum anonyme',
        'Site à but publicitaire'
      ]
    },
    'source-primary': {
      title: 'Vérification des sources primaires',
      description:
        'Information directe de la source, non pas de ouï-dire ou de rapports de seconde main',
      guideTitle: '🎯 Comment identifier les sources primaires',
      guideContent:
        'Sources primaires : Articles de recherche par les auteurs eux-mêmes, témoignages de première main, annonces officielles, données brutes\nSources secondaires : Articles explicatifs, sites de synthèse, analyses par des tiers\nPoints de vérification : Attention aux expressions comme "selon..." "rapporté par..." etc.',
      examplesGood: [
        'Article publié par le chercheur lui-même',
        "Annonce de résultats financiers d'entreprise",
        'Statistiques officielles gouvernementales'
      ],
      examplesBad: ['"Selon des experts"', '"Une certaine enquête" sans attribution claire']
    },
    'source-multiple': {
      title: 'Sources indépendantes multiples',
      description:
        'Rapports ou confirmations similaires provenant de positions/organisations différentes',
      guideTitle: "🔄 Comment vérifier l'indépendance",
      guideContent:
        'Sources indépendantes : Sources avec des organisations, financements et intérêts différents\nStandard minimum : Confirmation par 2-3 sources indépendantes et fiables\nPoint d\'attention : Les articles basés sur le même communiqué de presse ne sont pas "indépendants"',
      examplesGood: [
        'Annonce gouvernementale + recherche académique + rapports de médias multiples',
        "Résultats similaires d'institutions de recherche différentes"
      ],
      examplesBad: [
        "Médias multiples du même groupe d'entreprises",
        'Articles de reprise uniquement'
      ]
    },
    'warning-anonymous': {
      title: 'Information non anonyme ou sans source',
      description: 'Le créateur/éditeur peut être clairement identifié',
      guideTitle: "🔍 Points clés pour l'identification des sources",
      guideContent:
        'Informations requises : Nom réel du créateur, affiliation, coordonnées, expertise\nSignaux d\'alarme : "Selon des sources internes" "Expert anonyme" "Une certaine recherche"\nAnonymat acceptable : Protection des sources en journalisme (mais le journaliste doit être identifiable)',
      examplesGood: [
        'Selon M. Dubois (Professeur de médecine, Université de Lyon)',
        'Déclaration du directeur du département XX du Ministère'
      ],
      examplesBad: ['Selon un certain médecin', "D'après des proches du dossier", 'Expert anonyme']
    },
    'warning-sensational': {
      title: "Peu d'expressions sensationnelles ou inflammatoires",
      description: 'Description calme et objective, sans appels émotionnels excessifs',
      guideTitle: '⚠️ Comment identifier les expressions sensationnelles',
      guideContent:
        'Expressions d\'alarme : "Absolument", "Complètement", "Stupéfiant", "Choquant", "Ce que l\'industrie XX cache"\nManipulation émotionnelle : Expressions qui attisent la peur, la colère, la jalousie\nExpressions appropriées : "Selon la recherche", "Les données montrent", "L\'avis d\'experts est"',
      examplesGood: [
        'La recherche a montré une amélioration chez 75% des sujets',
        'Les données confirment une différence statistiquement significative'
      ],
      examplesBad: [
        'La vérité stupéfiante que les médecins ne révèlent jamais !',
        "Faits choquants dissimulés par l'industrie"
      ]
    },
    'warning-logical': {
      title: 'Absence de contradictions logiques',
      description: 'Le contenu est cohérent sans sauts logiques évidents',
      guideTitle: '🧠 Comment vérifier la cohérence logique',
      guideContent:
        'Éléments à vérifier :\n• Les prémisses et conclusions sont-elles correctement liées ?\n• Les relations de cause à effet sont-elles clairement démontrées ?\n• Y a-t-il des affirmations contradictoires simultanées ?\nErreurs logiques courantes : Confondre corrélation et causalité, généralisation extrême',
      examplesGood: [
        "Analyse statistiquement significative considérant d'autres facteurs",
        'Développement logique par étapes'
      ],
      examplesBad: [
        'A et B se sont produits en même temps donc A a causé B',
        "Généralisation à partir d'exemples extrêmes"
      ]
    },
    // Évaluation détaillée
    'time-recent': {
      title: "Fraîcheur de l'information",
      description:
        'La date de publication est spécifiée et le contenu maintient une fraîcheur appropriée',
      guideTitle: "⏰ Juger de la fraîcheur appropriée de l'information",
      guideContent:
        "Standards par domaine :\n• Actualités/événements actuels : Dans les quelques jours à 1 semaine\n• Médecine/science : Dans les 2-3 ans (recherche fondamentale jusqu'à 5 ans)\n• Technologie/IT : Dans les 1-2 ans\n• Droit/réglementation : Reflétant les dernières révisions\nPoints de vérification : Date et heure de publication clairement indiquées, date de dernière mise à jour",
      examplesGood: [
        'Publié en décembre 2024',
        'Dernière mise à jour : janvier 2025',
        'Reflète les dernières révisions légales'
      ],
      examplesBad: [
        'Aucune date indiquée',
        'Information technique vieille de 5 ans',
        "Explication basée sur d'anciennes lois"
      ]
    },
    'time-update': {
      title: 'Historique des mises à jour et corrections',
      description: 'Le contenu est mis à jour selon les besoins avec des corrections transparentes',
      guideTitle: '📝 Vérification des mises à jour et corrections transparentes',
      guideContent:
        "Caractéristiques d'une bonne mise à jour :\n• Description claire du contenu mis à jour\n• Explication de la raison de la correction\n• Enregistrement de la date et heure de mise à jour\n• Note en cas de changement important\nIndicateur de fiabilité : Attitude reconnaissant les erreurs et les corrigeant",
      examplesGood: [
        'Mise à jour du 15 janvier 2025 : Remplacement des données statistiques par la dernière version',
        'Historique des corrections clairement indiqué'
      ],
      examplesBad: [
        "Anciennes informations laissées en l'état",
        'Aucun enregistrement des corrections',
        'Changement de contenu silencieux'
      ]
    },
    'expert-knowledge': {
      title: 'Expertise appropriée',
      description:
        'Le créateur possède des connaissances/expérience suffisantes dans le domaine concerné',
      guideTitle: "🎓 Comment vérifier l'expertise",
      guideContent:
        "Éléments à vérifier :\n• Diplômes/qualifications dans les domaines connexes\n• Expérience pratique et historique de recherche\n• Historique de présentations et publications académiques\n• Carrière dans des institutions spécialisées\nAttention : L'expertise dans le domaine connexe est importante (comme un médecin parlant d'économie)",
      examplesGood: [
        'Spécialiste des maladies infectieuses expliquant les vaccins',
        'Docteur en économie analysant la politique monétaire'
      ],
      examplesBad: [
        'Célébrité hors de son domaine faisant des déclarations médicales',
        'Personne aux qualifications inconnues expliquant le droit'
      ]
    },
    'detail-sufficient': {
      title: 'Détails et preuves suffisants',
      description:
        'Le processus menant aux conclusions et les preuves de soutien sont correctement expliqués',
      guideTitle: '📋 Juger de la suffisance des preuves',
      guideContent:
        "Éléments nécessaires :\n• Données spécifiques soutenant les affirmations\n• Explication de la méthodologie\n• Mention des limitations et contraintes\n• Référence aux opinions opposées\nSignaux d'alarme : Seulement des conclusions sans processus clair, preuves vagues",
      examplesGood: [
        "Mention de la taille d'échantillon, méthodes statistiques, intervalles de confiance",
        'Explication détaillée de la méthodologie'
      ],
      examplesBad: [
        'Seulement "l\'effet a été prouvé" sans détails',
        'Seulement des conclusions sans preuves claires'
      ]
    },
    'citation-proper': {
      title: 'Citations et références appropriées',
      description: 'Des sources fiables sont indiquées pour les affirmations importantes',
      guideTitle: '📚 Standards pour les citations appropriées',
      guideContent:
        "Contenu nécessitant des citations :\n• Données statistiques et numériques\n• Affirmations spécialisées\n• Résultats de recherche d'autres\n• Contenu de lois et règlements\nFormat de citation : Informations minimales comme nom d'auteur, année de publication, titre, éditeur",
      examplesGood: [
        'Selon la recherche de Dubois (2024)...',
        'Dans les statistiques du ministère (2025)...'
      ],
      examplesBad: [
        'Selon une recherche (source inconnue)',
        'Les données montrent (détails inconnus)'
      ]
    },
    'citation-accessible': {
      title: 'Vérifiabilité des sources citées',
      description: 'Les sources citées peuvent effectivement être consultées et vérifiées',
      guideTitle: "🌐 Vérification de l'accessibilité des citations",
      guideContent:
        "État idéal :\n• Liens directs ou DOI\n• Sources d'information publiques\n• Informations spécifiques recherchables\nPortée acceptable : Bases de données payantes, matériel vérifiable en bibliothèque\nCitations problématiques : Conversations privées, matériel interne non vérifiable",
      examplesGood: ['Avec liens URL', 'Articles avec numéros DOI', 'Livres avec numéros ISBN'],
      examplesBad: [
        'Selon des matériaux internes',
        'Lors de discussions personnelles',
        'Matériel inaccessible'
      ]
    },
    // Vérification et recoupement
    'cross-check': {
      title: "Recoupement avec d'autres sources",
      description: 'Un contenu similaire peut être confirmé par plusieurs sources indépendantes',
      guideTitle: '🔍 Méthodes de recoupement efficaces',
      guideContent:
        "Vérification par étapes :\n1. Chercher d'autres sources fiables rapportant les mêmes faits\n2. Confirmer les rapports traitant du même événement sous différents angles\n3. Enquêter aussi sur les opinions opposées et points de vue critiques\nOutils de vérification : Google Scholar, bases de données publiques, sites de vérification des faits",
      examplesGood: [
        'Résultats similaires dans plusieurs articles évalués par les pairs',
        'Vérification de la cohérence avec les statistiques gouvernementales'
      ],
      examplesBad: ["Une seule source d'information", 'Plusieurs articles utilisant la même source']
    },
    'fact-check': {
      title: 'Vérification par des organisations de fact-checking',
      description: 'Une vérification existe par des institutions fiables de vérification des faits',
      guideTitle: '✅ Organisations fiables de vérification des faits',
      guideContent:
        "Organisations internationales : Snopes, PolitiFact, AFP Fact Check, Full Fact (Royaume-Uni), etc., institutions de positions et régions différentes\nOrganisations françaises : Les Décodeurs (Le Monde), CheckNews (Libération), AFP Factuel, etc.\nMédias spécialisés : Départements de vérification des faits de France Inter, France Info, etc.\nMéthode de vérification : Rechercher l'information concernée sur les sites de fact-checking",
      examplesGood: [
        'Plusieurs organisations de fact-checking ont jugé "vrai"',
        'Vérification par des institutions internationales'
      ],
      examplesBad: [
        'Jugé comme "fausse information" par le fact-checking',
        'Information non vérifiée'
      ]
    },
    'data-verifiable': {
      title: 'Données vérifiables',
      description: 'Les données soutenant les affirmations peuvent être objectivement vérifiées',
      guideTitle: '📈 Vérification de la vérifiabilité des données',
      guideContent:
        'Éléments à vérifier :\n• Source des données (institut d\'enquête, bureau de statistiques, etc.)\n• Indication claire de la méthode et période de collecte\n• Détails de la taille d\'échantillon et des sujets\n• Accessibilité aux données brutes ou détaillées\nSignaux d\'alarme : Seulement "données internes" "enquête propriétaire" sans détails clairs',
      examplesGood: [
        "Données de l'INSEE",
        "Données publiques dans les matériaux supplémentaires d'articles"
      ],
      examplesBad: [
        "Selon notre enquête (sans aperçu détaillé de l'enquête)",
        'Seulement des données internes'
      ]
    },
    methodology: {
      title: 'Validité des méthodes/méthodologie',
      description: "La méthodologie de recherche ou d'enquête est appropriée et reproductible",
      guideTitle: '🔬 Évaluation de la validité méthodologique',
      guideContent:
        "Points d'évaluation :\n• Pertinence du design de recherche (ECR, étude de cohorte, etc.)\n• Présence de mesures anti-biais\n• Validité des méthodes statistiques\n• Garantie de reproductibilité (publication de protocole, etc.)\nPoints vérifiables même pour les non-spécialistes : Description détaillée des méthodes, comparaison avec d'autres recherches",
      examplesGood: [
        'Essai en double aveugle',
        'Configuration appropriée du groupe témoin',
        'Publication du protocole'
      ],
      examplesBad: [
        'Aucune description de méthodologie',
        "Sélection biaisée d'échantillon",
        'Méthodes non reproductibles'
      ]
    },
    // Évaluation du contexte et des biais
    'bias-disclosure': {
      title: "Divulgation des conflits d'intérêts",
      description: 'Les intérêts financiers, politiques et personnels sont correctement divulgués',
      guideTitle: "💰 Éléments à vérifier pour les conflits d'intérêts",
      guideContent:
        'Conflits d\'intérêts à divulguer :\n• Source de financement de recherche\n• Honoraires et frais de conseil d\'entreprises\n• Bénéfices financiers comme la détention d\'actions\n• Position politique et idéologique\nMéthode de vérification : Chercher des mentions comme "conflit d\'intérêts", "COI", "financement"',
      examplesGood: [
        'Cette recherche a été menée avec une subvention de la Fondation XX',
        "Mention claire des COI (conflits d'intérêts)"
      ],
      examplesBad: [
        "Recherche d'entreprise pharmaceutique sans mention de conflit d'intérêts",
        'Source de financement inconnue'
      ]
    },
    'balanced-view': {
      title: 'Perspective équilibrée',
      description: 'Différentes positions et opinions opposées sont également considérées',
      guideTitle: "⚖️ Perspectives pour l'évaluation de l'équilibre",
      guideContent:
        "Points de vérification :\n• Introduction d'opinions opposées et de points de vue critiques\n• Mention de résultats de recherche différents\n• Mention d'incertitudes et de limitations\n• Opinions de plusieurs experts\nSignaux d'alarme : Seulement des affirmations unilatérales, sélection seulement d'informations convenables",
      examplesGood: [
        "D'autre part, le professeur XX présente un point de vue différent",
        'Comparaison de plusieurs résultats de recherche'
      ],
      examplesBad: [
        'Énumération seulement de preuves de soutien',
        "Aucune mention d'opinions opposées"
      ]
    },
    'context-adequate': {
      title: 'Information de contexte suffisante',
      description:
        "Le contexte et les antécédents nécessaires pour comprendre l'information sont fournis",
      guideTitle: "🌍 Éléments à vérifier pour l'information contextuelle",
      guideContent:
        "Informations de contexte nécessaires :\n• Historique et recherches précédentes\n• Lois et systèmes connexes\n• Contexte social et culturel\n• Tendances et comparaisons internationales\nPoint d'évaluation : Fourniture de contexte permettant aux lecteurs de comprendre et juger appropriément",
      examplesGood: [
        'Cas similaires passés',
        "Présentation aussi de données de comparaison avec d'autres pays",
        'Explication du contexte historique'
      ],
      examplesBad: [
        'Seulement des chiffres isolés',
        'Aucune information de contexte',
        'Comparaison ignorant le contexte'
      ]
    },
    'scope-clear': {
      title: "Clarification de la portée d'application",
      description:
        "La portée applicable et les limitations de l'information sont clairement indiquées",
      guideTitle: "🎯 Clarification de la portée d'application",
      guideContent:
        'Portée à clarifier :\n• Personnes, régions, périodes cibles\n• Limitations et contraintes de la recherche\n• Degré de généralisabilité\n• Cas exclus\nImportance : Pour prévenir la généralisation excessive et la mauvaise utilisation',
      examplesGood: [
        "Comme cette recherche ciblait les hommes adultes japonais, l'application à d'autres groupes doit être prudente",
        'Mention claire des limitations'
      ],
      examplesBad: [
        'Généralisation illimitée de résultats de recherche limités',
        "Portée d'application inconnue"
      ]
    }
  }
};

// Éléments de liste de vérification (export séparé)
export const checklistItems = {
  // Évaluation critique
  'source-authority': {
    title: 'Publication par des sources faisant autorité',
    description:
      'Organismes gouvernementaux, institutions académiques, organisations professionnelles, articles évalués par les pairs, médias fiables, etc.',
    guideTitle: '🏛️ Critères pour les sources faisant autorité',
    guideContent:
      "Institutions gouvernementales/publiques : Ministères, bureaux de statistiques, banques centrales, tribunaux, etc.\nInstitutions académiques : Universités, instituts de recherche, sociétés savantes, revues académiques évaluées par les pairs\nOrganisations spécialisées : Institutions nationales et internationales selon le domaine d'expertise\nMédias fiables : Organes de presse avec une politique éditoriale claire et un historique de corrections et d'excuses",
    examplesGood: [
      'Données statistiques du Ministère de la Santé',
      'Article évalué par les pairs dans Nature',
      'Annonce officielle de la Banque de France'
    ],
    examplesBad: [
      "Information d'un blog personnel",
      'Publication sur un forum anonyme',
      'Site à but publicitaire'
    ]
  },
  'source-primary': {
    title: 'Vérification des sources primaires',
    description:
      'Information directe de la source, non pas de ouï-dire ou de rapports de seconde main',
    guideTitle: '🎯 Comment identifier les sources primaires',
    guideContent:
      'Sources primaires : Articles de recherche par les auteurs eux-mêmes, témoignages de première main, annonces officielles, données brutes\nSources secondaires : Articles explicatifs, sites de synthèse, analyses par des tiers\nPoints de vérification : Attention aux expressions comme "selon..." "rapporté par..." etc.',
    examplesGood: [
      'Article publié par le chercheur lui-même',
      "Annonce de résultats financiers d'entreprise",
      'Statistiques officielles gouvernementales'
    ],
    examplesBad: ['"Selon des experts"', '"Une certaine enquête" sans attribution claire']
  },
  'source-multiple': {
    title: 'Sources indépendantes multiples',
    description:
      'Rapports ou confirmations similaires provenant de positions/organisations différentes',
    guideTitle: "🔄 Comment vérifier l'indépendance",
    guideContent:
      'Sources indépendantes : Sources avec des organisations, financements et intérêts différents\nStandard minimum : Confirmation par 2-3 sources indépendantes et fiables\nPoint d\'attention : Les articles basés sur le même communiqué de presse ne sont pas "indépendants"',
    examplesGood: [
      'Annonce gouvernementale + recherche académique + rapports de médias multiples',
      "Résultats similaires d'institutions de recherche différentes"
    ],
    examplesBad: ["Médias multiples du même groupe d'entreprises", 'Articles de reprise uniquement']
  },
  'warning-anonymous': {
    title: 'Information non anonyme ou sans source',
    description: 'Le créateur/éditeur peut être clairement identifié',
    guideTitle: "🔍 Points clés pour l'identification des sources",
    guideContent:
      'Informations requises : Nom réel du créateur, affiliation, coordonnées, expertise\nSignaux d\'alarme : "Selon des sources internes" "Expert anonyme" "Une certaine recherche"\nAnonymat acceptable : Protection des sources en journalisme (mais le journaliste doit être identifiable)',
    examplesGood: [
      'Selon M. Dubois (Professeur de médecine, Université de Lyon)',
      'Déclaration du directeur du département XX du Ministère'
    ],
    examplesBad: ['Selon un certain médecin', "D'après des proches du dossier", 'Expert anonyme']
  },
  'warning-sensational': {
    title: "Peu d'expressions sensationnelles ou inflammatoires",
    description: 'Description calme et objective, sans appels émotionnels excessifs',
    guideTitle: '⚠️ Comment identifier les expressions sensationnelles',
    guideContent:
      'Expressions d\'alarme : "Absolument", "Complètement", "Stupéfiant", "Choquant", "Ce que l\'industrie XX cache"\nManipulation émotionnelle : Expressions qui attisent la peur, la colère, la jalousie\nExpressions appropriées : "Selon la recherche", "Les données montrent", "L\'avis d\'experts est"',
    examplesGood: [
      'La recherche a montré une amélioration chez 75% des sujets',
      'Les données confirment une différence statistiquement significative'
    ],
    examplesBad: [
      'La vérité stupéfiante que les médecins ne révèlent jamais !',
      "Faits choquants dissimulés par l'industrie"
    ]
  },
  'warning-logical': {
    title: 'Absence de contradictions logiques',
    description: 'Le contenu est cohérent sans sauts logiques évidents',
    guideTitle: '🧠 Comment vérifier la cohérence logique',
    guideContent:
      'Éléments à vérifier :\n• Les prémisses et conclusions sont-elles correctement liées ?\n• Les relations de cause à effet sont-elles clairement démontrées ?\n• Y a-t-il des affirmations contradictoires simultanées ?\nErreurs logiques courantes : Confondre corrélation et causalité, généralisation extrême',
    examplesGood: [
      "Analyse statistiquement significative considérant d'autres facteurs",
      'Développement logique par étapes'
    ],
    examplesBad: [
      'A et B se sont produits en même temps donc A a causé B',
      "Généralisation à partir d'exemples extrêmes"
    ]
  },
  // Évaluation détaillée
  'time-recent': {
    title: "Fraîcheur de l'information",
    description:
      'La date de publication est spécifiée et le contenu maintient une fraîcheur appropriée',
    guideTitle: "⏰ Juger de la fraîcheur appropriée de l'information",
    guideContent:
      "Standards par domaine :\n• Actualités/événements actuels : Dans les quelques jours à 1 semaine\n• Médecine/science : Dans les 2-3 ans (recherche fondamentale jusqu'à 5 ans)\n• Technologie/IT : Dans les 1-2 ans\n• Droit/réglementation : Reflétant les dernières révisions\nPoints de vérification : Date et heure de publication clairement indiquées, date de dernière mise à jour",
    examplesGood: [
      'Publié en décembre 2024',
      'Dernière mise à jour : janvier 2025',
      'Reflète les dernières révisions légales'
    ],
    examplesBad: [
      'Aucune date indiquée',
      'Information technique vieille de 5 ans',
      "Explication basée sur d'anciennes lois"
    ]
  },
  'time-update': {
    title: 'Historique des mises à jour et corrections',
    description: 'Le contenu est mis à jour selon les besoins avec des corrections transparentes',
    guideTitle: '📝 Vérification des mises à jour et corrections transparentes',
    guideContent:
      "Caractéristiques d'une bonne mise à jour :\n• Description claire du contenu mis à jour\n• Explication de la raison de la correction\n• Enregistrement de la date et heure de mise à jour\n• Note en cas de changement important\nIndicateur de fiabilité : Attitude reconnaissant les erreurs et les corrigeant",
    examplesGood: [
      'Mise à jour du 15 janvier 2025 : Remplacement des données statistiques par la dernière version',
      'Historique des corrections clairement indiqué'
    ],
    examplesBad: [
      "Anciennes informations laissées en l'état",
      'Aucun enregistrement des corrections',
      'Changement de contenu silencieux'
    ]
  },
  'expert-knowledge': {
    title: 'Expertise appropriée',
    description:
      'Le créateur possède des connaissances/expérience suffisantes dans le domaine concerné',
    guideTitle: "🎓 Comment vérifier l'expertise",
    guideContent:
      "Éléments à vérifier :\n• Diplômes/qualifications dans les domaines connexes\n• Expérience pratique et historique de recherche\n• Historique de présentations et publications académiques\n• Carrière dans des institutions spécialisées\nAttention : L'expertise dans le domaine connexe est importante (comme un médecin parlant d'économie)",
    examplesGood: [
      'Spécialiste des maladies infectieuses expliquant les vaccins',
      'Docteur en économie analysant la politique monétaire'
    ],
    examplesBad: [
      'Célébrité hors de son domaine faisant des déclarations médicales',
      'Personne aux qualifications inconnues expliquant le droit'
    ]
  },
  'detail-sufficient': {
    title: 'Détails et preuves suffisants',
    description:
      'Le processus menant aux conclusions et les preuves de soutien sont correctement expliqués',
    guideTitle: '📋 Juger de la suffisance des preuves',
    guideContent:
      "Éléments nécessaires :\n• Données spécifiques soutenant les affirmations\n• Explication de la méthodologie\n• Mention des limitations et contraintes\n• Référence aux opinions opposées\nSignaux d'alarme : Seulement des conclusions sans processus clair, preuves vagues",
    examplesGood: [
      "Mention de la taille d'échantillon, méthodes statistiques, intervalles de confiance",
      'Explication détaillée de la méthodologie'
    ],
    examplesBad: [
      'Seulement "l\'effet a été prouvé" sans détails',
      'Seulement des conclusions sans preuves claires'
    ]
  },
  'citation-proper': {
    title: 'Citations et références appropriées',
    description: 'Des sources fiables sont indiquées pour les affirmations importantes',
    guideTitle: '📚 Standards pour les citations appropriées',
    guideContent:
      "Contenu nécessitant des citations :\n• Données statistiques et numériques\n• Affirmations spécialisées\n• Résultats de recherche d'autres\n• Contenu de lois et règlements\nFormat de citation : Informations minimales comme nom d'auteur, année de publication, titre, éditeur",
    examplesGood: [
      'Selon la recherche de Dubois (2024)...',
      'Dans les statistiques du ministère (2025)...'
    ],
    examplesBad: [
      'Selon une recherche (source inconnue)',
      'Les données montrent (détails inconnus)'
    ]
  },
  'citation-accessible': {
    title: 'Vérifiabilité des sources citées',
    description: 'Les sources citées peuvent effectivement être consultées et vérifiées',
    guideTitle: "🌐 Vérification de l'accessibilité des citations",
    guideContent:
      "État idéal :\n• Liens directs ou DOI\n• Sources d'information publiques\n• Informations spécifiques recherchables\nPortée acceptable : Bases de données payantes, matériel vérifiable en bibliothèque\nCitations problématiques : Conversations privées, matériel interne non vérifiable",
    examplesGood: ['Avec liens URL', 'Articles avec numéros DOI', 'Livres avec numéros ISBN'],
    examplesBad: [
      'Selon des matériaux internes',
      'Lors de discussions personnelles',
      'Matériel inaccessible'
    ]
  },
  // Vérification et recoupement
  'cross-check': {
    title: "Recoupement avec d'autres sources",
    description: 'Un contenu similaire peut être confirmé par plusieurs sources indépendantes',
    guideTitle: '🔍 Méthodes de recoupement efficaces',
    guideContent:
      "Vérification par étapes :\n1. Chercher d'autres sources fiables rapportant les mêmes faits\n2. Confirmer les rapports traitant du même événement sous différents angles\n3. Enquêter aussi sur les opinions opposées et points de vue critiques\nOutils de vérification : Google Scholar, bases de données publiques, sites de vérification des faits",
    examplesGood: [
      'Résultats similaires dans plusieurs articles évalués par les pairs',
      'Vérification de la cohérence avec les statistiques gouvernementales'
    ],
    examplesBad: ["Une seule source d'information", 'Plusieurs articles utilisant la même source']
  },
  'fact-check': {
    title: 'Vérification par des organisations de fact-checking',
    description: 'Une vérification existe par des institutions fiables de vérification des faits',
    guideTitle: '✅ Organisations fiables de vérification des faits',
    guideContent:
      "Organisations internationales : Snopes, PolitiFact, AFP Fact Check, Full Fact (Royaume-Uni), etc., institutions de positions et régions différentes\nOrganisations françaises : Les Décodeurs (Le Monde), CheckNews (Libération), AFP Factuel, etc.\nMédias spécialisés : Départements de vérification des faits de France Inter, France Info, etc.\nMéthode de vérification : Rechercher l'information concernée sur les sites de fact-checking",
    examplesGood: [
      'Plusieurs organisations de fact-checking ont jugé "vrai"',
      'Vérification par des institutions internationales'
    ],
    examplesBad: [
      'Jugé comme "fausse information" par le fact-checking',
      'Information non vérifiée'
    ]
  },
  'data-verifiable': {
    title: 'Données vérifiables',
    description: 'Les données soutenant les affirmations peuvent être objectivement vérifiées',
    guideTitle: '📈 Vérification de la vérifiabilité des données',
    guideContent:
      'Éléments à vérifier :\n• Source des données (institut d\'enquête, bureau de statistiques, etc.)\n• Indication claire de la méthode et période de collecte\n• Détails de la taille d\'échantillon et des sujets\n• Accessibilité aux données brutes ou détaillées\nSignaux d\'alarme : Seulement "données internes" "enquête propriétaire" sans détails clairs',
    examplesGood: [
      "Données de l'INSEE",
      "Données publiques dans les matériaux supplémentaires d'articles"
    ],
    examplesBad: [
      "Selon notre enquête (sans aperçu détaillé de l'enquête)",
      'Seulement des données internes'
    ]
  },
  methodology: {
    title: 'Validité des méthodes/méthodologie',
    description: "La méthodologie de recherche ou d'enquête est appropriée et reproductible",
    guideTitle: '🔬 Évaluation de la validité méthodologique',
    guideContent:
      "Points d'évaluation :\n• Pertinence du design de recherche (ECR, étude de cohorte, etc.)\n• Présence de mesures anti-biais\n• Validité des méthodes statistiques\n• Garantie de reproductibilité (publication de protocole, etc.)\nPoints vérifiables même pour les non-spécialistes : Description détaillée des méthodes, comparaison avec d'autres recherches",
    examplesGood: [
      'Essai en double aveugle',
      'Configuration appropriée du groupe témoin',
      'Publication du protocole'
    ],
    examplesBad: [
      'Aucune description de méthodologie',
      "Sélection biaisée d'échantillon",
      'Méthodes non reproductibles'
    ]
  },
  // Évaluation du contexte et des biais
  'bias-disclosure': {
    title: "Divulgation des conflits d'intérêts",
    description: 'Les intérêts financiers, politiques et personnels sont correctement divulgués',
    guideTitle: "💰 Éléments à vérifier pour les conflits d'intérêts",
    guideContent:
      'Conflits d\'intérêts à divulguer :\n• Source de financement de recherche\n• Honoraires et frais de conseil d\'entreprises\n• Bénéfices financiers comme la détention d\'actions\n• Position politique et idéologique\nMéthode de vérification : Chercher des mentions comme "conflit d\'intérêts", "COI", "financement"',
    examplesGood: [
      'Cette recherche a été menée avec une subvention de la Fondation XX',
      "Mention claire des COI (conflits d'intérêts)"
    ],
    examplesBad: [
      "Recherche d'entreprise pharmaceutique sans mention de conflit d'intérêts",
      'Source de financement inconnue'
    ]
  },
  'balanced-view': {
    title: 'Perspective équilibrée',
    description: 'Différentes positions et opinions opposées sont également considérées',
    guideTitle: "⚖️ Perspectives pour l'évaluation de l'équilibre",
    guideContent:
      "Points de vérification :\n• Introduction d'opinions opposées et de points de vue critiques\n• Mention de résultats de recherche différents\n• Mention d'incertitudes et de limitations\n• Opinions de plusieurs experts\nSignaux d'alarme : Seulement des affirmations unilatérales, sélection seulement d'informations convenables",
    examplesGood: [
      "D'autre part, le professeur XX présente un point de vue différent",
      'Comparaison de plusieurs résultats de recherche'
    ],
    examplesBad: [
      'Énumération seulement de preuves de soutien',
      "Aucune mention d'opinions opposées"
    ]
  },
  'context-adequate': {
    title: 'Information de contexte suffisante',
    description:
      "Le contexte et les antécédents nécessaires pour comprendre l'information sont fournis",
    guideTitle: "🌍 Éléments à vérifier pour l'information contextuelle",
    guideContent:
      "Informations de contexte nécessaires :\n• Historique et recherches précédentes\n• Lois et systèmes connexes\n• Contexte social et culturel\n• Tendances et comparaisons internationales\nPoint d'évaluation : Fourniture de contexte permettant aux lecteurs de comprendre et juger appropriément",
    examplesGood: [
      'Cas similaires passés',
      "Présentation aussi de données de comparaison avec d'autres pays",
      'Explication du contexte historique'
    ],
    examplesBad: [
      'Seulement des chiffres isolés',
      'Aucune information de contexte',
      'Comparaison ignorant le contexte'
    ]
  },
  'scope-clear': {
    title: "Clarification de la portée d'application",
    description:
      "La portée applicable et les limitations de l'information sont clairement indiquées",
    guideTitle: "🎯 Clarification de la portée d'application",
    guideContent:
      'Portée à clarifier :\n• Personnes, régions, périodes cibles\n• Limitations et contraintes de la recherche\n• Degré de généralisabilité\n• Cas exclus\nImportance : Pour prévenir la généralisation excessive et la mauvaise utilisation',
    examplesGood: [
      "Comme cette recherche ciblait les hommes adultes japonais, l'application à d'autres groupes doit être prudente",
      'Mention claire des limitations'
    ],
    examplesBad: [
      'Généralisation illimitée de résultats de recherche limités',
      "Portée d'application inconnue"
    ]
  }
};

// Textes de confiance
export const confidenceTexts = {
  high: 'Fiabilité élevée',
  medium: 'Fiabilité modérée',
  low: 'Fiabilité faible',
  veryLow: 'Problèmes de fiabilité'
};

// Conseils de jugement
export const judgmentAdvices = {
  accept: 'Adoption recommandée. Vérification suffisante effectuée.',
  caution: 'Confirmation supplémentaire recommandée. Soyez prudent avec les décisions importantes.',
  reject: "Rejet recommandé. Recherchez des sources d'information fiables.",
  lowConfidence: 'Prudence requise. Vérification supplémentaire nécessaire.'
};

// Textes spécifiques à l'interface utilisateur
export const uiTexts = {
  quickStartGuide:
    'Commencez d\'abord par "Évaluation Critique" pour vérifier la fiabilité de base. En cochant chaque élément, le score à droite se mettra à jour en temps réel.',
  guideMode: {
    detailed: '📖 Mode Guide Détaillé',
    normal: '📝 Mode Normal'
  },
  placeholders: {
    title: "Exemple : Article sur l'efficacité du vaccin COVID-19",
    description: 'Veuillez saisir les détails des informations à évaluer...',
    notes:
      'Enregistrez librement toute question, élément à vérifier supplémentaire, impression générale, etc...'
  },
  defaultTitle: 'Vérification_Factuelle_',
  menuToggleAriaLabel: 'Ouvrir/fermer le menu',
  scoreLabels: {
    critical: '🚨 Critique',
    detailed: '📝 Évaluation Détaillée',
    verification: '🔍 Vérification/Recoupement',
    context: '🌐 Contexte/Biais',
    total: 'Score Total'
  }
};

export default translations;
