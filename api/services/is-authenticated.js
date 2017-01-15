const jwt = require('./jwt');

module.exports = (req, res, next) => {
  const headerAuthorization = req.headers.authorization;
  let token;

  if (!headerAuthorization) {
    return res.status(401).send({message: 'You are not authorized'})
  }

  try {
    token = headerAuthorization.split(' ')[1];
    jwt.verify(token);
    next();
  } catch (error) {
    res.status(401).send({message: 'Authorization failed', error});
  }
}