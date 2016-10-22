import React from "react";
import classnames from "classnames";
import { GridButtonState } from "../scripts/enums";
import "./GridButton.css";

class GridButton extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  render() {
    const classNames = classnames("grid-button", this.props.item.type, {
      "active": this.props.item.state === GridButtonState.active,
      "inactive": this.props.item.state === GridButtonState.inactive,
      "waiting": this.props.item.state === GridButtonState.waiting
    });

    return <div className={classNames} onClick={this._onClick} />;
  }

  _onClick(event) {
    this.props.onClick(this.props.item);
  }
}

GridButton.propTypes = {
  item: React.PropTypes.object
};

export default GridButton;