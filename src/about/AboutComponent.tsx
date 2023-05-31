import React from "react";
import { Component } from "react";
import { getNextKey } from "../main/main";
import { ABOUT_CONTENT } from "./AboutContent";

import "./AboutStyles.less";

export class AboutComponent extends Component<{}, {}> {
  render() {
    let about_elems: JSX.Element[] = ABOUT_CONTENT.links.map((data) => {
      return (
        <a className="about-elem" href={data.site_url} key={getNextKey()} target="_blank">
          <img className="image" src={"images/icons/" + data.image_url} alt={data.image_url}></img>
        </a>
      );
    });

    let section_elems: JSX.Element[] = ABOUT_CONTENT.sections.map((data) => {
      let list_items: JSX.Element[] = data.subtext.map((text) => {
        return (
          <li className="text" key={getNextKey()}>
            {text}
          </li>
        );
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
        <div id="about-component-container">
          <div className="portrait-div">
            <div className="image-container-div">
              <div className="image-div">
                <img src={"images/about/" + ABOUT_CONTENT.profile_picture_url} alt="profile picture"></img>
              </div>
            </div>
            {!!ABOUT_CONTENT.work_banner && (
              <a className="work-banner" target="_blank" href={ABOUT_CONTENT.work_banner.link}>
                <img className="work-banner-image" src={"images/about/" + ABOUT_CONTENT.work_banner.picture_url}></img>
              </a>
            )}
            <div className="links-div">{about_elems}</div>
          </div>
          <div className="intro-div">
            <span className="title">{ABOUT_CONTENT.name}</span>
            {section_elems}
          </div>
        </div>
      </div>
    );
  }
}
