//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    chName: null,
    chNameTemp: null,
    egName: null,
    egNameTemp: null,
    phone: null,
    phoneTemp: null,
    email: null,
    emailTemp: null,

    saveBtnType: 'default',
    //btnTextColor:
  },


  onLoad: function () {
    
    this.setData({
      userInfo: app.userInfo
    })
    console.log(this.data.userInfo)
    
    if (this.data.userInfo == null) {
        // if there is no userinfo yet
        //setTimeout(function () {}, 100)
    } 
  },
 

  chNameInput: function(event) {
    this.setData({
      chNameTemp: event.detail.value,
      saveBtnType: 'primary'
    })
  },
  egNameInput: function (event) {
    this.setData({
      egNameTemp: event.detail.value,
      saveBtnType: 'primary'
    })
  },
  phoneInput: function (event) {
    this.setData({
      phoneTemp: event.detail.value,
      saveBtnType: 'primary'
    })
  },
  emailInput: function (event) {
    this.setData({
      emailTemp: event.detail.value,
      saveBtnType: 'primary'
    })
  },

  infoSaveClick: function(event) {
    this.setData({
      chName: this.data.chNameTemp,
      egName: this.data.egNameTemp,
      phone: this.data.phoneTemp,
      email: this.data.emailTemp,
      saveBtnType: 'default'
    })
    
    //update the latest info into server

  }

})