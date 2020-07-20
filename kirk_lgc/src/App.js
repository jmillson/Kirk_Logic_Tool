import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula1: "", //contains the input field text 1
      formula2: "", //contains the input field text 2
      formula3: "", //contains the input field text 3
      formula4: "", //contains the input field text 4
      formula5: "", //contains the input field text 5
      formula6: "", //contains the input field text 6
      formula7: "", //contains the input field text 7
      textInputIterator: 1, //shows the number before the input field
      textInputIterator2: 1, //shows the number before the input field within the stacking rule
      clickedInputId: null, //input text field gets an id between 1-7 onclick event
      checkboxPipe1: false, //checkbox default unchecked=false, checked=true
      checkboxPipe2: false, //checkbox default unchecked=false, checked=true
      checkboxPipe3: false, //checkbox default unchecked=false, checked=true
      checkboxPipe4: false, //checkbox default unchecked=false, checked=true
      checkboxPipe5: false, //checkbox default unchecked=false, checked=true
      checkboxPipe6: false, //checkbox default unchecked=false, checked=true
      checkboxPipe7: false, //checkbox default unchecked=false, checked=true
      checkboxChecked: [], //checked checkbox id added to this array
      ruleNumber: "0", // if clicked on splitting rule=1, stacking rule=2, barnch closure=3
      isRuleBoxClicked: false, //this is the orange rule box, if clicked it is true
      isRuleBoxClicked2: false, //this is the orange rule box, if clicked it is true
      orangeRuleBoxNumber: null, //gives back the number of in which place the symbol is in the orangeRuleBoxSymbolsArray
    };
  }

  clickPlusButton = () => {
    //function to make + button work
    if (this.state.ruleNumber === "2") {
      //if stacking rule clicked
      this.setState({
        //stops adding more input fields, it adds stacking rule fields after | line
        textInputIterator: this.state.textInputIterator,
        textInputIterator2: this.state.textInputIterator2 + 1,
      });
    } else {
      this.setState({
        //if stacking rule not clicked, it keeps adding normal input fields
        textInputIterator: this.state.textInputIterator + 1,
      });
    }
  };

  inputText = (event) => {
    //this function checks which input text is used and change its value in state
    console.log(this.state);
    if (event.target.id === "1") {
      this.setState({ formula1: event.target.value });
    } else if (event.target.id === "2") {
      this.setState({ formula2: event.target.value });
    } else if (event.target.id === "3") {
      this.setState({ formula3: event.target.value });
    } else if (event.target.id === "4") {
      this.setState({ formula4: event.target.value });
    } else if (event.target.id === "5") {
      this.setState({ formula5: event.target.value });
    } else if (event.target.id === "6") {
      this.setState({ formula6: event.target.value });
    } else if (event.target.id === "7") {
      this.setState({ formula7: event.target.value });
    }
  };

  clickOperator = (event) => {
    //this gives the symbol into text field based on which symbol button is clicked
    if (this.state.clickedInputId === "1") {
      this.setState({ formula1: this.state.formula1 + event }); // these are the input fields updated with the clicked symbol
    } else if (this.state.clickedInputId === "2") {
      this.setState({ formula2: this.state.formula2 + event }); // these are the input fields updated with the clicked symbol
    } else if (this.state.clickedInputId === "3") {
      this.setState({ formula3: this.state.formula3 + event }); // these are the input fields updated with the clicked symbol
    } else if (this.state.clickedInputId === "4") {
      this.setState({ formula4: this.state.formula4 + event }); // these are the input fields updated with the clicked symbol
    } else if (this.state.clickedInputId === "5") {
      this.setState({ formula5: this.state.formula5 + event }); // these are the input fields updated with the clicked symbol
    } else if (this.state.clickedInputId === "6") {
      this.setState({ formula6: this.state.formula6 + event }); // these are the input fields updated with the clicked symbol
    } else if (this.state.clickedInputId === "7") {
      this.setState({ formula7: this.state.formula7 + event }); // these are the input fields updated with the clicked symbol
    }
  };

  clickInput = (event) => {
    //input text field gets the id here upon clicking
    this.setState({ clickedInputId: event.target.id });
  };

  clickCheckbox = (event) => {
    //updated checkbox state based on which one is checked
    if (event.target.id === "1") {
      this.setState({ checkboxPipe1: !this.state.checkboxPipe1 });
    } else if (event.target.id === "2") {
      this.setState({ checkboxPipe2: !this.state.checkboxPipe2 });
    } else if (event.target.id === "3") {
      this.setState({ checkboxPipe3: !this.state.checkboxPipe3 });
    } else if (event.target.id === "4") {
      this.setState({ checkboxPipe4: !this.state.checkboxPipe4 });
    } else if (event.target.id === "5") {
      this.setState({ checkboxPipe5: !this.state.checkboxPipe5 });
    } else if (event.target.id === "6") {
      this.setState({ checkboxPipe6: !this.state.checkboxPipe6 });
    } else if (event.target.id === "7") {
      this.setState({ checkboxPipe7: !this.state.checkboxPipe7 });
    }
  };

  isAnyCheckboxChecked = (apply, notApply) => {
    //checks if any checkbox checked then given rule applied
    if (
      this.state.checkboxPipe1 ||
      this.state.checkboxPipe2 ||
      this.state.checkboxPipe3 ||
      this.state.checkboxPipe4 ||
      this.state.checkboxPipe5 ||
      this.state.checkboxPipe6 ||
      this.state.checkboxPipe7
    ) {
      return apply; //true if any of ther above is checked (true)
    } else {
      return notApply;
    } //ture if neither of the above is checked
  };

  isRuleBoxClicked = () => {
    //if the orange rulebox clicked...
    this.setState({ isRuleBoxClicked: !this.state.isRuleBoxClicked }); //it toggles the dropdown symbol table...
    this.setState({ isRuleBoxClicked2: false }); //and it keeps the second orange rulebox drowdown closed
  };

  isRuleBoxClicked2 = () => {
    //if the second orange rulebox clicked...
    this.setState({ isRuleBoxClicked2: !this.state.isRuleBoxClicked2 }); //it toggles the second drowdown...
    this.setState({ isRuleBoxClicked: false }); //and keeps the first one closed
  };

  ruleBox = (event) => {
    //it gives back the id of the rulebox (splitting/stacking/branch)
    if (this.isAnyCheckboxChecked(true, false)) {
      //if any checkbox is checked...
      this.setState({ ruleNumber: event.target.id }); //checkes which rule of the three is clicked
      //console.log(this.state.checkboxChecked)
    }
  };

  orangeRuleBoxSymbolsClick = (event) => {
    //updates the id of the orange rulebox in state
    this.setState({ orangeRuleBoxNumber: event.target.id });
  };

  logicalOperatorsArray = ["¬", "∧", "∨", "→", "↔", "∀", "∃"]; //array of all the symbols for the button on the left

  logicalOperators = this.logicalOperatorsArray.map((symbol, index) => {
    //generates the symbol buttons according to the logicalOperatorsArray
    return (
      <div
        key={index}
        className="operator-btn"
        onClick={() => this.clickOperator(symbol)}
      >
        {symbol}
      </div>
    );
  });

  orangeRuleBoxSymbolsArray = [
    "∧",
    "¬∨",
    "∨",
    "¬∧",
    "→",
    "¬→",
    "↔",
    "¬↔",
    "¬¬",
    "∀",
    "∃",
    "",
  ]; //array of all symbols in dropdown menu of the orange rule box

  orangeRuleBox = (x, y) => [
    //this function contains all the orange rule box along with its dropdown design
    <div key="1" className="rule" onClick={x}>
      RULE▾
    </div>,
    <div
      key="2"
      className="rule-items"
      style={y ? { display: "grid" } : { display: "none" }}
    >
      {this.orangeRuleBoxSymbolsArray.map((symbol, index) => {
        //generates the symbol buttons according to the orangeRuleBoxSymbolsArray
        return (
          <p
            key={index}
            id={index + 1}
            onClick={this.orangeRuleBoxSymbolsClick}
          >
            {symbol}
          </p>
        );
      })}
    </div>,
  ];

  render() {
    const inputField = []; //this array contains all the input fields along with the iteration number on its left and the checkbox on its right side
    const formulaArray = [
      this.state.formula1,
      this.state.formula2,
      this.state.formula3,
      this.state.formula4,
      this.state.formula5,
      this.state.formula6,
      this.state.formula7,
    ];
    //the formulaArray contains all the formula input text field state names in order to use it easily in the 'for' loop
    const checkPipeArray = [
      this.state.checkboxPipe1,
      this.state.checkboxPipe2,
      this.state.checkboxPipe3,
      this.state.checkboxPipe4,
      this.state.checkboxPipe5,
      this.state.checkboxPipe6,
      this.state.checkboxPipe7,
    ];
    //the checkPipeArray contains all the checkbox state in order to use it easily in the 'for' loop
    for (let index = 1; index <= this.state.textInputIterator; index++) {
      if (checkPipeArray[index - 1]) {
        this.state.checkboxChecked.push(index);
      }
      inputField.push(
        //this adds each line of tehxfields to the inputField array in the 'for' loop
        <div className="wrap" key={index}>
          <span>{index}.</span>
          {/*iteration number on the left side of input text*/}
          <input
            id={index}
            onChange={this.inputText}
            onClick={this.clickInput}
            type="text"
            placeholder="Enter a formula"
            value={formulaArray[index - 1]}
          >
            {/*unique value for each input field*/}
          </input>
          <div
            style={
              checkPipeArray[index - 1] &&
              this.state.ruleNumber !== "0" &&
              this.state.orangeRuleBoxNumber !== null
                ? { border: "initial", background: "initial" }
                : {}
            }
            className="checkbox"
            onClick={
              checkPipeArray[index - 1] &&
              this.state.ruleNumber !== "0" &&
              this.state.orangeRuleBoxNumber !== null
                ? null
                : this.clickCheckbox
            }
            id={index}
          >
            <span
              id={index}
              style={{
                display: `${checkPipeArray[index - 1] ? "initial" : "none"}`,
              }}
              className="pipe"
            >
              ✔
            </span>
          </div>
          {/*if checkbox checked & a rule is clicked & a rule in the orange rule box's dropdown is clicked then checkbox style hidden and clicking functionality suspended*/}
        </div>
      );
    }

    if (
      this.state.ruleNumber === "2" &&
      this.isAnyCheckboxChecked(true, false)
    ) {
      //if Stacking rule is clicked & any checkbox is checked...
      if (this.state.textInputIterator2 === 1) {
        //if just 1 text field shown after stacking rule
        inputField.push(
          <div key={inputField.length + 1}>
            {/*first input field line of stacking rule*/}
            <div className="wrap">
              <span>|</span>
            </div>
            <div className="wrap">
              <span>{inputField.length + 1}.</span>
              <input
                id={inputField.length + 1}
                onChange={this.inputText}
                onClick={this.clickInput}
                type="text"
                placeholder="Enter a formula"
                value={formulaArray[inputField.length]}
              ></input>
              <div
                className="checkbox"
                onClick={this.clickCheckbox}
                id={inputField.length + 1}
              >
                <span
                  id={inputField.length + 1}
                  style={{
                    display: `${
                      checkPipeArray[inputField.length] ? "initial" : "none"
                    }`,
                  }}
                  className="pipe"
                >
                  ✔
                </span>
              </div>
              {this.state.orangeRuleBoxNumber !== null ? (
                <p className="applied-yellow-box-symbol-number">
                  {this.state.checkboxChecked[0]}{" "}
                  {
                    this.orangeRuleBoxSymbolsArray[
                      this.state.orangeRuleBoxNumber - 1
                    ]
                  }
                </p>
              ) : (
                this.orangeRuleBox(
                  this.isRuleBoxClicked,
                  this.state.isRuleBoxClicked
                )
              )}
            </div>
          </div>
        );
      } else if (this.state.textInputIterator2 === 2) {
        //if both text fields are visible after stacking rule
        inputField.push(
          <div key={inputField.length + 1}>
            {/*first input field line of stacking rule*/}
            <div className="wrap">
              <span>|</span>
            </div>
            <div className="wrap">
              <span>{inputField.length + 1}.</span>
              <input
                id={inputField.length + 1}
                onChange={this.inputText}
                onClick={this.clickInput}
                type="text"
                placeholder="Enter a formula"
                value={formulaArray[inputField.length]}
              ></input>
              <div
                className="checkbox"
                onClick={this.clickCheckbox}
                id={inputField.length + 1}
              >
                <span
                  id={inputField.length + 1}
                  style={{
                    display: `${
                      checkPipeArray[inputField.length] ? "initial" : "none"
                    }`,
                  }}
                  className="pipe"
                >
                  ✔
                </span>
              </div>
              {this.state.orangeRuleBoxNumber !== null ? (
                <p className="applied-yellow-box-symbol-number">
                  {this.state.checkboxChecked[0]}{" "}
                  {
                    this.orangeRuleBoxSymbolsArray[
                      this.state.orangeRuleBoxNumber - 1
                    ]
                  }
                </p>
              ) : (
                this.orangeRuleBox(
                  this.isRuleBoxClicked,
                  this.state.isRuleBoxClicked
                )
              )}
            </div>
            <div className="wrap">
              <span>{inputField.length + 2}.</span>
              {/*second input field line of stacking rule*/}
              <input
                id={inputField.length + 2}
                onChange={this.inputText}
                onClick={this.clickInput}
                type="text"
                placeholder="Enter a formula"
                value={formulaArray[inputField.length + 1]}
              ></input>
              <div
                className="checkbox"
                onClick={this.clickCheckbox}
                id={inputField.length + 2}
              >
                <span
                  id={inputField.length + 2}
                  style={{
                    display: `${
                      checkPipeArray[inputField.length + 1] ? "initial" : "none"
                    }`,
                  }}
                  className="pipe"
                >
                  ✔
                </span>
              </div>
              {this.state.orangeRuleBoxNumber !== null ? (
                <p className="applied-yellow-box-symbol-number">
                  {this.state.checkboxChecked[0]}{" "}
                  {
                    this.orangeRuleBoxSymbolsArray[
                      this.state.orangeRuleBoxNumber - 1
                    ]
                  }
                </p>
              ) : (
                this.orangeRuleBox(
                  this.isRuleBoxClicked2,
                  this.state.isRuleBoxClicked2
                )
              )}
            </div>
          </div>
        );
      }
    }

    return (
      <div className="App">
        <h1>The Kirk Tool for Logic Trees</h1>
        <div className="left">
          <h2>Logical Operators</h2>
          {this.logicalOperators}
        </div>
        <div className="middle">
          {inputField}
          <div
            style={
              this.state.textInputIterator2 === 2 ? { display: "none" } : null
            }
            onClick={this.clickPlusButton}
            className="operator-btn"
          >
            +
          </div>
        </div>
        <div className="right">
          <h2
            style={{
              color: this.isAnyCheckboxChecked("rgb(28, 184, 41)", "black"),
            }}
          >
            Splitting Rule
          </h2>
          <div
            style={{
              border: `2px solid ${this.isAnyCheckboxChecked(
                "rgb(28, 184, 41)",
                "black"
              )}`,
            }}
            id="1"
            onClick={this.ruleBox}
            className="rule-box rbone"
          >
            <div className="q one">/</div>
            <div className="q two">\</div>
            <div className="q three">
              <div id="1" className="operator-btn"></div>
            </div>
            <div className="q four">
              <div id="1" className="operator-btn"></div>
            </div>
          </div>
          <h2
            style={{
              color: this.isAnyCheckboxChecked("rgb(28, 184, 41)", "black"),
            }}
          >
            Stacking Rule
          </h2>
          <div
            style={{
              border: `2px solid ${this.isAnyCheckboxChecked(
                "rgb(28, 184, 41)",
                "black"
              )}`,
            }}
            id="2"
            onClick={this.ruleBox}
            className="rule-box rbtwo"
          >
            <div className="t one">|</div>
            <div className="t two">
              <div id="2" className="operator-btn"></div>
            </div>
            <div className="t three">
              <div id="2" className="operator-btn"></div>
            </div>
          </div>
          <h2
            style={{
              color: this.isAnyCheckboxChecked("rgb(28, 184, 41)", "black"),
            }}
          >
            Branch Closure
          </h2>
          <div
            style={{
              border: `2px solid ${this.isAnyCheckboxChecked(
                "rgb(28, 184, 41)",
                "black"
              )}`,
            }}
            id="3"
            onClick={this.ruleBox}
            className="rule-box rbthree"
          >
            <div className="t one">
              <div id="3" className="operator-btn"></div>
            </div>
            <div className="t two">
              <div id="3" className="operator-btn"></div>
            </div>
            <div className="t three">✕</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
