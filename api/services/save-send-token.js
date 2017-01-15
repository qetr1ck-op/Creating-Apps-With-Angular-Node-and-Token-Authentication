const jwt = require('./jwt');

module.exports = (req, res, next) => {
  const user = req.user;
  const token = jwt.createToken(req, user);

  user.addToken(token);
  user.save();
  res.status(200).json(user.toJSON());
};
