import React from "react";
import "./Wizard.scss";

class Wizard extends React.Component {
  render() {
    return (
      <div className="wizard">
        {this.props.children}
      </div>
    );
  }
}

Wizard.propTypes = {
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Wizard;