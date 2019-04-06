//index.js
const qcloud = require('wafer2-client-sdk');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: "NUS",
    weather: "Mostly Cloudy",
    detailed: "Lower Field",
    time: "Sunday 14:00",
    edit: 'Edit',
    hid: true,
  },
  /**
   * 跳转到编辑页面
   */
  JumpTo: function() {
    if (this.data.edit == 'Edit') {
      wx.navigateTo({
        url: '../editntc/editntc?isAdd=0'
      })
    } else {
      wx.navigateTo({
        url: '../editntc/editntc?isAdd=1'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function(options) {
    var that = this;
    wx.request({
      url: 'http://api.openweathermap.org/data/2.5/weather?lat=1.29877&lon=103.77821&APPID=eeec1ae3008acaff7f53e89c77054165', //current weather in NUS information
      success(res) {
        console.log(res.data.weather[0]);
        that.setData({
          weather: res.data.weather[0].description
        });
      }
    });
    qcloud.request({
      url: 'http://localhost:5757/weapp/user',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        OpenId: 1234,
        //'1234'should be the user's openid, here is just an demo. One admin with OpenId =1234 was written into local DB for test purpose.
      },
      success: function(res) {
        console.log(res);
        if (res.data.IsAdmin == 1) {
          that.setData({
            hid: false
          })
        }
      }
    });
    qcloud.request({
      url: 'http://localhost:5757/weapp/training',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res);
        var data = res.data[0];
        var rowTime = data.Time;
        var newTime = rowTime.slice(0, 5);
        var dataAndTime = [data.Day, newTime].join(' ');
        that.setData({
          location: data.Location,
          detailed: data.LocationDetail,
          time: dataAndTime
        })
        var weekday = new Array(7);
        weekday[0] = "Monday";
        weekday[1] = "Tuesday";
        weekday[2] = "Wednesday";
        weekday[3] = "Thursday";
        weekday[4] = "Friday";
        weekday[5] = "Saturday";
        weekday[6] = "Sunday";
        var editDay = new Date(data.UpdatedTime).getDay();
        var trainingDay = weekday.indexOf(data.Day) + 1;
        var trainingDate = new Date(data.UpdatedTime);
        trainingDate.setDate(trainingDate.getDate() + trainingDay - editDay);
        var currentDate = new Date();
        if (currentDate > trainingDate) {
          that.setData({
            edit: 'Add',
          })
        } else {
          that.setData({
            edit: 'Edit',
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {

  // },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})