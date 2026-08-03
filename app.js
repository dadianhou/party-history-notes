const assetRoot = "./"
const lessons = [
  {
    id: "p1", type: "党史", title: "第1节 · 党史大事记梳理", duration: "30:13",
    subtitle: "用一条主线把新民主主义革命时期的关键节点串起来。",
    summary: "党史不是散乱年份，而是中国共产党不断探索适合中国国情的革命道路，并在实践中形成领导、群众、武装和路线优势的过程。",
    teacher: "老师强调：公考党史题看似只占少量题目，但经常与时政、会议、历史意义结合，真正要掌握的是时间顺序、关键词和“开始 / 初步形成 / 正式形成 / 转折点”的对应关系。",
    timeline: [
      ["1919", "五四运动", "新民主主义革命的开端，促进马克思主义传播。"],
      ["1921", "中国共产党成立", "中国革命有了坚强领导核心。"],
      ["1924—1927", "第一次国民革命", "第一次国共合作、北伐，大革命最终失败。"],
      ["1927—1937", "土地革命", "探索农村包围城市、武装夺取政权。"],
      ["1937—1945", "抗日战争", "建立抗日民族统一战线，取得近代以来民族解放战争的完全胜利。"],
      ["1946—1949", "解放战争", "三大战役和渡江战役，中华人民共和国成立。"]
    ],
    table: [
      ["五四运动", "新民主主义革命开端"],
      ["中共一大", "中国共产党成立"],
      ["中共二大", "第一次明确提出反帝反封建民主革命纲领"],
      ["遵义会议", "党的历史上生死攸关的转折点"],
      ["中共七大", "确立毛泽东思想为党的指导思想"]
    ],
    mistakes: [
      ["“初步形成” vs “正式形成”", "西安事变和平解决是抗日民族统一战线初步形成；国共第二次合作是正式形成。"],
      ["会议内容不能串台", "一大重在建党，二大重在民主革命纲领，三大重在推动国共合作。"]
    ],
    flashes: [["一条主线", "建党 → 大革命 → 土地革命 → 抗战 → 解放战争"], ["题目抓手", "时间顺序 + 会议内容 + 历史意义 + 关键词"]]
  },
  {
    id: "p2", type: "党史", title: "第2节 · 党的成立与第一次国民革命", duration: "1:12:37",
    subtitle: "从新文化运动、五四运动到建党与国共第一次合作。",
    summary: "新文化运动和五四运动推动马克思主义传播，工人阶级登上政治舞台，中国共产党成立并提出革命纲领；随后通过国共合作和北伐，掀起第一次国民革命。",
    teacher: "老师讲解的核心是“从思想准备到组织成立，再到革命实践”：新文化运动提供思想启蒙，五四运动推动工人阶级成为主力，中共一大建党，中共二大立纲，中共三大推动合作，国民党一大标志合作正式形成。",
    timeline: [
      ["1915", "新文化运动", "《新青年》是主要阵地，北京大学是主要活动基地；前期提倡民主科学，后期马克思主义成为主流。"],
      ["1919.5.4", "五四运动", "导火索是巴黎和会上中国外交失败；学生是先锋，工人阶级是主力。"],
      ["1921.7", "中共一大", "上海开幕，后转移到浙江嘉兴南湖，正式成立中国共产党。"],
      ["1922", "中共二大", "制定最高纲领和最低纲领，第一次明确提出反帝反封建的民主革命纲领。"],
      ["1923", "中共三大", "决定共产党员以个人身份加入国民党，推动建立统一战线。"],
      ["1924", "国民党一大", "确立联俄、联共、扶助农工三大政策，第一次国共合作正式形成。"],
      ["1926", "北伐战争", "目标是推翻北洋军阀统治、统一中国。"],
      ["1927", "四一二、七一五", "国共合作破裂，大革命失败。"]
    ],
    table: [
      ["中共一大", "立党：通过《中国共产党纲领》，正式成立中国共产党。"],
      ["中共二大", "立纲：最高纲领是实现共产主义，最低纲领是反帝反封建。"],
      ["中共三大", "合作：决定推动国共合作。"],
      ["国民党一大", "成盟：第一次国共合作正式形成，提出三大政策。"],
      ["中共四大", "领导工农：强调无产阶级领导权和工农联盟问题。"]
    ],
    mistakes: [
      ["《新青年》与北京大学", "《新青年》是主要阵地；北京大学是主要活动基地。"],
      ["五四运动的先锋与主力", "青年学生是先锋，工人阶级是主力。"],
      ["四一二与七一五", "四一二是国共合作遭到破坏、革命由胜转败的转折；七一五标志第一次国共合作最终破裂。"]
    ],
    flashes: [["记忆口令", "一大立党，二大立纲，三大合作，国一成盟，四大领导工农"], ["一条线", "新文化运动 → 五四运动 → 建党 → 国共合作 → 北伐 → 大革命失败"]]
  },
  {
    id: "p3", type: "党史", title: "第3节 · 土地革命", duration: "51:35",
    subtitle: "创建人民军队、建立革命根据地、红军长征与遵义会议。",
    summary: "土地革命时期是中国共产党独立探索革命道路的时期，主线可以压缩为：建军、根据地、反围剿、长征、遵义转折。",
    teacher: "老师强调：南昌起义是建军发端，三湾改编是建军奠基，古田会议是建军定型；井冈山是第一个农村革命根据地，中央苏区是全国最大的革命根据地；遵义会议是从幼年走向成熟的生死转折。",
    timeline: [
      ["1927.8.1", "南昌起义", "打响武装反抗国民党反动派第一枪，标志人民军队创建开始。"],
      ["1927.8.7", "八七会议", "确立土地革命和武装反抗国民党反动派总方针。"],
      ["1927.9", "秋收起义", "文家市决策，革命战略重心由城市转向农村。"],
      ["1927.10", "井冈山根据地", "中国共产党历史上开辟的第一个农村革命根据地。"],
      ["1929.12", "古田会议", "确立思想建党、政治建军原则，人民军队正式定型。"],
      ["1934—1936", "红军长征", "第五次反围剿失败后进行战略转移。"],
      ["1935.1", "遵义会议", "结束“左”倾冒险主义统治，确立毛泽东在党和红军中的领导地位。"]
    ],
    table: [
      ["南昌起义", "建军发端：第一枪、建军节。"],
      ["八七会议", "总方针：土地革命、武装反抗。"],
      ["三湾改编", "党对军队绝对领导的组织基础。"],
      ["古田会议", "思想建党、政治建军，人民军队定型。"],
      ["井冈山", "第一个农村革命根据地。"],
      ["遵义会议", "生死攸关的转折点，党走向成熟。"]
    ],
    mistakes: [
      ["八七会议 vs 遵义会议", "八七会议确定土地革命和武装反抗总方针；遵义会议解决军事和组织领导问题。"],
      ["吴起镇 vs 会宁会师", "吴起镇标志长征第一阶段结束；会宁会师标志长征正式结束。"],
      ["井冈山 vs 中央苏区", "井冈山是第一个农村革命根据地；中央苏区是全国最大的革命根据地。"]
    ],
    flashes: [["建军三阶段", "南昌发端 → 三湾奠基 → 古田定型"], ["长征主线", "瑞金出发 → 遵义转折 → 会宁会师"]]
  },
  {
    id: "p4", type: "党史", title: "第4节 · 抗日战争", duration: "1:29:49",
    subtitle: "从局部抗战到全民族抗战，掌握统一战线和敌后战场。",
    summary: "抗日战争部分要抓住九一八、七七事变、抗日民族统一战线、敌后抗战、百团大战、延安整风和中共七大。",
    teacher: "老师强调：题目常把“局部抗战开始、全民族抗战开始、统一战线初步形成、正式形成”放在一起考，必须按照关键词准确对应。",
    timeline: [
      ["1931.9.18", "九一八事变", "中国局部抗战开始。"],
      ["1935", "瓦窑堡会议", "确定建立抗日民族统一战线的政策。"],
      ["1936", "西安事变和平解决", "抗日民族统一战线初步形成。"],
      ["1937.7.7", "七七事变", "全民族抗战开始。"],
      ["1937", "第二次国共合作", "抗日民族统一战线正式形成。"],
      ["1940", "百团大战", "抗战时期中国军队主动出击日军规模最大的战役。"],
      ["1945", "中共七大", "确立毛泽东思想为党的指导思想。"]
    ],
    table: [
      ["九一八事变", "局部抗战开始"],
      ["七七事变", "全民族抗战开始"],
      ["西安事变和平解决", "抗日民族统一战线初步形成"],
      ["第二次国共合作", "抗日民族统一战线正式形成"],
      ["百团大战", "主动出击日军规模最大的战役"]
    ],
    mistakes: [["抗日战争两大战场", "国民党正面战场与共产党敌后战场共同构成全民族抗战。"], ["百团大战定位", "是主动出击日军的战役，不等同于抗战时期所有战役中的“最大”。"]]
  },
  {
    id: "p5", type: "党史", title: "第5节 · 解放战争", duration: "40:35",
    subtitle: "战略防御、战略进攻、战略决战与渡江战役。",
    summary: "解放战争的逻辑是：内战爆发 → 战略防御 → 刘邓挺进大别山 → 三大战役 → 渡江战役 → 新中国成立。",
    teacher: "老师强调：解放战争不只是军事较量，也是政治、经济、群众基础和组织能力的较量；土地改革调动了农民积极性，三大战役基本消灭国民党军队主力。",
    timeline: [
      ["1946", "全面内战爆发", "解放战争开始。"],
      ["1947", "刘邓大军挺进大别山", "人民解放军由战略防御转入战略进攻。"],
      ["1948—1949", "三大战役", "辽沈、淮海、平津，基本消灭国民党军队主力。"],
      ["1949.4", "渡江战役", "解放南京，国民党在大陆的统治结束。"],
      ["1949.10.1", "中华人民共和国成立", "新民主主义革命取得胜利。"]
    ],
    table: [["辽沈战役", "解放东北"], ["淮海战役", "解放长江中下游以北广大地区"], ["平津战役", "基本解放华北"], ["渡江战役", "解放南京，推翻国民党大陆统治"]]
  },
  {
    id: "p6", type: "中特", title: "第1节 · 前言", duration: "38:25",
    subtitle: "先弄清中特是什么，再建立完整的理论学习框架。",
    summary: "中国特色社会主义包括道路、理论体系、制度和文化。学习中特不能只背零散表述，要把理论形成、发展和现实政策应用串成体系。",
    teacher: "老师反复强调：中特不能当成纯背诵科目；现在的题目越来越重视政策理解、材料应用和概念辨析。学习方法是系统学习、理解背诵、纵向串联、结合政策应用。",
    table: [["中国特色社会主义道路", "实现途径"], ["中国特色社会主义理论体系", "行动指南"], ["中国特色社会主义制度", "根本保障"], ["中国特色社会主义文化", "精神力量"]],
    mistakes: [["理论体系与单个理论", "邓小平理论、“三个代表”重要思想、科学发展观属于中国特色社会主义理论体系的重要组成部分；新时代思想是当代中国马克思主义、二十一世纪马克思主义。"], ["学习方式", "先搭框架，再记核心表述，最后用题目检验政策应用。"]],
    flashes: [["四位一体", "道路、理论、制度、文化"], ["学习顺序", "是什么 → 为什么 → 怎么做 → 如何结合材料判断"]]
  },
  {
    id: "p7", type: "中特", title: "第2节 · 邓、三、科（上）", duration: "52:15",
    subtitle: "邓小平理论与“三个代表”重要思想。",
    summary: "邓小平理论主要回答“什么是社会主义、怎样建设社会主义”；“三个代表”重要思想主要回答“建设什么样的党、怎样建设党”。",
    teacher: "老师提醒：理论名称、核心问题、核心内容必须分开记。看到“社会主义本质”想到邓小平理论，看到党的先进性和执政能力建设想到“三个代表”。",
    table: [["邓小平理论", "什么是社会主义、怎样建设社会主义"], ["社会主义本质", "解放和发展生产力，消灭剥削、消除两极分化，最终达到共同富裕"], ["三个代表", "先进生产力、先进文化、最广大人民根本利益"], ["三个代表主题", "建设什么样的党、怎样建设党"]],
    mistakes: [["共同富裕", "不是同步富裕、平均主义，而是社会主义的根本目标。"], ["根本任务与根本目标", "解放和发展生产力是根本任务；共同富裕是根本目标。"]]
  },
  {
    id: "p8", type: "中特", title: "第3节 · 邓、三、科（下）", duration: "49:28",
    subtitle: "科学发展观与三大理论的纵向联系。",
    summary: "科学发展观主要回答“实现什么样的发展、怎样发展”。四个关键词是：第一要义发展、核心以人为本、基本要求全面协调可持续、根本方法统筹兼顾。",
    teacher: "老师强调：要把邓小平理论、“三个代表”、科学发展观放进一条理论发展链，不能只记四句话而不知道它们分别解决什么问题。",
    table: [["第一要义", "发展"], ["核心", "以人为本"], ["基本要求", "全面协调可持续"], ["根本方法", "统筹兼顾"]],
    mistakes: [["科学发展观的四句话", "“核心”不是发展，“第一要义”才是发展；“根本方法”是统筹兼顾。"], ["三大理论主题", "社会主义建设 → 党的建设 → 发展问题。"]],
    flashes: [["理论三问", "什么是社会主义？建设什么样的党？实现什么样的发展？"], ["四句话", "发展、以人为本、全面协调可持续、统筹兼顾"]]
  }
]

