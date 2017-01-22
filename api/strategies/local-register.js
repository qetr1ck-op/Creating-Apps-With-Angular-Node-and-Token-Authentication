const RegisterStrategy = require('passport-local').Strategy;
const ModelUser = require('../models/user');

// http://passportjs.org/docs/username-password
const registerStrategy = (options) => {
  return new RegisterStrategy(options, (email, password, done) => {
    const user = new ModelUser({email, password});

    ModelUser.findOne({email: user.email})
      .then(isUser => {
        if (isUser) {
          return done('Email is already taken');
        }
        return user
      })
      .then(() => done(null, user))
      .catch(err => done(err));
  });
};

module.exports = registerStrategy;