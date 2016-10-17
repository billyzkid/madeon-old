import React from "react";
import ReactDOM from "react-dom";
import Wizard from "./Wizard";

it("renders without crashing", () => {
  ReactDOM.render(<Wizard />, document.createElement("div"));
});