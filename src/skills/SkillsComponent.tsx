import React from "react";
import { Component } from "react";
import { getNextKey } from "../main/main";
import { SKILLS_CONTENT } from "./SkillsContent";

import "./SkillsStyles.less";

export class SkillsComponent extends Component<{}, {}> {
  render() {
    let skill_elems: JSX.Element[] = SKILLS_CONTENT.map((data) => {
      return (
        <div className="skill-card" key={getNextKey()} tabIndex={0}>
          <div className="image-div">
            {data.img_url && <img className="image" src={"images/icons/" + data.img_url} alt={data.img_url}></img>}
            {data.letters && <span className="letters">{data.letters}</span>}
          </div>
          <span className="title">{data.title}</span>
          <span className="text">{data.text}</span>
        </div>
      );
    });
    return (
      <div id="SkillsComponent">
        <div className="header">
          <span className="title">Skills</span>
          <span className="text">Listed below are a few of my skills.</span>
        </div>
        <div className="card-container">{skill_elems}</div>
      </div>
    );
  }
}
