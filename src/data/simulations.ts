export interface ExamQuestion {
  id: string;
  section: 'vocab' | 'grammar' | 'reading';
  sectionTitleJa: string;
  passage?: string;
  readingPassage?: string;
  question: string;
  prompt?: string;
  options: string[];
  correctIndex: number;
  explanationJa: string;
  scriptureRef?: string;
}

export interface ExamDef {
  id: string;
  title: string;
  targetLevel: string;
  levelTarget?: string;
  cefrRange: string;
  ieltsBand: string;
  descriptionJa: string;
  durationMinutes: number;
  questions: ExamQuestion[];
}

export const examDefinitions: ExamDef[] = [
  {
    id: 'sim-foundation',
    title: '基礎英語・基礎コミュニケーション模試 (A1-A2)',
    targetLevel: 'A1-A2',
    cefrRange: 'A1–A2',
    ieltsBand: 'IELTS 3.0–4.0',
    descriptionJa: '日常基本表現、存在動詞、過去形の叙述、初歩の聖書語彙に関する到達度診断。',
    durationMinutes: 20,
    questions: [
      {
        id: 'q-f-1',
        section: 'vocab',
        sectionTitleJa: '第1部：語彙と文脈理解',
        question: 'Choose the word that best completes the verse: "Your word is a lamp to my feet and a _____ to my path."',
        options: ['light', 'darkness', 'stone', 'cloud'],
        correctIndex: 0,
        explanationJa: '詩篇119:105「あなたのみことばは、私の足のともしび、私の道の光です」。正解は「light」です。',
        scriptureRef: 'Psalm 119:105'
      },
      {
        id: 'q-f-2',
        section: 'vocab',
        sectionTitleJa: '第1部：語彙と文脈理解',
        question: 'What is the opposite meaning of the biblical word "righteous"?',
        options: ['wicked', 'holy', 'blessed', 'faithful'],
        correctIndex: 0,
        explanationJa: 'righteous（義なる、正しい）の反意語は wicked（悪しき、不敬な）です。'
      },
      {
        id: 'q-f-3',
        section: 'vocab',
        sectionTitleJa: '第1部：語彙と文脈理解',
        question: 'The word "refuge" in "God is our refuge and strength" means:',
        options: ['a safe shelter from danger', 'a dangerous road', 'a sudden storm', 'a heavy burden'],
        correctIndex: 0,
        explanationJa: 'refuge は「避け所、避難所、危険から守られる安全な砦」を意味します（詩篇46:1）。'
      },
      {
        id: 'q-f-4',
        section: 'grammar',
        sectionTitleJa: '第2部：文法と構文判断',
        question: 'The Lord is my shepherd; I _____ not want.',
        options: ['shall', 'was', 'am', 'having'],
        correctIndex: 0,
        explanationJa: '詩篇23:1「主は私の羊飼い。私には乏しいことがありません（I shall not want）」。確固たる約束の助動詞「shall」が入ります。',
        scriptureRef: 'Psalm 23:1'
      },
      {
        id: 'q-f-5',
        section: 'grammar',
        sectionTitleJa: '第2部：文法と構文判断',
        question: 'Yesterday, the disciples _____ across the Sea of Galilee.',
        options: ['sailed', 'sail', 'sailing', 'has sailed'],
        correctIndex: 0,
        explanationJa: '過去の確定した時（Yesterday）を表すため、過去形「sailed」が適切です。'
      },
      {
        id: 'q-f-6',
        section: 'grammar',
        sectionTitleJa: '第2部：文法と構文判断',
        question: 'There _____ green pastures beside the quiet waters.',
        options: ['are', 'is', 'be', 'was'],
        correctIndex: 0,
        explanationJa: '名詞「green pastures」は複数形であるため、There are が正解です。'
      },
      {
        id: 'q-f-7',
        section: 'reading',
        sectionTitleJa: '第3部：読解問題',
        passage: 'In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters. And God said, "Let there be light," and there was light.',
        question: 'According to the passage, what was the state of the earth before light was created?',
        options: [
          'It was formless and empty, with darkness over the deep.',
          'It was filled with gardens and animals.',
          'It was glowing with morning stars.',
          'It was inhabited by people.'
        ],
        correctIndex: 0,
        explanationJa: '本文に「the earth was formless and empty, darkness was over the surface of the deep」とある通り、地は茫漠として何もなく、暗闇に覆われていました。',
        scriptureRef: 'Genesis 1:1-3'
      },
      {
        id: 'q-f-8',
        section: 'reading',
        sectionTitleJa: '第3部：読解問題',
        passage: 'The Lord is my shepherd; I shall not want. He makes me lie down in green pastures; He leads me beside quiet waters. He restores my soul; He guides me in the paths of righteousness for His name\'s sake.',
        question: 'Why does the Shepherd guide the narrator in paths of righteousness?',
        options: [
          'For His name\'s sake.',
          'Because the narrator requested wealth.',
          'To show the way to a distant city.',
          'Because the pastures were barren.'
        ],
        correctIndex: 0,
        explanationJa: '本文末尾に「for His name\'s sake（御名のために）」と明記されています。',
        scriptureRef: 'Psalm 23:3'
      }
    ]
  },
  {
    id: 'sim-intermediate',
    title: '標準学術・中上級英語模試 (B1-B2)',
    targetLevel: 'B1-B2',
    cefrRange: 'B1–B2',
    ieltsBand: 'IELTS 4.5–6.5',
    descriptionJa: '大学進学・国際機関で必須となる分詞構文、関係節、論理接続詞、使徒書簡の精読。',
    durationMinutes: 25,
    questions: [
      {
        id: 'q-i-1',
        section: 'vocab',
        sectionTitleJa: '第1部：高度語彙と神学用語',
        question: 'Which word means "the restoration of friendly relations and harmony between God and man"?',
        options: ['reconciliation', 'indifference', 'transgression', 'separation'],
        correctIndex: 0,
        explanationJa: 'reconciliation（和解、調和の回復）は神と人との平和の回復を指す中上級重要語彙です（2コリント 5:19）。'
      },
      {
        id: 'q-i-2',
        section: 'vocab',
        sectionTitleJa: '第1部：高度語彙と神学用語',
        question: 'Suffering produces _____, and that in turn produces proven character.',
        options: ['endurance', 'haste', 'wrath', 'arrogance'],
        correctIndex: 0,
        explanationJa: 'ローマ人への手紙5:3「患難は忍耐（endurance）を生み出す」。'
      },
      {
        id: 'q-i-3',
        section: 'vocab',
        sectionTitleJa: '第1部：高度語彙と神学用語',
        question: 'The word "sanctification" refers specifically to:',
        options: [
          'The progressive purification of moral character dedicated to God',
          'A political treaty between two ancient empires',
          'A temporary feeling of relief from sorrow',
          'The building of a physical temple structure'
        ],
        correctIndex: 0,
        explanationJa: 'sanctification（聖化・聖別）は神に捧げられた人格が日ごとに清められていく過程を意味します。'
      },
      {
        id: 'q-i-4',
        section: 'grammar',
        sectionTitleJa: '第2部：構文と分詞表現',
        question: '_____ justified by faith, we have peace with God through our Lord Jesus Christ.',
        options: ['Being', 'Be', 'Was', 'To be'],
        correctIndex: 0,
        explanationJa: 'ローマ人への手紙5:1「信仰によって義と認められた（Being justified by faith）私たちは…」。過去分詞を導く分詞構文です。'
      },
      {
        id: 'q-i-5',
        section: 'grammar',
        sectionTitleJa: '第2部：構文と分詞表現',
        question: 'I discipline my body, _____ after preaching to others I myself should be disqualified.',
        options: ['lest', 'because', 'so', 'provided that'],
        correctIndex: 0,
        explanationJa: '1コリント9:27「他人に宣べ伝えておきながら、自分自身が失格者になることのないため（lest ... should）」。否定目的接続詞です。'
      },
      {
        id: 'q-i-6',
        section: 'grammar',
        sectionTitleJa: '第2部：構文と分詞表現',
        question: 'Everyone _____ hears these words of Mine and puts them into practice is like a wise builder.',
        options: ['who', 'which', 'whom', 'whose'],
        correctIndex: 0,
        explanationJa: '先行詞「Everyone」を受ける主格の関係代名詞は「who」です。'
      },
      {
        id: 'q-i-7',
        section: 'reading',
        sectionTitleJa: '第3部：使徒書簡読解',
        passage: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.',
        question: 'Which of the following attributes is explicitly stated about love in the text?',
        options: [
          'It keeps no record of wrongs and rejoices with truth.',
          'It constantly seeks its own personal advantages.',
          'It is easily provoked and quickly offended.',
          'It focuses on public recognition and fame.'
        ],
        correctIndex: 0,
        explanationJa: '本文に「keeps no record of wrongs（人の悪事を数え立てない）」「rejoices with the truth（真理を喜ぶ）」と明記されています。',
        scriptureRef: '1 Corinthians 13:4-7'
      },
      {
        id: 'q-i-8',
        section: 'reading',
        sectionTitleJa: '第3部：使徒書簡読解',
        passage: 'And we know that in all things God works for the good of those who love Him, who have been called according to His purpose. For those God foreknew He also predestined to be conformed to the image of His Son.',
        question: 'According to the passage, for whom does God cause all things to work together for good?',
        options: [
          'For those who love God and are called according to His purpose.',
          'Only for those who have achieved material success.',
          'For all individuals regardless of their disposition or calling.',
          'Exclusively for the earthly rulers of empires.'
        ],
        correctIndex: 0,
        explanationJa: '「those who love Him, who have been called according to His purpose（神を愛し、その目的に従って召された人々）」と書かれています。',
        scriptureRef: 'Romans 8:28'
      }
    ]
  },
  {
    id: 'sim-mastery',
    title: '最高峰・卓越英語力模試 (C1-C2)',
    targetLevel: 'C1-C2',
    cefrRange: 'C1–C2',
    ieltsBand: 'IELTS 7.0–9.0',
    descriptionJa: '倒置構文、交差配列（キアスムス）、定型仮定法、最高度の古典散文・預言文学の読解。',
    durationMinutes: 30,
    questions: [
      {
        id: 'q-m-1',
        section: 'vocab',
        sectionTitleJa: '第1部：最高峰語彙と古典修辞',
        question: 'The theological term indicating God\'s attribute of being "forever unchangeable in His divine nature and decree" is:',
        options: ['immutable', 'ephemeral', 'mutable', 'temporal'],
        correctIndex: 0,
        explanationJa: 'immutable（不変の、変容せざる）はヘブル書6:18などに見られる神の絶対的本質を表す最上級語彙です。'
      },
      {
        id: 'q-m-2',
        section: 'vocab',
        sectionTitleJa: '第1部：最高峰語彙と古典修辞',
        question: 'Which word conveys "boundless and incapable of being depleted or fully measured"?',
        options: ['inexhaustible', 'superficial', 'transitory', 'finite'],
        correctIndex: 0,
        explanationJa: 'inexhaustible（汲めども尽きぬ、無尽蔵の）はローマ書11:33の神の深き知恵を讃えるのに相応しい語彙です。'
      },
      {
        id: 'q-m-3',
        section: 'vocab',
        sectionTitleJa: '第1部：最高峰語彙と古典修辞',
        question: '"Propitiation" differs from general forgiveness primarily in that it denotes:',
        options: [
          'A sacrifice that satisfies divine justice and turns away wrath',
          'A simple handshake settling an informal dispute',
          'A legal postponement of sentencing in secular court',
          'An accidental oversight of a minor misdemeanor'
        ],
        correctIndex: 0,
        explanationJa: 'propitiation（なだめの供え物）は、神の聖なる義を満たし、憤りを和らげる代償の犠牲を意味します。'
      },
      {
        id: 'q-m-4',
        section: 'grammar',
        sectionTitleJa: '第2部：倒置と格調高き統語構造',
        question: 'Never in human history _____ a more sublime declaration of grace been uttered.',
        options: ['has', 'have', 'is', 'did to'],
        correctIndex: 0,
        explanationJa: '文頭の否定副詞「Never」に伴う倒置です。主語「a declaration」は単数のため、助動詞「has」が前置されます。'
      },
      {
        id: 'q-m-5',
        section: 'grammar',
        sectionTitleJa: '第2部：倒置と格調高き統語構造',
        question: 'In the chiastic construction: "The Sabbath was made for man, not man _____ the Sabbath."',
        options: ['for', 'with', 'from', 'above'],
        correctIndex: 0,
        explanationJa: 'マルコ2:27「安息日は人のために作られたのであって、人が安息日のために（for the Sabbath）作られたのではない」という完全な対句・交差構造です。'
      },
      {
        id: 'q-m-6',
        section: 'grammar',
        sectionTitleJa: '第2部：倒置と格調高き統語構造',
        question: 'In the formulaic optative subjunctive: "The Lord bless thee and keep thee; the Lord _____ His face shine upon thee."',
        options: ['make', 'makes', 'made', 'making'],
        correctIndex: 0,
        explanationJa: '定型祈願仮定法（民数記6:25「主が御顔をあなたの上に照らし」）では動詞の原形「make」を用います。'
      },
      {
        id: 'q-m-7',
        section: 'reading',
        sectionTitleJa: '第3部：預言・ヘブル文学精読',
        passage: 'In the past God spoke to our ancestors through the prophets at many times and in various ways, but in these last days He has spoken to us by His Son, whom He appointed heir of all things, and through whom also He made the universe. The Son is the radiance of God\'s glory and the exact representation of His being, sustaining all things by His powerful word.',
        question: 'What relationship between the Son and creation is emphasized in the excerpt?',
        options: [
          'The universe was made through Him, and He sustains all things by His powerful word.',
          'The Son was merely an observer of the world from a distant realm.',
          'The Son was created by the prophets in various historic stages.',
          'The material world is neglected as insignificant in His presence.'
        ],
        correctIndex: 0,
        explanationJa: '本文に「through whom also He made the universe（御子を通して宇宙を造られ）」「sustaining all things by His powerful word（力あるみことばによって万物を保持しておられる）」と述べられています。',
        scriptureRef: 'Hebrews 1:1-3'
      },
      {
        id: 'q-m-8',
        section: 'reading',
        sectionTitleJa: '第3部：預言・ヘブル文学精読',
        passage: 'Then I saw "a new heaven and a new earth," for the first heaven and the first earth had passed away, and there was no longer any sea. And I heard a loud voice from the throne saying, "Look! God\'s dwelling place is now among the people, and He will dwell with them. They will be His people, and God Himself will be with them and be their God. He will wipe every tear from their eyes."',
        question: 'What fundamental transformation characterizes the vision described in the text?',
        options: [
          'God permanently dwells in communion with humanity, abolishing death and sorrow.',
          'An ancient city is restored through imperial military conquest.',
          'The physical oceans expand to envelop the remnants of dry earth.',
          'Humanity is evacuated from earthly existence to celestial void.'
        ],
        correctIndex: 0,
        explanationJa: '神が人とともに住み、死や悲しみがぬぐい去られる交わりの完成が描かれています。',
        scriptureRef: 'Revelation 21:1-4'
      }
    ]
  }
];
