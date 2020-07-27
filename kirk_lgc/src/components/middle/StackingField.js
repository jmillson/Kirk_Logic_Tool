import React from 'react';
import OrangeRuleBox from './assets/OrangeRuleBox';

export default function StackingField( {
            number, 
            stateData, 
            changeData, 
            changeData2, 
            changeCheckbox, 
            changeCheckbox2, 
            fieldNumberAndOrangeRuleItem,
            checkboxConfirmer,
            focus, 
            whichTextField,
            multiRowCounter,
            orangeRuleBox,
            orangeRuleBoxState,
            orangeRuleBoxState2,
            orangeRuleItem,
            state,
            sidingStyle
            } ) {
    const inputChange = (event) => {
        changeData(event.target.value, stateData.fieldNumber);
    }
    const inputChange2 = (event) => {
        changeData2(event.target.value, stateData.fieldNumber);
    }
    const checkboxClick = () => {
        return changeCheckbox(stateData.fieldNumber);
    }
    const checkboxClick2 = () => {
        return changeCheckbox2(stateData.fieldNumber);
    }
    const focusingLine = (event) => {
        whichTextField(event.target.id);
    }
    const pipe1 = stateData.checkbox1 ? "✔" : "";
    const pipe2 = stateData.checkbox2 ? "✔" : "";
    const pipe1C = stateData.checkbox1Confirmed ? "✔" : "";
    const pipe2C = stateData.checkbox2Confirmed ? "✔" : "";

        let style1 = {};
        let style2 = {};

        if (stateData.checkbox1Confirmed) {
            style1 = {background: "none", border: "none", cursor: "initial", boxShadow: "initial"};
        } else if (stateData.checkbox2Confirmed){
            style2 = {background: "none", border: "none", cursor: "initial", boxShadow: "initial"};
        }

        return (
            <div className="wrapping" style={sidingStyle()} >
                <div className="wrap-splitting" ><span>|</span></div>
                <div className="wrap stacking" onMouseUp={() => focus(stateData.fieldNumber)} >
                    <span>{multiRowCounter + number}.</span>
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
                    ><span className="pipe">{[pipe1, pipe1C]}</span></div>
                    {state.inputField[number - 1].fieldNumberAndOrangeRuleItem === "" ?
                        <OrangeRuleBox 
                            orangeRuleBox={() => orangeRuleBox(1)} 
                            orangeRuleBoxState={orangeRuleBoxState} 
                            orangeRuleItem={orangeRuleItem}
                            state={state}
                            number={number}
                            checkboxConfirmer={checkboxConfirmer}
                            fieldNumberAndOrangeRuleItem={fieldNumberAndOrangeRuleItem}
                        /> :
                        <div className="rule-result">{state.inputField[number - 1].fieldNumberAndOrangeRuleItem}</div>
                    }
                </div>

                {stateData.expanded ?

                    <div className="wrap stacking" onMouseUp={() => focus(stateData.fieldNumber)} >
                        <span>{multiRowCounter + number + 1}.</span>
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
                        ><span className="pipe">{[pipe2, pipe2C]}</span></div>
                        {state.inputField[number - 1].fieldNumberAndOrangeRuleItem === "" ?
                        <OrangeRuleBox 
                            orangeRuleBox={() => orangeRuleBox(2)} 
                            orangeRuleBoxState2={orangeRuleBoxState2} 
                            orangeRuleItem={orangeRuleItem}
                            state={state}
                            number={number}
                            checkboxConfirmer={checkboxConfirmer}
                            fieldNumberAndOrangeRuleItem={fieldNumberAndOrangeRuleItem}
                        /> :
                        <div className="rule-result">{state.inputField[number - 1].fieldNumberAndOrangeRuleItem}</div>
                        }
                    </div>
                    :
                    null
            }
            </div>
 
        )
}
