import React from "react";
import classnames from "classnames";
import AudioType from "../constants/AudioType";
import "./Button.css";

class Button extends React.Component {
  render() {
    let buttonClassNames = classnames({
      "button": true,
      "bass": this.props.audioType === AudioType.bass,
      "drum": this.props.audioType === AudioType.drum,
      "sound": this.props.audioType === AudioType.sound,
      "active": false,
      "inactive": false,
      "waiting": false
    });
    
    return (
      <div className={buttonClassNames}/>
    );
  }
}

export default Button;