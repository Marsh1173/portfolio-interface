import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";
import { AboutComponent } from "./AboutComponent";
import { HeaderComponent } from "./HeaderComponent";
import { LandingComponent } from "./LandingComponent";
import { ProjectsComponent } from "./ProjectsComponent";
import { SkillsComponent } from "./SkillsComponent";
import { TimelineComponent } from "./TimelineComponent";

import "../Styles/MainStyles.less";
import { ContactComponent } from "./ContactComponent";
import { FooterComponent } from "./FooterComponent";

let nextKey: number = 0;
export function getNextKey(): number {
  return nextKey++;
}

class MainDiv extends Component<{}, {}> {
  render() {
    return (
      <div id="main-page">
        <HeaderComponent></HeaderComponent>
        <LandingComponent></LandingComponent>
        <AboutComponent></AboutComponent>
        <SkillsComponent></SkillsComponent>
        <ProjectsComponent></ProjectsComponent>
        <TimelineComponent></TimelineComponent>
        <ContactComponent></ContactComponent>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
