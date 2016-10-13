import React from "react";
import Chevron from "./Chevron";
import Button from "./Button";
import ButtonType from "../constants/ButtonType";
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
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.bass}/>
          <Button type={ButtonType.bass}/>
          <Button type={ButtonType.bass}/>
          <Button type={ButtonType.bass}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.bass}/>
          <Button type={ButtonType.bass}/>
          <Button type={ButtonType.bass}/>
          <Button type={ButtonType.drum}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.bass}/>
          <Button type={ButtonType.bass}/>
          <Button type={ButtonType.drum}/>
          <Button type={ButtonType.drum}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.bass}/>
          <Button type={ButtonType.drum}/>
          <Button type={ButtonType.drum}/>
          <Button type={ButtonType.drum}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.drum}/>
          <Button type={ButtonType.drum}/>
          <Button type={ButtonType.drum}/>
          <Button type={ButtonType.drum}/>
          <Button type={ButtonType.sound}/>
          <Button type={ButtonType.sound}/>
        </div>
      </div>
    );
  }
}

export default Interface;