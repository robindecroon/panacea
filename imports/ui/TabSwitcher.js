import React, { Component } from 'react';

import TimeLeft from './TimeLeft.js';
import WeekOverview from './WeekOverview.js';
import DaysStreak from './DaysStreak.js';
import NewsMain from './NewsMain.js';
import DoctorFeedbackMain from './DoctorFeedbackMain.js';
import LevelMain from './LevelMain.js';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import Button from 'material-ui/Button';


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.background.paper,
    },
});

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
                  <div className="table-root">
                  <AppBar position="static" color="default">
                    <Tabs
                      value={this.state.value}
                      onChange={this.handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      scrollable
                      scrollButtons="auto"
                    >
                      <Tab label="Item One" />
                      <Tab label="Item Two" />
                      <Tab label="Item Three" />
                      <Tab label="Item Four" />
                      <Tab label="Item Five" />
                      <Tab label="Item Six" />
                      <Tab label="Item Seven" />
                    </Tabs>
                  </AppBar>
                  {this.state.value === 0 && <TabContainer>Item One</TabContainer>}
                  {this.state.value === 1 && <TimeLeft></TimeLeft>}
                  {this.state.value === 2 && <TabContainer>Item Three</TabContainer>}
                  {this.state.value === 3 && <TabContainer>Item Four</TabContainer>}
                  {this.state.value === 4 && <TabContainer>Item Five</TabContainer>}
                  {this.state.value === 5 && <TabContainer>Item Six</TabContainer>}
                  {this.state.value === 6 && <TabContainer>Item Seven</TabContainer>}
                </div>
        );
    }
}
