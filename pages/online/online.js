// pages/online/online.js

//触屏开始点坐标（滑动事件）
var startDot = {
  X: 0,
  Y: 0
};
//触屏到点坐标
var touchDot = {
  X: 0,
  Y: 0
};
var time = 0; //触屏时间
var number; //定时器ID





// 触摸开始时间（单击，双击，长按事件）
touchStartTime: 0;
// 触摸结束时间
touchEndTime: 0;
// 最后一次单击事件点击发生时间
lastTapTime: 0;
// 单击事件点击后要触发的函数
lastTapTimeoutFunc: null;
Page({


  /// 按钮触摸开始触发的事件
  touchStart: function(e) {
    this.touchStartTime = e.timeStamp
  },

  /// 按钮触摸结束触发的事件
  touchEnd: function(e) {
    this.touchEndTime = e.timeStamp
  },


  /// 长按
  longTap: function(e) {
    console.log("long tap")
    wx.showModal({
      title: '提示',
      content: '修改教师信息',
      showCancel: false
    })
  },

  /// 单击、双击
  multipleTap: function(e) {
    var that = this
    // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
    if (that.touchEndTime - that.touchStartTime < 350) {
      // 当前点击的时间
      var currentTime = e.timeStamp
      var lastTapTime = that.lastTapTime
      // 更新最后一次点击时间
      that.lastTapTime = currentTime

      // 如果两次点击时间在300毫秒内，则认为是双击事件
      if (currentTime - lastTapTime < 300) {
        console.log("double tap")
        // 成功触发双击事件时，取消单击事件的执行
        clearTimeout(that.lastTapTimeoutFunc);
        wx.navigateTo({
          url: '/pages/private/private',
        })
        // wx.showModal({
        //   title: '提示',
        //   content: '双击事件被触发',
        //   showCancel: false
        // })
      } else {
        // 单击事件延时300毫秒执行，这和最初的浏览器的点击300ms延时有点像。
        that.lastTapTimeoutFunc = setTimeout(function() {
          wx.navigateTo({
            url: '/pages/teacher_msg/teacher_msg',
          })
          // console.log("tap")
          // wx.showModal({
          //   title: '提示',
          //   content: '单击事件被触发',
          //   showCancel: false
          // })
        }, 300);
      }
    }
  },


  /**
   * 触屏开始计时和获取坐标(滑动事件)
   */
  _touchStart: function(event) {
    startDot.X = event.touches[0].pageX;
    startDot.Y = event.touches[0].pageY;
    number = setInterval(function() {
      time++;
    }, 100);
  },
  /**
   * 判断滑动距离和时间是否需要切换页面
   */
  _touchMove: function(event) {
    touchDot.X = event.touches[0].pageX;
    touchDot.Y = event.touches[0].pageY;
    //向左滑处理
    if ((startDot.X - touchDot.X) > 150 && (startDot.Y - touchDot.Y) < 150 && time < 5 && time > 0.1) {
      // wx.switchTab({
      //   url: '../next/next'
      // });
      wx.navigateTo({
        url: '/pages/online_question_no/online_question_no',
      })
      clearInterval(number);
      time = 0;
    }
    //向右滑处理
    if ((touchDot.X - startDot.X) > 150 && (touchDot.Y - startDot.Y) < 150 && time < 5 && time > 0.1) {
      // wx.switchTab({
      //   url: '../next/next'
      // });
      wx.navigateTo({
        url: '/pages/online_question_yes/online_question_yes',
      })
      clearInterval(number);
      time = 0;
    }
  },
  /**
   * 结束触屏重置计时
   */
  _touchEnd: function(event) {
    clearInterval(number);
    time = 0;
  },


  go_to_teacher: function () {
    wx.navigateTo({
      url: '/pages/teacher/teacher',
    })
  },
  show_news: function () {
    wx.showToast({
      title: '这里显示已处理和未处理的消息',
      icon: 'none',
      duration: 2000
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    showIndex: 0,
    teacher_name: "王老师",
    teacher_skill: "高数B1",
    msg_items: "8",
    stu_name: "张渊",
    order_time: "2019/5/12",
    question: "泰勒公式",
    question_detail: "泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式泰勒公式"
  },



  /**
   * 折叠面板
   */
  panel: function(e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: 0
      })
    }
  },
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