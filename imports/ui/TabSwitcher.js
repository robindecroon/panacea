import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';


import TimeLeft from './TimeLeft.js';
import WeekOverview from './WeekOverview.js';
import DaysStreak from './DaysStreak.js';
import NewsMain from './NewsMain.js';
import DoctorFeedbackMain from './DoctorFeedbackMain.js';
import LevelMain from './LevelMain.js';
import RadialOverview from './RadialOverview.js';


import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import { red, purple } from 'material-ui/colors';


import Button from 'material-ui/Button';


// We can inject some CSS into the DOM.
const style = {
    background: '#1F6F60',
  };


// App component - represents the whole app
export default class TabSwitcher extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {


        return (
            <div>
                <AppBar position="static" style={style}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="auto"
                    >
                        <Tab label={i18n.__("timeleft-component")} />
                        <Tab label={i18n.__("weekoverview-component")} />
                        <Tab label={i18n.__("daystreak-component")} />
                        <Tab label={i18n.__("news-component")} />
                        <Tab label={i18n.__("doctorfeedback-component")} />
                        <Tab label={i18n.__("level-component")} />
                        <Tab label={i18n.__("radial-component")} />
                    </Tabs>
                </AppBar>
                {this.state.value === 0 && <TimeLeft />}
                {this.state.value === 1 && <WeekOverview />}
                {this.state.value === 2 && <DaysStreak />}
                {this.state.value === 3 && <NewsMain />}
                {this.state.value === 4 && <DoctorFeedbackMain />}
                {this.state.value === 5 && <LevelMain />}
                {this.state.value === 6 && <RadialOverview />}
            </div>
        );
    }
}