import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
import CircularProgressbar from 'react-circular-progressbar';

const T = i18n.createComponent();

export default class DaysStreak extends Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: 100,
        };
    }

    render() {
        // TODO circle + text vertical in div
        // TODO: change to actual nbDays (this.props.dayStreak * 100), pct /100
        return (
            <div className="panacea-text">
                <div>
                    <CircularProgressbar className="CircularProgressbar" percentage={60} textForPercentage={(pct) => `${pct / 20}`} />
                    <CircularProgressbar className="CircularProgressbar-streak" percentage={500} textForPercentage={(pct) => `${pct / 100}`} />
                </div>
                <div className="full-width">
                    <div className="half-element smalltext">
                        <T>nb_measures_to_perform</T>
                    </div>
                    <div className="half-element smalltext">
                        <T>avoid_lose_daystreak</T>
                    </div>
                </div>
            </div>
        );
    }
}