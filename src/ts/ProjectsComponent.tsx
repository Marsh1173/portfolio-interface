import React from "react";
import { Component } from "react";
import { getNextKey } from "./main";

interface ProjectData {
  image_url: string;
  title: string;
  about: string;
  url: string;
}

const projects: ProjectData[] = [
  {
    image_url: "project-byu-cs.png",
    title: "Django Backend, Wagtail Frontend",
    about:
      "While I was working for BYU's CS Department, I led a team in redesigning several large outdated backend and frontend systems and creating new ones.",
    url: "https://cs.byu.edu/",
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

export class ProjectsComponent extends Component<{}, {}> {
  render() {
    let project_elems: JSX.Element[] = projects.map((data) => {
      return (
        <div key={getNextKey()} className="project-card">
          <div className="image" style={{ backgroundImage: `url("images/` + data.image_url + `")` }}>
            <a className="visit-text" target="_blank" href={data.url}>
              Visit
            </a>
          </div>
          <span className="title">{data.title}</span>
          <span className="about">
            <i>{data.about}</i>
          </span>
        </div>
      );
    });
    return (
      <div id="ProjectsComponent">
        <div className="header">
          <span className="title">Projects</span>
          <span className="text">Listed below are a few of the finished and unfinished projects I've worked on.</span>
        </div>
        <div className="card-container">{project_elems}</div>
      </div>
    );
  }
}
