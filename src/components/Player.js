import React from "react";
import Chevron from "./Chevron";
import Button from "./Button";
import { AudioType } from "../scripts/constants";
import "./Player.css";

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <div className="chevrons">
          <Chevron />
          <Chevron />
        </div>
        <div className="buttons">
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.bass} />
          <Button audioType={AudioType.bass} />
          <Button audioType={AudioType.bass} />
          <Button audioType={AudioType.bass} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.bass} />
          <Button audioType={AudioType.bass} />
          <Button audioType={AudioType.bass} />
          <Button audioType={AudioType.drum} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.bass} />
          <Button audioType={AudioType.bass} />
          <Button audioType={AudioType.drum} />
          <Button audioType={AudioType.drum} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.bass} />
          <Button audioType={AudioType.drum} />
          <Button audioType={AudioType.drum} />
          <Button audioType={AudioType.drum} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.drum} />
          <Button audioType={AudioType.drum} />
          <Button audioType={AudioType.drum} />
          <Button audioType={AudioType.drum} />
          <Button audioType={AudioType.sound} />
          <Button audioType={AudioType.sound} />
        </div>
      </div>
    );
  }
}

export default Player;