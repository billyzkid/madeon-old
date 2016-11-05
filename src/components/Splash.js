import React from "react";
import Flipper from "./Flipper";
import Overlay from "./Overlay";
import "./Splash.scss";

export default class Splash extends React.PureComponent {
  render() {
    console.log("render", this.constructor.name);
    
    return (
      <div className="splash">
        <Overlay isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide}>
          <div className="content">
            <section>
              <Flipper />
              <h1>Loading samples</h1>
              <h2>Please wait</h2>
            </section>
            <section>
              <h1>Tap to begin</h1>
            </section>
          </div>
        </Overlay>
      </div>
    );
  }
}

Splash.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func
};