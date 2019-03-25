//app.js
const qcloud = require('wafer2-client-sdk');
const config = require('./config');

App({
  onLaunch: function() {
    qcloud.setLoginUrl(config.service.loginUrl);
  }
});