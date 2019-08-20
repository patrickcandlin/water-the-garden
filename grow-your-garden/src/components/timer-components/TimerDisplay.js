import React from 'react'

export default function TimerDisplay (props) {
    return(
        <div>
            {
                props.running
                ? <form>

                <input 
                    type='text' 
                    value={props.minValues} 
                    />
                 <lable>m</lable>
                <input 
                    type='text' 
                    value={props.secValues} 
                    />
                 <lable>s</lable>
                </form>
                :   <form>
                        <input 
                            onChange={ (event) => props.setMin(event)}
                            type='text' 
                            value={parseInt(props.startingInMinTime)}
                            />
                        <lable>m</lable>
                        <input 
                            onChange={ (event) => props.setSec(event)}
                            type='text' 
                            value={props.startingInSecTime} 
                        />
                        <lable>s</lable>
                    </form>   
            }   
            
        </div>
    )
}