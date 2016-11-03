import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { defaultSamples } from "../scripts/samples";

it("renders", () => {
  ReactDOM.render(<App />, document.createElement("div"));
});

it("renders props", () => {
  ReactDOM.render(<App samples={defaultSamples} />, document.createElement("div"));
});