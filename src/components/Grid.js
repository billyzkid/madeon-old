import React from "react";
import GridButton from "./GridButton";
import { AudioType } from "../scripts/enums";
import "./Grid.css";

class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.bass} />
        <GridButton audioType={AudioType.bass} />
        <GridButton audioType={AudioType.bass} />
        <GridButton audioType={AudioType.bass} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.bass} />
        <GridButton audioType={AudioType.bass} />
        <GridButton audioType={AudioType.bass} />
        <GridButton audioType={AudioType.drum} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.bass} />
        <GridButton audioType={AudioType.bass} />
        <GridButton audioType={AudioType.drum} />
        <GridButton audioType={AudioType.drum} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.bass} />
        <GridButton audioType={AudioType.drum} />
        <GridButton audioType={AudioType.drum} />
        <GridButton audioType={AudioType.drum} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.drum} />
        <GridButton audioType={AudioType.drum} />
        <GridButton audioType={AudioType.drum} />
        <GridButton audioType={AudioType.drum} />
        <GridButton audioType={AudioType.sound} />
        <GridButton audioType={AudioType.sound} />
      </div>
    );
  }
}

export default Grid;