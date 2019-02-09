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
        qcloud.request({
          url: config.service.userUrl + '?OpenId=' + that.userInfo.openId,
          method: 'GET', 
          success: function (res) {
            //able to get user's personal information from server
            that.personal = res;
          },
          fail: function (err) {
            // fail
            console.log('failed to get userinfo; err:');
            console.log(err);
          },
          complete: function () {
            // complete
            console.log('complete qcloud.request for getting userinfo');
          }
        });
      },
      fail(err) {
        console.log('fail to login; err:');
        console.log(err);
      }
    });
  }
});