import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";

class MainDiv extends Component<{}, {}> {
    render() {
        return <p>hi</p>;
    }
}

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
