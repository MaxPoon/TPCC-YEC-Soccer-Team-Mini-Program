//app.js
const qcloud = require('wafer2-client-sdk');
const config = require('./config');

App({
  onLaunch: function() {
    var that = this;
    qcloud.setLoginUrl(config.service.loginUrl);

    // Login and store the user information
    qcloud.login({
      success(res) {
        that.userInfo = res;
      }
    });
  }
})