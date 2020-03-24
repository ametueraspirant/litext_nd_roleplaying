const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
	title: { type: String, unique: false, required: true },
	posttext: { type: String, unique: false, required: true },
	replies: { type: Array, unique: false, required: false, default: [] }
});

const Thread = mongoose.model('Thread', ThreadSchema);
module.exports = Thread;