import React from 'react';
import './App.css';

import LogicalOperators from './components/left/LogicalOperators';
import FieldsTogether from './components/middle/FieldsTogether';
import OperatorButton from './components/middle/assets/OperatorButton';
import SplittingRule from './components/right/splittingRule/SplittingRule';
import StackingRule from './components/right/stackingRule/StackingRule';
import BranchClosure from './components/right/branchClosure/BranchClosure';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusField: null,                 // turns to a number depending on which field is clicked
      ruleOrder: [],                    // makes an array of 1 and 2's. 1: splitting 2: stacking
      plusButtonMain: true,             // makes the plus button work if it's true
      expandArray: [],           
      branchClosure: false,
      inputField: [                     // object of all the necessary data to one line
        {
          focusInput1: false,           // true if input field is clicked
          fieldNumber: 1,               // gives back which row is clicked
          fieldText1: "",               // contains the text input
          checkbox1: false,             // if checkbox checked it's true
          checkbox1Confirmed: false,
          orangeRuleItem: "",
          rowNumbers: [],
          type: "single"                // input line: single / splitting / stacking
        }
      ]
    }
  }

  branchClosure = () => {
    this.setState({branchClosure: !this.state.branchClosure})
    const rowNumbers = [];
    this.state.inputField.map((currentRow) => {
        if (currentRow.checkbox1 || currentRow.checkbox2 || currentRow.checkbox3 || currentRow.checkbox4) {
            rowNumbers.push(currentRow.fieldNumber)
        }
        console.log(rowNumbers)
        return rowNumbers;
    })
    let whichCheckbox = null;
    this.state.inputField.map((currentRow) => currentRow.checkbox1 ? whichCheckbox = 1 : currentRow.checkbox2 ? whichCheckbox = 2 : currentRow.checkbox3 ? whichCheckbox = 3 : currentRow.checkbox4 ? whichCheckbox = 4 : whichCheckbox = null);
    console.log(whichCheckbox)
    let newArray = [...this.state.inputField];
    newArray[rowNumbers[0]-1] = {...newArray[rowNumbers[0] - 1], checkbox1: false, checkbox2: false, checkbox3: false, checkbox4: false};
    newArray[rowNumbers[1]-1] = {...newArray[rowNumbers[1] - 1], rowNumbers: [...newArray[rowNumbers[1] - 1].rowNumbers, ...rowNumbers], whichCheckbox: whichCheckbox, checkbox1: false, checkbox2: false, checkbox3: false, checkbox4: false};
    this.setState({branchClosure: false, inputField: newArray});
  }

  orderRules = (id) => {
      this.state.inputField.map((arrayItem) => {
        let rule = null;
        if (arrayItem.checkbox1 || arrayItem.checkbox2 || arrayItem.checkbox3 || arrayItem.checkbox4) {
          rule = this.setState({
            ruleOrder: [...this.state.ruleOrder, id],
            plusButtonMain: true
          });
        }
        return rule;
      })
  }

  operatorButton = () => {                                                        // this is the code of the '+' button
    if (this.state.ruleOrder.length === 0) {                                      // if it is just the single (initial) line... 
      this.setState({inputField: [...this.state.inputField,
        {
          focusInput1: false,
          fieldNumber: this.state.inputField.length + 1,                          // ...it is iterated by cliciking the button
          fieldText1: "",
          checkbox1: false,                                                       // ...and adds to inputField object in state
          checkbox1Confirmed: false,
          orangeRuleItem: "",
          rowNumbers: [],
          type: "single"
        }
      ]})
    }
    const lastNum = this.state.ruleOrder.length -1;                               // gives back how many lines are in the page
    if (this.state.ruleOrder[lastNum] === 1 && this.state.plusButtonMain) {       // if the last line is "single" line and plus button is true (working)... (working if stacking or splitting rule is clicked before)
      this.setState({inputField: [...this.state.inputField,
        {
          focusInput1: false,
          focusInput2: false,
          focusInput3: false,
          focusInput4: false,
          fieldNumber: this.state.inputField.length + 1,
          fieldText1: "",
          fieldText2: "",                                                         // ... this new objected adds to inputField object
          fieldText3: "",
          fieldText4: "",
          fieldNumberAndOrangeRuleItem: "",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
          checkbox1Confirmed: false,
          checkbox2Confirmed: false,
          checkbox3Confirmed: false,
          checkbox4Confirmed: false,
          expanded: false,
          orangeRuleBox: false,
          orangeRuleBox2: false,
          orangeRuleItem: "",
          sidingStyle: {},
          rowNumbers: [],
          whichCheckbox: null,
          type: "splitting"                                                       // this is an {object} of a splitting line
        }
      ]})
      this.setState({plusButtonMain: false});                                     // eventually it turns on the '+' button
    } else if (this.state.ruleOrder[lastNum] === 2 && this.state.plusButtonMain) {// if the last line is a splitting line and '+' working (as another rule is clicked)...
      this.setState({inputField: [...this.state.inputField,
        {
          focusInput1: false,
          focusInput2: false,
          fieldNumber: this.state.inputField.length + 1,
          fieldText1: "",
          fieldText2: "",
          fieldNumberAndOrangeRuleItem: "",
          checkbox1: false,                                                       // ...then this time a stacking line is applied and adds as an object to inputField array
          checkbox2: false,
          checkbox1Confirmed: false,
          checkbox2Confirmed: false,
          expanded: false,
          orangeRuleBox: false,
          orangeRuleBox2: false,
          orangeRuleItem: "",
          sidingStyle: {},
          rowNumbers: [],
          whichCheckbox: null,
          type: "stacking"
        }
      ]})
      this.setState({plusButtonMain: false});                                     // '+' button turnes off each time in order to prevebt unnecessary actions
    }
  }
