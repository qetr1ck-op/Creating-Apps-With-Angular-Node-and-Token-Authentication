const jwt = require('./jwt');

module.exports = (req, res, next) => {
  const headerAuthorization = req.headers.authorization;
  let token, payload;

  if (!headerAuthorization) {
    return res.status(401).send({message: 'You are not authorized'})
  }

  try {
    token = headerAuthorization.split(' ')[1];
    payload = jwt.verify(token);
  } catch (error) {
    res.status(401).send({message: 'Authorization failed', error});
  }

  if (payload.exp <= moment().unix()) {
    res.status(401).send({message: 'Token has expired', error});
  }
  next()
}