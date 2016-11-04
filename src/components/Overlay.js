import React from "react";
import FocusTrap from "focus-trap-react";
import { KeyCodes } from "../scripts/constants";
import { getClassNames } from "../scripts/functions";
import "./Overlay.scss";

export default class Overlay extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);

    // See https://github.com/davidtheclark/focus-trap-react
    this._focusTrapOptions = {
      escapeDeactivates: false
    };
  }

  componentDidMount() {
    this._updateFocusTrapOptions();

    if (this.props.isVisible) {
      this._show();
    } else {
      this._hide();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this._updateFocusTrapOptions();

    if (!prevProps.isVisible && this.props.isVisible) {
      this._show();
    } else if (prevProps.isVisible && !this.props.isVisible) {
      this._hide();
    }
  }

  render() {
    const classNames = getClassNames("overlay", this.props.className, {
      visible: this.props.isVisible
    });

    // Explicit truthy/falsy conversion required
    const isFocusTrapActive = !!this.props.isVisible;

    return (
      <FocusTrap ref="focusTrap" className={classNames} active={isFocusTrapActive} focusTrapOptions={this._focusTrapOptions} onClick={this._onClick} onKeyDown={this._onKeyDown} tabIndex="-1">
        {this.props.children}
      </FocusTrap>
    );
  }

  _updateFocusTrapOptions() {
    this._focusTrapOptions.initialFocus = !this.props.initialFocusEnabled ? this.refs.focusTrap.node : null;
    this._focusTrapOptions.fallbackFocus = this.refs.focusTrap.node;
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

  _onClick(event) {
    if (this.props.dismissEnabled && event.target === this.refs.focusTrap.node) {
      this._hide();
    }
  }

  _onKeyDown(event) {
    if (this.props.escapeEnabled && event.keyCode === KeyCodes.escape) {
      event.preventDefault();
      this._hide();
    }
  }
}

Overlay.propTypes = {
  className: React.PropTypes.string,
  isVisible: React.PropTypes.bool,
  onShow: React.PropTypes.func,
  onHide: React.PropTypes.func,
  initialFocusEnabled: React.PropTypes.bool,
  dismissEnabled: React.PropTypes.bool,
  escapeEnabled: React.PropTypes.bool,
  children: React.PropTypes.node
};