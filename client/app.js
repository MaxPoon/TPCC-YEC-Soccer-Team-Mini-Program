//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index');
var config = require('./config');

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