import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Logic from "./components/logic";
import Logics from "./components/logics";
import Textbox from "./components/textbox";
import Heading from "./components/heading";
import Splitting from "./components/rules/splitting";
import Stacking from "./components/rules/stacking";
import BranchClosure from "./components/rules/branchClosure";

ReactDOM.render(
  <React.StrictMode>
    <Logic />
    <Logics />
    <Heading />
    <Splitting />
    <Textbox />
    <Stacking />
    <BranchClosure />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