///////////////////////////////////
  sidingStyle = () => {
    const fieldIndex = this.state.focusField - 1;
    const prevField = this.state.inputField.length - 1;
    const prevPrevField = this.state.inputField.length - 2;
    let newArray = [...this.state.inputField];
    this.state.inputField.map((field, i) => {
      //let style = {};
      if ((field.checkbox1 || field.checkbox2 || field.checkbox3 || field.checkbox4) && newArray[prevPrevField].type !== "single") {
        newArray[prevField] = {...newArray[prevField], sidingStyle: {display: "grid", gridColumnStart: "unset", gridColumnEnd: "unset"}};
        /*if (field.type === "single") {newArray[fieldIndex] = {...newArray[fieldIndex], checkbox1: false};}
        /*else if (field.type === "stacking") {newArray[fieldIndex] = {...newArray[fieldIndex], checkbox1: false, checkbox2: false};}*/
        console.log('INPUT FIELD ON BOTH SIDES');
      }
      if (field.type !== "single" && field.sidingStyle.gridColumnStart === undefined && field.sidingStyle.gridColumn === undefined /*&& field.fieldNumber === this.state.inputField.length - 1*/ && (field.checkbox1 || field.checkbox3)) {
        newArray[prevField] = {...newArray[prevField], sidingStyle: {gridColumnStart: "1", gridColumnEnd: "3"}};
        newArray[fieldIndex] = {...newArray[fieldIndex]/*, checkbox1: false, checkbox3: false*/};
        console.log('INPUT FIELD ON LEFT SIDE');
      } 
      if (field.type !== "single" && field.sidingStyle.gridColumnStart === undefined && field.sidingStyle.gridColumn === undefined /*&& field.fieldNumber === this.state.inputField.length - 1*/ && (field.checkbox2 || field.checkbox4)) {
        newArray[prevField] = {...newArray[prevField], sidingStyle: {gridColumnStart: "3", gridColumnEnd: "5"}};
        newArray[fieldIndex] = {...newArray[fieldIndex]/*, checkbox2: false, checkbox4: false*/};
        console.log('INPUT FIELD ON RIGHT SIDE');
      } 
      if (field.type !== "single" &&
              ((field.sidingStyle.gridColumnStart === "1" && 
              field.sidingStyle.gridColumnEnd === "3") || 
              field.sidingStyle.gridColumn !== undefined) && 
              (field.checkbox1 || field.checkbox3)) {
        newArray[prevField] = {...newArray[prevField], sidingStyle: {gridColumn: "1 / span 1"}};
        console.log('INPUT FIELD ON LEFT OF LEFT SIDE');
      }
      if (field.type !== "single" && 
              ((field.sidingStyle.gridColumnStart === "1" && 
              field.sidingStyle.gridColumnEnd === "3") || 
              field.sidingStyle.gridColumn !== undefined) && 
              (field.checkbox2 || field.checkbox4)) {
        newArray[prevField] = {...newArray[prevField], sidingStyle: {gridColumn: "2 / span 1"}};
        console.log('INPUT FIELD ON RIGHT OF LEFT SIDE');
      }
      if (field.type !== "single" &&
              ((field.sidingStyle.gridColumnStart === "3" && 
              field.sidingStyle.gridColumnEnd === "5") || 
              field.sidingStyle.gridColumn !== undefined) && 
              (field.checkbox1 || field.checkbox3)) {
        newArray[prevField] = {...newArray[prevField], sidingStyle: {gridColumn: "3 / span 1"}};
        console.log('INPUT FIELD ON LEFT OF RIGHT SIDE');
      }
      if (field.type !== "single" && 
              ((field.sidingStyle.gridColumnStart === "3" && 
              field.sidingStyle.gridColumnEnd === "5") || 
              field.sidingStyle.gridColumn !== undefined) && 
              (field.checkbox2 || field.checkbox4)) {
        newArray[prevField] = {...newArray[prevField], sidingStyle: {gridColumn: "4 / span 1"}};
        console.log('INPUT FIELD ON RIGHT OF RIGHT SIDE');
      }
                                                if (field.type !== "single" &&
                                                        ((field.sidingStyle.gridColumnStart === "1" && 
                                                        field.sidingStyle.gridColumnEnd === "5") ||
                                                        field.sidingStyle.gridColumnStart === undefined) && 
                                                        field.fieldNumber < this.state.inputField.length - 1 &&
                                                        (field.checkbox1 || field.checkbox3) &&
                                                        (field.checkbox1Confirmed || field.checkbox3Confirmed)) {
                                                          /*if (field[field.length-1].sidingStyle.gridColumnEnd === "3") {
                                                            newArray[prevField] = {...newArray[prevField], sidingStyle: {gridColumn: "1 / span 2"}};
                                                          }*/
                                                  newArray[prevField] = {...newArray[prevField], sidingStyle: {gridRowStart: `${this.state.inputField.length}`, gridColumn: "1 / span 2"}};
                                                  console.log('INPUT FIELD ON LEFT SPAN 2');
                                                }
                                                if (field.type !== "single" &&
                                                        ((field.sidingStyle.gridColumnStart === "1" && 
                                                        field.sidingStyle.gridColumnEnd === "5") ||
                                                        field.sidingStyle.gridColumnStart === undefined) &&  
                                                        field.fieldNumber < this.state.inputField.length - 1 &&
                                                        (field.checkbox2 || field.checkbox4) &&
                                                        (field.checkbox2Confirmed || field.checkbox4Confirmed)) {
                                                  newArray[prevField] = {...newArray[prevField], sidingStyle: {gridRowStart: `${this.state.inputField.length}`, gridColumn: "3 / span 2"}};
                                                  console.log('INPUT FIELD ON RIGHT SPAN 2');
                                                }
      /*if (field.type === "splitting" && (field.checkbox1 || field.checkbox2 || field.checkbox3 || field.checkbox4)) {
        newArray[fieldIndex] = {...newArray[fieldIndex], checkbox1: false, checkbox2: false, checkbox3: false, checkbox4: false};
      }*/
      return newArray;
    })
    this.setState({inputField: newArray});
  }
