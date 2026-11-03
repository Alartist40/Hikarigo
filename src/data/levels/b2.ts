import { LevelData } from '../types';

export const b2Data: LevelData = {
  meta: {
    id: 'b2',
    name: 'Level B2',
    japaneseName: '中上級・預言と使徒書簡',
    cefr: 'B2',
    ielts: 'IELTS 6.0–6.5',
    descriptionJa: '仮定法過去完了、否定語句前置倒置、混合仮定法、同格that節、分裂文、独立分詞構文と神学的論証。',
    scriptureThemeJa: 'ヘブル書・エペソ人への手紙「信仰の英雄たち」',
    badgeColor: 'var(--level-b2)',
    depthColor: 'var(--level-b2)'
  },
  grammar: [
    {
      id: 'b2-third-conditional',
      level: 'b2',
      title: 'Third Conditional (If + had p.p., would have p.p.) — 過去の反実仮想',
      japaneseMeaning: 'もし（あの時）〜であったならば、…であっただろうに',
      structureFormula: 'If + Subject + had + p.p., Subject + would / could / might + have + p.p.',
      explanationJa: '過去の歴史的事実に反する仮定を立て、その結果を推し量る構文です。マルタがイエスに語った痛切な告白や、十字架の神秘的知恵を弁証する際に現れます。',
      scriptureCitation: 'John 11:21, 1 Corinthians 2:8',
      examples: [
        {
          english: 'Lord, if You had been here, my brother would not have died.',
          japanese: '主よ、もしあなたがここにおられたなら、私の兄弟は死ななかったでしょうに。',
          scriptureRef: 'John 11:21'
        },
        {
          english: 'None of the rulers of this age understood it, for if they had, they would not have crucified the Lord of glory.',
          japanese: 'この世の支配者たちは誰一人この知恵を悟らなかった。もし悟っていたなら、栄光の主を十字架につけはしなかったであろう。',
          scriptureRef: '1 Corinthians 2:8'
        },
        {
          english: 'If they had known what was to come, they would have prepared their hearts.',
          japanese: 'もし来たるべきことを知っていたなら、彼らは自らの心を整えていただろうに。',
          scriptureRef: 'Matthew 24:43'
        }
      ],
      notesJa: 'If節の had + p.p. に対して、主節は would have + p.p. の形をとります。過去の取り返しのつかない事象を反省・考察する際に必須の表現です。',
      miniQuiz: [
        {
          question: 'If the Lord had not been our help, our soul _____ soon dwelt in the silence of death.',
          options: ['would have', 'will have', 'had', 'was'],
          answerIndex: 0,
          explanationJa: '仮定法過去完了の帰結節なので「would have dwelt」が正解です（詩篇94:17）。'
        }
      ]
    },
    {
      id: 'b2-negative-inversion',
      level: 'b2',
      title: 'Inversion after Negative Adverbs (Never, Seldom, Not only) — 倒置による厳粛なる強調',
      japaneseMeaning: '決して〜ない・〜ばかりでなく…も',
      structureFormula: 'Negative Adverb (Never / Seldom / Nor / Not only) + Auxiliary / be + Subject + Verb...',
      explanationJa: '否定の副詞句を文頭に配置し、その直後を「助動詞・be動詞＋主語」の疑問文の語順（倒置）にすることで、宣言に荘厳な緊張感と絶対的な強調を与える古典的修辞技法です。',
      scriptureCitation: 'Psalm 121:4, 1 Kings 8:27, Romans 8:32',
      examples: [
        {
          english: 'Never will I leave you; never will I forsake you.',
          japanese: 'わたしは決してあなたを離れず、決してあなたを見捨てない。',
          scriptureRef: 'Hebrews 13:5'
        },
        {
          english: 'Behold, He who watches over Israel will neither slumber nor will He sleep.',
          japanese: '見よ、イスラエルを守る方はまどろむこともなく、眠ることもない。',
          scriptureRef: 'Psalm 121:4'
        },
        {
          english: 'Not only does God forgive our sins, but He also cleanses us from all unrighteousness.',
          japanese: '神は私たちの罪を赦してくださるだけでなく、すべての不正から私たちを清めてくださる。',
          scriptureRef: '1 John 1:9'
        }
      ],
      notesJa: '文頭に Never, Rarely, Seldom, Nor, Neither, Under no circumstances, Not only が現れた場合、直後は必ず「助動詞＋主語」の倒置になります。',
      miniQuiz: [
        {
          question: 'No longer _____ they hunger, nor shall they thirst any more.',
          options: ['shall', 'they shall', 'did they', 'they did'],
          answerIndex: 0,
          explanationJa: '否定詞 No longer が文頭にあるため、助動詞が先行する倒置形「shall they」が正解です（黙示録7:16）。'
        }
      ]
    },
    {
      id: 'b2-mixed-conditionals',
      level: 'b2',
      title: 'Mixed Conditionals (Past Cause, Present Result) — 過去の恩寵と現在の実在',
      japaneseMeaning: 'もし過去に〜していなかったら、今ごろ…だろうに',
      structureFormula: 'If + Subject + had + p.p., Subject + would + Base Verb (now)',
      explanationJa: '過去の出来事が原因となり、現在の状態に影響を及ぼしていることを表す仮定法です。神が過去にキリストを遣わされた救済の事実が、今の私たちの身分を保証している教理的言明に用いられます。',
      scriptureCitation: 'Romans 11:6, Hebrews 11:15',
      examples: [
        {
          english: 'If grace had not preceded our calling, we would still be trapped in our trespasses today.',
          japanese: 'もし恵みが私たちの召命に先立っていなかったなら、私たちは今日もなお過ちの中に閉じ込められていただろう。',
          scriptureRef: 'Ephesians 2:4-5'
        },
        {
          english: 'If they had been thinking of that land from which they had gone out, they would have opportunity to return.',
          japanese: 'もし彼らが出て来た故郷の地を思っていたなら、帰る機会はあったでしょう。',
          scriptureRef: 'Hebrews 11:15'
        },
        {
          english: 'If Christ had not been raised, your faith would be futile right now.',
          japanese: 'もしキリストがよみがえらなかったとすれば、あなたがたの信仰は今や無益なものとなっているはずです。',
          scriptureRef: '1 Corinthians 15:17'
        }
      ],
      notesJa: 'If節が had + p.p.（過去の反実）であるのに対し、主節は would + 原形（現在の反実）となり、時制が交差します。',
      miniQuiz: [
        {
          question: 'If the Lord had not chosen us, we _____ without hope in the world today.',
          options: ['would be', 'would have been', 'will be', 'are'],
          answerIndex: 0,
          explanationJa: '「今日（today）希望のない者であるだろう」という現在の帰結なので「would be」が正解です。'
        }
      ]
    },
    {
      id: 'b2-cleft-sentences',
      level: 'b2',
      title: 'Wh- and It- Cleft Sentences (What He did was...) — 分裂文と主題化',
      japaneseMeaning: '〜なのは…である（特定の要素を強調する構文）',
      structureFormula: 'It is / was + Emphasized Element + that / who... // What + Subject + Verb + is / was...',
      explanationJa: '文の特定の要素（主語、目的語、副詞句など）を抜き出し、It is ... that や What ... is で挟むことで、他の何物でもなくそれこそが核心であると力説する構文です。',
      scriptureCitation: 'John 13:7, 1 Corinthians 15:10, Mark 14:8',
      examples: [
        {
          english: 'It was by grace that you were saved, through faith—and this is not from yourselves.',
          japanese: 'あなたがたが救われたのは、他ならぬ恵みによるのであり、信仰によるのです。それは自分から出たことではありません。',
          scriptureRef: 'Ephesians 2:8'
        },
        {
          english: 'What I am doing you do not understand now, but afterward you will understand.',
          japanese: 'わたしがしていることを、あなたは今悟らないが、後になって悟るようになります。',
          scriptureRef: 'John 13:7'
        },
        {
          english: 'It is God who works in you both to will and to work for His good pleasure.',
          japanese: 'あなたがたのうちに働いて、志を立てさせ、事を行わせるのは、ほかならぬ神なのです。',
          scriptureRef: 'Philippians 2:13'
        }
      ],
      notesJa: '強調したい語句が人なら that の代わりに who を用いることもできます（It is God who...）。',
      miniQuiz: [
        {
          question: 'It is the truth _____ sets the captive free.',
          options: ['that', 'what', 'whom', 'where'],
          answerIndex: 0,
          explanationJa: 'It is ... that 強調構文なので「that」が適切です。'
        }
      ]
    },
    {
      id: 'b2-complex-passive',
      level: 'b2',
      title: 'Complex Passive with Reporting Verbs (He is said to be...) — 伝聞・推量の客観受動態',
      japaneseMeaning: '〜と言われている・〜であると考えられている',
      structureFormula: 'Subject + is said / known / considered + to + Base Verb / have p.p.',
      explanationJa: '「人々は〜と言っている」という能動態（People say that S + V）を、主語を繰り上げて受動態にする学術的・客観的構文です。教理史や証言の普遍性を述べる際に重宝されます。',
      scriptureCitation: 'Acts 17:18, Hebrews 11:19',
      examples: [
        {
          english: 'He was considered to have offered up his only begotten son in obedience.',
          japanese: 'アブラハムは従順のうちに、そのひとり子を捧げたとみなされた。',
          scriptureRef: 'Hebrews 11:17'
        },
        {
          english: 'Jesus was known to heal all manner of sickness and disease among the people.',
          japanese: 'イエスは民のあらゆる病気やわずらいを癒やされる方として知られていた。',
          scriptureRef: 'Matthew 4:23'
        },
        {
          english: 'He is testified to be a priest forever after the order of Melchizedek.',
          japanese: '彼については、「あなたこそ永遠にメルキゼデクの例による祭司である」と証言されている。',
          scriptureRef: 'Hebrews 7:17'
        }
      ],
      notesJa: '言われている内容が「過去のこと」である場合、完了不定詞 to have + p.p. を配置します（He is said to have risen）。',
      miniQuiz: [
        {
          question: 'Abraham was reckoned _____ been justified by his unwavering faith.',
          options: ['to have', 'to be', 'having', 'for'],
          answerIndex: 0,
          explanationJa: '過去に義と認められた（完了）とみなされたため「to have been」が正解です。'
        }
      ]
    },
    {
      id: 'b2-appositive-that',
      level: 'b2',
      title: 'Appositive That-Clauses (the promise that, the fact that) — 同格名詞節',
      japaneseMeaning: '〜という（約束・事実・希望）',
      structureFormula: 'Abstract Noun (promise / truth / hope / fact / decree) + that + Complete Clause',
      explanationJa: '抽象名詞の具体的な内容を、完全な文（節）を導く that によって等置（同格）する構文です。関係代名詞の that と異なり、thatの後ろは完全な文となります。',
      scriptureCitation: 'Titus 1:2, Romans 8:16',
      examples: [
        {
          english: 'In the hope of eternal life, which God, who cannot lie, promised before the world began.',
          japanese: '偽ることのない神が永遠の昔から約束された、永遠の命の希望に基づいて。',
          scriptureRef: 'Titus 1:2'
        },
        {
          english: 'The Spirit Himself bears witness with our spirit the truth that we are children of God.',
          japanese: '御霊ご自身が、私たちが神の子どもであるという真理を、私たちの霊とともに証ししてくださいます。',
          scriptureRef: 'Romans 8:16'
        },
        {
          english: 'We stand on the solemn promise that He will never leave us nor forsake us.',
          japanese: '主は決して私たちを離れず見捨てないという厳粛な約束の上に、私たちは立っています。',
          scriptureRef: 'Hebrews 13:5'
        }
      ],
      notesJa: 'that節内の文構造に欠落がなく、直前の名詞の意味を「〜という」とそのまま詳述するのが同格の特徴です。',
      miniQuiz: [
        {
          question: 'They were filled with joy at the good news _____ Christ had conquered death.',
          options: ['that', 'which', 'whom', 'where'],
          answerIndex: 0,
          explanationJa: '後ろの文が完全であり、news の内容を述べる同格の接続詞「that」が正解です。'
        }
      ]
    },
    {
      id: 'b2-proportional-clauses',
      level: 'b2',
      title: 'Proportion & Comparison (The more... the more / As... so) — 比例・呼応構文',
      japaneseMeaning: '〜すればするほど、ますます…／〜であるように、そのように…',
      structureFormula: 'The + Comparative..., the + Comparative... // As..., so...',
      explanationJa: '二つの事象の変化が緊密に連動していること、あるいは霊的真理の類似性を明快に対比・呼応させる構文です。アダムとキリストの対比などに多用されます。',
      scriptureCitation: 'Romans 5:18, 2 Corinthians 1:5',
      examples: [
        {
          english: 'For as in Adam all die, so also in Christ shall all be made alive.',
          japanese: 'アダムにあってすべての人が死ぬように、キリストにあってすべての人が生かされるのです。',
          scriptureRef: '1 Corinthians 15:22'
        },
        {
          english: 'For as the sufferings of Christ abound in us, so our consolation also abounds through Christ.',
          japanese: 'キリストの苦難が私たちにあふれているように、私たちの慰めもまたキリストによってあふれているからです。',
          scriptureRef: '2 Corinthians 1:5'
        },
        {
          english: 'The more we behold His glory, the more we are transformed into His image.',
          japanese: '主の栄光を見つめれば見つめるほど、私たちはますます主と同じかたちに変貌していきます。',
          scriptureRef: '2 Corinthians 3:18'
        }
      ],
      notesJa: 'The + 比較級 ..., the + 比較級 ... は語順が「The + 比較級 + S + V」となる点に注意します。',
      miniQuiz: [
        {
          question: 'As high as the heavens are above the earth, _____ great is His mercy toward those who fear Him.',
          options: ['so', 'as', 'more', 'than'],
          answerIndex: 0,
          explanationJa: 'As... so...（〜のように、そのように）の呼応構文なので「so」が正解です（詩篇103:11）。'
        }
      ]
    },
    {
      id: 'b2-correlative-conjunctions',
      level: 'b2',
      title: 'Correlative Conjunctions (Neither... nor, Not only... but, Either... or) — 相関的論証',
      japaneseMeaning: '〜でもなく…でもない・〜のみならず…も',
      structureFormula: 'neither A nor B / not only A but also B / either A or B',
      explanationJa: '二つ以上の要素を厳格に対等の文法形態（並行性・パラレリズム）で結びつける接続詞群です。神の全被造物に対する主権や、一切の分離を否定する教理的断定を形作ります。',
      scriptureCitation: 'Romans 8:38-39, Galatians 1:11-12',
      examples: [
        {
          english: 'For I am persuaded that neither death nor life, nor angels nor principalities, shall be able to separate us from the love of God.',
          japanese: '私は確信しています。死も、命も、御使いも、支配者たちも、私たちを神の愛から引き離すことはできません。',
          scriptureRef: 'Romans 8:38-39'
        },
        {
          english: 'There is neither Jew nor Greek, there is neither slave nor free, for you are all one in Christ Jesus.',
          japanese: 'ユダヤ人もギリシア人もなく、奴隷も自由人もありません。あなたがたはみなキリスト・イエスにあって一つだからです。',
          scriptureRef: 'Galatians 3:28'
        },
        {
          english: 'I received it not from man, nor was I taught it, but I received it through a revelation of Jesus Christ.',
          japanese: '私はそれを人間から受けたのでもなく、教えられたのでもなく、ただイエス・キリストの啓示によって受けたのです。',
          scriptureRef: 'Galatians 1:12'
        }
      ],
      notesJa: 'neither A nor B が主語となる場合、述語動詞は原則として B（動詞に近い方の名詞）の数に一致します。',
      miniQuiz: [
        {
          question: 'Neither height nor depth, nor any other created thing, _____ able to separate us from God.',
          options: ['is', 'are', 'were', 'am'],
          answerIndex: 0,
          explanationJa: '直前の単数名詞 thing に一致して「is able」となります。'
        }
      ]
    },
    {
      id: 'b2-absolute-nominative',
      level: 'b2',
      title: 'Absolute Participial Construction (Noun + Participle) — 独立分詞構文',
      japaneseMeaning: '〜が…である状況で・〜が…されたとき（主語が主節と異なる分詞構文）',
      structureFormula: 'Noun + Present Participle (V-ing) / Past Participle (p.p.), Subject + Verb...',
      explanationJa: '主節の主語と異なる名詞を分詞の直前に残したまま副詞句を形成する構文です。重厚な情景描写や、終末の光景を格調高く描き出す際に使われます。',
      scriptureCitation: 'Romans 8:31, Revelation 1:7',
      examples: [
        {
          english: 'God being our shield, no enemy can prevail against the righteous.',
          japanese: '神が私たちの盾であられる以上、いかなる敵も正しい者に打ち勝つことはできない。',
          scriptureRef: 'Psalm 18:30'
        },
        {
          english: 'Behold, He is coming with the clouds, and every eye will see Him, even those who pierced Him.',
          japanese: '見よ、主は雲とともに来られる。すべての目、主を刺し通した者たちさえも主を見る。',
          scriptureRef: 'Revelation 1:7'
        },
        {
          english: 'The sun having set, they gathered at the gate to hear the words of the prophet.',
          japanese: '日が沈んだので、彼らは預言者の言葉を聞くために門の前に集まった。',
          scriptureRef: 'Nehemiah 8:1'
        }
      ],
      notesJa: '主節の主語と異なる主語が明示されるため、接続詞（Since, When など）を用いた複文と同様の意味を簡潔に表現できます。',
      miniQuiz: [
        {
          question: 'The veil of the temple _____ torn in two, access to the holy place was laid open.',
          options: ['being', 'was', 'is', 'has'],
          answerIndex: 0,
          explanationJa: '独立分詞構文「（神殿の幕が二つに裂かれ）The veil... being torn」が正解です。'
        }
      ]
    },
    {
      id: 'b2-gerund-infinitive-nuances',
      level: 'b2',
      title: 'Subtle Aspect Nuances in Verb Complements — 準動詞の厳密なる語法',
      japaneseMeaning: '〜することを覚えている・〜するために立ち止まる（to不定詞と動名詞の峻別）',
      structureFormula: 'Verb + to-infinitive (未来志向・目的) vs Verb + gerund (過去志向・既成事実)',
      explanationJa: 'remember, forget, stop などの動詞の後ろに to不定詞が来るか動名詞が来るかで、時間軸や意味が劇的に変化します。戒めを「忘れずに実行する」ことと「過去の恵みを覚える」ことの語法を厳密に区別します。',
      scriptureCitation: 'Philippians 3:13, Hebrews 10:26',
      examples: [
        {
          english: 'Forgetting what lies behind and straining forward to what lies ahead, I press on.',
          japanese: '後ろのものを忘れ、前のものに向かって身を伸ばし、目標を目指してひたすら走ります。',
          scriptureRef: 'Philippians 3:13-14'
        },
        {
          english: 'Remember the Sabbath day, to keep it holy.',
          japanese: '安息日を覚えて、これを聖なるものとせよ（忘れずに聖別せよ）。',
          scriptureRef: 'Exodus 20:8'
        },
        {
          english: 'They ceased not to teach and preach Jesus Christ.',
          japanese: '彼らはイエスがキリストであることを教え、宣べることをやめなかった。',
          scriptureRef: 'Acts 5:42'
        }
      ],
      notesJa: 'remember to do は「忘れずに〜する（これから行うこと）」、remember doing は「〜したことを覚えている（過去のこと）」です。',
      miniQuiz: [
        {
          question: 'Do not neglect _____ good and to share with others, for with such sacrifices God is pleased.',
          options: ['to do', 'doing', 'done', 'having done'],
          answerIndex: 0,
          explanationJa: 'これから行うべき義務「善を行うことを怠ってはならない」を表すため「to do」が正解です（ヘブル13:16）。'
        }
      ]
    }
  ],
  vocabulary: [
    {
      id: 'b2-v-justification',
      word: 'justification',
      level: 'b2',
      phoneticIpa: '/ˌdʒʌs.tə.fɪˈkeɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '義認、義と認められること',
      exampleSentence: 'Therefore, since we have been justified through faith, we have peace with God.',
      exampleJapanese: 'こうして私たちは信仰によって義と認められたので、神との平和を持っています。',
      scriptureReference: 'Romans 5:1'
    },
    {
      id: 'b2-v-propitiation',
      word: 'propitiation',
      level: 'b2',
      phoneticIpa: '/prəˌpɪʃ.iˈeɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'なだめの供え物、贖罪の生贄',
      exampleSentence: 'He is the propitiation for our sins, and not for ours only but also for the whole world.',
      exampleJapanese: 'キリストは私たちの罪のための、いや、全世界のためのなだめの供え物です。',
      scriptureReference: '1 John 2:2'
    },
    {
      id: 'b2-v-omniscience',
      word: 'omniscience',
      level: 'b2',
      phoneticIpa: '/ɑːmˈnɪʃ.əns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '全知、神のすべてを知る知恵',
      exampleSentence: 'In His omniscience, God knows the secrets of every human heart.',
      exampleJapanese: '全知なる神は、すべての人間の心の秘密をご存じであられる。',
      scriptureReference: 'Psalm 139:1-4'
    },
    {
      id: 'b2-v-omnipotence',
      word: 'omnipotence',
      level: 'b2',
      phoneticIpa: '/ɑːmˈnɪp.ə.təns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '全能、神の無限なる力',
      exampleSentence: 'The Lord God Omnipotent reigns forever and ever.',
      exampleJapanese: '全能者なる神が世々限りなく統べ治められる。',
      scriptureReference: 'Revelation 19:6'
    },
    {
      id: 'b2-v-omnipresence',
      word: 'omnipresence',
      level: 'b2',
      phoneticIpa: '/ˌɑːm.nɪˈprɛz.əns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '偏在、どこにでも遍くおられること',
      exampleSentence: 'Where can I flee from Your presence? Such is Your omnipresence.',
      exampleJapanese: 'あなたの御前からどこへ逃れられましょう。神の遍在はこのようである。',
      scriptureReference: 'Psalm 139:7'
    },
    {
      id: 'b2-v-imputation',
      word: 'imputation',
      level: 'b2',
      phoneticIpa: '/ˌɪm.pjəˈteɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '転嫁、義の帰属・付与',
      exampleSentence: 'David speaks of the blessing of the one to whom God imputes righteousness apart from works.',
      exampleJapanese: 'ダビデは行いとは別に、神から義を認められる人の幸いを語っている。',
      scriptureReference: 'Romans 4:6'
    },
    {
      id: 'b2-v-predestination',
      word: 'predestination',
      level: 'b2',
      phoneticIpa: '/ˌpriː.dɛs.tɪˈneɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '予定、神の永遠の選びの定め',
      exampleSentence: 'In love He predestined us for adoption as sons through Jesus Christ.',
      exampleJapanese: '神は愛をもって、イエス・キリストによってご自分の子にするよう私たちを予定された。',
      scriptureReference: 'Ephesians 1:5'
    },
    {
      id: 'b2-v-unsearchable',
      word: 'unsearchable',
      level: 'b2',
      phoneticIpa: '/ʌnˈsɜːr.tʃə.bəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '測り知れない、探り尽くせない',
      exampleSentence: 'Oh, the depth of the riches! How unsearchable are His judgments!',
      exampleJapanese: 'ああ、神の知恵と知識の富の深さ。そのさばきはなんと測り知れないことか。',
      scriptureReference: 'Romans 11:33'
    },
    {
      id: 'b2-v-forbearance',
      word: 'forbearance',
      level: 'b2',
      phoneticIpa: '/fɔːrˈbɛr.əns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '忍耐、寛容、刑罰を差し控えること',
      exampleSentence: 'Do you presume on the riches of His kindness and forbearance and patience?',
      exampleJapanese: '神の慈愛と寛容と忍耐の富を軽んじているのですか。',
      scriptureReference: 'Romans 2:4'
    },
    {
      id: 'b2-v-longsuffering',
      word: 'longsuffering',
      level: 'b2',
      phoneticIpa: '/ˈlɔːŋˌsʌf.ər.ɪŋ/',
      partOfSpeech: 'noun',
      japaneseMeaning: '限りない寛容、堪え忍び',
      exampleSentence: 'The fruit of the Spirit is love, joy, peace, longsuffering, kindness.',
      exampleJapanese: '御霊の実は、愛、喜び、平安、寛容、親切です。',
      scriptureReference: 'Galatians 5:22'
    },
    {
      id: 'b2-v-mortification',
      word: 'mortification',
      level: 'b2',
      phoneticIpa: '/ˌmɔːr.tɪ.fɪˈkeɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '罪の情欲の殺滅、肉の欲の制圧',
      exampleSentence: 'If by the Spirit you put to death the deeds of the body, you will live.',
      exampleJapanese: 'もし御霊によってからだの行いを殺すなら、あなたがたは生きます。',
      scriptureReference: 'Romans 8:13'
    },
    {
      id: 'b2-v-regeneration',
      word: 'regeneration',
      level: 'b2',
      phoneticIpa: '/rɪˌdʒɛn.əˈreɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '新生、霊的再生、新しく生まれること',
      exampleSentence: 'He saved us through the washing of regeneration and renewal of the Holy Spirit.',
      exampleJapanese: '神は私たちを、新生の洗いと聖霊の刷新によって救ってくださいました。',
      scriptureReference: 'Titus 3:5'
    },
    {
      id: 'b2-v-piety',
      word: 'piety',
      level: 'b2',
      phoneticIpa: '/ˈpaɪ.ə.ti/',
      partOfSpeech: 'noun',
      japaneseMeaning: '敬虔、敬神、信心深さ',
      exampleSentence: 'Train yourself for godliness and true piety, which holds promise for the life to come.',
      exampleJapanese: '敬虔と真の敬神のために自らを鍛練しなさい。それは来たるべき命の約束を持っています。',
      scriptureReference: '1 Timothy 4:8'
    },
    {
      id: 'b2-v-consecrated',
      word: 'consecrated',
      level: 'b2',
      phoneticIpa: '/ˈkɑːn.səˌkreɪ.tɪd/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '聖別された、奉献された',
      exampleSentence: 'He entered by a new and living way consecrated for us through the veil.',
      exampleJapanese: '垂れ幕を通して私たちのために開いてくださった、新しく生きた聖別された道。',
      scriptureReference: 'Hebrews 10:20'
    },
    {
      id: 'b2-v-apostasy',
      word: 'apostasy',
      level: 'b2',
      phoneticIpa: '/əˈpɑː.stə.si/',
      partOfSpeech: 'noun',
      japaneseMeaning: '背教、信仰からの離脱',
      exampleSentence: 'That day will not come unless the apostasy comes first.',
      exampleJapanese: 'まず背教が起こり、不法の人が現れなければ、その日は来ません。',
      scriptureReference: '2 Thessalonians 2:3'
    },
    {
      id: 'b2-v-stewardship',
      word: 'stewardship',
      level: 'b2',
      phoneticIpa: '/ˈstuː.ərd.ʃɪp/',
      partOfSpeech: 'noun',
      japaneseMeaning: '執事職、管理者としての責務',
      exampleSentence: 'As each has received a gift, use it to serve one another as good stewards of God\'s varied grace.',
      exampleJapanese: 'それぞれが賜物を受けているのですから、神の多様な恵みの良い管理者として仕え合いなさい。',
      scriptureReference: '1 Peter 4:10'
    },
    {
      id: 'b2-v-mediator',
      word: 'mediator',
      level: 'b2',
      phoneticIpa: '/ˈmiː.diˌeɪ.tər/',
      partOfSpeech: 'noun',
      japaneseMeaning: '仲介者、仲保者',
      exampleSentence: 'For there is one God and one Mediator between God and men, the Man Christ Jesus.',
      exampleJapanese: '神は唯一であり、神と人との間の仲保者も唯一、人としてのキリスト・イエスです。',
      scriptureReference: '1 Timothy 2:5'
    },
    {
      id: 'b2-v-remission',
      word: 'remission',
      level: 'b2',
      phoneticIpa: '/rɪˈmɪʃ.ən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '罪の赦免、免除、帳消し',
      exampleSentence: 'Without the shedding of blood there is no remission of sins.',
      exampleJapanese: '血を流すことなしには、罪の赦免はありません。',
      scriptureReference: 'Hebrews 9:22'
    },
    {
      id: 'b2-v-transcendence',
      word: 'transcendence',
      level: 'b2',
      phoneticIpa: '/trænˈsɛn.dəns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '超越性、被造世界を遥かに超えていること',
      exampleSentence: 'The transcendence of God reminds us that His thoughts are far above our thoughts.',
      exampleJapanese: '神の超越性は、その思いが私たちの思いを遥かに超えていることを思い起こさせる。',
      scriptureReference: 'Isaiah 55:9'
    },
    {
      id: 'b2-v-immanence',
      word: 'immanence',
      level: 'b2',
      phoneticIpa: '/ˈɪm.ə.nəns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '内在性、被造世界の中に親しく臨在すること',
      exampleSentence: 'In Him we live and move and have our being; such is divine immanence.',
      exampleJapanese: '私たちは神の中に生き、動き、存在している。これこそ神の内在性である。',
      scriptureReference: 'Acts 17:28'
    },
    {
      id: 'b2-v-dispensation',
      word: 'dispensation',
      level: 'b2',
      phoneticIpa: '/ˌdɪs.pənˈseɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '経綸、神の秩序・経綸の時代',
      exampleSentence: 'As a plan for the fullness of time, to unite all things in Christ in this dispensation.',
      exampleJapanese: '時の満ちる経綸として、天にあるものも地にあるものも、キリストにあって一つに集めるためです。',
      scriptureReference: 'Ephesians 1:10'
    },
    {
      id: 'b2-v-ineffable',
      word: 'ineffable',
      level: 'b2',
      phoneticIpa: '/ɪnˈɛf.ə.bəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '言葉に言い尽くせない、筆舌に尽くしがたい',
      exampleSentence: 'He heard ineffable words, which it is not lawful for a man to utter.',
      exampleJapanese: '彼は言葉では言い表せない、人間が口にしてはならない言葉を聞いた。',
      scriptureReference: '2 Corinthians 12:4'
    },
    {
      id: 'b2-v-edification',
      word: 'edification',
      level: 'b2',
      phoneticIpa: '/ˌɛd.ɪ.fɪˈkeɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '徳を高めること、霊的育成、建徳',
      exampleSentence: 'Let all things be done for building up and edification.',
      exampleJapanese: 'すべてのことを、徳を高めるために行いなさい。',
      scriptureReference: '1 Corinthians 14:26'
    },
    {
      id: 'b2-v-immutability',
      word: 'immutability',
      level: 'b2',
      phoneticIpa: '/ɪˌmjuː.təˈbɪl.ə.ti/',
      partOfSpeech: 'noun',
      japaneseMeaning: '不変性、移り変わりのないこと',
      exampleSentence: 'God desired to show more convincingly the unchangeable character and immutability of His purpose.',
      exampleJapanese: '神はご自分の誓約の不変性を、約束の相続者たちにいっそう明白に示そうと望まれました。',
      scriptureReference: 'Hebrews 6:17'
    },
    {
      id: 'b2-v-concurrence',
      word: 'concurrence',
      level: 'b2',
      phoneticIpa: '/kənˈkɜːr.əns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '神的協調、神の協力作用',
      exampleSentence: 'Divine concurrence sustains all secondary causes throughout creation.',
      exampleJapanese: '神的協調は、創造世界におけるすべての二次的被造因を維持する。',
      scriptureReference: 'Colossians 1:17'
    },
    {
      id: 'b2-v-remnant',
      word: 'remnant',
      level: 'b2',
      phoneticIpa: '/ˈrɛm.nənt/',
      partOfSpeech: 'noun',
      japaneseMeaning: '残りの者、信仰を守り抜いた残余の民',
      exampleSentence: 'Even so then at this present time also there is a remnant according to the election of grace.',
      exampleJapanese: '今も同じように、恵みの選びによって残された者がいます。',
      scriptureReference: 'Romans 11:5'
    },
    {
      id: 'b2-v-vocation',
      word: 'vocation',
      level: 'b2',
      phoneticIpa: '/voʊˈkeɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '召命、天職、神からの呼びかけ',
      exampleSentence: 'Walk worthy of the vocation wherewith you are called.',
      exampleJapanese: 'あなたがたが召されたその召命にふさわしく歩みなさい。',
      scriptureReference: 'Ephesians 4:1'
    },
    {
      id: 'b2-v-chastisement',
      word: 'chastisement',
      level: 'b2',
      phoneticIpa: '/ˈtʃæs.tɪz.mənt/',
      partOfSpeech: 'noun',
      japaneseMeaning: '懲らしめ、訓練としての苦難',
      exampleSentence: 'The chastisement for our peace was upon Him, and by His stripes we are healed.',
      exampleJapanese: '私たちの平安のための懲らしめが彼の上にあり、彼の打たれた傷によって私たちは癒やされた。',
      scriptureReference: 'Isaiah 53:5'
    },
    {
      id: 'b2-v-exaltation',
      word: 'exaltation',
      level: 'b2',
      phoneticIpa: '/ˌɛɡ.zɔːlˈteɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '高挙、最高位への引き上げ、崇高化',
      exampleSentence: 'Therefore God also has highly exalted Him and given Him the name which is above every name.',
      exampleJapanese: 'それゆえ神はキリストを極みまで高く上げ、すべての名にまさる名を与えられました。',
      scriptureReference: 'Philippians 2:9'
    },
    {
      id: 'b2-v-reprobate',
      word: 'reprobate',
      level: 'b2',
      phoneticIpa: '/ˈrɛp.rəˌbeɪt/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '見捨てられた、堕落した、不適格な',
      exampleSentence: 'Examine yourselves as to whether you are in the faith; test yourselves, lest you be reprobate.',
      exampleJapanese: 'あなたがたが信仰にあるかどうか自分を吟味し、自分をためしなさい。不適格であってはなりません。',
      scriptureReference: '2 Corinthians 13:5'
    }
  ],
  readings: [
  {
    "id": "b2-reading-love-complete",
    "level": "b2",
    "title": "The Supremacy of Love (1 Corinthians 13:1–13)",
    "source": "1 Corinthians 13:1–13",
    "passage": "If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal. If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing. If I give all I possess to the poor and give over my body to hardship that I may boast, but do not have love, I gain nothing. Love never fails. But where there are prophecies, they will cease; where there are tongues, they will be stilled; where there is knowledge, it will pass away. For we know in part and we prophesy in part, but when completeness comes, what is in part disappears. And now these three remain: faith, hope and love. But the greatest of these is love.",
    "passageJapanese": "たとえ私が人々の言葉や御使いたちの言葉で語っても、愛がなければ、やかましい鐘や鳴り響くシンバルにすぎません。たとえ私が預言の賜物を持ち、あらゆる奥義とあらゆる知識に通じていても、また山を動かすほどの完全な信仰を持っていても、愛がなければ、無に等しいのです。たとえ私が持っているすべての財産を貧しい人々に施し、誇るために自分のからだを引き渡しても、愛がなければ、何の役にも立ちません。愛は決して滅びることがありません。しかし預言は廃れ、異言はやみ、知識は消え去ります。私たちは部分的に知り、部分的に預言しているにすぎず、完全なものが来るときには部分的なものは廃れます。それゆえ、信仰と希望と愛、これら三つはいつまでも残ります。その中で最も偉大なものは愛です。",
    "sentencePairs": [
      {
        "english": "If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal.",
        "japanese": "たとえ私が人々の言葉や御使いたちの言葉で語ろうとも、愛がなければ、鳴り響く銅鑼や騒がしいシンバルと同じです。"
      },
      {
        "english": "If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing.",
        "japanese": "たとえ預言の賜物を持ち、すべての奥義と知識を極め、山を動かすほどの信仰があっても、愛がなければ無に等しいのです。"
      },
      {
        "english": "If I give all I possess to the poor and give over my body to hardship that I may boast, but do not have love, I gain nothing.",
        "japanese": "全財産を貧しい者に施し、誇るために我が身を引き渡そうとも、愛がなければ何の実益ももたらしません。"
      },
      {
        "english": "Love never fails.",
        "japanese": "愛は決して絶えることがありません。"
      },
      {
        "english": "But where there are prophecies, they will cease; where there are tongues, they will be stilled; where there is knowledge, it will pass away.",
        "japanese": "しかし預言の賜物は終わりを告げ、異言の言葉はやみ、地上の知識もやがて廃れ去ります。"
      },
      {
        "english": "For we know in part and we prophesy in part, but when completeness comes, what is in part disappears.",
        "japanese": "私たちは部分的に知り、部分的に預言しているにすぎず、完全なものが到来するとき、部分的なものは消滅します。"
      },
      {
        "english": "And now these three remain: faith, hope and love. But the greatest of these is love.",
        "japanese": "今やいつまでも残るものは、信仰と、希望と、愛です。そしてその中で最も大いなるものは愛です。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "Which is the greatest among faith, hope, and love?",
        "options": [
          "Love",
          "Prophecy",
          "Knowledge",
          "Fame"
        ],
        "answerIndex": 0,
        "explanationJa": "「the greatest of these is love（その中で最も大いなるものは愛）」と結ばれています。"
      }
    ]
  },
  {
    "id": "b2-reading-conquerors",
    "level": "b2",
    "title": "More Than Conquerors (Romans 8:31–39)",
    "source": "Romans 8:31–39",
    "passage": "What, then, shall we say in response to these things? If God is for us, who can be against us? He who did not spare His own Son, but gave Him up for us all—how will He not also, along with Him, graciously give us all things? Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword? No, in all these things we are more than conquerors through Him who loved us. For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
    "passageJapanese": "では、これらのことについて、私たちは何と言ったらよいでしょう。神が私たちの味方であるなら、だれが私たちに敵対できるでしょう。ご自分の御子をさえ惜しまずに、私たちすべてのために死に渡された神が、どうして御子とともにすべてのものを私たちに恵んでくださらないことがありましょうか。だれが、私たちをキリストの愛から引き離すことができるでしょう。苦難か、苦悩か、迫害か、飢えか、裸か、危険か、剣でしょうか。いいえ、これらすべてのことにおいて、私たちを愛してくださった方によって、私たちは圧倒的な勝利者となるのです。なぜなら私は確信しているからです。死もいのちも、御使いも支配者も、今あるものも来たるべきものも、力あるものも、高い所にあるものも深い所にあるものも、また他のいかなる被造物も、私たちの主キリスト・イエスにある神の愛から、私たちを引き離すことはできないのです。",
    "sentencePairs": [
      {
        "english": "What, then, shall we say in response to these things? If God is for us, who can be against us?",
        "japanese": "では、これらのことに対して何と言いましょうか。神が味方であるなら、だれが敵対できましょうか。"
      },
      {
        "english": "He who did not spare His own Son, but gave Him up for us all—how will He not also, along with Him, graciously give us all things?",
        "japanese": "ご自身の御子をさえ惜しまず私たちのために引き渡された神が、御子とともにあらゆる恵みを与えてくださらないことがありましょうか。"
      },
      {
        "english": "Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword?",
        "japanese": "だれが私たちをキリストの愛から引き離せましょうか。苦難、艱難、迫害、飢餓、赤裸、危険、あるいは剣でしょうか。"
      },
      {
        "english": "No, in all these things we are more than conquerors through Him who loved us.",
        "japanese": "断じて否。これらすべてのことの中で、私たちを愛してくださった方によって、私たちは圧倒的な勝利者となります。"
      },
      {
        "english": "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
        "japanese": "私は確信します。死も生も、天使も権威も、現在も未来も、高みも深みも、いかなる被造物も、主キリスト・イエスにある神の愛から私たちを引き離すことはできません。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "What makes believers \"more than conquerors\" through hardships?",
        "options": [
          "Him who loved us",
          "Military armies",
          "Financial superiority",
          "Ancient philosophy"
        ],
        "answerIndex": 0,
        "explanationJa": "「through Him who loved us（私たちを愛してくださった方によって）」圧倒的勝利者となると明言されています。"
      }
    ]
  },
  {
    "id": "b2-reading-grace",
    "level": "b2",
    "title": "Saved by Grace Through Faith (Ephesians 2:4–10)",
    "source": "Ephesians 2:4–10",
    "passage": "Because of His great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved. And God raised us up with Christ and seated us with Him in the heavenly realms in Christ Jesus. For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast. For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
    "passageJapanese": "しかし、憐れみ豊かな神は、私たちを愛してくださったその大きな愛のゆえに、過ちの中に死んでいた私たちをキリストとともに生かしてくださいました。あなたがたが救われたのは恵みによるのです。神はキリスト・イエスにおいて、私たちをキリストとともによみがえらせ、天の領域でともに座に着かせてくださいました。あなたがたは、恵みのゆえに、信仰によって救われたのです。それはあなたがたから出たことではなく、神の賜物です。行いによるのではありません。だれも誇ることがないためです。私たちは神の作品であって、良い行いをするためにキリスト・イエスにおいて造られたのです。神は私たちが良い行いに歩むように、それらをあらかじめ備えてくださいました。",
    "sentencePairs": [
      {
        "english": "Because of His great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.",
        "japanese": "憐れみ豊かな神は、深い愛のゆえに、罪の中に死んでいた私たちをキリストとともに生かしてくださいました。恵みによって救われたのです。"
      },
      {
        "english": "And God raised us up with Christ and seated us with Him in the heavenly realms in Christ Jesus.",
        "japanese": "神はキリストとともに私たちを復活させ、天の領域においてキリスト・イエスとともに座に着かせてくださいました。"
      },
      {
        "english": "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
        "japanese": "あなたがたは恵みのゆえに信仰によって救われたのです。それは自分発ではなく神の賜物であり、行いによるのではなく誰も誇ることはできません。"
      },
      {
        "english": "For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
        "japanese": "私たちは神の至高の工芸品（ポイエーマ）であり、あらかじめ神が整えられた善き業を歩むため、キリスト・イエスにあって造られたのです。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "Why is salvation described as a gift rather than by works?",
        "options": [
          "So that no one can boast",
          "Because works are illegal",
          "Because it costs money",
          "To make people passive"
        ],
        "answerIndex": 0,
        "explanationJa": "「not by works, so that no one can boast（誰も誇ることがないため）」が明示された理由です。"
      }
    ]
  }
]
};
