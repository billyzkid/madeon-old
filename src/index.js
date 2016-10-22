import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { defaultSong } from "./scripts/songs";
import "./index.css";

ReactDOM.render(<App song={defaultSong} />, document.getElementById("app-container"));