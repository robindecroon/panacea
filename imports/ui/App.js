import React, { Component } from 'react';

import TimeLeft from './TimeLeft.js';
import WeekOverview from './WeekOverview.js';
import DaysStreak from './DaysStreak.js';
import NewsMain from './NewsMain.js';
import DoctorFeedbackMain from './DoctorFeedbackMain.js';
import LevelMain from './LevelMain.js';
import TabSwitcher from './TabSwitcher.js';
import RadialOverview from './RadialOverview.js';
import AutonomyMain from './AutonomyMain.js';
import InitialPreferencesCard from './cards/InitialPreferencesCard.js';



import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors';
import green from 'material-ui/colors/green';

import { Switch, Route } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: red[500],
        secondary: green,
    },
});

// App component - represents the whole app
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <MuiThemeProvider theme={theme}>
                    <header>
                    </header>
                    <div>
                        <Switch>
                            <Route exact path='/time' component={TimeLeft} />
                            <Route exact path='/week' component={WeekOverview} />
                            <Route exact path='/days' component={DaysStreak} />
                            <Route exact path='/news' component={NewsMain} />
                            <Route exact path='/feedback' component={DoctorFeedbackMain} />
                            <Route exact path='/radial' component={RadialOverview} />
                            <Route exact path='/level' component={LevelMain} />
                            <Route exact path='/tabs' component={TabSwitcher} />
                            <Route exact path='/stepper' component={AutonomyMain} />
                            <Route exact path='/permissions' component={InitialPreferencesCard} />
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
