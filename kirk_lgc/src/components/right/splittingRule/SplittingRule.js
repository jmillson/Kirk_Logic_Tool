import React from 'react'

export default function SplittingRule( {ruleId, order, plusBtn, stateData} ) {
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
            <h2>Splitting Rule</h2>
            <div className={clickedNotClicked ? "rule-box rbone flash" : "rule-box rbone"} onClick={() => ruleId(1)} style={lastClickedRule === 1 && plusBtn ? {background: "rgb(140, 240, 149)"} : {}} >
                <div className="q one">/</div>
                <div className="q two">\</div>
                <div className="q three"><div className="operator-btn"></div></div>
                <div className="q four"><div className="operator-btn"></div></div>
            </div>
        </>
    )
}
