const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_schema = new Schema({
	
});

const User = mongoose.model('User', user_schema);
module.exports = User;