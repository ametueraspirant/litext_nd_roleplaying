const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
	title: { type: String, unique: false, required: true },
	description: { type: String, unique: false, required: true },
	subforums: { type: Array, unique: false, required: false, default: [] },
	threads: { type: Array, unique: false, required: false, default: [] },
	shortid: { type: String, unique: true, required: true, default: shortid.generate() }
});

const Forum = mongoose.model('Forum', ForumSchema);
module.exports = Forum;