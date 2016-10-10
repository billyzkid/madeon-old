import React from "react";
import ReactDOM from "react-dom";
import App from "./Chrome";

it("renders without crashing", () => {
  ReactDOM.render(<Chrome/>, document.createElement("div"));
});