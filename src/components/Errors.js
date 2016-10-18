import React from "react";
import "./Errors.css";

class Errors extends React.Component {
  render() {
    return (
      <div className="errors">
        <div className="error-1">
          <p>This browser does not support the fancy new Web Audio API.</p>
          <p>Please use the latest <a href="https://support.apple.com/downloads/safari" target="_blank">Safari</a>, <a href="https://www.google.com/chrome/" target="_blank">Chrome</a>, <a href="http://www.mozilla.com/firefox/" target="_blank">Firefox</a> or <a href="http://www.opera.com/browser/" target="_blank">Opera</a> for the best experience.</p>
        </div>
        <div className="error-2">
          <p>Something went horribly wrong.</p>
          <p>Please <a onClick={this.props.onReload}>reload</a> the page or try back later.</p>
        </div>
      </div>
    );
  }
}

export default Errors;