const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const jwt = require('./services/jwt');
const passport = require('passport');
require('./strategies/config')(app);
const authenticateGoogle = require('./strategies/remote-google');
const saveSendToken = require('./services/save-send-token');
const isAuthenticated = require('./services/is-authenticated');
const getJobs = require('./services/get-jobs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());
//Simple Usage (Enable All CORS Requests)
app.use(cors());

app.post('/register',
  passport.authenticate('local-register'),
  saveSendToken);

app.post('/login/local',
  passport.authenticate('local-login'),
  saveSendToken);

app.post('/login/google',
  authenticateGoogle,
  saveSendToken);

app.get('/jobs',
  isAuthenticated,
  getJobs);

const server = app.listen(3000, () => {
  console.log(`api listening on ${server.address().port}`);
});

// mongoose's Promise library is deprecated, using es6's
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/jwt');