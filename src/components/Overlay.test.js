import React from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

it("renders", () => {
  ReactDOM.render(<Overlay />, document.createElement("div"));
});

it("renders props", () => {
  ReactDOM.render(<Overlay isVisible onShow={() => {}} onHide={() => {}} initialFocusEnabled escapeEnabled dismissEnabled>Foo</Overlay>, document.createElement("div"));
});