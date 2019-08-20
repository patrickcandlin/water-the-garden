import React from 'react'

export default function Button (props) {
    const handleClick = (event) => {
        props.startTimer()
    }
    return(
        <button onClick={handleClick}>
            { props.running ? "Reset" : "Start" } 
        </button>
    )
}