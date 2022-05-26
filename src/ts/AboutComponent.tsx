import React from "react";
import { Component } from "react";

export class AboutComponent extends Component<{}, {}> {
  render() {
    return (
      <div id="AboutComponent">
        <div className="portrait-div">
          <div className="image-container-div">
            <div className="image-div"></div>
          </div>
          <div className="links-div"></div>
        </div>
        <div className="intro-div">
          <span className="title">Nate Roylance</span>
          <span className="header">Software Engineer and Web Developer</span>
          <span className="text">My interests include engineering software and developing websites.</span>
          <span className="text">I enjoy</span>
          <span className="header">Anticipated BYU Graduate Winter '22</span>
        </div>
      </div>
    );
  }
}
