// Central place for site-wide metadata and links.
export const SITE = {
  name: "William Mitchell",
  title: "William Mitchell",
  description:
    "Personal site of William Mitchell — projects, games, reading, and writing.",
  email: "w.mitchell012@gmail.com",
  github: "https://github.com/wmitc",
  linkedin: "https://www.linkedin.com/in/william-b-mitchell/",
  // Set to "/resume.pdf" once you drop a PDF into public/. While null, the
  // résumé page hides the download button instead of linking to a 404.
  resumePdf: null as string | null,
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/games", label: "Games" },
  { href: "/reading", label: "Reading" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];
