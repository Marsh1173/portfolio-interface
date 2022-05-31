import React from "react";
import { Component } from "react";
import { getNextKey } from "./main";

interface Moment {
  image_url: string;
  time_string: string;
  title: string;
  title_url?: string;
  description: string;
}

const moments: Moment[] = [
  {
    image_url: "timeline-webmaster.jpg",
    time_string: "2021 - Current",
    title: "BYU Webmaster",
    title_url: "https://cs.byu.edu/",
    description: "Overhauling the website for BYU's Computer Science department with a team of developers.",
  },
  {
    image_url: "timeline-c3.png",
    time_string: "2022",
    title: "C3-Fence",
    title_url: "https://c3-fence.com/#/",
    description: "Publishing and upkeeping a custom-made website for the company C3-Fence.",
  },
  {
    image_url: "timeline-byu.jpg",
    time_string: "2020 - Current",
    title: "BYU",
    title_url: "https://www.byu.edu/",
    description: "Working toward my Bachelors in Computer Science. Planned graduation in December 2022.",
  },
  {
    image_url: "timeline-mission.png",
    time_string: "2018 - 2020",
    title: "LDS Mission",
    description: "Served an LDS mission in Puebla, Mexico.",
  },
  {
    image_url: "timeline-bbcc.png",
    time_string: "2016 - 2018",
    title: "Big Bend",
    title_url: "https://www.bigbend.edu/",
    description: "Graduated with my Associates of Applied Science through the Running Start program in Washington.",
  },
];

export class TimelineComponent extends Component<{}, {}> {
  render() {
    let timeline_moments: JSX.Element[] = moments.map((data, index) => {
      let style: string = " left";
      if (index % 2 === 0) {
        style = " right";
      }
      if (index % 4 > 1) {
        style += " offset";
      }
      return (
        <div className={"moment" + style} key={getNextKey()}>
          <div className="image" style={{ backgroundImage: `url("images/` + data.image_url + `")` }}></div>
          <div className="label">
            <span className="date">{data.time_string}</span>
            {data.title_url && (
              <a className="title" href={data.title_url}>
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
          <span className="text">Here's a timeline of my education and career.</span>
        </div>
        <div className="moment-container">{timeline_moments}</div>
      </div>
    );
  }
}
