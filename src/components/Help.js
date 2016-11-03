import React from "react";
import "./Help.scss";

class Help extends React.Component {
  render() {
    return (
      <div className="help">
        {this.props.children}
      </div>
    );
  }
}

export default Help;