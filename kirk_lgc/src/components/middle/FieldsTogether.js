import React from 'react'

import InputField from './InputField';
import SplittingField from './SplittingField';
import StackingField from './StackingField';

export default function FieldsTogether( {
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
        orangeRuleBox,
        orangeRuleItem,
        state
        } ) {

           /* const permanentPipeStyle = () => {
                let style = {};
                if (value !== "" && number === firstLetter) {
                    style = {background: "none", border: "none"}
                }
                return style;
            }*/
            let splittingCounter = 0;
            const side = [];

    const field = [];
    let multiRowCounter = 0;
    stateData.map((type, i) => {
        //////////////////// THIS IS FOR PLACING NEW INPUT ELEMENT ON THE LEFT OR ON THE RIGHT AFTER SPLITTING APPLIED
            if (type.type === "splitting") {
                splittingCounter++;
                if (type.checkbox1 || type.checkbox1Confirmed || type.checkbox3 || type.checkbox3Confirmed) {
                    side.push("left");
                } else if (type.checkbox2 || type.checkbox2Confirmed || type.checkbox4 || type.checkbox4Confirmed) {
                    side.push("right");
                }
            }
            console.log(splittingCounter, side);
            const sidingStyle = () => {
                if (splittingCounter === 1 && side[splittingCounter-1] === "left") {
                    return {gridColumnStart: "1", gridColumnEnd: "3"}
                } else if (splittingCounter === 1 && side[splittingCounter-1] === "right") {
                    return {gridColumnStart: "3", gridColumnEnd: "5"}
                } else return {gridColumnStart: "1", gridColumnEnd: "5"}
            }
            ///////////////////////////// END OF IT

            if (type.expanded) {
                multiRowCounter++;
            }
            if (type.type === "splitting") {
                field.push(<SplittingField 
                    key={i} 
                    number={type.fieldNumber} 
                    stateData={type} 
                    changeData={changeData}
                    changeData2={changeData2}
                    changeData3={changeData3}
                    changeData4={changeData4}
                    changeCheckbox={changeCheckbox}
                    changeCheckbox2={changeCheckbox2}
                    changeCheckbox3={changeCheckbox3}
                    changeCheckbox4={changeCheckbox4}
                    fieldNumberAndOrangeRuleItem={fieldNumberAndOrangeRuleItem}
                    checkboxConfirmer={checkboxConfirmer}
                    focus={focus}
                    whichTextField={whichTextField}
                    multiRowCounter={multiRowCounter}
                    orangeRuleBox={orangeRuleBox}
                    orangeRuleBoxState={type.orangeRuleBox} 
                    orangeRuleBoxState2={type.orangeRuleBox2} 
                    orangeRuleItem={orangeRuleItem}
                    state={state}
                    sidingStyle={sidingStyle}
                    />);
            } else if (type.type === "stacking") {
                field.push(<StackingField 
                    key={i} 
                    number={type.fieldNumber} 
                    stateData={type} 
                    changeData={changeData}
                    changeData2={changeData2}
                    changeCheckbox={changeCheckbox}
                    changeCheckbox2={changeCheckbox2}
                    fieldNumberAndOrangeRuleItem={fieldNumberAndOrangeRuleItem}
                    checkboxConfirmer={checkboxConfirmer}
                    focus={focus}
                    whichTextField={whichTextField}
                    multiRowCounter={multiRowCounter}
                    orangeRuleBox={orangeRuleBox}
                    orangeRuleBoxState={type.orangeRuleBox} 
                    orangeRuleBoxState2={type.orangeRuleBox2} 
                    orangeRuleItem={orangeRuleItem}
                    state={state}
                    sidingStyle={sidingStyle}
                    />);
            } else if (type.type === "single") {
                field.push(<InputField 
                    key={i} 
                    number={type.fieldNumber} 
                    stateData={type} 
                    changeData={changeData}
                    changeCheckbox={changeCheckbox}
                    fieldNumberAndOrangeRuleItem={fieldNumberAndOrangeRuleItem}
                    focus={focus}
                    whichTextField={whichTextField}
                    state={state}
                />);
            };
            return field;
        })

    return (
        <>
            {field}
        </>
    )
}
