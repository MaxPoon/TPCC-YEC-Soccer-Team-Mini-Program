// pages/me/me.js
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
    saveBtnType: 'default'
  },
  onLoad: function () {
    this.setData({
      personal: app.personal
    });
  },

  chineseNameInput: function (event) {
    this.setData({
      chineseNameInputValue: event.detail.value,
      saveBtnType: 'primary'
    });
  },
  englishNameInput: function (event) {
    this.setData({
      englishNameInputValue: event.detail.value,
      saveBtnType: 'primary'
    });
  },
  phoneInput: function (event) {
    this.setData({
      phoneInputValue: event.detail.value,
      saveBtnType: 'primary'
    });
  },
  emailInput: function (event) {
    this.setData({
      emailInputValue: event.detail.value,
      saveBtnType: 'primary'
    });
  },

  infoSaveClick: function (event) {
    this.setData({
      chineseName: this.data.chineseNameInputValue,
      englishName: this.data.englishNameInputValue,
      phone: this.data.phoneInputValue,
      email: this.data.emailInputValue,
      saveBtnType: 'default'
    });
    //update the latest info into server
    qcloud.request({
      url: config.service.userUrl + '?OpenID=' + that.userInfo.openId,
      method: 'POST',
      data: {
        OpenID: app.userInfo.openId
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
        console.log('complete qcloud.request for updating userinfo');
      }
    });
  }
});