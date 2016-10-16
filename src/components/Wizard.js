import React from "react";
import "./Wizard.css";

class Wizard extends React.Component {
  render() {
    return (
      <div className="wizard">
        <div className="wizard-title">Welcome to Madeon's Adventure Machine</div>
        <div className="wizard-step-1">To begin, press one of the blue squares, these are the drum loops, only one will play at a time.</div>
        <div className="wizard-step-2">Now, press one of the red squares, these are the bass loops, only one will play at a time.</div>
        <div className="wizard-step-3">Next, press one of the green squares, these are the sound loops, up to three can play at a time.</div>
        <div className="wizard-step-4">Done, now go make some music!</div>
      </div>
    );
  }
}

export default Wizard;