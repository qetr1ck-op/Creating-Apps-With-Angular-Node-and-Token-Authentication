const ModelUser = require('../models/user');
const request = require('request-promise');

const googleStrategy = (req, res, next) => {
  const uriLogin = 'https://www.googleapis.com/oauth2/v4/token';
  const form = {
    client_id: req.body.clientId,
    client_secret: 'ELohSE_NZMz1EnKD8DpRYBDH',
    redirect_uri: req.body.redirectUri,
    code: req.body.code,
    grant_type: 'authorization_code'
  };
  const optsToken = {
    method: 'POST',
    json: true,
    uri: uriLogin,
    form
  };

  return request(optsToken)
    .then(data => data.access_token)
    .then(accessToken => {
      const optsContact = {
        method: 'GET',
        uri: 'https://www.googleapis.com/plus/v1/people/me',
        json: true,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      };
      return request(optsContact)
    })
    .then(profile => {
      return ModelUser.findOne({googleId: profile.id})
        .then(existingUser => {
          if (existingUser) {
            return existingUser;
          }
          const user = new ModelUser({
            email: profile.emails[0].value,
            displayName: profile.displayName,
            googleId: profile.id
          });
          return user.save()
        })
    })
    .then(user => {
      req.user = user;
      next()
    })
    .catch(err => {
      res.end(err);
      next()
    })
};


module.exports = googleStrategy;