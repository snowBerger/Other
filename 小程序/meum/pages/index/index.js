//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello Meum',
    userInfo: {},
    buttonName: '点我',
    clickCount: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../logs/logs'
    })
  },
  changeMotto: function() {
    // 自定义click事件
    let that = this
    if (that.data.clickCount < 32) {
      that.setData({
        motto: 'I Love ' + that.data.userInfo.nickName + ' (+' + ++that.data.clickCount + ')',
        buttonName: '点我' 
      })
    } else {
      that.setData({
        buttonName: '不能再爱了...' 
      })
    }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShareAppMessage () {
    // 页面分享
    this.setData({
      motto: '只能自己欣赏哦~。~'
    })
  }
})