//////////////////////////////////
  fieldNumberAndOrangeRuleItem = (fieldNum, orangeRuIt, chckbxCnfrmd) => {
    const fieldIndex = this.state.focusField - 1;
    let newArray = [...this.state.inputField];
    newArray[fieldNum].checkbox1 || newArray[fieldNum].checkbox2 ?
      newArray[fieldIndex] = {...newArray[fieldIndex], fieldNumberAndOrangeRuleItem: fieldNum + 1 + orangeRuIt} :
      newArray[fieldIndex] = {...newArray[fieldIndex], fieldNumberAndOrangeRuleItem: fieldNum + 2 + orangeRuIt};
    this.setState({inputField: newArray});
    const lastState = this.state.inputField[this.state.inputField.length-1].orangeRuleBox;
    const lastState2 = this.state.inputField[this.state.inputField.length-1].orangeRuleBox2;
    if (chckbxCnfrmd === 1 && (lastState || lastState2)) {
        newArray[fieldNum] = {...newArray[fieldNum], checkbox1: false, checkbox1Confirmed: true};
        this.setState({inputField: newArray});
      }
      if (chckbxCnfrmd === 2 && (lastState || lastState2)) {
        newArray[fieldNum] = {...newArray[fieldNum], checkbox2: false, checkbox2Confirmed: true};
        this.setState({inputField: newArray});
      }
      if (chckbxCnfrmd === 3 && (lastState || lastState2)) {
        newArray[fieldNum] = {...newArray[fieldNum], checkbox3: false, checkbox3Confirmed: true};
        this.setState({inputField: newArray});
      }
      if (chckbxCnfrmd === 4 && (lastState || lastState2)) {
        newArray[fieldNum] = {...newArray[fieldNum], checkbox4: false, checkbox4Confirmed: true};
        this.setState({inputField: newArray});
      }
  }

  orangeRuleBox = (x) => {
    const fieldIndex = this.state.focusField - 1;
    let newArray = [...this.state.inputField];
    if (x === 1) {
      newArray[fieldIndex] = {...newArray[fieldIndex], orangeRuleBox: !newArray[fieldIndex].orangeRuleBox, orangeRuleBox2: false};
    }
    if (x === 2) {
      newArray[fieldIndex] = {...newArray[fieldIndex], orangeRuleBox2: !newArray[fieldIndex].orangeRuleBox2, orangeRuleBox: false};
    }
    this.setState({inputField: newArray});
  }

  logicalOperatorButton = (symbol) => {                                           // function of the logical operator buttons on the left of the page
    const fieldIndex = this.state.focusField - 1;
    let newArray = [...this.state.inputField];
    if (newArray[fieldIndex].type === "single") {
      newArray[fieldIndex] = {...newArray[fieldIndex], fieldText1: newArray[fieldIndex].fieldText1 + symbol};
      this.setState({inputField: newArray});
    } else if (newArray[fieldIndex].type === "splitting") {
            if (newArray[fieldIndex].focusInput1) {
              newArray[fieldIndex] = {...newArray[fieldIndex], fieldText1: newArray[fieldIndex].fieldText1 + symbol};
            } else if (newArray[fieldIndex].focusInput2) {
              newArray[fieldIndex] = {...newArray[fieldIndex], fieldText2: newArray[fieldIndex].fieldText2 + symbol};
            } else if (newArray[fieldIndex].focusInput3) {
              newArray[fieldIndex] = {...newArray[fieldIndex], fieldText3: newArray[fieldIndex].fieldText3 + symbol};
            } else if (newArray[fieldIndex].focusInput4) {
              newArray[fieldIndex] = {...newArray[fieldIndex], fieldText4: newArray[fieldIndex].fieldText4 + symbol};
            }
      this.setState({inputField: newArray});
    } else if (newArray[fieldIndex].type === "stacking") {
            if (newArray[fieldIndex].focusInput1) {
              newArray[fieldIndex] = {...newArray[fieldIndex], fieldText1: newArray[fieldIndex].fieldText1 + symbol};
            } else if (newArray[fieldIndex].focusInput2) {
              newArray[fieldIndex] = {...newArray[fieldIndex], fieldText2: newArray[fieldIndex].fieldText2 + symbol};
            }
      this.setState({inputField: newArray});
    }
  }

  /*focusFieldNumber = (number) => {
    this.setState({focusField: number});
    console.log("focusfield number in focusFieldNumber: ", this.state.focusField)
  }*/

  focusFieldNumber = (number) => {                                                          // function to set the active clicked field's number in state
      this.setState({focusField: number});
      console.log('field number: ', number);
  }
 
  whichTextField = (fieldId) => {                                                           // based on which field is active it turnes on and off all the other fields...
    const number = this.state.focusField - 1;                                               // ...to put the symbol to the right field
    console.log('textfield: ', fieldId)
    if (fieldId === "1") {
      let newArray = [...this.state.inputField];
      newArray[number] = {...newArray[number], focusInput1: true, focusInput2: false, focusInput3: false, focusInput4: false};
      this.setState({inputField: newArray});
    } else if (fieldId === "2") {
      let newArray = [...this.state.inputField];
      newArray[number] = {...newArray[number], focusInput1: false, focusInput2: true, focusInput3: false, focusInput4: false};
      this.setState({inputField: newArray});
    } else if (fieldId === "3") {
      let newArray = [...this.state.inputField];
      newArray[number] = {...newArray[number], focusInput1: false, focusInput2: false, focusInput3: true, focusInput4: false};
      this.setState({inputField: newArray});
    } else if (fieldId === "4") {
      let newArray = [...this.state.inputField];
      newArray[number] = {...newArray[number], focusInput1: false, focusInput2: false, focusInput3: false, focusInput4: true};
      this.setState({inputField: newArray});
    }
  }

  inputChanger = (fieldText, fieldNumber) => {                                                  // changes the first text input value of any kind of the three types of lines
    const fieldIndex = this.state.inputField.findIndex(id =>
      id.fieldNumber === fieldNumber);
    let newArray = [...this.state.inputField];
    newArray[fieldIndex] = {...newArray[fieldIndex], fieldText1: fieldText};
    this.setState({inputField: newArray});
  }

  inputChanger2 = (fieldText, fieldNumber) => {                                                 // changes the second text input value of any kind of the three types of lines
    const fieldIndex = this.state.inputField.findIndex(id =>
      id.fieldNumber === fieldNumber);
    let newArray = [...this.state.inputField];
    newArray[fieldIndex] = {...newArray[fieldIndex], fieldText2: fieldText};
    this.setState({inputField: newArray});
  }

  inputChanger3 = (fieldText, fieldNumber) => {                                                 // changes the third text input value of any kind of the three types of lines
    const fieldIndex = this.state.inputField.findIndex(id =>
      id.fieldNumber === fieldNumber);
    let newArray = [...this.state.inputField];
    newArray[fieldIndex] = {...newArray[fieldIndex], fieldText3: fieldText};
    this.setState({inputField: newArray});
  }

  inputChanger4 = (fieldText, fieldNumber) => {                                                 // changes the fourth text input value of any kind of the three types of lines
    const fieldIndex = this.state.inputField.findIndex(id =>
      id.fieldNumber === fieldNumber);
    let newArray = [...this.state.inputField];
    newArray[fieldIndex] = {...newArray[fieldIndex], fieldText4: fieldText};
    this.setState({inputField: newArray});
  }

  checkboxChanger = (fieldNumber) => {                                                          // toggles the first checkbox of any kind of the three types of lines
    const fieldIndex = this.state.inputField.findIndex(id =>
      id.fieldNumber === fieldNumber);
    let newArray = [...this.state.inputField];
    newArray[fieldIndex] = {...newArray[fieldIndex], checkbox1: !newArray[fieldIndex].checkbox1};
    this.setState({inputField: newArray});
  }

  checkboxChanger2 = (fieldNumber) => {                                                         // toggles the second checkbox of any kind of the three types of lines
    const fieldIndex = this.state.inputField.findIndex(id =>
      id.fieldNumber === fieldNumber);
    let newArray = [...this.state.inputField];
    newArray[fieldIndex] = {...newArray[fieldIndex], checkbox2: !newArray[fieldIndex].checkbox2};
    this.setState({inputField: newArray});
  }

  checkboxChanger3 = (fieldNumber) => {                                                         // toggles the third checkbox of any kind of the three types of lines
    const fieldIndex = this.state.inputField.findIndex(id =>
      id.fieldNumber === fieldNumber);
    let newArray = [...this.state.inputField];
    newArray[fieldIndex] = {...newArray[fieldIndex], checkbox3: !newArray[fieldIndex].checkbox3};
    this.setState({inputField: newArray});
  }

  checkboxChanger4 = (fieldNumber) => {                                                         // toggles the fourth checkbox of any kind of the three types of lines
    const fieldIndex = this.state.inputField.findIndex(id =>
      id.fieldNumber === fieldNumber);
    let newArray = [...this.state.inputField];
    newArray[fieldIndex] = {...newArray[fieldIndex], checkbox4: !newArray[fieldIndex].checkbox4};
    this.setState({inputField: newArray});
  }

  expanding = () => {                                                                           // it toggles a switch stating if a splitting or stacking line is expanded to two lines
    const fieldIndex = this.state.inputField.length - 1;
    let newArray = [...this.state.inputField];
    newArray[fieldIndex] = {...newArray[fieldIndex], expanded: !newArray[fieldIndex].expanded};
    this.setState({inputField: newArray});
    console.log(this.state)
  }

  orangeRuleItem = (symbol) => {
    const num = this.state.focusField - 1;
    let anotherArray = [...this.state.inputField];
    anotherArray[num] = {...anotherArray[num], orangeRuleItem: symbol};
    this.setState({inputField: anotherArray});
  }

  singleInputChecker = () => {
    let thereIsAtLeastOne = false;
    this.state.inputField.map((type) => {
      if (type.type === "single" && !type.checkbox1Confirmed) {
        thereIsAtLeastOne = true;
      }
      return thereIsAtLeastOne;
    })
    return thereIsAtLeastOne;
  }

  render() {
    console.log(this.state)
    console.log(this.singleInputChecker())
    return (
      <div className="App">
          <h1>The Kirk Tool for Logic Trees</h1>
          <div className="left">
              <h2>Logical Operators</h2>
              <LogicalOperators 
                  changeData={this.logicalOperatorButton}
              />
          </div>
          <div className="middle">
              <FieldsTogether 
                  stateData={this.state.inputField} 
                  changeData={this.inputChanger}
                  changeData2={this.inputChanger2}
                  changeData3={this.inputChanger3}
                  changeData4={this.inputChanger4}
                  changeCheckbox={this.checkboxChanger}
                  changeCheckbox2={this.checkboxChanger2}
                  changeCheckbox3={this.checkboxChanger3}
                  changeCheckbox4={this.checkboxChanger4}
                  fieldNumberAndOrangeRuleItem={this.fieldNumberAndOrangeRuleItem}
                  focus={this.focusFieldNumber}
                  ruleOrder={this.state.ruleOrder}
                  whichTextField={this.whichTextField}
                  orangeRuleBox={this.orangeRuleBox}
                  orangeRuleItem={this.orangeRuleItem}
                  state={this.state}
                  checkboxConfirmer={this.checkboxConfirmer}
                  sidingStyle={this.sidingStyle}
              />
              <OperatorButton 
                iterator={this.operatorButton}
                visibility={this.state.plusButtonMain}
                expandToggle={this.expanding}
                ruleOrder={this.state.ruleOrder}
              />
          </div>
          <div className="right">
              <SplittingRule ruleId={this.orderRules} order={this.state.ruleOrder} plusBtn={this.state.plusButtonMain} stateData={this.state.inputField} />
              <StackingRule ruleId={this.orderRules} order={this.state.ruleOrder} plusBtn={this.state.plusButtonMain} stateData={this.state.inputField} />
              <BranchClosure branchClosure={this.branchClosure} state={this.state} />
          </div>
      </div>
    );
  }
}

export default App;