const transcriptFiles = {
  p1: "transcripts/p1.txt",
  p2: "transcripts/p2.txt",
  p3: "transcripts/p3.txt",
  p4: "transcripts/p4.txt",
  p5: "transcripts/p5.txt",
  p6: "transcripts/p6.txt",
  p7: "transcripts/p7.txt",
  p8: "transcripts/p8.txt"
}

const detailedNotes = {
  p1: [
    {
      heading: "这节课要解决什么",
      bullets: [
        "把党史从零散年份整理成“思想准备—党的成立—国共合作—独立革命—抗日战争—解放战争”的连续主线。",
        "做题时优先判断事件处于哪个历史阶段，再判断它的时间、会议内容和历史意义。",
        "“开端、开始、初步形成、正式形成、转折点、胜利”是党史选择题中最常见的定位词。"
      ]
    },
    {
      heading: "六个阶段的因果链",
      bullets: [
        "新文化运动和五四运动：提供思想启蒙，促进马克思主义传播，工人阶级开始登上政治舞台。",
        "中国共产党成立：中国革命有了坚强的领导核心和新的革命方向。",
        "第一次国民革命：共产党在合作中积累经验，但由于没有掌握革命领导权和武装力量，大革命最终失败。",
        "土地革命：党开始独立探索农村包围城市、武装夺取政权的道路。",
        "抗日战争：建立抗日民族统一战线，党在民族战争中发展壮大。",
        "解放战争：通过土地改革、战略进攻和三大战役，取得新民主主义革命胜利。"
      ]
    },
    {
      heading: "按关键词快速定位",
      bullets: [
        "“新民主主义革命开端”对应五四运动。",
        "“开天辟地的大事”对应中国共产党成立。",
        "“第一次明确提出反帝反封建民主革命纲领”对应中共二大。",
        "“生死攸关的转折点”对应遵义会议。",
        "“抗日民族统一战线初步形成”对应西安事变和平解决。",
        "“抗日民族统一战线正式形成”对应国共第二次合作。",
        "“近代以来民族解放战争的完全胜利”对应抗日战争胜利。"
      ]
    }
  ],
  p2: [
    {
      heading: "PPT 1：新文化运动",
      bullets: [
        "1915年陈独秀创办《青年杂志》，后改名《新青年》，《新青年》是新文化运动的主要阵地。",
        "北京大学是新文化运动的主要活动基地，陈独秀、李大钊、胡适、鲁迅等人物经常作为材料中的对应项出现。",
        "前期主要提倡民主与科学，反对专制与愚昧，提倡新道德、新文学；五四运动以后，马克思主义逐渐成为传播主流。",
        "易错点：问“主要阵地”选《新青年》；问“主要活动基地”选北京大学。"
      ]
    },
    {
      heading: "PPT 2—3：五四运动",
      bullets: [
        "导火索是巴黎和会上中国外交失败，列强把德国在山东的权益转让给日本。",
        "1919年5月4日，北京学生首先走上街头，口号包括外争主权、内除国贼、拒绝在巴黎和约上签字等。",
        "运动后期，上海工人举行罢工，工人阶级成为运动的主力；青年学生是先锋。",
        "历史意义：是一次彻底的反帝反封建运动；促进马克思主义传播；为中国共产党的成立作了思想上和干部上的准备；标志新民主主义革命开端。",
        "老师的讲法可以记成：巴黎和会点火，学生先行，工人接力，马克思主义扩散，建党条件成熟。"
      ]
    },
    {
      heading: "PPT 4—5：中共一大与中共二大",
      bullets: [
        "中共一大于1921年召开，上海开幕，后转移到浙江嘉兴南湖；主要任务是正式建立中国共产党、通过党的纲领、确定党的名称。",
        "中共一大解决的是“党能不能成立、以什么组织形式开展革命”的问题。",
        "中共二大于1922年召开，第一次明确提出反帝反封建的民主革命纲领。",
        "二大的最高纲领是实现共产主义；最低纲领是打倒军阀、推翻帝国主义压迫、统一中国为真正的民主共和国。",
        "口诀：一大立党，二大立纲。"
      ]
    },
    {
      heading: "PPT 6—7：国共合作与北伐",
      bullets: [
        "中共三大决定共产党员以个人身份加入国民党，推动建立革命统一战线。",
        "1924年国民党一大召开，确立联俄、联共、扶助农工三大政策，标志第一次国共合作正式形成。",
        "黄埔军校、国民革命军和北伐战争是第一次国共合作的重要实践。",
        "北伐目标是推翻北洋军阀统治、统一中国，主要打击吴佩孚、孙传芳、张作霖等势力。",
        "中共四大进一步提出无产阶级领导权和工农联盟问题。"
      ]
    },
    {
      heading: "PPT 8：大革命失败",
      bullets: [
        "1927年四一二反革命政变由蒋介石发动，造成国共合作遭到严重破坏，是革命由胜利走向失败的转折。",
        "1927年七一五反革命政变由汪精卫发动，标志第一次国共合作最终破裂，大革命全面失败。",
        "失败原因既有国民党右派叛变，也有陈独秀右倾机会主义错误；根本教训是必须掌握革命领导权和革命武装。",
        "这一教训直接引出下一节：党开始独立领导武装斗争，进入土地革命时期。"
      ]
    }
  ],
  p3: [
    {
      heading: "PPT 1—3：人民军队的创建",
      bullets: [
        "南昌起义：1927年8月1日，打响武装反抗国民党反动派第一枪，标志中国共产党创建人民军队、独立领导革命战争的开始。",
        "八七会议：1927年8月7日在汉口召开，纠正右倾错误，确定土地革命和武装反抗国民党反动派的总方针；毛泽东提出“枪杆子里面出政权”。",
        "秋收起义失败后，文家市决策把战略重心由城市转向农村，说明党开始根据中国国情调整革命道路。",
        "三湾改编：把支部建在连上，确立党对军队绝对领导的组织基础。",
        "古田会议：确立思想建党、政治建军原则，强调人民军队必须服从党的领导，人民军队由此走向定型。"
      ]
    },
    {
      heading: "PPT 4：革命根据地",
      bullets: [
        "井冈山革命根据地是中国共产党历史上建立的第一个农村革命根据地。",
        "井冈山道路的核心是农村包围城市、武装夺取政权；其基本内容是武装斗争、土地革命、根据地建设。",
        "中央苏区是全国最大的革命根据地，中华苏维埃共和国临时中央政府首都在瑞金。",
        "易错：井冈山强调“第一个农村革命根据地”；中央苏区强调“全国最大”。"
      ]
    },
    {
      heading: "PPT 5：反围剿与长征",
      bullets: [
        "前四次反围剿在毛泽东等人的正确军事思想指导下取得胜利；第五次反围剿由于王明、博古、李德等人的错误指挥而失败。",
        "长征不是简单逃跑，而是红军进行的一次战略转移，是保存革命力量、寻找新的革命落脚点的重大行动。",
        "长征路线要抓住：瑞金出发—突破四道封锁线—湘江血战—乌江—遵义—四渡赤水—巧渡金沙江—强渡大渡河—飞夺泸定桥—爬雪山、过草地—吴起镇—会宁会师。",
        "吴起镇标志中央红军长征第一阶段结束；1936年红军三大主力会宁会师，标志长征胜利结束。"
      ]
    },
    {
      heading: "PPT 6：遵义会议",
      bullets: [
        "1935年1月，遵义会议取消博古、李德的最高军事指挥权，结束“左”倾冒险主义在党中央的统治。",
        "会议确立毛泽东在党中央和红军中的领导地位，第一次独立自主地运用马克思主义解决中国革命问题。",
        "历史定位：挽救了党、挽救了红军、挽救了中国革命，是党的历史上生死攸关的转折点。",
        "老师强调的比较：八七会议解决革命方针，遵义会议解决军事和组织领导；古田会议解决建军原则。"
      ]
    }
  ],
  p4: [
    {
      heading: "抗战时间轴",
      bullets: [
        "1931年九一八事变：中国局部抗战开始。",
        "1935年瓦窑堡会议：确定建立抗日民族统一战线的政策。",
        "1936年西安事变和平解决：抗日民族统一战线初步形成。",
        "1937年七七事变：全民族抗战开始。",
        "1937年国共第二次合作：抗日民族统一战线正式形成。",
        "1945年日本投降：抗日战争取得完全胜利。"
      ]
    },
    {
      heading: "正面战场与敌后战场",
      bullets: [
        "正面战场主要由国民党军队承担，敌后战场主要由共产党领导的八路军、新四军承担，二者共同构成全民族抗战。",
        "共产党深入敌后建立抗日根据地，实行游击战争，发动群众，开展地道战、地雷战、麻雀战等。",
        "根据地政权建设中常考“三三制”；经济政策常考减租减息；组织群众常考群众路线。",
        "百团大战发生于1940年，由彭德怀指挥，是抗战时期中国军队主动出击日军规模最大的战役。"
      ]
    },
    {
      heading: "延安整风与中共七大",
      bullets: [
        "延安整风反对主观主义、宗派主义和党八股，实质是解决党的思想路线问题，确立实事求是的思想路线。",
        "中共七大于1945年召开，确立毛泽东思想为党的指导思想，提出党的政治路线。",
        "考试中常把延安整风和七大连在一起：整风解决思想路线，七大完成指导思想和政治路线的集中确立。"
      ]
    }
  ],
  p5: [
    {
      heading: "解放战争四步走",
      bullets: [
        "全面内战爆发：1946年，国民党军队大举进攻解放区，解放战争开始。",
        "战略防御：人民解放军以运动战和积极防御粉碎国民党军队进攻。",
        "战略进攻：1947年刘邓大军挺进大别山，人民解放军由战略防御转入战略进攻。",
        "战略决战：辽沈、淮海、平津三大战役基本消灭国民党军队主力。",
        "渡江战役：1949年解放南京，国民党在大陆的统治结束；1949年10月1日中华人民共和国成立。"
      ]
    },
    {
      heading: "三大战役如何记",
      bullets: [
        "辽沈战役：先打锦州，解放东北，人民解放军首次在兵力数量上超过国民党军队。",
        "淮海战役：以徐州为中心，解放长江中下游以北广大地区，群众支援规模巨大。",
        "平津战役：和平解放北平，基本解放华北。",
        "口诀：辽沈关东北，淮海下江北，平津定华北。"
      ]
    },
    {
      heading: "为什么能取得胜利",
      bullets: [
        "党的正确领导和人民解放军的英勇作战是根本保证。",
        "土地改革满足农民土地要求，调动农民参军、支前和生产积极性。",
        "国民党政治腐败、经济崩溃、失去民心；共产党建立了广泛的人民群众基础。",
        "老师强调：解放战争是军事、政治、经济、群众基础和组织能力的综合较量。"
      ]
    }
  ],
  p6: [
    {
      heading: "中特是什么",
      bullets: [
        "中国特色社会主义是改革开放以来党的全部理论和实践的主题。",
        "它包括中国特色社会主义道路、理论体系、制度和文化四个方面。",
        "道路回答“怎么走”；理论体系回答“用什么思想指导”；制度回答“靠什么保障”；文化回答“以什么精神力量支撑”。",
        "中国特色社会主义最本质的特征是中国共产党领导，制度最大优势是中国共产党领导。"
      ]
    },
    {
      heading: "理论发展的纵向链条",
      bullets: [
        "邓小平理论：回答什么是社会主义、怎样建设社会主义。",
        "“三个代表”重要思想：回答建设什么样的党、怎样建设党。",
        "科学发展观：回答实现什么样的发展、怎样发展。",
        "习近平新时代中国特色社会主义思想：回答新时代坚持和发展什么样的中国特色社会主义、怎样坚持和发展中国特色社会主义。",
        "做题时先判断题干在问“社会主义建设、党的建设、发展问题还是新时代总任务”，再匹配理论。"
      ]
    },
    {
      heading: "老师建议的学习方法",
      bullets: [
        "第一轮：先把理论名称、形成背景、核心问题和关键词搭成框架。",
        "第二轮：对每个理论进行理解背诵，不要只背孤立口号。",
        "第三轮：把十八大、十九大、二十大以及历次全会内容纵向串联。",
        "第四轮：通过政策材料判断理论应用，尤其关注新发展理念、共同富裕、生态文明和党的建设。",
        "中特不是纯粹的“送分背诵题”，越来越重视表述准确和政策应用。"
      ]
    }
  ],
  p7: [
    {
      heading: "邓小平理论的形成与发展",
      bullets: [
        "党的十一届三中全会开启改革开放和社会主义现代化建设新时期。",
        "党的十二大提出建设有中国特色的社会主义。",
        "党的十三大系统阐述社会主义初级阶段理论，提出党在社会主义初级阶段的基本路线。",
        "1992年南方谈话深刻回答了社会主义本质、计划与市场关系等问题，推动改革开放进入新阶段。",
        "党的十五大把邓小平理论确立为党的指导思想。"
      ]
    },
    {
      heading: "社会主义本质与基本路线",
      bullets: [
        "社会主义本质：解放和发展生产力，消灭剥削，消除两极分化，最终达到共同富裕。",
        "社会主义的根本任务是解放和发展生产力；社会主义的根本目标是共同富裕。",
        "共同富裕不是同步富裕、平均主义，也不是整齐划一，而是全体人民通过共同奋斗逐步实现。",
        "社会主义初级阶段基本路线可概括为“一个中心、两个基本点”：以经济建设为中心，坚持四项基本原则，坚持改革开放。"
      ]
    },
    {
      heading: "“三个代表”重要思想",
      bullets: [
        "党始终代表中国先进生产力的发展要求、先进文化的前进方向、最广大人民的根本利益。",
        "它主要回答“建设什么样的党、怎样建设党”，核心是保持党的先进性和加强党的执政能力建设。",
        "三个代表之间不是三个孤立口号：先进生产力提供物质基础，先进文化提供精神方向，最广大人民根本利益是出发点和落脚点。",
        "易错：三个代表是党的建设理论，不要把它直接等同于社会主义本质理论或科学发展观。"
      ]
    }
  ],
  p8: [
    {
      heading: "科学发展观的四个关键词",
      bullets: [
        "第一要义是发展：发展是解决中国一切问题的基础和关键。",
        "核心是以人为本：发展为了人民、发展依靠人民、发展成果由人民共享。",
        "基本要求是全面协调可持续：经济、政治、文化、社会、生态文明协调推进，当前发展与长远发展相统一。",
        "根本方法是统筹兼顾：统筹城乡、区域、经济社会、人与自然、国内发展与对外开放。"
      ]
    },
    {
      heading: "科学发展观解决什么问题",
      bullets: [
        "它针对片面追求经济增长速度、资源环境压力加大、城乡区域发展不平衡等问题。",
        "“全面”强调发展领域完整；“协调”强调各方面比例关系；“可持续”强调不能以牺牲后代利益换取当下增长。",
        "“以人为本”不是抽象口号，而是把人民生活、公共服务、社会公平和人的全面发展放在发展评价中。",
        "“统筹兼顾”不是平均用力，而是根据主要矛盾和现实条件处理整体与局部、当前与长远的关系。"
      ]
    },
    {
      heading: "三大理论串联记忆",
      bullets: [
        "邓小平理论：先回答社会主义是什么、怎样建设社会主义，重点是改革开放和社会主义现代化建设。",
        "“三个代表”重要思想：进一步回答执政党是什么、怎样建设党，重点是党的先进性和执政能力。",
        "科学发展观：进一步回答发展是什么、怎样实现科学发展，重点是以人为本和全面协调可持续。",
        "一条总口诀：社会主义建设—党的建设—发展问题；理论主题逐步从“建设”深化到“党的领导”和“发展方式”。"
      ]
    }
  ]
}

