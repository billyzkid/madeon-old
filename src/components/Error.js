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

Error.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Error;