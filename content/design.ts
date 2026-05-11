export type DesignImage = {
  src?: string;
  aspect?: string; // CSS aspect-ratio value: "4/3", "16/9", "1/1", "3/4", "21/9", etc. Defaults to "4/3".
};

export type DesignProject = {
  slug: string;
  title: string;
  cover?: DesignImage;
  images?: DesignImage[];
};

export const designProjects: DesignProject[] = [
  { slug: "project-1", title: "Project 01", images: [{}, {}, {}] },
  { slug: "project-2", title: "Project 02", images: [{}, {}, {}] },
  { slug: "project-3", title: "Project 03", images: [{}, {}, {}] },
  { slug: "project-4", title: "Project 04", images: [{}, {}, {}] },
  { slug: "project-5", title: "Project 05", images: [{}, {}, {}] },
];
