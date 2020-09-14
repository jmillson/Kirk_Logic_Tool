import React from 'react'

import InputField from './InputField';
import SplittingField from './SplittingField';
import SplittingField2 from './SplittingField2';
import StackingField from './StackingField';
import StackingField2 from './StackingField2';

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
        state,
        sidingStyle
        } ) {

           /* const permanentPipeStyle = () => {
                let style = {};
                if (value !== "" && number === firstLetter) {
                    style = {background: "none", border: "none"}
                }
                return style;
            }*/

    const field = [];
    let multiRowCounter = 0;
    stateData.map((type, i) => {

            if (type.fieldNumber > 0) {
                multiRowCounter++;
            }

            if (type.expanded) {
                multiRowCounter++;
            }

            console.log(multiRowCounter)

            if (type.type === "splitting") {
                console.log(type.sidingStyle)
                if (type.sidingStyle.gridColumnStart === undefined && type.sidingStyle.gridColumn === undefined) {
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
                } else if (type.sidingStyle.gridColumn !== undefined && type.sidingStyle.gridColumn.search("span 1") <= 0) {  
                    console.log('SIKERULT', type.sidingStyle.gridColumn.search("span 1"))                                                
                    field.push(
                        <div key={i} style={{display: "grid", gridRowStart: `${i + 1}`}} >
                            <div style={{display: "grid", gridColumn: "1"}}>
                                <SplittingField 
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
                                />
                            </div>
                            <div style={{display: "grid", gridColumn: "2"}}>
                                <SplittingField2 
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
                                />
                            </div>
                        </div>)
                } else {          
                    console.log('ELSE')                                                 
                    field.push(
                        <div key={i} style={{gridRowStart: `${i + 1}`, display: "grid", gridColumnStart: `${type.sidingStyle.gridColumnStart === "3" ? "3" : "1"}`, gridColumnEnd: `${type.sidingStyle.gridColumnEnd === "3" ? "3" : "5"}`}} >
                            <div style={type.sidingStyle.gridColumnStart === "3" ? {display: "none"} : {gridColumnStart: "1", gridColumnEnd: "3"}}>
                                <SplittingField 
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
                                />
                            </div>
                            <div style={type.sidingStyle.gridColumnStart === "1" ? {display: "none"} : {gridColumnStart: "3", gridColumnEnd: "5"}}>
                                <SplittingField2 
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
                                />
                            </div>
                        </div>)
                }
            } else if (type.type === "stacking") {
                if (type.sidingStyle.gridColumnStart === undefined && type.sidingStyle.gridColumn === undefined) {
                    field.push(
                        <StackingField 
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
                        />
                    );
                } else if (type.sidingStyle.gridColumn === "1 / span 2" || type.sidingStyle.gridColumn === "3 / span 2") {
                    field.push(
                        <div key={i} style={type.sidingStyle.gridColumn === "1 / span 2" ? {gridRowStart: `${i + 1}`, gridColumnStart: "1", gridColumnEnd: "3"} : {gridRowStart: `${i + 1}`, gridColumnStart: "3", gridColumnEnd: "5"}}>
                            <StackingField 
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
                                />
                        </div>
                    );
                } else {
                    field.push(
                        <div key={i} style={{gridRowStart: `${i + 1}`, display: "grid", gridColumnStart: `${type.sidingStyle.gridColumnStart === "3" ? "3" : "1"}`, gridColumnEnd: `${type.sidingStyle.gridColumnEnd === "3" ? "3" : "5"}`}}>
                            <div style={type.sidingStyle.gridColumnStart === "3" ? {display: "none"} : {gridColumnStart: "1", gridColumnEnd: "3"}}>
                                <StackingField 
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
                            />
                            </div>
                            <div style={type.sidingStyle.gridColumnStart === "1" ? {display: "none"} : {gridColumnStart: "3", gridColumnEnd: "5"}}>
                                <StackingField2 
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
                                />
                            </div>
                        </div>
                    );
                }
                
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
                    multiRowCounter={multiRowCounter}
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
