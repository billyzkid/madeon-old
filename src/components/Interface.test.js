import React from "react";
import ReactDOM from "react-dom";
import App from "./Interface";

it("renders without crashing", () => {
  ReactDOM.render(<Interface />, document.createElement("div"));
});