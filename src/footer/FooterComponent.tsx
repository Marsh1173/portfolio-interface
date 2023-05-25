import React from "react";
import { Component } from "react";
import { FOOTER_LINKS } from "./FooterContent";

import "./FooterStyles.less";

export class FooterComponent extends Component<{}, {}> {
  render() {
    let footer_components: JSX.Element[] = FOOTER_LINKS.map((footer_link_data) => {
      return (
        <a tabIndex={0} href={footer_link_data.url}>
          {footer_link_data.name}
        </a>
      );
    });

    return <div id="FooterComponent">{footer_components}</div>;
  }
}
