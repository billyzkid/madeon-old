import React from "react";
import Chevron from "./Chevron";
import Button from "./Button";
import AudioType from "../constants/AudioType";
import "./Interface.css";

class Interface extends React.Component {
  render() {
    return (
      <div className="interface">
        <div className="chevrons">
          <Chevron/>
          <Chevron/>
        </div>
        <div className="buttons">
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.bass}/>
          <Button audioType={AudioType.bass}/>
          <Button audioType={AudioType.bass}/>
          <Button audioType={AudioType.bass}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.bass}/>
          <Button audioType={AudioType.bass}/>
          <Button audioType={AudioType.bass}/>
          <Button audioType={AudioType.drum}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.bass}/>
          <Button audioType={AudioType.bass}/>
          <Button audioType={AudioType.drum}/>
          <Button audioType={AudioType.drum}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.bass}/>
          <Button audioType={AudioType.drum}/>
          <Button audioType={AudioType.drum}/>
          <Button audioType={AudioType.drum}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.drum}/>
          <Button audioType={AudioType.drum}/>
          <Button audioType={AudioType.drum}/>
          <Button audioType={AudioType.drum}/>
          <Button audioType={AudioType.sound}/>
          <Button audioType={AudioType.sound}/>
        </div>
      </div>
    );
  }
}

export default Interface;