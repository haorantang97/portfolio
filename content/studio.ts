export type StudioImage = {
  src: string;
  aspect?: string;
};

export type StudioWork = {
  slug: string;
  title: string;
  year?: string;
  medium?: string;
  description?: string;
  cover?: string;
  images?: StudioImage[];
};

export const studioWorks: StudioWork[] = [
  {
    slug: "yu-wo",
    title: "於我",
    year: "2022",
    medium: "copper, earthenware, gold",
    description: "A remake of the Ming Dynasty Buddha's fragment.",
    cover: "/studio/other/8.jpg",
  },
  {
    slug: "untitled-2022-01-16",
    title: "Untitled",
    year: "2022",
    cover: "/studio/other/5.jpg",
  },
  {
    slug: "dart-experiment-on-ceramics",
    title: "Dart experiment on ceramics",
    year: "2022",
    cover: "/studio/other/4.jpg",
  },
  {
    slug: "untitled-2022-01-06",
    title: "Untitled",
    year: "2022",
    cover: "/studio/other/6.jpg",
  },
  {
    slug: "sacred-installations-iii",
    title: "‘Sacred Installations’ III",
    year: "2022",
    medium: "earthenware, crystal, tungsten",
    cover: "/studio/other/1.jpg",
  },
  {
    slug: "sacred-installations-ii",
    title: "‘Sacred Installations’ II",
    year: "2022",
    medium: "stoneware, crystal",
    cover: "/studio/other/3.jpg",
  },
  {
    slug: "sacred-installations-i",
    title: "‘Sacred Installations’ I",
    year: "2022",
    medium: "earthenware, tourmaline",
    cover: "/studio/other/2.jpg",
  },
  {
    slug: "bowl-adorno",
    title: "Bowl: Theodor Wiesengrund Adorno",
    year: "2021",
    cover: "/studio/other/7.jpg",
  },
  {
    slug: "00-n",
    title: "0/0 N",
    year: "2021",
    medium: "borosilicate glass, metal",
    cover: "/studio/glass/5.jpg",
  },
  {
    slug: "00-iv",
    title: "0/0 Ⅳ",
    year: "2021",
    medium: "borosilicate glass, metal",
    cover: "/studio/glass/6.jpg",
    images: [
      { src: "/studio/glass/6.jpg" },
      { src: "/studio/glass/4.jpg" },
    ],
  },
  {
    slug: "00-iii",
    title: "0/0 Ⅲ",
    year: "2021",
    medium: "borosilicate glass, metal",
    cover: "/studio/glass/3.jpg",
  },
  {
    slug: "00-ii",
    title: "0/0 Ⅱ",
    year: "2021",
    medium: "borosilicate glass, metal",
    cover: "/studio/glass/2.jpg",
  },
  {
    slug: "00-i",
    title: "0/0 Ⅰ",
    year: "2021",
    medium: "borosilicate glass, metal",
    cover: "/studio/glass/1.jpg",
  },
  {
    slug: "glencairn-glass",
    title: "Glencairn Glass",
    year: "2021",
    cover: "/studio/glass/7.jpg",
  },
];
