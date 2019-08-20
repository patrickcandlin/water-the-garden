import React from 'react'

export default function TimerDisplay (props) {
    return(
        <div>
            {
                props.running
                ? <input 
                    type='text' 
                    value={props.timeValues} 
                />
                : <input 
                    onChange={ (event) => props.setTimer(event)}
                    type='text' 
                    value={parseInt(props.startingTime)}
                />
            }   
            
        </div>
    )
}