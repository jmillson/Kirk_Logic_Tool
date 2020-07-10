import React, { Component } from "react";
import Add from "./add/add";

class Textbox extends Component {
  state = {
    boxtext: "",
    addBox: [],
    button: "",
  };

  handleChange = () => {
    // The line below creates a copy of the state, using the spread operator
    let fields = { ...this.state.boxtext };
    fields = fields + "+";
    this.setState({ fields });
  };

  //Handle box addition click
  addTextBox = () => {
    const boxAdded = [...this.state.addBox];
    boxAdded.push(1);
    this.setState({
      addBox: boxAdded,
    });
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
        />
        <Add
          className={"btn btn-success btn-sm m-2 p-1 container"}
          clickEvent={this.addTextBox}
        >
          +
        </Add>
        {this.state.addBox.map(() => {
          return (
            <input
              style={{ margin: "15px" }}
              type="text"
              className="form-control"
              id="exampleInputLogic"
              aria-describedby="logicHelp"
              placeholder="ENTER"
            />
            //clickevent is made up name (property)
          );
        })}
      </div>
    );
  }
}

export default Textbox;
