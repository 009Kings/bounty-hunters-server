// Require Mongoose
const MONGOOSE = require('mongoose');

// Connect
MONGOOSE.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// export
module.exports.Bounty = require('./bounty');