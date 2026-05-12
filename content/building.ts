import type { L, LArr } from "@/lib/i18n";

export type BuildingStatus = "live-beta" | "in-progress" | "running";

export type BuildingSection = {
  label: L;
  body?: L;
  list?: LArr;
};

export type BuildingLinks = {
  appStore?: string;
  playStore?: string;
  website?: string;
  privacy?: string;
  github?: string;
};

export type BuildingProject = {
  slug: string;
  title: L;
  subtitle?: L;
  status: BuildingStatus;
  year: string;
  stack: string[];
  pitch?: L;
  cover?: string;
  appIcon?: string;
  hero?: string[];
  screens?: string[];
  appetizeKey?: string;
  links?: BuildingLinks;
  sections?: BuildingSection[];
  closer?: L;
  sideProject?: boolean;
};

export const buildingProjects: BuildingProject[] = [
  {
    slug: "pronto-art",
    title: { en: "PRONTO . Art", zh: "PRONTO . Art" },
    subtitle: {
      en: "Where Artists meet by work",
      zh: "以作品相遇",
    },
    status: "live-beta",
    year: "2026",
    stack: ["React Native", "Supabase", "iOS 15.1+"],
    pitch: {
      en: "The first network where your art speaks before you do. Swipe real portfolios, match with creators who get it, and skip straight to meeting up — no small talk, no DM limbo.",
      zh: "第一个让你的作品先于你本人开口的网络。滑动真实作品集，和懂行的创作者相互匹配，直接跳到见面——没有寒暄，没有 DM 拉扯。",
    },
    appIcon: "/building/pronto-art/icon.png",
    appetizeKey: "e7ev4ycmucmeto4gempbko3kaa",
    hero: [
      "/building/pronto-art/1.jpg",
      "/building/pronto-art/2.jpg",
      "/building/pronto-art/3.jpg",
      "/building/pronto-art/4.jpg",
      "/building/pronto-art/5.jpg",
      "/building/pronto-art/6.jpg",
      "/building/pronto-art/7.jpg",
      "/building/pronto-art/8.jpg",
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/pronto-art/id6761122357",
      privacy: "https://pronto-privacy.vercel.app",
    },
    sections: [
      {
        label: { en: "Why I built it", zh: "为什么做" },
        body: {
          en: "I didn't build Pronto to validate a thesis or learn a stack. I built it because the problem is mine — and my friends'.\n\nMy friends are illustrators, photographers, designers. We spend more time writing captions than making work. We DM each other “love your work” and never meet. The networks we live on reward followers and engagement, not the thing we actually do.\n\nThe name “Pronto” — Spanish for “right away,” Italian for “hello” on a phone — is the product in one word: no delay, just contact. See the work, choose to connect, meet up.",
          zh: "我做 Pronto，不是为了验证某个假设，也不是为了练手某个技术栈。我做它，是因为这个问题就是我自己的——也是我身边朋友们的。\n\n我的朋友是插画师、摄影师、设计师。我们花在写 caption 上的时间，比真正做作品还多；互相 DM “love your work”，却从未见过面。我们身处的网络奖励的是 follower 数和互动率，不是我们真正在做的事。\n\n名字「Pronto」——西班牙语里的「即刻」，意大利人接起电话时的第一声——一个词就是整个产品：没有延迟，只有连接。看到作品，选择联系，见面。",
        },
      },
      {
        label: { en: "Problem", zh: "问题" },
        body: {
          en: "Existing creative networks reward followers and engagement, not work. Artists end up writing “hey love your work” instead of meeting each other.",
          zh: "现有的创意社交网络奖励的是 follower 数和互动率，不是作品本身。艺术家最后都在 DM 里写「hey love your work」，却从未真正见过面。",
        },
      },
      {
        label: { en: "Approach", zh: "方法" },
        body: {
          en: "Portfolio-first profiles — your work is the introduction, not your bio. Swipe one artist at a time. When two artists match, contact info unlocks. No in-app chat — go meet in real life.",
          zh: "以作品集为主页——你的作品就是介绍信，不是 bio。一次只滑一位艺术家。两人相互选择后，联系方式才解锁。没有站内聊天——直接去现实里见。",
        },
      },
      {
        label: { en: "Design decisions", zh: "设计决策" },
        body: {
          en: "The swipe is deliberately familiar — drawn from a gesture vocabulary every modern user already knows. What follows it is not. A match on Pronto unlocks real contact information, not another inbox. The product is designed to be left, not lived in.\n\nEvery pattern traceable to attention-economy networks has been removed: no follower counts, no likes, no infinite scroll. One artist at a time, on their own screen. If the work doesn't speak, nothing else should.\n\nArtist review is manual — every application is read personally. The pace is intentional. Community quality compounds; growth at any cost dilutes it.",
          zh: "滑动手势是有意为之的熟悉——它来自每一个现代用户都已掌握的手势语汇。但之后的流程不是。在 Pronto，一次匹配解锁的是真实联系方式，不是又一个收件箱。这个产品被设计为让人离开，而非住下。\n\n凡是能追溯到注意力经济的设计模式，都被移除了：没有 follower 数、没有点赞、没有无限滚动。一次一位艺术家，独占一整屏。如果作品本身不说话，别的东西也不该替它说。\n\n艺术家审核全靠人工——每一份申请都由我亲自读完。这个节奏是刻意为之。社群质量会复利累积；不计代价的增长只会稀释它。",
        },
      },
      {
        label: { en: "My role", zh: "我做了什么" },
        body: {
          en: "Solo. Every screen, every gesture, every line of React Native. Designed the brand, drew the app icon, set the type, shot the eight hero frames. Built the Supabase backend, the OTP auth flow, the matching state machine. Shipped to the App Store.",
          zh: "独立完成。每一屏、每一个手势、每一行 React Native。设计品牌、画 app 图标、定字体系统、做 8 张 hero 视觉。搭 Supabase 后端、OTP 登录流、匹配状态机。一路上架 App Store。",
        },
      },
      {
        label: { en: "Status", zh: "现状" },
        body: {
          en: "Public beta on the App Store since April 2026. Onboarding the first wave of vetted artists; the metric is real-world meetups, not daily actives.",
          zh: "自 2026 年 4 月起在 App Store 公开测试中。正在邀请第一批通过审核的艺术家入驻；项目的核心指标是真实的线下见面，不是日活。",
        },
      },
      {
        label: { en: "What's next", zh: "接下来" },
        body: {
          en: "Pronto Events — curated offline meetups for the same community. The app is the matching layer; events are the destination.",
          zh: "Pronto Events——为同一群创作者策划的线下活动。App 是匹配层，活动才是终点。",
        },
      },
    ],
    closer: {
      en: "Built for illustrators, photographers, designers, 3D artists, painters, musicians, filmmakers — and anyone else whose work speaks louder than their LinkedIn headline. No influencers. No engagement hacks. No “content.” Just work.",
      zh: "为插画师、摄影师、设计师、3D 艺术家、画家、音乐人、电影人——以及所有作品比 LinkedIn 头衔更响亮的人而做。没有 influencer。没有互动套路。没有所谓的“内容”。只有作品。",
    },
  },
  {
    slug: "carte",
    title: { en: "Carte", zh: "Carte" },
    subtitle: {
      en: "Family-style menus, AI-imported from anywhere.",
      zh: "家庭式菜单，AI 一键导入全网食谱。",
    },
    status: "in-progress",
    year: "2026",
    stack: ["React Native", "Expo", "Supabase"],
    pitch: {
      en: "A private cookbook for the people you actually cook with. Paste any link from Xiaohongshu, Douyin, Bilibili — Carte's AI turns the post into a structured recipe inside your kitchen, ready to share with a small circle who join by invitation.",
      zh: "一本只给身边人看的私人菜谱。粘贴任何小红书、抖音、B 站的链接，Carte 的 AI 立刻把图文 / 视频提取成结构化的菜谱，进到你的厨房——再分享给凭邀请码加入的小圈子。",
    },
    appIcon: "/building/carte/icon.png",
    appetizeKey: "qlgrxzq7cj5a6amfivuk3zjglu",
    sections: [
      {
        label: { en: "How it works", zh: "如何运作" },
        body: {
          en: "Two halves to one app.\n\nThe AI side: paste a link from Xiaohongshu, Douyin, Bilibili, Weibo, or a dozen other platforms. Carte reads the post — image, video, or written — and lays it out as a real recipe: ingredients (auto-scaled to your serving size), steps, and timings. The bottleneck of saving recipes off social media goes away.\n\nThe sharing side: your recipes live in a private kitchen called a carte. People you cook with join via a six-character invite code, optionally PIN-protected. They browse, comment, and place orders. There is no public feed by default — the kitchen is invitation-only.",
          zh: "App 由两半组成。\n\nAI 一半：粘贴任何来自小红书、抖音、B 站、微博，或其他十几个平台的链接，Carte 读懂图文 / 视频内容，把它结构化成一份真正的菜谱——食材（按你的份量自动缩放）、步骤、时间。在社交平台收藏菜谱却永远不会真的做的那个瓶颈，没有了。\n\n分享一半：你的菜谱住在一个叫 carte 的私人厨房里。一起做饭的人用 6 位邀请码加入，可选 PIN 加密。他们浏览、评论、下单。默认没有公开 feed——这间厨房只对你邀请的人开放。",
        },
      },
      {
        label: { en: "Design decisions", zh: "设计决策" },
        body: {
          en: "Hand-drawn SVG UI — every button, card, and pill is rendered as cubic-bezier paths with controlled jitter. Most apps are sterile; cooking isn't. The visual language should match the room you actually use the app in.\n\nNo public feed by default. No follower counts. No likes designed to feel like dopamine. A light Discover layer exists for inspiration, but the gravity of the app stays inside the private kitchen you and your circle share.\n\nAnonymous sign-in. Opening the app is signing up. No email, no SMS, no password. The friction of “join an app to see your friend's menu” is gone.\n\nOrders replace chat. The interaction layer between chef and diner is “I want this dish” — not another inbox to manage.",
          zh: "全程手绘风 SVG UI——每个按钮、卡片、pill 都是用三次贝塞尔曲线 + 可控随机抖动现场生成的。普通 app 都干净无菌，做饭不是。视觉语言应该跟你真正使用 app 时身处的那个房间相称。\n\n默认没有公开 feed。没有 follower 数。没有“点赞”那种多巴胺设计。有一个轻量的 Discover 层用来找灵感，但 app 的重力中心永远在你和你那个小圈子共享的私人厨房里。\n\n匿名登录。打开 app 就是注册。不需要邮箱、不需要短信、不需要密码。“为了看朋友的菜单还要注册个 app” 这个摩擦，没有了。\n\n下单取代聊天。厨师和食客之间的交互层是“我想吃这道”——不是又一个要管理的收件箱。",
        },
      },
      {
        label: { en: "My role", zh: "我做了什么" },
        body: {
          en: "Solo. Designed the brand, drew the icon, set the type, made every screen. Built the React Native app on Expo, the Supabase backend (Postgres + Auth + Storage + Realtime, 12 migrations), the AI extraction pipeline that orchestrates 21+ Apify actors across major social platforms, and the sketch UI primitive library that draws every border in the app.",
          zh: "独立完成。设计了品牌、画了图标、定了字体、做了每一屏。基于 Expo 搭了 React Native app、Supabase 后端（Postgres + Auth + Storage + Realtime，12 个 migration）、跨主流社交平台的 AI 提取流水线（编排 21 + 个 Apify actor）、以及画出 app 里每一根边框的手绘 UI 原语库。",
        },
      },
      {
        label: { en: "Status", zh: "现状" },
        body: {
          en: "In active development. Pixel-port from the Vite prototype shipped May 2026; currently polishing visual consistency, wiring the AI quota to the real backend, and approaching open beta. The next prebuild adds an iOS Share Extension — so social-platform links can be sent into the app directly from the system share sheet.",
          zh: "持续开发中。2026 年 5 月完成了从 Vite 原型到 RN 的像素级移植；当前在打磨视觉一致性、把 AI 配额接到真后端、推进公开 beta。下一次 prebuild 会加上 iOS 系统分享插件，社交平台的链接可以从系统分享菜单直接送进 app。",
        },
      },
    ],
    closer: {
      en: "For the cooking you share, not the cooking you post.",
      zh: "为你和身边人之间真正在做的饭，不是为了发出去的饭。",
    },
  },
  {
    slug: "douyin-automation",
    title: { en: "Douyin Automation", zh: "抖音自动化" },
    subtitle: {
      en: "TikTok benchmark · localized Douyin pipeline.",
      zh: "对标 TikTok 账号 · 本土化抖音流水线。",
    },
    status: "running",
    year: "2025",
    stack: ["Claude Skill", "Apify", "Suno", "Whisper", "ffmpeg"],
    pitch: {
      en: "A Claude skill that benchmarks a TikTok creator and produces a localized Douyin version end-to-end. Roughly one in every three drafts ships.",
      zh: "对标一个 TikTok 账号，端到端产出本土化抖音内容的 Claude skill。平均每 3 条产出 1 条可用。",
    },
    sections: [
      {
        label: { en: "How it works", zh: "如何运作" },
        body: {
          en: "Claude orchestrates the loop end-to-end. Apify scrapes source material, Suno generates the audio, Whisper verifies the output, ffmpeg composes the video. Humans only step in where the platform requires it — account funding, the local Whisper trigger, and the final 'send' tap.",
          zh: "Claude 编排端到端闭环。Apify 抓源素材、Suno 生成音频、Whisper 验收、ffmpeg 合成成片。人工介入只发生在平台硬要求的点：账号充值、本地 Whisper 触发、最后一下「发送」按钮。",
        },
      },
      {
        label: { en: "My role", zh: "我做了什么" },
        body: {
          en: "Designed and built the full pipeline solo — selection rubric, Apify wrapper, Suno prompt template, Whisper acceptance, COMPOSE pipeline, and the feedback loop. One Claude skill plus supporting scripts, running daily.",
          zh: "整套 pipeline 独立设计实现——选材打分、Apify 抓取封装、Suno prompt 模板、Whisper 验收、COMPOSE 合成、反馈环路。一个 Claude skill 加配套脚本，每天在跑。",
        },
      },
    ],
    sideProject: true,
  },
];
