Learn about Authentication, Authorization, and OAuth2 with Node Express and Angular through creating multiple types of 
Auth servers and clients. Learn how to allow users to authenticate with Facebook, Google, Twitter, and any other third-party Auth Provider, using OpenID and OAuth. Our main focus will be on using the latest JSON Web Token.

# JWT

* What is JSON Web Token?
* When should you use JSON Web Tokens?
* What is the JSON Web Token structure?
* How do JSON Web Tokens work via Bearer shema?

Introduction to JSON Web Tokens on [https://jwt.io/introduction/](https://jwt.io/)

# Rump-up the client app

* Rapid development with Yeoman [https://github.com/stukh/generator-angular-webpack-es6#readme](generator) for 
AngularJS + Webpack with ES6 and SASS.
* Using bootstrap theme via [https://bootswatch.com/](bootswatch) with [https://www.npmjs.com/package/bootswatch]
(bootswatch npm package)
* Fast component structure and styles using [http://bootsnipp.com/](http://bootsnipp.com/)
* Using [Angular 1.5 Component Router](https://docs.angularjs.org/guide/component-router) functionality
* Using 3th party directive [router-active](https://github.com/Wapweb/angular-component-router-active) for active route state 

# Register Front-End Controllers and Services

* Validation using custom validation in [$validators](https://docs.angularjs.org/guide/forms) with `<validate-equal>` 
directive.
* Error notification using [ngMassages](https://docs.angularjs.org/api/ngMessages)
* Notification using [ngToast](http://tamerayd.in/ngToast)

# REST API with JWT

* Rump up and configure REST API via Node.js and [express](http://expressjs.com/en/api.html), MongoDB and [mongoose]
(http://mongoosejs.com/index.html)
* Crypt user password before save in DB with [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* Create payload for JWT token using [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
* Using [restangular](https://github.com/mgonto/restangular) for http transactions
* Store token for `isAuthenticated` state using `localStorage`

# REST API with JWT pt.2

* Using component life cycle `$doCheck` instead of `$scope.$watch` to observe changes in a service
* Add view animation using [ngAnimate](https://docs.angularjs.org/guide/animations)
* Add interceptor request `Auhtorization` header using Restangular's [addFullRequestInterceptor](https://github
.com/mgonto/restangular#setfullrequestinterceptor)
* Authorize resource
* Verify token using [jwt.verify()](https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback)

# Login flow

* Verify user manually and with [passportjs](http://passportjs.org/docs/overview) using local strategies

# Google Auth provider

# Manually authenticated using [google-console](https://console.developers.google.com/apis/credentials) via 
[google flow with oath2](https://developers.google.com/identity/protocols/OAuth2)
# Get user profile using [Google+ Platform](https://developers.google.com/+/web/people/)
# Using [request-promise](https://www.npmjs.com/package/request-promise) for HTTP transactions
# Refactor code using express's [middlewares](https://stormpath.com/blog/how-to-write-middleware-for-express-apps)
# Creating iframe document to get access token from google api. Using [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)