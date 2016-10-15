import React from "react";
import ReactDOM from "react-dom";
import App from "./Error";

it("renders without crashing", () => {
  ReactDOM.render(<Error />, document.createElement("div"));
});