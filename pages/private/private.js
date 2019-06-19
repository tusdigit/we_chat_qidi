// pages/private/private.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    login_id: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var app = getApp()
    //console.log('test--', app.globalData.id)
    wx.request({
      url: 'http://localhost:8080/wxconnection/teacher/info',
      data: {
        login_id: app.globalData.id,
      },
      method: 'POST',
      header: {
        //'content-type': 'application/json' // 默认值
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //console.log('response--->', res.data);
        //console.log("private--->", that.data.login_id); 
        that.setData({ id: res.data[0].id });
        that.setData({ tel: res.data[0].tel });
        that.setData({ password: res.data[0].password });
      },
      fail: function (res) {
        console.log(".....fail.....");
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