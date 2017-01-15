'use strict';

function config($logProvider, ngToastProvider) {
	'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  ngToastProvider.configure({
    verticalPosition: 'top',
    horizontalPosition: 'center',
    maxNumber: 3
  });

}

export default config;
