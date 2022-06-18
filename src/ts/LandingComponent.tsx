import React from "react";
import { Component } from "react";

export class LandingComponent extends Component<{}, {}> {
  render() {
    return (
      <div
        id="LandingComponent"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url("./images/byu-misty.jpg")',
        }}
      >
        <div className="landing-image-div">
          <img src="images/profile-landing.jpg" alt="profile picture"></img>
        </div>
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
