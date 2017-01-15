const ModelJobs = require('../models/jobs');

module.exports = (req, res, next) => {
  ModelJobs
    .find()
    .then(jobs => res.send(jobs))
    .catch(err => res.status(401).json({message: err.message}));
}
