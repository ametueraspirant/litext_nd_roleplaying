const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../../mongoose/User.js');
const keys = require('../keys.js');

const twitterStrategy = new TwitterStrategy({
	consumerKey: keys.TWITTER.clientID,
	consumerSecret: keys.TWITTER.clientSecret,
	callbackURL: "/auth/twitter/callback"
},
(accessToken, refreshToken, profile, cb) => {
	User.findOrCreate({ twitterId: profile.id }, (err, user) => {
      return cb(err, user);
    });
});

module.exports = twitterStrategy;