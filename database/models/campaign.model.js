const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campagin_schema = new Schema({

});

const Campaign = mongoose.model('Campaign', campagin_schema);
module.exports = Campaign;