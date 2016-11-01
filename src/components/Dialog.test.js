import React from "react";
import ReactDOM from "react-dom";
import Button from "./Dialog";

it("renders without crashing", () => {
  ReactDOM.render(<Dialog />, document.createElement("div"));
});