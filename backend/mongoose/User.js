const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: String,
	password: String
	// characters: Array,
	// campaigns: Array,
	// forumthreads: Array
});

const User = mongoose.model('User', UserSchema);
module.exports = User;