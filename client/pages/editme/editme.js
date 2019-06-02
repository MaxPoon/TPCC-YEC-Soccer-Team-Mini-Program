//pages/editme/editme.js
const qcloud = require('wafer2-client-sdk');
const app = getApp();
const config = request('../../congig');

Page({

  data: {
    personal: null,
    chineseName: null,
    englishName: null,
    phoneNumber: null,
    email: null,
    birthday: null,
    btnDisable: true
  },

  onLoad: function(options) {
    this.setData({
      personal: app.userInfo
    })
  },

  formSubmit: function (e) { },

  bindBirthdayChange(e) {
    this.setData({
      birthday: e.detail.value,
      btnDisable: 0
    })
  },
  chineseNameInput: function (event) {
    this.setData({
      chineseName: event.detail.value,
      btnDisable: event.detail.value.length === 0
    });
  },
  englishNameInput: function (event) {
    this.setData({
      englishName: event.detail.value,
      btnDisable: event.detail.value.length === 0
    });
  },
  phoneInput: function (event) {
    this.setData({
      phoneNumber: event.detail.value,
      btnDisable: event.detail.value.length === 0
    });
  },
  emailInput: function (event) {
    this.setData({
      email: event.detail.value,
      btnDisable: event.detail.value.length === 0
    });
  },
  formSubmit(e) {
    //update the latest info into server
    qcloud.request({
      // url: 'http://localhost:5757',
      url: config.service.userUrl,
      method: 'PUT',
      // header: {
      //   'content-type':'application/x-www-form-urlencoded'
      // },
      data: {
        OpenId: this.data.personal.openId,
        WechatName: this.data.personal.nickName,
        ChineseName: this.data.chineseName,
        EnglishName: this.data.englishName,
        MobileNumber: this.data.phone,
        EmailAddress: this.data.email,
        Birthday: this.data.birthday
      },
      success: function (res) {
        //able to update userinfo into server
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

    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    prevPage.setData({
      chineseName: this.data.chineseName,
      englishName: this.data.englishName,
      phoneNumber: this.data.phoneNumber,
      email: this.data.email,
      birthday: this.data.birthday
    });
  }
})