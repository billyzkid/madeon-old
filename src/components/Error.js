import React from "react";
import Overlay from "./Overlay";
import "./Error.scss";

export class LoadError extends React.PureComponent {
  render() {
    console.log("render", this.constructor.name);

    return (
      <div className="error load">
        <Overlay isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide}>
          <div className="content">
            <p>Something went horribly wrong.</p>
            <p>Please <a href="" onClick={this._onReloadLinkClick}>reload</a> the page or try back later.</p>
          </div>
        </Overlay>
      </div>
    );
  }
}

LoadError.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func
};

export class AudioContextUnsupportedError extends React.PureComponent {
  render() {
    console.log("render", this.constructor.name);
    
    return (
      <div className="error audio-context-unsupported">
        <Overlay isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide}>
          <div className="content">
            <p>This browser does not support the fancy new Web Audio API.</p>
            <p>Please use the latest <a href="http://apple.com/safari/" target="_blank">Safari</a>, <a href="http://google.com/chrome/" target="_blank">Chrome</a>, <a href="http://mozilla.org/firefox/" target="_blank">Firefox</a> or <a href="http://opera.com/" target="_blank">Opera</a> for the best experience.</p>
          </div>
        </Overlay>
      </div>
    );
  }
}

AudioContextUnsupportedError.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func
};