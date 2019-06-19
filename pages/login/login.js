Page({
  data: {
    login_id: '',
    password: ''
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      login_id: e.detail.value
    })
  },
  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    var that = this
    wx.request({
      url: 'http://localhost:8080/wxconnection/teacher/login',
      data: {
        login_id: this.data.login_id,
        password: this.data.password
      },
      method: 'POST',
      header: {
        //'content-type': 'application/json' // 默认值
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log('response--->', res.data.code);
        //console.log(that.data.login_id);
        if (res.data.code == 200) {
          wx.showToast({
            title: '登录成功',
            duration: 3000
          })
          var app = getApp()
          app.globalData.id = that.data.login_id
          wx.reLaunch({
            url: '/pages/home/home'
          })
        }
      },
      fail: function (res) {
        console.log(".....fail.....");
        // wx.reLaunch({
        //   url: '/pages/home/home'
        // })
      }
    })
    if (this.data.login_id.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    }
  }
})  