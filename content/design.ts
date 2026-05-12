import type { L } from "@/lib/i18n";

export type DesignImage = {
  src?: string;
  aspect?: string; // CSS aspect-ratio value: "4/3", "16/9", "1/1", "3/4", "21/9", etc. Defaults to "4/3".
};

export type DesignProject = {
  slug: string;
  title: L;
  year?: string;
  bg?: string; // optional override for the detail page background
  cover?: DesignImage;
  images?: DesignImage[];
  // Optional carousel: each slide is an image index, or an array of indices for a multi-image slide.
  // Indices reference the `images` array. Featured images are excluded from the thumbnail grid.
  featured?: {
    slides: Array<number | number[]>;
  };
};

export const designProjects: DesignProject[] = [
  {
    slug: "project-1",
    title: {
      en: "Communism and Theism",
      zh: "共产主义与有神论",
    },
    year: "2025",
    bg: "#FEFEFD",
    featured: {
      // Indices reference 7.pdf pages (the main deck):
      // images[10] = 07-05.jpg (deck page 5)
      // images[17] = 07-12.jpg (deck page 12)
      // images[7]  = 07-02.jpg + images[9] = 07-04.jpg (deck pages 2 & 4, side-by-side)
      slides: [10, 17, [7, 9]],
    },
    cover: { src: "/design/project-1/cover.jpg" },
    images: [
      { src: "/design/project-1/01.jpg" },
      { src: "/design/project-1/02.jpg" },
      { src: "/design/project-1/03.jpg" },
      { src: "/design/project-1/04.jpg" },
      { src: "/design/project-1/05.jpg" },
      { src: "/design/project-1/06.jpg" },
      { src: "/design/project-1/07-01.jpg" },
      { src: "/design/project-1/07-02.jpg" },
      { src: "/design/project-1/07-03.jpg" },
      { src: "/design/project-1/07-04.jpg" },
      { src: "/design/project-1/07-05.jpg" },
      { src: "/design/project-1/07-06.jpg" },
      { src: "/design/project-1/07-07.jpg" },
      { src: "/design/project-1/07-08.jpg" },
      { src: "/design/project-1/07-09.jpg" },
      { src: "/design/project-1/07-10.jpg" },
      { src: "/design/project-1/07-11.jpg" },
      { src: "/design/project-1/07-12.jpg" },
      { src: "/design/project-1/07-13.jpg" },
    ],
  },
  {
    slug: "project-2",
    title: { en: "Project 02", zh: "项目 02" },
    images: [{}, {}, {}],
  },
  {
    slug: "project-3",
    title: { en: "Project 03", zh: "项目 03" },
    images: [{}, {}, {}],
  },
  {
    slug: "project-4",
    title: { en: "Project 04", zh: "项目 04" },
    images: [{}, {}, {}],
  },
  {
    slug: "project-5",
    title: { en: "Project 05", zh: "项目 05" },
    images: [{}, {}, {}],
  },
];
