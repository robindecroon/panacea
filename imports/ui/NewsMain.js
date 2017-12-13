import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

import { HTTP } from 'meteor/http';
import parser from 'rss-parser';

import DOMPurify from "dompurify";

const T = i18n.createComponent();

const newsSource1 = "https://www.gezondheidenwetenschap.be/gezondheid-in-de-media.rss";
const newsSource2 = "https://rss.medicalnewstoday.com/featurednews.xml";
const newsSource3 = "https://twitrss.me/twitter_user_to_rss/?user=augmentHCI";

export default class NewsMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newsTitle: i18n.__("loading_content"),
            newsContent: i18n.__("be_patient"),
        };
    }

    componentWillMount() {
        let thisVar = this;
        Meteor.call("getURL", newsSource1, {}, (err, res) => {
            if (err) {
                console.log('Error: ' + err);
            }
            if (!err) {
                parser.parseString(res.content, function (err, parsed) {
                    thisVar.setState({
                        newsTitle: DOMPurify.sanitize(parsed.feed.entries[0].title),
                        newsContent: DOMPurify.sanitize(parsed.feed.entries[0].content),
                    })
                });
            }
        });
    }

    render() {
        // innerhtml is checked with DOMPurify before inserting.
        return (
            <div className="panacea-text">
                <h1 dangerouslySetInnerHTML={{__html: this.state.newsTitle}} />
                <div className="panacea-news" dangerouslySetInnerHTML={{__html: this.state.newsContent}} />
            </div>
        );
    }
}