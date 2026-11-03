import { LevelData } from '../types';

export const b1Data: LevelData = {
  meta: {
    id: 'b1',
    name: 'Level B1',
    japaneseName: '中級・知恵の言葉',
    cefr: 'B1',
    ielts: 'IELTS 4.5–5.5',
    descriptionJa: '現在完了進行形、過去完了形、仮定法過去（反実仮想）、前置詞＋関係代名詞、使役構文、譲歩構文と箴言の訓戒。',
    scriptureThemeJa: '箴言・伝道者の書「すべてに時がある」',
    badgeColor: 'var(--level-b1)',
    depthColor: 'var(--level-b1)'
  },
  grammar: [
    {
      id: 'b1-present-perfect-continuous',
      level: 'b1',
      title: 'Present Perfect Continuous (have been + V-ing) — 永続する恵みと信従',
      japaneseMeaning: '（過去から現在までずっと）〜し続けている',
      structureFormula: 'Subject + have / has + been + Verb-ing',
      explanationJa: '過去に始まった動作や祈りが現在まで中断されることなく継続し、今この瞬間もなお続いていることを力強く表現します。神の不変の慈しみや、信仰者の弛まぬ祈りを叙述します。',
      scriptureCitation: 'Psalm 23:6, Hebrews 13:8',
      examples: [
        {
          english: 'His mercy has been enduring from generation to generation.',
          japanese: '主のあわれみは代々にわたって絶えることなく続いています。',
          scriptureRef: 'Luke 1:50'
        },
        {
          english: 'We have been praying for you constantly since the day we heard about you.',
          japanese: '私たちはあなたのことを聞いた日から、絶えずあなたのために祈り続けています。',
          scriptureRef: 'Colossians 1:9'
        },
        {
          english: 'The whole creation has been groaning together in the pains of childbirth until now.',
          japanese: '被造物全体が、今に至るまでともにうめき、ともに産みの苦しみをしています。',
          scriptureRef: 'Romans 8:22'
        }
      ],
      notesJa: '単なる状態の継続（know, believe など）には現在完了形を用い、生き生きとした動作・活動・苦難の継続には現在完了進行形（have been doing）を用います。',
      miniQuiz: [
        {
          question: 'They _____ waiting for the consolation of Israel with patient faith.',
          options: ['have been', 'has been', 'was', 'are been'],
          answerIndex: 0,
          explanationJa: '主語 They に対して継続を表す完了進行形「have been」が正解です。'
        }
      ]
    },
    {
      id: 'b1-past-perfect',
      level: 'b1',
      title: 'Past Perfect (had + p.p.) — 先立つ救済史と約束の成就',
      japaneseMeaning: '（過去のある時点より前にすでに）〜していた',
      structureFormula: 'Subject + had + Past Participle',
      explanationJa: '過去のある基準時よりも「さらに前（大過去）」に完了した事柄や原因を表します。旧約の預言が新約の出来事の前にすでに語られていたことなど、救済史の時間軸を整理する際に不可欠です。',
      scriptureCitation: 'Galatians 3:17, Romans 4:21',
      examples: [
        {
          english: 'The law, which came 430 years later, does not invalidate a covenant previously established by God.',
          japanese: '神によってあらかじめ立てられていた契約を、430年後にできた律法が無効にすることはありません。',
          scriptureRef: 'Galatians 3:17'
        },
        {
          english: 'Now the Lord had said to Abram, "Go from your country to the land that I will show you."',
          japanese: '主はアブラムにすでに仰せられていた。「あなたは生まれ故郷を離れ、わたしが示す地へ行け。」',
          scriptureRef: 'Genesis 12:1'
        },
        {
          english: 'Abraham believed God, being fully persuaded that what God had promised, He was also able to perform.',
          japanese: 'アブラハムは、神が約束されたことは神には成就する力もあると確信していた。',
          scriptureRef: 'Romans 4:21'
        }
      ],
      notesJa: '過去形の文文脈において、時間的な前後関係を明確にするために had + 過去分詞 を配置します。',
      miniQuiz: [
        {
          question: 'Before the rooster crowed, Peter _____ denied Him three times.',
          options: ['had', 'has', 'having', 'was'],
          answerIndex: 0,
          explanationJa: '鶏が鳴いた（過去）よりも前に否認していた（大過去）ため「had denied」となります。'
        }
      ]
    },
    {
      id: 'b1-second-conditional',
      level: 'b1',
      title: 'Second Conditional (If + Past, Would) — 仮想と謙譲の反実仮想',
      japaneseMeaning: 'もし（今）〜であるならば、…であろうに（現在の事実に反する仮定）',
      structureFormula: 'If + Subject + Past Verb (were), Subject + would / could / might + Base Verb',
      explanationJa: '現在の事実とは異なる事態を仮定し、「もし今そうであるならば…」と述べる構文です。自らの至らなさを自覚する謙遜の表明や、霊的な問いかけに用いられます。',
      scriptureCitation: '1 Corinthians 13:1-3, Luke 7:39',
      examples: [
        {
          english: 'If I spoke in the tongues of men and of angels, but had not love, I would be a noisy gong.',
          japanese: 'たとえ人の言葉や御使いの言葉を語ろうとも、愛がなければ、私は鳴る銅鑼にすぎない。',
          scriptureRef: '1 Corinthians 13:1'
        },
        {
          english: 'If this man were a prophet, he would know who is touching him and what kind of woman she is.',
          japanese: 'もしこの人が預言者なら、自分に触れている女が誰で、どんな女か知っているはずだ。',
          scriptureRef: 'Luke 7:39'
        },
        {
          english: 'If God were your Father, you would love Me, for I came from God.',
          japanese: 'もし神があなたがたの父であるなら、あなたがたはわたしを愛するはずです。',
          scriptureRef: 'John 8:42'
        }
      ],
      notesJa: 'If節の be動詞には主語の単複に関わらず were を用いるのが伝統的かつ格調高い書法です（If I were, If this man were）。',
      miniQuiz: [
        {
          question: 'If you had faith like a grain of mustard seed, you _____ say to this mountain, "Move!"',
          options: ['could', 'can', 'will', 'must'],
          answerIndex: 0,
          explanationJa: '仮定法過去の帰結節なので助動詞の過去形「could」が正解です（ルカ17:6）。'
        }
      ]
    },
    {
      id: 'b1-relative-prepositions',
      level: 'b1',
      title: 'Preposition + Relative Pronoun (in whom, by which) — 高尚な関係構文',
      japaneseMeaning: 'その方にあって、それによって（関係詞の前に前置詞が置かれる構文）',
      structureFormula: 'Noun + Preposition (in / by / through / with / for) + whom / which + Clause',
      explanationJa: '文末の前置詞を関係代名詞の直前に引き上げ、重厚で整然とした論理を組み立てる格調高い構文です。新約書簡の教理的宣言において中心的な役割を果たします。',
      scriptureCitation: 'Ephesians 1:7, Colossians 1:16',
      examples: [
        {
          english: 'In Him we have redemption through His blood, the forgiveness of sins.',
          japanese: 'この御子にあって、私たちはその血による贖い、罪の赦しを受けています。',
          scriptureRef: 'Ephesians 1:7'
        },
        {
          english: 'For by Him all things were created, in heaven and on earth, visible and invisible.',
          japanese: '万物は御子によって造られたからです。天にあるものも地にあるものも、見えるものも見えないものも。',
          scriptureRef: 'Colossians 1:16'
        },
        {
          english: 'There is no other name under heaven given among men by which we must be saved.',
          japanese: '私たちが救われるべき名は、天下にこの名のほかには人間には与えられていません。',
          scriptureRef: 'Acts 4:12'
        }
      ],
      notesJa: '前置詞の直後には that を置くことはできず、人を先行詞とするなら whom、事物を先行詞とするなら which を用います。',
      miniQuiz: [
        {
          question: 'This is my beloved Son, in _____ I am well pleased.',
          options: ['whom', 'who', 'which', 'whose'],
          answerIndex: 0,
          explanationJa: '前置詞 in の直後の人称関係代名詞は目的格「whom」が正解です（マタイ3:17）。'
        }
      ]
    },
    {
      id: 'b1-modals-deduction',
      level: 'b1',
      title: 'Modals of Deduction (must have, cannot be, might) — 確信と推量',
      japaneseMeaning: '〜に違いない・〜であるはずがない・〜かもしれない',
      structureFormula: 'Subject + must / cannot / might + Base Verb / have + p.p.',
      explanationJa: '証拠や状況に基づき、論理的確信や推論を述べる助動詞の用法です。「must have + 過去分詞（〜したに違いない）」は過去の出来事に対する確信的推量を表します。',
      scriptureCitation: 'Acts 12:15, John 9:33',
      examples: [
        {
          english: 'If this man were not from God, he could do nothing.',
          japanese: 'もしこの人が神から出たのでないなら、何一つできないはずです。',
          scriptureRef: 'John 9:33'
        },
        {
          english: 'They said, "It must be his angel!" for they could not believe it was Peter.',
          japanese: '彼らは「それは彼の天使に違いない！」と言った。ペテロ本人とは信じられなかったからである。',
          scriptureRef: 'Acts 12:15'
        },
        {
          english: 'Truly this man was the Son of God; He must have been righteous.',
          japanese: 'まことにこの人は神の子であった。義人であったに違いない。',
          scriptureRef: 'Mark 15:39'
        }
      ],
      notesJa: '「〜だったに違いない」は must have + p.p.、「〜だったはずがない」は cannot have + p.p. で表します。',
      miniQuiz: [
        {
          question: 'He is not here; He _____ risen, just as He said.',
          options: ['has', 'must', 'can', 'should'],
          answerIndex: 0,
          explanationJa: '福音書の事実文として「He has risen」となります。'
        }
      ]
    },
    {
      id: 'b1-causatives',
      level: 'b1',
      title: 'Causative Verbs (make, let, have) — 使役構文と神の御手',
      japaneseMeaning: '〜させる・〜させてくださる',
      structureFormula: 'Subject + make / let / have + Object + Base Verb',
      explanationJa: '主語が対象に何らかの動作を行わせる構文です。聖書では神が光を輝かせ、信徒を横たえさせ、恵みを注がせる主権的御業として用いられます。',
      scriptureCitation: 'Psalm 23:2, 2 Corinthians 4:6',
      examples: [
        {
          english: 'He makes me lie down in green pastures; He leads me beside quiet waters.',
          japanese: '主は私を緑の牧草地に伏させ、憩いの水のほとりに導かれます。',
          scriptureRef: 'Psalm 23:2'
        },
        {
          english: 'For God, who said, "Let light shine out of darkness," has shone in our hearts.',
          japanese: '「闇の中から光が照り出よ」と仰せられた神が、私たちの心を照らしてくださったのです。',
          scriptureRef: '2 Corinthians 4:6'
        },
        {
          english: 'Let the words of my mouth and the meditation of my heart be acceptable in Your sight.',
          japanese: '私の口のことばと私の心の思いが、あなたの御前に快く受け入れられますように。',
          scriptureRef: 'Psalm 19:14'
        }
      ],
      notesJa: '使役動詞 make, let の後ろの補語には「toのない原形不定詞」を置きます（× makes me to lie down → ○ makes me lie down）。',
      miniQuiz: [
        {
          question: 'The Lord causes His face to shine upon you, and _____ gracious to you.',
          options: ['be', 'is', 'being', 'been'],
          answerIndex: 0,
          explanationJa: '祝祷構文における原形「be gracious」が正解です（民数記6:25）。'
        }
      ]
    },
    {
      id: 'b1-subjunctive-mandative',
      level: 'b1',
      title: 'Mandative Subjunctive (demand, decree that S + Base Verb) — 要求・掟の仮定法現在',
      japaneseMeaning: '〜すべきことを命じる・定める',
      structureFormula: 'Subject + command / decree / insist + that + Subject + (should) + Base Verb',
      explanationJa: '掟、命令、願いを表す動詞の直後の that節において、主語の三人称単数に関わらず「動詞の原形」を用いる荘厳な文法規則です。',
      scriptureCitation: 'John 13:34, 1 Thessalonians 4:3',
      examples: [
        {
          english: 'This is the will of God, that each of you know how to possess his own vessel in sanctification.',
          japanese: '神の御心は、あなたがたが聖潔を保ち、自らの器を保つことを知ることです。',
          scriptureRef: '1 Thessalonians 4:3'
        },
        {
          english: 'He commanded that light shine in the midst of darkness.',
          japanese: '神は闇のただ中に光が輝き出よと命じられた。',
          scriptureRef: 'Genesis 1:3'
        },
        {
          english: 'The decree required that all people bow before the King of kings.',
          japanese: '勅令は、すべての民が王の王の御前にひれ伏すべきことを定めた。',
          scriptureRef: 'Daniel 3:4'
        }
      ],
      notesJa: '三単現の -s は付きません。He commands that he be holy（× he is holy）のように原形を用います。',
      miniQuiz: [
        {
          question: 'The Lord commands that everyone _____ from evil.',
          options: ['turn', 'turns', 'turned', 'turning'],
          answerIndex: 0,
          explanationJa: '要求動詞 commands に続く that節なので原形「turn」が正解です。'
        }
      ]
    },
    {
      id: 'b1-participial-constructions',
      level: 'b1',
      title: 'Participial Constructions (Participles modifying clauses) — 簡潔なる分詞構文',
      japaneseMeaning: '〜しながら・〜したとき・〜なので（時・理由・付帯状況）',
      structureFormula: 'Present Participle (V-ing) / Past Participle (p.p.), Subject + Verb...',
      explanationJa: '接続詞と主語を省略し、分詞（V-ing または p.p.）で始まる句によって時・理由・付帯状況を簡潔に添える文語構文です。使徒の働きや福音書の劇的展開を叙述します。',
      scriptureCitation: 'Matthew 28:19, Hebrews 12:1-2',
      examples: [
        {
          english: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
          japanese: 'それゆえ、あなたがたは行って、すべての国の人々を弟子とし、父と子と聖霊の名によって彼らにバプテスマを授けなさい。',
          scriptureRef: 'Matthew 28:19'
        },
        {
          english: 'Looking to Jesus, the founder and perfecter of our faith, let us run with endurance.',
          japanese: '信仰の創始者であり完成者であるイエスを見つめながら、耐え忍んで走り続けようではありませんか。',
          scriptureRef: 'Hebrews 12:2'
        },
        {
          english: 'Being justified by faith, we have peace with God through our Lord Jesus Christ.',
          japanese: '信仰によって義と認められた私たちは、主イエス・キリストによって神との平和を持っています。',
          scriptureRef: 'Romans 5:1'
        }
      ],
      notesJa: '能動の付帯状況には V-ing、受動の理由・前提には過去分詞（Being p.p. の Being が省略された形）を用います。',
      miniQuiz: [
        {
          question: '_____ rooted and grounded in love, you may have power to comprehend.',
          options: ['Being', 'Be', 'Been', 'To be'],
          answerIndex: 0,
          explanationJa: '受動態の分詞構文「（愛に根ざし、基礎を据えられて）Being rooted」が正解です（エペソ3:17）。'
        }
      ]
    },
    {
      id: 'b1-concessive-clauses',
      level: 'b1',
      title: 'Concessive Clauses (Although, Even though, Whereas) — 逆境と確信の対比',
      japaneseMeaning: 'たとえ〜であっても・〜にもかかわらず',
      structureFormula: 'Although / Even though + Subject + Verb, Subject + Verb...',
      explanationJa: 'いかに過酷な現実や欠乏があろうとも、それを乗り越える信仰の確信を表明する譲歩構文です。預言者ハバククの賛歌やパウロの告白を支える文法です。',
      scriptureCitation: 'Habakkuk 3:17-18, 2 Corinthians 4:8-9',
      examples: [
        {
          english: 'Though the fig tree should not blossom, nor fruit be on the vines, yet I will rejoice in the Lord.',
          japanese: 'いちじくの木に花は咲かず、ぶどうの木に実はならずとも、私は主にあって喜び躍ります。',
          scriptureRef: 'Habakkuk 3:17-18'
        },
        {
          english: 'We are afflicted in every way, but not crushed; perplexed, but not driven to despair.',
          japanese: '私たちは四方から苦しめられますが、押しつぶされません。途方に暮れますが、行き詰まりません。',
          scriptureRef: '2 Corinthians 4:8'
        },
        {
          english: 'Even though our outer self is wasting away, our inner self is being renewed day by day.',
          japanese: 'たとえ私たちの外なる人は衰えても、内なる人は日々新しくされています。',
          scriptureRef: '2 Corinthians 4:16'
        }
      ],
      notesJa: 'Though や Even though は事実に基づく譲歩を表し、Even if は仮定に基づく譲歩を表します。文末や主節に yet や nevertheless が響き合うことがあります。',
      miniQuiz: [
        {
          question: '_____ He was a Son, He learned obedience through what He suffered.',
          options: ['Although', 'Because', 'Since', 'Unless'],
          answerIndex: 0,
          explanationJa: '御子であられたにもかかわらず（譲歩）苦しみを通して従順を学ばれたため「Although」が正解です（ヘブル5:8）。'
        }
      ]
    },
    {
      id: 'b1-reported-speech',
      level: 'b1',
      title: 'Indirect Speech & Tense Shift — 預言と証言の間接話法',
      japaneseMeaning: '〜が…と言った・告げた',
      structureFormula: 'Reporting Subject + said / testified + that + Subject + Shifted Verb...',
      explanationJa: '直接引用の引用符を用いず、主節の時制に合わせて従属節の時制を一段過去へシフトさせる話法です。信仰の告白や預言の伝達において客観的な記録性を与えます。',
      scriptureCitation: 'Matthew 16:16, John 9:25',
      examples: [
        {
          english: 'Simon Peter replied that He was the Christ, the Son of the living God.',
          japanese: 'シモン・ペテロは、イエスが生ける神の御子キリストであられると答えた。',
          scriptureRef: 'Matthew 16:16'
        },
        {
          english: 'He answered that one thing he knew: that though he was blind, now he saw.',
          japanese: '彼は一つのことだけ知っていると答えた。自分が盲目であったが、今は見えているということである。',
          scriptureRef: 'John 9:25'
        },
        {
          english: 'The prophet declared that the righteous shall live by his faith.',
          japanese: '預言者は、義人は信仰によって生きると宣言した。',
          scriptureRef: 'Habakkuk 2:4'
        }
      ],
      notesJa: '主節が過去形の場合、従属節の現在形は過去形へ、現在完了は過去完了へ変化します。ただし不変の真理を述べる場合は現在形を保つこともあります。',
      miniQuiz: [
        {
          question: 'The disciples remembered that Jesus _____ spoken these words to them.',
          options: ['had', 'has', 'will have', 'is'],
          answerIndex: 0,
          explanationJa: '思い出した（過去）よりも前に語られていた（過去完了）ため「had spoken」となります。'
        }
      ]
    }
  ],
  vocabulary: [
    {
      id: 'b1-v-providence',
      word: 'providence',
      level: 'b1',
      phoneticIpa: '/ˈprɑː.vɪ.dəns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '摂理、神の配慮、見守り',
      exampleSentence: 'By the providence of God, all things work together for good.',
      exampleJapanese: '神の摂理によって、すべてのことが相働いて益となります。',
      scriptureReference: 'Romans 8:28'
    },
    {
      id: 'b1-v-redemption',
      word: 'redemption',
      level: 'b1',
      phoneticIpa: '/rɪˈdɛmp.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '贖い、買い戻し、解放',
      exampleSentence: 'In Him we have redemption through His blood.',
      exampleJapanese: '私たちはこの御子にあって、その血による贖いを受けています。',
      scriptureReference: 'Ephesians 1:7'
    },
    {
      id: 'b1-v-sanctification',
      word: 'sanctification',
      level: 'b1',
      phoneticIpa: '/ˌsæŋk.tɪ.fɪˈkeɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '聖化、聖別、清め',
      exampleSentence: 'For this is the will of God, your sanctification.',
      exampleJapanese: '神の御心は、あなたがたが聖化されることです。',
      scriptureReference: '1 Thessalonians 4:3'
    },
    {
      id: 'b1-v-tribulation',
      word: 'tribulation',
      level: 'b1',
      phoneticIpa: '/ˌtrɪb.jəˈleɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '患難、試練、大いなる苦しみ',
      exampleSentence: 'In the world you will have tribulation, but take heart; I have overcome the world.',
      exampleJapanese: '世にあっては患難があります。しかし勇気を出しなさい。わたしは世に勝ちました。',
      scriptureReference: 'John 16:33'
    },
    {
      id: 'b1-v-reconciliation',
      word: 'reconciliation',
      level: 'b1',
      phoneticIpa: '/ˌrɛk.ənˌsɪl.iˈeɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '和解、仲直り、融和',
      exampleSentence: 'God was in Christ reconciling the world to Himself.',
      exampleJapanese: '神はキリストにあって、世をご自分と和解させられました。',
      scriptureReference: '2 Corinthians 5:19'
    },
    {
      id: 'b1-v-benevolence',
      word: 'benevolence',
      level: 'b1',
      phoneticIpa: '/bəˈnɛv.ə.ləns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '慈悲、善意、恵み深い親切',
      exampleSentence: 'He treats His creatures with infinite benevolence and care.',
      exampleJapanese: '主は無限の慈悲と心づくしをもって被造物を扱われます。',
      scriptureReference: 'Psalm 145:9'
    },
    {
      id: 'b1-v-testimony',
      word: 'testimony',
      level: 'b1',
      phoneticIpa: '/ˈtɛs.tɪ.moʊ.ni/',
      partOfSpeech: 'noun',
      japaneseMeaning: '証言、あかし、神の掟',
      exampleSentence: 'The testimony of the Lord is sure, making wise the simple.',
      exampleJapanese: '主の証言は確かであり、わきまえのない者を賢くする。',
      scriptureReference: 'Psalm 19:7'
    },
    {
      id: 'b1-v-intercession',
      word: 'intercession',
      level: 'b1',
      phoneticIpa: '/ˌɪn.tərˈsɛʃ.ən/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'とりなしの祈り、仲介',
      exampleSentence: 'Christ Jesus is at the right hand of God, who also makes intercession for us.',
      exampleJapanese: 'キリスト・イエスは神の右の座に着き、私たちのためにとりなしてくださっています。',
      scriptureReference: 'Romans 8:34'
    },
    {
      id: 'b1-v-resurrection',
      word: 'resurrection',
      level: 'b1',
      phoneticIpa: '/ˌrɛz.əˈrɛk.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '復活、よみがえり',
      exampleSentence: 'I am the resurrection and the life.',
      exampleJapanese: 'わたしは復活であり、命です。',
      scriptureReference: 'John 11:25'
    },
    {
      id: 'b1-v-disciple',
      word: 'disciple',
      level: 'b1',
      phoneticIpa: '/dɪˈsaɪ.pəl/',
      partOfSpeech: 'noun',
      japaneseMeaning: '弟子、使徒に従う者、門弟',
      exampleSentence: 'By this all people will know that you are my disciples, if you have love for one another.',
      exampleJapanese: '互いの間に愛があるなら、それによってすべての人があなたがたをわたしの弟子と知る。',
      scriptureReference: 'John 13:35'
    },
    {
      id: 'b1-v-doctrine',
      word: 'doctrine',
      level: 'b1',
      phoneticIpa: '/ˈdɑːk.trɪn/',
      partOfSpeech: 'noun',
      japaneseMeaning: '教理、教義、純正な教え',
      exampleSentence: 'Watch your life and doctrine closely; persevere in them.',
      exampleJapanese: '自分自身と教えとに油断なく心を配り、それらを忠実に守り続けなさい。',
      scriptureReference: '1 Timothy 4:16'
    },
    {
      id: 'b1-v-apostle',
      word: 'apostle',
      level: 'b1',
      phoneticIpa: '/əˈpɑː.səl/',
      partOfSpeech: 'noun',
      japaneseMeaning: '使徒、派遣された者',
      exampleSentence: 'Paul, an apostle of Christ Jesus by the will of God.',
      exampleJapanese: '神の御心によるキリスト・イエスの使徒パウロ。',
      scriptureReference: 'Ephesians 1:1'
    },
    {
      id: 'b1-v-epistle',
      word: 'epistle',
      level: 'b1',
      phoneticIpa: '/ɪˈpɪs.əl/',
      partOfSpeech: 'noun',
      japaneseMeaning: '使徒書簡、格式ある書状',
      exampleSentence: 'You are our epistle written in our hearts, known and read by all men.',
      exampleJapanese: 'あなたがたこそ、私たちの心に書きつけられた、すべての人に知られ読まれる私たちの手紙です。',
      scriptureReference: '2 Corinthians 3:2'
    },
    {
      id: 'b1-v-virtue',
      word: 'virtue',
      level: 'b1',
      phoneticIpa: '/ˈvɜːr.tʃuː/',
      partOfSpeech: 'noun',
      japaneseMeaning: '徳、高潔、霊的卓越性',
      exampleSentence: 'Supplement your faith with virtue, and virtue with knowledge.',
      exampleJapanese: 'あなたがたの信仰に徳を加え、徳に知識を加えなさい。',
      scriptureReference: '2 Peter 1:5'
    },
    {
      id: 'b1-v-transgression',
      word: 'transgression',
      level: 'b1',
      phoneticIpa: '/trænzˈɡrɛʃ.ən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '背き、違反、罪過',
      exampleSentence: 'Blessed is the one whose transgression is forgiven, whose sin is covered.',
      exampleJapanese: '幸いなことよ、その背きを赦され、罪をおおわれた人は。',
      scriptureReference: 'Psalm 32:1'
    },
    {
      id: 'b1-v-steadfast',
      word: 'steadfast',
      level: 'b1',
      phoneticIpa: '/ˈstɛd.fæst/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '揺るぎない、堅固な、不動の',
      exampleSentence: 'The steadfast love of the Lord never ceases; His mercies never come to an end.',
      exampleJapanese: '主のいつくしみは絶えることがなく、そのあわれみは尽きることがない。',
      scriptureReference: 'Lamentations 3:22'
    },
    {
      id: 'b1-v-decree',
      word: 'decree',
      level: 'b1',
      phoneticIpa: '/dɪˈkriː/',
      partOfSpeech: 'noun',
      japaneseMeaning: '布告、勅令、神の定め',
      exampleSentence: 'I will declare the decree of the Lord: He said to me, "You are My Son."',
      exampleJapanese: 'わたしは主の定めを告げ知らせよう。主はわたしに言われた。「お前はわたしの子。」',
      scriptureReference: 'Psalm 2:7'
    },
    {
      id: 'b1-v-wilderness',
      word: 'wilderness',
      level: 'b1',
      phoneticIpa: '/ˈwɪl.dər.nəs/',
      partOfSpeech: 'noun',
      japaneseMeaning: '荒野、人里離れた地、試練の荒野',
      exampleSentence: 'The voice of one crying in the wilderness: "Prepare the way of the Lord."',
      exampleJapanese: '荒野で叫ぶ者の声がする。「主の道を用意せよ。」',
      scriptureReference: 'Isaiah 40:3'
    },
    {
      id: 'b1-v-chastise',
      word: 'chastise',
      level: 'b1',
      phoneticIpa: '/tʃæsˈtaɪz/',
      partOfSpeech: 'verb',
      japaneseMeaning: '懲らしめる、訓練する、戒める',
      exampleSentence: 'For the Lord disciplines the one he loves, and chastises every son whom he receives.',
      exampleJapanese: '主はその愛する者を訓練し、受け入れるすべての子を懲らしめられる。',
      scriptureReference: 'Hebrews 12:6'
    },
    {
      id: 'b1-v-adversary',
      word: 'adversary',
      level: 'b1',
      phoneticIpa: '/ˈæd.vərˌsɛr.i/',
      partOfSpeech: 'noun',
      japaneseMeaning: '敵、対抗者、仇敵',
      exampleSentence: 'Be sober, be vigilant; because your adversary the devil walks about like a roaring lion.',
      exampleJapanese: '身を慎み、目を覚ましていなさい。あなたがたの敵である悪魔が、吠える獅子のように歩き回っています。',
      scriptureReference: '1 Peter 5:8'
    },
    {
      id: 'b1-v-reverence',
      word: 'reverence',
      level: 'b1',
      phoneticIpa: '/ˈrɛv.ər.əns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '敬虔、畏敬の念、尊崇',
      exampleSentence: 'Let us offer to God acceptable worship, with reverence and awe.',
      exampleJapanese: '敬虔と畏れをもって、神に喜ばれる礼拝を捧げようではありませんか。',
      scriptureReference: 'Hebrews 12:28'
    },
    {
      id: 'b1-v-sanctuary',
      word: 'sanctuary',
      level: 'b1',
      phoneticIpa: '/ˈsæŋk.tʃuˌɛr.i/',
      partOfSpeech: 'noun',
      japaneseMeaning: '聖所、聖域、至聖所',
      exampleSentence: 'Lift up your hands to the sanctuary, and bless the Lord.',
      exampleJapanese: '聖所に向かって手を上げ、主をほめたたえよ。',
      scriptureReference: 'Psalm 134:2'
    },
    {
      id: 'b1-v-pilgrimage',
      word: 'pilgrimage',
      level: 'b1',
      phoneticIpa: '/ˈpɪl.ɡrɪ.mɪdʒ/',
      partOfSpeech: 'noun',
      japaneseMeaning: '巡礼、信仰の旅路、地上の旅',
      exampleSentence: 'They confessed that they were strangers and pilgrims on the earth.',
      exampleJapanese: '彼らは地上では旅人であり寄留者であることを告白しました。',
      scriptureReference: 'Hebrews 11:13'
    },
    {
      id: 'b1-v-sovereignty',
      word: 'sovereignty',
      level: 'b1',
      phoneticIpa: '/ˈsɑːv.rən.ti/',
      partOfSpeech: 'noun',
      japaneseMeaning: '主権、至高の統治権',
      exampleSentence: 'The Lord has established His throne in heaven, and His sovereignty rules over all.',
      exampleJapanese: '主はその王座を天に堅く据えられ、その主権はすべてを統べ治める。',
      scriptureReference: 'Psalm 103:19'
    },
    {
      id: 'b1-v-solemn',
      word: 'solemn',
      level: 'b1',
      phoneticIpa: '/ˈsɑː.ləm/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '厳粛な、重々しい、神聖な',
      exampleSentence: 'Blow the trumpet in Zion, declare a holy fast, call a solemn assembly.',
      exampleJapanese: 'シオンで角笛を吹き鳴らせ。聖なる断食を布告し、厳粛な集会を招集せよ。',
      scriptureReference: 'Joel 2:15'
    },
    {
      id: 'b1-v-transfigure',
      word: 'transfigure',
      level: 'b1',
      phoneticIpa: '/trænsˈfɪɡ.jər/',
      partOfSpeech: 'verb',
      japaneseMeaning: '変貌させる、光り輝く姿に変える',
      exampleSentence: 'He was transfigured before them, and His face shone like the sun.',
      exampleJapanese: 'イエスは彼らの前で姿が変わり、その顔は太陽のように輝いた。',
      scriptureReference: 'Matthew 17:2'
    },
    {
      id: 'b1-v-righteousness',
      word: 'righteousness',
      level: 'b1',
      phoneticIpa: '/ˈraɪ.tʃəs.nəs/',
      partOfSpeech: 'noun',
      japaneseMeaning: '義、正義、公義',
      exampleSentence: 'He leads me in paths of righteousness for His name\'s sake.',
      exampleJapanese: '主は御名のために、私を義の小道に導かれます。',
      scriptureReference: 'Psalm 23:3'
    },
    {
      id: 'b1-v-condemnation',
      word: 'condemnation',
      level: 'b1',
      phoneticIpa: '/ˌkɑːn.dəmˈneɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '罪の定め、断罪、刑罰',
      exampleSentence: 'There is now no condemnation for those who are in Christ Jesus.',
      exampleJapanese: 'キリスト・イエスにある者には、今やいかなる罪の定めもありません。',
      scriptureReference: 'Romans 8:1'
    },
    {
      id: 'b1-v-manifest',
      word: 'manifest',
      level: 'b1',
      phoneticIpa: '/ˈmæn.ɪ.fɛst/',
      partOfSpeech: 'verb',
      japaneseMeaning: '明らかにする、公に示す、現す',
      exampleSentence: 'The love of God was manifested among us, that God sent His only Son.',
      exampleJapanese: '神はそのひとり子を遣わすことによって、神の愛を私たちの間に明らかに示された。',
      scriptureReference: '1 John 4:9'
    },
    {
      id: 'b1-v-inheritance',
      word: 'inheritance',
      level: 'b1',
      phoneticIpa: '/ɪnˈhɛr.ɪ.təns/',
      partOfSpeech: 'noun',
      japaneseMeaning: '相続財産、嗣業、霊的遺産',
      exampleSentence: 'An inheritance that is imperishable, undefiled, and unfading, kept in heaven for you.',
      exampleJapanese: '朽ちず、汚れず、衰えることのない、天に蓄えられている嗣業。',
      scriptureReference: '1 Peter 1:4'
    }
  ],
  readings: [
  {
    "id": "b1-reading-vine",
    "level": "b1",
    "title": "The True Vine and the Fruitful Branches (John 15:1–8)",
    "source": "John 15:1–8",
    "passage": "I am the true vine, and my Father is the gardener. He cuts off every branch in me that bears no fruit, while every branch that does bear fruit He prunes so that it will be even more fruitful. You are already clean because of the word I have spoken to you. Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me. I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
    "passageJapanese": "わたしはまことのぶどうの木、わたしの父は農夫です。わたしの枝で実を結ばないものはすべて、父がそれを取り除き、実を結ぶものはすべて、もっと多くの実を結ぶために手入れをされます。あなたがたは、わたしが話したことばによって、すでにきよくなっています。わたしにとどまりなさい。わたしもあなたがたにとどまります。枝がぶどうの木にとどまっていなければ、自分では実を結ぶことができないのと同じように、あなたがたもわたしにとどまっていなければ、実を結ぶことはできません。わたしはぶどうの木、あなたがたはその枝です。人がわたしにとどまり、わたしもその人にとどまっているなら、その人は多くの実を結びます。わたしを離れては、あなたがたは何もすることができないからです。",
    "sentencePairs": [
      {
        "english": "I am the true vine, and my Father is the gardener.",
        "japanese": "わたしはまことのぶどうの木、わたしの父は農夫です。"
      },
      {
        "english": "He cuts off every branch in me that bears no fruit, while every branch that does bear fruit He prunes so that it will be even more fruitful.",
        "japanese": "わたしの枝で実を結ばないものはすべて父が切り落とし、実を結ぶものはもっと豊かな実を結ぶように刈り込んで清められます。"
      },
      {
        "english": "You are already clean because of the word I have spoken to you.",
        "japanese": "あなたがたは、わたしがあなたがたに語ったみことばによって、すでにきよめられています。"
      },
      {
        "english": "Remain in me, as I also remain in you.",
        "japanese": "わたしにとどまりなさい。わたしもあなたがたの内にとどまります。"
      },
      {
        "english": "No branch can bear fruit by itself; it must remain in the vine.",
        "japanese": "枝がぶどうの木につながっていなければ、自分ひとりでは実を結ぶことができないのと同じです。"
      },
      {
        "english": "Neither can you bear fruit unless you remain in me.",
        "japanese": "あなたがたも、わたしにとどまっていなければ、実を結ぶことは決してできません。"
      },
      {
        "english": "I am the vine; you are the branches.",
        "japanese": "わたしはぶどうの木、あなたがたはその枝です。"
      },
      {
        "english": "If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
        "japanese": "人がわたしにとどまり、わたしもその人にとどまっているなら、その人は多くの実を結びます。わたしを離れては、あなたがたは何も成し得ないからです。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "What can believers do apart from the True Vine?",
        "options": [
          "Nothing",
          "A few small things",
          "Build temples",
          "Conquer nations"
        ],
        "answerIndex": 0,
        "explanationJa": "「apart from me you can do nothing（わたしを離れては何もできない）」と断言されています。"
      }
    ]
  },
  {
    "id": "b1-reading-lilies",
    "level": "b1",
    "title": "Consider the Lilies of the Field (Matthew 6:25–34)",
    "source": "Matthew 6:25–34",
    "passage": "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes? Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they? Can any one of you by worrying add a single hour to your life? And why do you worry about clothes? See how the lilies of the field grow. They do not labor or spin. Yet I tell you that not even Solomon in all his splendor was dressed like one of these.",
    "passageJapanese": "ですから、わたしはあなたがたに言います。自分のいのちのことで、何を食べようか何を飲もうかと心配したり、自分のからだのことで、何を着ようかと心配したりしてはいけません。いのちは食べ物以上のもの、からだは着る物以上のものではありませんか。空の鳥を見なさい。種蒔きもせず、刈り入れもせず、倉に納めることもしません。それでも、あなたがたの天の父は養っていてくださいます。あなたがたは鳥よりも、はるかに価値があるではありませんか。思い悩んだからといって、だれが寿命をわずかでも延ばすことができるでしょうか。なぜ着る物のことで思い悩むのですか。野のゆりがどうして育つか、よく見なさい。働きもせず、紡ぎもしません。しかし、栄華を極めたソロモンでさえ、この花の一つほどにも装っていませんでした。",
    "sentencePairs": [
      {
        "english": "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear.",
        "japanese": "それゆえ言います。命のことで何を食べ何を着ようかと思い煩ってはなりません。"
      },
      {
        "english": "Is not life more than food, and the body more than clothes?",
        "japanese": "命は食べ物以上のもの、肉体は衣服以上のものではありませんか。"
      },
      {
        "english": "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them.",
        "japanese": "空の鳥を見なさい。種蒔きもせず刈り入れもせず倉にも収めないのに、天の父が養っておられます。"
      },
      {
        "english": "Are you not much more valuable than they?",
        "japanese": "あなたがたは鳥たちよりも、はるかに尊い存在ではありませんか。"
      },
      {
        "english": "Can any one of you by worrying add a single hour to your life?",
        "japanese": "思い煩ったからといって、だれが自分の寿命をわずかでも延ばせましょうか。"
      },
      {
        "english": "See how the lilies of the field grow. They do not labor or spin.",
        "japanese": "野の百合がどのように育つか見つめなさい。労苦もせず紡ぎもしません。"
      },
      {
        "english": "Yet I tell you that not even Solomon in all his splendor was dressed like one of these.",
        "japanese": "しかし栄華を極めたソロモン王でさえ、この花の一つほどにも美しく装われてはいませんでした。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "Who dressed less splendidly than a simple lily of the field?",
        "options": [
          "King Solomon in all his splendor",
          "The Roman Emperor",
          "The Greek philosophers",
          "The pharaohs"
        ],
        "answerIndex": 0,
        "explanationJa": "「not even Solomon in all his splendor was dressed like one of these」と説かれています。"
      }
    ]
  },
  {
    "id": "b1-reading-armor",
    "level": "b1",
    "title": "The Full Armor of God (Ephesians 6:10–18)",
    "source": "Ephesians 6:10–18",
    "passage": "Finally, be strong in the Lord and in His mighty power. Put on the full armor of God, so that you can take your stand against the devil’s schemes. Stand firm then, with the belt of truth buckled around your waist, with the breastplate of righteousness in place, and with your feet fitted with the readiness that comes from the gospel of peace. In addition to all this, take up the shield of faith, with which you can extinguish all the flaming arrows of the evil one. Take the helmet of salvation and the sword of the Spirit, which is the word of God.",
    "passageJapanese": "終わりに言います。主にあって、その偉大な力によって強くなりなさい。悪魔の策略に対抗して立つことができるように、神のすべての武具を身に着けなさい。腰には真理の帯を締め、胸には正義の胸当てを着け、足には平和の福音の備えを履いて、しっかり立ちなさい。これらすべての上に、信仰の盾を取りなさい。それによって、悪い者が放つ火矢をすべて消し止めることができます。救いのかぶとをかぶり、御霊の剣、すなわち神のことばを取りなさい。",
    "sentencePairs": [
      {
        "english": "Finally, be strong in the Lord and in His mighty power.",
        "japanese": "終わりに言います。主にあって、その偉大な全能の力によって強くなりなさい。"
      },
      {
        "english": "Put on the full armor of God, so that you can take your stand against the devil’s schemes.",
        "japanese": "悪魔のあらゆる策略に対して堅固に立つことができるよう、神の全軍備・武具を身にまといなさい。"
      },
      {
        "english": "Stand firm then, with the belt of truth buckled around your waist, with the breastplate of righteousness in place, and with your feet fitted with the readiness that comes from the gospel of peace.",
        "japanese": "腰には真理の帯を締め、胸には義の胸当てを着け、足には平和の福音の備えを履いて立ちなさい。"
      },
      {
        "english": "In addition to all this, take up the shield of faith, with which you can extinguish all the flaming arrows of the evil one.",
        "japanese": "これらすべてに加えて信仰の盾を取りなさい。それによって悪しき者の放つすべての火矢を消し止めることができます。"
      },
      {
        "english": "Take the helmet of salvation and the sword of the Spirit, which is the word of God.",
        "japanese": "救いのかぶとを戴き、御霊の剣、すなわち神のみことばを取りなさい。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "What is the sword of the Spirit according to Paul?",
        "options": [
          "The word of God",
          "An iron dagger",
          "Human philosophy",
          "Gold coins"
        ],
        "answerIndex": 0,
        "explanationJa": "「the sword of the Spirit, which is the word of God（神のことば）」と明確に定義されています。"
      }
    ]
  },
  {
    "id": "b1-reading-rejoice",
    "level": "b1",
    "title": "The Peace That Surpasses Understanding (Philippians 4:4–9)",
    "source": "Philippians 4:4–9",
    "passage": "Rejoice in the Lord always. I will say it again: Rejoice! Let your gentleness be evident to all. The Lord is near. Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    "passageJapanese": "いつも主にあって喜びなさい。もう一度言います。喜びなさい。あなたがたの寛容な心を、すべての人に知られるようにしなさい。主は近いのです。何も思い煩わないで、あらゆる場合に、感謝をもって祈りと願いをささげ、あなたがたの願いを神に知っていただきなさい。そうすれば、人のすべての思いを超えた神の平和が、あなたがたの心と思いをキリスト・イエスにあって守ってくれます。",
    "sentencePairs": [
      {
        "english": "Rejoice in the Lord always. I will say it again: Rejoice!",
        "japanese": "いつも主にあって喜びなさい。重ねて言います、喜びなさい。"
      },
      {
        "english": "Let your gentleness be evident to all. The Lord is near.",
        "japanese": "あなたがたの寛容な心がすべての人に明らかになるようにしなさい。主は近いのです。"
      },
      {
        "english": "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
        "japanese": "何事も思い煩うことなく、あらゆる事態において、感謝を込めた祈りと願いによって求めを神に告げなさい。"
      },
      {
        "english": "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
        "japanese": "そうすれば、人知をはるかに超えた神の平和が、キリスト・イエスにあってあなたがたの心と思いを守ります。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "What guards believers’ hearts and minds when they pray with thanksgiving?",
        "options": [
          "The peace of God that transcends understanding",
          "A stone castle",
          "An army of chariots",
          "Great wealth"
        ],
        "answerIndex": 0,
        "explanationJa": "「the peace of God, which transcends all understanding」が心と思いを見守ると約束されています。"
      }
    ]
  }
]
};
