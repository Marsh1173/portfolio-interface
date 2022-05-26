import React from "react";
import { Component } from "react";

export class HeaderComponent extends Component<{}, {}> {
    render() {

        return(
            <div id="HeaderComponent">
                <span>Home</span>
                <span>About</span>
                <span>Skills</span>
                <span>Projects</span>
                <span>Timeline</span>
                <span>Resume</span>
            </div>
        );
    }

    public componentDidMount() {
        window.onscroll = (e: Event) => {
            e.preventDefault();
        }
    }
}