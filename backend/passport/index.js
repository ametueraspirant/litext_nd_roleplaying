const passport = require('passport');
const LocalStrategy = require('./strategies/localStrategy.js');
const GithubStrategy = require('./strategies/githubStrategy.js');
const TwitterStrategy = require('./strategies/twitterStrategy.js');
const User = require('../mongoose/User');

passport.serializeUser((user, done) => {
	// done(null, user.id);
	done(null, {id: user.id});
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});

passport.use(LocalStrategy);
passport.use(GithubStrategy);
passport.use(TwitterStrategy);

module.exports = passport