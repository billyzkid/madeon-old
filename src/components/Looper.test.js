import React from "react";
import ReactDOM from "react-dom";
import Looper from "./Looper";

it("renders without crashing", () => {
  ReactDOM.render(<Looper />, document.createElement("div"));
});