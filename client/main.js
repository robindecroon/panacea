import React from 'react';
import i18n from 'meteor/universe:i18n';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import TimeLeft from '../imports/ui/TimeLeft.js';
import WeekOverview from '../imports/ui/WeekOverview.js';
import DaysStreak from '../imports/ui/DaysStreak.js';
import NewsMain from '../imports/ui/NewsMain.js';
import DoctorFeedbackMain from '../imports/ui/DoctorFeedbackMain.js';
import LevelMain from '../imports/ui/LevelMain.js';

// wrap in this element to use material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

Meteor.startup(() => {
  i18n.setLocale('nl')
  render(
      <LevelMain />
    , document.getElementById('render-target'));
});