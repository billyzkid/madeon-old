import React from "react";
import Overlay from "./Overlay";
import { getClassNames } from "../scripts/functions";
import "./Error.scss";

export default class Error extends React.PureComponent {
  render() {
    const classNames = getClassNames("error", this.props.className);
    
    return (
      <div className={classNames}>
        <Overlay isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide}>
          <div className="content">{this.props.children}</div>
        </Overlay>
      </div>
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