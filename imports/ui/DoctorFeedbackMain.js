import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
import CircularProgressbar from 'react-circular-progressbar';

const T = i18n.createComponent();

export default class DoctorFeedbackMain extends Component {
    constructor(props) {
        super(props);
        
        // TODO: hack. Locale not update in init phase. Use i18n-key
        this.state = {
            feedback: "positive_feedback",
        };

    }

    render() {
        return (
            <div className="panacea-text">
                <div className="md66">
                    <div className="panacea-image-text" >
                        <div><T>{this.state.feedback}</T></div>
                    </div>
                </div>
                <div className="md33">
                    <img className="panacea-image" src="http://icons.iconarchive.com/icons/icons-land/medical/128/People-Doctor-Female-icon.png" />
                </div>
            </div>
        );
    }
}