import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
import moment from 'moment';
import countdown from 'moment-countdown';

const T = i18n.createComponent();
i18n.setLocale('nl')

// App component - represents the whole app
export default class TimeLeft extends Component {
    constructor(props) {
        super(props);

        const end = moment().endOf('day');         
        const now = moment();   
        this.state = {
            // code copied from updateTime (not possible to update state of unmounted component)
            timeHour: ('0' + end.diff(now, 'hours')).slice(-2),
            timeMinute: ('0' + end.diff(now, 'minutes') % 60).slice(-2),
            timeSecond: ('0' + end.diff(now, 'seconds') % 60).slice(-2),
        };

        // start countdown timer
        setInterval(() => {
            this.updateTimer(end);
        }, 1000);
    }

    updateTimer(end) {
        const now = moment();
        this.setState({
            // code copied to constructor (not possible to update state of unmounted component)
            timeHour: ('0' + end.diff(now, 'hours')).slice(-2),
            timeMinute: ('0' + end.diff(now, 'minutes') % 60).slice(-2),
            timeSecond: ('0' + end.diff(now, 'seconds') % 60).slice(-2),
        })
    }

    render() {
        return (
            <div className="panacea-text">
                <h1>
                    <T>header_time_left</T>
                </h1>
                <div id="clockdiv">
                    <div>
                        <span className="timeUnit">{this.state.timeHour}</span>
                        <div className="smalltext"><T>hours</T></div>
                    </div>
                    <div>
                        <span className="timeUnit">{this.state.timeMinute}</span>
                        <div className="smalltext"><T>minutes</T></div>
                    </div>
                    <div>
                        <span className="timeUnit">{this.state.timeSecond}</span>
                        <div className="smalltext"><T>seconds</T></div>
                    </div>
                </div>
            </div>
        );
    }
}