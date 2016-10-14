import React from "react";
import "./Chevron.css";

class Chevron extends React.Component {
  render() {
    return (
      <div className="chevron">
        <div className="chevron-part" />
        <div className="chevron-part" />
      </div>
    );
  }
}

export default Chevron;