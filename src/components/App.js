import React from "react";
import classnames from "classnames";
import Grid from "./Grid";
import { SupportFlags, AppState, PlayerState, WizardState, ErrorType } from "../scripts/enums";
import { getSupport, delay, loadAudioContext, loadImage } from "../scripts/functions";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this._audioContext = null;
    this._onPlayerPlay = this._onPlayerPlay.bind(this);
    this._onWizardPlay = this._onWizardPlay.bind(this);
    this._onShareClick = this._onShareClick.bind(this);
    this._onCopyClick = this._onCopyClick.bind(this);
    this._onTwitterClick = this._onTwitterClick.bind(this);
    this._onFacebookClick = this._onFacebookClick.bind(this);
    this._onInfoClick = this._onInfoClick.bind(this);
    this._onAboutClick = this._onAboutClick.bind(this);
    this._onHelpClick = this._onHelpClick.bind(this);
    this._onPlayClick = this._onPlayClick.bind(this);
    this._onPauseClick = this._onPauseClick.bind(this);
    this._onStopClick = this._onStopClick.bind(this);
    this._onReloadClick = this._onReloadClick.bind(this);

    this.state = {
      support: getSupport(),
      appState: AppState.default,
      playerState: PlayerState.default,
      wizardState: WizardState.default,
      errorType: ErrorType.none,
      showShareButtons: false,
      showInfoButtons: false
    };
  }

  componentDidMount() {
    this.setState({ appState: AppState.loading });

    Promise.all([
      loadImage(require("../images/background.jpg")),
      loadImage(require("../images/chevron-background.png")),
      loadImage(require("../images/chevron-bottom.png")),
      loadImage(require("../images/chevron-top.png")),
      loadImage(require("../images/logo.png"))
    ]).then(loadAudioContext).then((audioContext) => {
      this._audioContext = audioContext;
      this.setState({ appState: AppState.loaded });
    }).then(delay(500)).then(() => {
      this.setState({ appState: AppState.ready });
    }).catch((error) => {
      let errorType = ErrorType[error] || ErrorType.unknown;
      this.setState({ appState: AppState.failed, errorType: errorType });
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.support !== nextState.support
      || this.state.appState !== nextState.appState
      || this.state.playerState !== nextState.playerState
      || this.state.wizardState !== nextState.wizardState
      || this.state.errorType !== nextState.errorType
      || this.state.showShareButtons !== nextState.showShareButtons
      || this.state.showInfoButtons !== nextState.showInfoButtons;
  }

  render() {
    let classNames = classnames("app", {
      "no-audio": (this.state.support & SupportFlags.audio) !== SupportFlags.audio,
      "no-touch": (this.state.support & SupportFlags.touch) !== SupportFlags.touch,
      "loading": this.state.appState === AppState.loading,
      "loaded": this.state.appState === AppState.loaded,
      "ready": this.state.appState === AppState.ready,
      "failed": this.state.appState === AppState.failed,
      "playing": this.state.playerState === PlayerState.playing,
      "paused": this.state.playerState === PlayerState.paused,
      "show-wizard-step-1": this.state.wizardState === WizardState.step1,
      "show-wizard-step-2": this.state.wizardState === WizardState.step2,
      "show-wizard-step-3": this.state.wizardState === WizardState.step3,
      "show-wizard-step-4": this.state.wizardState === WizardState.step4,
      "show-error-1": this.state.errorType === ErrorType.loadAudioContext,
      "show-error-2": this.state.errorType === ErrorType.loadImage || this.state.errorType === ErrorType.unknown,
      "show-buttons-1": this.state.showShareButtons,
      "show-buttons-2": this.state.showInfoButtons
    });

    // <div className="splash">
    //   <div className="flippers">
    //     <div className="flipper">
    //       <div className="flipper-front" />
    //       <div className="flipper-back" />
    //     </div>
    //     <div className="flipper">
    //       <div className="flipper-front" />
    //       <div className="flipper-back" />
    //     </div>
    //     <div className="flipper">
    //       <div className="flipper-front" />
    //       <div className="flipper-back" />
    //     </div>
    //     <div className="flipper">
    //       <div className="flipper-front" />
    //       <div className="flipper-back" />
    //     </div>
    //   </div>
    //   <div class="messages">
    //     <div className="message">Loading samples</div>
    //     <div className="message">Please wait</div>
    //     <div className="message">Tap to begin</div>
    //   </div>
    // </div>

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
          <Grid onPlay={this._onPlayerPlay} />
        </div>
        <div className="chrome">
          <div className="buttons">
            <div className="button text share" onClick={this._onShareClick}><span>Share</span></div>
            <div className="button text copy" onClick={this._onCopyClick}><span>Copy URL</span></div>
            <div className="button icon twitter" onClick={this._onTwitterClick}><span>Twitter</span></div>
            <div className="button icon facebook" onClick={this._onFacebookClick}><span>Facebook</span></div>
          </div>
          <div className="buttons">
            <div className="button text info" onClick={this._onInfoClick}><span>Info</span></div>
            <div className="button text about" onClick={this._onAboutClick}><span>About</span></div>
            <div className="button text help" onClick={this._onHelpClick}><span>Help</span></div>
          </div>
          <div className="buttons">
            {(() => {
              switch (this.state.playerState) {
                case PlayerState.playing:
                  return <div className="button icon pause" onClick={this._onPauseClick}><span>Pause</span></div>;
                default:
                  return <div className="button icon play" onClick={this._onPlayClick}><span>Play</span></div>;
              }
            })()}
          </div>
          <div className="buttons">
            <div className="button icon stop" onClick={this._onStopClick}><span>Stop</span></div>
          </div>
          <div className="footer">
            <a href="http://wmas.it" target="_blank">We Made This</a>
          </div>
          <div className="header">
            <a href="http://madeon.fr" target="_blank">Madeon - Adventure</a>
          </div>
          <div className="looper" />
        </div>
        <div className="wizard">
          <div className="wizard-header">Welcome to Madeon's Adventure Machine</div>
          <div className="wizard-step">To begin, press one of the blue squares, these are the drum loops, only one will play at a time.</div>
          <div className="wizard-step">Now, press one of the red squares, these are the bass loops, only one will play at a time.</div>
          <div className="wizard-step">Next, press one of the green squares, these are the sound loops, up to three can play at a time.</div>
          <div className="wizard-step">Done, now go make some music!</div>
          <Grid onPlay={this._onWizardPlay} />
        </div>
        <div className="errors">
          <div className="error">
            <p>This browser does not support the fancy new Web Audio API.</p>
            <p>Please use the latest <a href="http://apple.com/safari/" target="_blank">Safari</a>, <a href="http://google.com/chrome/" target="_blank">Chrome</a>, <a href="http://mozilla.org/firefox/" target="_blank">Firefox</a> or <a href="http://opera.com/" target="_blank">Opera</a> for the best experience.</p>
          </div>
          <div className="error">
            <p>Something went horribly wrong.</p>
            <p>Please <a onClick={this._onReloadClick}>reload</a> the page or try back later.</p>
          </div>
        </div>
      </div>
    );
  }

  _onPlayerPlay(event) {
    this.setState({ playerState: PlayerState.playing });
  }

  _onWizardPlay(event) {
    this.setState({ playerState: PlayerState.playing });

    switch (this.state.wizardState) {
      case WizardState.step1:
        this.setState({ wizardState: WizardState.step2 });
        break;

      case WizardState.step2:
        this.setState({ wizardState: WizardState.step3 });
        break;

      case WizardState.step3:
        this.setState({ wizardState: WizardState.step4 });
        setTimeout(() => this.setState({ wizardState: WizardState.default }), 3000);
        break;
    }
  }

  _onShareClick(event) {
    this.setState({ showShareButtons: !this.state.showShareButtons });
  }

  _onCopyClick(event) {
    debugger;
  }

  _onTwitterClick(event) {
    debugger;
  }

  _onFacebookClick(event) {
    debugger;
  }

  _onInfoClick(event) {
    this.setState({ showInfoButtons: !this.state.showInfoButtons });
  }

  _onAboutClick(event) {
    debugger;
  }

  _onHelpClick(event) {
    this.setState({ wizardState: WizardState.step1 });
  }

  _onPlayClick(event) {
    this.setState({ playerState: PlayerState.playing });
  }

  _onPauseClick(event) {
    this.setState({ playerState: PlayerState.paused });
  }

  _onStopClick(event) {
    this.setState({ playerState: PlayerState.default });
  }

  _onReloadClick(event) {
    event.preventDefault();
    window.location.reload(true);
  }
}

export default App;