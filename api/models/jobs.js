const mongoose = require('mongoose');

const schemaJobs = mongoose.Schema({
  name: {type: String, required: true}
});

module.exports = mongoose.model('jobs', schemaJobs);