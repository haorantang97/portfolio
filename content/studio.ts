import type { L } from "@/lib/i18n";

export type StudioImage = {
  src: string;
  aspect?: string;
};

export type StudioWork = {
  slug: string;
  title: L;
  year?: string;
  medium?: L;
  description?: L;
  cover?: string;
  images?: StudioImage[];
};

export const studioWorks: StudioWork[] = [
  {
    slug: "yu-wo",
    title: { en: "於我", zh: "於我" },
    year: "2022",
    medium: {
      en: "copper, earthenware, gold",
      zh: "铜、陶土、金",
    },
    description: {
      en: "A remake of the Ming Dynasty Buddha's fragment.",
      zh: "对一尊明代佛像残片的重塑。",
    },
    cover: "/studio/other/8.jpg",
  },
  {
    slug: "untitled-2022-01-16",
    title: { en: "Untitled", zh: "Untitled" },
    year: "2022",
    cover: "/studio/other/5.jpg",
  },
  {
    slug: "dart-experiment-on-ceramics",
    title: {
      en: "Dart experiment on ceramics",
      zh: "陶瓷飞镖实验",
    },
    year: "2022",
    cover: "/studio/other/4.jpg",
  },
  {
    slug: "untitled-2022-01-06",
    title: { en: "Untitled", zh: "Untitled" },
    year: "2022",
    cover: "/studio/other/6.jpg",
  },
  {
    slug: "sacred-installations-iii",
    title: {
      en: "‘Sacred Installations’ III",
      zh: "「圣物装置」III",
    },
    year: "2022",
    medium: {
      en: "earthenware, crystal, tungsten",
      zh: "陶土、水晶、钨",
    },
    cover: "/studio/other/1.jpg",
  },
  {
    slug: "sacred-installations-ii",
    title: {
      en: "‘Sacred Installations’ II",
      zh: "「圣物装置」II",
    },
    year: "2022",
    medium: {
      en: "stoneware, crystal",
      zh: "炻器、水晶",
    },
    cover: "/studio/other/3.jpg",
  },
  {
    slug: "sacred-installations-i",
    title: {
      en: "‘Sacred Installations’ I",
      zh: "「圣物装置」I",
    },
    year: "2022",
    medium: {
      en: "earthenware, tourmaline",
      zh: "陶土、电气石",
    },
    cover: "/studio/other/2.jpg",
  },
  {
    slug: "bowl-adorno",
    title: {
      en: "Bowl: Theodor Wiesengrund Adorno",
      zh: "碗：泰奥多·阿多诺",
    },
    year: "2021",
    cover: "/studio/other/7.jpg",
  },
  {
    slug: "00-n",
    title: { en: "0/0 N", zh: "0/0 N" },
    year: "2021",
    medium: {
      en: "borosilicate glass, metal",
      zh: "硼硅酸盐玻璃、金属",
    },
    cover: "/studio/glass/5.jpg",
  },
  {
    slug: "00-iv",
    title: { en: "0/0 Ⅳ", zh: "0/0 Ⅳ" },
    year: "2021",
    medium: {
      en: "borosilicate glass, metal",
      zh: "硼硅酸盐玻璃、金属",
    },
    cover: "/studio/glass/6.jpg",
    images: [
      { src: "/studio/glass/6.jpg" },
      { src: "/studio/glass/4.jpg" },
    ],
  },
  {
    slug: "00-iii",
    title: { en: "0/0 Ⅲ", zh: "0/0 Ⅲ" },
    year: "2021",
    medium: {
      en: "borosilicate glass, metal",
      zh: "硼硅酸盐玻璃、金属",
    },
    cover: "/studio/glass/3.jpg",
  },
  {
    slug: "00-ii",
    title: { en: "0/0 Ⅱ", zh: "0/0 Ⅱ" },
    year: "2021",
    medium: {
      en: "borosilicate glass, metal",
      zh: "硼硅酸盐玻璃、金属",
    },
    cover: "/studio/glass/2.jpg",
  },
  {
    slug: "00-i",
    title: { en: "0/0 Ⅰ", zh: "0/0 Ⅰ" },
    year: "2021",
    medium: {
      en: "borosilicate glass, metal",
      zh: "硼硅酸盐玻璃、金属",
    },
    cover: "/studio/glass/1.jpg",
  },
  {
    slug: "glencairn-glass",
    title: {
      en: "Glencairn Glass",
      zh: "Glencairn 闻香杯",
    },
    year: "2021",
    cover: "/studio/glass/7.jpg",
  },
];