const spokenHighlights = {
  p1: [
    "老师提醒：党史题不只考一个年份，近年常把时间排序、诗句或描述和历史事件结合起来考。",
    "课堂的复习重点是先建立完整历史时间线，再用关键词定位事件，不要把每个事件孤立背诵。"
  ],
  p2: [
    "老师反复区分“主要阵地”和“主要活动基地”：前者是《新青年》，后者是北京大学。",
    "老师把五四运动讲成一条因果链：巴黎和会外交失败点火，学生先行，工人阶级成为主力，马克思主义传播加速，建党条件成熟。",
    "老师的会议口令是“一大立党、二大立纲、三大合作、国一成盟、四大领导工农”。"
  ],
  p3: [
    "老师用“发端—奠基—定型”区分南昌起义、三湾改编和古田会议，提醒不要把三者的历史定位混淆。",
    "老师强调土地革命不是简单的军事行动，而是党独立探索中国革命道路、逐步走向成熟的阶段。",
    "讲长征时，老师重点突出战略调整和机动作战，尤其是四渡赤水的灵活指挥，而不是只背路线名称。"
  ],
  p4: [
    "老师要求把局部抗战、全民族抗战、统一战线初步形成和正式形成四个关键词准确配对。",
    "抗战题不能只记单个战役，要同时理解正面战场、敌后战场和全民族抗战的整体关系。"
  ],
  p5: [
    "老师把解放战争概括为抗战胜利后主要矛盾变化、重庆谈判、全面内战、战略进攻、三大战役和渡江战役。",
    "老师提醒：解放战争的胜利既是军事胜利，也是政治、经济、群众基础和组织能力的综合胜利。"
  ],
  p6: [
    "老师明确说，中特不能只当成纯背诵科目；现在的题目越来越重视政策理解、概念辨析和材料应用。",
    "老师建议先系统学习，再理解背诵和框架定位；不要试图把文件每个字都背下来，要抓住理论主题和定位词。",
    "老师还强调，学好中特不仅服务于客观题，也能服务申论写作和面试表达，因为政策理论可以转化为观点、分析框架和案例解释。"
  ],
  p7: [
    "老师的讲解重点是把理论名称、核心问题和核心表述分开记，看到题干关键词先判断它在问哪一个理论。",
    "社会主义本质要抓“生产力”和“共同富裕”两个记忆支点，再向完整表述展开。"
  ],
  p8: [
    "老师要求把邓小平理论、“三个代表”重要思想和科学发展观放在一条理论发展链上理解，而不是只背四句话。",
    "科学发展观的四个关键词要和现实发展问题对应：发展、人民、协调可持续、统筹兼顾。"
  ]
}

