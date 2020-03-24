const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
	title: { type: String, unique: false, required: true },
	description: { type: String, unique: false, required: true },
	subforums: { type: Array, unique: false, required: false },
	threads: { type: Array, unique: false, required: false }
});

const Forum = mongoose.model('Forum', ForumSchema);
module.exports = Forum;