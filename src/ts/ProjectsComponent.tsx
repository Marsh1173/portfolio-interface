import React from "react";
import { Component } from "react";
import { getNextKey } from "./main";

interface ProjectData {
  image_url: string;
  title: string;
  date: string;
  url: string;
}

const projects: ProjectData[] = [
  {
    image_url: "project-websocket.png",
    title: "Websockets",
    date: "February, 2022",
    url: "https://server.natehroylance.com/",
  },
  {
    image_url: "project-physics.png",
    title: "Basic Physics Engine",
    date: "September, 2021",
    url: "https://ibh.natehroylance.com/",
  },
  {
    image_url: "project-dev.png",
    title: "Development Tools",
    date: "November, 2021",
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
          <span className="date">
            <i>{data.date}</i>
          </span>
        </div>
      );
    });
    return (
      <div id="ProjectsComponent">
        <div className="header">
          <span className="title">Projects</span>
          <span className="text">Listed below are a few of the finished and unfinished projects I've done.</span>
        </div>
        <div className="card-container">{project_elems}</div>
      </div>
    );
  }
}
