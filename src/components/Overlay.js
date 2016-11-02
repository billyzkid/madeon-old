import React from "react";
import "./Overlay.scss";

class Overlay extends React.Component {
  render() {
    return (
      <div className="overlay">
        {this.props.children}
      </div>
    );
  }
}

Overlay.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Overlay;