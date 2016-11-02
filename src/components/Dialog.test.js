import React from "react";
import ReactDOM from "react-dom";
import Dialog from "./Dialog";

it("renders", () => {
  ReactDOM.render(<Dialog />, document.createElement("div"));
});

it("renders single child", () => {
  ReactDOM.render(<Dialog isOpen={true} onOpen={(event) => {}} onClose={(event) => {}}>Foo</Dialog>, document.createElement("div"));
});

it("renders multiple children", () => {
  ReactDOM.render(<Dialog isOpen={true} onOpen={(event) => {}} onClose={(event) => {}}><h1>Foo</h1><p>Bar</p></Dialog>, document.createElement("div"));
});