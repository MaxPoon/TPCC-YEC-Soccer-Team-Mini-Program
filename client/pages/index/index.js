//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: "NUS",
    weather: "Mostly Cloudy",
    detailed: "Lower Field",
    time: "1:30pm"
  },
  /**
   * 跳转到编辑页面
   */
  JumpToEdit: function () {
    wx.navigateTo({
      url: '../editntc/editntc'
    })
  },
  /**
   * sending notifications
   */
  SendNotification: function () {
    qcloud.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret,
      //get access_token using official acount's appid and secret
      success: function (res) {
        console.log(res);
        TOKEN = res.data.access_token;
        qcloud.request({
          url: 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=' + TOKEN,
          //api used for official accounts to send template messages
          header: {
            'Content-Type': 'application/x-ww-form-urlencoded'
          },
          method: 'POST',
          data: {
            'touser': '',       //official account Openid
            'template_id': '',   //state the used template

            //others
          },
          success: function (res) {
            console.log('successfully sent notifications; err:');
          },
          fail: function (err) {
            // fail
            console.log('failed to send notifications; err:');
            console.log(err);
          },
          complete: function () {
            // complete
            console.log('complete sending notifications');
          }
        });
      },
      fail: function (err) {
        console.log('failed to get token; err:');
        console.log(err);
      },
      complete: function () {
        console.log('complete qcloud.request for token');
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})