const pptInline = {
  p2: [
    ["video_notes_BV1Nu4y1x7y9_p2/assets/01_新文化运动.jpg", "PPT：新文化运动的阵地与基地"],
    ["video_notes_BV1Nu4y1x7y9_p2/assets/02_五四运动导火索.jpg", "PPT：五四运动导火索"],
    ["video_notes_BV1Nu4y1x7y9_p2/assets/04_中共一大代表.jpg", "PPT：中共一大与党的成立"],
    ["video_notes_BV1Nu4y1x7y9_p2/assets/06_国民党一大.jpg", "PPT：国民党一大与第一次国共合作"],
    ["video_notes_BV1Nu4y1x7y9_p2/assets/08_大革命总结.jpg", "PPT：大革命失败与历史教训"]
  ],
  p3: [
    ["BV1Nu4y1x7y9_p3_土地革命_笔记_assets/01_南昌起义.jpg", "PPT：南昌起义，建军发端"],
    ["BV1Nu4y1x7y9_p3_土地革命_笔记_assets/02_八七会议.jpg", "PPT：八七会议与土地革命总方针"],
    ["BV1Nu4y1x7y9_p3_土地革命_笔记_assets/03_古田会议.jpg", "PPT：古田会议，建军定型"],
    ["BV1Nu4y1x7y9_p3_土地革命_笔记_assets/05_长征路线.jpg", "PPT：红军长征路线"],
    ["BV1Nu4y1x7y9_p3_土地革命_笔记_assets/06_遵义会议.jpg", "PPT：遵义会议与历史转折"]
  ]
}

