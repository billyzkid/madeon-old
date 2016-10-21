import React from "react";
import "./Grid.css";

class Grid extends React.Component {
  render() {
    // <div className="grid-button sound" />
    // <div className="grid-button sound active" />
    // <div className="grid-button sound inactive" />
    // <div className="grid-button sound waiting" />

    return (
      <div className="grid" onClick={this.props.onPlay}>
        <div className="grid-button sound" />
        <div className="grid-button sound" />
        <div className="grid-button bass" />
        <div className="grid-button bass" />
        <div className="grid-button bass" />
        <div className="grid-button bass" />
        <div className="grid-button sound" />
        <div className="grid-button sound" />
        <div className="grid-button sound" />
        <div className="grid-button bass" />
        <div className="grid-button bass" />
        <div className="grid-button bass" />
        <div className="grid-button drum" />
        <div className="grid-button sound" />
        <div className="grid-button sound" />
        <div className="grid-button sound" />
        <div className="grid-button bass" />
        <div className="grid-button bass" />
        <div className="grid-button drum" />
        <div className="grid-button drum" />
        <div className="grid-button sound" />
        <div className="grid-button sound" />
        <div className="grid-button sound" />
        <div className="grid-button bass" />
        <div className="grid-button drum" />
        <div className="grid-button drum" />
        <div className="grid-button drum" />
        <div className="grid-button sound" />
        <div className="grid-button sound" />
        <div className="grid-button sound" />
        <div className="grid-button drum" />
        <div className="grid-button drum" />
        <div className="grid-button drum" />
        <div className="grid-button drum" />
        <div className="grid-button sound" />
        <div className="grid-button sound" />
      </div>
    );
  }
}

export default Grid;