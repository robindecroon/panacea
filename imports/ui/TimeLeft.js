import React, { Component } from 'react';
import moment from 'moment';
import countdown from 'moment-countdown';


// App component - represents the whole app
export default class TimeLeft extends Component {
    constructor(props) {
        super(props);

        const end = moment().endOf('day');
     
        this.state = {
            timeHour: 0,
            timeMinute: 0,
            timeSecond: 0,
        };

        let i = 0;
        setInterval(() => {
            const now = moment();
            
            this.setState({
                timeHour: ('0' + end.diff(now, 'hours')).slice(-2),
                timeMinute: ('0' + end.diff(now, 'minutes') % 60).slice(-2),
                timeSecond: ('0' + end.diff(now, 'seconds') % 60).slice(-2),
            })
        }, 1000);
      }

    render() {
        return (
            <div className="panacea-text">
                <h1>
                    Limited time left to register your measurements for today!
                </h1>
                <div id="clockdiv">
                    <div>
                        <span className="hours">{this.state.timeHour}</span>
                        <div className="smalltext">Hours</div>
                    </div>
                    <div> 
                        <span className="minutes">{this.state.timeMinute}</span>
                        <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                        <span className="seconds">{this.state.timeSecond}</span>
                        <div className="smalltext">Seconds</div>
                    </div>
                </div>
            </div>
        );
    }
}