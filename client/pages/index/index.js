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
    qcloud.request({
      // url: 'http://localhost:5757/weapp/user',
      url: 'https://aeoo5f7q.qcloud.la/weapp/user',
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
      // url: 'http://localhost:5757/weapp/training',
      url: 'https://aeoo5f7q.qcloud.la/weapp/training',      
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
        const weekday = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ];
        var editDay = new Date(data.UpdatedTime).getDay();
        var trainingDay = weekday.indexOf(data.Day) + 1;
        var trainingDate = new Date(data.UpdatedTime);
        trainingDate.setDate(trainingDate.getDate() + trainingDay - editDay);
        trainingDate.setHours(parseInt(rowTime.slice(0, 3)), parseInt(rowTime.slice(3, 5)));
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
        const usualLocation = {
          'NUS': {
            lat: 1.29877,
            lon: 103.77821
          },
          'NTU': {
            lat: 1.348934,
            lon: 103.688587
          },
          'Nan Hua': {
            lat: 1.308768,
            lon: 103.769796
          }
        }
        let lat = 1.29877;
        let lon = 103.77821 //Default NUS
        if (['NTU', 'Nan Hua'].includes(data.Location)){
          lat = usualLocation[data.Location].lat;
          lon = usualLocation[data.Location].lon;
        }
        wx.request({
          url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&\APPID=eeec1ae3008acaff7f53e89c77054165`,
          success(res) {
            const weatherDataList = res.data.list;
            const trainingDateNum = Math.floor(trainingDate / 1000);
            if (weatherDataList[weatherDataList.length-1].dt <= trainingDateNum){
              that.setData({
                weather: ''
              });
              return;
            } else {
              const startTime = weatherDataList[0].dt;
              const step = Math.round((trainingDateNum - startTime) / 10800);
              const targetDate = startTime + 10800 * (step);
              that.setData({
                weather: weatherDataList[step].weather[0].description
              });
            }
          }
        });
      }
    })
  }
})