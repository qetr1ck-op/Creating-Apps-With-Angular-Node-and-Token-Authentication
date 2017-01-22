const jwt = require('jsonwebtoken');
const moment = require('moment');
const secret = require('./../configs/constants').jwtSecret;

function sign(payload) {
  return jwt.sign(payload, secret)
}

function verify(payload) {
  return jwt.verify(payload, secret)
}

function createToken(req, user) {
  const payload = {
    iss: req.hostname,
    sub: user._id,
    exp: moment().add(14, 'days').unix()
  };

  return sign(payload);
}

module.exports = {
  sign,
  verify,
  createToken
}