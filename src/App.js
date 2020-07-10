import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Logic from "./components/logic";
import Logics from "./components/logics";
import Textbox from "./components/textbox";
import Heading from "./components/heading";
import Splitting from "./components/rules/splitting";
import Stacking from "./components/rules/stacking";
import BranchClosure from "./components/rules/branchClosure";
//import Add from "./components/add/add";

export class App extends Component {
  constructor() {
    super();
    this.state = { content: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(evt) {
    this.setState({ content: evt.target.value });
  }

  handleAdd(symbol) {
    this.setState({ content: this.state.content + symbol });
  }

  render() {
    return (
      <>
        <Logic handleAdd={this.handleAdd} />
        <Logics handleAdd={this.handleAdd} />
        <Heading />
        <Splitting />
        <Textbox content={this.state.content} handleInput={this.handleChange} />
        <Stacking />
        <BranchClosure />
      </>
    );
  }
}

export default App;
