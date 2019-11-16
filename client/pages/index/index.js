//index.js
const qcloud = require('wafer2-client-sdk');
const config = require('../../config');
const app = getApp();

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
    var that = this;
    qcloud.request({
      url: config.service.birthdayUrl,
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        var data = res.data;
        if (data.length > 0) {
          var birthdayMsg = "Happy birthday ";
          if (data.length == 1) {
            birthdayMsg += data[0].EnglishName + "(" + data[0].ChineseName + ")";
          } else {
            for (var i = 0; i < data.length; i++) {
              birthdayMsg += (data[i].EnglishName + "(" + data[i].ChineseName + ")");
              if (i < data.length - 2) {
                birthdayMsg += ", ";
              } else if (i == data.length - 2) {
                birthdayMsg += " and ";
              } else {
                birthdayMsg += "!";
              }
            }
          }
          that.setData({
            birthdayMsg: birthdayMsg
          })
        }
      },
      fail: err => {
        console.log("failed to get birthday");
        console.error(err);
      }
    })
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