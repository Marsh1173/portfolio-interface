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
  { img_url: "icon-python.svg", title: "Python", text: "Very well versed in Python. Used in BU's CS website." },
  {
    letters: "Ts",
    title: "Typescript",
    text: "Very well versed in TypeScript and JavaScript. Used in nearly all my personal projects.",
  },
  { img_url: "icon-java.svg", title: "Java", text: "Well versed in Java. Used with AWS and Android Studio." },
  { img_url: "icon-github.svg", title: "Git", text: "Very familiar with GitHub. Used in all my projects." },
  {
    img_url: "icon-aws.svg",
    title: "AWS",
    text: "Finished several large projects using API Gateway, lambdas, and DynamoDB.",
  },
  {
    img_url: "icon-c.svg",
    title: "C/C#/C++",
    text: "In-depth experience. Solid understanding of sockets, pointers, and memory.",
  },
  { img_url: "icon-react.svg", title: "React", text: "Well-versed in React. Used in nearly all my personal projects." },
  {
    img_url: "icon-yarn.svg",
    title: "NPM/Yarn",
    text: "Used in the majority of my projects, especially webpack and babel.",
  },
  { img_url: "icon-html.svg", title: "HTML/CSS/\nLess/Sass", text: "Well versed in website design." },
  { letters: "dj", title: "Django", text: "Very familiar with Django. Used constantly while working for BYU." },
  {
    img_url: "icon-database.svg",
    title: "SQL/Mongo",
    text: "Very familiar, passable experience with most popular database programs.",
  },
  {
    img_url: "icon-android.svg",
    title: "Android Studio",
    text: "Passable experience with activities, fragments, and automated testing.",
  },
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
