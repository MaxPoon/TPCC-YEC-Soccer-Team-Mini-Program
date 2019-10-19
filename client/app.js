//app.js
const qcloud = require('wafer2-client-sdk');
const config = require('./config');

App({
  globalData:{
    userslist:[
      // for testing
      // {
      //   avatar: "../images/tabbar/active.png",
      //   name: "blablabla"
      // },
      // {
      //   avatar: "../images/tabbar/active.png",
      //   name: "23333333"
      // }
    ]
  },

  onLaunch: function() {
    qcloud.setLoginUrl(config.service.loginUrl);
  }
});