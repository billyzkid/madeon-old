import React from "react";
import classnames from "classnames";
import Interface from "./Interface";
import Chrome from "./Chrome";
import AppState from "../constants/AppState";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.default
    };
  }

  componentDidMount() {
    this.createBackgroundLoader();
  }

  componentWillUnmount() {
    this.destroyBackgroundLoader();
  }

  createBackgroundLoader() {
    this.backgroundImage = new Image();
    this.backgroundImage.onload = this.onBackgroundImageLoad.bind(this);
    this.backgroundImage.onerror = this.onBackgroundImageError.bind(this);
    this.backgroundImage.src = require("../images/background.jpg");
    this.setState({ loadState: AppState.loading });
  }

  destroyBackgroundLoader() {
    if (this.backgroundImage) {
      this.backgroundImage.onload = null;
      this.backgroundImage.onerror = null;
      this.backgroundImage = null;
    }
  }

  onBackgroundImageLoad(e) {
    this.destroyBackgroundLoader();
    this.setState({ appState: AppState.loaded });
  }

  onBackgroundImageError(e) {
    this.destroyBackgroundLoader();
    this.setState({ appState: AppState.failed });
  }

  render() {
    let appClassNames = classnames({
      "app": true,
      "loading": this.state.appState === AppState.loading,
      "loaded": this.state.appState === AppState.loaded,
      "failed": this.state.appState === AppState.failed
    });

    let appBackgroundClassNames = classnames({
      "app-bg": true,
      "active": this.state.appState === AppState.loaded
    });

    return (
      <div className={appClassNames}>
        <div className={appBackgroundClassNames}></div>
        <Interface/>
        <Chrome/>
      </div>
    );
  }
}

export default App;