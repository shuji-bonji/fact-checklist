/**
 * English translation file template
 * English (en) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'en' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'To be translated',
	completeness: 0
};

export const translations: TranslationKeys = {
	// Common UI
	common: {
		loading: 'Loading...',
		error: 'An error occurred',
		success: 'Success',
		cancel: 'Cancel',
		save: 'Save',
		delete: 'Delete',
		edit: 'Edit',
		close: 'Close',
		back: 'Back',
		next: 'Next',
		previous: 'Previous',
		search: 'Search',
		clear: 'Clear',
		reset: 'Reset',
		copy: 'Copy',
		download: 'Download',
		share: 'Share',
		print: 'Print',
		export: 'Export',
		import: 'Import',
		settings: 'Settings',
		help: 'Help',
		about: 'About',
		privacy: 'Privacy',
		terms: 'Terms',
		home: 'Home',
		menu: 'Menu',
		languages: 'Languages',
		darkMode: 'Dark Mode',
		lightMode: 'Light Mode',
		systemMode: 'System',
		guide: 'Guide',
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
		}
	},

	// Application specific
	app: {
		title: 'Practical Fact-Check Checklist',
		subtitle: 'A comprehensive system for scientifically evaluating information reliability',
		description:
			'A checklist for scientifically and systematically evaluating information reliability',
		version: '1.0.0',
		author: 'Fact Checklist Team',
		copyright: '© 2025 Fact Checklist Team',
		poweredBy: 'Powered by'
	},

	// Navigation
	navigation: {
		home: 'Home',
		about: 'About',
		help: 'Help & Usage',
		privacy: 'Privacy',
		checklist: 'Checklist',
		history: 'History',
		settings: 'Settings'
	},

	// Checklist related
	checklist: {
		title: 'Checklist Information',
		description: 'Checklist details',
		newChecklist: 'New Checklist',
		createChecklist: 'Create Checklist',
		editChecklist: 'Edit Checklist',
		deleteChecklist: 'Delete Checklist',
		completeChecklist: 'Complete Evaluation',
		checklistTitle: 'Title',
		checklistDescription: 'Target Information Overview',
		targetInfo: 'Target Information',
		targetInfoPlaceholder: 'Example: Article about COVID-19 vaccine effectiveness',
		evaluationNotes: 'Evaluation Notes & Additional Verification Items',
		evaluationNotesPlaceholder:
			'Record any questions, additional items to verify, overall impressions, etc...',
		score: 'Evaluation Score',
		confidenceLevel: 'Confidence Level',
		finalJudgment: 'Final Judgment',
		judgment: {
			accept: 'Accept',
			caution: 'Caution',
			reject: 'Reject',
			pending: 'Pending'
		},
		judgmentAdvice: {
			accept: 'Adoption recommended. Sufficient verification has been conducted.',
			caution: 'Additional verification recommended. Be cautious with important decisions.',
			reject: 'Rejection recommended. Look for more reliable sources.'
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

	// Check item categories
	categories: {
		critical: {
			name: 'Critical Evaluation (Required)',
			description: 'Most important items for determining basic information reliability',
			emoji: '🚨'
		},
		detailed: {
			name: 'Detailed Evaluation (Important)',
			description: 'Items for evaluating information quality and expertise',
			emoji: '📝'
		},
		verification: {
			name: 'Verification & Cross-checking',
			description: 'Items for confirming information verifiability and backing',
			emoji: '🔍'
		},
		context: {
			name: 'Context & Bias Evaluation',
			description: 'Items for evaluating bias appropriateness and context',
			emoji: '🌐'
		}
	},

	// Export functionality
	export: {
		title: 'Export',
		description: 'Export checklist in various formats',
		format: 'Format',
		options: 'Options',
		includeGuides: 'Include Guides',
		includeNotes: 'Include Notes',
		includeSummary: 'Include Summary',
		sectionBreaks: 'Section Breaks',
		pdfModes: {
			pixelPerfect: 'Pixel Perfect',
			reliableFont: 'Font Reliability Focus',
			textBased: 'Text Based'
		},
		formats: {
			pdf: 'PDF',
			html: 'HTML',
			json: 'JSON',
			markdown: 'Markdown'
		},
		progress: {
			initializing: 'Initializing...',
			generating: 'Generating...',
			processing: 'Processing...',
			finalizing: 'Finalizing...',
			completed: 'Completed',
			failed: 'Failed'
		}
	},

	// History
	history: {
		title: 'Evaluation History',
		description: 'Past evaluation results',
		empty: 'No evaluation history yet.',
		lastEvaluated: 'Last Evaluated',
		viewResults: 'View Results',
		deleteHistory: 'Delete History',
		clearAll: 'Clear All',
		recent: 'Latest 5',
		viewAll: 'Show All',
		createFirst: "Let's create your first checklist!"
	},

	// Error messages
	errors: {
		general: 'An unexpected error occurred',
		network: 'A network error occurred',
		storage: 'A storage error occurred',
		export: 'Export failed',
		import: 'Import failed',
		invalidData: 'Invalid data',
		unsupportedFeature: 'Unsupported feature',
		permissionDenied: 'Permission denied',
		fileNotFound: 'File not found',
		fileTooLarge: 'File too large',
		invalidFileFormat: 'Invalid file format'
	},

	// Success messages
	success: {
		saved: 'Saved',
		exported: 'Exported',
		imported: 'Imported',
		deleted: 'Deleted',
		copied: 'Copied',
		shared: 'Shared'
	},

	// Confirmation messages
	confirmations: {
		delete: 'Are you sure you want to delete?',
		reset: 'Reset?',
		clearHistory: 'Clear all history?',
		overwrite: 'Overwrite?',
		discard: 'Discard changes?'
	},

	// Help & Guide
	help: {
		title: 'Help & Usage',
		overview: 'Overview',
		howToUse: 'How to Use',
		categories: 'Categories',
		scoring: 'Score Calculation',
		features: 'Features',
		troubleshooting: 'Troubleshooting',
		faq: 'FAQ'
	},

	// Accessibility
	accessibility: {
		skipToContent: 'Skip to content',
		mainNavigation: 'Main navigation',
		searchForm: 'Search form',
		languageSelector: 'Language selector',
		themeToggle: 'Theme toggle',
		closeDialog: 'Close dialog',
		openMenu: 'Open menu',
		expandSection: 'Expand section',
		collapseSection: 'Collapse section'
	},

	// Date & Time
	datetime: {
		justNow: 'Just now',
		minutesAgo: 'minutes ago',
		hoursAgo: 'hours ago',
		daysAgo: 'days ago',
		weeksAgo: 'weeks ago',
		monthsAgo: 'months ago',
		yearsAgo: 'years ago',
		createdAt: 'Created at',
		updatedAt: 'Updated at',
		completedAt: 'Completed at'
	},

	// Units & Numbers
	units: {
		items: 'items',
		percent: '%',
		score: 'score',
		total: 'total',
		completed: 'completed',
		remaining: 'remaining',
		of: 'of'
	},

	// Forms
	forms: {
		titleLabel: 'Title',
		titlePlaceholder: 'Example: Article about COVID-19 vaccine effectiveness',
		descriptionLabel: 'Target Information Overview',
		descriptionPlaceholder: 'Please enter details of the information to be evaluated...',
		notesLabel: 'Evaluation Notes & Additional Verification Items',
		notesPlaceholder:
			'Record any questions, additional items to verify, overall impressions, etc...'
	},

	// UI texts
	ui: {
		quickStartGuide:
			'Start with "Critical Evaluation" first to verify basic reliability. As you check each item, the score on the right will update in real-time.',
		guideModeDetailed: '📖 Detailed Guide Mode',
		guideModeNormal: '📝 Normal Mode',
		completeEvaluation: '✅ Complete Evaluation'
	},

	// Checklist items
	checklistItems: {
		// Critical evaluation
		'source-authority': {
			title: 'Publication from authoritative sources',
			description:
				'Government agencies, academic institutions, professional organizations, peer-reviewed papers, reliable media, etc.',
			guideTitle: '🏛️ Criteria for Authoritative Sources',
			guideContent:
				'Government/Public institutions: Ministries, statistical bureaus, central banks, courts, etc.\nAcademic institutions: Universities, research institutes, academic societies, peer-reviewed journals\nProfessional organizations: Domestic and international organizations in relevant fields\nReliable media: News organizations with clear editorial policies and track records of corrections/apologies',
			examplesGood: [
				'Ministry of Health statistical data',
				'Nature journal peer-reviewed papers',
				'Official Bank announcements'
			],
			examplesBad: [
				'Personal blog information',
				'Anonymous forum posts',
				'Advertisement-focused sites'
			]
		},
		'source-primary': {
			title: 'Primary source verification',
			description: 'Direct information from the source, not hearsay or secondhand reports',
			guideTitle: '🎯 How to Identify Primary Sources',
			guideContent:
				'Primary sources: Research papers by authors themselves, witness testimonies, official announcements, raw data\nSecondary sources: Commentary articles, summary sites, third-party analyses\nChecking points: Pay attention to expressions like "according to" or "reported by"',
			examplesGood: [
				'Papers published by researchers themselves',
				'Company earnings announcements',
				'Government official statistics'
			],
			examplesBad: ['"According to experts"', '"A certain survey" without clear attribution']
		},
		'source-multiple': {
			title: 'Multiple independent sources',
			description: 'Similar reports or confirmations from different positions/organizations',
			guideTitle: '🔄 How to Verify Independence',
			guideContent:
				'Independent sources: Sources with different organizations, funding, and interests\nMinimum standard: Confirmation from 2-3 independent reliable sources\nNote: Articles based on the same press release are not "independent"',
			examplesGood: [
				'Government announcement + academic research + multiple media reports',
				'Similar results from different research institutions'
			],
			examplesBad: ['Multiple media within the same corporate group', 'Reposted articles only']
		},
		'warning-anonymous': {
			title: 'Not anonymous or unattributed information',
			description: 'Creator/publisher can be clearly identified',
			guideTitle: '🔍 Key Points for Source Identification',
			guideContent:
				'Required information: Real name of creator, affiliation, contact information, expertise\nWarning signs: "According to internal sources", "anonymous experts", "a certain study"\nAcceptable anonymity: Source protection in journalism (but reporter must be identifiable)',
			examplesGood: [
				'According to Prof. Ichiro Tanaka (University of Tokyo Medical School)',
				'Statement by Ministry of Health Division Chief'
			],
			examplesBad: ['According to a certain doctor', 'Sources say', 'Anonymous expert']
		},
		'warning-sensational': {
			title: 'Few sensational or inflammatory expressions',
			description: 'Calm and objective description, no excessive emotional appeals',
			guideTitle: '⚠️ How to Identify Sensational Expressions',
			guideContent:
				'Warning expressions: "Absolutely", "Completely", "Shocking", "Stunning", "What X industry hides"\nEmotional manipulation: Expressions that incite fear, anger, jealousy\nAppropriate expressions: "According to research", "Data shows", "Expert opinion"',
			examplesGood: [
				'Research showed improvement in 75% of subjects',
				'Statistically significant difference confirmed by data'
			],
			examplesBad: ['Shocking truth doctors never tell!', 'Industry cover-up exposed']
		},
		'warning-logical': {
			title: 'No logical contradictions',
			description: 'Content is consistent with no obvious logical leaps',
			guideTitle: '🧠 How to Check Logical Consistency',
			guideContent:
				'Check items:\n• Are premises and conclusions properly connected?\n• Are causal relationships clearly shown?\n• Are contradictory claims made simultaneously?\nCommon logical fallacies: Confusing correlation with causation, extreme generalizations',
			examplesGood: [
				'Statistically significant analysis considering other factors',
				'Step-by-step logical development'
			],
			examplesBad: [
				'A and B happened together so A caused B',
				'Extreme generalizations from examples'
			]
		},
		// Detailed evaluation
		'time-recent': {
			title: 'Information freshness',
			description: 'Publication date is specified and content maintains appropriate freshness',
			guideTitle: '⏰ Judging Appropriate Information Freshness',
			guideContent:
				'Field-specific standards:\n• News/Current affairs: Within days to 1 week\n• Medicine/Science: Within 2-3 years (up to 5 years for basic research)\n• Technology/IT: Within 1-2 years\n• Law/Systems: Reflects latest revisions\nCheck points: Clear publication date/time, last update date recorded',
			examplesGood: [
				'Published December 2024',
				'Last updated: January 2025',
				'Reflects latest legal revisions'
			],
			examplesBad: [
				'No date listed',
				'5-year-old technical information',
				'Explanation based on old laws'
			]
		},
		'time-update': {
			title: 'Update and correction history',
			description: 'Content is updated as necessary with transparent corrections',
			guideTitle: '📝 Checking Transparent Updates and Corrections',
			guideContent:
				'Good update characteristics:\n• Clear description of updates\n• Explanation of correction reasons\n• Recording of update date/time\n• Notes for important changes\nReliability indicator: Attitude of acknowledging and correcting mistakes',
			examplesGood: [
				'Updated January 15, 2025: Statistical data replaced with latest version',
				'Clear correction history'
			],
			examplesBad: [
				'Old information left unchanged',
				'No correction records',
				'Silent content changes'
			]
		},
		'expert-knowledge': {
			title: 'Appropriate expertise',
			description: 'Creator has sufficient knowledge/experience in the relevant field',
			guideTitle: '🎓 How to Verify Expertise',
			guideContent:
				'Check items:\n• Degrees/qualifications in related fields\n• Practical experience/research history\n• Academic presentation/publication record\n• Professional institutional experience\nNote: Expertise in related fields is important (e.g., doctors discussing economics)',
			examplesGood: [
				'Infectious disease specialist explaining vaccines',
				'Economics PhD analyzing monetary policy'
			],
			examplesBad: [
				'Celebrity outside their field making medical claims',
				'Person with unclear qualifications explaining law'
			]
		},
		'detail-sufficient': {
			title: 'Sufficient detail and evidence',
			description:
				'Process leading to conclusions and supporting evidence are appropriately explained',
			guideTitle: '📋 Judging Sufficiency of Evidence',
			guideContent:
				'Required elements:\n• Specific data supporting claims\n• Methodology explanation\n• Mention of limitations/constraints\n• Reference to opposing views\nWarning signs: Conclusions only with unclear process, vague evidence',
			examplesGood: [
				'Sample size, statistical methods, confidence intervals included',
				'Detailed methodology explanation'
			],
			examplesBad: [
				'Only states effect proven without details',
				'Conclusions only with unclear evidence'
			]
		},
		'citation-proper': {
			title: 'Proper citations and references',
			description: 'Reliable sources are shown for important claims',
			guideTitle: '📚 Standards for Proper Citations',
			guideContent:
				'Content requiring citation:\n• Statistical data/numbers\n• Specialized claims\n• Other research results\n• Legal/regulatory content\nCitation format: Minimum information including author name, publication year, title, publisher',
			examplesGood: [
				'According to Tanaka (2024) research...',
				'Ministry of Health statistics (2025)...'
			],
			examplesBad: ['According to research (source unclear)', 'Data shows (details unclear)']
		},
		'citation-accessible': {
			title: 'Verifiability of cited sources',
			description: 'Cited sources can actually be accessed and verified',
			guideTitle: '🌐 Checking Citation Accessibility',
			guideContent:
				'Ideal state:\n• Direct links or DOI\n• Publicly available sources\n• Searchable specific information\nAcceptable range: Paid databases, materials verifiable at libraries\nProblematic citations: Private conversations, unverifiable internal materials',
			examplesGood: ['With URL links', 'Papers with DOI numbers', 'Books with ISBN numbers'],
			examplesBad: [
				'According to internal materials',
				'In private discussions',
				'Inaccessible materials'
			]
		},
		// Verification and cross-checking
		'cross-check': {
			title: 'Cross-reference with other sources',
			description: 'Similar content can be confirmed by multiple independent sources',
			guideTitle: '🔍 Effective Cross-checking Methods',
			guideContent:
				'Step-by-step verification:\n1. Find other reliable sources reporting the same facts\n2. Check reports from different angles on the same event\n3. Research opposing views and critical perspectives\nVerification tools: Google Scholar, public databases, fact-checking sites',
			examplesGood: [
				'Similar results in multiple peer-reviewed papers',
				'Consistency verification with government statistics'
			],
			examplesBad: ['Only one source', 'Multiple articles using same source']
		},
		'fact-check': {
			title: 'Verification by fact-checking organizations',
			description: 'Verification exists from reliable fact-checking institutions',
			guideTitle: '✅ Reliable Fact-checking Organizations',
			guideContent:
				'International organizations: Snopes, PolitiFact, AFP Fact Check, Full Fact (UK), etc.\nJapanese organizations: InFact, Japan Fact-check Center, FIJ (Fact Check Initiative)\nMedia-based: NHK, Asahi Shimbun, Yomiuri Shimbun fact-checking departments\nVerification method: Search relevant information on fact-checking sites',
			examplesGood: [
				'Multiple fact-checking organizations judged as "true"',
				'Verification by international organizations'
			],
			examplesBad: ['Judged as "false information" by fact-checking', 'Unverified information']
		},
		'data-verifiable': {
			title: 'Verifiable data',
			description: 'Data supporting claims can be objectively verified',
			guideTitle: '📈 Checking Data Verifiability',
			guideContent:
				'Elements to verify:\n• Data source (research institutions, statistical bureaus, etc.)\n• Clear collection methods/periods\n• Sample size/target details\n• Access to raw or detailed data\nWarning signs: Only "internal data" or "proprietary research" without details',
			examplesGood: [
				'Ministry of Internal Affairs statistics data',
				'Data published in paper supplementary materials'
			],
			examplesBad: ['According to our survey (no detailed survey overview)', 'Internal data only']
		},
		methodology: {
			title: 'Validity of methods/methodology',
			description: 'Research or survey methodology is appropriate and reproducible',
			guideTitle: '🔬 Evaluating Methodological Validity',
			guideContent:
				'Evaluation points:\n• Appropriateness of research design (RCT, cohort studies, etc.)\n• Presence of bias countermeasures\n• Validity of statistical methods\n• Reproducibility assurance (protocol publication, etc.)\nPoints verifiable by non-experts: Detailed methodology description, comparison with other research',
			examplesGood: [
				'Double-blind trials',
				'Appropriate control group setting',
				'Protocol publication'
			],
			examplesBad: [
				'No methodology description',
				'Biased sample selection',
				'Non-reproducible methods'
			]
		},
		// Context and bias evaluation
		'bias-disclosure': {
			title: 'Disclosure of conflicts of interest',
			description: 'Financial, political, and personal interests are appropriately disclosed',
			guideTitle: '💰 Items to Check for Conflicts of Interest',
			guideContent:
				'Interests to disclose:\n• Research funding sources\n• Corporate fees/consulting payments\n• Financial benefits like stock ownership\n• Political/ideological positions\nVerification method: Look for mentions of "conflict of interest", "COI", "funding"',
			examplesGood: [
				'This research was conducted with funding from XX Foundation',
				'COI (conflict of interest) clearly stated'
			],
			examplesBad: [
				'Pharmaceutical company research with no COI disclosure',
				'Unclear funding sources'
			]
		},
		'balanced-view': {
			title: 'Balanced perspective',
			description: 'Different positions and opposing views are also considered',
			guideTitle: '⚖️ Perspectives for Balance Evaluation',
			guideContent:
				'Check points:\n• Introduction of opposing/critical views\n• Mention of different research results\n• Reference to uncertainties/limitations\n• Multiple expert opinions\nWarning signs: One-sided claims only, cherry-picking favorable information',
			examplesGood: [
				'On the other hand, Professor XX shows a different view',
				'Comparison of multiple research results'
			],
			examplesBad: ['Only listing supporting evidence', 'No mention of opposing views']
		},
		'context-adequate': {
			title: 'Sufficient background information',
			description:
				'Background and context necessary for understanding the information are provided',
			guideTitle: '🌍 Items to Check for Contextual Information',
			guideContent:
				'Necessary background information:\n• Historical background/previous research\n• Related laws/systems\n• Social/cultural background\n• International trends/comparisons\nEvaluation point: Providing context for readers to properly understand/judge',
			examplesGood: [
				'Past similar cases',
				'Comparison data with other countries also presented',
				'Historical background explanation'
			],
			examplesBad: [
				'Single numbers only',
				'No background information',
				'Comparisons ignoring context'
			]
		},
		'scope-clear': {
			title: 'Clear scope of application',
			description: 'Applicable scope and limitations of information are clearly shown',
			guideTitle: '🎯 Clarifying Scope of Application',
			guideContent:
				'Scope to clarify:\n• Target people/regions/periods\n• Research limitations/constraints\n• Degree of generalizability\n• Excluded cases\nImportance: To prevent excessive generalization or misuse',
			examplesGood: [
				'Research targeted Japanese adult males, so application to other groups should be cautious',
				'Clear limitation statements'
			],
			examplesBad: [
				'Unlimited generalization of limited research results',
				'Unclear scope of application'
			]
		}
	}
};

// Checklist items translations (placeholder - needs translation)
export const checklistItems = {
	// Critical evaluation
	'source-authority': {
		title: 'Publication from authoritative sources',
		description:
			'Government agencies, academic institutions, professional organizations, peer-reviewed papers, reliable media, etc.',
		guideTitle: '🏛️ Criteria for Authoritative Sources',
		guideContent:
			'Government/Public institutions: Ministries, statistical bureaus, central banks, courts, etc.\nAcademic institutions: Universities, research institutes, academic societies, peer-reviewed journals\nProfessional organizations: Domestic and international organizations in relevant fields\nReliable media: News organizations with clear editorial policies and track records of corrections/apologies',
		examplesGood: [
			'Ministry of Health statistical data',
			'Peer-reviewed paper in Nature',
			'Bank of Japan official announcement'
		],
		examplesBad: [
			'Personal blog information',
			'Anonymous forum posts',
			'Advertisement-purpose sites'
		]
	},
	'source-primary': {
		title: 'Primary source verification',
		description: 'Direct information from original sources, not hearsay or secondhand',
		guideTitle: '🎯 How to Identify Primary Sources',
		guideContent:
			'Primary sources: Researcher\'s own papers, witness testimony, official announcements, raw data\nSecondary sources: Commentary articles, summary sites, other\'s analysis\nVerification points: Watch for expressions like "according to..." or "reported by..."',
		examplesGood: [
			'Paper published by researcher themselves',
			'Company earnings announcement',
			'Government official statistics'
		],
		examplesBad: ['"According to experts"', '"In a certain survey" and other vague citations']
	},
	'source-multiple': {
		title: 'Multiple independent sources',
		description: 'Similar reports or confirmations from different positions/organizations',
		guideTitle: '🔄 How to Verify Independence',
		guideContent:
			'Independent sources: Sources with different organizations, funding, and interests\nMinimum standard: Confirmation from 2-3 independent reliable sources\nNote: Articles based on the same press release are not "independent"',
		examplesGood: [
			'Government announcement + academic research + multiple media reports',
			'Similar results from different research institutions'
		],
		examplesBad: ['Multiple media within same corporate group', 'Reposted articles only']
	},
	'warning-anonymous': {
		title: 'Not anonymous or unidentified information',
		description: 'Creator/publisher can be clearly identified',
		guideTitle: '🔍 Verification Points for Source Identification',
		guideContent:
			'Required information: Author\'s real name, affiliation, contact, expertise\nWarning signs: "According to internal sources" "Anonymous expert" "A certain study"\nAcceptable anonymity: Journalism source protection (but reporter must be identifiable)',
		examplesGood: [
			'According to Dr. Ichiro Tanaka (University of Tokyo Medical School Professor)',
			'Statement by Ministry of Health ○○ Division Chief'
		],
		examplesBad: ['According to a certain doctor', 'According to sources', 'Anonymous expert']
	},
	'warning-sensational': {
		title: 'Few inflammatory or sensational expressions',
		description: 'Calm and objective description, no excessive emotional appeals',
		guideTitle: '⚠️ How to Identify Inflammatory Expressions',
		guideContent:
			'Warning expressions: "Absolutely" "Completely" "Shocking" "Sensational" "Hidden by ○○ industry"\nEmotional manipulation: Expressions that incite fear, anger, jealousy\nAppropriate expressions: "According to research" "Data shows" "Expert opinion"',
		examplesGood: [
			'Research showed improvement in 75% of subjects',
			'Data confirmed statistically significant difference'
		],
		examplesBad: ['Shocking truth doctors never tell!', 'Industry cover-up shocking facts']
	},
	'warning-logical': {
		title: 'No logical contradictions',
		description: 'Content is consistent with no obvious logical leaps',
		guideTitle: '🧠 How to Verify Logical Consistency',
		guideContent:
			'Check items:\n• Are premises and conclusions properly connected?\n• Are causal relationships clearly shown?\n• Are contradictory claims made simultaneously?\nCommon logical fallacies: Confusing correlation with causation, extreme generalizations',
		examplesGood: [
			'Statistically significant analysis considering other factors',
			'Step-by-step logical development'
		],
		examplesBad: ['A and B happened together so A caused B', 'Generalization from extreme examples']
	},
	// Detailed evaluation
	'time-recent': {
		title: 'Information recency',
		description: 'Publication date is specified and maintains appropriate freshness for content',
		guideTitle: '⏰ Judging Appropriate Information Freshness',
		guideContent:
			'Field-specific standards:\n• News/Current events: Within days to 1 week\n• Medicine/Science: Within 2-3 years (basic research up to 5 years)\n• Technology/IT: Within 1-2 years\n• Law/Regulations: Reflects latest revisions\nVerification points: Publication date/time specified, last update date recorded',
		examplesGood: [
			'Published December 2024',
			'Last updated: January 2025',
			'Reflects latest legal revisions'
		],
		examplesBad: [
			'No date specified',
			'5-year-old technology information',
			'Explanation based on old laws'
		]
	},
	'time-update': {
		title: 'Update/correction history',
		description: 'Content is updated as needed and corrections are made transparently',
		guideTitle: '📝 Verification of Transparent Updates/Corrections',
		guideContent:
			'Good update characteristics:\n• Clear specification of update content\n• Explanation of correction reasons\n• Recording of update date/time\n• Notes for important changes\nReliability indicator: Attitude of acknowledging and correcting mistakes',
		examplesGood: [
			'Updated January 15, 2025: Statistical data replaced with latest version',
			'Clear correction history'
		],
		examplesBad: [
			'Old information left unchanged',
			'No correction records',
			'Silent content changes'
		]
	},
	'expert-knowledge': {
		title: 'Appropriate expertise',
		description: 'Author has sufficient knowledge/experience in the relevant field',
		guideTitle: '🎓 How to Verify Expertise',
		guideContent:
			'Verification items:\n• Degrees/qualifications in related fields\n• Practical experience/research history\n• Academic presentation/publication record\n• Professional institution career\nNote: Expertise in related fields is important (e.g., doctors discussing economics)',
		examplesGood: [
			'Infectious disease specialist explaining vaccines',
			'Economics PhD analyzing monetary policy'
		],
		examplesBad: [
			'Non-expert celebrity making medical claims',
			'Person with unknown qualifications explaining law'
		]
	},
	'detail-sufficient': {
		title: 'Sufficient detail and evidence',
		description: 'Process and evidence leading to conclusions are appropriately explained',
		guideTitle: '📋 Judging Evidence Sufficiency',
		guideContent:
			'Necessary elements:\n• Specific data supporting claims\n• Methodology explanation\n• Mention of limitations/constraints\n• Reference to opposing opinions\nWarning signs: Only conclusions without process, vague evidence',
		examplesGood: [
			'Sample size, statistical methods, confidence intervals specified',
			'Detailed methodology explanation'
		],
		examplesBad: ['Only states effect proven without details', 'Conclusions only without evidence']
	},
	'citation-proper': {
		title: 'Appropriate citations/references',
		description: 'Reliable sources are shown for important claims',
		guideTitle: '📚 Standards for Appropriate Citations',
		guideContent:
			'Content requiring citation:\n• Statistical data/numbers\n• Specialist claims\n• Other research results\n• Laws/regulations content\nCitation format: Minimum information like author name, publication year, title, publisher',
		examplesGood: [
			'According to Tanaka (2024) research...',
			'In Ministry of Health statistics (2025)...'
		],
		examplesBad: ['According to research (source unknown)', 'Data shows (details unknown)']
	},
	'citation-accessible': {
		title: 'Citation source accessibility',
		description: 'Cited sources can be actually accessed and verified',
		guideTitle: '🌐 Verifying Citation Source Accessibility',
		guideContent:
			'Ideal state:\n• Direct links or DOI\n• Publicly available sources\n• Searchable specific information\nAcceptable range: Paid databases, library-verifiable materials\nProblematic citations: Private conversations, unverifiable internal materials',
		examplesGood: ['With URL links', 'Papers with DOI numbers', 'Books with ISBN numbers'],
		examplesBad: [
			'According to internal materials',
			'In personal discussions',
			'Inaccessible materials'
		]
	},
	// Verification & cross-checking
	'cross-check': {
		title: 'Cross-checking with other sources',
		description: 'Similar content can be confirmed by multiple independent sources',
		guideTitle: '🔍 Effective Cross-checking Methods',
		guideContent:
			'Step-by-step verification:\n1. Find other reliable sources reporting the same facts\n2. Confirm reports from different angles on the same event\n3. Research opposing opinions and critical perspectives\nVerification tools: Google Scholar, public databases, fact-check sites',
		examplesGood: [
			'Similar results in multiple peer-reviewed papers',
			'Consistency verification with government statistics'
		],
		examplesBad: ['Only one source', 'Multiple articles using same source']
	},
	'fact-check': {
		title: 'Fact-checking organization verification',
		description: 'Verification by reliable fact-checking organizations',
		guideTitle: '✅ Reliable Fact-checking Organizations',
		guideContent:
			'International organizations: Snopes, PolitiFact, AFP Fact Check, Full Fact (UK), etc., organizations from different positions/regions\nJapanese organizations: InFact, Japan Fact-check Center, FIJ (Fact-Check Initiative), etc.\nMedia-based: NHK, Asahi Shimbun, Yomiuri Shimbun fact-check departments\nVerification method: Search relevant information on fact-check sites',
		examplesGood: [
			'Multiple fact-check organizations rated as "true"',
			'Verification by international organizations'
		],
		examplesBad: ['Rated as "false information" by fact-checkers', 'Unverified information']
	},
	'data-verifiable': {
		title: 'Verifiable data',
		description: 'Data supporting claims can be objectively confirmed',
		guideTitle: '📈 Verifying Data Verifiability',
		guideContent:
			'Elements to verify:\n• Data source (research institutions, statistical bureaus, etc.)\n• Collection methods/periods specified\n• Sample size/target details\n• Access to raw or detailed data\nWarning signs: Only "internal data" or "proprietary research" without details',
		examplesGood: [
			'Ministry of Internal Affairs statistics data',
			'Data published in paper supplementary materials'
		],
		examplesBad: ['According to our survey (no detailed survey overview)', 'Internal data only']
	},
	methodology: {
		title: 'Methodology validity',
		description: 'Research or survey methodology is appropriate and reproducible',
		guideTitle: '🔬 Methodology Validity Assessment',
		guideContent:
			'Assessment points:\n• Appropriateness of research design (RCT, cohort studies, etc.)\n• Presence of bias countermeasures\n• Statistical method validity\n• Reproducibility assurance (protocol publication, etc.)\nVerifiable by non-experts: Detailed methodology description, comparison with other research',
		examplesGood: [
			'Double-blind trials',
			'Appropriate control group setting',
			'Protocol publication'
		],
		examplesBad: [
			'No methodology description',
			'Biased sample selection',
			'Non-reproducible methods'
		]
	},
	// Context & bias evaluation
	'bias-disclosure': {
		title: 'Conflict of interest disclosure',
		description:
			'Financial, political, or personal conflicts of interest are appropriately disclosed',
		guideTitle: '💰 Conflict of Interest Verification Items',
		guideContent:
			'Conflicts to disclose:\n• Research funding sources\n• Corporate fees/consulting payments\n• Financial benefits like stock ownership\n• Political/ideological positions\nVerification method: Look for "conflict of interest," "COI," "funding" mentions',
		examplesGood: [
			'This research was conducted with ○○ Foundation grant',
			'COI (conflict of interest) specified'
		],
		examplesBad: [
			'Pharmaceutical company research without COI disclosure',
			'Unknown funding source'
		]
	},
	'balanced-view': {
		title: 'Balanced perspective',
		description: 'Different positions and opposing opinions are also considered',
		guideTitle: '⚖️ Balance Assessment Perspectives',
		guideContent:
			'Verification points:\n• Introduction of opposing opinions/critical perspectives\n• Mention of different research results\n• Mention of uncertainties/limitations\n• Multiple expert opinions\nWarning signs: Only one-sided claims, cherry-picking favorable information',
		examplesGood: [
			'On the other hand, Professor ○○ shows different view',
			'Comparison of multiple research results'
		],
		examplesBad: ['Only listing supporting evidence', 'No mention of opposing opinions']
	},
	'context-adequate': {
		title: 'Sufficient background information',
		description: 'Background and context necessary for understanding information is provided',
		guideTitle: '🌍 Context Information Verification Items',
		guideContent:
			'Necessary background information:\n• Historical background/previous research\n• Related laws/regulations\n• Social/cultural background\n• International trends/comparisons\nAssessment point: Providing context for readers to properly understand/judge',
		examplesGood: [
			'Past similar cases',
			'Comparison data with other countries also presented',
			'Historical background explanation'
		],
		examplesBad: [
			'Only isolated numbers',
			'No background information',
			'Context-ignoring comparisons'
		]
	},
	'scope-clear': {
		title: 'Clear scope of application',
		description: 'Applicable scope and limitations of information are clearly indicated',
		guideTitle: '🎯 Clarifying Scope of Application',
		guideContent:
			'Scope to clarify:\n• Target people/regions/periods\n• Research limitations/constraints\n• Degree of generalizability\n• Excluded cases\nImportance: To prevent excessive generalization or misuse',
		examplesGood: [
			'Study targeted Japanese adult males, application to other groups should be cautious',
			'Limitations specified'
		],
		examplesBad: [
			'Unlimited generalization of limited research results',
			'Unclear scope of application'
		]
	}
};

// Confidence texts
export const confidenceTexts = {
	high: 'High reliability',
	medium: 'Medium reliability',
	low: 'Low reliability',
	veryLow: 'Reliability issues'
};

// Judgment advice
export const judgmentAdvices = {
	accept: 'Adoption recommended. Sufficient verification has been conducted.',
	caution: 'Additional verification recommended. Be cautious with important decisions.',
	reject: 'Rejection recommended. Look for more reliable sources.',
	lowConfidence: 'Caution required. Further verification needed.'
};

// UI specific texts
export const uiTexts = {
	quickStartGuide:
		'Start with "Critical Evaluation" first to verify basic reliability. As you check each item, the score on the right will update in real-time.',
	guideMode: {
		detailed: '📖 Detailed Guide Mode',
		normal: '📝 Normal Mode'
	},
	placeholders: {
		title: 'Example: Article about COVID-19 vaccine effectiveness',
		description: 'Please enter details of the information to be evaluated...',
		notes: 'Record any questions, additional items to verify, overall impressions, etc...'
	},
	defaultTitle: 'Fact Check_',
	menuToggleAriaLabel: 'Toggle menu',
	scoreLabels: {
		critical: '🚨 Critical',
		detailed: '📝 Detailed',
		verification: '🔍 Verification',
		context: '🌐 Context',
		total: 'Total Score'
	}
};

export default translations;
