const express = require('express');
const app = express();
const passport = require('passport');
const User = require('./mongoose/User.js');

// local redirect
app.post('/local/login',
	(req, res, next) => {
        console.log(req.body);
        next();
    },
	passport.authenticate('local'),
	(req, res) => {
		console.log('logged in', req.user);
		let userdata = {
			username: req.user.username,
			password: req.user.password
		}
		res.send(userdata);
	}
);

app.post('/local/register', (req, res) => {
	const { username, password } = req.body;
	User.findOne({ username: username }, (err, user) => {
		if(err) {
			console.log(err);
		} else if(user) {
			res.json({ error: `Sorry, already a user with the username: ${username}` });
		} else {
			const newUser = new User({
				username: username,
				password: password
			})
			newUser.save((err, saved) => {
				if (err) return res.json(err);
                res.json(savedUser);
			});
		};
	});
});

// github redirect
app.get('/github', passport.authenticate('github'));
app.get('/github/callback',
	passport.authenticate('github'),
	(req, res) => {
		console.log(req, res);
		// res.redirect('/');
	}
);

// twitter redirect
app.get('/twitter', passport.authenticate('twitter'));
app.get('/twitter/callback',
	passport.authenticate('twitter', { failureRedirect: '/login' }),
	(req, res) => {
		console.log(req, res);
		// res.redirect('/');
	}
);

app.get('/logout', (req, res) => {
	req.logout();
	console.log(req, res);
	// res.redirect('/');
})

module.exports = app;