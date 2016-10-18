import React from "react";
import classnames from "classnames";
import Player from "./Player";
import Chrome from "./Chrome";
import Wizard from "./Wizard";
import Errors from "./Errors";
import { AppState, ErrorType } from "../scripts/constants";
import { loadAudioContext, loadImage } from "../scripts/functions";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this._reload = this._reload.bind(this);
    this.state = { appState: AppState.default, errorType: ErrorType.none };
  }

  componentDidMount() {
    this.setState({ appState: AppState.loading });

    Promise.all([
      loadImage(require("../images/background.jpg")),
      loadImage(require("../images/chevron-background.png")),
      loadImage(require("../images/chevron-bottom.png")),
      loadImage(require("../images/chevron-top.png")),
      loadImage(require("../images/logo.png"))
    ]).then(loadAudioContext).then(
      (audioContext) => {
        this._audioContext = audioContext;
        this.setState({ appState: AppState.loaded });
      },
      (errorType) => {
        this._audioContext = null;
        this.setState({ appState: AppState.failed, errorType: errorType });
      }
    );
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.appState !== nextState.appState || this.state.errorType !== nextState.errorType;
  }

  render() {
    let classNames = classnames({
      "app": true,
      "loading": this.state.appState === AppState.loading,
      "loaded": this.state.appState === AppState.loaded,
      "failed": this.state.appState === AppState.failed,
      "playing": true,
      "show-wizard-step-1": false,
      "show-wizard-step-2": false,
      "show-wizard-step-3": false,
      "show-wizard-step-4": false,
      "show-error-1": false,
      "show-error-2": false,
      "no-touch": false
    });

    return (
      <div className={classNames}>
        <Player />
        <Chrome />
        <Wizard />
        <Errors onReload={this._reload} />
      </div>
    );
  }

  _reload(e) {
    e.preventDefault();
    window.location.reload(true);
  }
}

export default App;