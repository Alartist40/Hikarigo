import { LevelData } from '../types';

export const a2Data: LevelData = {
  meta: {
    id: 'a2',
    name: 'Level A2',
    japaneseName: '初級・契約の道',
    cefr: 'A2',
    ielts: 'IELTS 3.5–4.0',
    descriptionJa: '過去進行形、現在完了（経験・継続）、比較級・最上級、義務の助動詞、目的の不定詞と神の掟。',
    scriptureThemeJa: '出エジプト記・イザヤ書「鷲のように翼をかって」',
    badgeColor: 'var(--level-a2)',
    depthColor: 'var(--level-a2)'
  },
  grammar: [
    {
      id: 'a2-past-continuous',
      level: 'a2',
      title: 'Past Continuous (was / were + V-ing) — 試練と祈りの進行',
      japaneseMeaning: '（過去のある時点で）〜していた',
      structureFormula: 'Subject + was / were + Verb-ing',
      explanationJa: '過去の特定の一点において進行中であった出来事を描写します。嵐の中の祈りや、弟子たちが舟で進んでいた情景などを臨場感をもって描く際に用いられます。',
      scriptureCitation: 'Mark 4:38, Luke 24:15',
      examples: [
        {
          english: 'Jesus was sleeping on a cushion in the stern of the boat.',
          japanese: 'イエスは艫のほうで、枕をして眠っておられた。',
          scriptureRef: 'Mark 4:38'
        },
        {
          english: 'While they were talking and discussing together, Jesus Himself approached.',
          japanese: '二人が話し合い、論じ合っていると、イエスご自身が近づいて来られた。',
          scriptureRef: 'Luke 24:15'
        },
        {
          english: 'The disciples were praying continually in the upper room.',
          japanese: '弟子たちは上の部屋で絶え間なく祈り続けていた。',
          scriptureRef: 'Acts 1:14'
        }
      ],
      notesJa: '単数主語には was、複数主語（および you）には were を用います。過去の一回限りの動作（Past Simple）と組み合わせて「〜していたときに…が起きた」という構文をよく形成します。',
      miniQuiz: [
        {
          question: 'While they _____ across the sea, a furious windstorm arose.',
          options: ['were sailing', 'was sailing', 'are sailing', 'sailed'],
          answerIndex: 0,
          explanationJa: '主語 they に対して過去の進行動作を表すため「were sailing」が正解です。'
        }
      ]
    },
    {
      id: 'a2-present-perfect-exp',
      level: 'a2',
      title: 'Present Perfect (have / has + p.p.) — 完了・経験と現在の結果',
      japaneseMeaning: '〜したことがある・（ずっと）〜してきた・すでに〜した',
      structureFormula: 'Subject + have / has + Past Participle',
      explanationJa: '過去の出来事が現在と直結していることを示します。信仰者が神の恵みを経験した証言や、完了した恵みが今も効力を持つことを表明する極めて重要な時制です。',
      scriptureCitation: 'Psalm 37:25, 2 Timothy 4:7',
      examples: [
        {
          english: 'I have been young, and now am old, yet I have not seen the righteous forsaken.',
          japanese: '私は若かった時も、年老いた今も、正しい人が見捨てられるのを見たことがない。',
          scriptureRef: 'Psalm 37:25'
        },
        {
          english: 'I have fought the good fight, I have finished the race, I have kept the faith.',
          japanese: '私は勇敢に戦い、走るべき行程を走り終え、信仰を守り通しました。',
          scriptureRef: '2 Timothy 4:7'
        },
        {
          english: 'The Lord has done great things for us, and we are glad.',
          japanese: '主は私たちのために大いなることを行われました。私たちは喜んでいます。',
          scriptureRef: 'Psalm 126:3'
        }
      ],
      notesJa: '三人称単数主語には has、それ以外には have を用います。過去形と異なり、yesterday や last year などの過去の一点を特定する副詞とは併用できません。',
      miniQuiz: [
        {
          question: 'We _____ heard with our ears, O God, our fathers have told us.',
          options: ['have', 'has', 'having', 'had'],
          answerIndex: 0,
          explanationJa: '主語が複数代名詞 We なので「have heard」となります（詩篇44:1）。'
        }
      ]
    },
    {
      id: 'a2-comparatives-superlatives',
      level: 'a2',
      title: 'Comparatives & Superlatives — 比較級・最上級と至高の神',
      japaneseMeaning: 'より〜である・もっとも〜である',
      structureFormula: 'Adjective-er + than / more + Adjective + than // the + Adjective-est / the most + Adjective',
      explanationJa: '二つの対象の優劣を比較し、あるいは最高の存在を讃える構文です。被造物に対する神の愛の超越性や、徳の序列を語る際に用いられます。',
      scriptureCitation: '1 Corinthians 13:13, Psalm 84:10',
      examples: [
        {
          english: 'Now faith, hope, and love abide, these three; but the greatest of these is love.',
          japanese: '信仰、希望、愛、この三つはいつまでも残ります。その中で最も大いなるものは愛です。',
          scriptureRef: '1 Corinthians 13:13'
        },
        {
          english: 'Better is one day in Your courts than a thousand elsewhere.',
          japanese: 'あなたの大庭での一日は、千日にもまさる恵みです。',
          scriptureRef: 'Psalm 84:10'
        },
        {
          english: 'God is greater than our hearts, and He knows all things.',
          japanese: '神は私たちの心よりも大きく、すべてのことを知っておられるからです。',
          scriptureRef: '1 John 3:20'
        }
      ],
      notesJa: 'good の比較級は better、最上級は best。great の比較級は greater、最上級は greatest です。',
      miniQuiz: [
        {
          question: 'The wisdom of God is _____ than the wisdom of the world.',
          options: ['higher', 'highest', 'more high', 'as high'],
          answerIndex: 0,
          explanationJa: 'than があるため比較級「higher」が正解です。'
        }
      ]
    },
    {
      id: 'a2-modals-obligation',
      level: 'a2',
      title: 'Modals of Obligation (must / ought to / shall) — 掟と敬虔の義務',
      japaneseMeaning: '〜しなければならない・〜すべきである',
      structureFormula: 'Subject + must / ought to / shall + Base Verb',
      explanationJa: '道徳的・霊的義務や絶対の掟を表します。モーセの十戒や主の命令文において必然の意志を伝えます。',
      scriptureCitation: 'Exodus 20:3, Micah 6:8, John 4:24',
      examples: [
        {
          english: 'You shall have no other gods before Me.',
          japanese: 'あなたには、わたしのほかに、ほかの神々があってはならない。',
          scriptureRef: 'Exodus 20:3'
        },
        {
          english: 'God is spirit, and those who worship Him must worship in spirit and truth.',
          japanese: '神は霊ですから、礼拝する者は霊と真理によって礼拝しなければなりません。',
          scriptureRef: 'John 4:24'
        },
        {
          english: 'What does the Lord require of you? To act justly, to love mercy, and to walk humbly.',
          japanese: '主があなたに求めておられることは何か。公義を行い、慈愛を愛し、へりくだって歩むことではないか。',
          scriptureRef: 'Micah 6:8'
        }
      ],
      notesJa: '聖書英訳における shall は二人称・三人称に対して「〜すべし（神的強制・預言）」という厳粛なニュアンスを持ちます。',
      miniQuiz: [
        {
          question: 'We _____ obey God rather than human authority.',
          options: ['must', 'have', 'ought', 'may'],
          answerIndex: 0,
          explanationJa: '絶対的義務「〜しなければならない」を表す助動詞「must」が正解です（使徒5:29）。'
        }
      ]
    },
    {
      id: 'a2-future-will-shall',
      level: 'a2',
      title: 'Future with Will & Shall — 約束と預言の成就',
      japaneseMeaning: '〜するだろう・必ず〜となる（意志・約束・預言）',
      structureFormula: 'Subject + will / shall + Base Verb',
      explanationJa: '未来の約束、神の不変の誓約、終末の預言を告げます。人間の不確実な予測とは異なり、神が語る will/shall は確実な成就を含意します。',
      scriptureCitation: 'Isaiah 40:31, Revelation 21:4',
      examples: [
        {
          english: 'Those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles.',
          japanese: '主を待ち望む者は新しく力を得、鷲のように翼をかって上ることができる。',
          scriptureRef: 'Isaiah 40:31'
        },
        {
          english: 'He will wipe every tear from their eyes, and death shall be no more.',
          japanese: '神は彼らの目から涙をことごとくぬぐい取ってくださり、もはや死はない。',
          scriptureRef: 'Revelation 21:4'
        },
        {
          english: 'The Lord will fight for you; you need only to be still.',
          japanese: '主があなたがたのために戦われる。あなたがたは静かにしていなさい。',
          scriptureRef: 'Exodus 14:14'
        }
      ],
      notesJa: '文語や聖書では、神の主権的約束に shall が、一般的な未来の成り行きに will が使い分けられます。',
      miniQuiz: [
        {
          question: 'The sun _____ no longer be your light by day, for the Lord will be your everlasting light.',
          options: ['shall', 'was', 'is', 'did'],
          answerIndex: 0,
          explanationJa: '預言的断定を表す助動詞「shall」が正解です（イザヤ60:19）。'
        }
      ]
    },
    {
      id: 'a2-infinitive-purpose',
      level: 'a2',
      title: 'Infinitive of Purpose (to + Verb) — 使命と派遣の目的',
      japaneseMeaning: '〜するために（目的）',
      structureFormula: 'Subject + Verb + ... + to + Base Verb',
      explanationJa: '行動の動機や神の御心の目的を簡潔に表明する副詞的不定詞です。イエスの受肉の目的や信徒の召命を語る構文の基本です。',
      scriptureCitation: 'John 10:10, Matthew 20:28',
      examples: [
        {
          english: 'I came that they may have life, and have it abundantly.',
          japanese: 'わたしが来たのは、羊たちが命を得、豊かに得るためです。',
          scriptureRef: 'John 10:10'
        },
        {
          english: 'The Son of Man came not to be served, but to serve.',
          japanese: '人の子が来たのも、仕えられるためではなく、仕えるためです。',
          scriptureRef: 'Matthew 20:28'
        },
        {
          english: 'He gave His only Son to save the world from condemnation.',
          japanese: '神は世をさばくためではなく、救うためにひとり子をお与えになった。',
          scriptureRef: 'John 3:17'
        }
      ],
      notesJa: 'in order to + 原形 や so as to + 原形 の短縮形としても捉えられ、文脈から明確な目的を表します。',
      miniQuiz: [
        {
          question: 'Christ died and rose again _____ be the Lord of both the dead and the living.',
          options: ['to', 'for', 'at', 'with'],
          answerIndex: 0,
          explanationJa: '目的を表す不定詞「to be」が正解です（ローマ14:9）。'
        }
      ]
    },
    {
      id: 'a2-gerund-spiritual',
      level: 'a2',
      title: 'Gerund as Subject & Object (V-ing) — 行為の霊的意義',
      japaneseMeaning: '〜すること（動名詞）',
      structureFormula: 'Verb-ing + ... (as Subject or Object)',
      explanationJa: '動詞を名詞化し、「〜すること」という行為そのものを主語や目的語に据えます。主への感謝や祈りの実践を抽象名詞化して語る際に重宝します。',
      scriptureCitation: 'Psalm 92:1, Galatians 6:9',
      examples: [
        {
          english: 'It is good to give thanks to the Lord, singing praises to Your name, O Most High.',
          japanese: 'いと高き方よ、主に感謝し、あなたの御名をほめ歌うことは良いことです。',
          scriptureRef: 'Psalm 92:1'
        },
        {
          english: 'Let us not grow weary of doing good, for in due season we will reap.',
          japanese: '善を行うことに疲れ果ててはなりません。失望せずにいれば、時が来て刈り取ることになります。',
          scriptureRef: 'Galatians 6:9'
        },
        {
          english: 'Waiting on the Lord brings peace to the troubled soul.',
          japanese: '主を待ち望むことは、悩めるたましいに平安をもたらします。',
          scriptureRef: 'Psalm 62:1'
        }
      ],
      notesJa: '前置詞の直後に動詞を置く場合、必ず動名詞（V-ing）となります（例: of doing good, by trusting Him）。',
      miniQuiz: [
        {
          question: 'We walk by faith, not by _____ .',
          options: ['sight', 'seeing', 'see', 'saw'],
          answerIndex: 0,
          explanationJa: '「見ること（視覚）」によるのではなく信仰によって歩む（2コリント5:7）の名詞は sight ですが、動名詞としても seeing が対応します。'
        }
      ]
    },
    {
      id: 'a2-first-conditional',
      level: 'a2',
      title: 'First Conditional (If + Present, Will) — 約束と誓約の条件',
      japaneseMeaning: 'もし〜するならば、必ず〜となる',
      structureFormula: 'If + Subject + Present Verb, Subject + will / shall + Base Verb',
      explanationJa: '十分に起こりうる現実的な条件と、その結果として神が約束される報いを表す条件節です。神の契約の条件性を明示します。',
      scriptureCitation: '1 John 1:9, 2 Chronicles 7:14',
      examples: [
        {
          english: 'If we confess our sins, He is faithful and just to forgive us our sins.',
          japanese: 'もし私たちが自分の罪を告白するなら、神は真実で正しい方ですから、その罪を赦してくださいます。',
          scriptureRef: '1 John 1:9'
        },
        {
          english: 'If you love Me, you will keep My commandments.',
          japanese: 'あなたがたがわたしを愛するなら、わたしの戒めを守るはずです。',
          scriptureRef: 'John 14:15'
        },
        {
          english: 'If my people humble themselves and pray, I will heal their land.',
          japanese: 'もしわたしの民が自らへりくだり、祈るなら、わたしはその地を癒やす。',
          scriptureRef: '2 Chronicles 7:14'
        }
      ],
      notesJa: 'If節の中では、未来のことでも現在形を用いるという厳格な文法規則があります（× If we will confess → ○ If we confess）。',
      miniQuiz: [
        {
          question: 'If you _____ in My word, you are truly My disciples.',
          options: ['abide', 'will abide', 'abided', 'abiding'],
          answerIndex: 0,
          explanationJa: '条件節（If節）の中なので現在形「abide」を用います（ヨハネ8:31）。'
        }
      ]
    },
    {
      id: 'a2-passive-voice',
      level: 'a2',
      title: 'Divine Passive (be + p.p.) — 神的受動態と救済',
      japaneseMeaning: '〜される（神によって〜とされる）',
      structureFormula: 'Subject + am / is / are / was / were + Past Participle (+ by God)',
      explanationJa: '行為者（神）の御名を直接口にすることを畏れ慎むユダヤ的敬虔から、あえて受動態にして神の御業を暗に示す修辞を「神的受動態（Divine Passive）」と呼びます。',
      scriptureCitation: 'Matthew 7:7, Isaiah 53:5',
      examples: [
        {
          english: 'Knock, and it will be opened to you.',
          japanese: 'たたきなさい。そうすれば（神によって門が）開かれます。',
          scriptureRef: 'Matthew 7:7'
        },
        {
          english: 'He was wounded for our transgressions, He was bruised for our iniquities.',
          japanese: '彼は私たちの背きの罪のために刺し通され、私たちの咎のために砕かれた。',
          scriptureRef: 'Isaiah 53:5'
        },
        {
          english: 'You were called to freedom, brothers and sisters.',
          japanese: '兄弟姉妹たち、あなたがたは自由に召されたのです。',
          scriptureRef: 'Galatians 5:13'
        }
      ],
      notesJa: '受動態の文で by ... が省略されている場合、文脈上「神によって」行われたことを意味することが多々あります。',
      miniQuiz: [
        {
          question: 'Blessed are those who mourn, for they _____ be comforted.',
          options: ['shall', 'was', 'are', 'were'],
          answerIndex: 0,
          explanationJa: '神的受動態の約束文意「慰められるであろう」を表す「shall」が正解です（マタイ5:4）。'
        }
      ]
    },
    {
      id: 'a2-relative-pronouns',
      level: 'a2',
      title: 'Relative Pronouns (who, which, that) — 先行詞の限定と属性',
      japaneseMeaning: '〜であるところの（人・もの）',
      structureFormula: 'Antecedent + who / which / that + Clause',
      explanationJa: '直前の名詞（先行詞）を後ろから修飾し、その人や物の属性・信仰の姿勢を具体的に説明する関係詞です。詩篇1篇の「正しい人」の定義などに頻出します。',
      scriptureCitation: 'Psalm 1:1, John 1:29',
      examples: [
        {
          english: 'Blessed is the man who does not walk in the counsel of the ungodly.',
          japanese: '幸いなことよ、悪しき者の謀りに歩まないその人。',
          scriptureRef: 'Psalm 1:1'
        },
        {
          english: 'Behold, the Lamb of God who takes away the sin of the world!',
          japanese: '見よ、世の罪を取り除く神の小羊。',
          scriptureRef: 'John 1:29'
        },
        {
          english: 'He is like a tree that is planted by streams of water.',
          japanese: 'その人は水路のそばに植わった木のようだ。',
          scriptureRef: 'Psalm 1:3'
        }
      ],
      notesJa: '先行詞が人の場合は who、事物の場合は which、両方に使えるのが that です。主格関係代名詞の後の動詞は先行詞の単複に一致します。',
      miniQuiz: [
        {
          question: 'The Lord is a shield to all _____ take refuge in Him.',
          options: ['who', 'which', 'whom', 'whose'],
          answerIndex: 0,
          explanationJa: '人を指す主格関係代名詞なので「who」が適切です（詩篇18:30）。'
        }
      ]
    }
  ],
  vocabulary: [
    {
      id: 'a2-v-covenant',
      word: 'covenant',
      level: 'a2',
      phoneticIpa: '/ˈkʌv.ə.nənt/',
      partOfSpeech: 'noun',
      japaneseMeaning: '契約、聖約、神との固い約束',
      exampleSentence: 'I will establish my covenant between me and you.',
      exampleJapanese: 'わたしはわたしとあなたとの間に契約を立てる。',
      scriptureReference: 'Genesis 17:7'
    },
    {
      id: 'a2-v-salvation',
      word: 'salvation',
      level: 'a2',
      phoneticIpa: '/sælˈveɪ.ʃən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '救い、救済、神の解放',
      exampleSentence: 'The Lord is my light and my salvation; whom shall I fear?',
      exampleJapanese: '主は私の光、私の救い。だれを私は恐れよう。',
      scriptureReference: 'Psalm 27:1'
    },
    {
      id: 'a2-v-wisdom',
      word: 'wisdom',
      level: 'a2',
      phoneticIpa: '/ˈwɪz.dəm/',
      partOfSpeech: 'noun',
      japaneseMeaning: '知恵、英知、賢明さ',
      exampleSentence: 'The fear of the Lord is the beginning of wisdom.',
      exampleJapanese: '主を恐れることは知恵の初めである。',
      scriptureReference: 'Proverbs 9:10'
    },
    {
      id: 'a2-v-forgive',
      word: 'forgive',
      level: 'a2',
      phoneticIpa: '/fərˈɡɪv/',
      partOfSpeech: 'verb',
      japaneseMeaning: '赦す、免除する、罪を帳消しにする',
      exampleSentence: 'Forgive us our debts, as we also have forgiven our debtors.',
      exampleJapanese: '私たちの負い目をお赦しください。私たちも負い目のある者を赦しました。',
      scriptureReference: 'Matthew 6:12'
    },
    {
      id: 'a2-v-command',
      word: 'command',
      level: 'a2',
      phoneticIpa: '/kəˈmænd/',
      partOfSpeech: 'verb',
      japaneseMeaning: '命じる、命令する、掟を授ける',
      exampleSentence: 'This is my command: Love one another as I have loved you.',
      exampleJapanese: 'わたしの命令はこれです。わたしがあなたがたを愛したように、互いに愛し合いなさい。',
      scriptureReference: 'John 15:12'
    },
    {
      id: 'a2-v-promise',
      word: 'promise',
      level: 'a2',
      phoneticIpa: '/ˈprɑː.mɪs/',
      partOfSpeech: 'noun',
      japaneseMeaning: '約束、誓約、約束の言葉',
      exampleSentence: 'He who promised is faithful to fulfill it.',
      exampleJapanese: '約束してくださった方は真実であり、それを果たされます。',
      scriptureReference: 'Hebrews 10:23'
    },
    {
      id: 'a2-v-deliver',
      word: 'deliver',
      level: 'a2',
      phoneticIpa: '/dɪˈlɪv.ər/',
      partOfSpeech: 'verb',
      japaneseMeaning: '救い出す、解放する、引き渡す',
      exampleSentence: 'Deliver us from evil, for Yours is the kingdom.',
      exampleJapanese: '私たちを悪から救い出してください。国はあなたのものだからです。',
      scriptureReference: 'Matthew 6:13'
    },
    {
      id: 'a2-v-humble',
      word: 'humble',
      level: 'a2',
      phoneticIpa: '/ˈhʌm.bəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: 'へりくだった、謙虚な、身分の低い',
      exampleSentence: 'God opposes the proud but shows favor to the humble.',
      exampleJapanese: '神は高ぶる者に敵対し、へりくだった者に恵みを与えられる。',
      scriptureReference: 'James 4:6'
    },
    {
      id: 'a2-v-repent',
      word: 'repent',
      level: 'a2',
      phoneticIpa: '/rɪˈpɛnt/',
      partOfSpeech: 'verb',
      japaneseMeaning: '悔い改める、心を神に向き直す',
      exampleSentence: 'Repent, for the kingdom of heaven has come near.',
      exampleJapanese: '悔い改めなさい。天の御国が近づいたから。',
      scriptureReference: 'Matthew 4:17'
    },
    {
      id: 'a2-v-shield',
      word: 'shield',
      level: 'a2',
      phoneticIpa: '/ʃiːld/',
      partOfSpeech: 'noun',
      japaneseMeaning: '盾、防壁、保護者',
      exampleSentence: 'You, Lord, are a shield around me, my glory.',
      exampleJapanese: '主よ、あなたこそ私の周りを囲む盾、私の栄光です。',
      scriptureReference: 'Psalm 3:3'
    },
    {
      id: 'a2-v-rock',
      word: 'rock',
      level: 'a2',
      phoneticIpa: '/rɑːk/',
      partOfSpeech: 'noun',
      japaneseMeaning: '岩、巌、揺るぎない土台',
      exampleSentence: 'The Lord is my rock, my fortress, and my savior.',
      exampleJapanese: '主は私の巌、私の砦、私の救い主。',
      scriptureReference: 'Psalm 18:2'
    },
    {
      id: 'a2-v-refuge',
      word: 'refuge',
      level: 'a2',
      phoneticIpa: '/ˈrɛf.juːdʒ/',
      partOfSpeech: 'noun',
      japaneseMeaning: '避け所、避難所、隠れ家',
      exampleSentence: 'God is our refuge and strength, an ever-present help in trouble.',
      exampleJapanese: '神は私たちの避け所、私たちの力、苦難のときのすぐそこにある助け。',
      scriptureReference: 'Psalm 46:1'
    },
    {
      id: 'a2-v-witness',
      word: 'witness',
      level: 'a2',
      phoneticIpa: '/ˈwɪt.nəs/',
      partOfSpeech: 'noun',
      japaneseMeaning: '証人、証言、証し',
      exampleSentence: 'You will be my witnesses to the ends of the earth.',
      exampleJapanese: 'あなたがたは地の果てに至るまで、わたしの証人となる。',
      scriptureReference: 'Acts 1:8'
    },
    {
      id: 'a2-v-altar',
      word: 'altar',
      level: 'a2',
      phoneticIpa: '/ˈɔːl.tər/',
      partOfSpeech: 'noun',
      japaneseMeaning: '祭壇、奉献の場所',
      exampleSentence: 'Noah built an altar to the Lord and offered burnt offerings.',
      exampleJapanese: 'ノアは主に祭壇を築き、全焼のいけにえを捧げた。',
      scriptureReference: 'Genesis 8:20'
    },
    {
      id: 'a2-v-sacrifice',
      word: 'sacrifice',
      level: 'a2',
      phoneticIpa: '/ˈsæk.rɪ.faɪs/',
      partOfSpeech: 'noun',
      japaneseMeaning: 'いけにえ、犠牲、献げ物',
      exampleSentence: 'Present your bodies as a living sacrifice, holy and acceptable to God.',
      exampleJapanese: 'あなたがたのからだを、神に喜ばれる聖なる生きた捧げ物として献げなさい。',
      scriptureReference: 'Romans 12:1'
    },
    {
      id: 'a2-v-eternal',
      word: 'eternal',
      level: 'a2',
      phoneticIpa: '/ɪˈtɜːr.nəl/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '永遠の、不朽の、常世の',
      exampleSentence: 'Whoever believes in Him shall not perish but have eternal life.',
      exampleJapanese: '御子を信じる者が一人も滅びないで、永遠の命を持つためである。',
      scriptureReference: 'John 3:16'
    },
    {
      id: 'a2-v-dwelling',
      word: 'dwelling',
      level: 'a2',
      phoneticIpa: '/ˈdwɛl.ɪŋ/',
      partOfSpeech: 'noun',
      japaneseMeaning: '住まい、幕屋、居所',
      exampleSentence: 'How lovely is Your dwelling place, O Lord of hosts!',
      exampleJapanese: '万軍の主よ、あなたの住まいは何と麗しいことでしょう。',
      scriptureReference: 'Psalm 84:1'
    },
    {
      id: 'a2-v-upright',
      word: 'upright',
      level: 'a2',
      phoneticIpa: '/ˈʌp.raɪt/',
      partOfSpeech: 'adjective',
      japaneseMeaning: '直き、高潔な、正義の',
      exampleSentence: 'Good and upright is the Lord; therefore He instructs sinners in the way.',
      exampleJapanese: '主は情け深く、また正しくあられる。それゆえ罪人に道を教えられる。',
      scriptureReference: 'Psalm 25:8'
    },
    {
      id: 'a2-v-rejoice',
      word: 'rejoice',
      level: 'a2',
      phoneticIpa: '/rɪˈdʒɔɪs/',
      partOfSpeech: 'verb',
      japaneseMeaning: '喜ぶ、大いに歓喜する',
      exampleSentence: 'Rejoice in the Lord always; again I will say, rejoice!',
      exampleJapanese: 'いつも主にあって喜びなさい。もう一度言います。喜びなさい！',
      scriptureReference: 'Philippians 4:4'
    },
    {
      id: 'a2-v-fear',
      word: 'fear',
      level: 'a2',
      phoneticIpa: '/fɪər/',
      partOfSpeech: 'noun',
      japaneseMeaning: '敬畏、畏れ（神への崇敬の念）',
      exampleSentence: 'In the fear of the Lord one has strong confidence.',
      exampleJapanese: '主を畏れることには強い信頼がある。',
      scriptureReference: 'Proverbs 14:26'
    },
    {
      id: 'a2-v-inherit',
      word: 'inherit',
      level: 'a2',
      phoneticIpa: '/ɪnˈhɛr.ɪt/',
      partOfSpeech: 'verb',
      japaneseMeaning: '受け継ぐ、相続する',
      exampleSentence: 'Blessed are the meek, for they shall inherit the earth.',
      exampleJapanese: '柔和な者は幸いです。その人たちは地を受け継ぐからです。',
      scriptureReference: 'Matthew 5:5'
    },
    {
      id: 'a2-v-trust',
      word: 'trust',
      level: 'a2',
      phoneticIpa: '/trʌst/',
      partOfSpeech: 'verb',
      japaneseMeaning: '信頼する、身を委ねる',
      exampleSentence: 'Trust in the Lord with all your heart, and do not lean on your own understanding.',
      exampleJapanese: '心を尽くして主に拠り頼め。自分の悟りにたよるな。',
      scriptureReference: 'Proverbs 3:5'
    },
    {
      id: 'a2-v-hope',
      word: 'hope',
      level: 'a2',
      phoneticIpa: '/hoʊp/',
      partOfSpeech: 'noun',
      japaneseMeaning: '希望、待ち望むこと',
      exampleSentence: 'Hope does not put us to shame, because God\'s love has been poured into our hearts.',
      exampleJapanese: '希望は失望に終わることがありません。神の愛が注がれているからです。',
      scriptureReference: 'Romans 5:5'
    },
    {
      id: 'a2-v-sanctify',
      word: 'sanctify',
      level: 'a2',
      phoneticIpa: '/ˈsæŋk.tɪ.faɪ/',
      partOfSpeech: 'verb',
      japaneseMeaning: '聖別する、聖なるものとする',
      exampleSentence: 'Sanctify them in the truth; Your word is truth.',
      exampleJapanese: '真理によって彼らを聖別してください。あなたのみことばは真理です。',
      scriptureReference: 'John 17:17'
    },
    {
      id: 'a2-v-guide',
      word: 'guide',
      level: 'a2',
      phoneticIpa: '/ɡaɪd/',
      partOfSpeech: 'verb',
      japaneseMeaning: '導く、道案内をする',
      exampleSentence: 'When the Spirit of truth comes, He will guide you into all truth.',
      exampleJapanese: '真理の御霊が来られるとき、あなたがたをすべての真理へと導かれます。',
      scriptureReference: 'John 16:13'
    },
    {
      id: 'a2-v-fellowship',
      word: 'fellowship',
      level: 'a2',
      phoneticIpa: '/ˈfɛl.oʊ.ʃɪp/',
      partOfSpeech: 'noun',
      japaneseMeaning: '交わり、親交、霊的共有',
      exampleSentence: 'Our fellowship is with the Father and with His Son Jesus Christ.',
      exampleJapanese: '私たちの交わりは、御父および御子イエス・キリストとの交わりです。',
      scriptureReference: '1 John 1:3'
    },
    {
      id: 'a2-v-perish',
      word: 'perish',
      level: 'a2',
      phoneticIpa: '/ˈpɛr.ɪʃ/',
      partOfSpeech: 'verb',
      japaneseMeaning: '滅びる、朽ち果てる',
      exampleSentence: 'God is not willing that any should perish, but that all should reach repentance.',
      exampleJapanese: '主はだれも滅びることなく、すべての人が悔い改めに進むことを望んでおられます。',
      scriptureReference: '2 Peter 3:9'
    },
    {
      id: 'a2-v-commandment',
      word: 'commandment',
      level: 'a2',
      phoneticIpa: '/kəˈmænd.mənt/',
      partOfSpeech: 'noun',
      japaneseMeaning: '戒め、掟、み教え',
      exampleSentence: 'A new commandment I give to you, that you love one another.',
      exampleJapanese: 'あなたがたに新しい戒めを与えます。互いに愛し合いなさい。',
      scriptureReference: 'John 13:34'
    },
    {
      id: 'a2-v-compassion',
      word: 'compassion',
      level: 'a2',
      phoneticIpa: '/kəmˈpæʃ.ən/',
      partOfSpeech: 'noun',
      japaneseMeaning: '深いあわれみ、痛切な慈愛',
      exampleSentence: 'When He saw the crowds, He had compassion on them, because they were like sheep without a shepherd.',
      exampleJapanese: '群衆を見て深くあわれまれた。彼らが羊飼いのいない羊のようだったからである。',
      scriptureReference: 'Matthew 9:36'
    },
    {
      id: 'a2-v-fast',
      word: 'fast',
      level: 'a2',
      phoneticIpa: '/fæst/',
      partOfSpeech: 'verb',
      japaneseMeaning: '断食する、身を慎む',
      exampleSentence: 'When you fast, anoint your head and wash your face.',
      exampleJapanese: '断食するときには、頭に油を塗り、顔を洗いなさい。',
      scriptureReference: 'Matthew 6:17'
    }
  ],
  readings: [
  {
    "id": "a2-reading-sower",
    "level": "a2",
    "title": "The Parable of the Sower (Mark 4:3–9)",
    "source": "Mark 4:3–9",
    "passage": "Listen! A sower went out to sow. As he sowed, some seed fell along the path, and the birds came and devoured it. Other seed fell on rocky ground, where it did not have much soil. It sprang up quickly, but when the sun rose, it was scorched because it had no root. Other seed fell among thorns, and the thorns grew up and choked it, and it yielded no grain. And other seeds fell into good soil and produced grain, growing up and increasing thirtyfold and sixtyfold and a hundredfold. And He said, \"He who has ears to hear, let him hear.\"",
    "passageJapanese": "よく聞きなさい。種を蒔く人が種蒔きに出て行った。蒔いていると、ある種は道ばたに落ち、鳥が来て食べてしまった。別の種は土の少ない岩地に落ちた。土が深くないので、すぐに芽を出した。しかし太陽が昇ると焼かれ、根がないために枯れてしまった。また別の種はいばらの中に落ちた。いばらが伸びてそれをふさいだので、実を結ばなかった。しかし別の種は良い地に落ち、育って増え、三十倍、六十倍、百倍の実を結んだ。そして言われた。「聞く耳のある者は聞きなさい。」",
    "sentencePairs": [
      {
        "english": "Listen! A sower went out to sow.",
        "japanese": "よく聞きなさい。種を蒔く人が種蒔きに出て行った。"
      },
      {
        "english": "As he sowed, some seed fell along the path, and the birds came and devoured it.",
        "japanese": "蒔いていると、ある種は道ばたに落ち、鳥が来て食べてしまった。"
      },
      {
        "english": "Other seed fell on rocky ground, where it did not have much soil.",
        "japanese": "別の種は土の少ない岩地に落ちた。"
      },
      {
        "english": "It sprang up quickly, but when the sun rose, it was scorched because it had no root.",
        "japanese": "土が深くないので直ちに芽を出したが、日が昇ると焼かれ、根がないために枯れてしまった。"
      },
      {
        "english": "Other seed fell among thorns, and the thorns grew up and choked it, and it yielded no grain.",
        "japanese": "また別の種はいばらの中に落ち、いばらが伸びて覆い塞いだので、実を結ばなかった。"
      },
      {
        "english": "And other seeds fell into good soil and produced grain, growing up and increasing thirtyfold and sixtyfold and a hundredfold.",
        "japanese": "しかし別の種は良い地に落ち、芽生えて実を結び、三十倍、六十倍、百倍に増えた。"
      },
      {
        "english": "And He said, \"He who has ears to hear, let him hear.\"",
        "japanese": "そして言われた、「聞く耳のある者は聞きなさい。」"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "What happened to the seed that fell on rocky soil?",
        "options": [
          "It had no root and scorched",
          "It grew forever",
          "The birds kept it",
          "It produced wine"
        ],
        "answerIndex": 0,
        "explanationJa": "「it had no root」根がないために太陽で焼かれて枯れたと説明されています。"
      }
    ]
  },
  {
    "id": "a2-reading-trust",
    "level": "a2",
    "title": "Trust in the Lord with All Your Heart (Proverbs 3:5–8)",
    "source": "Proverbs 3:5–8",
    "passage": "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge Him, and He will make straight your paths. Do not be wise in your own eyes; fear the Lord and turn away from evil. It will be healing to your flesh and refreshment to your bones.",
    "passageJapanese": "心を尽くして主に信頼せよ。自分の分別の浅さに頼るな。あなたの行く道すべてにおいて主を認めよ。そうすれば主があなたの道筋をまっすぐにされる。自分を知恵ある者と思うな。主を恐れ、悪を離れよ。それはあなたのからだを健やかにし、あなたの骨に潤いを与える。",
    "sentencePairs": [
      {
        "english": "Trust in the Lord with all your heart, and do not lean on your own understanding.",
        "japanese": "心を尽くして主に拠り頼め。自分の浅い分別の知恵に頼るな。"
      },
      {
        "english": "In all your ways acknowledge Him, and He will make straight your paths.",
        "japanese": "あなたの歩むすべての道において主を認めよ。そうすれば主があなたの歩みをまっすぐにされる。"
      },
      {
        "english": "Do not be wise in your own eyes; fear the Lord and turn away from evil.",
        "japanese": "自分の目に自分を知恵ある者と思うな。主を敬い恐れ、悪から遠ざかれ。"
      },
      {
        "english": "It will be healing to your flesh and refreshment to your bones.",
        "japanese": "そうすればそれはあなたの肉体を健やかに癒やし、あなたの骨に滋養と潤いをもたらす。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "What happens when you acknowledge the Lord in all your ways?",
        "options": [
          "He will make straight your paths",
          "He will give you gold",
          "You become a king",
          "You sleep all day"
        ],
        "answerIndex": 0,
        "explanationJa": "「He will make straight your paths（主が道筋をまっすぐにされる）」と記されています。"
      }
    ]
  },
  {
    "id": "a2-reading-psalm121",
    "level": "a2",
    "title": "The Keeper of Israel (Psalm 121:1–8)",
    "source": "Psalm 121:1–8",
    "passage": "I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth. He will not let your foot be moved; He who keeps you will not slumber. Behold, He who keeps Israel will neither slumber nor sleep. The Lord is your keeper; the Lord is your shade on your right hand. The sun shall not strike you by day, nor the moon by night. The Lord will keep you from all evil; He will keep your life. The Lord will keep your going out and your coming in from this time forth and forevermore.",
    "passageJapanese": "私は山々に向かって目を上げる。私の助けはどこから来るのか。私の助けは、天地を造られた主から来る。主はあなたの足がよろめくのを許されず、あなたを守る方はまどろむこともない。見よ、イスラエルを守る方は、まどろむこともなく、眠ることもない。主はあなたを守る方。主はあなたの右の手の木陰。昼の太陽もあなたを撃たず、夜の月もあなたを損なわない。主はすべての災いからあなたを守り、あなたのいのちを守られる。主はあなたが出て行くのも入るのも、今よりとこしえまでも守られる。",
    "sentencePairs": [
      {
        "english": "I lift up my eyes to the hills. From where does my help come?",
        "japanese": "私は山々に向かって目を上げる。私の助けはどこから来るのか。"
      },
      {
        "english": "My help comes from the Lord, who made heaven and earth.",
        "japanese": "私の助けは、天地を造られた主から来る。"
      },
      {
        "english": "He will not let your foot be moved; He who keeps you will not slumber.",
        "japanese": "主はあなたの足がよろめくのを許されず、あなたを守る方はまどろむこともない。"
      },
      {
        "english": "Behold, He who keeps Israel will neither slumber nor sleep.",
        "japanese": "見よ、イスラエルを守る方は、まどろむこともなく、眠ることもない。"
      },
      {
        "english": "The Lord is your keeper; the Lord is your shade on your right hand.",
        "japanese": "主はあなたを守る方。主はあなたの右の手を覆う陰である。"
      },
      {
        "english": "The sun shall not strike you by day, nor the moon by night.",
        "japanese": "昼の太陽もあなたを撃つことはなく、夜の月もあなたを損なうことはない。"
      },
      {
        "english": "The Lord will keep you from all evil; He will keep your life.",
        "japanese": "主はすべての悪と災いからあなたを守り、あなたのたましい・いのちを守られる。"
      },
      {
        "english": "The Lord will keep your going out and your coming in from this time forth and forevermore.",
        "japanese": "主はあなたの出船も入船も、旅立ちも帰りも、今より永遠に至るまで守られる。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "Who neither slumbers nor sleeps according to Psalm 121?",
        "options": [
          "The keeper of Israel",
          "The eagle",
          "The mountains",
          "The watchman of town"
        ],
        "answerIndex": 0,
        "explanationJa": "「He who keeps Israel will neither slumber nor sleep」と記されています。"
      }
    ]
  },
  {
    "id": "a2-reading-shepherd",
    "level": "a2",
    "title": "The Good Shepherd (John 10:11–15)",
    "source": "John 10:11–15",
    "passage": "I am the good shepherd. The good shepherd lays down his life for the sheep. The hired hand is not the shepherd and does not own the sheep. So when he sees the wolf coming, he abandons the sheep and runs away. Then the wolf attacks the flock and scatters it. The man runs away because he is a hired hand and cares nothing for the sheep. I am the good shepherd; I know my sheep and my sheep know me.",
    "passageJapanese": "わたしは良い羊飼いです。良い羊飼いは羊のためにいのちを捨てます。雇い人は羊飼いではなく、羊の持ち主でもありません。ですから狼が来るのを見ると、羊を置き去りにして逃げてしまいます。そして狼は群れを襲い、散らしてしまいます。その人が逃げるのは、雇い人にすぎず、羊のことを気にかけていないからです。わたしは良い羊飼いです。わたしは自分の羊を知っており、わたしの羊はわたしを知っています。",
    "sentencePairs": [
      {
        "english": "I am the good shepherd. The good shepherd lays down his life for the sheep.",
        "japanese": "わたしは良い羊飼いである。良い羊飼いは羊のために自らのいのちを捨てる。"
      },
      {
        "english": "The hired hand is not the shepherd and does not own the sheep.",
        "japanese": "雇い人は羊飼いではなく、羊の所有者でもない。"
      },
      {
        "english": "So when he sees the wolf coming, he abandons the sheep and runs away.",
        "japanese": "それゆえ狼が来るのを見ると、羊を見捨てて逃げ去ってしまう。"
      },
      {
        "english": "Then the wolf attacks the flock and scatters it.",
        "japanese": "そして狼は群れを襲撃し、散り散りに散らしてしまう。"
      },
      {
        "english": "The man runs away because he is a hired hand and cares nothing for the sheep.",
        "japanese": "その人が逃げるのは雇われ人にすぎず、羊のことなど少しも意に介していないからである。"
      },
      {
        "english": "I am the good shepherd; I know my sheep and my sheep know me.",
        "japanese": "わたしは良い羊飼いである。わたしは自分の羊を知っており、わたしの羊もわたしを知っている。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "What does the Good Shepherd do for the sheep?",
        "options": [
          "Lays down his life",
          "Sells them",
          "Runs away",
          "Builds a fence only"
        ],
        "answerIndex": 0,
        "explanationJa": "「lays down his life for the sheep（羊のために命を捨てる）」が答えです。"
      }
    ]
  },
  {
    "id": "a2-reading-psalm27",
    "level": "a2",
    "title": "The Lord is My Light and My Salvation (Psalm 27:1–4)",
    "source": "Psalm 27:1–4",
    "passage": "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid? Though an army besiege me, my heart will not fear; though war break out against me, even then I will be confident. One thing I ask from the Lord, this only do I seek: that I may dwell in the house of the Lord all the days of my life, to gaze upon the beauty of the Lord and to seek Him in His temple.",
    "passageJapanese": "主は私の光、私の救い。私はだれを恐れよう。主は私のいのちの砦。私はだれに怯えよう。たとえ軍勢が私を取り囲もうとも、私の心は恐れない。たとえ戦いが私に対して起ころうとも、そのときも私は確信に満ちている。私は一つのことを主に願った。それを私は尋ね求める。私の命の日の限り、主の家に住まい、主の美しさを仰ぎ見、その神殿で祈り求めることを。",
    "sentencePairs": [
      {
        "english": "The Lord is my light and my salvation; whom shall I fear?",
        "japanese": "主は私の光、私の救い。私はだれを恐れようか。"
      },
      {
        "english": "The Lord is the stronghold of my life; of whom shall I be afraid?",
        "japanese": "主は私のいのちの堅固な砦。私はだれに怯えることがあろうか。"
      },
      {
        "english": "Though an army besiege me, my heart will not fear; though war break out against me, even then I will be confident.",
        "japanese": "たとえ軍勢が私を取り囲んで陣を張ろうとも、私の心は恐れず、戦いが起こっても私は揺るがない。"
      },
      {
        "english": "One thing I ask from the Lord, this only do I seek: that I may dwell in the house of the Lord all the days of my life, to gaze upon the beauty of the Lord and to seek Him in His temple.",
        "japanese": "私は一つのことを主に願った。それをこそ求めよう。生涯主の家に住まい、主の麗しさを仰ぎ、その神殿で思いをめぐらすことを。"
      }
    ],
    "comprehensionQuestions": [
      {
        "question": "What is the one thing the psalmist asks from the Lord?",
        "options": [
          "To dwell in the house of the Lord forever",
          "To have immense riches",
          "To defeat all enemies quickly",
          "To sleep in peace"
        ],
        "answerIndex": 0,
        "explanationJa": "「that I may dwell in the house of the Lord all the days of my life」が答えです。"
      }
    ]
  }
]
};
