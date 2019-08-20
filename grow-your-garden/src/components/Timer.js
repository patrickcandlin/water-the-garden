import React, { Component } from "react";
import Button from './timer-components/Button'
import TimerDisplay from './timer-components/TimerDisplay'
import EasyTimer from "easytimer.js";



export default class Timer extends Component {
    constructor() {
        super();

        this.state = {
            startingTime: '25',
            timer: new EasyTimer(),
            timeValues: "",
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
            countdown: true, 
            startValues: {
                minutes: 5,
                seconds: 0
            }
        });
    }
    
    startTimer = () => {
        let { timer, running } = this.state;
        
        this.state.running 
        ?   timer.stop()


        :   timer.start({
                countdown: true, 
                startValues: {
                    minutes: parseInt(this.state.startingTime),
                    seconds: 0
                }
            });
        this.setState({ running: !running })

    }
    setTimer = (event) => {
        parseInt(event.target.value)
        ?   this.setState({ startingTime: event.target.value })
        :   this.setState({ startingTime: '0' })

    }
    tick = (event) => {
        let { timer } = this.state;
        const timeValues = timer.getTimeValues().toString([ 'minutes', 'seconds' ]);
        this.setState({ timeValues: timeValues });
    }

    render() {
        return(
            <div className="Timer">
                <TimerDisplay 
                    startingTime={this.state.startingTime}
                    timeValues={this.state.timeValues}
                    setTimer={this.setTimer}
                    running={this.state.running}
                />
                <Button 
                    startTimer={this.startTimer}
                    running={this.state.running}
                />
            </div>
        )

    }
}