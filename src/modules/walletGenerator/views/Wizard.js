import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnimationsWrapper from "../../base-ui/AnimationWrapper";

class Wizard extends Component {
  render() {
    return (
      <div className="container has-text-centered">
        <AnimationsWrapper>
          <p className="title">
            All right! Let&apos;s create a paper wallet. <br />How do do you
            want to create a paper wallet?
          </p>
          <Link to="/create-wallet" className="button is-success">
            Generate one from scratch
          </Link>
          <Link to="/create-wallet?created=true" className="button is-success">
            I already generated the passpharase
          </Link>
          <Link
            to="/create-wallet?blueprint=true"
            className="button is-success"
          >
            I only want the paperwallet blueprint to print.
          </Link>
        </AnimationsWrapper>
      </div>
    );
  }
}

export default Wizard;
