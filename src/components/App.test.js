import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { defaultSong } from "../scripts/songs";

it("renders without crashing", () => {
  ReactDOM.render(<App song={defaultSong} />, document.createElement("div"));
});