const essayNotes = {
  p1: {
    topic: "以史为鉴、走好中国道路",
    view: "历史反复证明，发展道路必须立足本国实际，不能简单照搬外部模式；只有把科学理论同中国具体实际相结合，才能把方向优势转化为发展成效。",
    angles: ["坚持党的领导是历史和人民的选择", "坚持实事求是、具体问题具体分析", "在历史经验中增强战略定力"],
    sentence: "回望历史，真正具有生命力的道路，从来不是对既有模式的机械复制，而是在实践中形成、在检验中完善、在人民选择中巩固。",
    use: "适合“道路选择、历史自信、文化自信、战略定力、青年成长”类申论主题。"
  },
  p2: {
    topic: "思想启蒙与青年担当",
    view: "社会进步既需要先进思想的启蒙，也需要青年和群众把思想转化为行动；思想传播、组织建设和实践斗争相互促进。",
    angles: ["青年是社会进步的重要力量", "思想解放要转化为社会行动", "个人理想要同国家和民族需要结合"],
    sentence: "青年之“新”，不只是知识结构的新，更在于能否以开放视野审视现实，以责任担当回应时代，把思想上的觉醒转化为脚踏实地的行动。",
    use: "适合“青年担当、创新、思想解放、教育、文化建设、爱国主义”类申论主题。"
  },
  p3: {
    topic: "实事求是与自主探索",
    view: "面对复杂问题，必须从实际出发，尊重规律、灵活调整；真正有效的改革和治理，不是照搬模板，而是把原则性和灵活性结合起来。",
    angles: ["因地制宜、分类施策", "在试错中总结规律", "战略定力与策略灵活相统一"],
    sentence: "面对发展中的新问题，既要保持方向不变、目标不移，也要根据形势变化及时调整方法，在实践中找答案、在试验中积累经验。",
    use: "适合“基层治理、乡村振兴、改革创新、因地制宜、风险应对”类申论主题。"
  },
  p4: {
    topic: "团结协作与共同抗压",
    view: "面对重大风险挑战，单一力量难以完成复杂任务，必须把共同目标转化为组织协同、社会动员和群众参与。",
    angles: ["统一战线和社会协同", "统筹发展与安全", "把群众力量组织起来"],
    sentence: "越是任务艰巨、风险交织，越不能各自为战，而要在共同目标下凝聚共识、整合资源、协同发力，形成共克时艰的合力。",
    use: "适合“抗风险、基层治理、社会动员、公共安全、团结合作”类申论主题。"
  },
  p5: {
    topic: "人民立场与群众基础",
    view: "事业成败归根到底取决于是否站稳人民立场、解决群众实际问题；政策只有转化为群众可感可及的获得感，才能形成持久动力。",
    angles: ["人民至上", "政策落地和群众获得感", "组织能力与执行能力"],
    sentence: "衡量一项工作是否真正有效，不能只看文件写得是否漂亮、指标增长是否迅速，更要看群众是否有获得感、幸福感和安全感。",
    use: "适合“为民服务、基层治理、公共服务、共同富裕、民生保障”类申论主题。"
  },
  p6: {
    topic: "理论学习与政策执行",
    view: "理论学习的价值不在于堆积概念，而在于形成理解政策、分析问题和推动工作的能力；要把理论框架转化为解决现实问题的方法。",
    angles: ["系统学习和知行合一", "政策理解能力", "理论联系实际"],
    sentence: "理论学习不是把材料背得越多越好，而是要把零散表述串成系统框架，把政策要求转化为分析问题、解决问题和推动落实的能力。",
    use: "适合“学习型政府、干部能力建设、政策执行、理论联系实际、青年成长”类申论主题。"
  },
  p7: {
    topic: "解放和发展生产力、实现共同富裕",
    view: "发展的最终目的不是单纯追求速度和规模，而是不断解放和发展生产力、改善人民生活、推动共同富裕。",
    angles: ["发展是解决问题的基础", "发展成果由人民共享", "效率与公平相统一"],
    sentence: "高质量发展既要做大“蛋糕”，不断增强发展动力和综合实力，也要分好“蛋糕”，让发展成果更加公平地惠及全体人民。",
    use: "适合“高质量发展、共同富裕、就业增收、区域协调、民营经济”类申论主题。"
  },
  p8: {
    topic: "以人民为中心的高质量发展",
    view: "科学发展不是单纯追求经济增长，而是以人民为中心，统筹经济、社会、生态和长远发展，形成全面协调可持续的发展格局。",
    angles: ["人民立场", "全面协调可持续", "统筹兼顾和系统治理"],
    sentence: "发展不能以牺牲生态环境、透支长远利益为代价，必须把人民需要、发展规律和资源环境承载能力统一起来。",
    use: "适合“高质量发展、生态文明、乡村振兴、区域协调、系统治理、绿色发展”类申论主题。"
  }
}

const essayHub = {
  title: "申论专区",
  subtitle: "把党史和中特知识转化为申论中的观点、论证和素材。",
  method: [
    ["先定主题", "先判断题目是在考人民立场、改革创新、青年担当、绿色发展，还是治理能力。"],
    ["再搭逻辑", "用“问题—原因—影响—对策—长效机制”组织答案，不把历史故事当成孤立材料。"],
    ["最后落地", "把党史和中特中的原则，改写成今天的政策语言、基层场景和治理措施。"],
    ["避免空泛", "每个观点后面补一个历史依据、现实例子或可执行措施，形成观点和论据的闭环。"]
  ],
  framework: [
    ["开头点题", "当前，面对……的新形势新任务，必须坚持……，把……转化为……。"],
    ["分析原因", "一方面是……；另一方面是……；更深层次看，关键在于……。"],
    ["提出对策", "要坚持人民立场，完善……；要坚持系统观念，统筹……；要坚持因地制宜，推动……。"],
    ["结尾升华", "只有把正确方向、科学理论和务实行动统一起来，才能让发展成果更公平、更充分地惠及人民。"]
  ],
  expansion: [
    ["第一阶段", "继续补充每节课的语音提炼、PPT页码和历史素材。"],
    ["第二阶段", "为每个申论主题增加“真题题型、审题关键词、分论点模板和示范段落”。"],
    ["第三阶段", "加入个人收藏、错题记录、材料练习和答案自评，形成申论训练闭环。"],
    ["第四阶段", "按主题生成“晨读版、考场版、面试版”三种长度的表达。"]
  ]
}

const essayExercises = {
  p1: {
    question: "材料指出，发展道路不能简单照搬他国模式，必须立足自身历史和现实。请结合材料，谈谈你对“走好自己的路”的理解。要求：观点明确，分析深入，字数不少于600字。",
    keywords: "道路选择、立足实际、历史经验、战略定力",
    outline: ["开头：指出道路选择关系事业成败，必须坚持从实际出发。", "分论点一：历史经验说明照搬模式难以解决本国问题。", "分论点二：走自己的路不是封闭，而是把普遍规律同具体国情结合。", "分论点三：新时代要把道路自信转化为改革发展和治理效能。", "结尾：以实践检验道路，以人民获得感检验成效。"],
    model: "道路决定方向，方向决定事业成败。回望中国近代以来的探索，真正有效的道路从来不是对外部模式的机械复制，而是在尊重规律、立足国情、回应人民需要的基础上形成的。走好自己的路，既要保持战略定力，不因一时困难而动摇方向；也要坚持改革创新，在实践中不断完善制度和方法。归根到底，要把正确道路转化为发展成果、治理效能和人民群众可感可及的幸福生活。"
  },
  p2: {
    question: "某地开展青年理论学习活动，但部分青年认为理论学习“离工作很远”。请结合五四运动和青年担当，提出一篇倡议文章的写作思路。",
    keywords: "青年担当、思想启蒙、知行合一、时代责任",
    outline: ["开头：从青年成长和国家发展关系切入。", "分论点一：理论学习帮助青年看清方向、坚定理想。", "分论点二：理论学习不能停留在口号，要同岗位实践结合。", "分论点三：搭建青年参与基层治理、志愿服务和创新实践的平台。", "结尾：号召青年把个人理想融入国家需要。"],
    model: "青年之“新”，不只在于掌握新知识，更在于能够以开放视野认识时代、以责任担当回应时代。理论学习不是远离工作的抽象背诵，而是帮助青年明确方向、提升判断力和行动力。各地应把课堂学习与基层调研、志愿服务、创新实践结合起来，让青年在解决群众问题的过程中理解理论、检验理论、运用理论。只有把思想上的觉醒转化为脚踏实地的行动，青年成长才能与时代进步同频共振。"
  },
  p3: {
    question: "某乡镇推进乡村振兴时直接照搬外地项目，结果出现水土不服。请以“因地制宜推动发展”为主题，写一篇短评。",
    keywords: "因地制宜、实事求是、分类施策、基层治理",
    outline: ["开头：指出照搬模式导致政策落地偏差。", "分论点一：不同地区资源禀赋和群众需求不同，不能一把尺子量到底。", "分论点二：借鉴经验要学方法而不是复制外壳。", "分论点三：通过调研、试点、评估和纠偏形成适合本地的方案。", "结尾：让政策既有方向高度，又有基层温度。"],
    model: "基层治理最忌讳“看起来先进、落地却不适用”。不同地区的资源禀赋、产业基础和群众需求各不相同，照搬外地模式，往往会把别人的经验变成本地的负担。因地制宜不是拒绝学习，而是坚持实事求是，学习可复制的方法，重新设计符合本地条件的路径。为此，应加强前期调研，先行试点、动态评估、及时纠偏，把群众是否受益作为检验政策成效的重要标准。"
  },
  p4: {
    question: "面对极端天气、公共卫生和网络安全等复合风险，某市准备完善应急治理体系。请提出对策。",
    keywords: "风险治理、协同联动、统一战线、系统观念",
    outline: ["开头：指出风险具有突发性、关联性和跨区域性。", "对策一：建立统一指挥、分级负责、快速响应机制。", "对策二：整合政府、社区、企业、社会组织和群众力量。", "对策三：加强预警、演练、物资储备和信息公开。", "结尾：把临时应对转化为常态化治理能力。"],
    model: "面对复合型风险，单一部门、单一地区和单一主体都难以独立应对，必须把共同目标转化为协同治理合力。应建立统一指挥、分级负责、上下贯通的应急机制，完善风险监测、预警发布、物资储备和应急演练；同时整合社区、企业、社会组织和志愿者力量，畅通信息共享与群众参与渠道。只有把“临时救火”转化为制度化、常态化、协同化治理，才能提升城市韧性。"
  },
  p5: {
    question: "材料反映，部分民生项目重建设轻运营，群众获得感不强。请围绕“把好事办好”提出文章提纲。",
    keywords: "人民立场、群众获得感、政策落地、长效机制",
    outline: ["开头：提出为民办事不能只看项目落地，还要看群众使用效果。", "分论点一：从群众需求出发，避免形式主义和政绩冲动。", "分论点二：重视运营维护和公共服务质量。", "分论点三：建立群众评价、跟踪问效和责任追溯机制。", "结尾：以群众满意度检验民生工作的成色。"],
    model: "为民办实事，既要有“建起来”的速度，更要有“用起来”的质量。民生项目如果只重投入、不重运营，只重形式、不问需求，最终就可能成为群众身边的“摆设”。因此，项目决策要充分听取群众意见，建设过程要注重实用和节约，建成后还要落实运营、维护和评价责任。把群众满意不满意、方便不方便、受益不受益作为检验标准，才能真正把好事办好、实事办实。"
  },
  p6: {
    question: "某单位开展政策学习时存在“文件读过了、工作不会做”的现象。请以“提高政策执行力”为主题写一篇策论文。",
    keywords: "理论联系实际、系统学习、政策执行、知行合一",
    outline: ["开头：指出政策执行力是把制度优势转化为治理效能的关键。", "对策一：系统学习政策背景、目标、对象和边界。", "对策二：建立政策解读、案例教学和基层反馈机制。", "对策三：明确责任清单、时间表和评价标准，防止政策空转。", "结尾：形成学政策、懂政策、用政策、评政策的闭环。"],
    model: "政策执行力不是简单的“照文件办事”，而是准确理解政策目标、结合实际细化措施并持续跟踪问效的综合能力。要改变“文件读过了、工作不会做”的现象，首先要系统学习政策的背景、目标和边界，其次要通过案例教学、基层反馈和部门协同提升理解深度，最后要建立责任清单、时间表和评价机制，及时发现偏差、纠正偏差。只有把理论学习转化为解决问题的能力，政策才能真正落地见效。"
  },
  p7: {
    question: "请以“发展为了人民，发展依靠人民，发展成果由人民共享”为核心观点，围绕高质量发展写一篇文章。",
    keywords: "高质量发展、共同富裕、生产力、效率公平",
    outline: ["开头：指出发展是解决问题的基础，但发展的目的和方向是人民。", "分论点一：以创新和改革增强发展动力、做大蛋糕。", "分论点二：通过就业、教育、医疗和社会保障改善民生。", "分论点三：完善分配制度和公共服务，推动成果公平共享。", "结尾：把发展优势转化为人民生活品质提升。"],
    model: "高质量发展不能只有速度和规模，更要有质量、效益和温度。发展是解决一切问题的基础，必须通过创新驱动、改革深化和产业升级不断增强发展动力、做大社会财富的“蛋糕”；同时，发展的最终目的在于增进民生福祉，要通过扩大就业、完善公共服务、健全社会保障和优化收入分配，让发展成果更加公平地惠及人民。既做大蛋糕，又分好蛋糕，才能把发展优势转化为共同富裕的坚实基础。"
  },
  p8: {
    question: "某地为追求短期增长，忽视生态保护和公共服务，留下后续治理成本。请围绕“统筹兼顾实现可持续发展”提出文章框架。",
    keywords: "科学发展、统筹兼顾、生态文明、长远发展",
    outline: ["开头：指出片面追求短期指标会透支发展基础。", "分论点一：统筹当前与长远，建立科学政绩观。", "分论点二：统筹经济发展与生态保护，推动绿色转型。", "分论点三：统筹效率与公平，补齐公共服务短板。", "结尾：以系统治理实现发展质量、民生质量和生态质量统一。"],
    model: "发展不能以透支生态、牺牲民生和增加后续治理成本为代价。实现可持续发展，必须树立系统观念，统筹当前与长远、发展与保护、效率与公平。在经济建设中，应推动产业绿色转型，严格资源环境约束；在公共治理中，应把教育、医疗、养老等民生短板纳入发展评价；在考核机制上，应减少对单一短期指标的依赖。只有把发展的速度、质量、效益和公平统一起来，才能走出一条行稳致远的发展道路。"
  }
}

