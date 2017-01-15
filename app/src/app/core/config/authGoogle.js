export default function authGoogle($window) {
  'ngInject';

  const params = $window.location.search.slice(1);

  if(params && $window.opener.location.origin === $window.location.origin) {
    const code = decodeURIComponent(params.split('=')[1]);

    $window.opener.postMessage(code, $window.location.origin);
  }
}