const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passlocmongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
	username: String,
	password: String
	// characters: Array,
	// campaigns: Array,
	// forumthreads: Array
});

UserSchema.plugin(passlocmongoose);

const User = mongoose.model('User', UserSchema);
module.exports = User;