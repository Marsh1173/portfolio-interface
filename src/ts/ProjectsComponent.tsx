import React from "react";
import { Component } from "react";

interface ProjectData {
  image_url: string;
  title: string;
  date: string;
}

const projects: ProjectData[] = [];

export class ProjectsComponent extends Component<{}, {}> {
  render() {
    return <div id="ProjectsComponent"></div>;
  }
}
