import React from "react";
import "./Error.scss";

class Error extends React.Component {
  render() {
    return (
      <div className="error">
        {this.props.children}
      </div>
    );
  }
}

export default Error;