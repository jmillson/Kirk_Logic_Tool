import React from 'react'

export default function LogicalOperators( {changeData} ) {

    const logicalOperatorsArray = ["¬", "∧", "∨", "→", "↔", "∀", "∃"]; //array of all the symbols for the button on the left

    const operators = logicalOperatorsArray.map((symbol, index) => {
        return <div key={index} className="operator-btn" onClick={() => changeData(symbol)} >{symbol}</div>
    })

    return operators;
}
