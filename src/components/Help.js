import React from "react";
import Button from "./Button";
import Overlay from "./Overlay";
import "./Help.scss";

export default class Help extends React.PureComponent {
  render() {
    console.log("render", this.constructor.name);
    
    return (
      <Overlay name={this.constructor.name + "Overlay"} isEscapeEnabled isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide}>
        <div className="help">{this.props.children}</div>
        <Button icon="&#xf00d;" title="Close" onClick={this.props.onHide} />
      </Overlay>
    );
  }
}

Help.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};