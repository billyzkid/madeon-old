import React from "react";
import classnames from "classnames";
import { GridButtonState } from "../scripts/enums";
import "./Grid.css";

class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        {this.props.song.map((item) => {
          return <GridButton key={item.id} item={item} onClick={this.props.onClick} />;
        })}
      </div>
    );
  }
}

class GridButton extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  render() {
    const item = this.props.item;
    const classNames = classnames("grid-button", item.type, {
      "active": item.state === GridButtonState.active,
      "inactive": item.state === GridButtonState.inactive,
      "waiting": item.state === GridButtonState.waiting
    });

    return <div className={classNames} onClick={this._onClick} />;
  }

  _onClick(event) {
    this.props.onClick(this.props.item);
  }
}

export default Grid;