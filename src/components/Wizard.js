import React from "react";
import classnames from "classnames";
import "./Wizard.css";

class Wizard extends React.Component {
  render() {
    let classNames = classnames({
      "wizard": true,
      "step-1": this.props.step === 1,
      "step-2": this.props.step === 2,
      "step-3": this.props.step === 3,
      "step-4": this.props.step === 4
    });
    
    return (
      <div className={classNames}>
        <h1>Welcome to Madeon's Adventure Machine</h1>
        <h2>To begin, press one of the blue squares, these are the drum loops, only one will play at a time.</h2>
        <h2>Next, press one of the green squares, these are the sounds, up to 3 can play at a time.</h2>
        <h2>Now, press one of the red squares, these are the bass loops, only one will play at a time.</h2>
        <h2>Done, now go make some music!</h2>
      </div>
    );
  }
}

export default Wizard;