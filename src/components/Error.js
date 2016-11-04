import React from "react";
import Overlay from "./Overlay";
import "./Error.scss";

export default class Error extends React.PureComponent {
  render() {
    return (
      <Overlay className={this.props.className} isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide} initialFocusEnabled>
        <div className="content">{this.props.children}</div>
      </Overlay>
    );
  }
}

Error.propTypes = {
  className: React.PropTypes.string,
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};

Error.defaultProps = {
  className: "error"
};