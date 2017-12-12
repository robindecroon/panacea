import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
import moment from 'moment';

const T = i18n.createComponent();

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
            labelHours: i18n.__("hours"),
            labelMinutes: i18n.__("minutes"),
            labelSeconds: i18n.__("seconds"),
        };

        // start countdown timer
        setInterval(() => {
            this.updateTimer(end);
        }, 1000);
    }

    updateTimer(end) {
        const now = moment();
        const hours = end.diff(now, 'hours');
        const minutes = end.diff(now, 'minutes') % 60;
        const seconds = end.diff(now, 'seconds') % 60;

        this.setState({
            // code copied to constructor (not possible to update state of unmounted component)
            timeHour: ('0' + hours).slice(-2),
            timeMinute: ('0' + minutes).slice(-2),
            timeSecond: ('0' + seconds).slice(-2),
            labelHours: hours > 1 ? i18n.__("hours") : i18n.__("hour"),
            labelMinutes: minutes > 1 ? i18n.__("minutes") : i18n.__("minute"),
            labelSeconds: seconds > 1 ? i18n.__("seconds") : i18n.__("second"),
        });
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
                        <div className="smalltext">{this.state.labelHours}</div>
                    </div>
                    <div>
                        <span className="timeUnit">{this.state.timeMinute}</span>
                        <div className="smalltext">{this.state.labelMinutes}</div>
                    </div>
                    <div>
                        <span className="timeUnit">{this.state.timeSecond}</span>
                        <div className="smalltext">{this.state.labelSeconds}</div>
                    </div>
                </div>
            </div>
        );
    }
}