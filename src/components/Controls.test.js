import React from "react";
import ReactDOM from "react-dom";
import Controls from "./Controls";

it("renders without crashing", () => {
  ReactDOM.render(<Controls />, document.createElement("div"));
});