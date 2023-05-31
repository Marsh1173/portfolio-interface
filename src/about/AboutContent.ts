interface AboutSectionInterface {
  title: string;
  subtext: string[];
}

interface AboutLinkInterface {
  image_url: string;
  site_url: string;
}

interface AboutContentInterface {
  name: string;
  profile_picture_url: string;
  work_banner?: {
    picture_url: string;
    link: string;
  };
  sections: AboutSectionInterface[];
  links: AboutLinkInterface[];
}

export const ABOUT_CONTENT: AboutContentInterface = {
  name: "Nate Roylance",
  profile_picture_url: "portrait.jpg",
  work_banner: {
    picture_url: "work-banner.jpeg",
    link: "https://lucid.co/",
  },
  links: [
    {
      image_url: "icon-linkedin.svg",
      site_url: "https://www.linkedin.com/in/nate-roylance-0b51a4210?original_referer=https%3A%2F%2Fwww.google.com%2F",
    },
    { image_url: "icon-github.svg", site_url: "https://github.com/Marsh1173" },
  ],
  sections: [
    {
      title: "Software Engineer, Lucid Software",
      subtext: [
        "Creating complex systems that enable third-party developers to improve the lives of millions of tech workers around the world.",
        "Team contributer, with a passion for stable and long-lived code.",
        "Full-stack engineer, participating in application design from start to finish.",
      ],
    },
    {
      title: "Software and Web Developer",
      subtext: [
        "Self-motivated and dependable, proactive problem-solver. Thrives in a team-based environment, exceptional communicator.",
        "Outside of work, I enjoy architecting systems from the ground up for personal projects.",
      ],
    },
    {
      title: "BYU Graduate Winter '22",
      subtext: ["B.S. in Computer Science", "ACT score of 33", "3.97 Major GPA"],
    },
  ],
};
