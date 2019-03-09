// pages/userinfo/userinfo.js
const qcloud = require('wafer2-client-sdk');
const app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    multiArray: [['Saturday', 'Sunday'], [10, 11, 12, 13, 14, 15, 16], ['00', 10, 20, 30, 40, 50]], // 0 was changed to "00"
    objectMultiArray: [
      [
        {
          id: 0,
          name: 'Sunday'
        },
        {
          id: 1,
          name: 'Saturday'
        }
      ], [
        {
          id: 0,
          name: 10
        },
        {
          id: 1,
          name: 11
        },
        {
          id: 2,
          name: 12
        },
        {
          id: 3,
          name: 13
        },
        {
          id: 3,
          name: 14
        },
        {
          id: 3,
          name: 15
        },
        {
          id: 3,
          name: 16
        }
      ], [
        {
          id: 0,
          name: "00" //to display the time
        },
        {
          id: 1,
          name: 10
        },
        {
          id: 1,
          name: 20
        },
        {
          id: 1,
          name: 30
        },
        {
          id: 1,
          name: 40
        },
        {
          id: 1,
          name: 50
        }
      ]
    ],
    multiIndex: [0, 0, 0],

  },
  bindMultiPickerChange(e) {
    console.log('Time Choice', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },

  formSubmit: function (e) {
    console.log('Form Changed Value', e.detail.value)
    wx:wx.navigateBack({
      delta: 1,
    })
    wx.showToast({
      title: 'Success',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
    var Day;
    if(e.detail.value.time[0]==0){
      Day='Saturday';
    }else{
      Day='Sunday';
    }
    var trainingTime = [e.detail.value.time[1]+10, e.detail.value.time[2]*10].join(':');
    var sendTime = util.formatTime(new Date());
    qcloud.request({
      url:'http://localhost:5757/weapp/training',
      method:'PUT',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        Location: e.detail.value.location,
        LocationDetail: e.detail.value.detailed,
        Day:Day,
        Time: trainingTime,
        UpdatedTime: sendTime,
      },
      success:function(res){
        console.log(res);
      }

    })
  },
})