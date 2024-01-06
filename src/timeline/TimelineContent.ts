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
    time_string: "2023 - Current",
    title: "Lucid Software",
    title_url: "https://lucid.co/",
    description: "Working with a team of developers to create Lucid Software's integration tools.",
  },
  {
    image_url: "timeline-c3.png",
    time_string: "2022-2023",
    title: "C3-Fence",
    title_url: "https://fencing.natehroylance.com/#/",
    description: "Managed a website for the company C3-Fence (now defunct).",
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
  {
    image_url: "timeline-mission.png",
    time_string: "2018 - 2020",
    title: "LDS Mission",
    description: "Served an LDS mission in Puebla, Mexico.",
  },
  {
    image_url: "timeline-bbcc.png",
    time_string: "2016 - 2018",
    title: "Big Bend",
    title_url: "https://www.bigbend.edu/",
    description: "Graduated with my A.A.S. through the Running Start program in Washington.",
  },
];

// circle logo for lucid (black background)
// make mission circle bigger
