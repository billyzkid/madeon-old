import React from "react";
import Button from "./Button";
import Overlay from "./Overlay";
import "./Help.scss";

export default class Help extends React.PureComponent {
  render() {
    return (
      <Overlay className={this.props.className} isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide} escapeEnabled>
        <div className="content">{this.props.children}</div>
        <Button icon="&#xf00d;" title="Close" onClick={this.props.onHide} />
      </Overlay>
    );
  }
}

Help.propTypes = {
  className: React.PropTypes.string,
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};

Help.defaultProps = {
  className: "help"
};