export type BuildingStatus = "live-beta" | "in-progress" | "running";

export type BuildingSection = {
  label: string;
  body?: string;
  list?: string[];
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
  title: string;
  subtitle?: string;
  status: BuildingStatus;
  year: string;
  stack: string[];
  pitch: string;
  cover?: string;
  appetizeKey?: string;
  links?: BuildingLinks;
  sections?: BuildingSection[];
  closer?: string;
};

export const buildingProjects: BuildingProject[] = [
  {
    slug: "pronto-art",
    title: "PRONTO . Art",
    subtitle: "Where Artists meet by work",
    status: "live-beta",
    year: "2026",
    stack: ["Swift", "SwiftUI", "iOS 15.1+", "Catalyst", "visionOS"],
    pitch:
      "The first network where your art speaks before you do. Swipe real portfolios, match with creators who get it, and skip straight to meeting up — no small talk, no DM limbo.",
    links: {
      appStore: "https://apps.apple.com/us/app/pronto-art/id6761122357",
      privacy: "https://pronto-privacy.vercel.app",
    },
    sections: [
      {
        label: "Problem",
        body: "Existing creative networks reward followers and engagement, not work. Artists end up writing “hey love your work” instead of meeting each other.",
      },
      {
        label: "How it works",
        body: "Every profile is a portfolio. No follower counts, no engagement metrics, no algorithm deciding who sees what. You browse one artist at a time, see their actual work, and decide: connect or pass.\n\nWhen two artists choose each other, you match — and unlock each other’s private contact info. No in-app chat, no endless DM threads. We give you a real way to reach out, so you can skip the screen and go meet in person.",
      },
      {
        label: "Who gets in",
        body: "Pronto.Art is review-based. Every artist is vetted before joining. This keeps the community focused on people who actually make things — and makes every swipe worth your time.",
      },
      {
        label: "What you get",
        list: [
          "Portfolio-first profiles — your work is the introduction",
          "Swipe discovery — one artist at a time, no infinite scroll",
          "Mutual matching — both sides choose before contact info is revealed",
          "Radar — find creators globally, by country, or in your city",
          "Programs — see what’s showing and who’s exhibiting near you",
        ],
      },
      {
        label: "Where it is now",
        body: "Public beta on the App Store since April 2026. Onboarding the first wave of vetted artists; the success metric is real-world meetups, not daily actives.",
      },
    ],
    closer:
      "Built for illustrators, photographers, designers, 3D artists, painters, musicians, filmmakers — and anyone else whose work speaks louder than their LinkedIn headline. No influencers. No engagement hacks. No “content.” Just work.",
  },
  {
    slug: "untitled-app",
    title: "Untitled",
    status: "in-progress",
    year: "2026",
    stack: [],
    pitch: "",
  },
  {
    slug: "douyin-automation",
    title: "Douyin Automation",
    status: "running",
    year: "2025",
    stack: [],
    pitch: "",
  },
];
