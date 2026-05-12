import type { L } from "@/lib/i18n";

export type AboutExperience = {
  org: L;
  roles: L;
  period: L;
  city?: L;
  body: L;
};

export type AboutSkillsGroup = {
  label: L;
  items: L;
};

export const about = {
  name: { en: "Haoran Tang", zh: "Haoran Tang" } as L,
  personal: {
    en: "Born 2000 · London / Shanghai",
    zh: "2000 年生 · 伦敦 / 上海",
  } as L,
  intro: {
    en: "Independent developer / Fashion designer / Event planning & operations / Artist / Pokémon trainer",
    zh: "独立开发者 / 服装设计师 / 活动策划与运营 / 艺术工作者 / 宝可梦训练师",
  } as L,
  educationLabel: { en: "Education", zh: "教育" } as L,
  education: {
    en: "BA (Hons) Fashion Design Technology — Menswear\nLondon College of Fashion, UAL\n2021 — 2025",
    zh: "时装设计技术（男装）荣誉学士\n伦敦时装学院（UAL）\n2021 — 2025",
  } as L,
  experienceLabel: { en: "Experience", zh: "经历" } as L,
  skillsLabel: { en: "Skills", zh: "技能" } as L,
  closeLabel: { en: "Close", zh: "关闭" } as L,
  experiences: [
    {
      org: { en: "Freelance", zh: "自由职业" },
      roles: {
        en: "Independent developer · AI practitioner",
        zh: "独立开发 · AI 实践",
      },
      period: { en: "2024.06 — present", zh: "2024.06 — 至今" },
      body: {
        en: "Full-stack independent practice — end-to-end software building, AI toolchain integration, and product shipping as the sole maker. Since spring 2026, sustained deep dive into AI: five-plus hours a week of expert podcasts and AI-focused content; continuous tracking of market hotspots and tooling shifts. Started vibecoding from zero with no formal engineering background, and have independently full-stack built and shipped two iOS apps to the App Store.",
        zh: "全栈独立开发实践——从设计、代码到上架由我一人完成；持续将 AI 工具链整合到日常生产流程。2026 年春起长期深入 AI 技术：每周 5 小时以上收听 AI 方向的专家播客与内容，持续跟踪市场热点与工具迭代；无技术背景从零摸索 vibecoding，独立全栈开发两款 iOS 软件并已上架 App Store。",
      },
    },
    {
      org: {
        en: "Pronto Encounter Art Festival",
        zh: "「Pronto 碰头」艺术节",
      },
      roles: { en: "Founder", zh: "创始人" },
      period: { en: "2026.03 — present", zh: "2026.03 — 至今" },
      city: { en: "Shanghai", zh: "上海" },
      body: {
        en: "Founded Shanghai's first international-student art market. Owning planning, on-the-ground execution, online and offline campaigns, and resource sourcing — from venue partnerships to artist outreach. Set to land at the HAI550 mall on Huaihai Middle Road, Shanghai — ~1,000 sqm footprint, projected 20,000+ visitors.",
        zh: "上海首个留学生艺术市集发起人。活动策划、落地执行、线上线下宣传与资源对接——从场地合作到艺术家招募，由我独立推进。落地于上海淮海中路 HAI550 商场，约 1,000 平米，预计人流 20,000+。",
      },
    },
    {
      org: { en: "Dazed Event", zh: "Dazed Event" },
      roles: { en: "Event coordinator", zh: "活动策划执行" },
      period: { en: "2025.06 — 2025.10", zh: "2025.06 — 2025.10" },
      body: {
        en: "Event planning, guest reception, venue management, social-media promotion.",
        zh: "活动策划 · 嘉宾接待 · 场地管理 · 社交媒体推广。",
      },
    },
    {
      org: { en: "Lab 305", zh: "Lab 305" },
      roles: {
        en: "Co-founder · Creative director · Videographer",
        zh: "联合创始人 · 创意总监 · 视频导演",
      },
      period: { en: "2023.07 — 2024.06", zh: "2023.07 — 2024.06" },
      city: { en: "Hangzhou", zh: "杭州" },
      body: {
        en: "Co-founded a digital media brand during my gap year. Grew it to over 200,000 followers across major Chinese platforms. Sharpened skills in content strategy, digital branding, and audience engagement within creative industries.",
        zh: "Gap year 期间联合创立的数字媒体品牌。在主流中文平台积累 20 万 + 粉丝。打磨了内容策略、数字品牌与受众运营在创意行业中的实际应用。",
      },
    },
    {
      org: { en: "SNX Studio", zh: "SNX Studio" },
      roles: {
        en: "Design intern · Pattern cutting",
        zh: "设计师助理 · 打版",
      },
      period: { en: "2023.03 — 2023.07", zh: "2023.03 — 2023.07" },
      city: { en: "London", zh: "伦敦" },
      body: {
        en: "Interned at a London-based high-end menswear studio. Pattern cutting, sampling support, and close-up exposure to the quality standards, production timelines, and internal workflow required to scale premium fashion operations.",
        zh: "在伦敦一家高端男装工作室实习。参与打版、样衣制作；近距离观察高端时尚品牌的品质标准、生产周期与内部工作流是如何运转的。",
      },
    },
    {
      org: { en: "Qin San", zh: "乾三 Studio" },
      roles: {
        en: "Founder · Designer · Technician · Manager · PR",
        zh: "创始人 · 设计师 · 技术 · 主理人 · 公关",
      },
      period: { en: "2020.08 — 2023.08", zh: "2020.08 — 2023.08" },
      city: { en: "Beijing", zh: "北京" },
      body: {
        en: "Founded my personal fashion label in 2020 and secured £20,000 in investment and buyer resources from a Chinese fashion partner in 2021. Led the brand through four full seasonal cycles — design, production, retail, brand management — all hands-on. Worked alongside patternmakers, sample makers, investors, and multi-brand buyer stores; developed a deep working knowledge of the fashion production pipeline, from material sourcing and supplier communication to cost control and quality assurance.",
        zh: "2020 年创立个人时装品牌；2021 年获得来自中国时尚公司的 £20,000 投资及买手资源。独立带品牌走完四个完整季度——设计、生产、零售、品牌管理，事必躬亲。与版师、样衣师、投资方、多品牌买手店深度协作；对整个时装生产链路有了完整的实战理解，从面料采购、供应商沟通到成本控制和品控。",
      },
    },
  ] as AboutExperience[],
  skills: [
    {
      label: { en: "Technical", zh: "技术" },
      items: {
        en: "Full-stack development · AI workflow automation · RAG · Multimodal AI · Vibecoding · GEO · Hand and machine sewing · Flat pattern cutting · Draping · Toiling · Research and analysis · Sampling · 3D printing · 3D modeling · Laser cutting",
        zh: "全栈开发 · AI 工作流自动化 · RAG · 多模态 AI · Vibecoding · GEO · 手工与机器缝制 · 平面打版 · 立体裁剪 · 白胚试制 · 调研分析 · 样衣制作 · 3D 打印 · 3D 建模 · 激光切割",
      },
    },
    {
      label: { en: "Software", zh: "软件" },
      items: {
        en: "Claude · Cursor · n8n · LoveArt · Lovable · Suno · Figma · Midjourney · ComfyUI · PS · AI · Clo3D · Maya · PR · C4D · ID · Procreate · Final Cut · Microsoft Office",
        zh: "Claude · Cursor · n8n · LoveArt · Lovable · Suno · Figma · Midjourney · ComfyUI · PS · AI · Clo3D · Maya · PR · C4D · ID · Procreate · Final Cut · Microsoft Office",
      },
    },
    {
      label: { en: "General", zh: "综合" },
      items: {
        en: "Communication · Customer service · Teamwork · Independent study · Photography · Exhibition set-up · Ceramics · Lamp-blown glass",
        zh: "沟通 · 客户服务 · 团队协作 · 独立学习 · 摄影 · 布展设计 · 陶艺 · 灯工玻璃",
      },
    },
  ] as AboutSkillsGroup[],
};
