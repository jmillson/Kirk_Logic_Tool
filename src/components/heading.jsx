import React, { Component } from "react";

class Heading extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "17%",
          top: "7%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1>Kirk Logic Tool</h1>
      </div>
    );
  }
}

export default Heading;
