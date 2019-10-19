// pages/me/me.js
const qcloud = require('wafer2-client-sdk');
const app = getApp();
const config = require('../../config');

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
    c
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
    //update the latest info into server
    qcloud.request({
      //url: 'http://localhost:5757',
      url: config.service.userUrl,
      method: 'PUT',
      header: {
        'content-type':'application/x-www-form-urlencoded'
      },
      data: {
        OpenId: this.data.personal.openId,
        ChineseName: this.data.chineseNameInputValue,
        EnglishName: this.data.englishNameInputValue,
        MobileNumber: this.data.phoneInputValue,
        EmailAddress: this.data.emailInputValue
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