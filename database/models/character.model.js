const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const character_schema = new Schema({
	
});

const Character = mongoose.model('Character', character_schema);
module.exports = Character;