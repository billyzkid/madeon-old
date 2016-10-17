import React from "react";
import ReactDOM from "react-dom";
import Chrome from "./Chrome";

it("renders without crashing", () => {
  ReactDOM.render(<Chrome />, document.createElement("div"));
});