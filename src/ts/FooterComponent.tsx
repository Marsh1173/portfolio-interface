import React from "react";
import { Component } from "react";

export class FooterComponent extends Component<{}, {}> {
  render() {
    return (
      <div id="FooterComponent">
        <a tabIndex={0} href="mailto: natehroylance@gmail.com">
          Email: natehroylance@gmail.com
        </a>
        <a tabIndex={0} href="tel:+15097178321">
          Phone: 509-717-8321
        </a>
      </div>
    );
  }
}
