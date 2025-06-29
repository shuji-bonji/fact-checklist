/**
 * Spanish translation file template
 * Spanish (es) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'es' as const,
	version: '1.0.0',
	lastUpdated: '2025-06-29',
	translator: 'Claude Code',
	completeness: 100
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
		guide: 'Guía',
		showGuide: 'Mostrar Guía',
		rip: {
			high: 'Riesgo Alto',
			medium: 'Riesgo Medio',
			low: 'Riesgo Bajo'
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
			high: 'Fiabilidad Alta',
			medium: 'Fiabilidad Moderada',
			low: 'Fiabilidad Baja',
			poor: 'Problemas de Fiabilidad'
		},
		advice: {
			high: 'Adopción recomendada. Se ha realizado verificación suficiente.',
			medium: 'Confirmación adicional recomendada. Sea cauteloso con decisiones importantes.',
			low: 'Precaución requerida. Se necesita verificación adicional.',
			poor: 'Rechazo recomendado. Busque fuentes de información fiables.'
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

	// Elementos de la lista de verificación
	checklistItems: {
		// Evaluación crítica
		'source-authority': {
			title: 'Publicación de fuentes con autoridad',
			description:
				'Organismos gubernamentales, instituciones académicas, organizaciones profesionales, artículos revisados por pares, medios fiables, etc.',
			guideTitle: '🏛️ Criterios para fuentes con autoridad',
			guideContent:
				'Instituciones gubernamentales/públicas: Ministerios, oficinas de estadística, bancos centrales, tribunales, etc.\nInstituciones académicas: Universidades, institutos de investigación, sociedades científicas, revistas académicas revisadas por pares\nOrganizaciones especializadas: Instituciones nacionales e internacionales según el campo de especialización\nMedios fiables: Órganos de prensa con política editorial clara e historial de correcciones y disculpas',
			examplesGood: [
				'Datos estadísticos del Ministerio de Sanidad',
				'Artículo revisado por pares en Nature',
				'Anuncio oficial del Banco de España'
			],
			examplesBad: [
				'Información de blog personal',
				'Publicación en foro anónimo',
				'Sitio con fines publicitarios'
			]
		},
		'source-primary': {
			title: 'Verificación de fuentes primarias',
			description: 'Información directa de la fuente, no rumores o informes de segunda mano',
			guideTitle: '🎯 Cómo identificar fuentes primarias',
			guideContent:
				'Fuentes primarias: Artículos de investigación por los propios autores, testimonios de primera mano, anuncios oficiales, datos brutos\nFuentes secundarias: Artículos explicativos, sitios de síntesis, análisis por terceros\nPuntos de verificación: Atención a expresiones como "según..." "reportado por..." etc.',
			examplesGood: [
				'Artículo publicado por el propio investigador',
				'Anuncio de resultados financieros de empresa',
				'Estadísticas oficiales gubernamentales'
			],
			examplesBad: ['"Según expertos"', '"Cierta encuesta" sin atribución clara']
		},
		'source-multiple': {
			title: 'Múltiples fuentes independientes',
			description:
				'Informes o confirmaciones similares provenientes de diferentes posiciones/organizaciones',
			guideTitle: '🔄 Cómo verificar la independencia',
			guideContent:
				'Fuentes independientes: Fuentes con diferentes organizaciones, financiación e intereses\nEstándar mínimo: Confirmación por 2-3 fuentes independientes y fiables\nPunto de atención: Los artículos basados en el mismo comunicado de prensa no son "independientes"',
			examplesGood: [
				'Anuncio gubernamental + investigación académica + informes de múltiples medios',
				'Resultados similares de diferentes instituciones de investigación'
			],
			examplesBad: [
				'Múltiples medios del mismo grupo empresarial',
				'Solo artículos de reproducción'
			]
		},
		'warning-anonymous': {
			title: 'Información no anónima o sin fuente',
			description: 'El creador/editor puede ser claramente identificado',
			guideTitle: '🔍 Puntos clave para la identificación de fuentes',
			guideContent:
				'Información requerida: Nombre real del creador, afiliación, información de contacto, experiencia\nSeñales de alarma: "Según fuentes internas" "Experto anónimo" "Cierta investigación"\nAnonimato aceptable: Protección de fuentes en periodismo (pero el periodista debe ser identificable)',
			examplesGood: [
				'Según Dr. García (Profesor de medicina, Universidad Complutense)',
				'Declaración del director del departamento XX del Ministerio'
			],
			examplesBad: ['Según cierto médico', 'Según fuentes cercanas al caso', 'Experto anónimo']
		},
		'warning-sensational': {
			title: 'Pocas expresiones sensacionalistas o inflamatorias',
			description: 'Descripción calmada y objetiva, sin apelaciones emocionales excesivas',
			guideTitle: '⚠️ Cómo identificar expresiones sensacionalistas',
			guideContent:
				'Expresiones de alarma: "Absolutamente", "Completamente", "Impactante", "Sorprendente", "Lo que la industria XX oculta"\nManipulación emocional: Expresiones que fomentan el miedo, la ira, los celos\nExpresiones apropiadas: "Según la investigación", "Los datos muestran", "La opinión de expertos es"',
			examplesGood: [
				'La investigación mostró mejora en el 75% de los sujetos',
				'Los datos confirman una diferencia estadísticamente significativa'
			],
			examplesBad: [
				'¡La verdad impactante que los médicos nunca revelan!',
				'Hechos sorprendentes ocultados por la industria'
			]
		},
		'warning-logical': {
			title: 'Sin contradicciones lógicas',
			description: 'El contenido es coherente sin saltos lógicos obvios',
			guideTitle: '🧠 Cómo verificar la coherencia lógica',
			guideContent:
				'Elementos a verificar:\n• ¿Están las premisas y conclusiones correctamente conectadas?\n• ¿Están las relaciones causa-efecto claramente demostradas?\n• ¿Hay afirmaciones contradictorias simultáneas?\nErrores lógicos comunes: Confundir correlación con causalidad, generalización extrema',
			examplesGood: [
				'Análisis estadísticamente significativo considerando otros factores',
				'Desarrollo lógico paso a paso'
			],
			examplesBad: [
				'A y B ocurrieron juntos, por tanto A causó B',
				'Generalización a partir de ejemplos extremos'
			]
		},
		// Evaluación detallada
		'time-recent': {
			title: 'Frescura de la información',
			description:
				'La fecha de publicación está especificada y el contenido mantiene una frescura apropiada',
			guideTitle: '⏰ Juzgar la frescura apropiada de la información',
			guideContent:
				'Estándares por campo:\n• Noticias/eventos actuales: Dentro de unos días a 1 semana\n• Medicina/ciencia: Dentro de 2-3 años (investigación básica hasta 5 años)\n• Tecnología/IT: Dentro de 1-2 años\n• Derecho/regulación: Reflejando las últimas revisiones\nPuntos de verificación: Fecha y hora de publicación claramente indicadas, fecha de última actualización',
			examplesGood: [
				'Publicado en diciembre 2024',
				'Última actualización: enero 2025',
				'Refleja las últimas revisiones legales'
			],
			examplesBad: [
				'Sin fecha indicada',
				'Información técnica de hace 5 años',
				'Explicación basada en leyes antiguas'
			]
		},
		'time-update': {
			title: 'Historial de actualizaciones y correcciones',
			description: 'El contenido se actualiza según sea necesario con correcciones transparentes',
			guideTitle: '📝 Verificación de actualizaciones y correcciones transparentes',
			guideContent:
				'Características de buena actualización:\n• Descripción clara del contenido actualizado\n• Explicación de la razón de la corrección\n• Registro de fecha y hora de actualización\n• Nota en caso de cambio importante\nIndicador de fiabilidad: Actitud que reconoce errores y los corrige',
			examplesGood: [
				'Actualización del 15 enero 2025: Reemplazo de datos estadísticos por última versión',
				'Historial de correcciones claramente indicado'
			],
			examplesBad: [
				'Información antigua dejada tal como está',
				'Sin registro de correcciones',
				'Cambio silencioso de contenido'
			]
		},
		'expert-knowledge': {
			title: 'Experiencia apropiada',
			description: 'El creador posee conocimiento/experiencia suficiente en el campo relevante',
			guideTitle: '🎓 Cómo verificar la experiencia',
			guideContent:
				'Elementos a verificar:\n• Títulos/cualificaciones en campos relacionados\n• Experiencia práctica e historial de investigación\n• Historial de presentaciones y publicaciones académicas\n• Carrera en instituciones especializadas\nAtención: La experiencia en el campo relacionado es importante (como un médico hablando de economía)',
			examplesGood: [
				'Especialista en enfermedades infecciosas explicando vacunas',
				'Doctor en economía analizando política monetaria'
			],
			examplesBad: [
				'Famoso fuera de su campo haciendo declaraciones médicas',
				'Persona de cualificaciones desconocidas explicando derecho'
			]
		},
		'detail-sufficient': {
			title: 'Detalle y evidencia suficientes',
			description:
				'El proceso que lleva a las conclusiones y la evidencia de apoyo están apropiadamente explicados',
			guideTitle: '📋 Juzgar la suficiencia de evidencia',
			guideContent:
				'Elementos necesarios:\n• Datos específicos que apoyan las afirmaciones\n• Explicación de la metodología\n• Mención de limitaciones y restricciones\n• Referencia a opiniones opuestas\nSeñales de alarma: Solo conclusiones sin proceso claro, evidencia vaga',
			examplesGood: [
				'Mención de tamaño de muestra, métodos estadísticos, intervalos de confianza',
				'Explicación detallada de la metodología'
			],
			examplesBad: [
				'Solo "el efecto fue probado" sin detalles',
				'Solo conclusiones sin evidencia clara'
			]
		},
		'citation-proper': {
			title: 'Citas y referencias apropiadas',
			description: 'Se muestran fuentes fiables para afirmaciones importantes',
			guideTitle: '📚 Estándares para citas apropiadas',
			guideContent:
				'Contenido que requiere citas:\n• Datos estadísticos y numéricos\n• Afirmaciones especializadas\n• Resultados de investigación de otros\n• Contenido de leyes y regulaciones\nFormato de cita: Información mínima como nombre de autor, año de publicación, título, editor',
			examplesGood: [
				'Según la investigación de García (2024)...',
				'En las estadísticas del ministerio (2025)...'
			],
			examplesBad: [
				'Según una investigación (fuente desconocida)',
				'Los datos muestran (detalles desconocidos)'
			]
		},
		'citation-accessible': {
			title: 'Verificabilidad de fuentes citadas',
			description: 'Las fuentes citadas pueden efectivamente ser accedidas y verificadas',
			guideTitle: '🌐 Verificación de accesibilidad de citas',
			guideContent:
				'Estado ideal:\n• Enlaces directos o DOI\n• Fuentes de información públicas\n• Información específica buscable\nAlcance aceptable: Bases de datos de pago, material verificable en biblioteca\nCitas problemáticas: Conversaciones privadas, material interno no verificable',
			examplesGood: ['Con enlaces URL', 'Artículos con números DOI', 'Libros con números ISBN'],
			examplesBad: [
				'Según materiales internos',
				'En discusiones personales',
				'Material inaccesible'
			]
		},
		// Verificación y contraste cruzado
		'cross-check': {
			title: 'Contraste cruzado con otras fuentes',
			description: 'Contenido similar puede ser confirmado por múltiples fuentes independientes',
			guideTitle: '🔍 Métodos efectivos de contraste cruzado',
			guideContent:
				'Verificación paso a paso:\n1. Buscar otras fuentes fiables que reporten los mismos hechos\n2. Confirmar informes que tratan el mismo evento desde diferentes ángulos\n3. Investigar también opiniones opuestas y puntos de vista críticos\nHerramientas de verificación: Google Scholar, bases de datos públicas, sitios de verificación de hechos',
			examplesGood: [
				'Resultados similares en múltiples artículos revisados por pares',
				'Verificación de consistencia con estadísticas gubernamentales'
			],
			examplesBad: ['Una sola fuente de información', 'Múltiples artículos usando la misma fuente']
		},
		'fact-check': {
			title: 'Verificación por organizaciones de fact-checking',
			description: 'Existe verificación por instituciones fiables de verificación de hechos',
			guideTitle: '✅ Organizaciones fiables de verificación de hechos',
			guideContent:
				'Organizaciones internacionales: Snopes, PolitiFact, AFP Fact Check, Full Fact (Reino Unido), etc., instituciones de diferentes posiciones y regiones\nOrganizaciones españolas: Maldita.es, Newtral, EFE Verifica, Verificat, etc.\nMedios especializados: Departamentos de verificación de hechos de RTVE, El País, La Sexta, etc.\nMétodo de verificación: Buscar la información concerniente en sitios de fact-checking',
			examplesGood: [
				'Múltiples organizaciones de fact-checking juzgaron "verdadero"',
				'Verificación por instituciones internacionales'
			],
			examplesBad: [
				'Juzgado como "información falsa" por fact-checking',
				'Información no verificada'
			]
		},
		'data-verifiable': {
			title: 'Datos verificables',
			description: 'Los datos que apoyan las afirmaciones pueden ser objetivamente verificados',
			guideTitle: '📈 Verificación de la verificabilidad de datos',
			guideContent:
				'Elementos a verificar:\n• Fuente de datos (instituto de encuestas, oficina de estadística, etc.)\n• Indicación clara del método y período de recolección\n• Detalles del tamaño de muestra y sujetos\n• Accesibilidad a datos brutos o detallados\nSeñales de alarma: Solo "datos internos" "encuesta propietaria" sin detalles claros',
			examplesGood: ['Datos del INE', 'Datos públicos en materiales suplementarios de artículos'],
			examplesBad: [
				'Según nuestra encuesta (sin visión detallada de la encuesta)',
				'Solo datos internos'
			]
		},
		methodology: {
			title: 'Validez de métodos/metodología',
			description: 'La metodología de investigación o encuesta es apropiada y reproducible',
			guideTitle: '🔬 Evaluación de validez metodológica',
			guideContent:
				'Puntos de evaluación:\n• Apropiación del diseño de investigación (ECR, estudio de cohorte, etc.)\n• Presencia de medidas anti-sesgo\n• Validez de métodos estadísticos\n• Garantía de reproducibilidad (publicación de protocolo, etc.)\nPuntos verificables incluso para no especialistas: Descripción detallada de métodos, comparación con otras investigaciones',
			examplesGood: [
				'Ensayo doble ciego',
				'Configuración apropiada de grupo control',
				'Publicación del protocolo'
			],
			examplesBad: [
				'Sin descripción de metodología',
				'Selección sesgada de muestra',
				'Métodos no reproducibles'
			]
		},
		// Evaluación de contexto y sesgo
		'bias-disclosure': {
			title: 'Divulgación de conflictos de interés',
			description:
				'Los intereses financieros, políticos y personales están apropiadamente divulgados',
			guideTitle: '💰 Elementos a verificar para conflictos de interés',
			guideContent:
				'Conflictos de interés a divulgar:\n• Fuente de financiación de investigación\n• Honorarios y gastos de consultoría de empresas\n• Beneficios financieros como tenencia de acciones\n• Posición política e ideológica\nMétodo de verificación: Buscar menciones como "conflicto de intereses", "COI", "financiación"',
			examplesGood: [
				'Esta investigación se realizó con una subvención de la Fundación XX',
				'Mención clara de COI (conflictos de interés)'
			],
			examplesBad: [
				'Investigación de empresa farmacéutica sin mención de conflicto de interés',
				'Fuente de financiación desconocida'
			]
		},
		'balanced-view': {
			title: 'Perspectiva equilibrada',
			description: 'Diferentes posiciones y opiniones opuestas también son consideradas',
			guideTitle: '⚖️ Perspectivas para evaluación de equilibrio',
			guideContent:
				'Puntos de verificación:\n• Introducción de opiniones opuestas y puntos de vista críticos\n• Mención de diferentes resultados de investigación\n• Mención de incertidumbres y limitaciones\n• Opiniones de múltiples expertos\nSeñales de alarma: Solo afirmaciones unilaterales, selección solo de información conveniente',
			examplesGood: [
				'Por otro lado, el profesor XX presenta un punto de vista diferente',
				'Comparación de múltiples resultados de investigación'
			],
			examplesBad: ['Enumeración solo de evidencia de apoyo', 'Sin mención de opiniones opuestas']
		},
		'context-adequate': {
			title: 'Información de contexto suficiente',
			description:
				'Se proporciona el contexto y antecedentes necesarios para entender la información',
			guideTitle: '🌍 Elementos a verificar para información contextual',
			guideContent:
				'Información de contexto necesaria:\n• Historial e investigaciones previas\n• Leyes y sistemas relacionados\n• Contexto social y cultural\n• Tendencias y comparaciones internacionales\nPunto de evaluación: Provisión de contexto que permite a los lectores entender y juzgar apropiadamente',
			examplesGood: [
				'Casos similares pasados',
				'Presentación también de datos de comparación con otros países',
				'Explicación del contexto histórico'
			],
			examplesBad: [
				'Solo números aislados',
				'Sin información de contexto',
				'Comparación ignorando el contexto'
			]
		},
		'scope-clear': {
			title: 'Clarificación del alcance de aplicación',
			description:
				'El alcance aplicable y las limitaciones de la información están claramente mostradas',
			guideTitle: '🎯 Clarificación del alcance de aplicación',
			guideContent:
				'Alcance a clarificar:\n• Personas, regiones, períodos objetivo\n• Limitaciones y restricciones de la investigación\n• Grado de generalizabilidad\n• Casos excluidos\nImportancia: Para prevenir la generalización excesiva y el mal uso',
			examplesGood: [
				'Como esta investigación se dirigió a hombres adultos españoles, la aplicación a otros grupos debe ser cautelosa',
				'Mención clara de limitaciones'
			],
			examplesBad: [
				'Generalización ilimitada de resultados de investigación limitados',
				'Alcance de aplicación desconocido'
			]
		}
	}
};

export default translations;
