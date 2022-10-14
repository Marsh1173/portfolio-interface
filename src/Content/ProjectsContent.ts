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
      "While I work at BYU's CS Department, I lead a team in redesigning several large outdated backend and frontend systems and creating new ones.",
    url: "https://cs.byu.edu/",
  },
  {
    image_url: "project-c3-fence.png",
    title: "React, Routing, RESTful APIs",
    about:
      "I personally published a custom-made, multi-page website for the company C3-Fence. I work to upkeep the website and add content as necessary.",
    url: "https://c3-fence.com/#/",
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
  {
    image_url: "project-dev.png",
    title: "React and System Structure",
    about: "This was a personal project to get my feet wet with React and the MVC pattern.",
    url: "https://md.natehroylance.com/",
  },
];
