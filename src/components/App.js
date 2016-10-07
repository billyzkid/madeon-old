import React from "react";
import classnames from "classnames";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      touchSupport: false,
      loading: true,
      bgLoaded: false,
      animate: false,
      isLooperActive: false,
      hasError: false
    };
  }

  onMainBgClick(e) {
    this.setState({ bgLoaded: true });
  }

  render() {
    let appClassNames = classnames({
      "app": true,
      "no-touch": !this.state.touchSupport,
      "loading": this.state.loading,
      "bgLoaded": this.state.bgLoaded,
      "animate": this.state.animate,
      "looper-active": this.state.isLooperActive,
      "error": this.state.hasError
    });

    let mainBgClassNames = classnames({
      "main-bg": true,
      "active": this.state.bgLoaded
    });

    return (
      <div className={appClassNames}>
        <div className={mainBgClassNames} onClick={this.onMainBgClick.bind(this)}></div>
        <div className="album-art"></div>
        <div className="madeon-ui"></div>
      </div>
    );
  }
}

export default App;