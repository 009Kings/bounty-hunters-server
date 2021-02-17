// Require Mongoose
const MONGOOSE = require('mongoose');

// Create the bounty Schema
const bountySchema = new MONGOOSE.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    wantedFor: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    ship: String,
    reward: {
        type: Number,
        default: 10000
    },
    hunters: [String],
    captured: {
        type: Boolean,
        default: false
    },
    lastSeen: String
});

module.exports = MONGOOSE.model('Bounty', bountySchema);