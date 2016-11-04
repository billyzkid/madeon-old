import React from "react";
import FocusTrap from "focus-trap-react";
import { KeyCodes } from "../scripts/constants";
import { getClassNames } from "../scripts/functions";
import "./Overlay.scss";

export default class Overlay extends React.PureComponent {
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

  render() {
    // See https://github.com/davidtheclark/focus-trap-react
    const focusTrapOptions = {
      initialFocus: this.props.initialFocusEnabled ? null : ".container",
      fallbackFocus: ".container",
      escapeDeactivates: false
    };

    const containerClassNames = getClassNames("container", {
      visible: this.props.isVisible
    });

    return (
      <FocusTrap className={this.props.className} active={this.props.isVisible} focusTrapOptions={focusTrapOptions}>
        <div ref="container" className={containerClassNames} onKeyDown={this._onKeyDown} onClick={this._onClick} tabIndex="-1">{this.props.children}</div>
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
    if (this.props.escapeEnabled && event.keyCode === KeyCodes.escape) {
      event.preventDefault();
      this._hide();
    }
  }

  _onClick(event) {
    if (this.props.dismissEnabled && event.target === this.refs.container) {
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
  escapeEnabled: React.PropTypes.bool,
  dismissEnabled: React.PropTypes.bool,
  children: React.PropTypes.node
};

Overlay.defaultProps = {
  className: "overlay"
};