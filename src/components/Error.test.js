import React from "react";
import ReactDOM from "react-dom";
import Error from "./Error";

it("renders without crashing", () => {
  ReactDOM.render(<Error />, document.createElement("div"));
});