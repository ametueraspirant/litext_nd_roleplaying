const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: { type: String, unique: true, required: true },
	password: { type: String, unique: false, required: true}
	// characters: Array,
	// campaigns: Array,
	// forumthreads: Array
});

UserSchema.methods = {
	verifyPassword: function(password) { return bcrypt.compareSync(password, this.password) },
	hashPassword: function(password) { return bcrypt.hashSync(password, 10) }
};

UserSchema.pre('save', function(next) {
	if(!this.password)
	{
		console.log("no password provided");
		next();
	}
	else
	{
		console.log("hash save password");
		this.password = this.hashPassword(this.password);
		next();
	}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;