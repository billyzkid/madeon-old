import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";
import { defaultSong } from "../scripts/songs";

it("renders without crashing", () => {
  ReactDOM.render(<Grid song={defaultSong} />, document.createElement("div"));
});