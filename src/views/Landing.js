import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import AnimationsWrapper from "../lib/AnimationWrapper";

class App extends Component {
  render() {
    return (
      <div className="container has-text-centered landing">
        <AnimationsWrapper>
          <h1 className="title">Lisk paper wallet</h1>
          <Offline>
            <h1 className="subtitle">(You are using this tool offline)</h1>
          </Offline>
          <p className="subtitle">
            Create your Lisk paper wallet offline in 2 easy steps
          </p>
          <Link to="/start" className="button is-primary">
            <i className="fa fa-cog fa-fw slow-spin" aria-hidden="true" />{" "}
            Create/Import a wallet
          </Link>
          <Link to="/how-it-works" className="button is-primary">
            <i className="fa fa-question-circle fa-fw" aria-hidden="true" /> How
            it works
          </Link>
          <Online>
            <Link to="https://github.com/xunga/LiskPaper/releases/tag/1.0" className="button is-primary">
              <i className="fa fa-download fa-fw" aria-hidden="true" /> Download
              offline version
            </Link>
          </Online>
        </AnimationsWrapper>
      </div>
    );
  }
}

export default App;
