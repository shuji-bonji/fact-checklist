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
		systemMode: 'Sistema'
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
		recent: 'Avaliações Recentes'
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
	}
};

export default translations;
