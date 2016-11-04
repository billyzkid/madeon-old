import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import { KeyCodes } from "../scripts/constants";
import { getClassNames } from "../scripts/functions";
import "./Overlay.scss";

export default class Overlay extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClick = this._onClick.bind(this);

    // See https://github.com/davidtheclark/focus-trap-react
    this._focusTrapOptions = {
      escapeDeactivates: false
    };
  }

  componentDidMount() {
    if (!this.props.initialFocusEnabled) {
      const node = ReactDOM.findDOMNode(this);
      this._focusTrapOptions.initialFocus = node;
      this._focusTrapOptions.fallbackFocus = node;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isVisible && nextProps.isVisible) {
      this._show();
    } else if (this.props.isVisible && !nextProps.isVisible) {
      this._hide();
    }
  }

  render() {
    const classNames = getClassNames("overlay", this.props.className, {
      visible: this.props.isVisible
    });

    return (
      <FocusTrap className={classNames} active={this.props.isVisible} focusTrapOptions={this._focusTrapOptions} onKeyDown={this._onKeyDown} onClick={this._onClick} tabIndex="-1">
        {this.props.children}
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
    if (this.props.dismissEnabled && event.target === ReactDOM.findDOMNode(this)) {
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