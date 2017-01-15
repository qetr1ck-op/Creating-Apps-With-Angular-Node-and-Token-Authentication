const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schemaUser = mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, default: ''},
  googleId: {type: String},
  displayName: {type: String},
  token: {type: String},
});

schemaUser.pre('save', function(next) {
  const user = this;

  if (!user.isModified()) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

schemaUser.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

schemaUser.methods.comparePasswords = function(password) {
  return bcrypt.compare(password, this.password)
};

schemaUser.methods.addToken = function(token) {
  this.token = token;
  return this;
};

module.exports = mongoose.model('user', schemaUser);