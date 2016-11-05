import React from "react";
import Button from "./Button";
import Overlay from "./Overlay";
import "./Info.scss";

export default class Info extends React.PureComponent {
  render() {
    console.log("render", this.constructor.name);
    
    return (
      <div className="info">
        <Overlay isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide} escapeEnabled>
          <div className="content">
            <section>
              <h1>About</h1>
              <p>Make your own mix with samples from Madeon's debut album Adventure.</p>
              <p><a href="" onClick={this._onLaunchpadLinkClick}>Got a Launchpad?</a></p>
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
          </div>
          <Button icon="&#xf00d;" title="Close" onClick={this.props.onHide} />
        </Overlay>
      </div>
    );
  }
}

Info.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func
};