import React from "react";
import ReactDOM from "react-dom";
import Dialog from "./Dialog";

it("renders", () => {
  ReactDOM.render(<Dialog />, document.createElement("div"));
});

it("renders props", () => {
  ReactDOM.render(<Dialog isOpen onOpen={() => {}} onClose={() => {}}>Foo</Dialog>, document.createElement("div"));
});