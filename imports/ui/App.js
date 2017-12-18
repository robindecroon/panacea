import React, { Component } from 'react';

import TimeLeft from './TimeLeft.js';
import WeekOverview from './WeekOverview.js';
import DaysStreak from './DaysStreak.js';
import NewsMain from './NewsMain.js';
import DoctorFeedbackMain from './DoctorFeedbackMain.js';
import LevelMain from './LevelMain.js';
import TabSwitcher from './TabSwitcher.js';

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
                        <Route exact path='/time' component={TimeLeft} />
                        <Route exact path='/week' component={WeekOverview} />
                        <Route exact path='/days' component={DaysStreak} />
                        <Route exact path='/news' component={NewsMain} />
                        <Route exact path='/feedback' component={DoctorFeedbackMain} />
                        <Route exact path='/level' component={LevelMain} />
                        <Route exact path='/tabs' component={TabSwitcher} />
                    </Switch>
                </div>
            </div>
        );
    }
}
