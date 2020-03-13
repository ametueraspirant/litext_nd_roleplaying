const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forum_schema = new Schema({
	
});

const Forum = mongoose.model('Forum', forum_schema);
module.exports = Forum;