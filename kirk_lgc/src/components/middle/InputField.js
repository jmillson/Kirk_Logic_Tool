import React from 'react'

export default function InputField( {number, stateData, changeData, changeCheckbox, focus, whichTextField, state} ) {

        const inputChange = (event) => {
            changeData(event.target.value, stateData.fieldNumber);
        }
        const checkboxClick = () => {
            return changeCheckbox(stateData.fieldNumber);
        }
        const focusingLine = (event) => {
            return whichTextField(event.target.id);
        }
        const pipe = stateData.checkbox1 ? "✔" : "";
        const pipeC = stateData.checkbox1Confirmed ? "✔" : "";

/*    let num = null; // this will be the number of the field in which a checkbox is checked
    if (stateData.checkbox1 || stateData.checkbox2 || stateData.checkbox3 || stateData.checkbox4) {
        num = stateData.fieldNumber; // this is now the number of the field in which a checkbox is checked
    }
*/

    /*let whichCheckbox = null;
        if (stateData.checkbox1) {
            whichCheckbox = 1; // this is now the number of the field in which a checkbox is checked
        } else if (stateData.checkbox2) {
            whichCheckbox = 2;
        } else if (stateData.checkbox3) {
            whichCheckbox = 3;
        } else if (stateData.checkbox4) {
            whichCheckbox = 4;
        }*/

    let whichCheckboxConf = null;
        if (stateData.checkbox1Confirmed) {
            whichCheckboxConf = 1; // this is now the number of the field in which a checkbox is checked
        } else if (stateData.checkbox2Confirmed) {
            whichCheckboxConf = 2;
        } else if (stateData.checkbox3Confirmed) {
            whichCheckboxConf = 3;
        } else if (stateData.checkbox4Confirmed) {
            whichCheckboxConf = 4;
        }

    const completedCheckboxStyle = (chkboxNum) => {
        let style = {};
        if (/*number === num && */chkboxNum === whichCheckboxConf) {
            style = {background: "none", border: "none", cursor: "initial", boxShadow: "initial"};
        }
        return style;
    }

        return (
            <div className="wrap" onMouseUp={() => focus(stateData.fieldNumber)} >
                <span>{number}.</span>
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
                    onClick={!stateData.checkbox1Confirmed ? () => checkboxClick() : null}
                    style={completedCheckboxStyle(1)}
                ><span className="pipe">{[pipe, pipeC]}</span></div>
            </div>
        )
}
