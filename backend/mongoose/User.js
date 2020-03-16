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
	verifyPassword: password => bcrypt.compareSync(password, this.password),
	hashPassword: password => bcrypt.hashSync(password, 10)
};

UserSchema.pre('save', next => {
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