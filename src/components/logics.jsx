import React, { Component } from "react";
import Logic from "./logic";
import Logic2 from "./logic2";
import Logic3 from "./logic3";
import Logic4 from "./logic4";
import Logic5 from "./logic5";
import Logic6 from "./logic6";
import Logic7 from "./logic7";
import Textbox from "./textbox";

class Logics extends Component {
  render() {
    return (
      <div>
        <Logic handleAdd={this.props.handleAdd} />
        <Logic2 handleAdd={this.props.handleAdd} />
        <Logic3 handleAdd={this.props.handleAdd} />
        <Logic4 handleAdd={this.props.handleAdd} />
        <Logic5 handleAdd={this.props.handleAdd} />
        <Logic6 handleAdd={this.props.handleAdd} />
        <Logic7 handleAdd={this.props.handleAdd} />
        <Textbox />
      </div>
    );
  }
}

export default Logics;
