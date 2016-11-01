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
  onHide: React.PropTypes.func
};

Wizard.defaultProps = {
  isVisible: false
};

export default Wizard;