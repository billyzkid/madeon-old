import React from "react";
import classnames from "classnames";
import { AudioType } from "../scripts/enums";
import "./GridButton.css";

class GridButton extends React.Component {
  render() {
    let classNames = classnames("grid-button", {
      "bass": this.props.audioType === AudioType.bass,
      "drum": this.props.audioType === AudioType.drum,
      "sound": this.props.audioType === AudioType.sound,
      "active": false,
      "inactive": false,
      "waiting": false
    });

    return (
      <div className={classNames} />
    );
  }
}

export default GridButton;