export type StudioWork = {
  slug: string;
  title: string;
  cover?: string;
  caption?: string;
};

export const studioWorks: StudioWork[] = [
  { slug: "glass-1", title: "Glass 01", cover: "/studio/glass/1.jpg" },
  { slug: "glass-2", title: "Glass 02", cover: "/studio/glass/2.jpg" },
  { slug: "glass-3", title: "Glass 03", cover: "/studio/glass/3.jpg" },
  { slug: "glass-4", title: "Glass 04", cover: "/studio/glass/4.jpg" },
  { slug: "glass-5", title: "Glass 05", cover: "/studio/glass/5.jpg" },
  { slug: "glass-6", title: "Glass 06", cover: "/studio/glass/6.jpg" },
  { slug: "glass-7", title: "Glass 07", cover: "/studio/glass/7.jpg" },
];
