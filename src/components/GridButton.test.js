import React from "react";
import ReactDOM from "react-dom";
import GridButton from "./GridButton";

it("renders without crashing", () => {
  ReactDOM.render(<GridButton />, document.createElement("div"));
});