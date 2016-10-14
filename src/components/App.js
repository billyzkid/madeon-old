import React from "react";
import classnames from "classnames";
import Interface from "./Interface";
import Chrome from "./Chrome";
import { AppState } from "../scripts/constants";
import { loadImageAsync } from "../scripts/functions";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.default
    };
  }

  componentDidMount() {
    this.setState({ appState: AppState.loading });
    this._loadAsync().done(
      e => this.setState({ appState: AppState.loaded }),
      e => this.setState({ appState: AppState.failed })
    );
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.appState !== nextState.appState;
  }

  render() {
    let classNames = classnames({
      "app": true,
      "loading": this.state.appState === AppState.loading,
      "loaded": this.state.appState === AppState.loaded,
      "failed": this.state.appState === AppState.failed,
      "looping": this.state.appState === AppState.looping
    });

    return (
      <div className={classNames}>
        <Interface />
        <Chrome />
      </div>
    );
  }

  _loadAsync() {
    return window.WinJS.Promise.join([
      loadImageAsync(require("../images/background.jpg")),
      loadImageAsync(require("../images/chevron-background.png")),
      loadImageAsync(require("../images/chevron-bottom.png")),
      loadImageAsync(require("../images/chevron-top.png")),
      loadImageAsync(require("../images/logo.png"))
    ]);
  }
}

export default App;