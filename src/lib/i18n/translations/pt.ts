/**
 * Portuguese translation file
 * Portuguese (pt) - Brazilian Portuguese
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
  language: 'pt' as const,
  version: '1.0.0',
  lastUpdated: '2025-01-30',
  translator: 'Claude AI Assistant',
  completeness: 100
};

// Portuguese translations would go here
// Full structure matching other translation files
export const translations: TranslationKeys = {
  common: {
    loading: 'Carregando...',
    error: 'Ocorreu um erro',
    success: 'Sucesso',
    cancel: 'Cancelar',
    save: 'Salvar',
    delete: 'Excluir',
    edit: 'Editar',
    close: 'Fechar',
    back: 'Voltar',
    next: 'Próximo',
    previous: 'Anterior',
    search: 'Pesquisar',
    clear: 'Limpar',
    reset: 'Redefinir',
    copy: 'Copiar',
    download: 'Baixar',
    share: 'Compartilhar',
    print: 'Imprimir',
    export: 'Exportar',
    import: 'Importar',
    settings: 'Configurações',
    help: 'Ajuda',
    about: 'Sobre',
    privacy: 'Privacidade',
    terms: 'Termos',
    home: 'Início',
    menu: 'Menu',
    languages: 'Idiomas',
    darkMode: 'Modo Escuro',
    lightMode: 'Modo Claro',
    systemMode: 'Sistema',
    guide: 'Guia',
    showGuide: 'Mostrar Guia',
    rip: {
      high: 'Alto Risco',
      medium: 'Risco Médio',
      low: 'Baixo Risco'
    }
  },
  app: {
    title: 'Lista de Verificação Prática de Fatos',
    subtitle: 'Um sistema abrangente para avaliar cientificamente a confiabilidade das informações',
    description:
      'Uma lista de verificação para avaliar científica e sistematicamente a confiabilidade das informações',
    version: '1.0.0',
    author: 'Equipe da Lista de Verificação de Fatos',
    copyright: '© 2025 Equipe da Lista de Verificação de Fatos',
    poweredBy: 'Desenvolvido por'
  },

  // Metadados específicos de páginas
  pages: {
    home: {
      title: 'Fact Checklist - Avaliação Prática de Confiabilidade de Informações',
      description: 'Avalie sistematicamente a confiabilidade das informações com 20 itens de verificação. Julgue informações com seus próprios olhos e mente sem depender de IA ou governo.',
      keywords: 'verificação de fatos,verificação de informações,avaliação de confiabilidade,PWA,alfabetização informacional,contramedidas de desinformação'
    },
    about: {
      title: 'Sobre Este App - Fact Checklist',
      description: 'Conheça o contexto de desenvolvimento, recursos e uso do Fact Checklist. Uma ferramenta para julgar a confiabilidade das informações por você mesmo.',
      keywords: 'visão geral do app,filosofia de desenvolvimento,avaliação de informações,julgamento de confiabilidade,verificação de fatos,como usar'
    },
    help: {
      title: 'Ajuda e Guia - Fact Checklist',
      description: 'Instruções detalhadas de uso, explicações dos itens da lista de verificação e dicas para avaliação efetiva de informações.',
      keywords: 'como usar,ajuda,itens de verificação,avaliação de informações,guia,instruções'
    },
    privacy: {
      title: 'Política de Privacidade - Fact Checklist',
      description: 'Informações sobre o manuseio de dados pessoais. Todos os dados são armazenados localmente e não são transmitidos externamente.',
      keywords: 'privacidade,informações pessoais,proteção de dados,armazenamento local,segurança'
    },
    intro: {
      title: 'Lista de Verificação Prática de Fatos para Sobreviver em um Mundo Cheio de Desinformação',
      description: 'Uma lista de verificação simples para avaliar a confiabilidade das informações com seus próprios olhos e mente enquanto a regulamentação governamental das redes sociais avança. Avalie informações científica e sistematicamente sem confiar cegamente em IA ou mídia.',
      keywords: 'verificação de fatos,verificação de informações,avaliação de confiabilidade,PWA,alfabetização informacional,contramedidas de desinformação,regulamentação de redes sociais,controle de informações,qualidade da informação,verificação de fatos por IA'
    }
  },

  navigation: {
    home: 'Início',
    about: 'Sobre',
    help: 'Ajuda e Uso',
    privacy: 'Privacidade',
    checklist: 'Lista de Verificação',
    history: 'Histórico',
    settings: 'Configurações'
  },
  checklist: {
    title: 'Informações da Lista de Verificação',
    description: 'Detalhes da lista de verificação',
    newChecklist: 'Nova Lista de Verificação',
    createChecklist: 'Criar Lista de Verificação',
    editChecklist: 'Editar Lista de Verificação',
    deleteChecklist: 'Excluir Lista de Verificação',
    completeChecklist: 'Completar Avaliação',
    checklistTitle: 'Título',
    checklistDescription: 'Resumo das Informações Alvo',
    targetInfo: 'Informações Alvo',
    targetInfoPlaceholder: 'Exemplo: Artigo sobre eficácia da vacina COVID-19',
    evaluationNotes: 'Notas de Avaliação e Itens de Verificação Adicionais',
    evaluationNotesPlaceholder:
      'Registre quaisquer perguntas, itens para verificar, impressões gerais, etc...',
    score: 'Pontuação de Avaliação',
    confidenceLevel: 'Nível de Confiança',
    finalJudgment: 'Julgamento Final',
    completed: 'Concluído',
    judgment: {
      accept: 'Aceitar',
      caution: 'Cuidado',
      reject: 'Rejeitar',
      pending: 'Pendente'
    },
    judgmentAdvice: {
      accept: 'Adoção recomendada. Verificação suficiente foi conduzida.',
      caution: 'Verificação adicional recomendada. Seja cauteloso com decisões importantes.',
      reject: 'Rejeição recomendada. Procure fontes mais confiáveis.'
    },
    confidence: {
      high: 'Alta Confiabilidade',
      medium: 'Confiabilidade Moderada',
      low: 'Baixa Confiabilidade',
      poor: 'Problemas de Confiabilidade'
    },
    advice: {
      high: 'Adoção recomendada. Verificação suficiente foi conduzida.',
      medium: 'Confirmação adicional recomendada. Seja cauteloso com decisões importantes.',
      low: 'Cautela necessária. Verificação adicional é necessária.',
      poor: 'Rejeição recomendada. Procure fontes de informação confiáveis.'
    },
    evaluationCompleted: '✓ Avaliação Concluída!',
    evaluationCompletedDescription:
      'Você pode revisar os resultados da avaliação da lista de verificação.',
    evaluationResults: 'Resultados da Avaliação',
    totalScore: 'Pontuação Total',
    itemsDetail: 'Detalhes dos Itens',
    recommendedActions: 'Ações Recomendadas',
    improvementTips: 'Para melhorar a confiabilidade',
    checkUncheckedItems: 'Verificar itens não marcados',
    additionalSourceResearch: 'Pesquisa de fontes adicionais',
    expertConsultation: 'Consulta a especialistas',
    factCheckOrganizations: 'Usar organizações de checagem de fatos',
    statistics: 'Estatísticas',
    checkedItems: 'Verificado',
    uncheckedItems: 'Não verificado',
    completionRate: 'Taxa de Conclusão',
    actions: 'Ações',
    exportShare: 'Exportar e Compartilhar',
    reEdit: 'Re-editar'
  },
  categories: {
    critical: {
      name: 'Avaliação Crítica (Obrigatória)',
      description: 'Itens mais importantes para determinar a confiabilidade básica das informações',
      emoji: '🚨'
    },
    detailed: {
      name: 'Avaliação Detalhada (Importante)',
      description: 'Itens para avaliar a qualidade e expertise das informações',
      emoji: '📝'
    },
    verification: {
      name: 'Verificação e Checagem Cruzada',
      description: 'Itens para confirmar a verificabilidade e suporte das informações',
      emoji: '🔍'
    },
    context: {
      name: 'Avaliação de Contexto e Viés',
      description: 'Itens para avaliar a adequação do viés e contexto',
      emoji: '🌐'
    }
  },
  export: {
    title: 'Exportar',
    description: 'Exportar lista de verificação em vários formatos',
    format: 'Formato',
    options: 'Opções',
    includeGuides: 'Incluir Guias',
    includeNotes: 'Incluir Notas',
    includeSummary: 'Incluir Resumo',
    sectionBreaks: 'Quebras de Seção',
    pdfModes: {
      pixelPerfect: 'Pixel Perfeito',
      reliableFont: 'Foco na Confiabilidade da Fonte',
      textBased: 'Baseado em Texto'
    },
    formats: {
      pdf: 'PDF',
      html: 'HTML',
      json: 'JSON',
      markdown: 'Markdown'
    },
    progress: {
      initializing: 'Inicializando...',
      generating: 'Gerando...',
      processing: 'Processando...',
      finalizing: 'Finalizando...',
      completed: 'Concluído',
      failed: 'Falhou'
    },
    generatedAt: 'Gerado em',
    summaryTable: {
      item: 'Item',
      value: 'Valor'
    },
    table: {
      section: 'Seção',
      completionRate: 'Taxa de Conclusão',
      completedItems: 'Itens Concluídos'
    },
    sectionCompletionRates: 'Taxas de Conclusão por Seção',
    achievementStatus: 'Status de Realização',
    goodExamples: 'Bons Exemplos',
    badExamples: 'Maus Exemplos'
  },
  history: {
    title: 'Histórico de Avaliação',
    description: 'Resultados de avaliação passados',
    empty: 'Nenhum histórico disponível',
    lastEvaluated: 'Última Avaliação',
    viewResults: 'Ver Resultados',
    deleteHistory: 'Excluir Histórico',
    clearAll: 'Limpar Tudo',
    recent: 'Avaliações Recentes',
    viewAll: 'Ver Tudo',
    createFirst: 'Vamos criar sua primeira lista de verificação!'
  },
  errors: {
    general: 'Ocorreu um erro inesperado',
    network: 'Ocorreu um erro de rede',
    storage: 'Ocorreu um erro de armazenamento',
    export: 'Exportação falhou',
    import: 'Importação falhou',
    invalidData: 'Dados inválidos',
    unsupportedFeature: 'Recurso não suportado',
    permissionDenied: 'Permissão negada',
    fileNotFound: 'Arquivo não encontrado',
    fileTooLarge: 'Arquivo muito grande',
    invalidFileFormat: 'Formato de arquivo inválido'
  },
  success: {
    saved: 'Salvo',
    exported: 'Exportado',
    imported: 'Importado',
    deleted: 'Excluído',
    copied: 'Copiado',
    shared: 'Compartilhado'
  },
  confirmations: {
    delete: 'Tem certeza de que deseja excluir?',
    reset: 'Redefinir?',
    clearHistory: 'Limpar todo o histórico?',
    overwrite: 'Sobrescrever?',
    discard: 'Descartar alterações?'
  },
  help: {
    title: 'Ajuda e Uso',
    subtitle: 'Guia detalhado para usar a lista de verificação de fatos',
    tableOfContents: 'Índice',
    navigation: {
      overview: 'Visão Geral',
      usage: 'Uso',
      categories: 'Categorias',
      scoring: 'Pontuação',
      features: 'Recursos',
      privacy: 'Privacidade',
      troubleshooting: 'Solução de Problemas'
    },
    sections: {
      overview: {
        title: 'Visão Geral da Aplicação',
        emoji: '📋',
        description: 'Uso básico da lista de verificação de fatos',
        content:
          'Esta aplicação é uma ferramenta para avaliar a credibilidade de informações na internet de forma científica e sistemática.',
        subSections: {
          features: {
            title: 'Recursos Principais',
            content:
              '• Privacidade completa: todos os dados armazenados localmente\n• Funciona offline\n• Avaliação científica\n• Gestão de histórico'
          },
          targetUsers: {
            title: 'Usuários-alvo',
            content:
              'Jornalistas, pesquisadores, estudantes e qualquer pessoa interessada em avaliar a credibilidade de informações'
          }
        }
      },
      usage: {
        title: 'Uso',
        emoji: '🔍',
        description: 'Guia passo a passo para usar a aplicação',
        content: 'Siga estes passos para avaliar sistematicamente a credibilidade de informações.',
        subSections: {
          step1: {
            title: 'Passo 1: Inserir informações',
            content: 'Insira o título e descrição das informações que quer avaliar'
          },
          step2: {
            title: 'Passo 2: Avaliar elementos',
            content: 'Avalie cada elemento da lista com base nas evidências disponíveis'
          },
          step3: {
            title: 'Passo 3: Rever resultado',
            content: 'Reveja o resultado calculado e nível de confiança'
          },
          step4: {
            title: 'Passo 4: Decisão final',
            content: 'Tome sua decisão final com base na avaliação: aceitar, cautela ou rejeitar'
          }
        }
      },
      categories: {
        title: 'Categorias de Avaliação',
        emoji: '📊',
        description: 'As quatro categorias principais de avaliação',
        content:
          'Os elementos de avaliação estão organizados em quatro categorias principais para garantir uma avaliação abrangente.',
        subSections: {
          critical: {
            title: 'Avaliação Crítica',
            content:
              'Os elementos mais importantes para determinar a credibilidade básica das informações'
          },
          detailed: {
            title: 'Avaliação Detalhada',
            content: 'Elementos para avaliar a qualidade e especialização das informações'
          },
          verification: {
            title: 'Verificação e Verificação Cruzada',
            content: 'Elementos para confirmar a verificabilidade e suporte das informações'
          },
          context: {
            title: 'Avaliação de Contexto e Viés',
            content: 'Elementos para avaliar a adequação do viés e contexto'
          }
        }
      },
      scoring: {
        title: 'Sistema de Pontuação',
        emoji: '🎯',
        description: 'Como pontuações e nível de confiança são calculados',
        content:
          'A pontuação é calculada com base no número de elementos cumpridos do total de elementos.',
        subSections: {
          calculation: {
            title: 'Método de Cálculo',
            content: 'Pontuação = (número de elementos cumpridos / total de elementos) × 100'
          },
          criteria: {
            title: 'Critérios de Avaliação',
            content:
              '• 80%+: Alta credibilidade\n• 60-79%: Credibilidade média\n• 40-59%: Credibilidade baixa\n• <40%: Problemas de credibilidade'
          },
          finalJudgment: {
            title: 'Julgamento Final',
            content:
              'Use a pontuação como guia, mas a decisão final depende do seu julgamento pessoal'
          }
        }
      },
      features: {
        title: 'Recursos',
        emoji: '⭐',
        description: 'Recursos avançados da aplicação',
        content:
          'A aplicação oferece vários recursos avançados para melhorar a experiência do usuário.',
        subSections: {
          detailedGuide: {
            title: 'Guias Detalhados',
            content:
              'Cada elemento de avaliação contém um guia detalhado e exemplos práticos para ajudar na sua avaliação'
          },
          exportFunction: {
            title: 'Função de Exportação',
            content:
              'Pode exportar resultados de avaliação em múltiplos formatos (PDF, HTML, JSON, Markdown)',
            exportFormats: {
              title: 'Formatos de Exportação',
              formats: {
                pdf: {
                  name: 'PDF',
                  features: 'Formato profissional para impressão e partilha',
                  usage: 'Adequado para relatórios oficiais e arquivo'
                },
                html: {
                  name: 'HTML',
                  features: 'Exibição interativa no navegador',
                  usage: 'Adequado para partilha via web'
                },
                json: {
                  name: 'JSON',
                  features: 'Formato de dados estruturado',
                  usage: 'Adequado para análise automática e importação'
                },
                markdown: {
                  name: 'Markdown',
                  features: 'Formato de texto flexível',
                  usage: 'Adequado para blogs e documentação'
                }
              }
            },
            pdfModes: {
              title: 'Modos PDF',
              modes: {
                pixelPerfect: {
                  name: 'Pixel Perfeito',
                  subtitle: 'Melhor qualidade visual',
                  description: 'Mantém o design original com alta precisão',
                  features: 'Design conforme interface, cores precisas, fontes claras'
                },
                reliableFont: {
                  name: 'Fonte Confiável',
                  description: 'Foca na clareza do texto e legibilidade',
                  features: 'Fontes otimizadas, performance rápida, tamanho de arquivo menor'
                },
                textBased: {
                  name: 'Baseado em Texto',
                  subtitle: 'Texto pesquisável e copiável',
                  description: 'Produz PDF puramente textual e pesquisável',
                  features: 'Texto pesquisável, tamanho pequeno, alta compatibilidade'
                }
              }
            },
            exportOptions: {
              title: 'Opções de Exportação',
              options: {
                summary: {
                  name: 'Incluir Resumo',
                  description: 'Adiciona resumo de resultado e avaliação',
                  formats: 'Disponível em todos os formatos'
                },
                guides: {
                  name: 'Incluir Guias',
                  description: 'Adiciona guias detalhados para cada elemento',
                  formats: 'Disponível em PDF e HTML'
                },
                notes: {
                  name: 'Incluir Notas',
                  description: 'Adiciona suas notas pessoais',
                  formats: 'Disponível em todos os formatos'
                },
                sectionBreaks: {
                  name: 'Quebras de Secção',
                  description: 'Adiciona páginas separadas para secções',
                  formats: 'Disponível apenas em PDF'
                }
              }
            },
            exportNote:
              'Lembre-se: todas as exportações são feitas localmente no seu dispositivo sem transferência de dados'
          },
          historyManagement: {
            title: 'Gestão de Histórico',
            content:
              'A aplicação guarda automaticamente as últimas 5 avaliações e permite-lhe aceder e gerir'
          },
          pwaSupport: {
            title: 'Suporte PWA',
            content:
              'A aplicação pode ser instalada no dispositivo e funcionar completamente offline'
          }
        }
      },
      privacy: {
        title: 'Privacidade e Segurança',
        emoji: '🔒',
        description: 'Como protegemos sua privacidade e dados',
        content:
          'Estamos comprometidos em proteger sua privacidade através de design orientado à privacidade.',
        subSections: {
          localStorage: {
            title: 'Armazenamento Local',
            content:
              'Todos os seus dados são armazenados localmente no seu navegador e nunca deixam o seu dispositivo'
          },
          security: {
            title: 'Segurança',
            content: 'Sem conexões externas ou rastreamento de usuários'
          },
          dataDeletion: {
            title: 'Eliminação de Dados',
            content:
              'Pode eliminar todos os seus dados a qualquer momento limpando os dados do navegador'
          }
        }
      },
      troubleshooting: {
        title: 'Solução de Problemas',
        emoji: '🔧',
        description: 'Soluções para problemas comuns',
        content: 'Se tiver problemas, experimente estas soluções comuns.',
        subSections: {
          dataNotSaved: {
            title: 'Dados não guardados',
            content:
              'Certifique-se de que o armazenamento local está ativado no navegador e que o navegador está atualizado'
          },
          scoreNotDisplayed: {
            title: 'Pontuação não exibida',
            content: 'Certifique-se de ter completado a avaliação de todos os elementos necessários'
          },
          exportFailed: {
            title: 'Exportação falhou',
            content:
              'Certifique-se de que downloads estão permitidos no navegador e que há espaço suficiente'
          },
          otherIssues: {
            title: 'Outros problemas',
            content: 'Tente atualizar a página ou limpar a cache do navegador'
          }
        }
      }
    }
  },
  accessibility: {
    skipToContent: 'Pular para o conteúdo',
    mainNavigation: 'Navegação principal',
    searchForm: 'Formulário de pesquisa',
    languageSelector: 'Seletor de idioma',
    themeToggle: 'Alternar tema',
    closeDialog: 'Fechar diálogo',
    openMenu: 'Abrir menu',
    expandSection: 'Expandir seção',
    collapseSection: 'Recolher seção'
  },
  datetime: {
    justNow: 'Agora mesmo',
    minutesAgo: 'minutos atrás',
    hoursAgo: 'horas atrás',
    daysAgo: 'dias atrás',
    weeksAgo: 'semanas atrás',
    monthsAgo: 'meses atrás',
    yearsAgo: 'anos atrás',
    createdAt: 'Criado em',
    updatedAt: 'Atualizado em',
    completedAt: 'Concluído em'
  },
  units: {
    items: 'itens',
    percent: '%',
    score: 'pontuação',
    total: 'total',
    completed: 'concluído',
    remaining: 'restante',
    of: 'de'
  },

  // Política de Privacidade
  privacy: {
    title: 'Política de Privacidade',
    subtitle: 'Nosso compromisso em proteger sua privacidade',
    lastUpdated: 'Última atualização: 1 de janeiro de 2025',
    introduction: {
      title: 'Design focado na privacidade',
      content:
        'O Fact Checklist é projetado com privacidade como princípio fundamental. Todo o processamento de dados ocorre localmente em seu dispositivo sem comunicação com servidor ou coleta de dados.'
    },
    dataCollection: {
      title: 'Coleta de Dados',
      description: 'Não coletamos dados pessoais ou estatísticas de uso.',
      details: [
        'Sem comunicação com servidor - todo processamento é local',
        'Sem cookies de rastreamento ou analytics instalados',
        'Nenhuma informação pessoal coletada',
        'Nenhum dado de uso transmitido'
      ]
    },
    localStorage: {
      title: 'Uso do Armazenamento Local',
      description:
        'Os dados são armazenados apenas em seu navegador para funcionalidade da aplicação.',
      details: [
        'Dados de avaliação armazenados no localStorage do navegador',
        'Preferências de idioma salvas localmente',
        'Sem sincronização em nuvem ou backup',
        'Os dados permanecem apenas em seu dispositivo'
      ]
    },
    offlineFunctionality: {
      title: 'Funcionalidade Offline',
      description: 'A aplicação funciona completamente offline sem requisições de rede.',
      details: [
        'Progressive Web App com service worker',
        'Todos os recursos em cache localmente',
        'Sem chamadas de API externas ou busca de dados',
        'Funcionalidade completa sem internet'
      ]
    },
    securityMeasures: {
      title: 'Medidas de Segurança',
      description: 'Medidas de segurança integradas para proteger seus dados e privacidade.',
      details: [
        'Content Security Policy (CSP) implementada',
        'Sem scripts de terceiros ou rastreamento',
        'Práticas de codificação segura seguidas',
        'Atualizações de segurança regulares'
      ]
    },
    dataRetention: {
      title: 'Retenção de Dados',
      description: 'Você tem controle completo sobre a retenção de seus dados.',
      details: [
        'Os dados persistem apenas enquanto você os mantiver',
        'Exclusão fácil através das configurações do navegador',
        'Sem expiração automática de dados',
        'Instruções claras para remoção de dados'
      ]
    },
    policyUpdates: {
      title: 'Atualizações da Política',
      description: 'Qualquer mudança nesta política de privacidade será claramente comunicada.',
      details: [
        'Atualizações anunciadas no repositório GitHub',
        'Histórico de versões mantido',
        'Notificação clara de mudanças significativas',
        'O uso continuado implica aceitação'
      ]
    },
    contact: {
      title: 'Informações de Contato',
      content:
        'Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco via ',
      githubText: 'GitHub Issues',
      suffix: '.'
    }
  },

  // Sobre o App
  about: {
    title: 'Sobre o App',
    subtitle: 'Conheça nosso sistema abrangente de verificação de fatos',
    hero: {
      title: 'Lista de Verificação Prática de Fatos',
      subtitle:
        'Um Aplicativo Web Progressivo (PWA) para avaliar cientificamente e sistematicamente a confiabilidade da informação',
      description: [
        'Em uma era inundada de desinformação e conteúdo enganoso, esta ferramenta prática apoia a melhoria da alfabetização informacional.',
        'Ao verificar 20 itens em 4 categorias, quantifica a confiabilidade da informação e apoia o julgamento objetivo.'
      ],
      startButton: 'Começar Agora'
    },
    sections: {
      features: 'Recursos',
      howItWorks: 'Como Funciona',
      categories: 'Categorias de Avaliação',
      techStack: 'Tecnologia',
      performance: 'Desempenho'
    },
    sectionDescriptions: {
      howItWorks: 'Avalie a confiabilidade da informação em 4 passos simples',
      categories: 'Avaliação multidimensional de informação através de 4 categorias',
      techStack: 'Aplicação de alto desempenho construída com tecnologia de ponta',
      performance: 'Pontuações de alta qualidade de auditorias Lighthouse'
    },
    stats: {
      performance: 'Desempenho',
      accessibility: 'Acessibilidade',
      bestPractices: 'Melhores Práticas',
      seo: 'SEO'
    },
    cta: {
      title: 'Comece Agora',
      description:
        'Pronto para avaliar a confiabilidade da informação de forma científica e sistemática?',
      startButton: 'Iniciar Avaliação',
      helpButton: 'Saiba Mais'
    },
    features: {
      privacy: {
        title: 'Privacidade em Primeiro Lugar',
        description:
          'Todos os dados permanecem em seu dispositivo sem rastreamento ou coleta de dados',
        details: [
          'Sem comunicação com servidor - todo processamento feito localmente',
          'Sem rastreamento ou analytics instalado',
          'Todos os dados armazenados apenas no localStorage do navegador',
          'Proteção completa da privacidade garantida'
        ]
      },
      offline: {
        title: 'Funcionalidade Offline',
        description: 'Funciona completamente offline como Progressive Web App',
        details: [
          'Funcionalidade completa disponível sem conexão com internet',
          'Instalável como app desktop/mobile',
          'Service worker para cache offline',
          'Inicialização rápida e performance responsiva'
        ]
      },
      scientific: {
        title: 'Metodologia Científica',
        description: 'Sistema de avaliação baseado em evidência seguindo padrões acadêmicos',
        details: [
          'Checklist estruturado de 20 itens em 4 categorias',
          'Pontuação quantitativa com níveis de confiança',
          'Baseado em padrões de jornalismo e pesquisa acadêmica',
          'Processo de avaliação objetivo e reproduzível'
        ]
      },
      export: {
        title: 'Exportação Multi-Formato',
        description:
          'Exporte resultados de avaliação em vários formatos para compartilhamento e arquivamento',
        details: [
          'Exportação PDF com suporte a fonte portuguesa',
          'Formato HTML para compartilhamento web',
          'JSON para troca de dados',
          'Markdown para documentação'
        ]
      },
      history: {
        title: 'Histórico de Avaliação',
        description: 'Salvamento automático e gerenciamento de avaliações passadas',
        details: [
          'Salvamento automático de avaliações concluídas',
          'Acesso rápido a avaliações recentes',
          'Capacidades de análise comparativa',
          'Exportação de dados históricos'
        ]
      },
      support: {
        title: 'Suporte de Acessibilidade',
        description: 'Projetado para acesso universal e usabilidade',
        details: [
          'Compatibilidade com leitores de tela',
          'Suporte de navegação por teclado',
          'Modo de alto contraste disponível',
          'Design responsivo para todos os dispositivos'
        ]
      }
    },
    steps: {
      step1: {
        title: 'Inserir Informações',
        description: 'Digite o título e resumo das informações a serem avaliadas'
      },
      step2: {
        title: 'Avaliação Sistemática',
        description: 'Trabalhe através do checklist de 20 itens em 4 categorias'
      },
      step3: {
        title: 'Avaliação da Pontuação',
        description:
          'Revise a pontuação de confiabilidade calculada automaticamente e o nível de confiança'
      },
      step4: {
        title: 'Julgamento Final',
        description: 'Tome sua decisão final e exporte resultados conforme necessário'
      }
    },
    categories: {
      critical: {
        name: 'Avaliação Crítica',
        description: 'Itens essenciais para avaliação básica de confiabilidade',
        items: 6
      },
      detailed: {
        name: 'Avaliação Detalhada',
        description: 'Avaliação aprofundada de qualidade e expertise',
        items: 5
      },
      verification: {
        name: 'Verificação e Verificação Cruzada',
        description: 'Avaliação de verificação e evidência de apoio',
        items: 5
      },
      context: {
        name: 'Contexto e Viés',
        description: 'Avaliação da adequação do contexto e viés',
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: 'Framework reativo mais recente com runes para performance ótima'
      },
      framework: {
        name: 'SvelteKit',
        description: 'Framework full-stack com suporte a geração estática'
      },
      language: {
        name: 'TypeScript',
        description: 'Desenvolvimento type-safe com configuração rigorosa'
      },
      styling: {
        name: 'CSS Personalizado',
        description: 'Estilo moderno com propriedades personalizadas CSS e modo escuro'
      },
      pwa: {
        name: 'Progressive Web App',
        description: 'App instalável com funcionalidade offline'
      },
      export: {
        name: 'Exportação Multi-Formato',
        description: 'Capacidades de exportação PDF, HTML, JSON, Markdown'
      }
    }
  },

  // Formulários
  forms: {
    titleLabel: 'Título',
    titlePlaceholder: 'Digite o título da informação ou fonte a ser avaliada',
    descriptionLabel: 'Resumo das Informações Alvo',
    descriptionPlaceholder: 'Descreva brevemente o conteúdo das informações a serem avaliadas',
    notesLabel: 'Notas de Avaliação e Itens de Verificação Adicionais',
    notesPlaceholder:
      'Registre quaisquer perguntas, itens para verificar, impressões gerais, etc...'
  },

  // Texto da UI
  ui: {
    quickStartGuide: '💡 Use este guia para começar rapidamente!',
    guideModeDetailed: '🔍 Modo de Guia Detalhado',
    guideModeNormal: '📝 Modo Normal',
    completeEvaluation: 'Completar Avaliação'
  },

  // Checklist items
  checklistItems: {
    'source-authority': {
      title: 'Publicação de fontes com autoridade',
      description:
        'Órgãos governamentais, instituições acadêmicas, organizações profissionais, artigos revisados por pares, mídia confiável, etc.',
      guideTitle: '🏛️ Critérios para Fontes de Autoridade',
      guideContent:
        'Instituições governamentais/públicas: Ministérios, IBGE, Banco Central, tribunais, etc. Instituições acadêmicas: Universidades federais, estaduais, institutos de pesquisa como Fiocruz, Butantan. Organizações profissionais: CRM, OAB, conselhos profissionais. Mídia confiável: Grandes jornais estabelecidos, agências de notícias reconhecidas.',
      examplesGood: [
        'Dados estatísticos do Ministério da Saúde',
        'Artigos revisados por pares na revista Nature',
        'Relatórios do IBGE',
        'Pesquisas da Fiocruz'
      ],
      examplesBad: [
        'Informações de blog pessoal',
        'Posts anônimos em fóruns',
        'WhatsApp sem fonte clara'
      ]
    },
    'source-primary': {
      title: 'Verificação de fonte primária',
      description: 'Informação direta da fonte original, não boatos ou relatos de segunda mão',
      guideTitle: '🎯 Como Identificar Fontes Primárias',
      guideContent:
        'Fontes primárias: Artigos de pesquisa dos próprios autores, depoimentos de testemunhas, anúncios oficiais de empresas ou governo. Fontes secundárias: Reportagens sobre pesquisas, análises de terceiros. Fontes terciárias: Enciclopédias, resumos, compilações.',
      examplesGood: [
        'Artigos publicados pelos próprios pesquisadores',
        'Comunicados oficiais de empresas',
        'Transcrições de entrevistas diretas',
        'Documentos governamentais originais'
      ],
      examplesBad: [
        'Segundo especialistas',
        'Uma pesquisa diz que...',
        'Ouvi dizer que...',
        'Circula nas redes sociais'
      ]
    },
    'source-multiple': {
      title: 'Múltiplas fontes independentes',
      description: 'Relatos ou confirmações similares de diferentes posições/organizações',
      guideTitle: '🔄 Como Verificar Independência',
      guideContent:
        'Fontes independentes: Fontes com diferentes organizações, financiamento e interesses. Verifique se não há conexões financeiras, políticas ou institucionais entre as fontes. Busque diversidade geográfica, ideológica e metodológica.',
      examplesGood: [
        'Anúncio governamental + pesquisa acadêmica + múltiplas reportagens da mídia',
        'Confirmação por Folha, Globo e BBC Brasil'
      ],
      examplesBad: [
        'Múltiplas mídias do mesmo grupo empresarial',
        'Apenas fontes do mesmo partido político'
      ]
    },
    'warning-anonymous': {
      title: 'Não é informação anônima ou sem atribuição',
      description: 'Criador/publicador pode ser claramente identificado',
      guideTitle: '🔍 Pontos-Chave para Identificação de Fonte',
      guideContent:
        'Informações necessárias: Nome real do criador, afiliação institucional, informações de contato, histórico profissional. Verifique: Perfil no LinkedIn, publicações anteriores, registro profissional.',
      examplesGood: [
        'Segundo o Prof. João Silva (USP - Faculdade de Medicina)',
        'Dra. Maria Santos, infectologista do Hospital das Clínicas'
      ],
      examplesBad: ['Segundo um médico', 'Especialista anônimo', 'Fonte próxima ao governo']
    },
    'warning-sensational': {
      title: 'Poucas expressões sensacionalistas ou inflamatórias',
      description: 'Descrição calma e objetiva, sem apelos emocionais excessivos',
      guideTitle: '⚠️ Como Identificar Expressões Sensacionalistas',
      guideContent:
        'Expressões de alerta: Absolutamente, Completamente, Chocante, Impressionante, Inacreditável, Urgente, Revelação bombástica. Prefira: Linguagem neutra, dados específicos, contexto adequado.',
      examplesGood: [
        'Pesquisa mostrou melhora em 75% dos participantes',
        'Estudo indica possível correlação entre...'
      ],
      examplesBad: [
        'A verdade CHOCANTE que médicos nunca contam!',
        'URGENTE: Compartilhe antes que deletem!'
      ]
    },
    'warning-logical': {
      title: 'Sem contradições lógicas',
      description: 'Conteúdo é consistente sem saltos lógicos óbvios',
      guideTitle: '🧠 Como Verificar Consistência Lógica',
      guideContent:
        'Verifique se as premissas e conclusões estão adequadamente conectadas. Identifique: Falácias comuns (correlação vs causalidade), generalizações indevidas, cherry picking de dados, argumentos circulares.',
      examplesGood: [
        'Análise estatisticamente significativa considerando outros fatores',
        'Estudo controlado com grupo placebo'
      ],
      examplesBad: [
        'A e B aconteceram juntos, então A causou B',
        'Todo mundo sabe que...',
        'É óbvio que...'
      ]
    },
    'time-recent': {
      title: 'Atualidade da informação',
      description: 'Data de publicação é especificada e conteúdo mantém atualidade apropriada',
      guideTitle: '⏰ Julgando a Atualidade Apropriada da Informação',
      guideContent:
        'Padrões específicos por área: Medicina/saúde (1-3 anos), Tecnologia (6 meses-1 ano), História (pode ser mais antiga), Notícias atuais (dias/semanas). Sempre verifique se há atualizações mais recentes.',
      examplesGood: [
        'Publicado em dezembro de 2024',
        'Última atualização: janeiro de 2025',
        'Dados do censo 2022 (mais recente disponível)'
      ],
      examplesBad: [
        'Sem data especificada',
        'Informação técnica de 5 anos atrás',
        'Estudo de 2010 sobre COVID-19'
      ]
    },
    'time-update': {
      title: 'Histórico de atualizações e correções',
      description: 'Conteúdo é atualizado conforme necessário com correções transparentes',
      guideTitle: '📝 Verificando Atualizações e Correções Transparentes',
      guideContent:
        'Boas práticas de atualização: Descrição clara das mudanças, data de cada atualização, motivo das correções, versões anteriores acessíveis. Transparência em erros e correções demonstra credibilidade.',
      examplesGood: [
        'Histórico claro de correções',
        'Errata publicada com destaque',
        'Changelog detalhado'
      ],
      examplesBad: [
        'Sem registros de correção',
        'Mudanças silenciosas no conteúdo',
        'Deletar ao invés de corrigir'
      ]
    },
    'expert-knowledge': {
      title: 'Expertise apropriada',
      description: 'Criador tem conhecimento/experiência suficiente no campo relevante',
      guideTitle: '🎓 Como Verificar Expertise',
      guideContent:
        'Itens a verificar: Diplomas/qualificações em áreas relacionadas, experiência profissional relevante, publicações anteriores no campo, reconhecimento por pares. Cuidado com: Apelo à autoridade fora da área, títulos genéricos.',
      examplesGood: [
        'Infectologista explicando vacinas',
        'Economista do Banco Central sobre política monetária',
        'Engenheiro de software sobre programação'
      ],
      examplesBad: [
        'Celebridade opinando sobre medicina',
        'Médico falando sobre economia sem formação',
        'Influencer como autoridade em ciência'
      ]
    },
    'detail-sufficient': {
      title: 'Detalhamento e evidências suficientes',
      description:
        'Processo que leva às conclusões e evidências de apoio são adequadamente explicados',
      guideTitle: '📋 Julgando Suficiência de Evidências',
      guideContent:
        'Elementos necessários: Dados específicos apoiando afirmações, metodologia clara, limitações reconhecidas, margem de erro quando aplicável. Quantidade de evidência deve ser proporcional à força da afirmação.',
      examplesGood: [
        'Tamanho da amostra, métodos estatísticos e intervalos de confiança incluídos',
        'Metodologia detalhada disponível',
        'Dados brutos acessíveis'
      ],
      examplesBad: [
        'Apenas afirma que efeito foi comprovado sem detalhes',
        'Muitos dizem que...',
        'É consenso que... (sem evidências)'
      ]
    },
    'citation-proper': {
      title: 'Citações e referências adequadas',
      description: 'Fontes confiáveis são mostradas para afirmações importantes',
      guideTitle: '📚 Padrões para Citações Adequadas',
      guideContent:
        'Conteúdo que requer citação: Dados estatísticos/números, afirmações factuais específicas, citações diretas, informações não de conhecimento geral. Formato: Autor, título, data, onde encontrar.',
      examplesGood: [
        'Segundo pesquisa (Silva et al., 2024) publicada na revista...',
        'De acordo com dados do IBGE (2023)...'
      ],
      examplesBad: [
        'Segundo pesquisas (fonte não clara)',
        'Estudos mostram que...',
        'Dados indicam... (sem fonte)'
      ]
    },
    'citation-accessible': {
      title: 'Verificabilidade das fontes citadas',
      description: 'Fontes citadas podem realmente ser acessadas e verificadas',
      guideTitle: '🌐 Verificando Acessibilidade de Citações',
      guideContent:
        'Estado ideal: Links diretos ou DOI, referências completas, arquivos públicos. Aceitável: Informações suficientes para localizar. Problemático: Fontes privadas, links quebrados, referências vagas.',
      examplesGood: [
        'Com links URL ativos',
        'Artigos com números DOI',
        'Documentos em arquivos públicos',
        'Disponível no site do governo'
      ],
      examplesBad: [
        'Segundo materiais internos',
        'Comunicação pessoal não verificável',
        'Site não existe mais'
      ]
    },
    'cross-check': {
      title: 'Checagem cruzada com outras fontes',
      description: 'Conteúdo similar pode ser confirmado por múltiplas fontes independentes',
      guideTitle: '🔍 Métodos Eficazes de Checagem Cruzada',
      guideContent:
        'Processo de verificação: 1) Identifique afirmações-chave, 2) Busque fontes independentes, 3) Compare detalhes e números, 4) Note discrepâncias, 5) Avalie consenso vs outliers.',
      examplesGood: [
        'Resultados similares em múltiplos artigos revisados por pares',
        'Confirmado por Reuters, AP e AFP',
        'Dados consistentes em diferentes bases'
      ],
      examplesBad: [
        'Apenas uma fonte',
        'Todas as fontes citam a mesma origem',
        'Echo chamber de mesma informação'
      ]
    },
    'fact-check': {
      title: 'Verificação por organizações de checagem',
      description: 'Existe verificação de instituições confiáveis de checagem de fatos',
      guideTitle: '✅ Organizações Confiáveis de Checagem de Fatos',
      guideContent:
        'Brasil: Agência Lupa, Aos Fatos, Estadão Verifica, Fato ou Fake (G1), Comprova. Internacional: Snopes, PolitiFact, AFP Fact Check, Reuters Fact Check. Verifique metodologia e certificação IFCN.',
      examplesGood: [
        'Múltiplas organizações de checagem classificaram como verdadeiro',
        'Verificado pela Agência Lupa como "verdadeiro"'
      ],
      examplesBad: [
        'Classificado como informação falsa por checadores',
        'Desmentido por múltiplas agências',
        'Sem verificação disponível'
      ]
    },
    'data-verifiable': {
      title: 'Dados verificáveis',
      description: 'Dados que apoiam as afirmações podem ser objetivamente verificados',
      guideTitle: '📈 Verificando a Verificabilidade de Dados',
      guideContent:
        'Elementos a verificar: Fonte dos dados, métodos de coleta, período de coleta, margem de erro, representatividade da amostra. Dados públicos são preferíveis a privados.',
      examplesGood: [
        'Dados de estatísticas governamentais',
        'Pesquisa com metodologia pública',
        'Dados abertos disponíveis para download'
      ],
      examplesBad: [
        'Apenas dados internos',
        'Nossa pesquisa exclusiva (sem detalhes)',
        'Números sem contexto ou fonte'
      ]
    },
    methodology: {
      title: 'Validade dos métodos/metodologia',
      description: 'Metodologia de pesquisa ou levantamento é apropriada e reproduzível',
      guideTitle: '🔬 Avaliando Validade Metodológica',
      guideContent:
        'Pontos de avaliação: Design de pesquisa apropriado, tamanho de amostra adequado, controles apropriados, análise estatística correta, peer review quando aplicável. Metodologia deve ser replicável.',
      examplesGood: [
        'Ensaios duplo-cego',
        'Grupo controle apropriado',
        'Análise estatística robusta',
        'Protocolo pré-registrado'
      ],
      examplesBad: [
        'Sem descrição de metodologia',
        'Amostra muito pequena ou enviesada',
        'Cherry picking de resultados'
      ]
    },
    'bias-disclosure': {
      title: 'Divulgação de conflitos de interesse',
      description: 'Interesses financeiros, políticos e pessoais são adequadamente divulgados',
      guideTitle: '💰 Itens para Verificar Conflitos de Interesse',
      guideContent:
        'Interesses a divulgar: Fontes de financiamento de pesquisa, relações comerciais, afiliações políticas, benefícios pessoais. Transparência aumenta credibilidade, não diminui.',
      examplesGood: [
        'Declaração clara de conflitos de interesse',
        'Financiamento da pesquisa transparente',
        'Afiliações listadas'
      ],
      examplesBad: [
        'Sem declaração de conflitos',
        'Financiamento oculto',
        'Interesses comerciais não divulgados'
      ]
    },
    'balanced-view': {
      title: 'Perspectiva equilibrada',
      description: 'Diferentes posições e visões opostas também são consideradas',
      guideTitle: '⚖️ Perspectivas para Avaliação de Equilíbrio',
      guideContent:
        'Pontos de verificação: Apresentação de visões opostas/críticas, reconhecimento de limitações, nuances ao invés de absolutos, contexto adequado para afirmações.',
      examplesGood: [
        'Comparação de múltiplos resultados de pesquisa',
        'Prós e contras apresentados',
        'Limitações claramente declaradas'
      ],
      examplesBad: [
        'Apenas listando evidências de apoio',
        'Ignorando críticas válidas',
        'Apresentação unilateral'
      ]
    },
    'context-adequate': {
      title: 'Informações de contexto suficientes',
      description: 'Contexto e antecedentes necessários para entender a informação são fornecidos',
      guideTitle: '🌍 Itens para Verificar Informações Contextuais',
      guideContent:
        'Informações de contexto necessárias: Antecedentes históricos, pesquisas anteriores, contexto cultural/social, definições de termos técnicos, escala e proporção.',
      examplesGood: [
        'Casos similares anteriores mencionados',
        'Explicação de contexto histórico',
        'Comparações para dar escala'
      ],
      examplesBad: [
        'Apenas números isolados',
        'Sem informações de contexto',
        'Termos técnicos sem explicação'
      ]
    },
    'scope-clear': {
      title: 'Escopo de aplicação claro',
      description: 'Escopo aplicável e limitações da informação são claramente mostrados',
      guideTitle: '🎯 Esclarecendo Escopo de Aplicação',
      guideContent:
        'Escopo a esclarecer: População alvo, regiões geográficas, períodos de tempo, condições específicas, limitações conhecidas. Evite generalização indevida.',
      examplesGood: [
        'Declarações claras de limitação',
        'Válido apenas para população X',
        'Resultados preliminares que necessitam confirmação'
      ],
      examplesBad: [
        'Generalização ilimitada de pesquisa limitada',
        'Aplicação universal de estudo local',
        'Extrapolação além dos dados'
      ]
    }
  },
  intro: {
    meta: {
      title: 'Lista de Verificação Prática de Fatos para Sobreviver em um Mundo Cheio de Desinformação',
      keywords: 'verificação de fatos,verificação de informações,avaliação de confiabilidade,PWA,alfabetização informacional,contramedidas de desinformação'
    },
    hero: {
      title: 'Lista de Verificação Prática de Fatos para Sobreviver em um Mundo Cheio de Desinformação',
      subtitle: 'Uma lista de verificação simples para avaliar a confiabilidade da informação com seus próprios olhos e mente enquanto as regulamentações governamentais de redes sociais avançam'
    },
    cta: {
      startNow: 'Começar Verificação Agora',
      useChecklist: 'Usar a Lista de Verificação',
      learnMore: 'Saber Mais'
    },
    sections: {
      regulation: {
        title: 'Regulamentação Governamental de Redes Sociais e a Realidade do Controle de Informação',
        quote: 'Sob a causa nobre de "remover desinformação", quem decide o que é "verdade"?',
        content1: 'As regulamentações de redes sociais avançando mundialmente afirmam ser "medidas anti-desinformação", mas na realidade, elas correm o risco de se tornar ferramentas para controlar informações inconvenientes para os governos.',
        content2: 'O que precisamos é da capacidade de julgar a confiabilidade da informação nós mesmos, sem depender de governos, mídia tradicional ou IA.'
      },
      balance: {
        title: 'Controle da Fala vs. Qualidade da Informação: Uma Abordagem Equilibrada',
        control: {
          title: 'Riscos do Controle',
          content: 'Determinação arbitrária da "verdade" pelo poder, supressão de opiniões diversas, impedimento à inovação'
        },
        quality: {
          title: 'Melhoria da Qualidade',
          content: 'Melhorar a alfabetização informacional individual, fomentar o pensamento crítico, fortalecer as habilidades de autojulgamento'
        },
        conclusion: 'Em vez de depender de regulamentações, ter cada pessoa desenvolvendo a capacidade de discernir informações forma a base de uma sociedade saudável.'
      },
      aiLimitations: {
        title: 'Limitações da Verificação de Fatos por IA',
        lead: 'Embora a IA como ChatGPT e Gemini sejam convenientes, elas têm limitações significativas para verificação de fatos:',
        point1: 'Viés dos dados de treinamento: A IA reflete vieses inerentes em seus dados de treinamento',
        point2: 'Compreensão incompleta do contexto: Interpreta mal nuances sutis, sarcasmo e contextos culturais',
        point3: 'Dependência excessiva de autoridade: Julga acriticamente informações da mídia tradicional e agências governamentais como "corretas"',
        conclusion: 'Embora a IA possa ser útil como referência, julgamentos finais devem ser feitos por humanos.'
      },
      features: {
        title: 'Características Desta Aplicação'
      }
    },
    features: {
      systematic: {
        title: 'Avaliação Sistemática',
        description: 'Avaliação abrangente desde fontes de informação até estrutura lógica com uma lista de verificação de 20 itens'
      },
      privacy: {
        title: 'Privacidade Completa',
        description: 'Todos os dados armazenados no dispositivo. Nenhuma transmissão para servidores externos'
      },
      pwa: {
        title: 'Suporte Offline',
        description: 'Disponível mesmo sem conexão à internet graças à tecnologia PWA'
      },
      multilingual: {
        title: 'Suporte para 12 Idiomas',
        description: 'Suporte completo para 12 idiomas incluindo japonês, inglês e chinês'
      }
    },
    finalCta: {
      title: 'Vamos Começar Agora',
      subtitle: 'Treine seu julgamento para evitar se afogar no mar de informações'
    },
    share: {
      title: 'Compartilhar Esta Ferramenta'
    }
  }
};

export default translations;
