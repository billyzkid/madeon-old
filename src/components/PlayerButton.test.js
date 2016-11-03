import React from "react";
import ReactDOM from "react-dom";
import PlayerButton from "./PlayerButton";
import { defaultSamples } from "../scripts/samples";

it("renders", () => {
  ReactDOM.render(<PlayerButton />, document.createElement("div"));
});

it("renders props", () => {
  ReactDOM.render(<PlayerButton sample={defaultSamples[0]} onClick={(event, sample) => {}} />, document.createElement("div"));
});