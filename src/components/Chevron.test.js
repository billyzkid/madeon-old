import React from "react";
import ReactDOM from "react-dom";
import Chevron from "./Chevron";

it("renders without crashing", () => {
  ReactDOM.render(<Chevron />, document.createElement("div"));
});