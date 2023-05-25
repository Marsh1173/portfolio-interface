import React from "react";
import { Component } from "react";
import { getNextKey } from "../main/main";
import { PROJECT_CONTENT } from "./ProjectsContent";

import "./ProjectsStyles.less";

export class ProjectsComponent extends Component<{}, {}> {
  render() {
    let project_elems: JSX.Element[] = PROJECT_CONTENT.map((data) => {
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
