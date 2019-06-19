// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg_to_be_reply: "老师，请问。。。。。。。。。。。。。",
    appointments: "2019/5/19/18/00",
    free_time: "2019/5/19/16/00"
  },


  go_to_teacher: function() {
    wx.navigateTo({
      url: '/pages/teacher/teacher',
    })
  },
  show_news: function() {
    wx.showToast({
      title: '这里显示已处理和未处理的消息',
      icon: 'none',
      duration: 2000
    })
  },
  // feedBack: function() {
  //   wx.navigateTo({
  //     url: '/pages/feedback/feedback',
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

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