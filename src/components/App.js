import React from "react";
import Button from "./Button";
import Dancer from "./Dancer";
import { UrlDialog, MidiDialog } from "./Dialog";
import { LoadError, AudioContextUnsupportedError } from "./Error";
// import Flipper from "./Flipper";
import Help from "./Help";
import Info from "./Info";
import Looper from "./Looper";
// import Overlay from "./Overlay";
import Player from "./Player";
import Splash from "./Splash";
import { getUrl } from "../scripts/functions";
import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this._showSplash = this._showSplash.bind(this);
    this._hideSplash = this._hideSplash.bind(this);
    this._showInfo = this._showInfo.bind(this);
    this._hideInfo = this._hideInfo.bind(this);
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
    this._onLaunchpadLinkClick = this._onLaunchpadLinkClick.bind(this);
    this._onMidiLinkClick = this._onMidiLinkClick.bind(this);
    this._onReloadLinkClick = this._onReloadLinkClick.bind(this);

    this.state = {
      url: getUrl(),
      isSplashVisible: false,
      isInfoVisible: false,
      isHelpVisible: false,
      isUrlDialogOpen: false,
      isMidiDialogOpen: false,
      isLoadErrorVisible: false,
      isAudioContextUnsupportedErrorVisible: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.samples !== nextProps.samples
      || this.state.url !== nextState.Url
      || this.state.isSplashVisible !== nextState.isSplashVisible
      || this.state.isInfoVisible !== nextState.isInfoVisible
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
        <Splash isVisible={this.state.isSplashVisible} onShow={this._showSplash} onHide={this._hideSplash} />
        <Info isVisible={this.state.isInfoVisible} onShow={this._showInfo} onHide={this._hideInfo} />
        <Help isVisible={this.state.isHelpVisible} onShow={this._showHelp} onHide={this._hideHelp} />
        <UrlDialog url={this.state.url} isOpen={this.state.isUrlDialogOpen} onOpen={this._openUrlDialog} onClose={this._closeUrlDialog} />
        <MidiDialog isOpen={this.state.isMidiDialogOpen} onOpen={this._openMidiDialog} onClose={this._closeMidiDialog} />
        <LoadError isVisible={this.state.isLoadErrorVisible} onShow={this._showLoadError} onHide={this._hideLoadError} />
        <AudioContextUnsupportedError isVisible={this.state.isAudioContextUnsupportedErrorVisible} onShow={this._showAudioContextUnsupportedError} onHide={this._hideAudioContextUnsupportedError} />
      </div>
    );
  }

  _showSplash() {
    this.setState({ isSplashVisible: true });
  }

  _hideSplash() {
    this.setState({ isSplashVisible: false });
  }

  _showInfo() {
    this.setState({ isInfoVisible: true });
  }

  _hideInfo() {
    this.setState({ isInfoVisible: false });
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
    this._showSplash();
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
    this._showInfo();
  }

  _onLaunchpadButtonClick(event) {
    this._showInfo();
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

  _onLaunchpadLinkClick(event) {
    event.preventDefault();
    this._showInfo();
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