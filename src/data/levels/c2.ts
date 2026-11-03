import { LevelData } from '../types';

export const c2Data: LevelData = {
  meta: {
    id: 'c2',
    name: 'Level C2',
    japaneseName: '最上級・達人・古典修辞学',
    cefr: 'C2',
    ielts: 'IELTS 8.5–9.0',
    descriptionJa: '長大周期文（ピリオディック・センテンス）、語順転置（ヒュペルバトン）、従属複文と重文の高度な階層構造、同根語反復、威厳の複数、使徒的冒頭定式。',
    scriptureThemeJa: 'エペソ書1章「永遠の選び」・ヨブ記「旋風の中のみ声」',
    badgeColor: 'var(--level-c2)',
    depthColor: 'var(--level-c2)'
  },
  grammar: [
    {
      id: 'c2-periodic-sentence',
      level: 'c2',
      title: 'Periodic Sentence Structure in Theological Exegesis — 周期文（ピリオディック・センテンス）構文',
      japaneseMeaning: '主文の完結を文末まで保留し、従属節を重層的に積み重ねる最高峰の統語法',
      structureFormula: 'Subordinate Clauses (Time / Cause / Condition / Concession) + ... + Culminating Main Clause',
      explanationJa: '文の主節の核心動詞・主語を文末に至るまで意図的に保留し、幾重にも連なる分詞句、前置詞句、関係節を先に提示することで、読者の知的緊張を極限まで高めてから決定的な神学的命題を宣告する最高位の古典修辞です。エペソ書1:3-14（ギリシア語本文では一文）などに代表されます。',
      scriptureCitation: 'Ephesians 1:3-14, Romans 1:1-7',
      examples: [
        {
          english: 'Blessed be the God and Father of our Lord Jesus Christ, who, having chosen us in Him before the foundation of the world, and having predestined us to adoption through Jesus Christ according to the good pleasure of His will, has made His grace abound toward us in all wisdom.',
          japanese: '世界の基の置かれる前から私たちを御子のうちにお選びになり、その御心の良しとされるところに従ってイエス・キリストを通して子とするよう予定された私たちの主イエス・キリストの父なる神は、あらゆる知恵においてご自身の恵みを私たちにあふれさせてくださった。ほむべきかな。',
          scriptureRef: 'Ephesians 1:3-8'
        },
        {
          english: 'Paul, a bondservant of Jesus Christ, called to be an apostle, separated to the gospel of God which He promised before through His prophets in the Holy Scriptures, to all who are in Rome: Grace to you and peace.',
          japanese: '聖書においてあらかじめ預言者たちを通して約束された神の福音のために選り分けられ、使徒として召されたイエス・キリストのしもべパウロから、ローマにいるすべての愛されている者たちへ。恵みと平安があなたがたにあるように。',
          scriptureRef: 'Romans 1:1-7'
        },
        {
          english: 'Seeing that His divine power has granted to us all things that pertain to life and godliness, He has bestowed upon us His precious and magnificent promises.',
          japanese: '神の神能がいのちと敬虔に関わるすべてのものを私たちに与えてくださった以上、主はその尊く大いなる約束を私たちに授けてくださった。',
          scriptureRef: '2 Peter 1:3-4'
        }
      ],
      notesJa: '現代英語の簡潔な短文主義とは一線を画し、神学論文や古典的説教、King James Versionにおける荘厳無比な文体美を体現します。主文の文法的骨格（S-V-O）を見抜く読解力が不可欠です。',
      miniQuiz: [
        {
          question: 'In a classical periodic sentence, the main grammatical thought and final predicate are typically placed: _____',
          options: ['At the very end of the sentence', 'In the first three words', 'In parentheses', 'Only in the title'],
          answerIndex: 0,
          explanationJa: '文末（at the very end）に主文の結論が置かれ、緊張を収束させるのが周期文（Periodic Sentence）の構造的定義です。'
        }
      ]
    },
    {
      id: 'c2-hyperbaton-transposition',
      level: 'c2',
      title: 'Hyperbaton and Stylistic Transposition — 語順転置と格調高き統語倒置',
      japaneseMeaning: '自然な文脈上の語順を崩し、修辞的強調や詩的威厳を生み出す統語転置',
      structureFormula: 'Dislocated Modifier ... Head Noun // Object + Auxiliary + Subject + Verb',
      explanationJa: '修飾語と被修飾語の間に他の文要素を割り込ませたり、目的語を文頭に持ち出すなど、文法的に密接な単語を分離・転置する高度な文学的技法です。荘厳な神の宣告やヘブル書末尾の讃美に現れます。',
      scriptureCitation: 'Hebrews 11:32-38, 1 Peter 1:8',
      examples: [
        {
          english: 'Silver and gold have I none; but such as I have give I thee.',
          japanese: '金銀は私にはない。しかし私にあるものをあなたにあげよう。',
          scriptureRef: 'Acts 3:6'
        },
        {
          english: 'Whom having not seen, ye love; in whom, though now ye see Him not, yet believing, ye rejoice with joy unspeakable and full of glory.',
          japanese: 'あなたがたは見たことがないのにキリストを愛し、今見てはいないけれども信じて、言葉に尽くせない、栄光に満ちた喜びに躍っています。',
          scriptureRef: '1 Peter 1:8'
        },
        {
          english: 'Great is the mystery of godliness: God was manifest in the flesh.',
          japanese: '大いなるかな、敬虔の奥義。神は肉において現れ給うた。',
          scriptureRef: '1 Timothy 3:16'
        }
      ],
      notesJa: '「I have no silver and gold」という平易な語順ではなく、「Silver and gold have I none」と目的語を文頭に繰り出し、動詞と主語を倒置することで、使徒の使徒的権能と清貧が劇的に浮き彫りになります。',
      miniQuiz: [
        {
          question: 'The poetic inversion in "Great is the Lord, and greatly to be praised" places the adjective first to: _____',
          options: [
            'Magnify the attribute of divine greatness at the very opening',
            'Confuse the listener',
            'Make the text shorter',
            'Indicate past tense'
          ],
          answerIndex: 0,
          explanationJa: '冒頭に形容詞 Great を配置することで、神の偉大さという属性を第一声で最大級に顕彰する修辞効果を持ちます。'
        }
      ]
    },
    {
      id: 'c2-hypotaxis-parataxis',
      level: 'c2',
      title: 'Hypotactic Hierarchy vs. Paratactic Majesty — 従属複文構造と並列並置の峻別',
      japaneseMeaning: '綿密なる多層従属構文（ヒポタクシス）と、力強き単語並列構文（パラタクシス）の共鳴',
      structureFormula: 'Hypotaxis: Nested relative and adverbial sub-clauses // Parataxis: Short independent clauses connected by "and"',
      explanationJa: 'ヘブライ語の創世記に見られる素朴かつ威厳に満ちた並列構造（And God said... and there was light）と、ギリシア古典・パウロ神学に見られる幾重にも入れ子状になった論証的従属構造（Because... whereby... in whom... so that）の双方を完璧に掌握する最高位の能力です。',
      scriptureCitation: 'Genesis 1:1-5 vs Ephesians 1:3-14',
      examples: [
        {
          english: 'And God saw the light, and it was good; and God divided the light from the darkness; and God called the light Day.',
          japanese: '神はその光を見て良しとされた。神は光と闇を分けられた。神は光を昼と呼ばれた。（重厚なるパラタクシス）',
          scriptureRef: 'Genesis 1:4-5'
        },
        {
          english: 'In Him you also, when you heard the word of truth, the gospel of your salvation, and believed in Him, were sealed with the promised Holy Spirit.',
          japanese: 'このキリストにあってあなたがたもまた、真理のことば、すなわちあなたがたの救いの福音を聞き、キリストを信じたことによって、約束された聖霊の証印を押されたのです。（精緻なるヒポタクシス）',
          scriptureRef: 'Ephesians 1:13'
        },
        {
          english: 'For if we live, we live to the Lord, and if we die, we die to the Lord. So then, whether we live or whether we die, we are the Lord\'s.',
          japanese: '私たちは生きるにしても主のために生き、死ぬにしても主のために死ぬからです。ですから、生きるにしても死ぬにしても、私たちは主のものです。',
          scriptureRef: 'Romans 14:8'
        }
      ],
      notesJa: 'ヒポタクシス（従属接続）は論理の厳密性と階層的因果関係を解明し、パラタクシス（等位接続）は神的絶対意志の即時的遂行を想起させます。',
      miniQuiz: [
        {
          question: 'The structure of Genesis 1, which frequently chains clauses using "And... and...", is primarily an example of: _____',
          options: ['Parataxis', 'Hypotaxis', 'Satire', 'Anaphora only'],
          answerIndex: 0,
          explanationJa: '等位接続詞「And」で文を対等に連ねていく構造は「Parataxis（パラタクシス／並列構文）」です。'
        }
      ]
    },
    {
      id: 'c2-polyptoton-etymologica',
      level: 'c2',
      title: 'Polyptoton and Figura Etymologica — 同根語重複と霊的強調',
      japaneseMeaning: '同一語根の単語を格や品詞を変えて反復し、意味を凝縮する修辞',
      structureFormula: 'Verb + Cognate Noun // Repeated Root in varying inflections',
      explanationJa: '同一の語根から派生した動詞と名詞を組み合わせたり（fight the good fight, love with love）、異なる格変化で重ねることで、真理の完全性や抗い難い必然性を読者の脳裏に刻み込む古代修辞技法です。',
      scriptureCitation: '1 Timothy 6:12, Revelation 19:16, 2 Timothy 4:7',
      examples: [
        {
          english: 'Fight the good fight of the faith; take hold on eternal life.',
          japanese: '信仰の戦いを勇敢に戦い、永遠の命を握りしめなさい。',
          scriptureRef: '1 Timothy 6:12'
        },
        {
          english: 'He has on His robe and on His thigh a name written: King of kings, and Lord of lords.',
          japanese: 'その衣とその腿には、「王の王、主の主」という名が書かれていた。',
          scriptureRef: 'Revelation 19:16'
        },
        {
          english: 'With desire I have desired to eat this Passover with you before I suffer.',
          japanese: 'わたしは苦しみを受ける前に、あなたがたとこの過越の食事をすることを心から切望していた。',
          scriptureRef: 'Luke 22:15'
        }
      ],
      notesJa: 'ルカ22:15の「With desire I have desired（切望をもって切望した）」は、ヘブライ語の絶対不定詞（強調用法）を英語で精密に再現した古典的フィグラ・エティモロジカです。',
      miniQuiz: [
        {
          question: 'The phrase "King of kings, and Lord of lords" exemplifies which rhetorical device?',
          options: ['Polyptoton / Genitive Superlative', 'Simile', 'Understatement', 'Synecdoche'],
          answerIndex: 0,
          explanationJa: '同一名詞の単数と複数を組み合わせた最上級的表現および同根語重複修辞（Polyptoton）です。'
        }
      ]
    },
    {
      id: 'c2-syntactic-antithesis-eschatology',
      level: 'c2',
      title: 'Syntactic Antithesis in Eschatological Decrees — 統語的対照法と終末の変容',
      japaneseMeaning: '対照的な文構造を完全に対称させて並置し、劇的な変容を宣言する構文',
      structureFormula: 'It is sown in [Negative Attribute]; it is raised in [Glorious Attribute].',
      explanationJa: '主語と述語の文型を寸分違わず一致させながら、名詞や形容詞のみを極限まで対立させることで、死から復活への超自然的跳躍を圧倒的な説得力で論証する構文です。',
      scriptureCitation: '1 Corinthians 15:42-44, 2 Corinthians 4:17-18',
      examples: [
        {
          english: 'It is sown in corruption; it is raised in incorruption. It is sown in dishonor; it is raised in glory. It is sown in weakness; it is raised in power. It is sown a natural body; it is raised a spiritual body.',
          japanese: '朽ちるもので蒔かれ、朽ちないものによみがえらされ、卑しいもので蒔かれ、栄光あるものによみがえらされ、弱いもので蒔かれ、強いものによみがえらされ、自然のからだで蒔かれ、御霊のからだによみがえらされる。',
          scriptureRef: '1 Corinthians 15:42-44'
        },
        {
          english: 'For our light and momentary affliction is producing for us an eternal weight of glory far beyond all comparison.',
          japanese: '私たちの束の間の軽い患難は、比べものにならないほど重みのある永遠の栄光をもたらしているからです。',
          scriptureRef: '2 Corinthians 4:17'
        },
        {
          english: 'We look not at the things which are seen, but at the things which are not seen; for the things which are seen are temporal, but the things which are not seen are eternal.',
          japanese: '私たちは見えるものにではなく、見えないものに目を留めます。見えるものは一時的であり、見えないものは永遠だからです。',
          scriptureRef: '2 Corinthians 4:18'
        }
      ],
      notesJa: '構文上のリズム（アイソコロン／等長節）が対照法と融合し、信徒に不抜の復活信仰を呼び覚まします。',
      miniQuiz: [
        {
          question: 'The structural parallelism in "It is sown in dishonor; it is raised in glory" creates contrast primarily through: _____',
          options: ['Syntactic Antithesis', 'Irony', 'Hyperbole', 'Slang'],
          answerIndex: 0,
          explanationJa: '同一の統語形式の中で概念を対照させる「Syntactic Antithesis（統語的対照法）」です。'
        }
      ]
    },
    {
      id: 'c2-prolepsis-anticipation',
      level: 'c2',
      title: 'Prolepsis and Anticipatory Teleological Syntax — 預言的先取り構造',
      japaneseMeaning: '神の永遠の視座において、未来の成就をすでに完了した事実として語る構文',
      structureFormula: 'Future Historical Event narrated with Past / Perfect Tense of Divine Certainty',
      explanationJa: '時空を超越した神の予知と主権に基づき、歴史の終末において成就するはずの栄光を、あたかも過去に確定した既成事実であるかのように過去形で断定するヘブライ的預言完了形（Prophetic Perfect）に由来する最上級の文法理解です。',
      scriptureCitation: 'Romans 8:30, Isaiah 53:4-7',
      examples: [
        {
          english: 'And those whom He predestined He also called, and those whom He called He also justified, and those whom He justified He also glorified.',
          japanese: '神はあらかじめ定めた人々を召し、召した人々を義と認め、義と認めた人々を（すでに）栄光ある者とされた。',
          scriptureRef: 'Romans 8:30'
        },
        {
          english: 'Surely He has borne our griefs and carried our sorrows, yet we esteemed Him stricken by God.',
          japanese: 'まことに彼は私たちの病を負い、私たちの痛みを担った。それなのに私たちは、彼が神に打たれたのだと思い込んでいた。',
          scriptureRef: 'Isaiah 53:4'
        },
        {
          english: 'Babylon the great is fallen, is fallen, and has become a dwelling place of demons.',
          japanese: '倒れた、大バビロンは倒れた。悪霊どもの住まいとなった。（未だ滅びる前の預言的完了宣言）',
          scriptureRef: 'Revelation 18:2'
        }
      ],
      notesJa: 'ローマ8:30において、地上で苦闘中の信徒に対して「He also glorified（栄光を与えられた）」と過去形が使われているのは、神の不変の決定においてすでに成就しているというプロレプシス（先取り）の典型例です。',
      miniQuiz: [
        {
          question: 'In Romans 8:30, why does Paul use the past tense "glorified" for a future event?',
          options: [
            'To express the absolute divine certainty of the final outcome in God\'s eternal decree',
            'Because Paul was confused about tenses',
            'To indicate that believers died in the past',
            'To show that heaven is already over'
          ],
          answerIndex: 0,
          explanationJa: '神の永遠の決定において、終末の栄化が絶対に揺るぎない確実性を持つことを断定するための先取り（Prolepsis）です。'
        }
      ]
    },
    {
      id: 'c2-cumulative-schemes-patristic',
      level: 'c2',
      title: 'Cumulative Sentence Schemes in Patristic Exposition — 累積文（重層修飾構文）',
      japaneseMeaning: '主命題を文頭に置き、その後に無数の霊的証拠や実例を奔流のごとく付加する構文',
      structureFormula: 'Main Clause + Participle Modifier + Prepositional Modifier + Relative Clause + ...',
      explanationJa: '周期文とは対照的に、文頭で中心命題を明確に打ち出した後、そこに分詞句、前置詞句、対比句を次々と雪崩のごとく累積（ルーズ・センテンスの上位発展形）させ、御国の栄光の豊かさを圧倒的な迫力で読者に体感させる教父的修辞構文です。',
      scriptureCitation: 'Hebrews 12:18-24, 1 Timothy 3:16',
      examples: [
        {
          english: 'For you have not come to what may be touched, a blazing fire and darkness and gloom and a tempest... but you have come to Mount Zion and to the city of the living God, the heavenly Jerusalem, and to innumerable angels in festal gathering, and to the assembly of the firstborn who are enrolled in heaven, and to God, the judge of all, and to the spirits of the righteous made perfect, and to Jesus, the mediator of a new covenant.',
          japanese: 'あなたがたが近づいたのは、手で触れることのできる燃える山や暗黒や暴風ではなく、シオンの山、生ける神の都である天のエルサレム、無数の御使いたちの祝祭の集い、天に登録されている長男たちの教会、万民のさばき主である神、全うされた義人たちの霊、そして新しい契約の仲保者イエスです。',
          scriptureRef: 'Hebrews 12:18-24'
        },
        {
          english: 'God was manifested in the flesh, justified in the Spirit, seen by angels, preached among the Gentiles, believed on in the world, received up into glory.',
          japanese: 'キリストは肉において現れ、霊において義と認められ、御使いたちに見られ、諸国民の間に宣べ伝えられ、世界中で信じられ、栄光のうちに引き上げられた。',
          scriptureRef: '1 Timothy 3:16'
        },
        {
          english: 'He upholds the universe by the word of His power, having made purification for sins, and sat down at the right hand of the Majesty on high.',
          japanese: '主はその力あるみことばをもって万物を保ち、罪の清めを成し遂げてから、いと高き所の威光の御座の右に着座された。',
          scriptureRef: 'Hebrews 1:3'
        }
      ],
      notesJa: 'ヘブル12:22-24の「but you have come to...」から続く壮麗な列挙は、新約聖書における累積修辞の最高峰と讃えられます。',
      miniQuiz: [
        {
          question: 'The stylistic progression in Hebrews 12:22-24 that continually adds heavenly realities with "and to..." is an example of: _____',
          options: ['Cumulative sentence scheme with polysyndeton', 'Hyperbole without purpose', 'Short telegram style', 'Doubtful grammar'],
          answerIndex: 0,
          explanationJa: '主節に続いて「and to...」によって栄光の諸要素を重層的に累積させていく構文です。'
        }
      ]
    },
    {
      id: 'c2-absolute-gerundive-archaic',
      level: 'c2',
      title: 'Archaic Gerundives and Classical Latinate Participles — 古格分詞と動名形容詞',
      japaneseMeaning: '〜されるべき・〜に値する（格式高い教理的形容語法）',
      structureFormula: 'Noun + to be p.p. / Adjective in -able / -ible / -end (venerable, reverend)',
      explanationJa: 'ラテン語の動名形容詞（ゲルンディヴム：〜されるべき）の語法を受け継ぎ、神の讃美されるべき本質や信徒の尊ぶべき義務を、端正な格調をもって表現する文語構文です。',
      scriptureCitation: 'Luke 2:1-4, Romans 16:25-27, Revelation 4:11',
      examples: [
        {
          english: 'Worthy are You, our Lord and God, to receive glory and honor and power, for You created all things.',
          japanese: '私たちの主なる神よ、あなたこそ栄光と誉れと力を受けるにふさわしい方。万物を創造されたからです。',
          scriptureRef: 'Revelation 4:11'
        },
        {
          english: 'To the only wise God be glory forevermore through Jesus Christ! Amen.',
          japanese: '唯一の知恵に満ちた神に、イエス・キリストを通して栄光が世々限りなくありますように。アーメン。',
          scriptureRef: 'Romans 16:27'
        },
        {
          english: 'Now to Him who is able to keep you from stumbling and to present you blameless before the presence of His glory with great joy.',
          japanese: 'あなたがたをつまずかないように守り、傷のない者として大きな喜びをもってご自身の栄光の御前に立たせることができる方に。',
          scriptureRef: 'Jude 1:24'
        }
      ],
      notesJa: '祈祷書の祝祷や頌栄において、主文の動詞を省略して神の属性を直截に賛美する様式が確立しています。',
      miniQuiz: [
        {
          question: 'In formal liturgical doxologies like "To Him be glory," the verb "be" functions as: _____',
          options: ['An archaic optative/subjunctive expressing worshipful praise', 'A past participle', 'An error in spelling', 'An imperative command to God'],
          answerIndex: 0,
          explanationJa: '神への敬虔な祈念・賛美を表明する古格の接続法・希求法（optative/subjunctive）の用法です。'
        }
      ]
    },
    {
      id: 'c2-pauline-prooemium',
      level: 'c2',
      title: 'Epistolary Prooemium Syntax (Pauline Letter Salutations) — 使徒的冒頭挨拶文構文',
      japaneseMeaning: '差出人の使徒権・福音の奥義・受取人の聖徒性を緊密に統合する冒頭書簡構文',
      structureFormula: 'Author (with credentials & mission) + to Recipients (with spiritual calling) + Apostolic Blessing',
      explanationJa: '古代ヘレニズム・ユダヤ書簡の挨拶定式（AからBへ挨拶）を、パウロが三位一体論と福音の全体系を注ぎ込んで発展させた独自の長大冒頭構文です。挨拶そのものが完全な神学宣言となっています。',
      scriptureCitation: 'Romans 1:1-7, Galatians 1:1-5, Titus 1:1-4',
      examples: [
        {
          english: 'Paul, an apostle—not from men nor through man, but through Jesus Christ and God the Father, who raised Him from the dead—and all the brothers who are with me, to the churches of Galatia: Grace to you and peace from God our Father and the Lord Jesus Christ.',
          japanese: '人間から出たのでもなく、人間を通してでもなく、イエス・キリストと、キリストを死者の中からよみがえらせた父なる神とによって使徒とされたパウロ、ならびに私とともにいるすべての兄弟たちから、ガラテヤの諸教会へ。私たちの父なる神と主イエス・キリストから、恵みと平安があなたがたにあるように。',
          scriptureRef: 'Galatians 1:1-3'
        },
        {
          english: 'Paul, a servant of God and an apostle of Jesus Christ, for the sake of the faith of God\'s elect and their knowledge of the truth, which accords with godliness, in hope of eternal life... To Titus, my true child in a common faith.',
          japanese: '神の選民の信仰と、敬虔にかなう真理の知識とのための、神のしもべ、イエス・キリストの使徒パウロから、共通の信仰によるわが真実の子テトスへ。永遠の命の希望に基づいて。',
          scriptureRef: 'Titus 1:1-4'
        },
        {
          english: 'Jude, a bondservant of Jesus Christ and brother of James, to those who are called, beloved in God the Father and kept for Jesus Christ: May mercy, peace, and love be multiplied to you.',
          japanese: 'イエス・キリストのしもべ、ヤコブの兄弟ユダから、父なる神において愛され、イエス・キリストのために守られている召された人々へ。あわれみと平安と愛が、あなたがたに豊かに増し加えられますように。',
          scriptureRef: 'Jude 1:1-2'
        }
      ],
      notesJa: 'ダッシュや挿入節を挟みながら、使徒権の神起源性を即座に防衛・宣言する構造的ダイナミズムを学びます。',
      miniQuiz: [
        {
          question: 'In Galatians 1:1, Paul immediately qualifies his apostleship with "not from men nor through man" to: _____',
          options: [
            'Establish that his calling originated directly from the resurrected Christ',
            'Criticize the mail carrier',
            'Show he was self-taught',
            'Avoid writing more letters'
          ],
          answerIndex: 0,
          explanationJa: '自らの使徒権が人間的制度によるのではなく、復活のキリストから直接委託されたものであることを冒頭で断定するためです。'
        }
      ]
    },
    {
      id: 'c2-majestic-plural-syntax',
      level: 'c2',
      title: 'Catachresis & Majestic Plural Syntax (Pluralis Majestatis) — 威厳の複数・荘厳修辞法',
      japaneseMeaning: '神格の尊厳と三位一体の内在的協議を指し示す聖なる複数表現',
      structureFormula: 'Divine Subject "We" / "Us" + Verb of Sovereign Creation',
      explanationJa: '単一の神格がご自身を指して「われわれのかたちに人を造ろう」「だれがわれわれのために行くだろう」と複数形（Pluralis Majestatis）を用い、三位一体の永遠の協議と無限の威光を啓示する、旧約聖書から受け継がれた最上級の聖なる修辞です。',
      scriptureCitation: 'Genesis 1:26, Isaiah 6:8, Job 38:1-11',
      examples: [
        {
          english: 'Then God said, "Let Us make man in Our image, according to Our likeness; let them have dominion."',
          japanese: '神は仰せられた。「われわれのかたちに、われわれの似姿として人を造ろう。彼らに支配させよ。」',
          scriptureRef: 'Genesis 1:26'
        },
        {
          english: 'And I heard the voice of the Lord saying, "Whom shall I send, and who will go for Us?" Then I said, "Here am I! Send me."',
          japanese: 'そのとき主の声を聞いた。「わたしはだれを遣わそう。だれがわれわれのために行くだろうか。」私は言った。「ここに私がおります。私を遣わしてください。」',
          scriptureRef: 'Isaiah 6:8'
        },
        {
          english: 'Where were you when I laid the foundations of the earth? Declare, if you have understanding.',
          japanese: 'わたしが地の基を定めたとき、お前はどこにいたのか。悟りがあるなら語ってみよ。',
          scriptureRef: 'Job 38:4'
        }
      ],
      notesJa: '被造物の前で唯一神が独話ではなく三位一体の神格間の交わりにおいて語りかけられる荘厳な神学的一致を指し示します。',
      miniQuiz: [
        {
          question: 'The divine utterance in Genesis 1:26, "Let Us make man in Our image," uses the plural to signify: _____',
          options: [
            'The majesty and intra-Trinitarian communion of the Godhead',
            'Polytheism with multiple rival gods',
            'A grammatical accident in translation',
            'Angels creating humans'
          ],
          answerIndex: 0,
          explanationJa: '神格の威光（Pluralis Majestatis）および三位一体の内在的交わりと永遠の協議を意味します。'
        }
      ]
    }
  ],
  vocabulary: [
    {
      id: 'c2-v-aseity',
      word: 'aseity',
      level: 'c2',
      phoneticIpa: '/eɪˈsiː.ə.ti/',
      partOfSpeech: 'noun',
      japaneseMeaning: '自存性、神が何ものにも依存せず自己自身によって存在すること',
      exampleSentence: 'The aseity of God means He is uncaused, absolutely self-existent, and entirely self-sufficient.',
      exampleJapanese: '神の自存性とは、神がいかなる原因にも依存せず、完全に自ら存在し、完全に自足しておられることを意味する。',
      scriptureReference: 'Exodus 3:14'
    },
    {
      id: 'c2-v-consubstantial',
      word: 'consubstantial',
      level: 'c2',
      phoneticIpa: '/ˌkɑːn.səbˈstæn.ʃəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '同質の実体を有する、御父と本質を等しくする（ホモウシオス）',
      exampleSentence: 'The Son is consubstantial with the Father, possessing identical divine essence.',
      exampleJapanese: '御子は御父と同質（ホモウシオス）であられ、同一の神性を有しておられる。',
      scriptureReference: 'John 10:30'
    },
    {
      id: 'c2-v-impeccability',
      word: 'impeccability',
      level: 'c2',
      phoneticIpa: '/ɪmˌpɛk.əˈbɪl.ə.ti/',
      partOfSpeech: 'noun',
      japaneseMeaning: '無罪性、罪を犯すことがあり得ない神聖な無垢',
      exampleSentence: 'The doctrine of Christ\'s impeccability affirms that in His holy nature He was incapable of sinning.',
      exampleJapanese: 'キリストの無罪性の教理は、その聖なる本質において罪を犯すことが不可能であったことを告白する。',
      scriptureReference: 'Hebrews 4:15'
    },
    {
      id: 'c2-v-perichoresis',
      word: 'perichoresis',
      level: 'c2',
      phoneticIpa: '/ˌpɛr.ɪ.kəˈriː.sɪs/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'ペリコレーシス、三位一体の三位格の相互内在・相互浸透',
      exampleSentence: 'Divine perichoresis describes the mutual indwelling and interpenetration of the Father, Son, and Holy Spirit.',
      exampleJapanese: '神のペリコレーシスは、父・子・聖霊の相互内在と完全な交わりを描写する。',
      scriptureReference: 'John 14:10-11'
    },
    {
      id: 'c2-v-theophany',
      word: 'theophany',
      level: 'c2',
      phoneticIpa: '/θiˈɑː.fə.ni/',
      partOfSpeech: 'noun',
      japaneseMeaning: '神顕現、目に見える形での神の超自然的一時的顕現',
      exampleSentence: 'The burning bush was a profound theophany granted to Moses in the desert of Midian.',
      exampleJapanese: '燃える柴は、ミディアンの荒野でモーセに与えられた深遠なる神顕現であった。',
      scriptureReference: 'Exodus 3:2'
    },
    {
      id: 'c2-v-hypostatic',
      word: 'hypostatic',
      level: 'c2',
      phoneticIpa: '/ˌhaɪ.pəˈstæt.ɪk/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '位格的結合の、真の神性と真の人性が一人のキリストに結合した',
      exampleSentence: 'The hypostatic union explains how Christ is simultaneously fully God and fully man without confusion or division.',
      exampleJapanese: '位格的結合は、キリストが混同も分離もなく真の神であり真の人であられる神秘を解明する。',
      scriptureReference: 'Colossians 2:9'
    },
    {
      id: 'c2-v-perspicuity',
      word: 'perspicuity',
      level: 'c2',
      phoneticIpa: '/ˌpɜːr.spɪˈkjuː.ə.ti/',
      partOfSpeech: 'noun',
      japaneseMeaning: '明瞭性、聖書の救いに関する教えが平明明瞭であること',
      exampleSentence: 'The perspicuity of Scripture assures the humblest believer that the way of salvation is unmistakably clear.',
      exampleJapanese: '聖書の明瞭性は、もっとも素朴な信徒に対しても救いの道が極めて明快であることを保証する。',
      scriptureReference: 'Psalm 119:130'
    },
    {
      id: 'c2-v-antinomy',
      word: 'antinomy',
      level: 'c2',
      phoneticIpa: '/ænˈtɪn.ə.mi/',
      partOfSpeech: 'noun',
      japaneseMeaning: '二律背反、人知では両立し難く見えるが神において調和する二つの真理',
      exampleSentence: 'Divine sovereignty and human responsibility constitute a biblical antinomy, held in perfect divine tension.',
      exampleJapanese: '神の絶対主権と人間の応答責任は聖書的二律背反をなし、神の御心において完全に調和している。',
      scriptureReference: 'Acts 2:23'
    },
    {
      id: 'c2-v-pleroma',
      word: 'pleroma',
      level: 'c2',
      phoneticIpa: '/plɪˈroʊ.mə/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'プレローマ、神性の完全なる充実・充満',
      exampleSentence: 'In Him dwells all the pleroma of the divine nature in bodily form.',
      exampleJapanese: 'キリストのうちにこそ、神性のすべての充実（プレローマ）が宿っている。',
      scriptureReference: 'Colossians 2:9'
    },
    {
      id: 'c2-v-teleological',
      word: 'teleological',
      level: 'c2',
      phoneticIpa: '/ˌtiː.li.əˈlɑː.dʒɪ.kəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '目的論的な、宇宙と救済史が究極の神の目標へ向かっていることに関する',
      exampleSentence: 'Redemptive history possesses a magnificent teleological thrust toward the consummation of all things in Christ.',
      exampleJapanese: '救済史は、キリストにおける万物の完成へ向かう壮大な目的論的推進力を宿している。',
      scriptureReference: 'Ephesians 1:10'
    },
    {
      id: 'c2-v-sacerdotal',
      word: 'sacerdotal',
      level: 'c2',
      phoneticIpa: '/ˌsæs.ərˈdoʊ.təl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '祭司職の、大祭司としての仲介奉仕に関する',
      exampleSentence: 'Christ fulfills every sacerdotal type and shadow through His eternal high priesthood.',
      exampleJapanese: 'キリストはその永遠の大祭司職を通じて、あらゆる旧約の祭司的予型と影を完成された。',
      scriptureReference: 'Hebrews 7:24'
    },
    {
      id: 'c2-v-supernal',
      word: 'supernal',
      level: 'c2',
      phoneticIpa: '/suːˈpɜːr.nəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '天上の、天上界の、至高の神聖さに属する',
      exampleSentence: 'The supernal glory of the New Jerusalem descends adorned as a bride for her husband.',
      exampleJapanese: '天上の栄光に満ちた新しいエルサレムは、夫のために飾られた花嫁のように降りてくる。',
      scriptureReference: 'Revelation 21:2'
    },
    {
      id: 'c2-v-ontological',
      word: 'ontological',
      level: 'c2',
      phoneticIpa: '/ˌɑːn.təˈlɑː.dʒɪ.kəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '存在論的な、神の本質的実在に関する',
      exampleSentence: 'The ontological Trinity refers to the eternal, internal relations of the Godhead regardless of creation.',
      exampleJapanese: '存在論的三位一体とは、創造とは無関係な神格内在の永遠にして内的な関係性を指す。',
      scriptureReference: 'John 1:1'
    },
    {
      id: 'c2-v-vicarious',
      word: 'vicarious',
      level: 'c2',
      phoneticIpa: '/vaɪˈkɛr.i.əs/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '身代わりの、代理的な、他者のための代償としての',
      exampleSentence: 'Christ endured the vicarious penalty of sin on behalf of all who believe.',
      exampleJapanese: 'キリストは信じるすべての者のために、身代わりの罪の刑罰を耐え忍ばれた。',
      scriptureReference: '1 Peter 2:24'
    },
    {
      id: 'c2-v-primordial',
      word: 'primordial',
      level: 'c2',
      phoneticIpa: '/praɪˈmɔːr.di.əl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '始原の、世界の起源における、原始の',
      exampleSentence: 'Out of primordial void and darkness, God spoke the cosmos into order and splendor.',
      exampleJapanese: '始原の空虚と闇の中から、神は語りかけて宇宙を秩序と輝きへと導かれた。',
      scriptureReference: 'Genesis 1:2'
    },
    {
      id: 'c2-v-superscription',
      word: 'superscription',
      level: 'c2',
      phoneticIpa: '/ˌsuː.pərˈskrɪp.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '罪状書き、十字架の上に掲げられた罪名告知文',
      exampleSentence: 'And the superscription of His accusation was written over: THE KING OF THE JEWS.',
      exampleJapanese: '罪状書きには「ユダヤ人の王」と書かれていた。',
      scriptureReference: 'Mark 15:26'
    },
    {
      id: 'c2-v-quintessential',
      word: 'quintessential',
      level: 'c2',
      phoneticIpa: '/ˌkwɪn.təˈsɛn.ʃəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '真髄の、最も典型的な本質を表す',
      exampleSentence: 'Self-sacrificial love is the quintessential characteristic of the true Christian disciple.',
      exampleJapanese: '自己犠牲的な愛こそは、真のキリストの弟子たる者の真髄たる特質である。',
      scriptureReference: 'John 13:35'
    },
    {
      id: 'c2-v-anathema',
      word: 'anathema',
      level: 'c2',
      phoneticIpa: '/əˈnæθ.ə.mə/',
      partOfSpeech: 'noun',
      japaneseMeaning: '呪われるべきもの、神の断罪により聖所から追放されたもの',
      exampleSentence: 'If anyone preaches to you a gospel contrary to the one you received, let him be anathema.',
      exampleJapanese: 'あなたがたが受けたものとは異なる福音を告げる者があるなら、その者は呪われるべきである。',
      scriptureReference: 'Galatians 1:9'
    },
    {
      id: 'c2-v-supralapsarian',
      word: 'supralapsarian',
      level: 'c2',
      phoneticIpa: '/ˌsuː.prə.læpˈsɛr.i.ən/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '堕落前予定説の、堕落の許容に先立って選びを置く神学体系に関する',
      exampleSentence: 'Supralapsarian theology considers God\'s election of the redeemed as prior in logical order to the decree of the Fall.',
      exampleJapanese: '堕落前予定説の神学は、救済の選びを堕落の布告よりも論理的に先立つものとみなす。',
      scriptureReference: 'Ephesians 1:4'
    },
    {
      id: 'c2-v-circumscription',
      word: 'circumscription',
      level: 'c2',
      phoneticIpa: '/ˌsɜːr.kəmˈskrɪp.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '限界画定、空間的境界による限定（神格の無境界性と対照）',
      exampleSentence: 'The infinite God dwells without circumscription, beyond all spatial containment.',
      exampleJapanese: '無限の神はいかなる空間的限定（画定）もなく、被造世界の枠を超えて住まわれる。',
      scriptureReference: '1 Kings 8:27'
    },
    {
      id: 'c2-v-beatitude',
      word: 'beatitude',
      level: 'c2',
      phoneticIpa: '/biˈæt.ɪ.tuːd/',
      partOfSpeech: 'noun',
      japaneseMeaning: '至福、神の恵みによる最高の霊的幸い',
      exampleSentence: 'The beatitudes of Christ inaugurate the counter-cultural values of the Kingdom of Heaven.',
      exampleJapanese: 'キリストの至福の宣言は、天の御国の逆説的価値体系を告知する。',
      scriptureReference: 'Matthew 5:3'
    },
    {
      id: 'c2-v-concurrence',
      word: 'concurrence',
      level: 'c2',
      phoneticIpa: '/kənˈkɜːr.əns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '神的所有と被造的作用の協調（神的随伴作用）',
      exampleSentence: 'Divine concurrence upholds secondary causes without extinguishing human free agency.',
      exampleJapanese: '神の協調作用は、人間の自発的責任を奪うことなく、被造世界の因果関係を維持する。',
      scriptureReference: 'Philippians 2:12-13'
    },
    {
      id: 'c2-v-impassibility',
      word: 'impassibility',
      level: 'c2',
      phoneticIpa: '/ɪmˌpæs.əˈbɪl.ə.ti/',
      partOfSpeech: 'noun',
      japaneseMeaning: '無受苦性、神の本質が外部の力によって強制的に動揺させられないこと',
      exampleSentence: 'The impassibility of God underscores that His eternal joy and peace cannot be diminished by external forces.',
      exampleJapanese: '神の無受苦性は、その永遠の喜びと平安が外的な力によって損なわれないことを強調する。',
      scriptureReference: 'Malachi 3:6'
    },
    {
      id: 'c2-v-interposition',
      word: 'interposition',
      level: 'c2',
      phoneticIpa: '/ˌɪn.tər.pəˈzɪʃ.ən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '間への介入、仲保者としての身の差し挟み',
      exampleSentence: 'By the gracious interposition of Christ between holy wrath and guilty man, reconciliation was effected.',
      exampleJapanese: '聖なる義の怒りと有罪の人間との間にキリストが身を差し挟んでくださったことにより、和解が成就した。',
      scriptureReference: '1 Timothy 2:5'
    },
    {
      id: 'c2-v-chiliastic',
      word: 'chiliastic',
      level: 'c2',
      phoneticIpa: '/ˌkɪl.iˈæs.tɪk/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '千年王国説の、キリストの地上千年統治に関する',
      exampleSentence: 'Chiliastic interpretations of Revelation foresee a literal thousand-year reign of righteousness upon earth.',
      exampleJapanese: '千年王国説的解釈は、地上における千年の文字通りの義の統治を展望する。',
      scriptureReference: 'Revelation 20:4'
    },
    {
      id: 'c2-v-reprobation',
      word: 'reprobation',
      level: 'c2',
      phoneticIpa: '/ˌrɛp.rəˈbeɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '遺棄、神が不信者をその罪のままに任せおかれる公義の決定',
      exampleSentence: 'Reverently theologians distinguish between the decree of election and the sober decree of reprobation.',
      exampleJapanese: '神学者たちは敬虔な畏れをもって、恵みの選びの定めと遺棄の厳粛な定めを峻別する。',
      scriptureReference: 'Romans 9:18'
    },
    {
      id: 'c2-v-numinous',
      word: 'numinous',
      level: 'c2',
      phoneticIpa: '/ˈnuː.mɪ.nəs/',
      partOfSpeech: 'adjective',
      japaneseMeaning: 'ヌミノーゼの、人智を超えた聖なる畏怖を呼び起こす',
      exampleSentence: 'The cloud that filled Solomon\'s temple carried a numinous atmosphere of divine majesty.',
      exampleJapanese: 'ソロモンの神殿を満たした雲は、神の威光のヌミノーゼ（聖なる畏怖）を漂わせていた。',
      scriptureReference: '1 Kings 8:10-11'
    },
    {
      id: 'c2-v-pneumatology',
      word: 'pneumatology',
      level: 'c2',
      phoneticIpa: '/ˌnuː.məˈtɑː.lə.dʒi/',
      partOfSpeech: 'noun',
      japaneseMeaning: '聖霊論、聖霊の位格と御業に関する神学',
      exampleSentence: 'Biblical pneumatology illuminates the Spirit\'s work in regeneration, conviction, and sanctification.',
      exampleJapanese: '聖書的聖霊論は、新生、罪の自覚、そして聖化における聖霊の御業を照らし出す。',
      scriptureReference: 'John 16:8-14'
    },
    {
      id: 'c2-v-christophany',
      word: 'christophany',
      level: 'c2',
      phoneticIpa: '/krɪsˈtɑː.fə.ni/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'キリスト顕現、旧約時代における受肉前のキリストの一時的顕現',
      exampleSentence: 'The appearance of the Commander of the Lord\'s army to Joshua was interpreted as a pre-incarnate christophany.',
      exampleJapanese: 'ヨシュアに現れた主の軍の将の姿は、受肉前のキリスト顕現と解釈された。',
      scriptureReference: 'Joshua 5:13-15'
    },
    {
      id: 'c2-v-apotheosis',
      word: 'apotheosis',
      level: 'c2',
      phoneticIpa: '/əˌpɑː.θiˈoʊ.sɪs/',
      partOfSpeech: 'noun',
      japaneseMeaning: '神格化、理想化の極致（キリストの永遠の神性と対比される概念）',
      exampleSentence: 'Christ\'s divinity was no human apotheosis, but the eternal manifestation of the uncreated God.',
      exampleJapanese: 'キリストの神性は人間的神格化ではなく、非造物なる神の永遠の顕現であった。',
      scriptureReference: 'Philippians 2:6'
    }
  ],
  readings: [
  {
    "id": "c2-reading-ephesians-praise",
    "level": "c2",
    "title": "Chosen in Christ Before the Foundation of the World (Ephesians 1:3–10)",
    "source": "Ephesians 1:3–10",
    "passage": "Praise be to the God and Father of our Lord Jesus Christ, who has blessed us in the heavenly realms with every spiritual blessing in Christ. For He chose us in Him before the creation of the world to be holy and blameless in His sight. In love He predestined us for adoption to sonship through Jesus Christ, in accordance with His pleasure and will—to the praise of His glorious grace, which He has freely given us in the One He loves. In Him we have redemption through His blood, the forgiveness of sins, in accordance with the riches of God’s grace that He lavished on us. With all wisdom and understanding, He made known to us the mystery of His will according to His good pleasure, which He purposed in Christ, to be put into effect when the times reach their fulfillment—to bring unity to all things in heaven and on earth under Christ.",
    "passageJapanese": "私たちの主イエス・キリストの父なる神がほめたたえられますように。神はキリストにあって、天の領域にあるすべての霊的祝福をもって私たちを祝福してくださいました。神は、私たちが御前に聖なる、傷のない者となるように、天地創造の前からキリストにおいて私たちをお選びになったのです。神は愛をもって、みこころの良しとされるところに従い、イエス・キリストによって私たちをご自身の子とするようあらかじめ定めておられました。それは、愛する御子にあって惜しみなく与えてくださった、栄光ある恵みがほめたたえられるためです。私たちはこの御子にあって、その血による贖い、すなわち過ちの赦しを受けています。これは、神が私たちの上に豊かにあふれさせた恵みの富によるものです。神はあらゆる知恵と分別をもって、みこころの奥義を私たちに知らせてくださいました。それは、時が満ちるに及んで実現されるご計画であり、天にあるものも地にあるものも、すべてのものをキリストにあって一つに統合することでした。",
    "sentencePairs": [
      {
        "english": "Praise be to the God and Father of our Lord Jesus Christ, who has blessed us in the heavenly realms with every spiritual blessing in Christ.",
        "japanese": "私たちの主イエス・キリストの父なる神がほめたたえられますように。神はキリストにあって、天にあるすべての霊的祝福をもって私たちを祝福してくださいました。"
      },
      {
        "english": "For He chose us in Him before the creation of the world to be holy and blameless in His sight.",
        "japanese": "神は、私たちが御前に聖なる、傷のない者となるように、世界の基の置かれる前から、キリストのうちに私たちをお選びになったのです。"
      },
      {
        "english": "In love He predestined us for adoption to sonship through Jesus Christ, in accordance with His pleasure and will—to the praise of His glorious grace, which He has freely given us in the One He loves.",
        "japanese": "神は愛をもって、みこころの善しとするところに従い、イエス・キリストを通して私たちをご自身の子とすることをあらかじめ定められ、それは栄光に満ちた恵みを賛美するためでした。"
      },
      {
        "english": "In Him we have redemption through His blood, the forgiveness of sins, in accordance with the riches of God’s grace that He lavished on us.",
        "japanese": "私たちはこの御子にあって、その血による贖い、すなわち過ちの赦しを受けています。これは、神が私たちの上に惜しみなく注ぎあふれさせた恵みの富によるものです。"
      },
      {
        "english": "With all wisdom and understanding, He made known to us the mystery of His will according to His good pleasure, which He purposed in Christ, to be put into effect when the times reach their fulfillment—to bring unity to all things in heaven and on earth under Christ.",
        "japanese": "神はあらゆる知恵と分別をもって、みこころの奥義を私たちに示されました。それは時が満ちて成就するご計画、すなわち天にあるもの地にあるものすべてのものをキリストのもとに統合することでした。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "When did God choose believers in Christ according to Ephesians 1:4?",
        "options": [
          "Before the creation of the world",
          "After their baptism",
          "When they became wise",
          "During the exile in Babylon"
        ],
        "answerIndex": 0,
        "explanationJa": "「before the creation of the world（世界の基が置かれる前から）」と記されています。"
      }
    ]
  },
  {
    "id": "c2-reading-revelation-new-creation",
    "level": "c2",
    "title": "A New Heaven and a New Earth (Revelation 21:1–7)",
    "source": "Revelation 21:1–7",
    "passage": "Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away, and there was no longer any sea. I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband. And I heard a loud voice from the throne saying, \"Look! God’s dwelling place is now among the people, and He will dwell with them. They will be His people, and God Himself will be with them and be their God.\" He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away. He who was seated on the throne said, \"I am making everything new!\" Then He said, \"Write this down, for these words are trustworthy and true.\" He said to me: \"It is done. I am the Alpha and the Omega, the Beginning and the End.\"",
    "passageJapanese": "それから私は、新しい天と新しい地を見た。以前の天と以前の地は過ぎ去り、もはや海もない。私はまた、聖なる都、新しいエルサレムが、夫のために美しく装った花嫁のように整えられて、神のみもとから、天から下って来るのを見た。私は御座から大きな声が叫ぶのを聞いた。「見よ、神の幕屋が人々の間にある。神は人々と共に住み、人々は神の民となり、神ご自身が彼らと共におられて、彼らの神となられる。」神は彼らの目から涙をことごとくぬぐい取ってくださる。もはや死はなく、悲しみも、叫びも、苦しみもない。以前の秩序が過ぎ去ったからである。御座に着いておられる方が言われた。「見よ、わたしはすべてを新しくする。」また言われた。「書き記せ。これらのことばは信ずべきものであり、真実である。」また私に言われた。「事は成就した。わたしはアルファでありオメガである。初めであり終わりである。」",
    "sentencePairs": [
      {
        "english": "Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away, and there was no longer any sea.",
        "japanese": "それから私は新しい天と新しい地を見た。以前の天と以前の地は去り、海もはや存在しなかった。"
      },
      {
        "english": "I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband.",
        "japanese": "私は聖なる都新しいエルサレムが、花婿のために美しく装われた花嫁のように整えられて天から降るのを見た。"
      },
      {
        "english": "And I heard a loud voice from the throne saying, \"Look! God’s dwelling place is now among the people, and He will dwell with them. They will be His people, and God Himself will be with them and be their God.\"",
        "japanese": "御座から響く大声を聞いた。「見よ、神の幕屋が人の間にあり、神は共に住み、彼らは神の民となり、神ご自身が彼らの神となられる。」"
      },
      {
        "english": "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
        "japanese": "神は彼らの目からすべての涙をぬぐい去られ、もはや死はなく、悲嘆も叫喚も苦痛もなく、旧き秩序は過ぎ去ったからである。"
      },
      {
        "english": "He who was seated on the throne said, \"I am making everything new!\" Then He said, \"Write this down, for these words are trustworthy and true.\"",
        "japanese": "御座に着かれた方が言われた。「見よ、わたしは万物を新しくする。書き記せ、これらの言葉は確実で真実である。」"
      },
      {
        "english": "He said to me: \"It is done. I am the Alpha and the Omega, the Beginning and the End.\"",
        "japanese": "そして言われた、「事は成就した。わたしはアルファでありオメガ、初めであり終わりである。」"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "What will happen to death and pain in the new creation?",
        "options": [
          "There will be no more death or pain",
          "They will increase",
          "Only kings will avoid pain",
          "They are postponed"
        ],
        "answerIndex": 0,
        "explanationJa": "「There will be no more death or mourning or crying or pain」と宣言されています。"
      }
    ]
  }
]
};
