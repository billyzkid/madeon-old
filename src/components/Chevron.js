import React from "react";
import "./Chevron.css";

class Chevron extends React.Component {
  render() {
    return (
      <div className="chevron">
        <div className="chevron-top" />
        <div className="chevron-bottom" />
      </div>
    );
  }
}

export default Chevron;