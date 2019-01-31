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
    console.log(app.userInfo)
    // wx.request({
    //   url: 'http://dev.cfo-mentor.com/menter/resources/views/demo/132.php', //服务器地址
    //   data: {
    //     name: 'bob'//请求参数
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
    
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