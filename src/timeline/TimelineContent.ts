interface Moment {
  image_url: string;
  time_string: string;
  title: string;
  title_url?: string;
  description: string;
}

export const TIMELINE_CONTENT: Moment[] = [
  {
    image_url: "timeline-lucid.png",
    time_string: "2023 - PRESENT",
    title: "Lucid Software",
    title_url: "https://lucid.co/",
    description: "Architecting and integrating AI-driven features into our airfocus product to automate workflows.",
  },
  {
    image_url: "timeline-vdo.jpg",
    time_string: "2024 - PRESENT",
    title: "VDO Dental Designs",
    description:
      "Engineered a HIPAA-compliant web portal supporting order processing, user authentication, and payment.",
  },
  {
    image_url: "timeline-c3.png",
    time_string: "2022 - 2023",
    title: "C3-Fence",
    title_url: "https://fencing.natehroylance.com/#/",
    description: "Managed a website for the company C3-Fence to attract dozens of large customers.",
  },
  {
    image_url: "timeline-webmaster.jpg",
    time_string: "2021 - 2023",
    title: "BYU Webmaster",
    title_url: "https://cs.byu.edu/",
    description: "Leading a team of developers to overhaul the website for BYU's Computer Science department.",
  },
  {
    image_url: "timeline-byu.jpg",
    time_string: "2020 - 2022",
    title: "BYU",
    title_url: "https://www.byu.edu/",
    description: "Graduated with a B.S. in Computer Science, 3.97 Major GPA.",
  },
];

// circle logo for lucid (black background)
// make mission circle bigger
