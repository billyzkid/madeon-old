import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

it("renders", () => {
  ReactDOM.render(<Button />, document.createElement("div"));
});

it("renders icon", () => {
  ReactDOM.render(<Button icon="&#xf000;" title="Bar" onClick={(event) => {}} />, document.createElement("div"));
});

it("renders icon and label", () => {
  ReactDOM.render(<Button icon="&#xf000;" label="Bar" title="Baz" onClick={(event) => {}} />, document.createElement("div"));
});

it("renders label", () => {
  ReactDOM.render(<Button label="Foo" title="Bar" onClick={(event) => {}} />, document.createElement("div"));
});