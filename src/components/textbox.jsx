import React, { Component } from "react";

class Textbox extends Component {
  state = { boxtext: "" };

  handleChange = () => {
    // The line below creates a copy of the state, using the spread operator
    let fields = { ...this.state.boxtext };
    fields = fields + "+";
    this.setState({ fields });
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "17%",
          transform: "translate(-50%, -50%)",
        }}
        className="form-group"
      >
        <label for="exampleLogicSymbol">Logic Operator</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputLogic"
          aria-describedby="logicHelp"
          placeholder="enter formula"
          onChange={this.props.handleInput}
          value={this.props.content}
        ></input>
      </div>
    );
  }
}

export default Textbox;
