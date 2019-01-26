//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  onLaunch: function() {
    var that = this;
    wx.login({
      success(res) {
        var code = res.code;
        wx.getUserInfo({
          withCredentials: true,
          success: function(res) {
            that.user = res;
          }
        });
      }
    });
  }
})