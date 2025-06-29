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
		systemMode: 'Système'
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
		recent: 'Évaluations Récentes'
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
	}
};

export default translations;
