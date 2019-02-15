//index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: "NUS",
    weather: "Mostly Cloudy",
    detailed: "Lower Field",
    time: "Sunday 14:00"
  },
  /**
   * 跳转到编辑页面
   */
  JumpToEdit: function () {
    wx.navigateTo({
      url: '../editntc/editntc'
    })
  },
  ShowSuccessMsg: function(){
    wx.showToast({
      title: 'Success',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Singapore,my&APPID=eeec1ae3008acaff7f53e89c77054165',
      data: {},
      method: 'GET',
      success(res) {
        console.log(res.data.weather[0]);
        that.setData({ weather: res.data.weather[0].main});
      }
    })
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