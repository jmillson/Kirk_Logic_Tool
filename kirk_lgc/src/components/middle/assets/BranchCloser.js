import React from 'react'

export default function BranchCloser( {rowNumber} ) {
return rowNumber[0] !== undefined ? <div><div>✕</div><div>{`${rowNumber[0]}, ${rowNumber[1]}`}</div></div> : <div></div>;
}
