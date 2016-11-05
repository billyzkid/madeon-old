import React from "react";
import Button from "./Button";
import Overlay from "./Overlay";
// import Player from "./Player";
import "./Help.scss";

export default class Help extends React.PureComponent {
  render() {
    console.log("render", this.constructor.name);
    
    return (
      <div className="help">
        <Overlay isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide} escapeEnabled>
          <div className="content">
            {/*<Player samples={this.props.samples} onClick={this._onPlayerClick} />*/}
            <h1>Welcome to Madeon's Adventure Machine</h1>
            <ol>
              <li>To begin, press one of the blue squares, these are the drum loops, only one will play at a time.</li>
              <li>Now, press one of the red squares, these are the bass loops, only one will play at a time.</li>
              <li>Next, press one of the green squares, these are the sound loops, up to three can play at a time.</li>
              <li>Done, now go make some music!</li>
            </ol>
          </div>
          <Button icon="&#xf00d;" title="Close" onClick={this.props.onHide} />
        </Overlay>
      </div>
    );
  }
}

Help.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func
};