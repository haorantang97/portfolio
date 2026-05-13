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
      en: "A network where the work introduces you. Swipe through portfolios, match with creators whose work speaks to yours, then swap contacts and pick a time to actually meet. Talk is cheap — show your work first.",
      zh: "一个让作品替你先开口的网络。一位一位地翻作品集，遇到对眼的创作者就互相匹配，然后交换联系方式，约个时间真的见上一面。光说没用——先把作品拿出来。",
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
        label: { en: "Why I made it", zh: "为什么做" },
        body: {
          en: "My friends are illustrators, photographers, designers, musicians. We write more captions than we make work. The networks we live on reward followers and engagement, not the thing we actually do.\n\nThe DM thread that opens with “love your work, want to collab?” is a tax on both sides. Performative politeness. Two-hundred-word messages. Fifteen exchanges before either side figures out what actually matters. Most of the time the conversation dies in the inbox and we never meet. The work suffers twice — hours stolen from making, and a collaborator never found.\n\nFor creators, the work talks. Pronto puts that first and removes the rest. Your portfolio is the introduction. A match unlocks real contact information, not another inbox. You leave the app to meet.\n\nThe name is the product in one word: Spanish for right away, Italian for hello when the phone rings.",
          zh: "我身边的朋友是插画师、摄影师、设计师、音乐人。我们花在写文案上的时间，常常比真正做作品的时间还多。我们每天泡的那些社交平台，奖励的是粉丝数和互动率，不是我们真正在做的事。\n\n开头是「love your work，想合作吗？」的那种私信，对两边都是消耗。客套要演，开场要写两百字，来回十五条之后，才大概搞清楚对方到底想说什么。大多数时候，对话就死在收件箱里，谁也没见到谁。我们因此损失了两次——时间被偷走，本可能合作的那个人也从未真的遇见。\n\n但对创作者来说，作品自己会说话。Pronto 把这件事放在最前，把别的都拿走。你的作品集就是你的介绍信。一次匹配解锁的是真实的联系方式，不是又一个收件箱。你离开 app，去现实里见面。\n\n名字本身就是产品——西班牙语里的「即刻」，意大利人接起电话时的第一声。",
        },
      },
      {
        label: { en: "How it works", zh: "如何运作" },
        body: {
          en: "Profiles are portfolios. The first thing you see of another artist is their work, on a single screen — no bio above the fold, no follower count.\n\nYou browse one artist at a time. The swipe gesture is the only piece of the app that's deliberately familiar; nothing that follows it is. A match doesn't open another inbox — it hands both sides real contact information and a prompt to meet.\n\nEvery pattern traceable to the attention economy is gone: no like counts, no infinite scroll, no notifications engineered to pull you back. The app is designed to be left, not lived in.\n\nEvery artist application is reviewed by hand. The pace is deliberate. A community of people who actually make things compounds quietly; growth at any cost dilutes it.",
          zh: "主页就是作品集。你看到一位艺术家的第一眼，就是 TA 的作品占满一整屏——上面没有自我介绍，也没有粉丝数。\n\n一次只看一位艺术家。整个 app 里唯一刻意保留熟悉感的，是滑动这个手势——之后的一切都不是。匹配不会再打开一个收件箱，它把真实联系方式同时交给两边，然后告诉你们：去见面。\n\n所有那些从注意力经济里来的套路，都被拿掉了：没有点赞数，没有无限滚动，没有专门把你拉回来的通知。这个 app 的设计意图，是让你离开，不是让你住在里面。\n\n每一份艺术家申请，我都亲自看。这个节奏是刻意的。真正在做事的人聚在一起会安静地长大；不顾代价的增长，只会把这个东西稀释。",
        },
      },
      {
        label: { en: "My role", zh: "我做了什么" },
        body: {
          en: "Solo build. Every screen, every gesture, every line of React Native. Designed the brand, drew the icon, set the type, shot the eight hero images. Built the Supabase backend, the OTP auth flow, the matching state machine. Shipped to the App Store.",
          zh: "独立完成。每一屏、每一个手势、每一行 React Native。设计品牌、画图标、定字体、拍了 8 张主视觉。搭 Supabase 后端、OTP 登录流、匹配状态机，一路上架 App Store。",
        },
      },
      {
        label: { en: "Status", zh: "现状" },
        body: {
          en: "Public beta on the App Store since April 2026 — available everywhere except mainland China. Onboarding the first vetted artists. The metric I watch is whether two strangers meet in real life because of this app. Pronto Events, the next layer, brings the same community offline.",
          zh: "2026 年 4 月起在 App Store 公开测试中——除中国大陆外全球上架。正在邀请第一批通过审核的艺术家入驻。我看的唯一指标是：有没有两个陌生艺术家因为这个 app 真的在现实里见上一面。下一层 Pronto Events 把同一群人带到线下。",
        },
      },
    ],
    closer: {
      en: "Built for the people who make things — and who'd rather be making them than performing them online.",
      zh: "为真正在做东西的人而做——他们更想花时间做东西，而不是花时间在网上演自己。",
    },
  },
  {
    slug: "carte",
    title: { en: "Carte", zh: "Carte" },
    subtitle: {
      en: "A private cookbook for the people you actually cook with.",
      zh: "一本只给一起吃饭的人看的菜谱。",
    },
    status: "in-progress",
    year: "2026",
    stack: ["React Native", "Expo", "Supabase"],
    pitch: {
      en: "Paste a link from anywhere on the social web; Carte's AI turns the post into a real recipe inside your kitchen. Then share it with a small circle who join by invitation. No public feed, no follower count — just the people you cook with, and the things you're cooking.",
      zh: "把任何社交平台的链接粘进来，Carte 用 AI 把它整成一份真正的菜谱，放进你的厨房。再分享给一群凭邀请码加入的人。没有公开 feed，没有粉丝数——剩下的只有一起做饭的人，和你正在做的菜。",
    },
    appIcon: "/building/carte/icon.png",
    appetizeKey: "qlgrxzq7cj5a6amfivuk3zjglu",
    hero: [
      "/building/carte/web/01.jpg",
      "/building/carte/web/02.jpg",
      "/building/carte/web/03.jpg",
      "/building/carte/web/07.jpg",
      "/building/carte/web/04.jpg",
      "/building/carte/web/05.jpg",
      "/building/carte/web/06.jpg",
      "/building/carte/web/08.jpg",
      "/building/carte/web/09.jpg",
    ],
    sections: [
      {
        label: { en: "Why I made it", zh: "为什么做" },
        body: {
          en: "Three quiet problems I kept running into.\n\nI save recipes on social platforms that I never actually cook. The post is a video, the ingredients live in a comment, and by the time I'm in the kitchen the bookmark is buried under fifty others.\n\nI share recipes with friends and family through screenshots and group chats — the kind of mess that loses the dish the moment the conversation scrolls.\n\nThe cookbook apps on my phone are designed for strangers to browse and rate. I don't want a feed. I want a small place where the people I actually cook with can see what I'm making — and ask me to make it for them.",
          zh: "三个一直在烦我的小问题。\n\n我在社交平台上收藏的菜谱，几乎一份都没真的做过。原帖是视频，食材藏在某一条评论里，等我真站到厨房，那条收藏早被压在另外五十条下面。\n\n我和家人朋友分享菜谱，靠的是截图和群聊——那种一旦消息往下滚，菜就找不回来的乱法。\n\n手机里现成的菜谱 app，都是为陌生人浏览、打分而做的。我不想要 feed。我想要一个小小的地方，让那几个真正跟我一起吃饭的人，看到我在做什么——再叫我做给他们吃。",
        },
      },
      {
        label: { en: "How it works", zh: "如何运作" },
        body: {
          en: "Two halves to one app.\n\nThe AI half: paste a link from Xiaohongshu, Douyin, Bilibili, Weibo, or a dozen other platforms. Carte reads the post — image, video, or written — and lays it out as a real recipe: ingredients auto-scaled to your serving size, steps, and timings. What would've been saved and forgotten becomes something you can cook tonight.\n\nThe sharing half: your recipes live in a private kitchen called a carte. The people you cook with join through a six-character invite code, optionally PIN-protected. They browse, comment, place orders. No public feed by default — the kitchen is invitation-only.",
          zh: "这个 app 分两部分。\n\nAI 那一部分：把任何来自小红书、抖音、B 站、微博，或其他十几个平台的链接粘进来，Carte 把图文或视频读懂，整成一份真正的菜谱——食材按你的份量自动缩放，步骤、火候时间都齐。原本会被收藏后遗忘的内容，变成你今晚就能动手做的菜。\n\n分享那一部分：你的菜谱住在一个叫 carte 的私人厨房里。一起做饭的人用 6 位邀请码加入，可选 PIN 加密。他们浏览、评论、下单。默认没有公开 feed——这间厨房只对你邀请的人开放。",
        },
      },
      {
        label: { en: "Design decisions", zh: "设计决策" },
        body: {
          en: "Hand-drawn SVG UI. Every button, card, and pill is rendered as cubic-bezier paths with controlled jitter. Most apps look sterile; cooking isn't. The visual language should match the room you actually use the app in.\n\nNo public feed by default, no follower count, no likes engineered to feel like dopamine. A light Discover layer exists for inspiration, but the gravity of the app stays inside the private kitchen you and your circle share.\n\nAnonymous sign-in. Opening the app is signing up — no email, no SMS, no password. The friction of joining an app just to see a friend's menu doesn't exist here.\n\nOrders replace chat. The interaction between chef and diner is “I want this dish,” not another inbox to manage.",
          zh: "全手绘 SVG UI。每个按钮、卡片、pill 都是用三次贝塞尔曲线加可控随机抖动现场画出来的。大部分 app 看起来过于无菌，做饭这件事不是。视觉语言应该跟你真正用它时所在的那个房间相称。\n\n默认没有公开 feed，没有粉丝数，没有为多巴胺设计的点赞。有一个轻量的 Discover 用来找灵感，但 app 的重心始终留在你和你那个小圈子共享的私人厨房里。\n\n匿名登录。打开 app 就是注册——不要邮箱、不要短信、不要密码。为了看朋友的菜单还得专门注册一个 app，那种摩擦在这里不存在。\n\n下单代替聊天。厨师和食客之间的交互是「我想吃这道」——不是又一个要管理的收件箱。",
        },
      },
      {
        label: { en: "My role", zh: "我做了什么" },
        body: {
          en: "Solo. Designed the brand, drew the icon, set the type, made every screen. Built the React Native app on Expo, the Supabase backend (Postgres + Auth + Storage + Realtime, 12 migrations), the AI extraction pipeline that orchestrates 21+ Apify actors across major social platforms, and the sketch UI primitive library that draws every border in the app.",
          zh: "独立完成。设计品牌、画图标、定字体、做每一屏。基于 Expo 搭 React Native app、Supabase 后端（Postgres + Auth + Storage + Realtime，12 个 migration）、跨主流社交平台编排 21+ 个 Apify actor 的 AI 提取流水线，以及一套画出 app 里每一根边框的手绘 UI 原语库。",
        },
      },
      {
        label: { en: "Status", zh: "现状" },
        body: {
          en: "In active development. Pixel-port from the Vite prototype shipped May 2026; currently polishing visual consistency, wiring the AI quota to the real backend, and approaching open beta. The next prebuild adds an iOS Share Extension — so a link from any social app can be sent into Carte directly from the system share sheet.",
          zh: "持续开发中。2026 年 5 月完成了从 Vite 原型到 RN 的像素级移植；当前在打磨视觉一致性、把 AI 配额接到真后端、推进公开 beta。下一次 prebuild 会加上 iOS 系统分享插件，社交 app 里的链接可以从系统分享菜单直接送进 Carte。",
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
