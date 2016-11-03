import React from "react";
import ReactDOM from "react-dom";
import Error from "./Error";

it("renders", () => {
  ReactDOM.render(<Error />, document.createElement("div"));
});

it("renders props", () => {
  ReactDOM.render(<Error isVisible onShow={() => {}} onHide={() => {}}>Foo</Error>, document.createElement("div"));
});