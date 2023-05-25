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
  sections: AboutSectionInterface[];
  links: AboutLinkInterface[];
}

export const ABOUT_CONTENT: AboutContentInterface = {
  name: "Nate Roylance",
  profile_picture_url: "portrait.jpg",
  links: [
    {
      image_url: "icon-linkedin.svg",
      site_url: "https://www.linkedin.com/in/nate-roylance-0b51a4210?original_referer=https%3A%2F%2Fwww.google.com%2F",
    },
    { image_url: "icon-github.svg", site_url: "https://github.com/Marsh1173" },
    { image_url: "icon-facebook.svg", site_url: "https://www.facebook.com/nathaniel.roylance" },
  ],
  sections: [
    {
      title: "Software Engineer and Web Developer",
      subtext: [
        "Self-motivated and dependable, proactive problem-solver.",
        "Thrives in a team-based environment, exceptional communicator.",
        "Outside of school and work, I enjoy learning languages and libraries (e.g. React, Django, Typescript) with personal projects.",
        "I enjoy architecting systems from the ground up and solving complex problems cleanly and efficiently.",
      ],
    },
    {
      title: "BYU Graduate Winter '22",
      subtext: ["ACT score of 33", "3.97 Major GPA"],
    },
    {
      title: "High School Grad with AAS Degree in '18",
      subtext: [
        "Dean’s/Vice Dean’s list 2016-18",
        "3.84 GPA",
        "Phi Theta Kappa member 2016-18",
        "Nominated for Math Student of the year 2017-18",
      ],
    },
  ],
};
