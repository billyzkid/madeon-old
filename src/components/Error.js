import React from "react";
// import { ErrorType } from "../scripts/constants";
import "./Error.css";

class Error extends React.Component {
  // render() {
  //   switch (this.props.type) {
  //     case ErrorType.none:
  //       return null;

  //     case ErrorType.audioContextUnsupported:
  //       return (
  //         <div className="error">
  //           <p>This browser does not support the fancy new Web Audio API.</p>
  //           <p>Please use the latest <a href="https://support.apple.com/downloads/safari" target="_blank">Safari</a>, <a href="https://www.google.com/chrome/" target="_blank">Chrome</a>, <a href="http://www.mozilla.com/firefox/" target="_blank">Firefox</a> or <a href="http://www.opera.com/browser/" target="_blank">Opera</a> for the best experience.</p>
  //         </div>
  //       );

  //     default:
  //       return (
  //         <div className="error">
  //           <p>Something went horribly wrong.</p>
  //           <p>Please <a onClick={this._reload.bind(this)}>reload</a> the page or try back later.</p>
  //         </div>
  //       );
  //   }
  // }

  render() {
    return (
      <div className="errors">
        <div className="error-1">This browser does not support the fancy new Web Audio API.<br />Please use the latest <a href="https://support.apple.com/downloads/safari" target="_blank">Safari</a>, <a href="https://www.google.com/chrome/" target="_blank">Chrome</a>, <a href="http://www.mozilla.com/firefox/" target="_blank">Firefox</a> or <a href="http://www.opera.com/browser/" target="_blank">Opera</a> for the best experience.</div>
        <div className="error-2">Something went horribly wrong.<br />Please <a onClick={this._reload.bind(this)}>reload</a> the page or try back later.</div>
      </div>
    );
  }

  _reload(e) {
    e.preventDefault();
    window.location.reload(true);
  }
}

export default Error;