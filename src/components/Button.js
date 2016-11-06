import React from "react";
import "./Button.scss";

export default class Button extends React.PureComponent {
  static propTypes = {
    icon: React.PropTypes.string,
    label: React.PropTypes.string,
    title: React.PropTypes.string,
    onClick: React.PropTypes.func
  }
  
  render() {
    console.log("render", this.constructor.name);
    return <button type="button" {...this.props} />
  }
}