import React from "react";
import { Component } from "react";
import { getNextKey } from "./main";

interface AboutLink {
  image_url: string;
  site_url: string;
}

const AboutData: AboutLink[] = [
  {
    image_url: "icon-linkedin.svg",
    site_url: "https://www.linkedin.com/in/nate-roylance-0b51a4210?original_referer=https%3A%2F%2Fwww.google.com%2F",
  },
  { image_url: "icon-github.svg", site_url: "https://github.com/Marsh1173" },
  { image_url: "icon-facebook.svg", site_url: "https://www.facebook.com/nathaniel.roylance" },
];

export class AboutComponent extends Component<{}, {}> {
  render() {
    let aboutElems: JSX.Element[] = AboutData.map((data) => {
      return (
        <a className="about-elem" href={data.site_url} key={getNextKey()} target="_blank">
          <img className="image" src={"images/" + data.image_url} alt={data.image_url}></img>
        </a>
      );
    });

    return (
      <div id="AboutComponent">
        <div className="portrait-div">
          <div className="image-container-div">
            <div className="image-div"></div>
          </div>
          <div className="links-div">{aboutElems}</div>
        </div>
        <div className="intro-div">
          <span className="title">Nate Roylance</span>
          <span className="header">Software Engineer and Web Developer</span>
          <span className="text">My interests include engineering software and developing websites.</span>
          <span className="header">Anticipated BYU Graduate Winter '22</span>
          <span className="header">Graduated with AAS Degree in 2018</span>
        </div>
      </div>
    );
  }
}
