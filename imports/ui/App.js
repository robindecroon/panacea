import React, { Component } from 'react';
import moment from 'moment';
import countdown from 'moment-countdown';

// App component - represents the whole app
export default class App extends Component {

    render() {
        return (
            <div>
                <p>
                    Limited time left to register your measurements for today!
                </p>
                <p>
                    {moment().endOf('day').countdown().toString()}
                </p>
            </div>
        );
    }
}