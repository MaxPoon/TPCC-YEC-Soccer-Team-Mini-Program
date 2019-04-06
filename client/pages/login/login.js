// pages/login/login.js
const qcloud = require('wafer2-client-sdk');
const config = require('../../config');
const app = getApp();

function successfulLoginCallback(res) {
  app.userInfo = res;
  wx.switchTab({
    url: '../index/index',
  })
  // qcloud.request({
  //   url: config.service.userUrl + '?OpenId=' + app.userInfo.openId,
  //   method: 'GET',
  //   success: function (res) {
  //     //able to get user's personal information from server
  //     app.userInfo = Object.assign(app.userInfo, res.body);
  //   },
  //   fail: function (err) {
  //     // fail
  //     console.log('failed to get userinfo; err:');
  //     console.log(err);
  //   },
  //   complete: function () {
  //     // complete
  //     console.log('complete qcloud.request for getting userinfo');
  //   }
  // });
}

Page({
  bindGetUserInfo: function () {
    const session = qcloud.Session.get();
    if (session) {
      // When there is local cache
      qcloud.loginWithCode({
        success: successfulLoginCallback,
        fail: err => {
          console.error(err);
        }
      })
    } else {
      // The first-time login
      qcloud.login({
        success: successfulLoginCallback,
        fail: err => {
          console.error(err);
        }
      })
    }
  },

})