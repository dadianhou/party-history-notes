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
    .map((item, index) => `
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

function render() {
  const item = lessons.find(lesson => lesson.id === currentId) || lessons[0]
  currentId = item.id
  title.textContent = `${item.title} · ${item.duration}`
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
  renderNav()
}))
if (localStorage.getItem("party-note-dark") === "1") document.body.classList.add("dark")
if (location.hash && lessons.some(item => item.id === location.hash.slice(1))) currentId = location.hash.slice(1)
render()
