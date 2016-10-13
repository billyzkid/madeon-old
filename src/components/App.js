import React from "react";
import classnames from "classnames";
import Interface from "./Interface";
import Chrome from "./Chrome";
import LoadState from "../constants/LoadState";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadState: LoadState.default
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
    this.setState({ loadState: LoadState.loading });
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
    this.setState({ loadState: LoadState.loaded });
  }

  onBackgroundImageError(e) {
    this.destroyBackgroundLoader();
    this.setState({ loadState: LoadState.failed });
  }

  render() {
    let appClassNames = classnames({
      "app": true,
      "loading": this.state.loadState === LoadState.loading,
      "loaded": this.state.loadState === LoadState.loaded,
      "failed": this.state.loadState === LoadState.failed
    });

    let appBackgroundClassNames = classnames({
      "app-bg": true,
      "active": this.state.loadState === LoadState.loaded
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