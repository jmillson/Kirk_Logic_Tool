import React, { Component } from "react";

//logic operator buttons
class Logic3 extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "30%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button
          onClick={this.handleIncrement}
          className={"btn btn-primary btn-sm m-2 p-1"}
        >
          ↔︎
        </button>
      </div>
    );
  }
}

export default Logic3;
