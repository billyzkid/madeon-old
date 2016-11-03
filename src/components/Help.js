import React from "react";
import "./Help.scss";

export default class Help extends React.Component {
  render() {
    return (
      <div className="help">{this.props.children}</div>
    );
  }
}