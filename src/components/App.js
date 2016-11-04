import React from "react";
import Button from "./Button";
import Dancer from "./Dancer";
import Dialog from "./Dialog";
import Error from "./Error";
import Flipper from "./Flipper";
import Help from "./Help";
import Info from "./Info";
import Looper from "./Looper";
import Player from "./Player";
import Splash from "./Splash";
import { getUrl } from "../scripts/functions";
import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this._showHelp = this._showHelp.bind(this);
    this._hideHelp = this._hideHelp.bind(this);
    this._openUrlDialog = this._openUrlDialog.bind(this);
    this._closeUrlDialog = this._closeUrlDialog.bind(this);
    this._openMidiDialog = this._openMidiDialog.bind(this);
    this._closeMidiDialog = this._closeMidiDialog.bind(this);
    this._showLoadError = this._showLoadError.bind(this);
    this._hideLoadError = this._hideLoadError.bind(this);
    this._showAudioContextUnsupportedError = this._showAudioContextUnsupportedError.bind(this);
    this._hideAudioContextUnsupportedError = this._hideAudioContextUnsupportedError.bind(this);

    this._onPlayerClick = this._onPlayerClick.bind(this);
    this._onShareButtonClick = this._onShareButtonClick.bind(this);
    this._onUrlButtonClick = this._onUrlButtonClick.bind(this);
    this._onTwitterButtonClick = this._onTwitterButtonClick.bind(this);
    this._onFacebookButtonClick = this._onFacebookButtonClick.bind(this);
    this._onInfoButtonClick = this._onInfoButtonClick.bind(this);
    this._onAboutButtonClick = this._onAboutButtonClick.bind(this);
    this._onLaunchpadButtonClick = this._onLaunchpadButtonClick.bind(this);
    this._onHelpButtonClick = this._onHelpButtonClick.bind(this);
    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
    this._onPauseButtonClick = this._onPauseButtonClick.bind(this);
    this._onStopButtonClick = this._onStopButtonClick.bind(this);

    this._onMidiLinkClick = this._onMidiLinkClick.bind(this);
    this._onReloadLinkClick = this._onReloadLinkClick.bind(this);

    this.state = {
      isHelpVisible: false,
      isUrlDialogOpen: false,
      isMidiDialogOpen: false,
      isLoadErrorVisible: false,
      isAudioContextUnsupportedErrorVisible: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.samples !== nextProps.samples
      || this.state.isHelpVisible !== nextState.isHelpVisible
      || this.state.isUrlDialogOpen !== nextState.isUrlDialogOpen
      || this.state.isMidiDialogOpen !== nextState.isMidiDialogOpen
      || this.state.isLoadErrorVisible !== nextState.isLoadErrorVisible
      || this.state.isAudioContextUnsupportedErrorVisible !== nextState.isAudioContextUnsupportedErrorVisible;
  }

  render() {
    console.log("render", this.constructor.name);

    return (
      <div className="app">
        <div className="header">
          <a href="http://madeon.fr" target="_blank">Madeon's Adventure Machine</a>
        </div>
        <div className="footer">
          <a href="http://wmas.it" target="_blank">We Made This</a>
        </div>
        <div className="buttons">
          <section>
            <Button label="Share" onClick={this._onShareButtonClick} />
            <Button icon="&#xf064;" title="Share URL" onClick={this._onUrlButtonClick} />
            <Button icon="&#xf099;" title="Share on Twitter" onClick={this._onTwitterButtonClick} />
            <Button icon="&#xf09a;" title="Share on Facebook" onClick={this._onFacebookButtonClick} />
          </section>
          <section>
            <Button label="Info" onClick={this._onInfoButtonClick} />
            <Button label="About" onClick={this._onAboutButtonClick} />
            <Button icon="&#xf287;" title="Connect your Launchpad" onClick={this._onLaunchpadButtonClick} />
            <Button icon="&#xf128;" title="Help!" onClick={this._onHelpButtonClick} />
          </section>
          <section>
            <Button icon="&#xf04b;" title="Play" onClick={this._onPlayButtonClick} />
            <Button icon="&#xf04c;" title="Pause" onClick={this._onPauseButtonClick} />
          </section>
          <section>
            <Button icon="&#xf04d;" title="Stop" onClick={this._onStopButtonClick} />
          </section>
        </div>
        <Looper />
        <Dancer />
        <Player samples={this.props.samples} onClick={this._onPlayerClick} />
        <Splash>
          <section>
            <Flipper />
            <h1>Loading samples</h1>
            <h2>Please wait</h2>
          </section>
          <section>
            <h1>Tap to begin</h1>
          </section>
        </Splash>
        <Info>
          <section>
            <h1>About</h1>
            <p>Make your own mix with samples from Madeon's debut album Adventure.</p>
            <p><a>Got a Launchpad?</a></p>
          </section>
          <section>
            <h1>Connect your Launchpad</h1>
            <ol>
              <li><a href="" onClick={this._onMidiLinkClick}>Enable the Web MIDI API</a></li>
              <li>Plug in your Launchpad</li>
              <li>Restart your browser</li>
              <li>Revisit this page</li>
              <li>Make your mix</li>
            </ol>
          </section>
        </Info>
        <Help isVisible={this.state.isHelpVisible} onShow={this._showHelp} onHide={this._hideHelp}>
          {/* <Player samples={this.props.samples} onClick={this._onPlayerClick} /> */}
          <h1>Welcome to Madeon's Adventure Machine</h1>
          <ol>
            <li>To begin, press one of the blue squares, these are the drum loops, only one will play at a time.</li>
            <li>Now, press one of the red squares, these are the bass loops, only one will play at a time.</li>
            <li>Next, press one of the green squares, these are the sound loops, up to three can play at a time.</li>
            <li>Done, now go make some music!</li>
          </ol>
        </Help>
        <Dialog isOpen={this.state.isUrlDialogOpen} onOpen={this._openUrlDialog} onClose={this._closeUrlDialog}>
          <h1>Your mix URL</h1>
          <p>Copy the following URL, and then share it with the world.</p>
          <input type="url" value={getUrl()} readOnly />
        </Dialog>
        <Dialog isOpen={this.state.isMidiDialogOpen} onOpen={this._openMidiDialog} onClose={this._closeMidiDialog}>
          <h1>Enable the Web MIDI API</h1>
          <p>Copy the following URL, paste it into a new tab, press Enter, and then click Enable.</p>
          <input type="url" value="chrome://flags/#enable-web-midi" readOnly />
        </Dialog>
        <Error isVisible={this.state.isLoadErrorVisible} onShow={this._showLoadError} onHide={this._hideLoadError}>
          <p>Something went horribly wrong.</p>
          <p>Please <a href="" onClick={this._onReloadLinkClick}>reload</a> the page or try back later.</p>
        </Error>
        <Error isVisible={this.state.isAudioContextUnsupportedErrorVisible} onShow={this._showAudioContextUnsupportedError} onHide={this._hideAudioContextUnsupportedError}>
          <p>This browser does not support the fancy new Web Audio API.</p>
          <p>Please use the latest <a href="http://apple.com/safari/" target="_blank">Safari</a>, <a href="http://google.com/chrome/" target="_blank">Chrome</a>, <a href="http://mozilla.org/firefox/" target="_blank">Firefox</a> or <a href="http://opera.com/" target="_blank">Opera</a> for the best experience.</p>
        </Error>
      </div>
    );
  }

  _showHelp() {
    this.setState({ isHelpVisible: true });
  }

  _hideHelp() {
    this.setState({ isHelpVisible: false });
  }

  _openUrlDialog() {
    this.setState({ isUrlDialogOpen: true });
  }

  _closeUrlDialog() {
    this.setState({ isUrlDialogOpen: false });
  }

  _openMidiDialog() {
    this.setState({ isMidiDialogOpen: true });
  }

  _closeMidiDialog() {
    this.setState({ isMidiDialogOpen: false });
  }

  _showLoadError() {
    this.setState({ isLoadErrorVisible: true });
  }

  _hideLoadError() {
    this.setState({ isLoadErrorVisible: false });
  }

  _showAudioContextUnsupportedError() {
    this.setState({ isAudioContextUnsupportedErrorVisible: true });
  }

  _hideAudioContextUnsupportedError() {
    this.setState({ isAudioContextUnsupportedErrorVisible: false });
  }

  _onPlayerClick(event, sample) {
    debugger;
  }

  _onShareButtonClick(event) {
    this._showLoadError();
  }

  _onUrlButtonClick(event) {
    this._openUrlDialog();
  }

  _onTwitterButtonClick(event) {
    debugger;
  }

  _onFacebookButtonClick(event) {
    debugger;
  }

  _onInfoButtonClick(event) {
    debugger;
  }

  _onAboutButtonClick(event) {
    debugger;
  }

  _onLaunchpadButtonClick(event) {
    debugger;
  }

  _onHelpButtonClick(event) {
    this._showHelp();
  }

  _onPlayButtonClick(event) {
    debugger;
  }

  _onPauseButtonClick(event) {
    debugger;
  }

  _onStopButtonClick(event) {
    debugger;
  }

  _onMidiLinkClick(event) {
    event.preventDefault();
    this._openMidiDialog();
  }

  _onReloadLinkClick(event) {
    event.preventDefault();
    window.location.reload(true);
  }
}

App.propTypes = {
  samples: React.PropTypes.arrayOf(React.PropTypes.object)
};

App.defaultProps = {
  samples: []
};