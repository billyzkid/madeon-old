import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";

it("renders without crashing", () => {
  ReactDOM.render(<Grid />, document.createElement("div"));
});