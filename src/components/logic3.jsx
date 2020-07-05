import React, { Component } from "react";

//logic operator buttons
class Logic3 extends Component {
  constructor(props) {
    super(props);
    this.handleAddSymbol = this.handleAddSymbol.bind(this);
  }

  handleAddSymbol() {
    this.props.handleAdd("↔︎");
  }

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
          onClick={this.handleAddSymbol}
          className={"btn btn-primary btn-sm m-2 p-1"}
        >
          ↔︎
        </button>
      </div>
    );
  }
}

export default Logic3;
