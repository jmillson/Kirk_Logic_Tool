import React from 'react';

export default function OperatorButton( {iterator, visibility, expandToggle, ruleOrder, sidingStyle} ) {
    function runClick() {
        if (visibility) {
            iterator();
        }
        else {
            expandToggle();
        }
    }
    return (
        <div 
            //style={visibility ? {} : {display: "none"}}
            className="operator-btn" 
            onMouseDown={runClick}
            onClick={sidingStyle}
        >+</div>
    )
}
