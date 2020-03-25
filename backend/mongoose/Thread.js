const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
	title: { type: String, unique: false, required: true },
	posttext: { type: String, unique: false, required: true },
	replies: { type: Array, unique: false, required: false, default: [] },
	shortid: { type: String, unique: true, required: true, default: shortid.generate() }
});

const Thread = mongoose.model('Thread', ThreadSchema);
module.exports = Thread;