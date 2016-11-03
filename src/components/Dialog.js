import React from "react";
import Button from "./Button";
import Overlay from "./Overlay";
import "./Dialog.scss";

export default class Dialog extends React.Component {
  render() {
    return (
      <Overlay isEscapeEnabled isDismissEnabled isVisible={this.props.isOpen} onShow={this.props.onOpen} onHide={this.props.onClose}>
        <div className="dialog">{this.props.children}</div>
        <Button icon="&#xf00d;" title="Close" onClick={this.props.onClose} />
      </Overlay>
    );
  }
}

Dialog.propTypes = {
  isOpen: React.PropTypes.bool,
  onOpen: React.PropTypes.func,
  onClose: React.PropTypes.func,
  children: React.PropTypes.node
};