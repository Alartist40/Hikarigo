import { LevelData } from '../types';

export const c1Data: LevelData = {
  meta: {
    id: 'c1',
    name: 'Level C1',
    japaneseName: '上級・正典の神学論証',
    cefr: 'C1',
    ielts: 'IELTS 7.0–8.0',
    descriptionJa: '場所副詞句前置倒置、古格・格式接続法（lest, be it that）、If省略条件倒置、ヘブライ的並行対句・交差配列（キアスムス）、緩叙法（リトテス）と厳密な教理釈義。',
    scriptureThemeJa: 'ヨハネの福音書冒頭・コロサイ人への手紙「見えざる神の像」',
    badgeColor: 'var(--level-c1)',
    depthColor: 'var(--level-c1)'
  },
  grammar: [
    {
      id: 'c1-fronted-preposition-inversion',
      level: 'c1',
      title: 'Inversion with Fronted Prepositional Phrases — 場所・方向副詞句の前置倒置',
      japaneseMeaning: '〜の中に…がある・…が座しておられる',
      structureFormula: 'Prepositional Phrase of Location / Direction + Verb + Subject',
      explanationJa: '場所や方向を示す前置詞句を文頭に置き、その直後に助動詞を用いず本動詞と主語をそのまま倒置（完全倒置）させる荘厳な文学的・典礼的構文です。王座の顕現や神秘的ヴィジョンを述べる際に多用されます。',
      scriptureCitation: 'Isaiah 6:1, Psalm 97:1-3',
      examples: [
        {
          english: 'Above Him stood the seraphim, each having six wings.',
          japanese: '主の上にはセラフィムが立ち並び、それぞれ六つの翼を持っていた。',
          scriptureRef: 'Isaiah 6:2'
        },
        {
          english: 'Before the throne burn seven torches of fire, which are the seven spirits of God.',
          japanese: '御座の前には七つの火のたいまつが燃えており、これらは神の七つの御霊である。',
          scriptureRef: 'Revelation 4:5'
        },
        {
          english: 'In the midst of the street and on each side of the river stood the tree of life.',
          japanese: '都の大通りの真ん中、川の両岸には、いのちの木が生えていた。',
          scriptureRef: 'Revelation 22:2'
        }
      ],
      notesJa: '主語が代名詞（he, it など）の場合は倒置が起きず「In the midst stood he」とはならず「In the midst he stood」となる例外規則があります。普通名詞の主語でのみ動詞と主語が完全倒置します。',
      miniQuiz: [
        {
          question: 'Around the throne _____ twenty-four elders clothed in white garments.',
          options: ['sat', 'did sit', 'sitting', 'were sat'],
          answerIndex: 0,
          explanationJa: '場所副詞句が前置された完全倒置構文なので動詞が直接先行する「sat」が正解です。'
        }
      ]
    },
    {
      id: 'c1-unreal-condition-inversion',
      level: 'c1',
      title: 'Condition Inversion Without "If" (Were it not, Had it not been) — If省略の条件倒置',
      japaneseMeaning: 'もし〜がなかったならば・もし〜であるならば',
      structureFormula: 'Were + Subject + to / not for... // Had + Subject + (not) + p.p.... // Should + Subject + Verb...',
      explanationJa: '接続詞 if を完全に省略し、助動詞（Had / Were / Should）を主語の前に繰り出すことで、極めて格調高い学術的・典礼的響きを与える条件構文です。神の恵みがなかった場合の破滅を語る際に用いられます。',
      scriptureCitation: 'Psalm 124:1-3, Romans 9:29',
      examples: [
        {
          english: 'Had it not been the Lord who was on our side, let Israel now say, when men rose up against us, they would have swallowed us alive.',
          japanese: 'もし主が私たちの味方でなかったなら、イスラエルよ、今こそ言え。人が私たちに立ち向かったとき、彼らは私たちを生きたまま呑み尽くしていただろう。',
          scriptureRef: 'Psalm 124:1-3'
        },
        {
          english: 'Were it not for His sovereign grace, no flesh would ever be justified in His holy sight.',
          japanese: '神の主権的恵みがなかったならば、いかなる肉なる者もその聖なる御前に義と認められることは決してなかったであろう。',
          scriptureRef: 'Romans 3:20'
        },
        {
          english: 'Had the Lord of hosts not left us a remnant, we should have been like Sodom.',
          japanese: '万軍の主が私たちにひと握りの残りの者を残してくださらなかったなら、私たちはソドムのようになっていたであろう。',
          scriptureRef: 'Isaiah 1:9 / Romans 9:29'
        }
      ],
      notesJa: '否定文の場合、not は繰り出されず主語の直後に留まります（× Had not the Lord been → ○ Had the Lord not been）。',
      miniQuiz: [
        {
          question: '_____ the Lord build the house, the laborers work in vain.',
          options: ['Unless', 'Should', 'Except', 'Were'],
          answerIndex: 2,
          explanationJa: '文語の条件構文「Except the Lord build（主が家を建てられるのでなければ）」の格式表現です（詩篇127:1）。'
        }
      ]
    },
    {
      id: 'c1-archaic-subjunctive-lest',
      level: 'c1',
      title: 'Elevated Subjunctive with "Lest" & "Be it that" — 畏怖と戒めの古格接続法',
      japaneseMeaning: '〜することがないように（危惧・予防）／たとえ〜であろうとも',
      structureFormula: 'lest + Subject + (should) + Base Verb // Be it that + Clause',
      explanationJa: '否定の目的「〜しないように」を表す接続詞 lest の後ろには、動詞の原形（仮定法現在）または should + 原形 が続きます。罪に陥ることへの警戒や、神の怒りを恐れる文脈で多用されます。',
      scriptureCitation: 'Hebrews 3:12, Luke 21:34, Genesis 3:22',
      examples: [
        {
          english: 'Take care, brothers, lest there be in any of you an evil, unbelieving heart, leading you to fall away from the living God.',
          japanese: '兄弟たちよ、気をつけていなさい。あなたがたの中に、生ける神から離反するような、悪く不信仰な心を持つ者が生じることのないように。',
          scriptureRef: 'Hebrews 3:12'
        },
        {
          english: 'Watch yourselves lest your hearts be weighed down with dissipation and drunkenness.',
          japanese: '放蕩や深酒によってあなたがたの心が鈍くなることのないよう、自ら気をつけなさい。',
          scriptureRef: 'Luke 21:34'
        },
        {
          english: 'Be it resolved that we shall serve the Lord our God with an undivided heart.',
          japanese: 'たとえ何があろうとも、私たちは分かたれない心をもって主なる神に仕えることを決意する。',
          scriptureRef: 'Joshua 24:15'
        }
      ],
      notesJa: 'lest 自体に否定の意味が含まれるため、lest節の中に not などの否定語を重ねてはなりません（× lest you not fall → ○ lest you fall）。',
      miniQuiz: [
        {
          question: 'Let him who thinks he stands take heed lest he _____ .',
          options: ['fall', 'falls', 'fell', 'fallen'],
          answerIndex: 0,
          explanationJa: 'lest の後には動詞の原形が続くため「fall」が正解です（1コリント10:12）。'
        }
      ]
    },
    {
      id: 'c1-chiasmus-parallelism',
      level: 'c1',
      title: 'Chiasmus & Hebrew Poetic Parallelism — 交差配列と統語的平行対句',
      japaneseMeaning: 'A-B-B-A 型の交差修辞および同義的・対照的平行構文',
      structureFormula: 'Clause A [Element 1 + Element 2] ... Clause B [Element 2\' + Element 1\']',
      explanationJa: 'ヘブライ詩文学およびパウロ書簡の精髄である修辞です。概念を交差させて対置させることで、神学的真理を中心点（キアスムスの頂点）へと収斂させます。',
      scriptureCitation: 'Matthew 19:30, Isaiah 55:8-9, Psalm 19:7-10',
      examples: [
        {
          english: 'Many who are first will be last, and the last first.',
          japanese: '先にいる多くの者が後になり、後にいる者が先になる。',
          scriptureRef: 'Matthew 19:30'
        },
        {
          english: 'For My thoughts are not your thoughts, neither are your ways My ways, declares the Lord.',
          japanese: 'わたしの思いはあなたがたの思いと異なり、あなたがたの道はわたしの道と異なるからだ。主の仰せ。',
          scriptureRef: 'Isaiah 55:8'
        },
        {
          english: 'The Sabbath was made for man, not man for the Sabbath.',
          japanese: '安息日は人のために作られたのであって、人が安息日のために作られたのではない。',
          scriptureRef: 'Mark 2:27'
        }
      ],
      notesJa: '文の対称性とリズムを保つため、後続の節では動詞や前置詞が意図的に省略（ゼウグマ・エリプシス）されることが一般的です。',
      miniQuiz: [
        {
          question: 'He who exalts himself will be humbled, and he who humbles himself will be _____ .',
          options: ['exalted', 'exalting', 'exalt', 'exalts'],
          answerIndex: 0,
          explanationJa: '完全な交差対比を完成させる受動分詞「exalted」が正解です（マタイ23:12）。'
        }
      ]
    },
    {
      id: 'c1-litotes-rhetoric',
      level: 'c1',
      title: 'Litotes and Double Negation — 緩叙法による神聖なる強意',
      japaneseMeaning: '〜でないわけではない（二重否定による控えめかつ深遠な肯定）',
      structureFormula: 'not + Negative Adjective / no small / no mean / not unmindful',
      explanationJa: '否定語を用いてあえて控えめに表現することで、かえってその肯定の意味を力強く、上品に際立たせる古典ギリシア・聖書修辞法です。パウロが自らの出自や神の真実を語る際に愛用しました。',
      scriptureCitation: 'Acts 21:39, Romans 1:16, Hebrews 6:10',
      examples: [
        {
          english: 'I am a Jew from Tarsus in Cilicia, a citizen of no mean city.',
          japanese: '私はキリキアのタルソ出身のユダヤ人で、名もない都市の市民ではありません（＝名高き大都市の市民です）。',
          scriptureRef: 'Acts 21:39'
        },
        {
          english: 'For I am not ashamed of the gospel, for it is the power of God for salvation.',
          japanese: '私は福音を恥としない。それは信じるすべての人を救いに至らせる神の力だからである（＝福音を無上の栄誉と確信している）。',
          scriptureRef: 'Romans 1:16'
        },
        {
          english: 'For God is not unjust so as to overlook your work and the love that you have shown for His name.',
          japanese: '神は不義な方ではないので、あなたがたの働きと御名に示された愛をお忘れになることはない（＝必ず豊かに報いてくださる）。',
          scriptureRef: 'Hebrews 6:10'
        }
      ],
      notesJa: '単に strong と言うよりも no small strength と言う方が、品格と客観性を保ちながら強烈な印象を与えます。',
      miniQuiz: [
        {
          question: 'The storm was _____ small tempest, yet Paul stood fearless in the Lord.',
          options: ['no', 'not', 'none', 'neither'],
          answerIndex: 0,
          explanationJa: '「no small（並々ならぬ）」の緩叙法成句を完成させる「no」が正解です（使徒27:20）。'
        }
      ]
    },
    {
      id: 'c1-asyndeton-polysyndeton',
      level: 'c1',
      title: 'Asyndeton & Polysyndeton — 接続詞省略と多重結合の修辞',
      japaneseMeaning: '接続詞の完全排除（速度と重圧）／連綿たる接続詞重層（圧倒的網羅）',
      structureFormula: 'Asyndeton: A, B, C, D (無接続) // Polysyndeton: A and B and C and D (多重接続)',
      explanationJa: 'アシンデトン（接続詞省略）は矢継ぎ早な真理の宣告や緊迫感を醸成し、ポリシンデトン（and や nor の連続）は被造物や患難のすべてを網羅する神の愛の巨大さを表現します。',
      scriptureCitation: 'Romans 8:35, 1 Corinthians 13:4-7, Galatians 5:22-23',
      examples: [
        {
          english: 'Neither death, nor life, nor angels, nor rulers, nor things present, nor things to come, nor powers, nor height, nor depth... shall separate us.',
          japanese: '死も、命も、御使いも、支配者も、今あるものも、来たるべきものも、力あるものも、高いところも、深いところも…私たちを引き離すことはできない。',
          scriptureRef: 'Romans 8:38-39'
        },
        {
          english: 'Love bears all things, believes all things, hopes all things, endures all things.',
          japanese: '愛はすべてを覆い、すべてを信じ、すべてを望み、すべてを耐え忍ぶ。',
          scriptureRef: '1 Corinthians 13:7'
        },
        {
          english: 'Preach the word; be ready in season and out of season; reprove, rebuke, and exhort, with complete patience and teaching.',
          japanese: 'みことばを宣べ伝えなさい。時が良くても悪くても備えていなさい。非難し、戒め、勧めなさい。',
          scriptureRef: '2 Timothy 4:2'
        }
      ],
      notesJa: '1コリント13:7のように接続詞を省いて動詞句を畳みかけるアシンデトンは、愛の全能性を読者の心に強く刻み込みます。',
      miniQuiz: [
        {
          question: 'The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control—this structure without conjunctions is: _____',
          options: ['Asyndeton', 'Hyperbole', 'Irony', 'Metaphor'],
          answerIndex: 0,
          explanationJa: '接続詞を排して名詞を列挙する技法は「Asyndeton（アシンデトン）」です（ガラテヤ5:22）。'
        }
      ]
    },
    {
      id: 'c1-extended-relative-clauses',
      level: 'c1',
      title: 'Extended Relative Clauses with Compound Antecedents — 二重限定と複合先行詞',
      japaneseMeaning: '〜であり、かつ…であるところのその方（幾重にも修飾される主語）',
      structureFormula: 'Antecedent + who + Verb... and who + Verb... + Main Verb',
      explanationJa: '唯一の神格やキリストの受肉・昇天・再臨の諸属性を、複数の関係節を積み重ねて厳密に叙述する構文です。使徒パウロが讃歌の中で教理的定義を行う際の代表的統語です。',
      scriptureCitation: 'Colossians 1:15-18, Revelation 1:5',
      examples: [
        {
          english: 'He is the image of the invisible God, the firstborn of all creation, in whom all things were created.',
          japanese: '御子は、見えない神のかたちであり、すべての被造物に先立って生まれた方です。万物は御子にあって造られました。',
          scriptureRef: 'Colossians 1:15-16'
        },
        {
          english: 'Jesus Christ, who is the faithful witness, the firstborn from the dead, and the ruler of kings on earth.',
          japanese: '忠実な証人、死者の中から最初に生まれた方、地上の王たちの支配者であられるイエス・キリスト。',
          scriptureRef: 'Revelation 1:5'
        },
        {
          english: 'He who spared not His own Son, but delivered Him up for us all, how shall He not with Him freely give us all things?',
          japanese: 'ご自分の御子をさえ惜しまずに、私たちのすべてのために引き渡された方が、どうして御子とともにすべてを恵んでくださらないことがありましょう。',
          scriptureRef: 'Romans 8:32'
        }
      ],
      notesJa: '先行詞に同格語（the image..., the firstborn...）が挟まり、その後にさらに関係節が接続されるため、主節の述語動詞を見失わない構文把握力が求められます。',
      miniQuiz: [
        {
          question: 'He who began a good work in you _____ bring it to completion at the day of Jesus Christ.',
          options: ['will', 'has', 'is', 'did'],
          answerIndex: 0,
          explanationJa: '先行詞句「He who began a good work in you」に対する主節の未来動詞「will bring」が正解です（ピリピ1:6）。'
        }
      ]
    },
    {
      id: 'c1-cleft-prepositional',
      level: 'c1',
      title: 'Cleft Sentences with Prepositional Modifiers — 前置詞句の分裂強調構文',
      japaneseMeaning: '他ならぬ〜においてこそ…である',
      structureFormula: 'It was in / by / through + Noun + that + Subject + Verb...',
      explanationJa: '方法、手段、時、場所を示す前置詞句を It was ... that の枠組みで挟み、「他でもなくその御業によってこそ」と根源的救済の原因を鮮明に浮き彫りにする高度な論証構文です。',
      scriptureCitation: 'Hebrews 1:1-2, Colossians 1:19-20',
      examples: [
        {
          english: 'It was through His cross that God reconciled to Himself all things, making peace by the blood of His cross.',
          japanese: '神がすべてのものを十字架の血によって平和をもたらし、ご自分と和解させられたのは、ほかならぬその十字架を通してであった。',
          scriptureRef: 'Colossians 1:20'
        },
        {
          english: 'It was in these last days that He has spoken to us by His Son.',
          japanese: '神が御子によって私たちに語りかけられたのは、ほかならぬこの終わりの時代においてである。',
          scriptureRef: 'Hebrews 1:2'
        },
        {
          english: 'It is by faith that a man is justified apart from the deeds of the law.',
          japanese: '人が律法の行いとは離れて義と認められるのは、ほかならぬ信仰によるのである。',
          scriptureRef: 'Romans 3:28'
        }
      ],
      notesJa: 'that節の中では、前置詞句が It was の直後へ移動しているため、文法的な欠落はなく副詞要素が強調されている状態となります。',
      miniQuiz: [
        {
          question: 'It was through death _____ Christ destroyed him who holds the power of death.',
          options: ['that', 'which', 'whom', 'where'],
          answerIndex: 0,
          explanationJa: '前置詞句 through death を強調する分裂文なので「that」が正解です（ヘブル2:14）。'
        }
      ]
    },
    {
      id: 'c1-nominative-absolute-epistles',
      level: 'c1',
      title: 'Absolute Nominative in Theological Exposition — 教理的独立主格構文',
      japaneseMeaning: '〜である以上・〜である今、…（崇高なる前提提示）',
      structureFormula: 'Subject + Participle / Adjective, Main Subject + Verb...',
      explanationJa: '神の永遠の性質やキリストの祭司職の絶対性を独立主格（Nominative Absolute）として文頭に掲げ、それを土台として信徒の特権や責任を導き出す、使徒書簡特有の論理的統語です。',
      scriptureCitation: 'Hebrews 7:25, 2 Corinthians 3:18',
      examples: [
        {
          english: 'He always living to make intercession for them, Christ is able to save to the uttermost those who draw near to God through Him.',
          japanese: 'キリストは常に生きて人々のためにとりなしておられる故に、ご自分を通して神に近づく人々を完全に救うことがおできになります。',
          scriptureRef: 'Hebrews 7:25'
        },
        {
          english: 'We all, with unveiled face, beholding as in a mirror the glory of the Lord, are being transformed into the same image from glory to glory.',
          japanese: '私たちはみな、覆いを取り除かれた顔で鏡を見るように主の栄光を見つめつつ、栄光から栄光へと、同じ姿に変えられていきます。',
          scriptureRef: '2 Corinthians 3:18'
        },
        {
          english: 'Our conscience bearing witness in the Holy Spirit, we speak the truth in Christ and do not lie.',
          japanese: '私たちの良心が聖霊によって証ししている中で、私たちはキリストにあって真理を語り、偽りを言わない。',
          scriptureRef: 'Romans 9:1'
        }
      ],
      notesJa: '接続詞 since や because を使わずに独立主格を用いることで、教理的事実を動かしがたい自明の公理として格調高く提示できます。',
      miniQuiz: [
        {
          question: 'Christ _____ died for our sins once for all, death no longer has dominion over Him.',
          options: ['having', 'has', 'was', 'is'],
          answerIndex: 0,
          explanationJa: '完了分詞による独立主格構文「Christ having died（キリストが一度死なれた以上）」を表す「having」が正解です（ローマ6:9）。'
        }
      ]
    },
    {
      id: 'c1-antithetical-parallelism',
      level: 'c1',
      title: 'Antithetical Parallelism & Paradox — 逆説的対句法と終末論的知恵',
      japaneseMeaning: '〜ではあるが…である（世俗的価値観の聖なる転倒）',
      structureFormula: 'Clause A (世俗の評価・低き状態) contrasted with Clause B (神の評価・高き栄光)',
      explanationJa: '二つの節を対立させ、表面的な矛盾（パラドックス）の中に深遠な真理を宿らせる修辞です。福音の逆説（貧しい者が富んでいる、弱い時にこそ強い）を鮮やかに立証します。',
      scriptureCitation: '2 Corinthians 6:9-10, 1 Corinthians 1:27-28',
      examples: [
        {
          english: 'As unknown, and yet well known; as dying, and behold, we live; as sorrowful, yet always rejoicing; as poor, yet making many rich; as having nothing, and yet possessing all things.',
          japanese: '無名のように見えて良く知られ、死に瀕しているようで生きており、悲しんでいるようで常に喜び、貧しいようで多くの人を富ませ、無一物のようで万物を持っています。',
          scriptureRef: '2 Corinthians 6:9-10'
        },
        {
          english: 'God chose what is foolish in the world to shame the wise; God chose what is weak in the world to shame the strong.',
          japanese: '神は知恵ある者を辱めるために、世の愚かな者を選び、強い者を辱めるために、世の弱い者を選ばれました。',
          scriptureRef: '1 Corinthians 1:27'
        },
        {
          english: 'When I am weak, then I am strong.',
          japanese: '私が弱いときにこそ、私は強いのです。',
          scriptureRef: '2 Corinthians 12:10'
        }
      ],
      notesJa: 'as ..., yet ... の呼応を反復することで、世俗の尺度と神の御国の尺度の絶対的隔絶を読者に強く迫ります。',
      miniQuiz: [
        {
          question: 'He who finds his life will lose it, and he who loses his life for My sake will _____ it.',
          options: ['find', 'finding', 'found', 'lose'],
          answerIndex: 0,
          explanationJa: '完全な対照逆説対句を完成させる「find」が正解です（マタイ10:39）。'
        }
      ]
    }
  ],
  vocabulary: [
    {
      id: 'c1-v-eschatology',
      word: 'eschatology',
      level: 'c1',
      phoneticIpa: '/ˌɛs.kəˈtɑː.lə.dʒi/',
      partOfSpeech: 'noun',
      japaneseMeaning: '終末論、世の終わりに関する神学的教理',
      exampleSentence: 'Biblical eschatology directs our eyes to the glorious return of Christ.',
      exampleJapanese: '聖書的終末論は、私たちの目をキリストの栄光ある再臨へと向けさせる。',
      scriptureReference: 'Titus 2:13'
    },
    {
      id: 'c1-v-theodicy',
      word: 'theodicy',
      level: 'c1',
      phoneticIpa: '/θiˈɑː.də.si/',
      partOfSpeech: 'noun',
      japaneseMeaning: '神義論、悪の存在と神の正義の調和的弁証',
      exampleSentence: 'The book of Job grapples with the mystery of theodicy and divine justice.',
      exampleJapanese: 'ヨブ記は神義論と神の正義という深遠な神秘と格闘している。',
      scriptureReference: 'Job 38:1-4'
    },
    {
      id: 'c1-v-hermeneutics',
      word: 'hermeneutics',
      level: 'c1',
      phoneticIpa: '/ˌhɜːr.məˈnuː.tɪks/',
      partOfSpeech: 'noun',
      japaneseMeaning: '解釈学、聖書解釈の諸原理・方法論',
      exampleSentence: 'Sound hermeneutics seeks to understand the grammatical-historical sense of Scripture.',
      exampleJapanese: '健全な聖書解釈学は、聖書の文法的・歴史的意味の理解を追求する。',
      scriptureReference: '2 Timothy 2:15'
    },
    {
      id: 'c1-v-exegetical',
      word: 'exegetical',
      level: 'c1',
      phoneticIpa: '/ˌɛk.səˈdʒɛt.ɪ.kəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '釈義的な、原典の本文批評と解読に基づく',
      exampleSentence: 'The exegetical analysis of the Greek text clarifies the apostle\'s theological nuances.',
      exampleJapanese: 'ギリシア語本文の釈義的分析により、使徒の神学的ニュアンスが明瞭になる。',
      scriptureReference: 'Romans 5:12'
    },
    {
      id: 'c1-v-kenosis',
      word: 'kenosis',
      level: 'c1',
      phoneticIpa: '/kɪˈnoʊ.sɪs/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'ケノーシス、御子の自己限定・自己無化',
      exampleSentence: 'Christ\'s kenosis is revealed in His taking the form of a lowly bondservant.',
      exampleJapanese: 'キリストの自己限定（ケノーシス）は、卑しいしもべの姿を取られたことに現れている。',
      scriptureReference: 'Philippians 2:7'
    },
    {
      id: 'c1-v-transcendent',
      word: 'transcendent',
      level: 'c1',
      phoneticIpa: '/trænˈsɛn.dənt/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '超越的な、あらゆる被造物を超越した',
      exampleSentence: 'The transcendent holiness of God inspires both profound reverence and awe.',
      exampleJapanese: '神の超越的聖潔は、深甚な敬畏と畏敬の双方を呼び起こす。',
      scriptureReference: 'Isaiah 6:3'
    },
    {
      id: 'c1-v-immutable',
      word: 'immutable',
      level: 'c1',
      phoneticIpa: '/ɪˈmjuː.tə.bəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '不変の、改変されることのない',
      exampleSentence: 'God confirmed His promise with an oath, displaying the immutable nature of His counsel.',
      exampleJapanese: '神は誓約によって約束を確証し、その御旨の不変性を明示された。',
      scriptureReference: 'Hebrews 6:17'
    },
    {
      id: 'c1-v-inexhaustible',
      word: 'inexhaustible',
      level: 'c1',
      phoneticIpa: '/ˌɪn.ɪɡˈzɔː.stə.bəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '無尽蔵の、尽きることのない',
      exampleSentence: 'To preach to the Gentiles the unsearchable and inexhaustible riches of Christ.',
      exampleJapanese: 'キリストの測り知れない、無尽蔵の富を異邦人に宣べ伝えるために。',
      scriptureReference: 'Ephesians 3:8'
    },
    {
      id: 'c1-v-efficacious',
      word: 'efficacious',
      level: 'c1',
      phoneticIpa: '/ˌɛf.əˈkeɪ.ʃəs/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '確実な効力を発揮する、神的に有効な',
      exampleSentence: 'The word of God is living, active, and efficacious in the hearts of those who believe.',
      exampleJapanese: '神のことばは生きていて力があり、信じる者の心の中で確実に効力を発揮する。',
      scriptureReference: 'Hebrews 4:12'
    },
    {
      id: 'c1-v-propitiatory',
      word: 'propitiatory',
      level: 'c1',
      phoneticIpa: '/prəˈpɪʃ.i.əˌtɔːr.i/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '贖罪的な、神の義の怒りをなだめる',
      exampleSentence: 'Christ offered a propitiatory sacrifice to satisfy divine justice and mercy.',
      exampleJapanese: 'キリストは神の正義とあわれみを満たすため、なだめの生贄を献げられた。',
      scriptureReference: 'Romans 3:25'
    },
    {
      id: 'c1-v-expiation',
      word: 'expiation',
      level: 'c1',
      phoneticIpa: '/ˌɛk.spiˈeɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '罪の償い、贖罪、罪の消滅',
      exampleSentence: 'He made expiation for the sins of the people through the offering of Himself.',
      exampleJapanese: '主はご自身を献げることを通して、民の罪の償いを成し遂げられた。',
      scriptureReference: 'Hebrews 2:17'
    },
    {
      id: 'c1-v-ecclesiastical',
      word: 'ecclesiastical',
      level: 'c1',
      phoneticIpa: '/ɪˌkliː.ziˈæs.tɪ.kəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '教会的な、教会秩序に関する',
      exampleSentence: 'Paul laid down ecclesiastical guidelines for the appointment of elders and overseers.',
      exampleJapanese: 'パウロは長老や監督の任命に関する教会的指針を定めた。',
      scriptureReference: 'Titus 1:5'
    },
    {
      id: 'c1-v-dogmatic',
      word: 'dogmatic',
      level: 'c1',
      phoneticIpa: '/dɔːɡˈmæt.ɪk/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '教理的な、確立された真理の規範に関する',
      exampleSentence: 'The early creeds established dogmatic definitions against rising heresies.',
      exampleJapanese: '初期の信条は、台頭する異端に対して教理的定義を確立した。',
      scriptureReference: '1 Timothy 3:16'
    },
    {
      id: 'c1-v-liturgy',
      word: 'liturgy',
      level: 'c1',
      phoneticIpa: '/ˈlɪt.ər.dʒi/',
      partOfSpeech: 'noun',
      japaneseMeaning: '典礼、礼拝順序、神聖な公の奉仕',
      exampleSentence: 'Christ is a minister of the sanctuary and of the true tent, conducting a heavenly liturgy.',
      exampleJapanese: 'キリストは聖所と真の幕屋の奉仕者であり、天上の典礼を執り行われる。',
      scriptureReference: 'Hebrews 8:2'
    },
    {
      id: 'c1-v-apocalyptic',
      word: 'apocalyptic',
      level: 'c1',
      phoneticIpa: '/əˌpɑː.kəˈlɪp.tɪk/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '黙示文学的な、神の終末的啓示に関する',
      exampleSentence: 'The apocalyptic visions of Daniel and John unveil the ultimate triumph of the Lamb.',
      exampleJapanese: 'ダニエルとヨハネの黙示的ヴィジョンは、小羊の究極の勝利を啓示する。',
      scriptureReference: 'Revelation 1:1'
    },
    {
      id: 'c1-v-doxology',
      word: 'doxology',
      level: 'c1',
      phoneticIpa: '/dɑːkˈsɑː.lə.dʒi/',
      partOfSpeech: 'noun',
      japaneseMeaning: '栄唱、頌栄、三位一体の神を讃える結びの祈り',
      exampleSentence: 'Paul concludes his doctrinal exposition with a triumphant doxology.',
      exampleJapanese: 'パウロはその教理的講解を勝利に満ちた栄唱（頌栄）で結んでいる。',
      scriptureReference: 'Romans 11:36'
    },
    {
      id: 'c1-v-unction',
      word: 'unction',
      level: 'c1',
      phoneticIpa: '/ˈʌŋk.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '聖霊による注ぎ、塗油、霊感',
      exampleSentence: 'You have an unction from the Holy One, and you know all things.',
      exampleJapanese: 'あなたがたは聖なる方からの注ぎ（塗油）を受けており、すべてのことを知っています。',
      scriptureReference: '1 John 2:20'
    },
    {
      id: 'c1-v-covenantal',
      word: 'covenantal',
      level: 'c1',
      phoneticIpa: '/ˌkʌv.əˈnæn.təl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '契約の、神聖な契約関係に基づく',
      exampleSentence: 'God\'s covenantal faithfulness ensures the final preservation of His elect.',
      exampleJapanese: '神の契約的真実性が、その選民の最終的堅忍を保証する。',
      scriptureReference: 'Psalm 89:34'
    },
    {
      id: 'c1-v-beatific',
      word: 'beatific',
      level: 'c1',
      phoneticIpa: '/ˌbiː.əˈtɪf.ɪk/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '至福の、神の栄光を直視する至高の喜びの',
      exampleSentence: 'The beatific vision of God\'s glory will be the eternal joy of the redeemed.',
      exampleJapanese: '神の栄光を直視する至福の直観は、贖われた者たちの永遠の歓喜となる。',
      scriptureReference: '1 John 3:2'
    },
    {
      id: 'c1-v-indefatigable',
      word: 'indefatigable',
      level: 'c1',
      phoneticIpa: '/ˌɪn.dɪˈfæt.ɪ.ɡə.bəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '疲れを知らない、不屈の、不断の',
      exampleSentence: 'The Lord is an indefatigable shepherd whose love never falters.',
      exampleJapanese: '主は疲れを知らない羊飼いであり、その愛は決して衰えることがない。',
      scriptureReference: 'Isaiah 40:28'
    },
    {
      id: 'c1-v-veracity',
      word: 'veracity',
      level: 'c1',
      phoneticIpa: '/vəˈræs.ə.ti/',
      partOfSpeech: 'noun',
      japaneseMeaning: '真実性、誠実さ、誤りのないこと',
      exampleSentence: 'The absolute veracity of Scripture rests on the very character of God.',
      exampleJapanese: '聖書の絶対的真実性は、神ご自身の本質に基づいている。',
      scriptureReference: 'Numbers 23:19'
    },
    {
      id: 'c1-v-venerable',
      word: 'venerable',
      level: 'c1',
      phoneticIpa: '/ˈvɛn.ər.ə.bəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '尊ぶべき、畏敬すべき、由緒ある',
      exampleSentence: 'The venerable traditions handed down by the apostles must be steadfastly preserved.',
      exampleJapanese: '使徒たちによって受け継がれた尊ぶべき伝承は、堅固に保持されねばならない。',
      scriptureReference: '2 Thessalonians 2:15'
    },
    {
      id: 'c1-v-preeminence',
      word: 'preeminence',
      level: 'c1',
      phoneticIpa: '/priːˈɛm.ə.nəns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '最高位、首位性、卓越',
      exampleSentence: 'That in all things Christ might have the preeminence.',
      exampleJapanese: '万物において、キリストご自身が首位を占められるためである。',
      scriptureReference: 'Colossians 1:18'
    },
    {
      id: 'c1-v-condescension',
      word: 'condescension',
      level: 'c1',
      phoneticIpa: '/ˌkɑːn.dɪˈsɛn.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'へりくだり、神が低き被造物の座へ降りてこられること',
      exampleSentence: 'Divine condescension is manifested in the mystery of the Incarnation.',
      exampleJapanese: '神が身を低くして降りてこられる恩寵は、受肉の神秘において明白に示されている。',
      scriptureReference: 'John 1:14'
    },
    {
      id: 'c1-v-consummate',
      word: 'consummate',
      level: 'c1',
      phoneticIpa: '/ˈkɑːn.sə.mət/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '完全な、至高の、完成された',
      exampleSentence: 'His sacrifice upon the cross was the consummate offering for the sins of the world.',
      exampleJapanese: '十字架上のその生贄は、世の罪のための完全無欠なる献げ物であった。',
      scriptureReference: 'Hebrews 10:14'
    },
    {
      id: 'c1-v-plenitude',
      word: 'plenitude',
      level: 'c1',
      phoneticIpa: '/ˈplɛn.ɪ.tuːd/',
      partOfSpeech: 'noun',
      japaneseMeaning: '満ち満ちること、充実、プレローマ',
      exampleSentence: 'For in Him dwells all the fullness and plenitude of the Godhead bodily.',
      exampleJapanese: 'キリストのうちにこそ、神格の満ち満ちた徳が形をとって宿っている。',
      scriptureReference: 'Colossians 2:9'
    },
    {
      id: 'c1-v-apostolic',
      word: 'apostolic',
      level: 'c1',
      phoneticIpa: '/ˌæp.əˈstɑː.lɪk/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '使徒的な、使徒の権威と教えに由来する',
      exampleSentence: 'They devoted themselves to the apostolic doctrine and the breaking of bread.',
      exampleJapanese: '彼らは使徒の教えとパンを裂くことにひたすら専念した。',
      scriptureReference: 'Acts 2:42'
    },
    {
      id: 'c1-v-penitence',
      word: 'penitence',
      level: 'c1',
      phoneticIpa: '/ˈpɛn.ɪ.təns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '痛悔、罪を悲しみ悔やむこと',
      exampleSentence: 'A broken and contrite heart in true penitence God will not despise.',
      exampleJapanese: '砕かれた悔いる心、真の痛悔を、神は決して軽んじられません。',
      scriptureReference: 'Psalm 51:17'
    },
    {
      id: 'c1-v-inscrutable',
      word: 'inscrutable',
      level: 'c1',
      phoneticIpa: '/ɪnˈskruː.tə.bəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '探り得ない、不可解な、人知を超えた',
      exampleSentence: 'His ways are inscrutable and past finding out.',
      exampleJapanese: '主の道は探り難く、人の知り得ないところである。',
      scriptureReference: 'Romans 11:33'
    },
    {
      id: 'c1-v-sanctimonious',
      word: 'sanctimonious',
      level: 'c1',
      phoneticIpa: '/ˌsæŋk.tɪˈmoʊ.ni.əs/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '見せかけの敬虔な、偽善的な',
      exampleSentence: 'Jesus denounced the sanctimonious displays of the Pharisees, demanding genuine inward purity.',
      exampleJapanese: 'イエスはパリサイ人たちの見せかけの敬虔を糾弾し、真の内面的な清さを求められた。',
      scriptureReference: 'Matthew 23:27'
    }
  ],
  readings: [
  {
    "id": "c1-reading-servant",
    "level": "c1",
    "title": "The Suffering Servant of Isaiah (Isaiah 53:1–7)",
    "source": "Isaiah 53:1–7",
    "passage": "Who has believed our message and to whom has the arm of the Lord been revealed? He grew up before Him like a tender shoot, and like a root out of dry ground. He had no beauty or majesty to attract us to Him, nothing in His appearance that we should desire Him. He was despised and rejected by humankind, a man of suffering, and familiar with pain. Surely He took up our pain and bore our suffering, yet we considered Him punished by God, stricken by Him, and afflicted. But He was pierced for our transgressions, He was crushed for our iniquities; the punishment that brought us peace was on Him, and by His wounds we are healed. We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on Him the iniquity of us all.",
    "passageJapanese": "私たちが聞いたことを、だれが信じたか。主の御腕は、だれに現されたか。彼は主の前に、若枝のように、乾いた地から出た根のように育った。彼には私たちを引きつける麗しさも威厳もなく、私たちが慕うような姿もなかった。彼は蔑まれ、人々から見捨てられ、悲しみの人で、病を知っていた。まことに、彼は私たちの病を負い、私たちの痛みを担った。それなのに、私たちは彼を、神に打たれ、苦しめられた者と考えた。しかし、彼は私たちの背きのために刺し通され、私たちの咎のために砕かれたのだ。彼への懲らしめが私たちに平和をもたらし、彼の受けた傷によって、私たちは癒やされた。私たちはみな、羊のようにさまよい、おのおの自分勝手な道に向かって行った。しかし、主は私たちのすべての咎を彼に負わせられた。",
    "sentencePairs": [
      {
        "english": "Who has believed our message and to whom has the arm of the Lord been revealed?",
        "japanese": "私たちが語る知らせをだれが信じたか。主の御腕はだれに啓示されたか。"
      },
      {
        "english": "He grew up before Him like a tender shoot, and like a root out of dry ground.",
        "japanese": "彼は主の御前で若枝のように、潤いのない乾いた地から出た根のように育った。"
      },
      {
        "english": "He had no beauty or majesty to attract us to Him, nothing in His appearance that we should desire Him.",
        "japanese": "彼には人を引きつける麗しさも威厳もなく、見目麗しい容姿も持ち合わせていなかった。"
      },
      {
        "english": "He was despised and rejected by humankind, a man of suffering, and familiar with pain.",
        "japanese": "彼は人々に侮られ、見捨てられ、痛患を背負い、悲哀を知る人であった。"
      },
      {
        "english": "Surely He took up our pain and bore our suffering, yet we considered Him punished by God, stricken by Him, and afflicted.",
        "japanese": "まことに彼は私たちの痛みを負い、患難を担ったのに、私たちは彼が神に打たれて苦しめられたとみなした。"
      },
      {
        "english": "But He was pierced for our transgressions, He was crushed for our iniquities; the punishment that brought us peace was on Him, and by His wounds we are healed.",
        "japanese": "しかし彼が刺し通されたのは私たちの背きのため、砕かれたのは私たちの咎のためであり、彼への懲罰が私たちに平安を与え、その傷により私たちは癒やされた。"
      },
      {
        "english": "We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on Him the iniquity of us all.",
        "japanese": "私たちはみな羊のようにさまよい、おのおの勝手な道へと向かったが、主は私たちすべての咎を彼の上に置かれた。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "By what are we healed according to Isaiah 53:5?",
        "options": [
          "By His wounds",
          "By human philosophy",
          "By herbal potions",
          "By military victories"
        ],
        "answerIndex": 0,
        "explanationJa": "「by His wounds we are healed（彼の受けた傷によって私たちは癒やされた）」が答えです。"
      }
    ]
  },
  {
    "id": "c1-reading-majesty",
    "level": "c1",
    "title": "The Radiance of God’s Glory (Hebrews 1:1–6)",
    "source": "Hebrews 1:1–6",
    "passage": "In the past God spoke to our ancestors through the prophets at many times and in various ways, but in these last days He has spoken to us by His Son, whom He appointed heir of all things, and through whom also He made the universe. The Son is the radiance of God’s glory and the exact representation of His being, sustaining all things by His powerful word. After He had provided purification for sins, He sat down at the right hand of the Majesty in heaven. So He became as much superior to the angels as the name He has inherited is superior to theirs.",
    "passageJapanese": "神は昔、預言者たちを通して、多くの時代に、多様な方法で先祖たちに語られましたが、この終わりの時には、御子によって私たちに語られました。神はこの御子を万物の相続者と定め、また御子によって世界を造られました。御子は神の栄光の輝き、また神の本質の完全な現れであり、その力あることばによって万物を保持しておられます。御子は罪のきよめを成し遂げてから、天の高みにおられる大能の神の右の座に着かれました。こうして御子は、受け継いだ名が御使いたちの名よりはるかに優れているように、御使いたちよりもはるかに優れた方となられたのです。",
    "sentencePairs": [
      {
        "english": "In the past God spoke to our ancestors through the prophets at many times and in various ways, but in these last days He has spoken to us by His Son, whom He appointed heir of all things, and through whom also He made the universe.",
        "japanese": "神はかつて預言者を通して多様な形で先祖に語られたが、終わりの日に御子によって語られた。この方を万物の相続者とし世界を創造されたのである。"
      },
      {
        "english": "The Son is the radiance of God’s glory and the exact representation of His being, sustaining all things by His powerful word.",
        "japanese": "御子は神の栄光の輝き、神の本質の精密な印刻であり、その大能の言葉によって万象を支え保っておられる。"
      },
      {
        "english": "After He had provided purification for sins, He sat down at the right hand of the Majesty in heaven.",
        "japanese": "罪の贖いときよめを成し遂げた後、御子は至高の天における威厳の神の右の座に着座された。"
      },
      {
        "english": "So He became as much superior to the angels as the name He has inherited is superior to theirs.",
        "japanese": "かくして御子は、相続された至高の名が御使いたちに勝るように、御使いたちをはるかに超越する存在となられた。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "What does the Son sustain all things by?",
        "options": [
          "His powerful word",
          "The gravitational field",
          "The wisdom of kings",
          "The heat of the sun"
        ],
        "answerIndex": 0,
        "explanationJa": "「sustaining all things by His powerful word（その力ある言葉によって）」が根拠です。"
      }
    ]
  }
]
};
