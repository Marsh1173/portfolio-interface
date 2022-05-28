import React from "react";
import { Component } from "react";
import { getNextKey } from "./main";

function get_milestone_id(name: string): string {
  return "milestone-" + name;
}

const header_milestone_array: [string, string][] = [
  ["Nate Roylance", "LandingComponent"],
  ["About", "AboutComponent"],
  ["Skills", "SkillsComponent"],
  ["Projects", "ProjectsComponent"],
  ["Timeline", "TimelineComponent"],
  ["Contact", "ContactComponent"],
];

export class HeaderComponent extends Component<{}, {}> {
  render() {
    let milestone_elems = header_milestone_array.map((data) => {
      return (
        <a
          className="passed"
          id={get_milestone_id(data[1])}
          onClick={() => {
            document.getElementById(data[1])?.scrollIntoView(true);
          }}
          key={getNextKey()}
        >
          {data[0]}
        </a>
      );
    });

    return (
      <div id="HeaderComponent">
        <div id="header-max-width">
          {milestone_elems}
          <div id="header-line"></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.set_scroll_func();
  }

  private set_scroll_func() {
    let header_line_elem = document.getElementById("header-line");
    let milestone_elems: (HTMLElement | null)[] = header_milestone_array.map((data) => {
      return document.getElementById(data[1]);
    });
    let milestone_header_elems: (HTMLElement | null)[] = header_milestone_array.map((data) => {
      return document.getElementById(get_milestone_id(data[1]));
    });

    let current_progress_index: number = 0;

    function update_milestone_header_elems() {
      for (let i: number = 0; i < milestone_header_elems.length; i++) {
        if (current_progress_index > i) {
          milestone_header_elems[i]?.classList.toggle("highlighted", false);
          milestone_header_elems[i]?.classList.toggle("passed", true);
        } else if (current_progress_index === i) {
          milestone_header_elems[i]?.classList.toggle("highlighted", true);
          milestone_header_elems[i]?.classList.toggle("passed", false);
          if (header_line_elem) {
            header_line_elem.style.left = milestone_header_elems[i]!.offsetLeft + "px";
          }
        } else {
          milestone_header_elems[i]?.classList.toggle("highlighted", false);
          milestone_header_elems[i]?.classList.toggle("passed", false);
        }
      }
    }

    window.onscroll = (e: Event) => {
      for (let i: number = 0; i < milestone_elems.length; i++) {
        if (milestone_elems[i] != null) {
          let dist_to_top: number = milestone_elems[i]!.offsetTop - window.innerHeight / 3;

          if (dist_to_top > window.pageYOffset) {
            if (current_progress_index !== Math.max(0, i - 1)) {
              current_progress_index = Math.max(0, i - 1);
              update_milestone_header_elems();
            }
            break;
          }
        }
      }
    };
    window.onresize = () => {
      update_milestone_header_elems();
    };

    update_milestone_header_elems();
  }
}
