import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { defaultSamples } from "./scripts/samples";
import "./index.css";

ReactDOM.render(<App samples={defaultSamples} />, document.getElementById("app-container"));