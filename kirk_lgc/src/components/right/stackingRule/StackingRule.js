import React from 'react'

export default function StackingRule( {ruleId, order, plusBtn, stateData} ) {
    const lastClickedRule = order[order.length - 1];
    let clickedNotClicked = false;
    stateData.map((array) => {
        if (array.checkbox1 || array.checkbox2 || array.checkbox3 || array.checkbox4) {
            clickedNotClicked = true;
        }
        return clickedNotClicked;
    })
    return (
        <>
            <h2>Stacking Rule</h2>
            <div className={clickedNotClicked ? "rule-box rbtwo flash" : "rule-box rbtwo"} onClick={() => ruleId(2)} style={lastClickedRule === 2 && plusBtn ? {background: "rgb(140, 240, 149)"} : {}} >
                <div className="t one">|</div>
                <div className="t two"><div className="operator-btn"></div></div>
                <div className="t three"><div className="operator-btn"></div></div>
            </div>
        </>
    )
}
