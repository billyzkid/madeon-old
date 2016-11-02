import React from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

it("renders", () => {
  ReactDOM.render(<Overlay />, document.createElement("div"));
});

it("renders single child", () => {
  ReactDOM.render(<Overlay isVisible={true} onShow={(event) => {}} onHide={(event) => {}}>Foo</Overlay>, document.createElement("div"));
});

it("renders multiple children", () => {
  ReactDOM.render(<Overlay isVisible={true} onShow={(event) => {}} onHide={(event) => {}}><h1>Foo</h1><p>Bar</p></Overlay>, document.createElement("div"));
});