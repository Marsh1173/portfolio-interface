import React from "react";
import { Component } from "react";

export class FooterComponent extends Component<{}, {}> {
  render() {
    return (
      <div id="FooterComponent">
        <a tabIndex={0}>Email: natehroylance@gmail.com</a>
        <a tabIndex={0}>Call: 509-717-8321</a>
      </div>
    );
  }
}
