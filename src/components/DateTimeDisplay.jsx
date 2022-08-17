import React from 'react'

function DateTimeDisplay({value, type, isDanger}) {
    return (
        <div className={isDanger ? '' : ''}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    )
}

export default DateTimeDisplay