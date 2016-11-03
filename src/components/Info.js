import React from "react";
import "./Info.scss";

class Info extends React.Component {
  render() {
    return (
      <div className="info">
        {this.props.children}
      </div>
    );
  }
}

export default Info;