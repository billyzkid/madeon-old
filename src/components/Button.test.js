import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

it("renders", () => {
  ReactDOM.render(<Button />, document.createElement("div"));
});

it("renders props", () => {
  ReactDOM.render(<Button icon="&#xf000;" label="Bar" title="Baz" onClick={(event) => {}} />, document.createElement("div"));
});