const nav = document.querySelector("#lessonNav")
const title = document.querySelector("#lessonTitle")
const content = document.querySelector("#lessonContent")
const search = document.querySelector("#searchInput")
const progressText = document.querySelector("#progressText")
const progressBar = document.querySelector(".hero-line i")
const toast = document.querySelector("#toast")
const lightbox = document.querySelector("#lightbox")
const lightboxImage = document.querySelector("#lightboxImage")
const lightboxCaption = document.querySelector("#lightboxCaption")
const zoomText = document.querySelector("#zoomText")
let currentId = localStorage.getItem("party-note-current") || "p1"
let filter = "all"
let practiceId = localStorage.getItem("party-note-practice") || "p1"
let practiceAnswers = JSON.parse(localStorage.getItem("party-note-practice-answers") || "{}")
let lightboxItems = []
let lightboxIndex = 0
let zoom = 1

const completed = new Set(JSON.parse(localStorage.getItem("party-note-completed") || "[]"))

function showToast(message) {
  toast.textContent = message
  toast.classList.add("show")
  clearTimeout(showToast.timer)
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1900)
}

function updateProgress() {
  const percent = Math.round(completed.size / lessons.length * 100)
  progressText.textContent = `${percent}%`
  progressBar.style.width = `${percent}%`
}

function renderNav() {
  const query = search.value.trim().toLowerCase()
  nav.innerHTML = lessons
    .filter(item => filter === "all" || item.type === filter)
    .filter(item => !query || `${item.title} ${item.subtitle} ${item.summary} ${item.table.flat().join(" ")}`.toLowerCase().includes(query))
    .map(item => `
      <button class="lesson-link ${item.id === currentId ? "active" : ""}" data-id="${item.id}">
        <span class="lesson-index">${String(lessons.indexOf(item) + 1).padStart(2, "0")}</span>
        <span><strong>${item.title.replace(" · ", "<br />")}</strong><small>${item.duration} · ${completed.has(item.id) ? "已学" : item.type}</small></span>
      </button>
    `).join("") || `<div class="empty">没有匹配章节</div>`
  nav.querySelectorAll(".lesson-link").forEach(button => button.addEventListener("click", () => {
    currentId = button.dataset.id
    localStorage.setItem("party-note-current", currentId)
    render()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }))
}
function renderTimeline(items) {
  if (!items?.length) return ""
  return `<div class="timeline">${items.map(item => `
    <div class="timeline-item">
      <span class="timeline-date">${item[0]}</span>
      <span class="timeline-dot"></span>
      <div><h4>${item[1]}</h4><p>${item[2]}</p></div>
    </div>`).join("")}</div>`
}

function renderTable(rows, headers = ["关键词", "考试定位"]) {
  if (!rows?.length) return ""
  return `<table class="key-table"><thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table>`
}

function renderImages(item) {
  if (item.id === "p2") {
    const files = ["01_新文化运动.jpg", "02_五四运动导火索.jpg", "03_五四运动意义.jpg", "04_中共一大代表.jpg", "05_中共二大纲领.jpg", "06_国民党一大.jpg", "07_北伐战争.jpg", "08_大革命总结.jpg"]
    return `<div class="card"><h3>PPT 画面索引</h3><p>点击任意图片放大查看；图片顺序对应本节讲解推进顺序。</p><div class="image-strip">${files.map((file, index) => `<figure class="ppt-image" data-image-index="${index}"><img loading="lazy" src="${assetRoot}video_notes_BV1Nu4y1x7y9_p2/assets/${encodeURIComponent(file)}" alt="${file}" /><figcaption>${index + 1}. ${file.replace(".jpg", "")}</figcaption></figure>`).join("")}</div></div>`
  }
  if (item.id === "p3") {
    const files = ["01_南昌起义.jpg", "02_八七会议.jpg", "03_古田会议.jpg", "04_井冈山根据地.jpg", "05_长征路线.jpg", "06_遵义会议.jpg", "07_全课回顾.jpg"]
    return `<div class="card"><h3>PPT 画面索引</h3><p>点击任意图片放大查看；这组PPT对应“建军—根据地—长征—遵义”的主线。</p><div class="image-strip">${files.map((file, index) => `<figure class="ppt-image" data-image-index="${index}"><img loading="lazy" src="${assetRoot}BV1Nu4y1x7y9_p3_土地革命_笔记_assets/${encodeURIComponent(file)}" alt="${file}" /><figcaption>${index + 1}. ${file.replace(".jpg", "")}</figcaption></figure>`).join("")}</div></div>`
  }
  return ""
}

function renderDetailedNotes(item) {
  const notes = detailedNotes[item.id]
  if (!notes?.length) return ""
  const images = pptInline[item.id] || []
  const voice = spokenHighlights[item.id] || []
  return `<section class="detail-notes"><div class="detail-heading"><span class="eyebrow">课堂展开</span><h3>详细讲解笔记</h3><p>把PPT标题、老师讲解顺序、语音内容和公考考点合并成可复习的内容块。</p></div>${notes.map((note, index) => `
    <article class="detail-note">
      <div class="detail-note-number">${String(index + 1).padStart(2, "0")}</div>
      <div>
        <h4>${note.heading}</h4>
        ${images[index] ? `<button class="inline-ppt" data-src="${assetRoot}${images[index][0]}" data-caption="${images[index][1]}"><img src="${assetRoot}${images[index][0]}" alt="${images[index][1]}" /><span>点击放大 · ${images[index][1]}</span></button>` : ""}
        <ul>${note.bullets.map(bullet => `<li>${bullet}</li>`).join("")}</ul>
        ${voice[index] ? `<div class="voice-note"><strong>老师口述提炼</strong><span>${voice[index]}</span></div>` : ""}
      </div>
    </article>`).join("")}</section>`
}

