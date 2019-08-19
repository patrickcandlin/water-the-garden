import React from 'react'

export default function TimerDisplay (props) {
    return(
        <div>
            <input 
                onChange={ (event) => props.setTimer(event)}
                type='number' 
                value={parseInt(props.startingTime)}
             />
            <input 
                type='text' 
                value={props.timeValues} 
            />
        </div>
    )
}