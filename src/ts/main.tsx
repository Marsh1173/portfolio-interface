import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";
import { AboutComponent } from "./AboutComponent";
import { HeaderComponent } from "./HeaderComponent";
import { LandingComponent } from "./LandingComponent";
import { ProjectsComponent } from "./ProjectsComponent";
import { SkillsComponent } from "./SkillsComponent";
import { TimelineComponent } from "./TimelineComponent";

import "./Styles.less";

class MainDiv extends Component<{}, {}> {
    render() {

        return(
            <div id="main-page">
                <HeaderComponent></HeaderComponent>
                <LandingComponent></LandingComponent>
                <AboutComponent></AboutComponent>
                <SkillsComponent></SkillsComponent>
                <ProjectsComponent></ProjectsComponent>
                <TimelineComponent></TimelineComponent>
            </div>
        );
    }
}

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
