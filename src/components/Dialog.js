import React from "react";
import Button from "./Button";
import Overlay from "./Overlay";
import "./Dialog.scss";

export default class Dialog extends React.PureComponent {
  render() {
    return (
      <Overlay className={this.props.className} isVisible={this.props.isOpen} onShow={this.props.onOpen} onHide={this.props.onClose} initialFocusEnabled escapeEnabled dismissEnabled>
        <div className="content">{this.props.children}</div>
        <Button icon="&#xf00d;" title="Close" onClick={this.props.onClose} />
      </Overlay>
    );
  }
}

Dialog.propTypes = {
  className: React.PropTypes.string,
  isOpen: React.PropTypes.bool,
  onOpen: React.PropTypes.func,
  onClose: React.PropTypes.func,
  children: React.PropTypes.node
};

Dialog.defaultProps = {
  className: "dialog"
};