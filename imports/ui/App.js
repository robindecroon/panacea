import React, { Component } from 'react';

import TimeLeft from './TimeLeft.js';
import WeekOverview from './WeekOverview.js';
import DaysStreak from './DaysStreak.js';
import NewsMain from './NewsMain.js';
import DoctorFeedbackMain from './DoctorFeedbackMain.js';
import LevelMain from './LevelMain.js';

import { Switch, Route } from 'react-router-dom'

// App component - represents the whole app
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <header>
                </header>
                <div>
                    <Switch>
                        <Route path='/time' component={TimeLeft} />
                        <Route path='/week' component={WeekOverview} />
                        <Route path='/days' component={DaysStreak} />
                        <Route path='/news' component={NewsMain} />
                        <Route path='/feedback' component={DoctorFeedbackMain} />
                        <Route path='/level' component={LevelMain} />
                    </Switch>
                </div>
            </div>
        );
    }
}
