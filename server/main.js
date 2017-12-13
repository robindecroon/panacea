import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import parser from 'rss-parser';


import FeedParser from 'feedparser';

import '../imports/api/news.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'getURL': function (url_l) {
    return HTTP.get("https://www.freefullrss.com/feed.php?url=" + url_l + "&max=1&links=preserve&exc=&submit=Create+Full+Text+RSS")
    // return HTTP.get(url_l)
  }
});
