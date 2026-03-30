interface ProjectData {
  image_url: string;
  title: string;
  about: string;
  url?: string;
}

export const PROJECT_CONTENT: ProjectData[] = [
  {
    image_url: "project-winter-wonderland.png",
    title: "Winter wonderland",
    about:
      "Designed a multiplayer environment using Bun and WebSockets, achieving performant live state synchronization for concurrent users.",
    url: "https://winter-wonderland.natehroylance.com/",
  },
  {
    image_url: "project-obsidian-sync.png",
    title: "Cloud-Sync Obsidian Plugin",
    about:
      "Engineered a custom synchronization tool for Obsidian markdown files using Google Drive APIs for seamless cross-device data persistence.",
  },
  {
    image_url: "project-knights-code.png",
    title: "Startup Business",
    about:
      "I led a team of 3 developers to create a quick MVP of a potential startup, including customer / market validation and investor pitching.",
    url: "https://knightscode.natehroylance.com/",
  },
];
