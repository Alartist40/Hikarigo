import { LevelData } from '../types';

export const a1Data: LevelData = {
  meta: {
    id: 'a1',
    name: 'Level A1',
    japaneseName: '入門・光の基礎',
    cefr: 'A1',
    ielts: 'IELTS 3.0–3.5',
    descriptionJa: '英語の根幹をなすbe動詞、存在構文、基本代名詞、時制の初歩と敬虔な祈りの表現。',
    scriptureThemeJa: '創世記「光あれ」・詩篇23篇',
    badgeColor: 'var(--level-a1)',
    depthColor: 'var(--level-a1)'
  },
  grammar: [
    {
      id: 'a1-be-verbs',
      level: 'a1',
      title: 'Be-verbs (am / is / are) — 存在と属性の宣言',
      japaneseMeaning: '〜である・〜に存在する',
      structureFormula: 'Subject + am / is / are + Noun / Adjective / Prepositional Phrase',
      explanationJa: 'be動詞は主語と補語を結び、「本質・身元・性質・居場所」を指し示します。聖書では神の属性や信徒のアイデンティティを告げる最重要表現です。主語の人称と数によって am, is, are を使い分けます。',
      scriptureCitation: '1 John 1:5, Psalm 23:1, Matthew 5:14',
      examples: [
        {
          english: 'God is light, and in Him is no darkness at all.',
          japanese: '神は光であり、神にはいかなる暗やみもありません。',
          scriptureRef: '1 John 1:5'
        },
        {
          english: 'The Lord is my shepherd; I shall not want.',
          japanese: '主は私の羊飼い。私には乏しいことがありません。',
          scriptureRef: 'Psalm 23:1'
        },
        {
          english: 'You are the light of the world.',
          japanese: 'あなたがたは世の光です。',
          scriptureRef: 'Matthew 5:14'
        },
        {
          english: 'His compassions are new every morning.',
          japanese: '主のあわれみは朝ごとに新しい。',
          scriptureRef: 'Lamentations 3:23'
        }
      ],
      notesJa: '単数主語（He/She/It/The Lord）には is、複数主語（We/They）には are、一人称単数（I）には am を用います。否定文は直後に not を置きます。',
      miniQuiz: [
        {
          question: 'The Lord _____ good and upright in all His ways.',
          options: ['is', 'are', 'am', 'be'],
          answerIndex: 0,
          explanationJa: 'The Lord（主）は三人称単数なので「is」が正解です（詩篇25:8）。'
        },
        {
          question: 'We _____ the sheep of His pasture.',
          options: ['is', 'are', 'am', 'was'],
          answerIndex: 1,
          explanationJa: '主語が複数代名詞「We」なので「are」になります（詩篇100:3）。'
        }
      ]
    },
    {
      id: 'a1-there-is-are',
      level: 'a1',
      title: 'There is / There are — 新情報の存在提示',
      japaneseMeaning: '〜が存在する・〜がある',
      structureFormula: 'There + is [単数名詞 / 不可算名詞] / There + are [複数名詞]',
      explanationJa: '話し手や聞き手にとって新しい事象や対象の存在を導入する構文です。聖書では世界への恵みや平和の存在を厳かに指し示す際に多用されます。',
      scriptureCitation: 'Ecclesiastes 3:1, Psalm 19:1',
      examples: [
        {
          english: 'There is a time for every purpose under heaven.',
          japanese: '天の下のすべての営みには定まった時があります。',
          scriptureRef: 'Ecclesiastes 3:1'
        },
        {
          english: 'There is no fear in love, but perfect love casts out fear.',
          japanese: '愛には恐れがありません。全き愛は恐れを締め出します。',
          scriptureRef: '1 John 4:18'
        },
        {
          english: 'There are many rooms in my Father\'s house.',
          japanese: 'わたしの父の家には、住まいがたくさんあります。',
          scriptureRef: 'John 14:2'
        }
      ],
      notesJa: 'there自体は形式的な副詞であり、真の主語は be 動詞の後に続く名詞です。したがって後ろの名詞の単複によって is / are が決定されます。',
      miniQuiz: [
        {
          question: 'There _____ one body and one Spirit, just as you were called.',
          options: ['is', 'are', 'be', 'were'],
          answerIndex: 0,
          explanationJa: 'one body（一つのからだ）は単数名詞なので「is」が適切です（エペソ4:4）。'
        }
      ]
    },
    {
      id: 'a1-present-simple',
      level: 'a1',
      title: 'Present Simple — 普遍の真理・恒常的祈り',
      japaneseMeaning: '（常に）〜する・〜である',
      structureFormula: 'Subject + Verb(s/es) [三人称単数現在形]',
      explanationJa: '現在形は「今この瞬間の動作」ではなく、「過去も現在も未来も変わらない普遍の真理、習慣、神の性質」を表します。聖書の教えの根底にある時制です。',
      scriptureCitation: 'Psalm 121:4, Proverbs 3:5',
      examples: [
        {
          english: 'The Lord watches over the righteous.',
          japanese: '主は正しい者を常に見守られます。',
          scriptureRef: 'Psalm 1:6'
        },
        {
          english: 'He makes me lie down in green pastures.',
          japanese: '主は私を緑の牧草地に伏させられます。',
          scriptureRef: 'Psalm 23:2'
        },
        {
          english: 'He gives strength to the weary and increases the power of the weak.',
          japanese: '主は疲れた者に力を与え、勢力のない者に強さを増し加えられます。',
          scriptureRef: 'Isaiah 40:29'
        }
      ],
      notesJa: '主語が三人称単数のとき、動詞の語尾に -s または -es がつきます（三単現のs）。watch → watches, give → gives。',
      miniQuiz: [
        {
          question: 'He _____ my soul; He leads me in paths of righteousness.',
          options: ['restore', 'restores', 'restoring', 'restored'],
          answerIndex: 1,
          explanationJa: '主語 He に対する現在形の動詞なので「restores」となります（詩篇23:3）。'
        }
      ]
    },
    {
      id: 'a1-imperatives',
      level: 'a1',
      title: 'Imperative Mood — 命法と神の掟',
      japaneseMeaning: '〜しなさい・〜せよ',
      structureFormula: 'Base Verb + ... / Do not + Base Verb + ...',
      explanationJa: '主語（You）を省略し、動詞の原形で文を始める構文です。権威ある神の戒め、招き、祈りにおける呼びかけとして聖書中で極めて頻出します。',
      scriptureCitation: 'Matthew 7:7, Psalm 46:10, 1 Thessalonians 5:16-18',
      examples: [
        {
          english: 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.',
          japanese: '求めなさい。そうすれば与えられます。探しなさい。そうすれば見つかります。門をたたきなさい。そうすれば開かれます。',
          scriptureRef: 'Matthew 7:7'
        },
        {
          english: 'Be still, and know that I am God.',
          japanese: '静まって、わたしこそ神であることを知れ。',
          scriptureRef: 'Psalm 46:10'
        },
        {
          english: 'Do not be anxious about anything, but in every situation, pray.',
          japanese: '何事も思い煩ってはなりません。あらゆる状況において祈りなさい。',
          scriptureRef: 'Philippians 4:6'
        }
      ],
      notesJa: '否定命法は「Do not + 動詞の原形」または文語の「Fear not（恐れるな）」などの形をとります。',
      miniQuiz: [
        {
          question: '_____ always, pray without ceasing, give thanks in all circumstances.',
          options: ['Rejoicing', 'Rejoice', 'Rejoices', 'Rejoiced'],
          answerIndex: 1,
          explanationJa: '命令文なので動詞の原形「Rejoice（いつも喜んでいなさい）」が入ります（1テサロニケ5:16）。'
        }
      ]
    },
    {
      id: 'a1-modal-can',
      level: 'a1',
      title: 'Modal Auxiliary: Can — 信仰による可能性と能力',
      japaneseMeaning: '〜できる・〜する力がある',
      structureFormula: 'Subject + can + Base Verb',
      explanationJa: '助動詞 can は主語の内在的潜在能力や可能性を表します。信じる者の全能なる神への依り頼みにおいて不可欠な表現です。',
      scriptureCitation: 'Philippians 4:13, Mark 9:23',
      examples: [
        {
          english: 'I can do all things through Christ who strengthens me.',
          japanese: '私を強くしてくださる方によって、私はどんなことでもできます。',
          scriptureRef: 'Philippians 4:13'
        },
        {
          english: 'Everything is possible for one who can believe.',
          japanese: '信じる者には、すべてのことが可能です。',
          scriptureRef: 'Mark 9:23'
        },
        {
          english: 'Who can separate us from the love of Christ?',
          japanese: 'だれがキリストの愛から私たちを引き離すことができるでしょうか。',
          scriptureRef: 'Romans 8:35'
        }
      ],
      notesJa: 'canの後は必ず「動詞の原形」が続きます。三単現の -s は助動詞にも後ろの動詞にも付きません。',
      miniQuiz: [
        {
          question: 'Through our God we _____ walk with confidence.',
          options: ['can', 'cans', 'to can', 'canning'],
          answerIndex: 0,
          explanationJa: '助動詞「can」は語形変化せず原形で用います。'
        }
      ]
    },
    {
      id: 'a1-possessives',
      level: 'a1',
      title: 'Possessive Forms & Genitives — 所有格と神への帰属',
      japaneseMeaning: '〜の（所有・所属・帰属）',
      structureFormula: 'Possessive Adjectives (my, your, his, her, its, our, their) / Noun + \'s / of + Noun',
      explanationJa: '被造物が創造主に属していること、あるいは霊的な結びつきを表す格です。名詞に \'s を付ける形と of を用いる形があります。',
      scriptureCitation: 'Psalm 24:1, Psalm 119:105',
      examples: [
        {
          english: 'The earth is the Lord\'s, and everything in it.',
          japanese: '地とそこに満ちているもの、世界とその中に住むものは主のものです。',
          scriptureRef: 'Psalm 24:1'
        },
        {
          english: 'Your word is a lamp to my feet and a light to my path.',
          japanese: 'あなたのみことばは、私の足のともしび、私の道の光です。',
          scriptureRef: 'Psalm 119:105'
        },
        {
          english: 'Our Father in heaven, hallowed be Your name.',
          japanese: '天におられる私たちの父よ、御名があがめられますように。',
          scriptureRef: 'Matthew 6:9'
        }
      ],
      notesJa: '無生物や重厚な表現では of + 名詞（the word of God など）が好まれ、人や神格には \'s または所有代名詞が用いられます。',
      miniQuiz: [
        {
          question: 'The wisdom _____ God is greater than the wisdom of men.',
          options: ['of', 'to', 'for', 'at'],
          answerIndex: 0,
          explanationJa: '「神の知恵」を表す所属の前置詞は「of」です。'
        }
      ]
    },
    {
      id: 'a1-wh-questions',
      level: 'a1',
      title: 'Wh- Questions — 問いかけと真理の探求',
      japaneseMeaning: 'だれ・何・どこ・いつ・なぜ',
      structureFormula: 'Wh-word + be / do / does / can + Subject + Verb... ?',
      explanationJa: 'Who（だれ）, What（何）, Where（どこ）, When（いつ）, Why（なぜ）を用いて本質的な真理を尋ねる疑問文です。聖書では神が人に問いかける場面や弟子の求道で現れます。',
      scriptureCitation: 'Genesis 3:9, Psalm 8:4, John 1:38',
      examples: [
        {
          english: 'Where are you?',
          japanese: 'あなたはどこにいるのか。',
          scriptureRef: 'Genesis 3:9'
        },
        {
          english: 'What is man that You are mindful of him?',
          japanese: '人とは何者なのでしょう。あなたがこれを心に留められるとは。',
          scriptureRef: 'Psalm 8:4'
        },
        {
          english: 'Who is this King of glory? The Lord of hosts, He is the King of glory.',
          japanese: '栄光の王とはだれか。万軍の主、これぞ栄光の王。',
          scriptureRef: 'Psalm 24:10'
        }
      ],
      notesJa: 'be動詞の文では疑問詞の直後に be動詞、一般動詞の文では do / does / did などの助動詞が続きます。',
      miniQuiz: [
        {
          question: '_____ shall I fear? The Lord is the stronghold of my life.',
          options: ['Whom', 'What', 'Where', 'When'],
          answerIndex: 0,
          explanationJa: '「だれを（恐れよう）」と目的格の人を尋ねているため「Whom」（または文語のWhom）が正解です（詩篇27:1）。'
        }
      ]
    },
    {
      id: 'a1-past-simple',
      level: 'a1',
      title: 'Past Simple (Regular & Irregular) — 救済史と御業の記録',
      japaneseMeaning: '〜した・〜であった（過去の確定した事実）',
      structureFormula: 'Subject + Verb-ed [規則動詞] / Irregular Past Verb',
      explanationJa: '過去の完了した事実や歴史的出来事を語る時制です。創世記の天地創造や福音書のイエスの生涯を叙述する根幹となります。',
      scriptureCitation: 'Genesis 1:1, John 1:1-3',
      examples: [
        {
          english: 'In the beginning God created the heavens and the earth.',
          japanese: '初めに神が天と地を創造された。',
          scriptureRef: 'Genesis 1:1'
        },
        {
          english: 'God said, "Let there be light," and there was light.',
          japanese: '神が「光あれ」と仰せられた。すると光があった。',
          scriptureRef: 'Genesis 1:3'
        },
        {
          english: 'He heard my voice and delivered me from all my fears.',
          japanese: '主は私の声を聞き、すべての恐怖から私を救い出された。',
          scriptureRef: 'Psalm 34:4'
        }
      ],
      notesJa: '規則動詞は -ed（create → created, deliver → delivered）ですが、重要不規則動詞（say → said, hear → heard, give → gave）は確実に暗記します。',
      miniQuiz: [
        {
          question: 'The Word _____ flesh and dwelt among us.',
          options: ['became', 'become', 'becoming', 'becomes'],
          answerIndex: 0,
          explanationJa: '過去の救済史的事実を述べているため、become の過去形「became」が正解です（ヨハネ1:14）。'
        }
      ]
    },
    {
      id: 'a1-prepositions',
      level: 'a1',
      title: 'Prepositions of Place & Time (in, on, at, with, before) — 聖なる時空',
      japaneseMeaning: '〜の中に、〜の上に、〜と共に、〜の御前に',
      structureFormula: 'Preposition + Noun Phrase',
      explanationJa: '時や場所、同伴、関係を示す前置詞です。神の臨在（with us, in Him）や聖所の前（before the Lord）などを厳密に言い表します。',
      scriptureCitation: 'Matthew 28:20, Psalm 16:11',
      examples: [
        {
          english: 'I am with you always, to the end of the age.',
          japanese: 'わたしは世の終わりまで、いつもあなたがたとともにいます。',
          scriptureRef: 'Matthew 28:20'
        },
        {
          english: 'In Your presence there is fullness of joy.',
          japanese: 'あなたの御前には満ちあふれる喜びがあります。',
          scriptureRef: 'Psalm 16:11'
        },
        {
          english: 'Walk before Me and be blameless.',
          japanese: 'わたしの前を歩み、全き者であれ。',
          scriptureRef: 'Genesis 17:1'
        }
      ],
      notesJa: 'with は「同伴・調和」、in は「領域・内部」、before は「〜の御前に・直前に」を表します。',
      miniQuiz: [
        {
          question: 'God is _____ us, our refuge and strength.',
          options: ['with', 'at', 'into', 'from'],
          answerIndex: 0,
          explanationJa: '「神は私たちとともにおられる（インマヌエル）」の同伴の前置詞は「with」です。'
        }
      ]
    },
    {
      id: 'a1-conjunctions',
      level: 'a1',
      title: 'Coordinating Conjunctions (and, but, for, so) — 祈りと論理の連接',
      japaneseMeaning: 'そして、しかし、というのは、それゆえに',
      structureFormula: 'Clause + and / but / for / so + Clause',
      explanationJa: '文と文、語と語を対等に結ぶ等位接続詞です。聖書ヘブライ語の「ヴァヴ（そして）」の精神を受け継ぐ and の重層や、神の恵みによる逆転を示す but などが重要です。',
      scriptureCitation: 'Romans 6:23, 1 John 4:19',
      examples: [
        {
          english: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
          japanese: '罪の報酬は死です。しかし神の賜物は、私たちの主キリスト・イエスにある永遠の命です。',
          scriptureRef: 'Romans 6:23'
        },
        {
          english: 'We love, because He first loved us.',
          japanese: '私たちが愛するのは、神がまず私たちを愛してくださったからです。',
          scriptureRef: '1 John 4:19'
        },
        {
          english: 'The grass withers and the flowers fall, but the word of our God endures forever.',
          japanese: '草は枯れ、花は散る。しかし私たちの神のことばは永遠に立つ。',
          scriptureRef: 'Isaiah 40:8'
        }
      ],
      notesJa: 'for は文頭や節頭で「なぜなら〜だからである」という理由・根拠を厳粛に添える文語接続詞としても頻出します。',
      miniQuiz: [
        {
          question: 'He died for all, _____ those who live should no longer live for themselves.',
          options: ['that', 'but', 'so that', 'or'],
          answerIndex: 2,
          explanationJa: '「〜となるために（目的・結果）」を導く接続詞として「so that」が正解です（2コリント5:15）。'
        }
      ]
    }
  ],
  vocabulary: [
    {
      id: 'a1-v-light',
      word: 'light',
      level: 'a1',
      phoneticIpa: '/laɪt/',
      partOfSpeech: 'noun',
      japaneseMeaning: '光、啓示、明かり',
      exampleSentence: 'God said, "Let there be light," and there was light.',
      exampleJapanese: '神は「光あれ」と言われた。すると光があった。',
      scriptureReference: 'Genesis 1:3'
    },
    {
      id: 'a1-v-word',
      word: 'word',
      level: 'a1',
      phoneticIpa: '/wɜːrd/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'ことば、みことば、ロゴス',
      exampleSentence: 'In the beginning was the Word, and the Word was with God.',
      exampleJapanese: '初めにことばがあった。ことばは神とともにあった。',
      scriptureReference: 'John 1:1'
    },
    {
      id: 'a1-v-peace',
      word: 'peace',
      level: 'a1',
      phoneticIpa: '/piːs/',
      partOfSpeech: 'noun',
      japaneseMeaning: '平和、平安、シャローム',
      exampleSentence: 'Peace I leave with you; my peace I give you.',
      exampleJapanese: 'わたしはあなたがたに平安を残します。わたしの平安を与えます。',
      scriptureReference: 'John 14:27'
    },
    {
      id: 'a1-v-grace',
      word: 'grace',
      level: 'a1',
      phoneticIpa: '/ɡreɪs/',
      partOfSpeech: 'noun',
      japaneseMeaning: '恵み、恩寵、慈愛',
      exampleSentence: 'For by grace you have been saved through faith.',
      exampleJapanese: 'あなたがたは恵みのゆえに、信仰によって救われたのです。',
      scriptureReference: 'Ephesians 2:8'
    },
    {
      id: 'a1-v-truth',
      word: 'truth',
      level: 'a1',
      phoneticIpa: '/truːθ/',
      partOfSpeech: 'noun',
      japaneseMeaning: '真理、まこと、誠実',
      exampleSentence: 'You will know the truth, and the truth will set you free.',
      exampleJapanese: 'あなたがたは真理を知り、真理はあなたがたを自由にします。',
      scriptureReference: 'John 8:32'
    },
    {
      id: 'a1-v-shepherd',
      word: 'shepherd',
      level: 'a1',
      phoneticIpa: '/ˈʃɛp.ərd/',
      partOfSpeech: 'noun',
      japaneseMeaning: '羊飼い、導き手、牧者',
      exampleSentence: 'The Lord is my shepherd; I shall not want.',
      exampleJapanese: '主は私の羊飼い。私には乏しいことがありません。',
      scriptureReference: 'Psalm 23:1'
    },
    {
      id: 'a1-v-heart',
      word: 'heart',
      level: 'a1',
      phoneticIpa: '/hɑːrt/',
      partOfSpeech: 'noun',
      japaneseMeaning: '心、精神、中心',
      exampleSentence: 'Love the Lord your God with all your heart.',
      exampleJapanese: '心を尽くしてあなたの神である主を愛しなさい。',
      scriptureReference: 'Matthew 22:37'
    },
    {
      id: 'a1-v-soul',
      word: 'soul',
      level: 'a1',
      phoneticIpa: '/soʊl/',
      partOfSpeech: 'noun',
      japaneseMeaning: '魂、霊魂、たましい',
      exampleSentence: 'He restores my soul and leads me in righteousness.',
      exampleJapanese: '主は私のたましいを生き返らせ、義の道へ導かれます。',
      scriptureReference: 'Psalm 23:3'
    },
    {
      id: 'a1-v-holy',
      word: 'holy',
      level: 'a1',
      phoneticIpa: '/ˈhoʊ.li/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '聖なる、清い、神聖な',
      exampleSentence: 'Holy, holy, holy is the Lord God Almighty.',
      exampleJapanese: '聖なるかな、聖なるかな、聖なるかな、全能者にして主なる神。',
      scriptureReference: 'Revelation 4:8'
    },
    {
      id: 'a1-v-heaven',
      word: 'heaven',
      level: 'a1',
      phoneticIpa: '/ˈhɛv.ən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '天、天国、神の御座',
      exampleSentence: 'Our Father in heaven, hallowed be Your name.',
      exampleJapanese: '天におられる私たちの父よ、御名があがめられますように。',
      scriptureReference: 'Matthew 6:9'
    },
    {
      id: 'a1-v-earth',
      word: 'earth',
      level: 'a1',
      phoneticIpa: '/ɜːrθ/',
      partOfSpeech: 'noun',
      japaneseMeaning: '地、大地、世界',
      exampleSentence: 'In the beginning God created the heavens and the earth.',
      exampleJapanese: '初めに神が天と地を創造された。',
      scriptureReference: 'Genesis 1:1'
    },
    {
      id: 'a1-v-faith',
      word: 'faith',
      level: 'a1',
      phoneticIpa: '/feɪθ/',
      partOfSpeech: 'noun',
      japaneseMeaning: '信仰、信頼、確信',
      exampleSentence: 'Faith is the assurance of things hoped for.',
      exampleJapanese: '信仰は望んでいる事柄の保証です。',
      scriptureReference: 'Hebrews 11:1'
    },
    {
      id: 'a1-v-create',
      word: 'create',
      level: 'a1',
      phoneticIpa: '/kriˈeɪt/',
      partOfSpeech: 'verb',
      japaneseMeaning: '創造する、造る、生み出す',
      exampleSentence: 'God created man in His own image.',
      exampleJapanese: '神はご自分のかたちに人を創造された。',
      scriptureReference: 'Genesis 1:27'
    },
    {
      id: 'a1-v-bless',
      word: 'bless',
      level: 'a1',
      phoneticIpa: '/blɛs/',
      partOfSpeech: 'verb',
      japaneseMeaning: '祝福する、恵む、讃美する',
      exampleSentence: 'The Lord bless you and keep you.',
      exampleJapanese: '主があなたを祝福し、あなたを守られますように。',
      scriptureReference: 'Numbers 6:24'
    },
    {
      id: 'a1-v-praise',
      word: 'praise',
      level: 'a1',
      phoneticIpa: '/preɪz/',
      partOfSpeech: 'verb',
      japaneseMeaning: '賛美する、ほめたたえる',
      exampleSentence: 'Praise the Lord, all nations; extol Him, all peoples.',
      exampleJapanese: 'すべての国よ、主をほめたたえよ。すべての民よ、主を賛美せよ。',
      scriptureReference: 'Psalm 117:1'
    },
    {
      id: 'a1-v-voice',
      word: 'voice',
      level: 'a1',
      phoneticIpa: '/vɔɪs/',
      partOfSpeech: 'noun',
      japaneseMeaning: '声、み声、呼びかけ',
      exampleSentence: 'My sheep hear my voice, and I know them.',
      exampleJapanese: 'わたしの羊はわたしの声を聞き分ける。わたしは彼らを知っている。',
      scriptureReference: 'John 10:27'
    },
    {
      id: 'a1-v-way',
      word: 'way',
      level: 'a1',
      phoneticIpa: '/weɪ/',
      partOfSpeech: 'noun',
      japaneseMeaning: '道、道筋、生き方',
      exampleSentence: 'I am the way, the truth, and the life.',
      exampleJapanese: 'わたしが道であり、真理であり、命なのです。',
      scriptureReference: 'John 14:6'
    },
    {
      id: 'a1-v-life',
      word: 'life',
      level: 'a1',
      phoneticIpa: '/laɪf/',
      partOfSpeech: 'noun',
      japaneseMeaning: '命、永遠の生命、生活',
      exampleSentence: 'In Him was life, and the life was the light of men.',
      exampleJapanese: 'この方に命があった。この命は人の光であった。',
      scriptureReference: 'John 1:4'
    },
    {
      id: 'a1-v-prayer',
      word: 'prayer',
      level: 'a1',
      phoneticIpa: '/prɛər/',
      partOfSpeech: 'noun',
      japaneseMeaning: '祈り、懇願、祈祷',
      exampleSentence: 'The prayer of a righteous person has great power.',
      exampleJapanese: '正しい人の祈りは大きな力をもたらします。',
      scriptureReference: 'James 5:16'
    },
    {
      id: 'a1-v-glory',
      word: 'glory',
      level: 'a1',
      phoneticIpa: '/ˈɡlɔːr.i/',
      partOfSpeech: 'noun',
      japaneseMeaning: '栄光、尊厳、輝き',
      exampleSentence: 'The heavens declare the glory of God.',
      exampleJapanese: '天は神の栄光を語り告げます。',
      scriptureReference: 'Psalm 19:1'
    },
    {
      id: 'a1-v-mercy',
      word: 'mercy',
      level: 'a1',
      phoneticIpa: '/ˈmɜːr.si/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'あわれみ、慈悲、情け',
      exampleSentence: 'Surely goodness and mercy shall follow me all my life.',
      exampleJapanese: 'まことに慈しみと恵みが私の生涯につき従います。',
      scriptureReference: 'Psalm 23:6'
    },
    {
      id: 'a1-v-righteous',
      word: 'righteous',
      level: 'a1',
      phoneticIpa: '/ˈraɪ.tʃəs/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '正しい、義なる、高潔な',
      exampleSentence: 'The Lord loves the righteous.',
      exampleJapanese: '主は正しい者を愛されます。',
      scriptureReference: 'Psalm 146:8'
    },
    {
      id: 'a1-v-servant',
      word: 'servant',
      level: 'a1',
      phoneticIpa: '/ˈsɜːr.vənt/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'しもべ、仕える者',
      exampleSentence: 'Well done, good and faithful servant.',
      exampleJapanese: '良い忠実なしもべよ、よくやった。',
      scriptureReference: 'Matthew 25:21'
    },
    {
      id: 'a1-v-faithful',
      word: 'faithful',
      level: 'a1',
      phoneticIpa: '/ˈfeɪθ.fəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '忠実な、誠実な、信実な',
      exampleSentence: 'God is faithful, by whom you were called.',
      exampleJapanese: 'あなたがたを召してくださった神は真実であられます。',
      scriptureReference: '1 Corinthians 1:9'
    },
    {
      id: 'a1-v-walk',
      word: 'walk',
      level: 'a1',
      phoneticIpa: '/wɔːk/',
      partOfSpeech: 'verb',
      japaneseMeaning: '歩む、生きる、従う',
      exampleSentence: 'Even though I walk through the valley of the shadow of death, I will fear no evil.',
      exampleJapanese: 'たとえ死の陰の谷を歩むとしても、私は災いを恐れません。',
      scriptureReference: 'Psalm 23:4'
    },
    {
      id: 'a1-v-give',
      word: 'give',
      level: 'a1',
      phoneticIpa: '/ɡɪv/',
      partOfSpeech: 'verb',
      japaneseMeaning: '与える、捧げる',
      exampleSentence: 'Give us this day our daily bread.',
      exampleJapanese: '私たちの日ごとの糧を今日もお与えください。',
      scriptureReference: 'Matthew 6:11'
    },
    {
      id: 'a1-v-hear',
      word: 'hear',
      level: 'a1',
      phoneticIpa: '/hɪər/',
      partOfSpeech: 'verb',
      japaneseMeaning: '聞く、聞き届ける',
      exampleSentence: 'Hear, O Israel: The Lord our God, the Lord is one.',
      exampleJapanese: '聞け、イスラエルよ。主は私たちの神、主は唯一である。',
      scriptureReference: 'Deuteronomy 6:4'
    },
    {
      id: 'a1-v-seek',
      word: 'seek',
      level: 'a1',
      phoneticIpa: '/siːk/',
      partOfSpeech: 'verb',
      japaneseMeaning: '求める、尋ね求める、探す',
      exampleSentence: 'Seek first the kingdom of God and His righteousness.',
      exampleJapanese: 'まず神の国と神の義を求めなさい。',
      scriptureReference: 'Matthew 6:33'
    },
    {
      id: 'a1-v-abide',
      word: 'abide',
      level: 'a1',
      phoneticIpa: '/əˈbaɪd/',
      partOfSpeech: 'verb',
      japaneseMeaning: 'とどまる、宿る、住まう',
      exampleSentence: 'Abide in me, and I in you.',
      exampleJapanese: 'わたしにとどまりなさい。わたしもあなたがたにとどまります。',
      scriptureReference: 'John 15:4'
    },
    {
      id: 'a1-v-strength',
      word: 'strength',
      level: 'a1',
      phoneticIpa: '/strɛŋkθ/',
      partOfSpeech: 'noun',
      japaneseMeaning: '力、強さ、砦',
      exampleSentence: 'The Lord is my strength and my shield.',
      exampleJapanese: '主は私の力、私の盾です。',
      scriptureReference: 'Psalm 28:7'
    }
  ],
  readings: [
    {
      id: 'a1-reading-creation',
      level: 'a1',
      title: 'The Creation of Light (Genesis 1:1–5)',
      source: 'Genesis 1:1–5',
      passage: 'In the beginning God created the heavens and the earth. The earth was without form, and void; and darkness was on the face of the deep. And the Spirit of God was hovering over the face of the waters. Then God said, "Let there be light"; and there was light. And God saw the light, that it was good; and God divided the light from the darkness. God called the light Day, and the darkness He called Night. So the evening and the morning were the first day.',
      passageJapanese: '初めに神が天と地を創造された。地は形がなく、何もない空虚であり、闇が深みの水の上にあり、神の霊が水面の上を動かれていた。神は仰せられた。「光あれ。」すると光があった。神はその光を見て良しとされた。神は光と闇を分けられた。神は光を「昼」と呼び、闇を「夜」と呼ばれた。夕があり、朝があった。第一日。',
      comprehensionQuestions: [
        {
          question: 'What did God create first by His command in this passage?',
          options: ['The trees', 'The light', 'The animals', 'The cities'],
          answerIndex: 1,
          explanationJa: '神が「Let there be light（光あれ）」と最初に命じられたため、光が正解です。'
        }
      ]
    },
    {
      id: 'a1-reading-psalm23',
      level: 'a1',
      title: 'The Shepherd and His Sheep (Psalm 23:1–3)',
      source: 'Psalm 23:1–3',
      passage: 'The Lord is my shepherd; I shall not want. He makes me lie down in green pastures; He leads me beside still waters. He restores my soul; He leads me in paths of righteousness for His name\'s sake.',
      passageJapanese: '主は私の羊飼い。私には乏しいことがありません。主は私を緑の牧草地に伏させ、憩いの水のほとりに導かれます。主は私のたましいを生き返らせ、御名のために義の道へと導かれます。',
      comprehensionQuestions: [
        {
          question: 'According to Psalm 23, what does the Shepherd restore?',
          options: ['My gold', 'My soul', 'My house', 'My pasture'],
          answerIndex: 1,
          explanationJa: '「He restores my soul（主は私のたましいを生き返らせる）」とあります。'
        }
      ]
    },
    {
      id: 'a1-reading-beatitudes',
      level: 'a1',
      title: 'The Beatitudes — The Sermon on the Mount (Matthew 5:3–8)',
      source: 'Matthew 5:3–8',
      passage: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they shall be comforted. Blessed are the meek, for they shall inherit the earth. Blessed are those who hunger and thirst for righteousness, for they shall be filled. Blessed are the merciful, for they shall obtain mercy. Blessed are the pure in heart, for they shall see God.',
      passageJapanese: '心の貧しい者は幸いです。天の御国はその人たちのものだからです。悲しむ者は幸いです。その人たちは慰められるからです。柔和な者は幸いです。その人たちは地を受け継ぐからです。義に飢え渇く者は幸いです。その人たちは満ち足りるからです。あわれみ深い者は幸いです。その人たちはあわれみを受けるからです。心のきよい者は幸いです。その人たちは神を見るからです。',
      comprehensionQuestions: [
        {
          question: 'Who shall see God according to this teaching?',
          options: ['The powerful', 'The pure in heart', 'The wealthy', 'The proud'],
          answerIndex: 1,
          explanationJa: '「Blessed are the pure in heart, for they shall see God（心のきよい者は幸いです。神を見るからです）」が根拠です。'
        }
      ]
    }
  ]
};
