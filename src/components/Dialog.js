import React from "react";
import Button from "./Button";
import { KeyCodes } from "../scripts/constants";
import { getClassNames } from "../scripts/functions";
import "./Dialog.scss";

class Dialog extends React.Component {

  constructor(props) {
    super(props);

    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);
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
    const classNames = getClassNames("dialog", {
      open: this.props.isOpen,

    });

    if (this.props.closeOnButtonClick) {
      
    }

    return (
      <div ref="self" className={classNames} tabIndex={-1} onKeyDown={this._onKeyDown} onClick={this._onClick}>
        <div className="content">{this.props.children}</div>
        {this.props.closeOnButtonClick ? <Button icon="&#xf00d;" title="Close" onClick={this._onCloseButtonClick} /> : null}
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
    if (this.props.closeOnEscape && event.keyCode === KeyCodes.escape) {
      event.preventDefault();
      this._close();
    }
  }

  _onClick(event) {
    if (this.props.closeOnClick && event.target === this.refs.self) {
      this._close();
    }
  }

  _onCloseButtonClick(event) {
    if (this.props.closeOnButtonClick) {
      this._close();
    }
  }
}

Dialog.propTypes = {
  isOpen: React.PropTypes.bool,
  onOpen: React.PropTypes.func,
  onClose: React.PropTypes.func,
  closeOnEscape: React.PropTypes.bool,
  closeOnClick: React.PropTypes.bool,
  closeOnButtonClick: React.PropTypes.bool,
  children: React.PropTypes.node
};

export default Dialog;