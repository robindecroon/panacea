import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

import SingleDay from "./SingleDay";

const T = i18n.createComponent();

// Task component - represents a single todo item
export default class SingleWeek extends Component {

  render() {
    return (
      <li className="single-week">
        <div className="week-label">
          <T>week</T>{" " + (this.props.weeknb + 1)}
        </div>
        <SingleDay
          day={(this.props.weeknb + 1) * 1} 
        />
        <SingleDay
          day={(this.props.weeknb + 1) * 2}
        />
        <SingleDay
          day={(this.props.weeknb + 1) * 3}
        />
        <SingleDay
          day={(this.props.weeknb + 1) * 4}
        />
        <SingleDay
          day={(this.props.weeknb + 1) * 5}
        />
        <SingleDay
          day={(this.props.weeknb + 1) * 6}
        />
        <SingleDay
          day={(this.props.weeknb + 1) * 7}
        />
      </li>
    );
  }
}