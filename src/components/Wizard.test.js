import React from "react";
import ReactDOM from "react-dom";
import Wizard from "./Wizard";

it("renders", () => {
  ReactDOM.render(<Wizard />, document.createElement("div"));
});

it("renders single child", () => {
  ReactDOM.render(<Wizard isVisible={true} onShow={(event) => {}} onHide={(event) => {}}>Foo</Wizard>, document.createElement("div"));
});

it("renders multiple children", () => {
  ReactDOM.render(<Wizard isVisible={true} onShow={(event) => {}} onHide={(event) => {}}><h1>Foo</h1><p>Bar</p></Wizard>, document.createElement("div"));
});