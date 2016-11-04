import React from "react";
import Overlay from "./Overlay";
import { getClassNames } from "../scripts/functions";
import "./Splash.scss";

export default class Splash extends React.PureComponent {
  render() {
    const classNames = getClassNames("splash", this.props.className);

    return (
      <Overlay className={classNames} isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide}>
        <div className="content">{this.props.children}</div>
      </Overlay>
    );
  }
}

Splash.propTypes = {
  className: React.PropTypes.string,
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};