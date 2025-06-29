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
		systemMode: 'Sistema'
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
		recent: 'Evaluaciones Recientes'
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
	}
};

export default translations;
