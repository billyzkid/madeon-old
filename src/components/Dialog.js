import React from "react";
// import shallowCompare from "react-addons-shallow-compare";
import Button from "./Button";
import Overlay from "./Overlay";
import "./Dialog.scss";

// shouldComponentUpdate(nextProps, nextState) {
//   return shallowCompare(this, nextProps, nextState);
// }

export class UrlDialog extends React.PureComponent {
  render() {
    console.log("render", this.constructor.name);

    return (
      <div className="dialog url">
        <Overlay isVisible={this.props.isOpen} onShow={this.props.onOpen} onHide={this.props.onClose} initialFocusEnabled dismissEnabled escapeEnabled>
          <div className="content">
            <h1>Your mix URL</h1>
            <p>Copy the following URL, and then share it with the world.</p>
            <input type="url" value={this.props.url} readOnly />
          </div>
          <Button icon="&#xf00d;" title="Close" onClick={this.props.onClose} />
        </Overlay>
      </div>
    );
  }
}

UrlDialog.propTypes = {
  isOpen: React.PropTypes.bool,
  onOpen: React.PropTypes.func,
  onClose: React.PropTypes.func
};

export class MidiDialog extends React.PureComponent {
  render() {
    console.log("render", this.constructor.name);
    
    return (
      <div className="dialog midi">
        <Overlay isVisible={this.props.isOpen} onShow={this.props.onOpen} onHide={this.props.onClose} initialFocusEnabled dismissEnabled escapeEnabled>
          <div className="content">
            <h1>Enable the Web MIDI API</h1>
            <p>Copy the following URL, paste it into a new tab, press Enter, and then click Enable.</p>
            <input type="url" value="chrome://flags/#enable-web-midi" readOnly />
          </div>
          <Button icon="&#xf00d;" title="Close" onClick={this.props.onClose} />
        </Overlay>
      </div>
    );
  }
}

MidiDialog.propTypes = {
  isOpen: React.PropTypes.bool,
  onOpen: React.PropTypes.func,
  onClose: React.PropTypes.func
};

// const UrlDialog = ({url, isOpen, onOpen, onClose}) => {
//   return (
//     <div className="dialog url">
//       <Overlay isVisible={isOpen} onShow={onOpen} onHide={onClose} initialFocusEnabled dismissEnabled escapeEnabled>
//         <div className="content">
//           <h1>Your mix URL</h1>
//           <p>Copy the following URL, and then share it with the world.</p>
//           <input type="url" value={url} readOnly />
//         </div>
//         <Button icon="&#xf00d;" title="Close" onClick={onClose} />
//       </Overlay>
//     </div>
//   );
// };