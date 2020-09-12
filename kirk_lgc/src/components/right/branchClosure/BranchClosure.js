import React from 'react'

export default function BranchClosure( {branchClosure, state} ) {
    return (
        <>
            <h2>Branch Closure</h2>
            <div onClick={branchClosure} className={state.branchClosure ? "rule-box rbthree flash" : "rule-box rbthree"} >
                <div className="t one"><div className="operator-btn"></div></div>
                <div className="t two"><div className="operator-btn"></div></div>
                <div className="t three">✕</div>
            </div>
        </>
    )
}
