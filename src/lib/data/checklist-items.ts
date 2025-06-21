import type { CheckItem, CheckCategory } from '../types/checklist.js';

export const CATEGORIES: CheckCategory[] = [
	{
		id: 'critical',
		name: 'クリティカル評価（必須）',
		description: '情報の基本的信頼性を判断する最重要項目',
		color: '#e74c3c',
		emoji: '🚨'
	},
	{
		id: 'detailed',
		name: '詳細評価（重要）',
		description: '情報の質と専門性を評価する項目',
		color: '#f39c12',
		emoji: '📝'
	},
	{
		id: 'verification',
		name: '検証・照合',
		description: '情報の検証可能性と裏付けを確認する項目',
		color: '#3498db',
		emoji: '🔍'
	},
	{
		id: 'context',
		name: '文脈・バイアス評価',
		description: 'バイアスと文脈の適切性を評価する項目',
		color: '#9b59b6',
		emoji: '🌐'
	}
];

export const CHECKLIST_ITEMS: CheckItem[] = [
	// クリティカル評価（6項目）
	{
		id: 'source-authority',
		title: '権威ある情報源からの発表',
		description: '政府機関、学術機関、専門機関、査読済み論文、信頼できるメディアなど',
		riskLevel: 'high',
		category: CATEGORIES[0]!,
		checked: false,
		guideContent: {
			title: '🏛️ 権威ある情報源の判断基準',
			content: '政府・公的機関：省庁、統計局、中央銀行、裁判所など\n学術機関：大学、研究所、学会、査読済み学術誌\n専門機関：専門分野に応じた国内外の機関（例：医療なら厚労省やWHO、教育なら文科省やUNESCOなど）\n信頼できるメディア：編集方針が明確で、訂正・謝罪の実績がある報道機関',
			examples: {
				good: ['厚生労働省の統計データ', 'Nature誌の査読論文', '日本銀行の公式発表'],
				bad: ['個人ブログの情報', '匿名掲示板の投稿', '広告目的のサイト']
			}
		}
	},
	{
		id: 'source-primary',
		title: '一次情報の確認',
		description: '又聞き・伝聞ではなく、直接的な情報源からの発信',
		riskLevel: 'high',
		category: CATEGORIES[0]!,
		checked: false,
		guideContent: {
			title: '🎯 一次情報の見極め方',
			content: '一次情報：研究者本人の論文、当事者の証言、公式発表、生データ\n二次情報：解説記事、まとめサイト、他者の分析\n確認ポイント：「〜によると」「〜が報じた」などの表現に注意',
			examples: {
				good: ['研究者が自ら発表した論文', '企業の決算発表', '政府の公式統計'],
				bad: ['「専門家によると」', '「ある調査で」などの曖昧な引用']
			}
		}
	},
	{
		id: 'source-multiple',
		title: '複数の独立した情報源',
		description: '異なる立場・組織からの同様の報告や確認',
		riskLevel: 'high',
		category: CATEGORIES[0]!,
		checked: false,
		guideContent: {
			title: '🔄 独立性の確認方法',
			content: '独立した情報源：異なる組織、資金源、利害関係を持つ情報源\n最低基準：2-3の独立した信頼できる情報源からの確認\n注意点：同じプレスリリースを元にした記事は「独立」ではない',
			examples: {
				good: ['政府発表 + 学術研究 + 複数メディア報道', '異なる研究機関による同様の結果'],
				bad: ['同じ企業グループ内の複数メディア', '転載記事のみ']
			}
		}
	},
	{
		id: 'warning-anonymous',
		title: '匿名・出典不明な情報ではない',
		description: '作成者・発信者が明確に特定できる',
		riskLevel: 'high',
		category: CATEGORIES[0]!,
		checked: false,
		guideContent: {
			title: '🔍 発信者特定の確認ポイント',
			content: '必須情報：作成者の実名、所属、連絡先、専門性\n警告サイン：「内部関係者によると」「匿名の専門家」「ある研究」\n許容される匿名：ジャーナリズムでの情報提供者保護（ただし記者は特定可能）',
			examples: {
				good: ['田中一郎氏（東京大学医学部教授）によると', '厚生労働省○○課長の発言'],
				bad: ['ある医師によると', '関係者の話では', '匿名の専門家']
			}
		}
	},
	{
		id: 'warning-sensational',
		title: '扇動的・煽情的な表現が少ない',
		description: '冷静で客観的な記述、感情に訴える過度な表現がない',
		riskLevel: 'medium',
		category: CATEGORIES[0]!,
		checked: false,
		guideContent: {
			title: '⚠️ 扇動的表現の見分け方',
			content: '警告する表現：「絶対に」「完全に」「驚愕の」「衝撃的な」「○○業界が隠す」\n感情誘導：恐怖、怒り、嫉妬を煽る表現\n適切な表現：「研究結果によると」「データが示している」「専門家の見解では」',
			examples: {
				good: ['研究では75%の被験者に改善が見られた', 'データによると統計的有意差が確認された'],
				bad: ['医師が絶対に教えない驚愕の真実！', '業界が隠蔽する衝撃的事実']
			}
		}
	},
	{
		id: 'warning-logical',
		title: '論理的な矛盾がない',
		description: '内容に一貫性があり、明らかな論理的飛躍がない',
		riskLevel: 'medium',
		category: CATEGORIES[0]!,
		checked: false,
		guideContent: {
			title: '🧠 論理的一貫性の確認方法',
			content: 'チェック項目：\n• 前提と結論が適切につながっているか\n• 因果関係が明確に示されているか\n• 矛盾する主張が同時にされていないか\nよくある論理的誤謬：相関関係を因果関係と混同、極端な一般化',
			examples: {
				good: ['統計的に有意差があり、他の要因も考慮した分析', '段階的な論理展開'],
				bad: ['AとBが同時に起きたからAがBの原因', '極端な例からの一般化']
			}
		}
	},

	// 詳細評価（6項目）
	{
		id: 'time-recent',
		title: '情報の新しさ',
		description: '公開日が明記され、内容に適した新しさを保っている',
		riskLevel: 'medium',
		category: CATEGORIES[1]!,
		checked: false,
		guideContent: {
			title: '⏰ 情報の適切な新しさの判断',
			content: '分野別の基準：\n• ニュース・時事：数日～1週間以内\n• 医学・科学：2-3年以内（基礎研究は5年程度まで）\n• 技術・IT：1-2年以内\n• 法律・制度：最新の改正を反映\n確認ポイント：公開日時の明記、最終更新日の記載',
			examples: {
				good: ['2024年12月発表', '最終更新：2025年1月', '最新の法改正を反映'],
				bad: ['日付の記載なし', '5年前の技術情報', '古い法律に基づく説明']
			}
		}
	},
	{
		id: 'time-update',
		title: '更新・訂正の履歴',
		description: '必要に応じて内容が更新され、訂正が透明に行われている',
		riskLevel: 'low',
		category: CATEGORIES[1]!,
		checked: false,
		guideContent: {
			title: '📝 透明な更新・訂正の確認',
			content: '良い更新の特徴：\n• 更新内容の明記\n• 訂正理由の説明\n• 更新日時の記録\n• 重要な変更の場合は注記\n信頼性の指標：間違いを認めて訂正する姿勢',
			examples: {
				good: ['2025年1月15日更新：統計データを最新版に差し替え', '訂正履歴の明記'],
				bad: ['古い情報のまま放置', '訂正の記録なし', '無言での内容変更']
			}
		}
	},
	{
		id: 'expert-knowledge',
		title: '適切な専門知識',
		description: '作成者が該当分野の十分な知識・経験を持っている',
		riskLevel: 'medium',
		category: CATEGORIES[1]!,
		checked: false,
		guideContent: {
			title: '🎓 専門性の確認方法',
			content: '確認項目：\n• 関連分野での学位・資格\n• 実務経験・研究歴\n• 学会発表・論文発表実績\n• 専門機関での職歴\n注意：関連分野での専門性が重要（医師が経済を語る場合など）',
			examples: {
				good: ['感染症専門医がワクチンについて解説', '経済学博士が金融政策を分析'],
				bad: ['専門外の有名人が医学について断言', '資格不明の人が法律解説']
			}
		}
	},
	{
		id: 'detail-sufficient',
		title: '十分な詳細と根拠',
		description: '結論に至る過程や根拠が適切に説明されている',
		riskLevel: 'medium',
		category: CATEGORIES[1]!,
		checked: false,
		guideContent: {
			title: '📋 根拠の十分性の判断',
			content: '必要な要素：\n• 主張を支持する具体的データ\n• 方法論の説明\n• 制限・限界の言及\n• 反対意見への言及\n警告サイン：結論だけで過程が不明、根拠が曖昧',
			examples: {
				good: ['サンプル数、統計手法、信頼区間まで記載', '方法論の詳細説明'],
				bad: ['効果が証明されただけで詳細なし', '結論のみで根拠不明']
			}
		}
	},
	{
		id: 'citation-proper',
		title: '適切な引用・参照',
		description: '重要な主張に対して信頼できる情報源が示されている',
		riskLevel: 'medium',
		category: CATEGORIES[1]!,
		checked: false,
		guideContent: {
			title: '📚 適切な引用の基準',
			content: '引用すべき内容：\n• 統計データ・数値\n• 専門的な主張\n• 他者の研究結果\n• 法令・規則の内容\n引用形式：著者名、出版年、タイトル、出版社など最低限の情報',
			examples: {
				good: ['田中(2024)の研究によると...', '厚労省統計(2025)では...'],
				bad: ['研究によると（出典不明）', 'データでは（詳細不明）']
			}
		}
	},
	{
		id: 'citation-accessible',
		title: '引用元の確認可能性',
		description: '引用された情報源に実際にアクセスして確認できる',
		riskLevel: 'low',
		category: CATEGORIES[1]!,
		checked: false,
		guideContent: {
			title: '🌐 引用元アクセス性の確認',
			content: '理想的な状態：\n• 直接リンクまたはDOI\n• 公開されている情報源\n• 検索可能な具体的情報\n許容範囲：有料データベース、図書館で確認可能な資料\n問題のある引用：私的な会話、確認不可能な内部資料',
			examples: {
				good: ['URLリンク付き', 'DOI番号付き論文', 'ISBN番号付きの書籍'],
				bad: ['内部資料によると', '個人的な話し合いで', 'アクセス不可能な資料']
			}
		}
	},

	// 検証・照合（4項目）
	{
		id: 'cross-check',
		title: '他情報源との照合',
		description: '独立した複数の情報源で同様の内容が確認できる',
		riskLevel: 'high',
		category: CATEGORIES[2]!,
		checked: false,
		guideContent: {
			title: '🔍 効果的なクロスチェック方法',
			content: '段階的確認：\n1. 同じ事実を報じる他の信頼できる情報源を探す\n2. 異なる角度から同じ事象を扱った報告を確認\n3. 反対意見や批判的視点も調査\n確認ツール：Google Scholar、公的データベース、ファクトチェックサイト',
			examples: {
				good: ['複数の査読論文で同様の結果', '政府統計との整合性確認'],
				bad: ['1つの情報源のみ', '同じ出典を使った複数記事']
			}
		}
	},
	{
		id: 'fact-check',
		title: 'ファクトチェック組織の検証',
		description: '信頼できるファクトチェック機関による検証がある',
		riskLevel: 'medium',
		category: CATEGORIES[2]!,
		checked: false,
		guideContent: {
			title: '✅ 信頼できるファクトチェック機関',
			content: '国際的な組織：Snopes、PolitiFact、AFP Fact Check、Full Fact（英国）など、立場・地域の異なる機関\n日本の組織：InFact、日本ファクトチェックセンター、FIJ（ファクトチェック・イニシアティブ）など\nメディア系：NHK、朝日新聞、読売新聞のファクトチェック部門\n確認方法：該当情報をファクトチェックサイトで検索',
			examples: {
				good: ['複数のファクトチェック機関が「真実」と判定', '国際機関による検証'],
				bad: ['ファクトチェックで「偽情報」と判定', '検証されていない情報']
			}
		}
	},
	{
		id: 'data-verifiable',
		title: '検証可能なデータ',
		description: '主張を支持するデータが客観的に確認できる',
		riskLevel: 'medium',
		category: CATEGORIES[2]!,
		checked: false,
		guideContent: {
			title: '📈 データの検証可能性の確認',
			content: '確認すべき要素：\n• データの出典（調査機関、統計局など）\n• 収集方法・期間の明記\n• サンプルサイズ・対象の詳細\n• 生データまたは詳細データへのアクセス可能性\n警告サイン：「内部データ」「独自調査」のみで詳細不明',
			examples: {
				good: ['総務省統計局データ', '論文の補足資料でデータ公開'],
				bad: ['弊社調査によると（詳細な調査概要なし）', '内部データのみ']
			}
		}
	},
	{
		id: 'methodology',
		title: '手法・方法論の妥当性',
		description: '研究や調査の方法論が適切で再現可能',
		riskLevel: 'low',
		category: CATEGORIES[2]!,
		checked: false,
		guideContent: {
			title: '🔬 方法論の妥当性評価',
			content: '評価ポイント：\n• 研究デザインの適切性（RCT、コホート研究など）\n• バイアス対策の有無\n• 統計手法の妥当性\n• 再現性の担保（プロトコル公開など）\n専門外でも確認できる点：手法の詳細記載、他研究との比較',
			examples: {
				good: ['二重盲検試験', '適切な対照群設定', 'プロトコル公開'],
				bad: ['方法論の記載なし', '偏ったサンプル選択', '再現不可能な手法']
			}
		}
	},

	// 文脈・バイアス評価（4項目）
	{
		id: 'bias-disclosure',
		title: '利害関係の開示',
		description: '金銭的・政治的・個人的な利害関係が適切に開示されている',
		riskLevel: 'high',
		category: CATEGORIES[3]!,
		checked: false,
		guideContent: {
			title: '💰 利害関係の確認項目',
			content: '開示すべき利害関係：\n• 研究資金の提供元\n• 企業からの謝礼・コンサルティング料\n• 株式保有などの金銭的利益\n• 政治的・イデオロギー的立場\n確認方法：「利益相反」「COI」「資金提供」などの記載を探す',
			examples: {
				good: ['本研究は○○財団の助成を受けて実施', 'COI（利益相反）の明記'],
				bad: ['製薬会社の研究で利益相反の記載なし', '資金源不明']
			}
		}
	},
	{
		id: 'balanced-view',
		title: 'バランスの取れた視点',
		description: '異なる立場や反対意見も考慮されている',
		riskLevel: 'medium',
		category: CATEGORIES[3]!,
		checked: false,
		guideContent: {
			title: '⚖️ バランス評価の観点',
			content: '確認ポイント：\n• 反対意見・批判的視点の紹介\n• 異なる研究結果の言及\n• 不確実性・限界の言及\n• 複数の専門家の意見\n警告サイン：一方的な主張のみ、都合の良い情報だけ選択',
			examples: {
				good: ['一方で、○○教授は異なる見解を示している', '複数の研究結果を比較'],
				bad: ['支持する証拠のみ列挙', '反対意見への言及なし']
			}
		}
	},
	{
		id: 'context-adequate',
		title: '十分な背景情報',
		description: '情報を理解するのに必要な背景や文脈が提供されている',
		riskLevel: 'medium',
		category: CATEGORIES[3]!,
		checked: false,
		guideContent: {
			title: '🌍 文脈情報の確認項目',
			content: '必要な背景情報：\n• 歴史的経緯・これまでの研究\n• 関連する法律・制度\n• 社会的・文化的背景\n• 国際的な動向・比較\n評価ポイント：読者が適切に理解・判断できる文脈の提供',
			examples: {
				good: ['過去の類似事例', '他国との比較データも提示', '歴史的背景の説明'],
				bad: ['単発の数値のみ', '背景情報なし', '文脈を無視した比較']
			}
		}
	},
	{
		id: 'scope-clear',
		title: '適用範囲の明確化',
		description: '情報の適用可能な範囲や限界が明確に示されている',
		riskLevel: 'low',
		category: CATEGORIES[3]!,
		checked: false,
		guideContent: {
			title: '🎯 適用範囲の明確化',
			content: '明確にすべき範囲：\n• 対象となる人・地域・期間\n• 研究の限界・制約\n• 一般化可能性の程度\n• 除外されるケース\n重要性：過度な一般化や誤用を防ぐため',
			examples: {
				good: ['日本の成人男性を対象とした研究のため、他の集団への適用は慎重に', '限界の明記'],
				bad: ['限定的な研究結果を無制限に一般化', '適用範囲不明']
			}
		}
	}
];