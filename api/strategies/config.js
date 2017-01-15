const passport = require('passport');
const localLoginStrategy = require('./local-login');
const localRegisterStrategy = require('./local-register');

const options = {
  usernameField: 'email'
};

function configStrategies(app) {
  // configuration
  // http://passportjs.org/docs/configure
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.use('local-login', localLoginStrategy(options));
  passport.use('local-register', localRegisterStrategy(options));
  app.use(passport.initialize());
}

module.exports = configStrategies;