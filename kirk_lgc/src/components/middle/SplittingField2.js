import React from 'react';
import OrangeRuleBox from './assets/OrangeRuleBox';
import BranchCloser from './assets/BranchCloser';

export default function SplittingField2( {
    stateData, 
    changeData, 
    changeData2, 
    changeData3,
    changeData4,
    changeCheckbox, 
    changeCheckbox2,
    changeCheckbox3, 
    changeCheckbox4, 
    fieldNumberAndOrangeRuleItem,
    checkboxConfirmer,
    focus, 
    whichTextField,
    multiRowCounter,
    number,
    orangeRuleBox,
    orangeRuleBoxState,
    orangeRuleBoxState2,
    orangeRuleItem,
    state,
    sidingStyle // has to be developed
    } ) {
const inputChange = (event) => {
changeData(event.target.value, stateData.fieldNumber);
}
const inputChange2 = (event) => {
changeData2(event.target.value, stateData.fieldNumber);
}
const inputChange3 = (event) => {
changeData3(event.target.value, stateData.fieldNumber);
}
const inputChange4 = (event) => {
changeData4(event.target.value, stateData.fieldNumber);
}
const checkboxClick = () => {
return changeCheckbox(stateData.fieldNumber);
}
const checkboxClick2 = () => {
return changeCheckbox2(stateData.fieldNumber);
}
const checkboxClick3 = () => {
return changeCheckbox3(stateData.fieldNumber);
}
const checkboxClick4 = () => {
return changeCheckbox4(stateData.fieldNumber);
}
const focusingLine = (event) => {
whichTextField(event.target.id);
}
//const value = state.inputField[number - 1].fieldNumberAndOrangeRuleItem;
//const firstLetter = value.charAt(0);
//console.log(firstLetter);

const pipe1 = stateData.checkbox1 ? "✔" : "";
const pipe2 = stateData.checkbox2 ? "✔" : "";
const pipe3 = stateData.checkbox3 ? "✔" : "";
const pipe4 = stateData.checkbox4 ? "✔" : "";
const pipe1C = stateData.checkbox1Confirmed ? "✔" : "";
const pipe2C = stateData.checkbox2Confirmed ? "✔" : "";
const pipe3C = stateData.checkbox3Confirmed ? "✔" : "";
const pipe4C = stateData.checkbox4Confirmed ? "✔" : "";


    /*let num = null; // this will be the number of the field in which a checkbox is checked
    if (stateData.checkbox1 || stateData.checkbox2 || stateData.checkbox3 || stateData.checkbox4) {
        num = stateData.fieldNumber; // this is now the number of the field in which a checkbox is checked
    }

    let whichCheckbox = null;
        if (stateData.checkbox1) {
            whichCheckbox = 1; // this is now the number of the field in which a checkbox is checked
        } else if (stateData.checkbox2) {
            whichCheckbox = 2;
        } else if (stateData.checkbox3) {
            whichCheckbox = 3;
        } else if (stateData.checkbox4) {
            whichCheckbox = 4;
        }

    let whichCheckboxConf = null;
        if (stateData.checkbox1Confirmed) {
            whichCheckboxConf = 1; // this is now the number of the field in which a checkbox is checked
        } else if (stateData.checkbox2Confirmed) {
            whichCheckboxConf = 2;
        } else if (stateData.checkbox3Confirmed) {
            whichCheckboxConf = 3;
        } else if (stateData.checkbox4Confirmed) {
            whichCheckboxConf = 4;
        }*/

        let style1 = {};
        let style2 = {};
        let style3 = {};
        let style4 = {};
        if (stateData.checkbox1Confirmed) {
            style1 = {background: "none", border: "none", cursor: "initial", boxShadow: "initial"};
        }
        if (stateData.checkbox2Confirmed){
            style2 = {background: "none", border: "none", cursor: "initial", boxShadow: "initial"};
        }
        if (stateData.checkbox3Confirmed){
            style3 = {background: "none", border: "none", cursor: "initial", boxShadow: "initial"};
        }
        if (stateData.checkbox4Confirmed){
            style4 = {background: "none", border: "none", cursor: "initial", boxShadow: "initial"};
        }


        console.log(multiRowCounter)

        return (
            <div className="wrapping" style={stateData.sidingStyle} >
                <div>
                <div className="wrap-splitting"><span>/</span><span>\</span></div>
                <div className="wrap splitting" onMouseUp={() => focus(stateData.fieldNumber)} >
                    {stateData.sidingStyle.gridColumnStart === "unset" || stateData.sidingStyle.gridColumn !== undefined ? null : <span>{stateData.expanded ?  multiRowCounter - 1 : multiRowCounter}.</span>}
                    <input 
                        id="1"
                        type="text" 
                        placeholder="Enter a formula" 
                        value={stateData.fieldText3}
                        onChange={inputChange3}
                        onClick={focusingLine}
                    ></input>
                    <div 
                        className="checkbox"
                        onClick={/*!stateData.checkbox1 && */!stateData.checkbox3Confirmed ? () => checkboxClick3() : null}
                        style={style3}
                    ><span className="pipe" >{[pipe3, pipe3C]}</span></div>

                    <input 
                        id="2"
                        type="text" 
                        placeholder="Enter a formula" 
                        value={stateData.fieldText4}
                        onChange={inputChange4}
                        onClick={focusingLine}
                    ></input>
                    <div 
                        className="checkbox"
                        onClick={!stateData.checkbox4Confirmed ? () => checkboxClick4() : null}
                        style={style4}
                    ><span className="pipe" >{[pipe4, pipe4C]}</span></div>
                    {state.inputField[number - 1].fieldNumberAndOrangeRuleItem === "" ?
                        <OrangeRuleBox 
                            sidingStyle={sidingStyle}
                            orangeRuleBox={() => orangeRuleBox(2)} 
                            orangeRuleBoxState={orangeRuleBoxState2} 
                            orangeRuleItem={orangeRuleItem}
                            state={state}
                            number={number}
                            checkboxConfirmer={checkboxConfirmer}
                            fieldNumberAndOrangeRuleItem={fieldNumberAndOrangeRuleItem}
                        /> :
                        <div className="rule-result">{state.inputField[number - 1].fieldNumberAndOrangeRuleItem}</div>
                    }
                </div>
                <div className="branchcloser" ><BranchCloser checkBox={stateData.whichCheckbox} rowNumber={stateData.rowNumbers} />
                                               <BranchCloser checkBox={stateData.whichCheckbox} rowNumber={stateData.rowNumbers} /></div>

                    {(stateData.expanded && stateData.sidingStyle.gridColumnStart !== "unset") ?
                        <div>
                            <div className="wrap splitting" onMouseUp={() => focus(stateData.fieldNumber)} >
                            <span>{multiRowCounter}.</span>
                            <input 
                                id="1"
                                type="text" 
                                placeholder="Enter a formula" 
                                value={stateData.fieldText1}
                                onChange={inputChange}
                                onClick={focusingLine}
                            ></input>
                            <div 
                                className="checkbox"
                                onClick={/*!stateData.checkbox1 && */!stateData.checkbox1Confirmed ? () => checkboxClick() : null}
                                style={style1}
                            ><span className="pipe" >{[pipe1, pipe1C]}</span></div>

                            <input 
                                id="2"
                                type="text" 
                                placeholder="Enter a formula" 
                                value={stateData.fieldText2}
                                onChange={inputChange2}
                                onClick={focusingLine}
                            ></input>
                            <div 
                                className="checkbox"
                                onClick={!stateData.checkbox2Confirmed ? () => checkboxClick2() : null}
                                style={style2}
                            ><span className="pipe" >{[pipe2, pipe2C]}</span></div>
                            {state.inputField[number - 1].fieldNumberAndOrangeRuleItem === "" && stateData.sidingStyle.gridColumnStart !== "unset" ?
                                <OrangeRuleBox 
                                    sidingStyle={sidingStyle}
                                    orangeRuleBox={() => orangeRuleBox(1)} 
                                    orangeRuleBoxState={orangeRuleBoxState} 
                                    orangeRuleItem={orangeRuleItem}
                                    state={state}
                                    number={number}
                                    checkboxConfirmer={checkboxConfirmer}
                                    fieldNumberAndOrangeRuleItem={fieldNumberAndOrangeRuleItem}
                                /> :
                                    stateData.sidingStyle.gridColumnStart !== "unset" ?
                                <div className="rule-result">{state.inputField[number - 1].fieldNumberAndOrangeRuleItem}</div> : null
                            }
                            </div>
                            <div className="branchcloser" ><BranchCloser checkBox={stateData.whichCheckbox} rowNumber={stateData.rowNumbers} />
                                                           <BranchCloser checkBox={stateData.whichCheckbox} rowNumber={stateData.rowNumbers} /></div>
                            </div>
                                :
                            null
                    }

                </div>
            </div>
        )
}
