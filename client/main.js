import React from 'react';
import i18n from 'meteor/universe:i18n';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import TimeLeft from '../imports/ui/TimeLeft.js';
 
Meteor.startup(() => {
  i18n.setLocale('en')  
  render(<TimeLeft />, document.getElementById('render-target'));
});