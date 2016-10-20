import React from "react";
import classnames from "classnames";
import Grid from "./Grid";
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
      });
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return this.state.appState !== nextState.appState || this.state.errorType !== nextState.errorType;
  // }

  render() {
    let classNames = classnames({
      "app": true,
      "no-touch": true,
      "loading": this.state.appState === AppState.loading,
      "loaded": this.state.appState === AppState.loaded,
      "failed": this.state.appState === AppState.failed,
      "playing": false,
      "show-button-group-1": true,
      "show-button-group-2": true,
      "show-button-group-3": true,
      "show-button-group-4": true,
      "show-wizard-step-1": false,
      "show-wizard-step-2": false,
      "show-wizard-step-3": false,
      "show-wizard-step-4": false,
      "show-error-1": false,
      "show-error-2": false
    });

    return (
      <div className={classNames}>
        <div className="player">
          <div className="chevrons">
            <div className="chevron">
              <div className="chevron-part" />
              <div className="chevron-part" />
            </div>
            <div className="chevron">
              <div className="chevron-part" />
              <div className="chevron-part" />
            </div>
          </div>
          <Grid />
        </div>
        <div className="buttons">
          <div className="button-group-1">
            <div className="button share"><span>Share</span></div>
            <div className="button copy"><span>Copy URL</span></div>
            <div className="button icon twitter"><span>Twitter</span></div>
            <div className="button icon facebook"><span>Facebook</span></div>
          </div>
          <div className="button-group-2">
            <div className="button info"><span>Info</span></div>
            <div className="button about"><span>About</span></div>
            <div className="button help"><span>Help</span></div>
          </div>
          <div className="button-group-3">
            <div className="button icon play"><span>Play</span></div>
            <div className="button icon pause"><span>Pause</span></div>
          </div>
          <div className="button-group-4">
            <div className="button icon stop"><span>Stop</span></div>
          </div>
        </div>
        <div className="footer">
          <a href="http://wmas.it" target="_blank">We Made This</a>
        </div>
        <div className="header">
          <a href="http://madeon.fr" target="_blank">Madeon - Adventure</a>
        </div>
        <div className="looper" />
        <div className="wizard">
          <div className="wizard-header">Welcome to Madeon's Adventure Machine</div>
          <div className="wizard-step">To begin, press one of the blue squares, these are the drum loops, only one will play at a time.</div>
          <div className="wizard-step">Now, press one of the red squares, these are the bass loops, only one will play at a time.</div>
          <div className="wizard-step">Next, press one of the green squares, these are the sound loops, up to three can play at a time.</div>
          <div className="wizard-step">Done, now go make some music!</div>
          <Grid />
        </div>
        <div className="errors">
          <div className="error">
            <p>This browser does not support the fancy new Web Audio API.</p>
            <p>Please use the latest <a href="http://apple.com/safari/" target="_blank">Safari</a>, <a href="http://google.com/chrome/" target="_blank">Chrome</a>, <a href="http://mozilla.org/firefox/" target="_blank">Firefox</a> or <a href="http://opera.com/" target="_blank">Opera</a> for the best experience.</p>
          </div>
          <div className="error">
            <p>Something went horribly wrong.</p>
            <p>Please <a onClick={this._reload}>reload</a> the page or try back later.</p>
          </div>
        </div>
      </div>
    );
  }

  _reload(e) {
    e.preventDefault();
    window.location.reload(true);
  }
}

export default App;