import React from "react";
import "./Info.scss";

export default class Info extends React.Component {
  render() {
    return (
      <div className="info">{this.props.children}</div>
    );
  }
}