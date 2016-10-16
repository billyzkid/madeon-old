import React from "react";
import classnames from "classnames";
import Chrome from "./Chrome";
import Error from "./Error";
import Interface from "./Interface";
import Wizard from "./Wizard";
import { AppState, ErrorType } from "../scripts/constants";
import { loadAudioContext, loadImage } from "../scripts/functions";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appState: AppState.default, errorType: ErrorType.none };
  }

  componentDidMount() {
    Promise.all([
      loadImage(require("../images/background.jpg")),
      loadImage(require("../images/chevron-background.png")),
      loadImage(require("../images/chevron-bottom.png")),
      loadImage(require("../images/chevron-top.png")),
      loadImage(require("../images/logo.png"))
    ]).then(loadAudioContext).then(
      (audioContext) => {
        this._audioContext = audioContext;
        this.setState({ appState: AppState.loaded, errorType: ErrorType.none });
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
      "looping": this.state.appState === AppState.looping,
      "show-wizard": false,
      "show-error": false
    });

    return (
      <div className={classNames}>
        <Interface />
        <Wizard />
        <Chrome />
        <Error type={this.state.errorType} />
      </div>
    );
  }
}

export default App;