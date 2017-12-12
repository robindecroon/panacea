import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import TimeLeft from '../imports/ui/TimeLeft.js';
 
Meteor.startup(() => {
  render(<TimeLeft />, document.getElementById('render-target'));
});