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
  state = {};

  render() {
    return (
      <div>
        <Logic />
        <Logic2 />
        <Logic3 />
        <Logic4 />
        <Logic5 />
        <Logic6 />
        <Logic7 />
        <Textbox />
      </div>
    );
  }
}

export default Logics;
