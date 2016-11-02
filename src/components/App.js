import React from "react";
import Button from "./Button";
import Dancer from "./Dancer";
import Dialog from "./Dialog";
import Error from "./Error";
import Flipper from "./Flipper";
import Looper from "./Looper";
import Overlay from "./Overlay";
import Player from "./Player";
import Wizard from "./Wizard";
import { getUrl } from "../scripts/functions";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

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
    this._onLoadingOverlayShow = this._onLoadingOverlayShow.bind(this);
    this._onLoadingOverlayHide = this._onLoadingOverlayHide.bind(this);
    this._onTouchOverlayShow = this._onTouchOverlayShow.bind(this);
    this._onTouchOverlayHide = this._onTouchOverlayHide.bind(this);
    this._onAboutOverlayShow = this._onAboutOverlayShow.bind(this);
    this._onAboutOverlayHide = this._onAboutOverlayHide.bind(this);
    this._onAboutOverlayLaunchpadLinkClick = this._onAboutOverlayLaunchpadLinkClick.bind(this);
    this._onAboutOverlayCloseButtonClick = this._onAboutOverlayCloseButtonClick.bind(this);
    this._onLaunchpadOverlayShow = this._onLaunchpadOverlayShow.bind(this);
    this._onLaunchpadOverlayHide = this._onLaunchpadOverlayHide.bind(this);
    this._onLaunchpadOverlayMidiLinkClick = this._onLaunchpadOverlayMidiLinkClick.bind(this);
    this._onLaunchpadOverlayCloseButtonClick = this._onLaunchpadOverlayCloseButtonClick.bind(this);
    this._onHelpWizardShow = this._onHelpWizardShow.bind(this);
    this._onHelpWizardHide = this._onHelpWizardHide.bind(this);
    this._onHelpWizardCloseButtonClick = this._onHelpWizardCloseButtonClick.bind(this);
    this._onAudioContextUnsupportedErrorShow = this._onAudioContextUnsupportedErrorShow.bind(this);
    this._onAudioContextUnsupportedErrorHide = this._onAudioContextUnsupportedErrorHide.bind(this);
    this._onLoadErrorShow = this._onLoadErrorShow.bind(this);
    this._onLoadErrorHide = this._onLoadErrorHide.bind(this);
    this._onLoadErrorReloadLinkClick = this._onLoadErrorReloadLinkClick.bind(this);
    this._onUrlDialogOpen = this._onUrlDialogOpen.bind(this);
    this._onUrlDialogClose = this._onUrlDialogClose.bind(this);
    this._onUrlDialogCloseButtonClick = this._onUrlDialogCloseButtonClick.bind(this);
    this._onMidiDialogOpen = this._onMidiDialogOpen.bind(this);
    this._onMidiDialogClose = this._onMidiDialogClose.bind(this);
    this._onMidiDialogCloseButtonClick = this._onMidiDialogCloseButtonClick.bind(this);

    this.state = {
      isLoadingOverlayVisible: false,
      isTouchOverlayVisible: false,
      isAboutOverlayVisible: false,
      isLaunchpadOverlayVisible: false,
      isHelpWizardVisible: false,
      isAudioContextUnsupportedErrorVisible: false,
      isLoadErrorVisible: false,
      isUrlDialogOpen: false,
      isMidiDialogOpen: false
    };
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <a href="http://madeon.fr" target="_blank">Madeon's Adventure Machine</a>
        </div>
        <div className="footer">
          <a href="http://wmas.it" target="_blank">We Made This</a>
        </div>
        <div className="buttons">
          <Button label="Share" onClick={this._onShareButtonClick} />
          <Button icon="&#xf064;" title="Share URL" onClick={this._onUrlButtonClick} />
          <Button icon="&#xf099;" title="Share on Twitter" onClick={this._onTwitterButtonClick} />
          <Button icon="&#xf09a;" title="Share on Facebook" onClick={this._onFacebookButtonClick} />
        </div>
        <div className="buttons">
          <Button label="Info" onClick={this._onInfoButtonClick} />
          <Button label="About" onClick={this._onAboutButtonClick} />
          <Button icon="&#xf287;" title="Connect your Launchpad" onClick={this._onLaunchpadButtonClick} />
          <Button icon="&#xf128;" title="Help!" onClick={this._onHelpButtonClick} />
        </div>
        <div className="buttons">
          <Button icon="&#xf04b;" title="Play" onClick={this._onPlayButtonClick} />
          <Button icon="&#xf04c;" title="Pause" onClick={this._onPauseButtonClick} />
        </div>
        <div className="buttons">
          <Button icon="&#xf04d;" title="Stop" onClick={this._onStopButtonClick} />
        </div>
        <Looper />
        <Dancer />
        <Player samples={this.props.samples} onClick={this._onPlayerClick} />
        <Overlay isVisible={this.state.isLoadingOverlayVisible} onShow={this._onLoadingOverlayShow} onHide={this._onLoadingOverlayHide}>
          <Flipper />
          <h1>Loading samples</h1>
          <h2>Please wait</h2>
        </Overlay>
        <Overlay isVisible={this.state.isTouchOverlayVisible} onShow={this._onTouchOverlayShow} onHide={this._onTouchOverlayHide}>
          <h1>Tap to begin</h1>
        </Overlay>
        <Overlay isVisible={this.state.isAboutOverlayVisible} onShow={this._onAboutOverlayShow} onHide={this._onAboutOverlayHide}>
          <h1>About</h1>
          <p>Make your own mix with samples from Madeon's debut album Adventure.</p>
          <a onClick={this._onAboutOverlayLaunchpadLinkClick}>Got a Launchpad?</a>
          <Button label="Close" onClick={this._onAboutOverlayCloseButtonClick} />
        </Overlay>
        <Overlay isVisible={this.state.isLaunchpadOverlayVisible} onShow={this._onLaunchpadOverlayShow} onHide={this._onLaunchpadOverlayHide}>
          <h1>Connect your Launchpad</h1>
          <ol>
            <li><a onClick={this._onLaunchpadOverlayMidiLinkClick}>Enable the Web MIDI API</a></li>
            <li>Plug in your Launchpad</li>
            <li>Restart your browser</li>
            <li>Revisit this page</li>
            <li>Make your mix</li>
          </ol>
          <Button label="Close" onClick={this._onLaunchpadOverlayCloseButtonClick} />
        </Overlay>
        <Wizard isVisible={this.state.isHelpWizardVisible} onShow={this._onHelpWizardShow} onHide={this._onHelpWizardHide}>
          <Player samples={this.props.samples} onClick={this._onPlayerClick} />
          <h1>Welcome to Madeon's Adventure Machine</h1>
          <ol>
            <li>To begin, press one of the blue squares, these are the drum loops, only one will play at a time.</li>
            <li>Now, press one of the red squares, these are the bass loops, only one will play at a time.</li>
            <li>Next, press one of the green squares, these are the sound loops, up to three can play at a time.</li>
            <li>Done, now go make some music!</li>
          </ol>
          <Button label="Close" onClick={this._onHelpWizardCloseButtonClick} />
        </Wizard>
        <Error isVisible={this.state.isAudioContextUnsupportedErrorVisible} onShow={this._onAudioContextUnsupportedErrorShow} onHide={this._onAudioContextUnsupportedErrorHide}>
          <p>This browser does not support the fancy new Web Audio API.</p>
          <p>Please use the latest <a href="http://apple.com/safari/" target="_blank">Safari</a>, <a href="http://google.com/chrome/" target="_blank">Chrome</a>, <a href="http://mozilla.org/firefox/" target="_blank">Firefox</a> or <a href="http://opera.com/" target="_blank">Opera</a> for the best experience.</p>
        </Error>
        <Error isVisible={this.state.isLoadErrorVisible} onShow={this._onLoadErrorShow} onHide={this._onLoadErrorHide}>
          <p>Something went horribly wrong.</p>
          <p>Please <a onClick={this._onLoadErrorReloadLinkClick}>reload</a> the page or try back later.</p>
        </Error>
        <Dialog isOpen={this.state.isUrlDialogOpen} onOpen={this._onUrlDialogOpen} onClose={this._onUrlDialogClose}>
          <h1>Your mix URL</h1>
          <p>Copy the following URL, and then share it with the world.</p>
          <input type="url" value={getUrl()} readOnly />
          <Button icon="&#xf00d;" title="Close" onClick={this._onUrlDialogCloseButtonClick} />
        </Dialog>
        <Dialog isOpen={this.state.isMidiDialogOpen} onOpen={this._onMidiDialogOpen} onClose={this._onMidiDialogClose}>
          <h1>Enable the Web MIDI API</h1>
          <p>Copy the following URL, paste it into a new tab, press Enter, and then click Enable.</p>
          <input type="url" value="chrome://flags/#enable-web-midi" readOnly />
          <Button icon="&#xf00d;" title="Close" onClick={this._onMidiDialogCloseButtonClick} />
        </Dialog>
      </div>
    );
  }
  
  _onPlayerClick(event, sample) {
    debugger;
  }

  _onShareButtonClick(event) {
    debugger;
  }

  _onUrlButtonClick(event) {
    debugger;
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
    debugger;
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

  _onLoadingOverlayShow(event) {
    debugger;
  }

  _onLoadingOverlayHide(event) {
    debugger;
  }

  _onTouchOverlayShow(event) {
    debugger;
  }

  _onTouchOverlayHide(event) {
    debugger;
  }

  _onAboutOverlayShow(event) {
    debugger;
  }

  _onAboutOverlayHide(event) {
    debugger;
  }

  _onAboutOverlayLaunchpadLinkClick(event) {
    debugger;
  }

  _onAboutOverlayCloseButtonClick(event) {
    debugger;
  }

  _onLaunchpadOverlayShow(event) {
    debugger;
  }

  _onLaunchpadOverlayHide(event) {
    debugger;
  }

  _onLaunchpadOverlayMidiLinkClick(event) {
    debugger;
  }

  _onLaunchpadOverlayCloseButtonClick(event) {
    debugger;
  }

  _onHelpWizardShow(event) {
    debugger;
  }

  _onHelpWizardHide(event) {
    debugger;
  }

  _onHelpWizardCloseButtonClick(event) {
    debugger;
  }

  _onAudioContextUnsupportedErrorShow(event) {
    debugger;
  }

  _onAudioContextUnsupportedErrorHide(event) {
    debugger;
  }

  _onLoadErrorShow(event) {
    debugger;
  }

  _onLoadErrorHide(event) {
    debugger;
  }

  _onLoadErrorReloadLinkClick(event) {
    debugger;
  }

  _onUrlDialogOpen(event) {
    debugger;
  }

  _onUrlDialogClose(event) {
    debugger;
  }

  _onUrlDialogCloseButtonClick(event) {
    debugger;
  }

  _onMidiDialogOpen(event) {
    debugger;
  }

  _onMidiDialogClose(event) {
    debugger;
  }

  _onMidiDialogCloseButtonClick(event) {
    debugger;
  }
}

App.propTypes = {
  samples: React.PropTypes.arrayOf(React.PropTypes.object)
};

App.defaultProps = {
  samples: []
};

export default App;