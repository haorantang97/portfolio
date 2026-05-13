export type Locale = "en" | "zh";

export type L = { en: string; zh: string };

export type LArr = { en: string[]; zh: string[] };

export function t(value: L | string, locale: Locale): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.en;
}

export function tArr(value: LArr | string[], locale: Locale): string[] {
  if (Array.isArray(value)) return value;
  return value[locale] ?? value.en;
}

export const ui = {
  liveBeta: { en: "Live beta", zh: "公开测试中" },
  inProgress: { en: "In progress", zh: "开发中" },
  running: { en: "Running", zh: "运行中" },

  back: { en: "← back", zh: "← 返回" },
  backToStudio: { en: "← back to studio", zh: "← 返回 Studio" },
  backToDesign: { en: "← back to design", zh: "← 返回 Design" },
  backToBuilding: { en: "← back to building", zh: "← 返回 Building" },

  appStoreCTA: { en: "Download on the App Store ↗", zh: "在 App Store 下载 ↗" },
  visitSite: { en: "Visit site ↗", zh: "访问网站 ↗" },
  privacyPolicy: { en: "Privacy policy", zh: "隐私政策" },

  caseStudyComing: { en: "Case study coming soon.", zh: "案例研究即将发布。" },
  forthcoming: { en: "Forthcoming.", zh: "即将到来。" },

  launchDemo: { en: "▶ Try live demo ↗", zh: "▶ 试用 Demo ↗" },
  demoNote: {
    en: "Runs in a real iOS simulator on Appetize.",
    zh: "在 Appetize 上的真实 iOS 模拟器中运行。",
  },

  navAbout: { en: "About", zh: "关于" },
  navBuilding: { en: "Building", zh: "开发" },
  navDesign: { en: "Design", zh: "设计" },
  navStudio: { en: "Studio", zh: "工作室" },
  navContact: { en: "Contact", zh: "联系" },

  sideProjects: { en: "Side projects", zh: "支线项目" },
} satisfies Record<string, L>;
