import React from "react";
import Button from "./Button";
import Overlay from "./Overlay";
import { getClassNames } from "../scripts/functions";
import "./Info.scss";

export default class Info extends React.PureComponent {
  render() {
    const classNames = getClassNames("info", this.props.className);

    return (
      <div className={classNames}>
        <Overlay isVisible={this.props.isVisible} onShow={this.props.onShow} onHide={this.props.onHide} escapeEnabled>
          <div className="content">{this.props.children}</div>
          <Button icon="&#xf00d;" title="Close" onClick={this.props.onHide} />
        </Overlay>
      </div>
    );
  }
}

Info.propTypes = {
  className: React.PropTypes.string,
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};