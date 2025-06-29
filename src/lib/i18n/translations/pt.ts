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
		}
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
		}
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
		overview: 'Visão Geral',
		howToUse: 'Como Usar',
		categories: 'Categorias',
		scoring: 'Cálculo de Pontuação',
		features: 'Recursos',
		troubleshooting: 'Solução de Problemas',
		faq: 'FAQ'
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
	}
};

export default translations;
