const express = require('express');
const router = express();
const passport = require('passport');

// local redirect
app.post('/local',
	passport.authenticate('local', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect('/');
	}
);

// github redirect
app.get('/github', passport.authenticate('github'));
app.get('/github/callback',
	passport.authenticate('github', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect('/');
	}
);

// twitter redirect
app.get('/twitter', passport.authenticate('twitter'));
app.get('/twitter/callback',
	passport.authenticate('twitter', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect('/');
	}
);

module.exports = app;