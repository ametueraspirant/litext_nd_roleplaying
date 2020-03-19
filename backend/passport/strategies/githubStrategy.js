const GithubStrategy = require('passport-github').Strategy;
const User = require('../../mongoose/User.js');
const keys = require('../keys.js');

const githubStrategy = new GithubStrategy({
	clientID: keys.GITHUB.clientID,
	clientSecret: keys.GITHUB.clientSecret,
	callbackURL: "/auth/github/callback"
},
(accessToken, refreshToken, profile, cb) => {
	User.findOrCreate({ githubId: profile.id }, (err, user) => {
      return cb(err, user);
    });
});

module.exports = githubStrategy;