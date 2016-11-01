import React from "react";
import "./Dialog.scss";

class Dialog extends React.Component {
  render() {
    return (
      <div className="dialog">
        {this.props.children}
      </div>
    );
  }
}

Dialog.propTypes = {
  isOpen: React.PropTypes.bool,
  onOpen: React.PropTypes.func,
  onClose: React.PropTypes.func
};

Dialog.defaultProps = {
  isOpen: false
};

export default Dialog;