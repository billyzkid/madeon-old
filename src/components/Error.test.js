import React from "react";
import ReactDOM from "react-dom";
import Error from "./Error";

it("renders", () => {
  ReactDOM.render(<Error />, document.createElement("div"));
});

it("renders single child", () => {
  ReactDOM.render(<Error isVisible={true} onShow={(event) => {}} onHide={(event) => {}}>Foo</Error>, document.createElement("div"));
});

it("renders multiple children", () => {
  ReactDOM.render(<Error isVisible={true} onShow={(event) => {}} onHide={(event) => {}}><h1>Foo</h1><p>Bar</p></Error>, document.createElement("div"));
});