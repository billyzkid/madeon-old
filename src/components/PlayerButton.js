import React from "react";
import "./PlayerButton.scss";

class PlayerButton extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }

  render() {
    return <button className="player-button" onClick={this._onClick} />;
  }

  _onClick(event) {
    this.props.onClick(event, this.props.sample);
  }
}

PlayerButton.propTypes = {
  sample: React.PropTypes.object,
  onClick: React.PropTypes.func
};

export default PlayerButton;