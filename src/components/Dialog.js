import React from "react";
import { getClassNames } from "../scripts/functions";
import "./Dialog.scss";

class Dialog extends React.Component {

  constructor(props) {
    super(props);

    this._onKeyDown = this._onKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      this._open();
    } else if (this.props.isOpen && !nextProps.isOpen) {
      this._close();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isOpen !== nextProps.isOpen;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.refs.self.focus();
    } else if (!this.props.isOpen && prevProps.isOpen) {
      this.refs.self.blur();
    }
  }

  render() {
    console.log("render", this.props.name);

    const classNames = getClassNames("dialog", {
      open: this.props.isOpen
    });

    return (
      <div ref="self" className={classNames} tabIndex={-1} onKeyDown={this._onKeyDown}>
        {this.props.children}
      </div>
    );
  }

  _open() {
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  }

  _close() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  _onKeyDown(event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      this._close();
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