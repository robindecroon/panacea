import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();


// Task component - represents a single todo item
export default class SingleDay extends Component {

  render() {

    // TODO - read real values from database
    // this.props.day === daynumber (in total) --> use for database search
    const nbMeasurements = Math.floor(Math.random() * (5+1));
    //const nbMeasurements = this.props.day;

    return (
      <div className={"day-block week-" + nbMeasurements}>
            {nbMeasurements}/5
      </div>
    );
  }
}