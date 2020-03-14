const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const pGithub = require('passport-github').Strategy;
const pTwitter = require('passport-twitter').Strategy;
const keys = require('./keys.js');
let user = {};

app.use(cors());
app.use(passport.initialize());

passport.serializeUser((user, callback) => {
	callback(null, user);
});

passport.deserializeUser((user, callback) => {
	callback(null, user);
});

//github
passport.use(new pGithub({
	clientID: keys.GITHUB.clientID,
	clientSecret: keys.GITHUB.clientSecret,
	callbackURL: "/auth/github/callback",
},
(tAccess, tRefresh, profile, callback) => {
	console.log(JSON.stringify(profile));
	user = { ...profile };
	return callback(null, profile);
}));

app.get("/auth/github", passport.authenticate("github"));
app.get("/auth/github/callback", passport.authenticate("github"), (req, res) => {
	res.redirect("/");
});

//twitter
passport.use(new pTwitter({
	clientID: keys.TWITTER.clientID,
	clientSecret: keys.TWITTER.clientSecret,
	callbackURL: "/auth/twitter/callback",
},
(tAccess, tRefresh, profile, callback) => {
	console.log(JSON.stringify(profile));
	user = { ...profile };
	return callback(null, profile);
}));

app.get("/auth/twitter", passport.authenticate("twitter"));
app.get("/auth/twitter/callback", passport.authenticate("twitter"), (req, res) => {
	res.redirect("/");
});

app.get("/user", (req, res) => {
	res.send(user);
});

app.get("/logout", (req, res) => {
	user = {};
	res.redirect("/");
});