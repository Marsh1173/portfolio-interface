import React from "react";
import { Component } from "react";
import { getNextKey } from "./main";
import { ABOUT_CONTENT } from "../Content/AboutContent";

export class AboutComponent extends Component<{}, {}> {
  render() {
    let about_elems: JSX.Element[] = ABOUT_CONTENT.links.map((data) => {
      return (
        <a className="about-elem" href={data.site_url} key={getNextKey()} target="_blank">
          <img className="image" src={"images/" + data.image_url} alt={data.image_url}></img>
        </a>
      );
    });

    let section_elems: JSX.Element[] = ABOUT_CONTENT.sections.map((data) => {
      let list_items: JSX.Element[] = data.subtext.map((text) => {
        return <li className="text">{text}</li>;
      });
      return (
        <>
          <span className="header">{data.title}</span>
          <ul>{list_items}</ul>
        </>
      );
    });

    return (
      <div id="AboutComponent">
        <div className="portrait-div">
          <div className="image-container-div">
            <div className="image-div">
              <img src={ABOUT_CONTENT.profile_picture_url} alt="profile picture"></img>
            </div>
          </div>
          <div className="links-div">{about_elems}</div>
        </div>
        <div className="intro-div">
          <span className="title">{ABOUT_CONTENT.name}</span>
          {section_elems}
        </div>
      </div>
    );
  }
}
