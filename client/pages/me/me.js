<<<<<<< HEAD
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
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
    
    if (this.data.hasUserInfo == false) {
        // if there is no userinfo yet
        setTimeout(function () {}, 100)
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
=======
// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
>>>>>>> TPCC/master
