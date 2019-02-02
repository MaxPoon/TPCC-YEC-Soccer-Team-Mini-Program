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
        console.log(that.userInfo);

        qcloud.request({
          url: 'https://aeoo5f7q.qcloud.la/weapp/user?OpenID=' + that.userInfo.openId,
          data: {
            OpenID: that.userInfo.openId
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          
          success: function (res) {
            console.log(res);
          },
          fail: function (err) {
            // fail
            console.log('failed to get userinfo');
            console.log(err)
          },
          complete: function () {
            // complete
            console.log('complete wx.request')
          }
        });
      },
      fail (err) {
        console.log('fail to login');
        console.log(err)
      }
    });


    
    
  }
})