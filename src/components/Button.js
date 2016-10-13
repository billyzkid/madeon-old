import React from "react";
import classnames from "classnames";
import ButtonType from "../constants/ButtonType";
import "./Button.css";

class Button extends React.Component {
  render() {
    let buttonClassNames = classnames({
      "button": true,
      "bass": this.props.type === ButtonType.bass,
      "drum": this.props.type === ButtonType.drum,
      "sound": this.props.type === ButtonType.sound,
      "active": false,
      "inactive": false,
      "waiting": true
    });
    
    return (
      <div className={buttonClassNames}/>
    );
  }
}

export default Button;