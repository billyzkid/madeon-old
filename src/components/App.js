import React from "react";
import Chrome from "./Chrome";
import { Actions } from "../scripts/constants";
import "./App.scss";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this._actions = {};

    Object.keys(Actions).forEach((key) => this._actions[key] = this._onAction.bind(this, Actions[key]));
  }

  render() {
    console.log("render", this.constructor.name);
    return (
      <div className="app">
        <Chrome actions={this._actions} />
      </div>
    );
  }

  _onAction(action) {
    console.log("_onAction", action);
  }
}