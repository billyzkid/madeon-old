import React from "react";
import "./Button.scss";

class Button extends React.Component {
  render() {
    return <button className="button" icon={this.props.icon} label={this.props.label} title={this.props.title} onClick={this.props.onClick} />;
  }
}

Button.propTypes = {
  icon: React.PropTypes.string,
  label: React.PropTypes.string,
  title: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default Button;