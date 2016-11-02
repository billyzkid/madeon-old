import React from "react";
import PlayerButton from "./PlayerButton";
import "./Player.scss";

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        {this.props.samples.map((sample, index) => <PlayerButton key={index} sample={sample} onClick={this.props.onClick} />)}
      </div>
    );
  }
}

Player.propTypes = {
  samples: React.PropTypes.arrayOf(React.PropTypes.object),
  onClick: React.PropTypes.func
};

Player.defaultProps = {
  samples: []
};

export default Player;