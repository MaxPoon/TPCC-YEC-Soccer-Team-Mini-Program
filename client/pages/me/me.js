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
      this.btnDisable = false
      this.setData({
        chineseNameInputValue: event.detail.value,
        btnDisable: false
      });
    }
  },
  englishNameInput: function (event) {
    if (event.detail.value.length > 0) {
      this.btnDisable = false
      this.setData({
        englishNameInputValue: event.detail.value,
        btnDisable: false
      });
    }
  },
  phoneInput: function (event) {
    if (event.detail.value.length > 0) {
      this.btnDisable = false
      this.setData({
        phoneInputValue: event.detail.value,
        btnDisable: false
      });
    }
  },
  emailInput: function (event) {
    if (event.detail.value.length > 0) {
      this.btnDisable = false
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
      url: 'http://localhost:5757',//config.service.userUrl + '?OpenID=' + that.userInfo.openId,
      method: 'POST',
      header: {
        'content-type':'application/x-www-form-urlencoded'
      },
      data: {
        //OpenID: this.personal.openId (using annotation to avoid error of undefined openID)
        ChineseName: this.data.chineseName,
        EnglishName: this.data.englishName,
        MobileNumber: this.data.phone,
        EmailAddress: this.data.email
      },
      success: function (res) {
        //able update userinfo into server
        console.log('successed to update userinfo');
      },
      fail: function (err) {
        // fail
        console.log('failed to update userinfo; err:');
        console.log(err);
      },
      complete: function () {
        // complete
        console.log('complete qcloud.request for updating userinfo');
      }
    });
  }
});