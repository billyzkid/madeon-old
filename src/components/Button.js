import React from "react";
import "./Button.scss";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  render() {
    if (this.props.icon) {
      return <button className="madeon-button" icon={this.props.icon} title={this.props.title} onClick={this._onClick} />;
    } else {
      return <button className="madeon-button" label={this.props.label} title={this.props.title} onClick={this._onClick} />;
    }
  }

  _onClick(event) {
    this.props.onClick();
  }
}

Button.propTypes = {
  icon: React.PropTypes.string,
  label: React.PropTypes.string,
  title: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
};

export default Button;