import React from "react";
import ReactDOM from "react-dom";
import App from "./Button";

it("renders without crashing", () => {
  ReactDOM.render(<Button />, document.createElement("div"));
});