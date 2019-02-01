// pages/userinfo/userinfo.js
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
  },
})