import React from "react";
import ReactDOM from "react-dom";
import Errors from "./Errors";

it("renders without crashing", () => {
  ReactDOM.render(<Errors />, document.createElement("div"));
});