const jwt = require('jsonwebtoken');
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
    sub: user._id
  };

  return sign(payload);
}

module.exports = {
  sign,
  verify,
  createToken
}