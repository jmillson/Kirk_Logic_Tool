import React from 'react'

export default function OrangeRuleBox( {
    orangeRuleBox, 
    orangeRuleBoxState, 
    orangeRuleBoxState2,
    orangeRuleItem,
    checkboxConfirmer,
    fieldNumberAndOrangeRuleItem,
    state,
    sidingStyle,
    number // gives back the number of which line the rule is being applied// number of the orange rule applied -1 has to added
} ) {
    const orangeRuleBoxSymbolsArray= ["∧", "¬∨", "∨", "¬∧", "→", "¬→", "↔", "¬↔", "¬¬", "∀", "∃", ""]; //array of all symbols in dropdown menu of the orange rule box

    let num = null; // this will be the number of the field in which a checkbox is checked
    state.inputField.map((n) => {
        if (n.checkbox1Confirmed || n.checkbox2Confirmed || n.checkbox3Confirmed || n.checkbox4Confirmed) {
            num = n.fieldNumber; // this is now the number of the field in which a checkbox is checked
        } else return {} 
        return num; // this is the number of the field in which a checkbox is checked
    });
    let whichCheckbox = null;
    let numm = null; // this will be the number of the field in which a checkbox is checked
    state.inputField.map((n) => {
        if ((n.checkbox1 && !n.checkbox1Confirmed) || 
            (n.checkbox2 && !n.checkbox2Confirmed) || 
            (n.checkbox3 && !n.checkbox3Confirmed) ||   
            (n.checkbox4 && !n.checkbox4Confirmed)) {
            numm = n.fieldNumber; // this is now the number of the field in which a checkbox is checked
        } else return {} 
        return numm; // this is the number of the field in which a checkbox is checked
    });
    
    state.inputField.map((n) => {
        if (n.checkbox1 && !n.checkbox1Confirmed) {
            whichCheckbox = 1; // this is now the number of the field in which a checkbox is checked
        } else if (n.checkbox2 && !n.checkbox2Confirmed) {
            whichCheckbox = 2;
        } else if (n.checkbox3 && !n.checkbox3Confirmed) {
            whichCheckbox = 3;
        } else if (n.checkbox4 && !n.checkbox4Confirmed) {
            whichCheckbox = 4;
        }
        return whichCheckbox; // this is the number of the field in which a checkbox is checked
    });
    //const symbolFromState = state.inputField[number - 1].orangeRuleItem;

    /*const changer = () => {
        /*if (symbolFromState !== "") {
            return <div className="rule-result">{num + symbolFromState}</div>
        } else {return orangeRuleBoxSymbolsArray.map((symbol, index) => {//generates the symbol buttons according to the orangeRuleBoxSymbolsArray
            return <p key={index} onClick={/*orangeRuleItem.bind(this, symbol)() => fieldNumberAndOrangeRuleItem(number - 1, symbol)} >{symbol}</p>;
    })}
    //}*/

    return (
        <div>
            <div className="rule" /*style={symbolFromState !== "" ? {display: "none"} : {}}*/ onClick={orangeRuleBox} onMouseDown={sidingStyle} >RULE▾</div>
            <div className="rule-items" style={orangeRuleBoxState || orangeRuleBoxState2 ? /*symbolFromState !== "" ? {display: "initial"} :*/ {display: "grid"} : {display: "none"}} >
                    {orangeRuleBoxSymbolsArray.map((symbol, index) => {//generates the symbol buttons according to the orangeRuleBoxSymbolsArray
                        return <p key={index} onClick={() => fieldNumberAndOrangeRuleItem(numm-1, symbol, whichCheckbox)} >{symbol}</p>;
                    })} 
            </div>
        </div>
    );
}
