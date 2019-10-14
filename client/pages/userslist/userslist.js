// pages/userlist/userlist.js
const qcloud = require('wafer2-client-sdk');
const app = getApp();
const config = require('../../config');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //userslist info
    userslist: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad userslist page");
    this.getUserslist();
  },

  getUserslist: function (event) {
    let that=this;
    qcloud.request({
      url: config.service.userUrl,
      method: "GET",
      success: function (res) {
        // console.log(res);
        console.log("Successfully gotten userslist.")
        if(res.dara.code===0) {
          that.setData({
            // userslist: xxx
          })
        }
      },
      fail: function (err) {
        console.log("Failed to get userslist.");
        console.log(err);
      }
    });
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