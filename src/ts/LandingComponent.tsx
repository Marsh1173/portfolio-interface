import React from "react";
import { Component } from "react";
import { LANDING_CONFIG } from "../Content/LandingContent";

export class LandingComponent extends Component<{}, {}> {
  render() {
    return (
      <div
        id="LandingComponent"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url("' + LANDING_CONFIG.background_image_url + '")',
        }}
      >
        <div className="landing-image-div">
          <img src={LANDING_CONFIG.profile_image_url} alt="profile picture"></img>
        </div>
        <div className="landing-image-text">
          <span className="name">{LANDING_CONFIG.name_string}</span>
          <span className="about">
            <i>{LANDING_CONFIG.about_string}</i>
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
