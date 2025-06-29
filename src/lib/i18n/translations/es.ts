/**
 * Spanish translation file template
 * Spanish (es) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'es' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'Por traducir',
	completeness: 0
};

export const translations: TranslationKeys = {
	// Interfaz común
	common: {
		loading: 'Cargando...',
		error: 'Ha ocurrido un error',
		success: 'Éxito',
		cancel: 'Cancelar',
		save: 'Guardar',
		delete: 'Eliminar',
		edit: 'Editar',
		close: 'Cerrar',
		back: 'Atrás',
		next: 'Siguiente',
		previous: 'Anterior',
		search: 'Buscar',
		clear: 'Limpiar',
		reset: 'Restablecer',
		copy: 'Copiar',
		download: 'Descargar',
		share: 'Compartir',
		print: 'Imprimir',
		export: 'Exportar',
		import: 'Importar',
		settings: 'Configuración',
		help: 'Ayuda',
		about: 'Acerca de',
		privacy: 'Privacidad',
		terms: 'Términos',
		home: 'Inicio',
		menu: 'Menú',
		languages: 'Idiomas',
		darkMode: 'Modo Oscuro',
		lightMode: 'Modo Claro',
		systemMode: 'Sistema',
		guide: 'Guide',
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
		}
	},

	// Específico de la aplicación
	app: {
		title: 'Lista de Verificación de Hechos Práctica',
		subtitle: 'Un sistema integral para evaluar científicamente la confiabilidad de la información',
		description:
			'Una lista de verificación para evaluar científica y sistemáticamente la confiabilidad de la información',
		version: '1.0.0',
		author: 'Equipo de Lista de Verificación de Hechos',
		copyright: '© 2025 Equipo de Lista de Verificación de Hechos',
		poweredBy: 'Desarrollado por'
	},

	// Navegación
	navigation: {
		home: 'Inicio',
		about: 'Acerca de',
		help: 'Ayuda y Uso',
		privacy: 'Privacidad',
		checklist: 'Lista de Verificación',
		history: 'Historial',
		settings: 'Configuración'
	},

	// Relacionado con la lista de verificación
	checklist: {
		title: 'Información de la Lista de Verificación',
		description: 'Detalles de la lista de verificación',
		newChecklist: 'Nueva Lista de Verificación',
		createChecklist: 'Crear Lista de Verificación',
		editChecklist: 'Editar Lista de Verificación',
		deleteChecklist: 'Eliminar Lista de Verificación',
		completeChecklist: 'Completar Evaluación',
		checklistTitle: 'Título',
		checklistDescription: 'Resumen de Información Objetivo',
		targetInfo: 'Información Objetivo',
		targetInfoPlaceholder: 'Ejemplo: Artículo sobre la efectividad de la vacuna COVID-19',
		evaluationNotes: 'Notas de Evaluación y Elementos de Verificación Adicionales',
		evaluationNotesPlaceholder:
			'Registre cualquier pregunta, elementos para verificar, impresiones generales, etc...',
		score: 'Puntuación de Evaluación',
		confidenceLevel: 'Nivel de Confianza',
		finalJudgment: 'Juicio Final',
		judgment: {
			accept: 'Aceptar',
			caution: 'Precaución',
			reject: 'Rechazar',
			pending: 'Pendiente'
		},
		judgmentAdvice: {
			accept: 'Adopción recomendada. Se ha realizado verificación suficiente.',
			caution: 'Verificación adicional recomendada. Sea cauteloso con decisiones importantes.',
			reject: 'Rechazo recomendado. Busque fuentes más confiables.'
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

	// Categorías de elementos de verificación
	categories: {
		critical: {
			name: 'Evaluación Crítica (Requerida)',
			description:
				'Elementos más importantes para determinar la confiabilidad básica de la información',
			emoji: '🚨'
		},
		detailed: {
			name: 'Evaluación Detallada (Importante)',
			description: 'Elementos para evaluar la calidad y experticia de la información',
			emoji: '📝'
		},
		verification: {
			name: 'Verificación y Cotejo Cruzado',
			description: 'Elementos para confirmar la verificabilidad y respaldo de la información',
			emoji: '🔍'
		},
		context: {
			name: 'Evaluación de Contexto y Sesgo',
			description: 'Elementos para evaluar la apropiación del sesgo y contexto',
			emoji: '🌐'
		}
	},

	// Funcionalidad de exportación
	export: {
		title: 'Exportar',
		description: 'Exportar lista de verificación en varios formatos',
		format: 'Formato',
		options: 'Opciones',
		includeGuides: 'Incluir Guías',
		includeNotes: 'Incluir Notas',
		includeSummary: 'Incluir Resumen',
		sectionBreaks: 'Saltos de Sección',
		pdfModes: {
			pixelPerfect: 'Píxel Perfecto',
			reliableFont: 'Enfoque en Confiabilidad de Fuente',
			textBased: 'Basado en Texto'
		},
		formats: {
			pdf: 'PDF',
			html: 'HTML',
			json: 'JSON',
			markdown: 'Markdown'
		},
		progress: {
			initializing: 'Inicializando...',
			generating: 'Generando...',
			processing: 'Procesando...',
			finalizing: 'Finalizando...',
			completed: 'Completado',
			failed: 'Falló'
		}
	},

	// Historial
	history: {
		title: 'Historial de Evaluación',
		description: 'Resultados de evaluación pasados',
		empty: 'No hay historial disponible',
		lastEvaluated: 'Última Evaluación',
		viewResults: 'Ver Resultados',
		deleteHistory: 'Eliminar Historial',
		clearAll: 'Limpiar Todo',
		recent: 'Evaluaciones Recientes',
		viewAll: 'Ver Todo',
		createFirst: '¡Vamos a crear tu primera lista de verificación!'
	},

	// Mensajes de error
	errors: {
		general: 'Ha ocurrido un error inesperado',
		network: 'Ha ocurrido un error de red',
		storage: 'Ha ocurrido un error de almacenamiento',
		export: 'La exportación falló',
		import: 'La importación falló',
		invalidData: 'Datos inválidos',
		unsupportedFeature: 'Característica no soportada',
		permissionDenied: 'Permiso denegado',
		fileNotFound: 'Archivo no encontrado',
		fileTooLarge: 'Archivo demasiado grande',
		invalidFileFormat: 'Formato de archivo inválido'
	},

	// Mensajes de éxito
	success: {
		saved: 'Guardado',
		exported: 'Exportado',
		imported: 'Importado',
		deleted: 'Eliminado',
		copied: 'Copiado',
		shared: 'Compartido'
	},

	// Mensajes de confirmación
	confirmations: {
		delete: '¿Está seguro de que desea eliminar?',
		reset: '¿Restablecer?',
		clearHistory: '¿Limpiar todo el historial?',
		overwrite: '¿Sobrescribir?',
		discard: '¿Descartar cambios?'
	},

	// Ayuda y Guía
	help: {
		title: 'Ayuda y Uso',
		overview: 'Resumen',
		howToUse: 'Cómo Usar',
		categories: 'Categorías',
		scoring: 'Cálculo de Puntuación',
		features: 'Características',
		troubleshooting: 'Solución de Problemas',
		faq: 'Preguntas Frecuentes'
	},

	// Accesibilidad
	accessibility: {
		skipToContent: 'Saltar al contenido',
		mainNavigation: 'Navegación principal',
		searchForm: 'Formulario de búsqueda',
		languageSelector: 'Selector de idioma',
		themeToggle: 'Alternar tema',
		closeDialog: 'Cerrar diálogo',
		openMenu: 'Abrir menú',
		expandSection: 'Expandir sección',
		collapseSection: 'Contraer sección'
	},

	// Fecha y Hora
	datetime: {
		justNow: 'Justo ahora',
		minutesAgo: 'hace minutos',
		hoursAgo: 'hace horas',
		daysAgo: 'hace días',
		weeksAgo: 'hace semanas',
		monthsAgo: 'hace meses',
		yearsAgo: 'hace años',
		createdAt: 'Creado en',
		updatedAt: 'Actualizado en',
		completedAt: 'Completado en'
	},

	// Unidades y Números
	units: {
		items: 'elementos',
		percent: '%',
		score: 'puntuación',
		total: 'total',
		completed: 'completado',
		remaining: 'restante',
		of: 'de'
	},

	// Formularios
	forms: {
		titleLabel: 'Título',
		titlePlaceholder: 'Ingrese el título de la información o fuente a evaluar',
		descriptionLabel: 'Resumen de Información Objetivo',
		descriptionPlaceholder: 'Describa brevemente el contenido de la información a evaluar',
		notesLabel: 'Notas de Evaluación y Elementos de Verificación Adicionales',
		notesPlaceholder:
			'Registre cualquier pregunta, elementos para verificar, impresiones generales, etc...'
	},

	// Texto de UI
	ui: {
		quickStartGuide: '💡 ¡Use esta guía para comenzar rápidamente!',
		guideModeDetailed: '🔍 Modo de Guía Detallada',
		guideModeNormal: '📝 Modo Normal',
		completeEvaluation: 'Completar Evaluación'
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
