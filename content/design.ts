export type DesignProject = {
  slug: string;
  title: string;
  cover?: string;
  images?: string[];
};

export const designProjects: DesignProject[] = [
  { slug: "project-1", title: "Project 01", images: ["", "", ""] },
  { slug: "project-2", title: "Project 02", images: ["", "", ""] },
  { slug: "project-3", title: "Project 03", images: ["", "", ""] },
  { slug: "project-4", title: "Project 04", images: ["", "", ""] },
  { slug: "project-5", title: "Project 05", images: ["", "", ""] },
];
