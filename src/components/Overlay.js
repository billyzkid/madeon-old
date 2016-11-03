import React from "react";
import FocusTrap from "focus-trap-react";
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

  // TODO: Extend React.PureComponent?
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isVisible !== nextProps.isVisible;
  }

  render() {
    // See https://github.com/davidtheclark/focus-trap-react
    const focusTrapOptions = {
      initialFocus: this.props.isInitialFocusEnabled ? null : ".overlay",
      fallbackFocus: ".overlay",
      escapeDeactivates: false
    };

    const classNames = getClassNames("overlay", {
      visible: this.props.isVisible
    });

    return (
      <FocusTrap active={this.props.isVisible} focusTrapOptions={focusTrapOptions}>
        <div ref="overlay" className={classNames} onKeyDown={this._onKeyDown} onClick={this._onClick} tabIndex="-1">{this.props.children}</div>
      </FocusTrap>
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
    if (this.props.isEscapeEnabled && event.keyCode === KeyCodes.escape) {
      event.preventDefault();
      this._hide();
    }
  }

  _onClick(event) {
    if (this.props.isDismissEnabled && event.target === this.refs.overlay) {
      this._hide();
    }
  }
}

Overlay.propTypes = {
  isInitialFocusEnabled: React.PropTypes.bool,
  isEscapeEnabled: React.PropTypes.bool,
  isDismissEnabled: React.PropTypes.bool,
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  children: React.PropTypes.node
};