import React from "react";
import ReactDOM from "react-dom";
import Dialog from "./Dialog";

it("renders", () => {
  ReactDOM.render(<Dialog />, document.createElement("div"));
});

it("renders with all properties", () => {
  ReactDOM.render(<Dialog isOpen={true} onOpen={(event) => {}} onClose={(event) => {}} closeOnEscape closeOnClick closeOnButtonClick><h1>Foo</h1><p>Bar</p></Dialog>, document.createElement("div"));
});