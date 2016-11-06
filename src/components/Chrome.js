import React from "react";
import Button from "./Button";
import "./Chrome.scss";

export default class Chrome extends React.PureComponent {
  static propTypes = {
    actions: React.PropTypes.object
  };

  render() {
    console.log("render", this.constructor.name);
    const actions = this.props.actions;

    return (
      <div className="chrome">
        <div className="header">
          <a href="http://madeon.fr" target="_blank">Madeon's Adventure Machine</a>
        </div>
        <div className="footer">
          <a href="http://wmas.it" target="_blank">We Made This</a>
        </div>
        <div className="buttons">
          <section>
            <Button label="Share" onClick={actions.share} />
            <Button icon="&#xf064;" title="Share URL" onClick={actions.url} />
            <Button icon="&#xf099;" title="Share on Twitter" onClick={actions.twitter} />
            <Button icon="&#xf09a;" title="Share on Facebook" onClick={actions.facebook} />
          </section>
          <section>
            <Button label="Info" onClick={actions.info} />
            <Button label="About" onClick={actions.about} />
            <Button icon="&#xf287;" title="Connect your Launchpad" onClick={actions.launchpad} />
            <Button icon="&#xf128;" title="Help!" onClick={actions.help} />
          </section>
          <section>
            <Button icon="&#xf04b;" title="Play" onClick={actions.play} />
            <Button icon="&#xf04c;" title="Pause" onClick={actions.pause} />
          </section>
          <section>
            <Button icon="&#xf04d;" title="Stop" onClick={actions.stop} />
          </section>
        </div>
      </div>
    );
  }
}