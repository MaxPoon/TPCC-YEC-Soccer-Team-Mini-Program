// pages/me/me.js
const qcloud = require('wafer2-client-sdk');
const app = getApp();
//const config = request('../../congig');

Page({
  data: {
    personal: {},
    chineseNameInputValue: null,
    englishNameInputValue: null,
    phoneInputValue: null,
    emailInputValue: null,
    btnDisable: true
  },
  onLoad: function () {
    this.setData({
      personal: app.userInfo
    });
    console.log(app.userInfo);
  },

  chineseNameInput: function (event) {
    this.setData({
      chineseNameInputValue: event.detail.value,
      btnDisable: event.detail.value.length === 0
    });
  },
  englishNameInput: function (event) {
    this.setData({
      englishNameInputValue: event.detail.value,
      btnDisable: event.detail.value.length === 0
    });
  },
  phoneInput: function (event) {
    this.setData({
      phoneInputValue: event.detail.value,
      btnDisable: event.detail.value.length === 0
    });
  },
  emailInput: function (event) {
    this.setData({
      emailInputValue: event.detail.value,
      btnDisable: event.detail.value.length === 0
    });
  },


  infoSaveClick: function (event) {
    //update the latest info into server
    qcloud.request({
      url: 'http://localhost:5757',
      //url: config.service.userUrl,
      method: 'PUT',
      // header: {
      //   'content-type':'application/x-www-form-urlencoded'
      // },
      data: {
        OpenId: this.data.personal.openId,
        WechatName: this.data.personal.nickName,
        ChineseName: this.data.chineseNameInputValue,
        EnglishName: this.data.englishNameInputValue,
        MobileNumber: this.data.phoneInputValue,
        EmailAddress: this.data.emailInputValue,
        Birthday: '1999-09-19'
      },
      success: function (res) {
        //able update userinfo into server
      },
      fail: function (err) {
        // fail
        console.log('failed to update userinfo; err:');
        console.log(err);
      },
      complete: function () {
        // complete
      }
    });
    this.setData({
      btnDisable: true
    });
  }
});