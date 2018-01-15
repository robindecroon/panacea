import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const T = i18n.createComponent();

const data = [
    { subject: i18n.__("blood_pressure"), A: 150, fullMark: 150 },
    { subject: i18n.__("weight"), A: 98, fullMark: 150 },
    { subject: i18n.__("spo2"), A: 86, fullMark: 150 },
    { subject: i18n.__("sleep"), A: 99, fullMark: 150 },
    { subject: i18n.__("activity"), A: 85, fullMark: 150 },
];

export default class RadialOverview extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="panacea-text">
                <RadarChart cx={300} cy={250} outerRadius={200} width={600} height={500} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" stroke="white"/>
                    {/* <PolarRadiusAxis /> */}
                    <Radar name="Measurements" dataKey="A" stroke="#00BFA5" fill="#00BFA5" fillOpacity={0.6} />
                </RadarChart>
            </div>
        );
    }
}