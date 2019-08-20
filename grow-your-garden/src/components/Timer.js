import React, { Component } from "react";
import Button from './timer-components/Button'
import TimerDisplay from './timer-components/TimerDisplay'
import EasyTimer from "easytimer.js";



export default class Timer extends Component {
    constructor() {
        super();

        this.state = {
            startingInMinTime: '25',
            startingInSecTime: '00',
            timer: new EasyTimer(),
            minValues: "",
            secValues: "",
            running: false,
            break: false
        };
    }

    componentDidMount() {
        let { timer } = this.state;
        timer.addEventListener("secondsUpdated", this.tick)
        timer.addEventListener("targetAchieved", this.breakEarned)
    }
    
    breakEarned = () => {
        let { timer } = this.state
        timer.start({
            countdown: false, 
            startValues: {
                minutes: 0,
                seconds: 0,
            },
            target: {
                minutes: 5,
            }
        });
    }
    
    startTimer = () => {
        let { timer, running } = this.state;
        const can = document.querySelector('svg')
        
        this.state.running 
        ?   timer.stop()
        :   timer.start({
                countdown: true, 
                startValues: {
                    minutes: parseInt(this.state.startingInMinTime),
                    seconds: parseInt(this.state.startingInSecTime)
                }
            });
        this.setState({ running: !running })
        can.classList.toggle('show-can')
    }
    setMin = (event) => {
        parseInt(event.target.value)
        ?   this.setState({ 
                startingInMinTime: event.target.value, 
                setMin: event.target.value
            })
        :   this.setState({ startingInMinTime: '0' })

    }

    setSec = (event) => {
        parseInt(event.target.value)
        ?   this.setState({ 
                startingInSecTime: event.target.value, 
            })
        :   this.setState({ startingInSecTime: '00' })

    }

    tick = (event) => {
        let { timer } = this.state;
        const minValues = timer.getTimeValues().toString([ 'minutes' ]);
        const secValues = timer.getTimeValues().toString([ 'seconds' ]);
        this.setState({ 
            minValues: minValues,
            secValues: secValues
             });
    }

    render() {
        return(
            <div className="timer-container">
                <div className="Timer">
                    
                    <TimerDisplay 
                        startingInMinTime={this.state.startingInMinTime}
                        startingInSecTime={this.state.startingInSecTime}
                        minValues={this.state.minValues}
                        secValues={this.state.secValues}
                        setMin={this.setMin}
                        setSec={this.setSec}
                        running={this.state.running}
                        />
                    <Button 
                        startTimer={this.startTimer}
                        running={this.state.running}
                        />     
                </div>
                <svg 
                        id="Layer_1" 
                        data-name="Layer 1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 84 50">
                            <title>watering_can</title>
                            <path d="M75.82,11.9l6.94-.5c1.27-.13,1.52-.89.64-1.77l-9-9c-.88-.89-1.7-.57-1.76.63l-.57,7L58.4,18.59,59.66,6.48a.86.86,0,0,0-.82-1s-37.8-.06-39.63,0a39.05,39.05,0,0,0-7.7.88C7.09,7.55,2.35,10.51.71,15.06A12.38,12.38,0,0,0,.08,19a15.14,15.14,0,0,0,3.85,9.15c1,1.14,2.15,2.28,3.22,3.35,2.46,2.34,5.24,4.48,7.57,6.69A32,32,0,0,1,21.86,49a1.06,1.06,0,0,0,1,.89h31.3a1.07,1.07,0,0,0,1-.89l1.71-16.47ZM17.69,11s2.65,25.5,2.71,26.32-.44.56-.75.25a42.19,42.19,0,0,0-3.41-3.41C13.71,31.85,11,29.64,8.79,27.3a18,18,0,0,1-3.41-4.54,6.25,6.25,0,0,1-.63-3.16,8.66,8.66,0,0,1,3.54-6.43,14.35,14.35,0,0,1,4.48-2.09C13.15,11,17.63,10.26,17.69,11Z"/>
                    </svg>
            </div>
        )

    }
}