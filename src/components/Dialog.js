import React from "react";
import { getClassNames } from "../scripts/functions";
import "./Dialog.scss";

class Dialog extends React.Component {

  constructor(props) {
    super(props);

    this._onKeyDown = this._onKeyDown.bind(this);

    this.state = {
      isOpen: props.isOpen
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isOpen !== nextState.isOpen;
  }

  componentDidUpdate() {
    if (this.state.isOpen) {
      this.refs.self.focus();
      if (this.props.onOpen) {
        this.props.onOpen();
      }
    } else {
      this.refs.self.blur();
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }

  render() {
    console.log("render", this);

    const classNames = getClassNames("dialog", {
      open: this.state.isOpen
    });

    return (
      <div ref="self" className={classNames} tabIndex={-1} onKeyDown={this._onKeyDown}>
        {this.props.children}
      </div>
    );
  }

  _onKeyDown(event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      this.setState({ isOpen: false });
    }
  }
}

Dialog.propTypes = {
  isOpen: React.PropTypes.bool,
  onOpen: React.PropTypes.func,
  onClose: React.PropTypes.func,
  children: React.PropTypes.node
};

export default Dialog;