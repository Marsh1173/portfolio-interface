interface Moment {
  image_url: string;
  time_string: string;
  title: string;
  title_url?: string;
  description: string;
}

export const TIMELINE_CONTENT: Moment[] = [
  {
    image_url: "timeline-webmaster.jpg",
    time_string: "2021 - Current",
    title: "BYU Webmaster",
    title_url: "https://cs.byu.edu/",
    description:
      "Leading a team to overhaul the website for BYU's Computer Science department with a team of developers.",
  },
  {
    image_url: "timeline-c3.png",
    time_string: "2022",
    title: "C3-Fence",
    title_url: "https://c3-fence.com/#/",
    description: "Personally publishing and upkeeping a custom-made website for the company C3-Fence.",
  },
  {
    image_url: "timeline-byu.jpg",
    time_string: "2020 - 2022",
    title: "BYU",
    title_url: "https://www.byu.edu/",
    description: "Bachelors in Computer Science. 3.97 Major GPA.",
  },
  {
    image_url: "timeline-dbmanager.png",
    time_string: "2020 - 2021",
    title: "Database Manager",
    title_url: "https://norpac.com/our-products/",
    description: "Managed the production database for the Quincy Foods branch of NORPAC.",
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
    description: "Graduated with my Associates of Applied Science through the Running Start program in Washington.",
  },
];
