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
            <div className="image-div">
              <img src="images/profile-about.jpg" alt="profile picture"></img>
            </div>
          </div>
          <div className="links-div">{aboutElems}</div>
        </div>
        <div className="intro-div">
          <span className="title">Nate Roylance</span>
          <span className="header">Entry Level Software Engineer and Web Developer</span>
          <ul>
            <li className="text">Self-motivated and dependable, proactive problem-solver.</li>
            <li className="text">Thrives in a team-based environment, exceptional communicator.</li>
            <li className="text">
              Outside of school and work, I enjoy learning languages and libraries (e.g. React, Django, Typescript) with
              personal projects.
            </li>
            <li className="text">
              I enjoy architecting systems from the ground up and solving complex problems cleanly and efficiently.
            </li>
          </ul>
          <span className="header">Anticipated BYU Graduate Winter '22</span>
          <ul>
            <li className="text">ACT score of 33</li>
            <li className="text">3.97 Major GPA</li>
          </ul>
          <span className="header">Graduated high school with AAS Degree in 2018</span>
          <ul>
            <li className="text">Dean’s/Vice Dean’s list 2016-18</li>
            <li className="text">3.84 GPA</li>
            <li className="text">Phi Theta Kappa member 2016-18</li>
            <li className="text">Nominated for Math Student of the year 2017-18</li>
          </ul>
        </div>
      </div>
    );
  }
}
