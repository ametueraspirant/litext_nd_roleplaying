const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({

});

const Campaign = mongoose.model('Campaign', CampaignSchema);
module.exports = Campaign;