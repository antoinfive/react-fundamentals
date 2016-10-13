var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');


var sentryApp = '101973'
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp
var _APP_INFO = {
  name: "Github Battle",
  branch: "master",
  version: "1.0"
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
}).install();

ReactDOM.render(routes,document.getElementById('app'));



