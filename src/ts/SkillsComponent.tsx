import React from "react";
import { Component } from "react";
import { getNextKey } from "./main";

interface SkillData {
  img_url?: string;
  letters?: string;
  title: string;
  text: string;
}

const skills_data: SkillData[] = [
  { img_url: "icon-python.svg", title: "Python", text: "4 years of experience, 1 of work experience." },
  { letters: "Ts", title: "Typescript", text: "3 years of experience, in addition to JavaScript experience." },
  { img_url: "icon-java.svg", title: "Java", text: "2 years of experience." },
  { img_url: "icon-c.svg", title: "C/C#/C++", text: "5 years of on-and-off experience." },
  { img_url: "icon-react.svg", title: "React", text: "3 years of experience." },
  { img_url: "icon-yarn.svg", title: "NPM/Yarn", text: "Very familiar." },
  { img_url: "icon-html.svg", title: "HTML/CSS/Less/Sass", text: "4 years of experience." },
  { letters: "dj", title: "Django", text: "1 year of work experience." },
  { img_url: "icon-database.svg", title: "SQL/Mongo", text: "2 years of familiarity." },
  { img_url: "icon-android.svg", title: "Android Studio", text: "Passable experience." },
];

export class SkillsComponent extends Component<{}, {}> {
  render() {
    let skill_elems: JSX.Element[] = skills_data.map((data) => {
      return (
        <div className="skill-card" key={getNextKey()} tabIndex={0}>
          <div className="image-div">
            {data.img_url && <img className="image" src={"images/" + data.img_url} alt={data.img_url}></img>}
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
