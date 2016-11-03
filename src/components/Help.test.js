import React from "react";
import ReactDOM from "react-dom";
import Help from "./Help";

it("renders", () => {
  ReactDOM.render(<Help />, document.createElement("div"));
});

it("renders props", () => {
  ReactDOM.render(<Help isVisible onShow={() => {}} onHide={() => {}}>Foo</Help>, document.createElement("div"));
});