function renderTranscriptPanel(item) {
  const file = transcriptFiles[item.id]
  if (!file) return ""
  return `<section class="transcript-panel">
    <div class="transcript-heading"><div><span class="eyebrow">课堂原话</span><h3>本节视频逐段转写</h3></div><p>原始转写保留老师讲课顺序和时间戳；上方“课堂展开”已经把口语内容校正成复习笔记。</p></div>
    <details class="transcript-details" data-transcript="${file}">
      <summary>展开本节老师原话</summary>
      <div class="transcript-status">点击展开后加载本节完整转写</div>
      <pre class="transcript-text"></pre>
    </details>
  </section>`
}

async function loadTranscript(details) {
  if (details.dataset.loaded === "true") return
  const status = details.querySelector(".transcript-status")
  const text = details.querySelector(".transcript-text")
  try {
    const response = await fetch(details.dataset.transcript)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const value = await response.text()
    text.textContent = value
    details.dataset.loaded = "true"
    status.textContent = `已加载 ${value.split(/\r?\n/).filter(Boolean).length} 段课堂转写`
  } catch (error) {
    status.textContent = "转写暂时加载失败，请刷新页面后重试"
  }
}

function renderEssayNotes(item) {
  const essay = essayNotes[item.id]
  if (!essay) return ""
  return `<section class="essay-section">
    <div class="essay-heading"><span class="eyebrow">申论专用</span><h3>把党史和中特转化为申论表达</h3><p>以下不是生搬硬套的万能句，而是可以结合题目材料改写的观点、分析角度和论证方向。</p></div>
    <div class="essay-grid">
      <article class="essay-main"><span class="essay-label">适用主题</span><h4>${essay.topic}</h4><p>${essay.view}</p><blockquote>${essay.sentence}</blockquote></article>
      <article class="essay-side"><span class="essay-label">可展开角度</span><ul>${essay.angles.map(angle => `<li>${angle}</li>`).join("")}</ul><div class="essay-use"><strong>适用场景</strong><span>${essay.use}</span></div></article>
    </div>
  </section>`
}

function renderEssayHub() {
  const query = search.value.trim().toLowerCase()
  const entries = lessons.filter(item => essayNotes[item.id]).filter(item => {
    const essay = essayNotes[item.id]
    return !query || `${essay.topic} ${essay.view} ${essay.angles.join(" ")} ${essay.use}`.toLowerCase().includes(query)
  })
  return `
    ${renderPracticeCard()}
    <section class="essay-hero">
      <span class="eyebrow">Essay Toolkit</span>
      <h3>${essayHub.title}</h3>
      <p>${essayHub.subtitle}</p>
      <div class="essay-hero-tags"><span>观点提炼</span><span>历史素材</span><span>政策语言</span><span>答题框架</span></div>
    </section>
    <section class="essay-section essay-method-section">
      <div class="essay-heading"><span class="eyebrow">怎么扩展</span><h3>从知识点到申论答案</h3><p>每个主题都按同一套流程处理，方便持续增加新课程、新材料和真题。</p></div>
      <div class="essay-method-grid">${essayHub.method.map((item, index) => `<article><b>${String(index + 1).padStart(2, "0")}</b><h4>${item[0]}</h4><p>${item[1]}</p></article>`).join("")}</div>
    </section>
    ${renderEssayQuestionBank()}
    <section class="essay-section">
      <div class="essay-heading"><span class="eyebrow">主题素材库</span><h3>党史与中特可用主题</h3><p>点击左侧主题可定位，也可以在下面直接浏览全部素材。</p></div>
      <div class="essay-entry-list">${entries.map(item => {
        const essay = essayNotes[item.id]
        return `<article class="essay-entry" data-essay-id="${item.id}">
          <div class="essay-entry-top"><span>${item.type} · ${item.title.split(" · ")[0]}</span><b>${essay.topic}</b></div>
          <p>${essay.view}</p>
          <div class="essay-entry-columns">
            <div><strong>可展开角度</strong><ul>${essay.angles.map(angle => `<li>${angle}</li>`).join("")}</ul></div>
            <div><strong>可改写句式</strong><blockquote>${essay.sentence}</blockquote></div>
          </div>
          <small>${essay.use}</small>
          ${essayExercises[item.id] ? `<details class="essay-exercise"><summary>查看本主题例题与写法</summary>
            <div class="exercise-question"><strong>原创例题</strong><p>${essayExercises[item.id].question}</p></div>
            <div class="exercise-keywords"><strong>审题关键词</strong><span>${essayExercises[item.id].keywords}</span></div>
            <div class="exercise-columns"><div><strong>答题提纲</strong><ol>${essayExercises[item.id].outline.map(step => `<li>${step}</li>`).join("")}</ol></div><div><strong>示范段落</strong><blockquote>${essayExercises[item.id].model}</blockquote></div></div>
          </details>` : ""}
        </article>`
      }).join("") || `<div class="empty">没有匹配申论主题</div>`}</div>
    </section>
    <section class="essay-section">
      <div class="essay-heading"><span class="eyebrow">考场框架</span><h3>通用分析与对策骨架</h3><p>先用结构保证完整，再用具体材料替换空白，避免模板化空话。</p></div>
      <div class="framework-list">${essayHub.framework.map(item => `<div><strong>${item[0]}</strong><span>${item[1]}</span></div>`).join("")}</div>
    </section>
    <section class="essay-section">
      <div class="essay-heading"><span class="eyebrow">后续路线</span><h3>申论专区还能继续增加什么</h3><p>后续可以继续接入课程转写、真题、范文和个人练习记录。</p></div>
      <div class="expansion-grid">${essayHub.expansion.map((item, index) => `<div><b>${index + 1}</b><strong>${item[0]}</strong><span>${item[1]}</span></div>`).join("")}</div>
    </section>
  `
}

