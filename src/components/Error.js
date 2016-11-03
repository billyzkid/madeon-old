import React from "react";
import Overlay from "./Overlay";
import "./Error.scss";

export default class Error extends React.Component {
  render() {
    return (
      <Overlay isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide}>
        <div className="error">{this.props.children}</div>
      </Overlay>
    );
  }
}

Error.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};