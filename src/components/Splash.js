import React from "react";
import "./Splash.scss";

class Splash extends React.Component {
  render() {
    return (
      <div className="splash">
        {this.props.children}
      </div>
    );
  }
}

Splash.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Splash;