'use strict';

function config($logProvider, ngToastProvider, $authProvider, REST) {
	'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  ngToastProvider.configure({
    verticalPosition: 'top',
    horizontalPosition: 'center',
    maxNumber: 3
  });

  $authProvider.google({
    clientId: '722126372425-n4vapov601njk8c0o6168dt5jlmh7kdr.apps.googleusercontent.com',
    url: `${REST.uri}/auth/google`
  });

  $authProvider.facebook({
    clientId: '1347996491888216',
    url: `${REST.uri}/auth/facebook`
  });

  $authProvider.tokenPrefix = 'auth';
  $authProvider.loginUrl = `${REST.uri}/auth/local`;
  $authProvider.signupUrl = `${REST.uri}/auth/register`;
}

export default config;
