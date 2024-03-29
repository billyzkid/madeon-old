import React from "react";
import GridButton from "./GridButton";
import "./Grid.css";

class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        {this.props.song.map((item) => <GridButton key={item.id} item={item} onClick={this.props.onClick} />)}
      </div>
    );
  }
}

Grid.propTypes = {
  song: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Grid;