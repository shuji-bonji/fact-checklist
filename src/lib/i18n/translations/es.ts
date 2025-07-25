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
    brandTitle: 'Lista de Verificación de Hechos',
    brandSubtitle: 'Evaluación sistemática de la confiabilidad de la información',
    description:
      'Una lista de verificación para evaluar científica y sistemáticamente la confiabilidad de la información',
    version: '1.0.0',
    author: 'Equipo de Lista de Verificación de Hechos',
    copyright: '© 2025 Equipo de Lista de Verificación de Hechos',
    poweredBy: 'Desarrollado por'
  },

  // Metadatos específicos de páginas
  pages: {
    home: {
      title: 'Fact Checklist - Evaluación Práctica de Confiabilidad de Información',
      description:
        'Evalúe sistemáticamente la confiabilidad de la información con 20 elementos de verificación. Juzgue la información con sus propios ojos y mente sin depender de IA o gobierno.',
      keywords:
        'verificación de hechos,verificación de información,evaluación de confiabilidad,PWA,alfabetización informacional,contramedidas de desinformación'
    },
    about: {
      title: 'Acerca de Esta App - Fact Checklist',
      description:
        'Conozca el contexto de desarrollo, características y uso de Fact Checklist. Una herramienta para juzgar la confiabilidad de la información por usted mismo.',
      keywords:
        'descripción de la app,filosofía de desarrollo,evaluación de información,juicio de confiabilidad,verificación de hechos,cómo usar'
    },
    help: {
      title: 'Ayuda y Guía - Fact Checklist',
      description:
        'Instrucciones detalladas de uso, explicaciones de elementos de la lista de verificación y consejos para una evaluación efectiva de información.',
      keywords:
        'cómo usar,ayuda,elementos de verificación,evaluación de información,guía,instrucciones'
    },
    privacy: {
      title: 'Política de Privacidad - Fact Checklist',
      description:
        'Información sobre el manejo de datos personales. Todos los datos se almacenan localmente y no se transmiten externamente.',
      keywords: 'privacidad,información personal,protección de datos,almacenamiento local,seguridad'
    },
    intro: {
      title:
        'Lista de Verificación de Hechos Práctica para Sobrevivir en un Mundo Lleno de Desinformación',
      description:
        'Una lista de verificación simple para evaluar la confiabilidad de la información con sus propios ojos y mente mientras avanza la regulación gubernamental de redes sociales. Evalúe información científica y sistemáticamente sin confiar ciegamente en IA o medios.',
      keywords:
        'verificación de hechos,verificación de información,evaluación de confiabilidad,PWA,alfabetización informacional,contramedidas de desinformación,regulación de redes sociales,control de información,calidad de información,verificación de hechos por IA'
    }
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
    defaultFileName: 'Lista de Verificación',
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
    completed: 'Completado',
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
    },
    evaluationCompleted: '✓ ¡Evaluación Completada!',
    evaluationCompletedDescription:
      'Puede revisar los resultados de la evaluación de la lista de verificación.',
    evaluationResults: 'Resultados de Evaluación',
    totalScore: 'Puntuación Total',
    itemsDetail: 'Detalles de Elementos',
    recommendedActions: 'Acciones Recomendadas',
    improvementTips: 'Para mejorar la confiabilidad',
    checkUncheckedItems: 'Verificar elementos no marcados',
    additionalSourceResearch: 'Investigación de fuentes adicionales',
    expertConsultation: 'Consulta de expertos',
    factCheckOrganizations: 'Usar organizaciones de verificación',
    statistics: 'Estadísticas',
    checkedItems: 'Verificado',
    uncheckedItems: 'No verificado',
    completionRate: 'Tasa de Finalización',
    actions: 'Acciones',
    exportShare: 'Exportar y Compartir',
    reEdit: 'Re-editar'
  },

  // Categorías de elementos de verificación
  categories: {
    critical: {
      name: 'Evaluación Crítica (Requerida)',
      description:
        'Elementos más importantes para determinar la confiabilidad básica de la información',
      emoji: '🚨',
      short: 'Crítica'
    },
    detailed: {
      name: 'Evaluación Detallada (Importante)',
      description: 'Elementos para evaluar la calidad y experticia de la información',
      emoji: '📝',
      short: 'Detallada'
    },
    verification: {
      name: 'Verificación y Cotejo Cruzado',
      description: 'Elementos para confirmar la verificabilidad y respaldo de la información',
      emoji: '🔍',
      short: 'Verificación'
    },
    context: {
      name: 'Evaluación de Contexto y Sesgo',
      description: 'Elementos para evaluar la apropiación del sesgo y contexto',
      emoji: '🌐',
      short: 'Contexto'
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
    pdfMode: 'Modo de Generación PDF',
    pdfModes: {
      pixelPerfect: 'Píxel Perfecto',
      pixelPerfectDescription: 'Coincidencia exacta con la visualización del navegador',
      reliableFont: 'Enfoque en Confiabilidad de Fuente',
      reliableFontDescription: 'Incrustación de fuente multilingüe confiable',
      textBased: 'Basado en Texto',
      textBasedDescription: 'PDF liviano con búsqueda habilitada'
    },
    formats: {
      pdf: 'PDF',
      html: 'HTML',
      json: 'JSON',
      markdown: 'Markdown'
    },
    progress: {
      starting: 'Iniciando...',
      initializing: 'Inicializando...',
      generating: 'Generando...',
      processing: 'Procesando...',
      saving: 'Guardando...',
      finalizing: 'Finalizando...',
      completed: 'Completado',
      failed: 'Falló'
    },
    generatedAt: 'Generado el',
    summaryTable: {
      item: 'Elemento',
      value: 'Valor'
    },
    table: {
      section: 'Sección',
      completionRate: 'Tasa de Completado',
      completedItems: 'Elementos Completados'
    },
    sectionCompletionRates: 'Tasas de Completado por Sección',
    achievementStatus: 'Estado de Logro',
    completionStatus: 'Estado de Finalización',
    goodExamples: 'Buenos Ejemplos',
    badExamples: 'Malos Ejemplos',
    completed: 'Completado',
    notCompleted: 'No Completado',
    items: 'Elementos',
    examples: 'Ejemplos',
    metadata: {
      title: 'Metadatos',
      created: 'Creado',
      score: 'Puntuación',
      confidence: 'Confianza',
      language: 'Idioma',
      judgment: 'Juicio Final'
    },
    summary: {
      title: 'Resumen de Evaluación',
      totalScore: 'Puntuación Total',
      completionRate: 'Tasa de Completado',
      confidenceLevel: 'Nivel de Confianza',
      checkedItems: 'Elementos Verificados',
      result: 'Resultado de Evaluación',
      confidenceText: 'Texto de Confianza',
      judgmentAdvice: 'Consejo de Juicio'
    },
    clipboardTitle: 'Resultados de Evaluación de Verificación de Hechos',
    sectionCompletion: 'Tasa de Completado por Sección',
    notes: 'Notas de Evaluación',
    judgment: {
      accept: 'Recomendado',
      caution: 'Precaución Requerida',
      reject: 'No Recomendado',
      notEvaluated: 'No Evaluado'
    },
    csv: {
      id: 'ID',
      title: 'Título',
      description: 'Descripción',
      checked: 'Verificado',
      category: 'Categoría'
    },
    error: {
      pdfGeneration: 'Error en la generación de PDF'
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
    subtitle: 'Guía detallada para usar la lista de verificación de hechos',
    tableOfContents: 'Tabla de contenidos',
    navigation: {
      overview: 'Resumen',
      usage: 'Uso',
      categories: 'Categorías',
      scoring: 'Puntuación',
      features: 'Características',
      privacy: 'Privacidad',
      troubleshooting: 'Solución de problemas'
    },
    sections: {
      overview: {
        title: 'Resumen de la aplicación',
        emoji: '📋',
        description: 'Uso básico de la lista de verificación de hechos',
        content:
          'Esta aplicación es una herramienta para evaluar la credibilidad de información en internet de manera científica y sistemática.',
        subSections: {
          features: {
            title: 'Características principales',
            content:
              '• Privacidad completa: todos los datos se almacenan localmente\n• Funciona sin conexión\n• Evaluación científica\n• Gestión de historial'
          },
          targetUsers: {
            title: 'Usuarios objetivo',
            content:
              'Periodistas, investigadores, estudiantes y cualquier persona interesada en evaluar la credibilidad de la información'
          }
        }
      },
      usage: {
        title: 'Uso',
        emoji: '🔍',
        description: 'Guía paso a paso para usar la aplicación',
        content:
          'Sigue estos pasos para evaluar la credibilidad de información de manera sistemática.',
        subSections: {
          step1: {
            title: 'Paso 1: Ingresar información',
            content: 'Ingresa el título y descripción de la información que quieres evaluar'
          },
          step2: {
            title: 'Paso 2: Evaluar elementos',
            content: 'Evalúa cada elemento de la lista basándote en la evidencia disponible'
          },
          step3: {
            title: 'Paso 3: Revisar resultado',
            content: 'Revisa el resultado calculado y el nivel de confianza'
          },
          step4: {
            title: 'Paso 4: Decisión final',
            content:
              'Toma tu decisión final basada en la evaluación: aceptar, precaución o rechazar'
          }
        }
      },
      categories: {
        title: 'Categorías de evaluación',
        emoji: '📊',
        description: 'Las cuatro categorías principales de evaluación',
        content:
          'Los elementos de evaluación están organizados en cuatro categorías principales para asegurar una evaluación integral.',
        subSections: {
          critical: {
            title: 'Evaluación crítica',
            content:
              'Los elementos más importantes para determinar la credibilidad básica de la información'
          },
          detailed: {
            title: 'Evaluación detallada',
            content: 'Elementos para evaluar la calidad y experiencia de la información'
          },
          verification: {
            title: 'Verificación y verificación cruzada',
            content: 'Elementos para confirmar la verificabilidad y soporte de la información'
          },
          context: {
            title: 'Evaluación de contexto y sesgo',
            content: 'Elementos para evaluar la adecuación del sesgo y contexto'
          }
        }
      },
      scoring: {
        title: 'Sistema de puntuación',
        emoji: '🎯',
        description: 'Cómo se calculan las puntuaciones y nivel de confianza',
        content:
          'La puntuación se calcula basándose en el número de elementos cumplidos del total de elementos.',
        subSections: {
          calculation: {
            title: 'Método de cálculo',
            content: 'Puntuación = (número de elementos cumplidos / total de elementos) × 100'
          },
          criteria: {
            title: 'Criterios de evaluación',
            content:
              '• 80%+: Alta credibilidad\n• 60-79%: Credibilidad media\n• 40-59%: Credibilidad baja\n• <40%: Problemas de credibilidad'
          },
          finalJudgment: {
            title: 'Decisión final',
            content:
              'Usa la puntuación como guía, pero la decisión final depende de tu juicio personal'
          }
        }
      },
      features: {
        title: 'Características',
        emoji: '⭐',
        description: 'Características avanzadas de la aplicación',
        content:
          'La aplicación ofrece varias características avanzadas para mejorar la experiencia del usuario.',
        subSections: {
          detailedGuide: {
            title: 'Guías detalladas',
            content:
              'Cada elemento de evaluación contiene una guía detallada y ejemplos prácticos para ayudarte en tu evaluación'
          },
          exportFunction: {
            title: 'Función de exportación',
            content:
              'Puedes exportar resultados de evaluación en múltiples formatos (PDF, HTML, JSON, Markdown)',
            exportFormats: {
              title: 'Formatos de exportación',
              formats: {
                pdf: {
                  name: 'PDF',
                  features: 'Formato profesional para imprimir y compartir',
                  usage: 'Adecuado para informes oficiales y archivo'
                },
                html: {
                  name: 'HTML',
                  features: 'Visualización interactiva en navegador',
                  usage: 'Adecuado para compartir por web'
                },
                json: {
                  name: 'JSON',
                  features: 'Formato de datos estructurado',
                  usage: 'Adecuado para análisis automático e importación'
                },
                markdown: {
                  name: 'Markdown',
                  features: 'Formato de texto flexible',
                  usage: 'Adecuado para blogs y documentación'
                }
              }
            },
            pdfModes: {
              title: 'Modos PDF',
              modes: {
                pixelPerfect: {
                  name: 'Píxel perfecto',
                  subtitle: 'Mejor calidad visual',
                  description: 'Mantiene el diseño original con alta precisión',
                  features: 'Diseño conforme a interfaz, colores precisos, fuentes claras'
                },
                reliableFont: {
                  name: 'Fuente confiable',
                  description: 'Se enfoca en claridad de texto y legibilidad',
                  features: 'Fuentes optimizadas, rendimiento rápido, tamaño de archivo menor'
                },
                textBased: {
                  name: 'Basado en texto',
                  subtitle: 'Texto buscable y copiable',
                  description: 'Produce PDF puramente textual y buscable',
                  features: 'Texto buscable, tamaño pequeño, alta compatibilidad'
                }
              }
            },
            exportOptions: {
              title: 'Opciones de exportación',
              options: {
                summary: {
                  name: 'Incluir resumen',
                  description: 'Añade resumen de resultado y evaluación',
                  formats: 'Disponible en todos los formatos'
                },
                guides: {
                  name: 'Incluir guías',
                  description: 'Añade guías detalladas para cada elemento',
                  formats: 'Disponible en PDF y HTML'
                },
                notes: {
                  name: 'Incluir notas',
                  description: 'Añade tus notas personales',
                  formats: 'Disponible en todos los formatos'
                },
                sectionBreaks: {
                  name: 'Saltos de sección',
                  description: 'Añade páginas separadas para secciones',
                  formats: 'Solo disponible en PDF'
                }
              }
            },
            exportNote:
              'Recuerda: todas las exportaciones se realizan localmente en tu dispositivo sin transferencia de datos'
          },
          historyManagement: {
            title: 'Gestión de historial',
            content:
              'La aplicación guarda automáticamente las últimas 5 evaluaciones y te permite acceder y gestionar'
          },
          pwaSupport: {
            title: 'Soporte PWA',
            content:
              'La aplicación puede instalarse en el dispositivo y funcionar completamente sin conexión'
          }
        }
      },
      privacy: {
        title: 'Privacidad y seguridad',
        emoji: '🔒',
        description: 'Cómo protegemos tu privacidad y datos',
        content:
          'Estamos comprometidos con proteger tu privacidad a través de diseño orientado a la privacidad.',
        subSections: {
          localStorage: {
            title: 'Almacenamiento local',
            content:
              'Todos tus datos se almacenan localmente en tu navegador y nunca salen de tu dispositivo'
          },
          security: {
            title: 'Seguridad',
            content: 'Sin conexiones externas o seguimiento de usuarios'
          },
          dataDeletion: {
            title: 'Eliminación de datos',
            content:
              'Puedes eliminar todos tus datos en cualquier momento borrando los datos del navegador'
          }
        }
      },
      troubleshooting: {
        title: 'Solución de problemas',
        emoji: '🔧',
        description: 'Soluciones para problemas comunes',
        content: 'Si tienes problemas, prueba estas soluciones comunes.',
        subSections: {
          dataNotSaved: {
            title: 'Los datos no se guardan',
            content:
              'Asegúrate de que el almacenamiento local esté habilitado en el navegador y que el navegador esté actualizado'
          },
          scoreNotDisplayed: {
            title: 'La puntuación no se muestra',
            content: 'Asegúrate de haber completado la evaluación de todos los elementos requeridos'
          },
          exportFailed: {
            title: 'Exportación falló',
            content:
              'Asegúrate de que las descargas estén permitidas en el navegador y que haya suficiente espacio'
          },
          otherIssues: {
            title: 'Otros problemas',
            content: 'Intenta actualizar la página o borrar la caché del navegador'
          }
        }
      }
    }
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

  // Política de Privacidad
  privacy: {
    title: 'Política de Privacidad',
    subtitle: 'Nuestro compromiso con la protección de su privacidad',
    lastUpdated: 'Última actualización: 1 de enero de 2025',
    introduction: {
      title: 'Diseño que prioriza la privacidad',
      content:
        'Fact Checklist está diseñado con la privacidad como principio fundamental. Todo el procesamiento de datos ocurre localmente en su dispositivo sin comunicación con servidores o recopilación de datos.'
    },
    dataCollection: {
      title: 'Recopilación de Datos',
      description: 'No recopilamos datos personales ni estadísticas de uso.',
      details: [
        'Sin comunicación con servidores - todo el procesamiento es local',
        'Sin cookies de seguimiento o estadísticas instaladas',
        'Sin información personal recopilada',
        'Sin datos de uso transmitidos'
      ]
    },
    localStorage: {
      title: 'Uso de Almacenamiento Local',
      description:
        'Los datos se almacenan solo en su navegador para la funcionalidad de la aplicación.',
      details: [
        'Datos de evaluación almacenados en localStorage del navegador',
        'Preferencias de idioma guardadas localmente',
        'Sin sincronización en la nube o respaldo',
        'Los datos permanecen solo en su dispositivo'
      ]
    },
    offlineFunctionality: {
      title: 'Funcionalidad Offline',
      description: 'La aplicación funciona completamente offline sin solicitudes de red.',
      details: [
        'Aplicación Web Progresiva con service worker',
        'Todos los recursos almacenados en caché localmente',
        'Sin llamadas a API externas o obtención de datos',
        'Funcionalidad completa sin internet'
      ]
    },
    securityMeasures: {
      title: 'Medidas de Seguridad',
      description: 'Medidas de seguridad integradas para proteger sus datos y privacidad.',
      details: [
        'Política de Seguridad de Contenido (CSP) implementada',
        'Sin scripts de terceros o seguimiento',
        'Prácticas de codificación segura seguidas',
        'Actualizaciones de seguridad regulares'
      ]
    },
    dataRetention: {
      title: 'Retención de Datos',
      description: 'Tiene control completo sobre la retención de sus datos.',
      details: [
        'Los datos persisten solo mientras usted los mantenga',
        'Eliminación fácil a través de configuraciones del navegador',
        'Sin vencimiento automático de datos',
        'Instrucciones claras para eliminación de datos'
      ]
    },
    policyUpdates: {
      title: 'Actualizaciones de Política',
      description: 'Cualquier cambio a esta política de privacidad será claramente comunicado.',
      details: [
        'Actualizaciones anunciadas en el repositorio de GitHub',
        'Historial de versiones mantenido',
        'Notificación clara de cambios significativos',
        'El uso continuado implica aceptación'
      ]
    },
    contact: {
      title: 'Información de Contacto',
      content: 'Si tiene preguntas sobre esta política de privacidad, contáctenos a través de ',
      githubText: 'GitHub Issues',
      suffix: '.'
    }
  },

  // Acerca de la App
  about: {
    title: 'Acerca de la App',
    subtitle: 'Conozca nuestro sistema integral de verificación de hechos',
    hero: {
      title: 'Lista de Verificación Práctica de Hechos',
      subtitle:
        'Una Aplicación Web Progresiva (PWA) para evaluar científica y sistemáticamente la confiabilidad de la información',
      description: [
        'En una era inundada de desinformación y contenido engañoso, esta herramienta práctica apoya la mejora de la alfabetización informacional.',
        'Al verificar 20 elementos en 4 categorías, cuantifica la confiabilidad de la información y apoya el juicio objetivo.'
      ],
      startButton: 'Comenzar Ahora'
    },
    sections: {
      features: 'Características',
      howItWorks: 'Cómo Funciona',
      categories: 'Categorías de Evaluación',
      techStack: 'Tecnología',
      performance: 'Rendimiento'
    },
    sectionDescriptions: {
      howItWorks: 'Evalúe la confiabilidad de la información en 4 pasos simples',
      categories: 'Evaluación multidimensional de información a través de 4 categorías',
      techStack: 'Aplicación de alto rendimiento construida con tecnología de vanguardia',
      performance: 'Puntuaciones de alta calidad de auditorías Lighthouse'
    },
    stats: {
      performance: 'Rendimiento',
      accessibility: 'Accesibilidad',
      bestPractices: 'Mejores Prácticas',
      seo: 'SEO'
    },
    cta: {
      title: 'Comience Ahora',
      description:
        '¿Listo para evaluar la confiabilidad de la información de manera científica y sistemática?',
      startButton: 'Iniciar Evaluación',
      helpButton: 'Saber Más'
    },
    features: {
      privacy: {
        title: 'Privacidad Primero',
        description:
          'Todos los datos permanecen en su dispositivo sin seguimiento o recopilación de datos',
        details: [
          'Sin comunicación con servidores - todo el procesamiento se hace localmente',
          'Sin seguimiento o análisis instalado',
          'Todos los datos almacenados solo en localStorage del navegador',
          'Protección completa de privacidad asegurada'
        ]
      },
      offline: {
        title: 'Funcionalidad Offline',
        description: 'Funciona completamente offline como Aplicación Web Progresiva',
        details: [
          'Funcionalidad completa disponible sin conexión a internet',
          'Instalable como app de escritorio/móvil',
          'Service worker para caché offline',
          'Inicio rápido y rendimiento responsivo'
        ]
      },
      scientific: {
        title: 'Metodología Científica',
        description: 'Sistema de evaluación basado en evidencia siguiendo estándares académicos',
        details: [
          'Lista de verificación estructurada de 20 elementos en 4 categorías',
          'Puntuación cuantitativa con niveles de confianza',
          'Basado en estándares de periodismo e investigación académica',
          'Proceso de evaluación objetivo y reproducible'
        ]
      },
      export: {
        title: 'Exportación Multi-Formato',
        description:
          'Exporte resultados de evaluación en varios formatos para compartir y archivar',
        details: [
          'Exportación PDF con soporte de fuente española',
          'Formato HTML para compartir en web',
          'JSON para intercambio de datos',
          'Markdown para documentación'
        ]
      },
      history: {
        title: 'Historial de Evaluación',
        description: 'Guardado automático y gestión de evaluaciones pasadas',
        details: [
          'Guardado automático de evaluaciones completadas',
          'Acceso rápido a evaluaciones recientes',
          'Capacidades de análisis comparativo',
          'Exportación de datos históricos'
        ]
      },
      support: {
        title: 'Soporte de Accesibilidad',
        description: 'Diseñado para acceso universal y usabilidad',
        details: [
          'Compatibilidad con lectores de pantalla',
          'Soporte de navegación por teclado',
          'Modo de alto contraste disponible',
          'Diseño responsivo para todos los dispositivos'
        ]
      }
    },
    steps: {
      step1: {
        title: 'Ingresar Información',
        description: 'Ingrese el título y resumen de la información a evaluar'
      },
      step2: {
        title: 'Evaluación Sistemática',
        description: 'Trabaje a través de la lista de verificación de 20 elementos en 4 categorías'
      },
      step3: {
        title: 'Evaluación de Puntuación',
        description:
          'Revise la puntuación de confiabilidad calculada automáticamente y el nivel de confianza'
      },
      step4: {
        title: 'Juicio Final',
        description: 'Tome su decisión final y exporte resultados según sea necesario'
      }
    },
    categories: {
      critical: {
        name: 'Evaluación Crítica',
        description: 'Elementos esenciales para evaluación básica de confiabilidad',
        items: 6
      },
      detailed: {
        name: 'Evaluación Detallada',
        description: 'Evaluación profunda de calidad y experiencia',
        items: 5
      },
      verification: {
        name: 'Verificación y Verificación Cruzada',
        description: 'Evaluación de verificación y evidencia de apoyo',
        items: 5
      },
      context: {
        name: 'Contexto y Sesgo',
        description: 'Evaluación de adecuación del contexto y sesgo',
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: 'Framework reactivo más reciente con runes para rendimiento óptimo'
      },
      framework: {
        name: 'SvelteKit',
        description: 'Framework full-stack con soporte de generación estática'
      },
      language: {
        name: 'TypeScript',
        description: 'Desarrollo type-safe con configuración estricta'
      },
      styling: {
        name: 'CSS Personalizado',
        description: 'Estilo moderno con propiedades personalizadas CSS y modo oscuro'
      },
      pwa: {
        name: 'Aplicación Web Progresiva',
        description: 'App instalable con funcionalidad offline'
      },
      export: {
        name: 'Exportación Multi-Formato',
        description: 'Capacidades de exportación PDF, HTML, JSON, Markdown'
      }
    }
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
  },
  intro: {
    meta: {
      title:
        'Lista de Verificación Práctica de Hechos para Sobrevivir en un Mundo Lleno de Desinformación',
      keywords:
        'verificación de hechos,verificación de información,evaluación de confiabilidad,PWA,alfabetización informacional,contramedidas de desinformación'
    },
    hero: {
      title:
        'Lista de Verificación Práctica de Hechos para Sobrevivir en un Mundo Lleno de Desinformación',
      subtitle:
        'Una lista de verificación simple para evaluar la confiabilidad de la información con tus propios ojos y mente mientras avanzan las regulaciones gubernamentales de redes sociales'
    },
    cta: {
      startNow: 'Comenzar Verificación Ahora',
      useChecklist: 'Usar la Lista de Verificación',
      learnMore: 'Saber Más'
    },
    sections: {
      regulation: {
        title:
          'Regulación Gubernamental de Redes Sociales y la Realidad del Control de Información',
        quote:
          'Bajo la noble causa de "eliminar la desinformación", ¿quién decide qué es la "verdad"?',
        content1:
          'Las regulaciones de redes sociales que avanzan mundialmente afirman ser "medidas anti-desinformación", pero en realidad, corren el riesgo de convertirse en herramientas para controlar información inconveniente para los gobiernos.',
        content2:
          'Lo que necesitamos es la capacidad de juzgar la confiabilidad de la información nosotros mismos, sin depender de gobiernos, medios principales o IA.'
      },
      balance: {
        title: 'Control del Discurso vs. Calidad de la Información: Un Enfoque Equilibrado',
        control: {
          title: 'Riesgos del Control',
          content:
            'Determinación arbitraria de la "verdad" por el poder, supresión de opiniones diversas, obstáculo a la innovación'
        },
        quality: {
          title: 'Mejora de la Calidad',
          content:
            'Mejorar la alfabetización informacional individual, fomentar el pensamiento crítico, fortalecer las habilidades de autojuicio'
        },
        conclusion:
          'En lugar de depender de regulaciones, que cada persona desarrolle la capacidad de discernir información forma la base de una sociedad saludable.'
      },
      aiLimitations: {
        title: 'Limitaciones de la Verificación de Hechos por IA',
        lead: 'Aunque la IA como ChatGPT y Gemini son convenientes, tienen limitaciones significativas para la verificación de hechos:',
        point1:
          'Sesgo de datos de entrenamiento: La IA refleja sesgos inherentes en sus datos de entrenamiento',
        point2:
          'Comprensión incompleta del contexto: Malinterpreta matices sutiles, sarcasmo y contextos culturales',
        point3:
          'Sobredependencia de la autoridad: Juzga acríticamente la información de medios principales y agencias gubernamentales como "correcta"',
        conclusion:
          'Aunque la IA puede ser útil como referencia, los juicios finales deben ser realizados por humanos.'
      },
      features: {
        title: 'Características de Esta Aplicación'
      }
    },
    features: {
      systematic: {
        title: 'Evaluación Sistemática',
        description:
          'Evaluación integral desde fuentes de información hasta estructura lógica con una lista de verificación de 20 elementos'
      },
      privacy: {
        title: 'Privacidad Completa',
        description:
          'Todos los datos almacenados en el dispositivo. Sin transmisión a servidores externos'
      },
      pwa: {
        title: 'Soporte Sin Conexión',
        description: 'Disponible incluso sin conexión a internet gracias a la tecnología PWA'
      },
      multilingual: {
        title: 'Soporte para 12 Idiomas',
        description: 'Soporte completo para 12 idiomas incluyendo japonés, inglés y chino'
      }
    },
    finalCta: {
      title: 'Comencemos Ahora',
      subtitle: 'Entrena tu juicio para evitar ahogarte en el mar de información'
    },
    share: {
      title: 'Compartir Esta Herramienta'
    }
  }
};

export default translations;
