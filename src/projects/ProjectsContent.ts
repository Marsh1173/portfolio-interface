interface ProjectData {
  image_url: string;
  title: string;
  about: string;
  url: string;
}

export const PROJECT_CONTENT: ProjectData[] = [
  {
    image_url: "project-byu-cs.png",
    title: "Django Backend, Wagtail Frontend",
    about:
      "I lead a team for BYU's CS Department in redesigning several large outdated backend and frontend systems and creating new ones.",
    url: "https://cs.byu.edu/",
  },
  {
    image_url: "project-c3-fence.png",
    title: "React, Routing, RESTful APIs",
    about:
      "I personally made and published the website for the company C3-Fence. I upkept the website and added content as requested.",
    url: "https://fencing.natehroylance.com/#/",
  },
  {
    image_url: "project-knights-code.png",
    title: "Startup Business",
    about:
      "I led a team of 3 developers to create a quick MVP of a potential startup, including customer / market validation and investor pitching.",
    url: "https://knightscode.natehroylance.com/",
  },
  {
    image_url: "project-websocket.png",
    title: "Websockets",
    about:
      "I experimented with JavaScript websockets to create a lobby system for a game. Lobbies are updated in real time.",
    url: "https://server.natehroylance.com/",
  },
  {
    image_url: "project-physics.png",
    title: "Basic Physics Engine",
    about: "For this project, I challenged myself to make a 2D physics engine from scratch.",
    url: "https://ibh.natehroylance.com/",
  },
];
