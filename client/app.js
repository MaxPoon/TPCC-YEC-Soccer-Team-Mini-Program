//app.js
App({
  onLaunch: function() {
    var that = this;

    // Login and get the user information
    wx.login({
      success(res) {
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