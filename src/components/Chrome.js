import React from "react";
import "./Chrome.css";

class Chrome extends React.Component {
  render() {
    return (
      <div className="chrome">
        <div className="chrome-header">
          <a href="http://madeon.fr" target="_blank">Madeon - Adventure</a>
        </div>
        <div className="chrome-footer">
          <a href="http://wmas.it" target="_blank">We Made This</a>
        </div>
      </div>
    );
  }
}

export default Chrome;