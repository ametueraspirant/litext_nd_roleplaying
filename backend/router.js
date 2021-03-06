const express = require('express');
const app = express();
const passport = require('passport');
const User = require('./mongoose/User.js');
const Forum = require('./mongoose/Forum.js');

// local redirect
app.post('/local/login',
	(req, res, next) => {
        next();
    },
	passport.authenticate('local'),
	(req, res) => {
		console.log('logged in', req.user);
		let userdata = {
			username: req.user.username,
			password: req.user.password
		}
		res.json(userdata);
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
			try {
			const newUser = new User({
				username: username,
				password: password,
				ismod: false
			});
			newUser.save((err, saved) => {
				if (err) return res.json(err);
                return res.json(saved);
			});
			} catch(err) {
				console.log(err);
			}
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

app.post('/user', (req, res) => {
	if(req.user) {
		const { username, password } = req.body;
		User.findOne({ username: username }, (err, user) => {
			if(err) console.log(err);
			else if(user) res.json(user);
		})
	}
});

app.get('/logout', (req, res) => {
	req.logout();
	console.log(req, res);
	res.status(200).send();
});

// Mongoose Routes ====================================================================
app.get('/forum', (req, res) => {
	Forum.findOne({ title: "main" }, (err, forum) => {
		if(err) {
			console.log(err);
		} else if(forum) {
			res.json(forum);
		} else {
			let newForum = new Forum({
				title: "main",
				description: "the top level"
			});
			newForum.save((err, saved) => {
				if (err) return res.json(err);
                return res.json(saved);
			});
		};
	});
});

app.get('/forum/view/:id', (req, res) => {
	Forum.findOne({ shortid: req.params.id }, (err, forum) => {
		if(err)return res.json(err);
		else if(forum)return res.json(forum);
		else return res.status(404).send();
	});
});

app.post('/forum/create', (req, res) => {
	let hostForum = Forum.findOne({ shortid: req.body.shortid });
	let newForum = new Forum({
		title: req.title,
		description: req.description
	});
	newForum.save((err, saved) => {
		if (err) return res.json(err);
        return res.json(saved);
	});
	hostForum.subforums.push(newForum.shortid);
});

app.get('/forum/delete', (req, res) => {
	// delete code
});

module.exports = app;