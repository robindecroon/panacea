import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

import SingleWeek from './SingleWeek';

const T = i18n.createComponent();

// App component - represents the whole app
export default class WeekOverview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nbWeeks: 10,
        };
    };

    renderWeeks() {
        let weeks = [];
        for (let i = 0; i < this.state.nbWeeks; i++) {
            weeks.push(
                <SingleWeek
                    key={"weekLI-" + i}
                    weeknb={i}
                />
            );
        }
        return weeks;
    }


    render() {
        return (
            <div className="panacea-text">
                <div id="week-overview">
                    <ul>
                        <li className="single-week">
                            <div className="week-label">

                            </div>
                            <div className={"day-block"}>
                                <T>monday</T>
                            </div>
                            <div className={"day-block"}>
                                <T>tuesday</T>
                            </div><div className={"day-block"}>
                                <T>wednesday</T>
                            </div><div className={"day-block"}>
                                <T>thursday</T>
                            </div><div className={"day-block"}>
                                <T>friday</T>
                            </div><div className={"day-block"}>
                                <T>saturday</T>
                            </div>
                            <div className={"day-block"}>
                                <T>sunday</T>
                            </div>
                        </li>
                        {this.renderWeeks()}
                    </ul>
                </div>
            </div>
        );
    }
}