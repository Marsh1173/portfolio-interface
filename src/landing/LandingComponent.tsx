import React from "react";
import { Component } from "react";
import { LANDING_CONFIG } from "./LandingContent";

import "./LandingStyles.less";

export class LandingComponent extends Component<{}, {}> {
  private readonly background_image_ref = React.createRef<HTMLDivElement>();

  render() {
    return (
      <div id="LandingComponent">
        <div ref={this.background_image_ref} id="background-image-div"></div>
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

  componentDidMount(): void {
    const img = new Image();
    img.src = "images/landing/" + LANDING_CONFIG.background_image_url;
    img.onload = () => {
      if (this.background_image_ref.current) {
        this.background_image_ref.current.classList.add("loaded");
        this.background_image_ref.current.style.backgroundImage =
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("images/landing/' +
          LANDING_CONFIG.background_image_url +
          '")';
      }
    };
  }
}
