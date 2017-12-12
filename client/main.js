import React from 'react';
import i18n from 'meteor/universe:i18n';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import TimeLeft from '../imports/ui/TimeLeft.js';
import WeekOverview from '../imports/ui/WeekOverview.js';

 
Meteor.startup(() => {
  i18n.setLocale('en')  
  render(<WeekOverview />, document.getElementById('render-target'));
});