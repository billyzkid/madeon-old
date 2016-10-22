import React from "react";
import ReactDOM from "react-dom";
import GridButton from "./GridButton";
import { defaultSong } from "../scripts/songs";

it("renders without crashing", () => {
  ReactDOM.render(<GridButton item={defaultSong[0]} />, document.createElement("div"));
});