function renderEssayQuestionBank() {
  return `<section class="essay-section essay-question-bank">
    <div class="essay-heading"><span class="eyebrow">申论题库</span><h3>申论题目与详细答案框架</h3><p>先看题目要求，再看每一段具体写什么、为什么这样写、可以调用哪些党史和中特素材。</p></div>
    <div class="essay-question-list">${Object.keys(essayExercises).map((id, index) => {
      const item = essayExercises[id]
      const guide = essayPracticeGuides[id]
      const detail = essayAnswerDetails[id]
      return `<article class="essay-question-card" id="essay-question-${id}">
        <div class="essay-question-card-top"><span>题目 ${String(index + 1).padStart(2, "0")}</span><b>${guide.type}</b></div>
        <h4>${essayPracticeLabels[id]}</h4>
        <strong class="essay-question-label">题目</strong><p class="essay-question-text">${item.question}</p>
        <div class="essay-question-hint"><strong>审题抓手</strong><span>${item.keywords}</span></div>
        <div class="essay-framework essay-framework-rich"><strong>详细答案框架</strong>${detail.framework.map((part, partIndex) => `<div class="essay-framework-step"><b>${String(partIndex + 1).padStart(2, "0")}</b><div><strong>${part.title}</strong><p>${part.content}</p></div></div>`).join("")}</div>
        <div class="essay-materials"><strong>可用党史 / 中特素材</strong><p>${detail.materials}</p></div>
        <details class="essay-question-detail"><summary>查看题型判断、解题逻辑和完整示范答案</summary>
          <p><strong>题型判断：</strong>${guide.judgment}</p>
          <ol>${guide.route.map(step => `<li>${step}</li>`).join("")}</ol>
          <div class="essay-model-answer"><strong>完整示范答案</strong><blockquote>${detail.model.replace(/\n/g, "<br />")}</blockquote></div>
        </details>
      </article>`
    }).join("")}</div>
  </section>`
}
function renderPracticeCard() {
  const item = essayExercises[practiceId] || essayExercises.p1
  const guide = essayPracticeGuides[practiceId] || essayPracticeGuides.p1
  const detail = essayAnswerDetails[practiceId] || essayAnswerDetails.p1
  const topic = essayNotes[practiceId]?.topic || "党史中特综合练习"
  const options = Object.keys(essayExercises).map(id => `<option value="${id}" ${id === practiceId ? "selected" : ""}>${essayPracticeLabels[id]}</option>`).join("")
  return `<section class="practice-card">
    <div class="practice-top">
      <div><span class="eyebrow">申论练习台</span><h3>自己先答，再看如何解答</h3><p>可以选择题目、输入答案；答案会自动保存在当前浏览器。</p></div>
      <div class="practice-top-actions">
        <div><label class="practice-select-label" for="practiceSelect">选择练习题</label><select id="practiceSelect" class="practice-select">${options}</select></div>
        <button class="practice-change" id="practiceChange">换一道题</button>
      </div>
    </div>
    <div class="practice-meta"><span>${guide.type}</span><span>${topic}</span></div>
    <div class="practice-question"><span>原创模拟题</span><p>${item.question}</p></div>
    <div class="practice-framework-preview practice-framework-rich"><div><strong>本题详细答案框架</strong><span>先按每一段的任务列提纲，再展开成完整答案</span></div>${detail.framework.map((part, index) => `<div class="practice-framework-step"><b>${String(index + 1).padStart(2, "0")}</b><div><strong>${part.title}</strong><p>${part.content}</p></div></div>`).join("")}<div class="practice-materials"><strong>可用党史 / 中特素材</strong><span>${detail.materials}</span></div></div>
    <div class="practice-input">
      <label for="practiceInput">我的作答</label>
      <textarea id="practiceInput" rows="8" placeholder="先写中心论点、分论点或完整答案……"></textarea>
      <div class="practice-input-footer"><span id="practiceSaveStatus">答案会自动保存在本机</span><button class="practice-clear" id="practiceClear">清空作答</button></div>
    </div>
    <div class="practice-actions"><span>建议流程：先用 5 分钟审题列纲，再用 10—20 分钟展开。</span><button class="primary-button" id="practiceReveal">查看完整解题</button></div>
    <div class="practice-answer" id="practiceAnswer" hidden>
      <div class="practice-answer-grid">
        <div><strong>题型判断</strong><p>${guide.judgment}</p></div>
        <div><strong>这道题要完成什么</strong><p>${guide.task}</p></div>
      </div>
      <div class="practice-guide-grid">
        <div><strong>题干拆解</strong><ul>${guide.parse.map(item => `<li>${item}</li>`).join("")}</ul></div>
        <div><strong>如何一步步解答</strong><ol>${guide.route.map(item => `<li>${item}</li>`).join("")}</ol></div>
      </div>
      <div class="practice-outline"><strong>考场简版提纲</strong><ol>${item.outline.map(step => `<li>${step}</li>`).join("")}</ol></div>
      <div class="practice-model practice-model-long"><strong>完整示范答案</strong><blockquote>${detail.model.replace(/\n/g, "<br />")}</blockquote></div>
      <div class="practice-checklist-grid">
        <div><strong>答案自查</strong><ul>${guide.checklist.map(item => `<li>${item}</li>`).join("")}</ul></div>
        <div class="practice-pitfall"><strong>常见失分点</strong><p>${guide.pitfalls}</p></div>
      </div>
    </div>
  </section>`
}
function render() {
  const item = lessons.find(lesson => lesson.id === currentId) || lessons[0]
  currentId = item.id
  title.textContent = `${item.title} · ${item.duration}`
  document.querySelector("#markButton").style.display = ""
  document.querySelector("#copyLinkButton").style.display = ""
  const timeline = item.timeline ? `<div class="card"><h3>时间线</h3>${renderTimeline(item.timeline)}</div>` : ""
  const teacher = `<div class="card"><h3>老师强调</h3><blockquote class="quote">${item.teacher}</blockquote></div>`
  const mistakes = item.mistakes?.length ? `<div class="card"><h3>易错辨析</h3><div class="mistake-list">${item.mistakes.map(row => `<div class="mistake"><b>${row[0]}</b><span>${row[1]}</span></div>`).join("")}</div></div>` : ""
  const flashes = item.flashes?.length ? `<div class="card"><h3>复习卡片</h3><div class="flash-grid">${item.flashes.map(row => `<button class="flash"><strong>${row[0]}</strong><span>${row[1]}</span></button>`).join("")}</div></div>` : ""
  content.innerHTML = `
    <div class="section-grid">
      <div class="card lead-card">
        <span class="tag">${item.type} · ${item.duration}</span>
        <h3>${item.subtitle}</h3>
        <p>${item.summary}</p>
        ${item.id === "p3" ? `<div class="callout"><strong>一条主线：</strong>南昌起义发端 → 三湾改编奠基 → 古田会议定型；井冈山建立第一个农村革命根据地；遵义会议实现生死转折。</div>` : ""}
      </div>
      ${teacher}
      ${timeline}
      ${item.table?.length ? `<div class="card"><h3>核心考点表</h3>${renderTable(item.table, item.id.startsWith("p") && item.type === "中特" ? ["理论 / 概念", "核心表述"] : ["事件 / 关键词", "对应考点"])}</div>` : ""}
      ${mistakes}
      ${flashes}
    </div>
    ${renderDetailedNotes(item)}
    ${renderTranscriptPanel(item)}
    ${renderImages(item)}
  `
  document.querySelector("#markButton").classList.toggle("done", completed.has(item.id))
  document.querySelector("#markButton").textContent = completed.has(item.id) ? "已标记 · 取消" : "标记已学"
  renderNav()
  updateProgress()
  document.querySelectorAll(".ppt-image").forEach(figure => figure.addEventListener("click", () => {
    const images = [...document.querySelectorAll(".ppt-image img")]
    openLightbox(images, Number(figure.dataset.imageIndex))
  }))
  document.querySelectorAll(".inline-ppt").forEach(button => button.addEventListener("click", () => {
    const image = button.querySelector("img")
    openLightbox([{ currentSrc: image.currentSrc, src: image.src, alt: button.dataset.caption }], 0)
  }))
  document.querySelectorAll(".transcript-details").forEach(details => details.addEventListener("toggle", () => {
    if (details.open) loadTranscript(details)
  }))
}

function openLightbox(images, index) {
  lightboxItems = images.map(image => ({ src: image.currentSrc || image.src, alt: image.alt }))
  lightboxIndex = Math.max(0, Math.min(index, lightboxItems.length - 1))
  zoom = 1
  updateLightbox()
  lightbox.classList.add("open")
  lightbox.setAttribute("aria-hidden", "false")
}

function updateLightbox() {
  const item = lightboxItems[lightboxIndex]
  if (!item) return
  lightboxImage.src = item.src
  lightboxImage.alt = item.alt
  lightboxCaption.textContent = `${lightboxIndex + 1} / ${lightboxItems.length} · ${item.alt.replace(".jpg", "")}`
  lightboxImage.style.transform = `scale(${zoom})`
  zoomText.textContent = `${Math.round(zoom * 100)}%`
}

function closeLightbox() {
  lightbox.classList.remove("open")
  lightbox.setAttribute("aria-hidden", "true")
}

document.querySelector("#lightboxClose").addEventListener("click", closeLightbox)
document.querySelector("#lightboxPrev").addEventListener("click", () => {
  if (!lightboxItems.length) return
  lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length
  updateLightbox()
})
document.querySelector("#lightboxNext").addEventListener("click", () => {
  if (!lightboxItems.length) return
  lightboxIndex = (lightboxIndex + 1) % lightboxItems.length
  updateLightbox()
})
document.querySelector("#zoomIn").addEventListener("click", () => {
  zoom = Math.min(2.5, zoom + .25)
  updateLightbox()
})
document.querySelector("#zoomOut").addEventListener("click", () => {
  zoom = Math.max(.5, zoom - .25)
  updateLightbox()
})
document.querySelector("#zoomReset").addEventListener("click", () => {
  zoom = 1
  updateLightbox()
})
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox()
})
document.addEventListener("keydown", event => {
  if (!lightbox.classList.contains("open")) return
  if (event.key === "Escape") closeLightbox()
  if (event.key === "ArrowLeft") document.querySelector("#lightboxPrev").click()
  if (event.key === "ArrowRight") document.querySelector("#lightboxNext").click()
  if (event.key === "+" || event.key === "=") document.querySelector("#zoomIn").click()
  if (event.key === "-") document.querySelector("#zoomOut").click()
})

document.querySelector("#markButton").addEventListener("click", () => {
  if (completed.has(currentId)) completed.delete(currentId)
  else completed.add(currentId)
  localStorage.setItem("party-note-completed", JSON.stringify([...completed]))
  render()
  showToast(completed.has(currentId) ? "已加入学习进度" : "已取消标记")
})
document.querySelector("#copyLinkButton").addEventListener("click", async () => {
  const url = `${location.origin}${location.pathname}#${currentId}`
  try { await navigator.clipboard.writeText(url); showToast("本页链接已复制") }
  catch { showToast("请复制浏览器地址栏链接") }
})
document.querySelector("#startButton").addEventListener("click", () => {
  currentId = "p1"
  render()
  document.querySelector(".content").scrollIntoView({ behavior: "smooth" })
})
document.querySelector("#printButton").addEventListener("click", () => window.print())
document.querySelector("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark")
  localStorage.setItem("party-note-dark", document.body.classList.contains("dark") ? "1" : "0")
})
search.addEventListener("input", renderNav)
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"))
  button.classList.add("active")
  filter = button.dataset.filter
  render()
}))
if (localStorage.getItem("party-note-dark") === "1") document.body.classList.add("dark")
if (location.hash && lessons.some(item => item.id === location.hash.slice(1))) currentId = location.hash.slice(1)
render()
