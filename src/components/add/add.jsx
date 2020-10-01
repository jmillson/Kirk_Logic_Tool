import React, { Component } from "react";

class Add extends Component {
  state = {};
  render() {
    return (
      <div
        className="App"
        style={{
          position: "absolute",
          left: "30%",
          top: "19%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button
          onClick={this.handleAddSymbol}
          className={"btn btn-success btn-sm m-2 p-1 container"}
        >
          +
        </button>
      </div>
    );
  }
}

export default Add;
