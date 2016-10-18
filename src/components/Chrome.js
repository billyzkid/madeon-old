import React from "react";
import "./Chrome.css";

class Chrome extends React.Component {
  render() {
    return (
      <div className="chrome">
        <div className="header">
          <a href="http://madeon.fr" target="_blank">Madeon - Adventure</a>
        </div>
        <div className="footer">
          <a href="http://wmas.it" target="_blank">We Made This</a>
        </div>
        <div className="info">
          <div className="button info"><span>Info</span></div>
          <div className="button about"><span>About</span></div>
          <div className="button help"><span>Help</span></div>
        </div>
        <div className="share">
          <div className="button share"><span>Share</span></div>
          <div className="button copy"><span>Copy URL</span></div>
          <div className="button twitter"><span>Twitter</span></div>
          <div className="button facebook"><span>Facebook</span></div>
        </div>
        <div className="controls">
          <div className="button play"><span>Play</span></div>
          <div className="button pause"><span>Pause</span></div>
          <div className="button stop"><span>Stop</span></div>
        </div>
        <div className="looper" />
      </div>
    );
  }
}

export default Chrome;