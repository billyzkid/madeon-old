import React from "react";
import Button from "./Button";
import "./App.scss";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

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
      </div>
    );
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
}