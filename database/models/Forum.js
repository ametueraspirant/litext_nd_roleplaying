const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
	
});

const Forum = mongoose.model('Forum', ForumSchema);
module.exports = Forum;