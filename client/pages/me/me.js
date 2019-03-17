// pages/me/me.js
const qcloud = require('wafer2-client-sdk');
const app = getApp();

Page({
  data: {
    personal: {},
    chineseName: null,
    englishName: null,
    phoneNumber: null,
    email: null,
    birthday: null
  },
  
  //jump to editme page
  JumpToEdit: function () {
    wx.navigateTo({
      url: '../editme/editme'
    })
  },

  onLoad: function () {
    this.setData({
      personal: app.userInfo
    });
    console.log(app.userInfo);
  },

});