import React, { Component } from "react";

//logic operator buttons
class Logic6 extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "15%",
          top: "25%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button
          onClick={this.handleIncrement}
          className={"btn btn-primary btn-sm m-2 p-1"}
        >
          →
        </button>
      </div>
    );
  }
}

export default Logic6;
