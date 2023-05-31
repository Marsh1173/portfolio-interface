import React from "react";
import { Component } from "react";
import { getNextKey } from "../main/main";
import { TIMELINE_CONTENT } from "./TimelineContent";

import "./TimelineStyles.less";

export class TimelineComponent extends Component<{}, {}> {
  render() {
    if (TIMELINE_CONTENT.length > 6) {
      throw new Error("Timeline should not have more than 6 items!");
    }
    let timeline_moments: JSX.Element[] = TIMELINE_CONTENT.map((data, index) => {
      let style: string = " left";
      if (index % 2 === 0) {
        style = " right";
      }
      if (index % 4 > 1) {
        style += " offset";
      }
      return (
        <div className={"moment" + style} key={getNextKey()}>
          <div className="image" style={{ backgroundImage: `url("images/timeline/` + data.image_url + `")` }}></div>
          <div className="label" tabIndex={0}>
            <span className="date">{data.time_string}</span>
            {data.title_url && (
              <a className="title" target="_blank" href={data.title_url}>
                {data.title}
              </a>
            )}
            {!data.title_url && <span className="title">{data.title}</span>}
            <div className="line"></div>
            <span className="description">{data.description}</span>
          </div>
        </div>
      );
    });

    return (
      <div id="TimelineComponent">
        <div className="header">
          <span className="title">Timeline</span>
          <span className="text">Here's a timeline of my career.</span>
        </div>
        <div className="moment-container">{timeline_moments}</div>
      </div>
    );
  }
}
