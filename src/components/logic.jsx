import React, { Component } from "react";
import Textbox from "./textbox";

//logic operator buttons
class Logic extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  plusOnClick = () => {
    this.setState((state) => ({
      value: state.value + "+",
    }));
  };

  render() {
    return (
      <div
        className="App"
        style={{
          position: "absolute",
          left: "10%",
          top: "20%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button
          onClick={this.plusOnClick}
          className={"btn btn-primary btn-sm m-2 p-1"}
        >
          ¬
        </button>
      </div>
    );
  }
}

export default Logic;
