const LocalStrategy = require('passport-local').Strategy;
const ModelUser = require('../models/user');

// http://passportjs.org/docs/username-password
const loginStrategy = (options) => {
  return new LocalStrategy(options, (email, password, done) => {
    const searchUser = {email};

    if (!searchUser)
      return done(null, false, {message: 'Wrong credential'});

    ModelUser.findOne(searchUser)
      .then(user => {

        if (!user) {
          throw new Error('Wrong credential')
        }
        return user.comparePasswords(password)
          .then(isMatch => ({user, isMatch}));
      })
      .then(({user, isMatch}) => {
        if (isMatch) {
          return done(null, user)
        }
        done(null, false, {message: 'Wrong credential'})
      })
      .catch(err => done(null, false, {message: err.message}));
  });
};

module.exports = loginStrategy;