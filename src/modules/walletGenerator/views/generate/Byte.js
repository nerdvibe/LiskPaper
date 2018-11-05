import React, { Component } from "react";
import AnimateOnChange from "react-animate-on-change";

class Byte extends Component {
  render() {
    return (
      <AnimateOnChange
        animate={this.props.diff}
        baseClassName="stable"
        animationClassName="bouncing"
      >
        <span className="byte">
          {this.props.value}
        </span>
      </AnimateOnChange>
    );
  }
}

export default Byte;
