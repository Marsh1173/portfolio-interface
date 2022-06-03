import React from "react";
import { Component } from "react";

export class LandingComponent extends Component<{}, {}> {
  render() {
    return (
      <div id="LandingComponent">
        <div className="landing-image-div"></div>
        <div className="landing-image-text">
          <span className="name">Nate Roylance</span>
          <span className="about">
            <i>Team Lead & Full-Stack Dev, Computer Science</i>
          </span>
        </div>
        <button
          className="enter-portfolio-button"
          onClick={() => {
            document.getElementById("AboutComponent")?.scrollIntoView(true);
          }}
        >
          Enter Portfolio
        </button>
      </div>
    );
  }
}
