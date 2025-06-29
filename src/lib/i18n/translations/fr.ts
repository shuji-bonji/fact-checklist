/**
 * French translation file template
 * French (fr) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'fr' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'À traduire',
	completeness: 0
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
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
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
