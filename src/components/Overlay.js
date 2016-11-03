import React from "react";
import { KeyCodes } from "../scripts/constants";
import { getClassNames } from "../scripts/functions";
import "./Overlay.scss";

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);

    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isVisible && nextProps.isVisible) {
      this._show();
    } else if (this.props.isVisible && !nextProps.isVisible) {
      this._hide();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isVisible !== nextProps.isVisible;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isVisible && !prevProps.isVisible) {
      this.refs.self.focus();
    } else if (!this.props.isVisible && prevProps.isVisible) {
      this.refs.self.blur();
    }
  }

  render() {
    const classNames = getClassNames("overlay", {
      visible: this.props.isVisible
    });

    return (
      <div ref="self" className={classNames} onKeyDown={this._onKeyDown} onClick={this._onClick} tabIndex={-1}>{this.props.children}</div>
    );
  }

  _show() {
    if (this.props.onShow) {
      this.props.onShow();
    }
  }

  _hide() {
    if (this.props.onHide) {
      this.props.onHide();
    }
  }

  _onKeyDown(event) {
    if (this.props.canEscape && event.keyCode === KeyCodes.escape) {
      event.preventDefault();
      this._hide();
    }
  }

  _onClick(event) {
    if (this.props.canDismiss && event.target === this.refs.self) {
      this._hide();
    }
  }
}

Overlay.propTypes = {
  canEscape: React.PropTypes.bool,
  canDismiss: React.PropTypes.bool,
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};