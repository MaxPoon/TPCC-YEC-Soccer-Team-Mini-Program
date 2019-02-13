// pages/me/me.js
const qcloud = require('wafer2-client-sdk');
const app = getApp();

Page({
  data: {
    personal: {},
    chineseName: null,
    chineseNameInputValue: null,
    englishName: null,
    englishNameInputValue: null,
    phone: null,
    phoneInputValue: null,
    email: null,
    emailInputValue: null,
    btnDisable: true
  },
  onLoad: function () {
    this.setData({
      personal: app.userInfo
    });
  },

  chineseNameInput: function (event) {
    if (event.detail.value.length > 0) {
      this.setData({
        chineseNameInputValue: event.detail.value,
        btnDisable: false
      });
    }
  },
  englishNameInput: function (event) {
    if (event.detail.value.length > 0) {
      this.setData({
        englishNameInputValue: event.detail.value,
        btnDisable: false
      });
    }
  },
  phoneInput: function (event) {
    if (event.detail.value.length > 0) {
      this.setData({
        phoneInputValue: event.detail.value,
        btnDisable: false
      });
    }
  },
  emailInput: function (event) {
    if (event.detail.value.length > 0) {
      this.setData({
        emailInputValue: event.detail.value,
        btnDisable: false
      });
    }
  },

  infoSaveClick: function (event) {
    this.setData({
      chineseName: this.data.chineseNameInputValue,
      englishName: this.data.englishNameInputValue,
      phone: this.data.phoneInputValue,
      email: this.data.emailInputValue,
      btnDisable: true
    });
    //update the latest info into server
    qcloud.request({
      url: 'http://localhost:5757',
      //url: config.service.userUrl,
      method: 'PUT',
      // header: {
      //   'content-type':'application/x-www-form-urlencoded'
      // },
      data: {
        OpenID: this.data.personal.openId,
        ChineseName: this.data.chineseName,
        EnglishName: this.data.englishName,
        MobileNumber: this.data.phone,
        EmailAddress: this.data.email
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
  }
});