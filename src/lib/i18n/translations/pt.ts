/**
 * Portuguese translation file template
 * Portuguese (pt) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'pt' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'Para traduzir',
	completeness: 0
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
		guide: 'Guide',
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
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
