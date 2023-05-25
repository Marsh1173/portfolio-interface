import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";
import { AboutComponent } from "../about/AboutComponent";
import { HeaderComponent } from "../header/HeaderComponent";
import { LandingComponent } from "../landing/LandingComponent";
import { ProjectsComponent } from "../projects/ProjectsComponent";
import { SkillsComponent } from "../skills/SkillsComponent";
import { TimelineComponent } from "../timeline/TimelineComponent";
import { ContactComponent } from "../contact/ContactComponent";
import { FooterComponent } from "../footer/FooterComponent";

import "./MainStyles.less";

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
        <TimelineComponent></TimelineComponent>
        <ProjectsComponent></ProjectsComponent>
        <SkillsComponent></SkillsComponent>
        <ContactComponent></ContactComponent>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
