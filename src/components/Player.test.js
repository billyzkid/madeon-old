import React from "react";
import ReactDOM from "react-dom";
import Player from "./Player";
import { defaultSamples } from "../scripts/samples";

it("renders", () => {
  ReactDOM.render(<Player />, document.createElement("div"));
});

it("renders samples", () => {
  ReactDOM.render(<Player samples={defaultSamples} onClick={(event, sample) => {}} />, document.createElement("div"));
});