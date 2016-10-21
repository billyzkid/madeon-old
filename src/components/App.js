import React from "react";
import classnames from "classnames";
import Grid from "./Grid";
import { SupportFlags, AppState, PlayerState, WizardState, ErrorType, GridButtonState } from "../scripts/enums";
import { getSupport, delay, loadAudioContext, loadImage } from "../scripts/functions";
import { defaultSong } from "../scripts/songs";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this._audioContext = null;
    this._onPlayerGridClick = this._onPlayerGridClick.bind(this);
    this._onWizardGridClick = this._onWizardGridClick.bind(this);
    this._onShareButtonClick = this._onShareButtonClick.bind(this);
    this._onCopyButtonClick = this._onCopyButtonClick.bind(this);
    this._onTwitterButtonClick = this._onTwitterButtonClick.bind(this);
    this._onFacebookButtonClick = this._onFacebookButtonClick.bind(this);
    this._onInfoButtonClick = this._onInfoButtonClick.bind(this);
    this._onAboutButtonClick = this._onAboutButtonClick.bind(this);
    this._onHelpButtonClick = this._onHelpButtonClick.bind(this);
    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
    this._onPauseButtonClick = this._onPauseButtonClick.bind(this);
    this._onStopButtonClick = this._onStopButtonClick.bind(this);
    this._onReloadLinkClick = this._onReloadLinkClick.bind(this);

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

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return this.state.support !== nextState.support
  //     || this.state.appState !== nextState.appState
  //     || this.state.playerState !== nextState.playerState
  //     || this.state.wizardState !== nextState.wizardState
  //     || this.state.errorType !== nextState.errorType
  //     || this.state.showShareButtons !== nextState.showShareButtons
  //     || this.state.showInfoButtons !== nextState.showInfoButtons;
  // }

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
          <Grid song={this.props.song} onClick={this._onPlayerGridClick} />
        </div>
        <div className="chrome">
          <div className="buttons">
            <div className="button text share" onClick={this._onShareButtonClick}><span>Share</span></div>
            <div className="button text copy" onClick={this._onCopyButtonClick}><span>Copy URL</span></div>
            <div className="button icon twitter" onClick={this._onTwitterButtonClick}><span>Twitter</span></div>
            <div className="button icon facebook" onClick={this._onFacebookButtonClick}><span>Facebook</span></div>
          </div>
          <div className="buttons">
            <div className="button text info" onClick={this._onInfoButtonClick}><span>Info</span></div>
            <div className="button text about" onClick={this._onAboutButtonClick}><span>About</span></div>
            <div className="button text help" onClick={this._onHelpButtonClick}><span>Help</span></div>
          </div>
          <div className="buttons">
            {(this.state.playerState === PlayerState.playing) ?
              <div className="button icon pause" onClick={this._onPauseButtonClick}><span>Pause</span></div> :
              <div className="button icon play" onClick={this._onPlayButtonClick}><span>Play</span></div>}
          </div>
          <div className="buttons">
            <div className="button icon stop" onClick={this._onStopButtonClick}><span>Stop</span></div>
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
          <div className="player">
            <Grid song={this.props.song} onClick={this._onWizardGridClick} />
          </div>
          <div className="instructions">
            <h1>Welcome to Madeon's Adventure Machine</h1>
            <ol>
              <li>To begin, press one of the blue squares, these are the drum loops, only one will play at a time.</li>
              <li>Now, press one of the red squares, these are the bass loops, only one will play at a time.</li>
              <li>Next, press one of the green squares, these are the sound loops, up to three can play at a time.</li>
              <li>Done, now go make some music!</li>
            </ol>
          </div>
        </div>
        <div className="errors">
          <div className="error">
            <p>This browser does not support the fancy new Web Audio API.</p>
            <p>Please use the latest <a href="http://apple.com/safari/" target="_blank">Safari</a>, <a href="http://google.com/chrome/" target="_blank">Chrome</a>, <a href="http://mozilla.org/firefox/" target="_blank">Firefox</a> or <a href="http://opera.com/" target="_blank">Opera</a> for the best experience.</p>
          </div>
          <div className="error">
            <p>Something went horribly wrong.</p>
            <p>Please <a onClick={this._onReloadLinkClick}>reload</a> the page or try back later.</p>
          </div>
        </div>
      </div>
    );
  }

  _updateItemState(item) {
    switch (item.state) {
      case GridButtonState.default:
        item.state = GridButtonState.waiting;
        break;

      case GridButtonState.active:
        item.state = GridButtonState.default;
        break;

      case GridButtonState.waiting:
        item.state = GridButtonState.default;
        break;

      default:
        break;
    }
  }

  _onPlayerGridClick(item) {
    this._updateItemState(item);
    this.setState({ playerState: PlayerState.playing });
  }

  _onWizardGridClick(item) {
    this._updateItemState(item);

    switch (this.state.wizardState) {
      case WizardState.step1:
        this.setState({ playerState: PlayerState.playing, wizardState: WizardState.step2 });
        break;

      case WizardState.step2:
        this.setState({ playerState: PlayerState.playing, wizardState: WizardState.step3 });
        break;

      case WizardState.step3:
        this.setState({ playerState: PlayerState.playing, wizardState: WizardState.step4 });
        setTimeout(() => this.setState({ wizardState: WizardState.default }), 3000);
        break;

      default:
        this.setState({ playerState: PlayerState.playing });
        break;
    }
  }

  _onShareButtonClick(event) {
    this.setState({ showShareButtons: !this.state.showShareButtons });
  }

  _onCopyButtonClick(event) {
    debugger;
  }

  _onTwitterButtonClick(event) {
    debugger;
  }

  _onFacebookButtonClick(event) {
    debugger;
  }

  _onInfoButtonClick(event) {
    this.setState({ showInfoButtons: !this.state.showInfoButtons });
  }

  _onAboutButtonClick(event) {
    debugger;
  }

  _onHelpButtonClick(event) {
    this.setState({ wizardState: WizardState.step1 });
  }

  _onPlayButtonClick(event) {
    this.setState({ playerState: PlayerState.playing });
  }

  _onPauseButtonClick(event) {
    this.setState({ playerState: PlayerState.paused });
  }

  _onStopButtonClick(event) {
    this.props.song.forEach((item) => item.state = GridButtonState.default);
    this.setState({ playerState: PlayerState.default });
  }

  _onReloadLinkClick(event) {
    event.preventDefault();
    window.location.reload(true);
  }
}

App.propTypes = {
  song: React.PropTypes.array
};

App.defaultProps = {
  song: defaultSong
};

export default App;