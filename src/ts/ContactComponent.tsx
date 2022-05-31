import React from "react";
import { Component } from "react";

export class ContactComponent extends Component<{}, {}> {
  render() {
    return (
      <div id="ContactComponent">
        <div className="header">
          <span className="title">Contact Me</span>
          <span className="text">Email: natehroylance@gmail.com</span>
        </div>
      </div>
    );
  }
}
