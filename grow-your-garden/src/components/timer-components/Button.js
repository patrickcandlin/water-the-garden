import React from 'react'

export default function Button (props) {
    return(
        <button onClick={() => props.startTimer()}>
            
            { props.running ? "Reset" : "Start" } 
        
        </button>
    )
}