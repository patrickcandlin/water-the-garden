import React, { Component } from "react";
import Button from './timer-components/Button'
import TimerDisplay from './timer-components/TimerDisplay'
import EasyTimer from "easytimer.js";

class App extends Component {
    constructor() {
        super();

        this.state = {
            startingTime: 25,
            timer: new EasyTimer(),
            timeValues: "",
            running: false,
        };
    }

    componentDidMount() {
        let { timer } = this.state;
        timer.addEventListener("secondsUpdated", this.tick);
    }

    startTimer = () => {
        let { timer, running } = this.state;
        
        this.state.running 
        
        ?   timer.stop()


        :   timer.start({
                countdown: true, 
                startValues: {
                    minutes: this.state.startingTime,
                    seconds: 0
                }
            });
            this.setState({
                running: !running
            })

    }
    setTimer = (event) => {
        this.setState({
            startingTime: event.target.value
        })
    }
    tick = (event) => {
        let { timer } = this.state;
        const timeValues = timer.getTimeValues().toString([ 'minutes', 'seconds' ]);
        this.setState({ timeValues: timeValues });
    }

    render() {
        return(
            <div className="App">
                <TimerDisplay 
                    startingTime={this.state.startingTime}
                    timeValues={this.state.timeValues}
                    setTimer={this.setTimer}
                />
                <input value={`${this.state.timeValues}`} placeholder='25'/>
                <Button 
                    startTimer={this.startTimer}
                    running={this.state.running}
                />
            </div>
        )

    }
}

export default App;