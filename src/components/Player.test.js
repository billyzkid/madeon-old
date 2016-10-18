import React from "react";
import ReactDOM from "react-dom";
import Player from "./Player";

it("renders without crashing", () => {
  ReactDOM.render(<Player />, document.createElement("div"));
});