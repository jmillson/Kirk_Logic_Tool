import React, { Component } from "react";

class Stacking extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "90%",
          top: "35%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button
          onClick={this.handleIncrement}
          className={"btn btn-warning btn-lg m-2 p-1 container"}
        >
          Stacking
        </button>
      </div>
    );
  }
}

export default Stacking;
