// pages/offline/offline.js

//点击，双击，长按的实现
// 触摸开始时间
touchStartTime: 0;
// 触摸结束时间
touchEndTime: 0;
// 最后一次单击事件点击发生时间
lastTapTime: 0;
// 单击事件点击后要触发的函数
lastTapTimeoutFunc: null;


//获取当前日期
var timestamp = Date.parse(new Date());
var date = new Date(timestamp);
//获取年份  
var Y = date.getFullYear();
var YY = date.getFullYear();
var YYY = date.getFullYear();
//获取月份  
var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
var MMM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
//获取当日日期 
var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//获取明天日期
var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//获取后天日期
var DDD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//判断是不是闰年的二月份
if (Y % 4 == 0 && M == 2) {
  if (D == 28) {
    DD = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1;
    DDD = 1;
    console.log("1")

  } else if (D == 29) {
    DD = 1;
    DDD = 2;
    console.log("2")

  } else {
    DD = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1;
    DDD = (date.getDate() + 2) < 10 ? '0' + (date.getDate() + 2) : date.getDate() + 2;
    console.log("3")

  }
} else if (Y % 4 != 0 && M == 2) {
  if (D == 27) {
    DD = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1;
    DDD = 1;
    console.log("4")

  } else if (D == 28) {
    DD = 1;
    DDD = 2;
    console.log("5")

  } else {
    DD = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1;
    DDD = (date.getDate() + 2) < 10 ? '0' + (date.getDate() + 2) : date.getDate() + 2;
    console.log("6")

  }
} else if (M == 1 || M == 3 || M == 5 || M == 7 || M == 8 || M == 10 || M == 12) {
  if (D == 30) {
    DD = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1;
    DDD = 1;
    console.log("7")

  } else if (D == 31) {
    DD = 1;
    DDD = 2;
    console.log("8")

  } else {
    DD = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1;
    DDD = (date.getDate() + 2) < 10 ? '0' + (date.getDate() + 2) : date.getDate() + 2;
    console.log("9")

  }
} else if (M == 2 || M == 4 || M == 6 || M == 9 || M == 11) {
  if (D == 29) {
    DD = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1;
    DDD = 1;
    console.log("10")

  } else if (D == 30) {
    DD = 1;
    DDD = 2;
    console.log("11")

  } else {
    DD = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1;
    DDD = (date.getDate() + 2) < 10 ? '0' + (date.getDate() + 2) : date.getDate() + 2;
    console.log("12" + D + DD + DDD)

  }
} else {
  DD = (date.getDate() + 1) < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1;
  DDD = (date.getDate() + 2) < 10 ? '0' + (date.getDate() + 2) : date.getDate() + 2;
  console.log("13")

}
if(DD<D){
  MM = (date.getMonth() + 2) < 10 ? '0' + (date.getMonth() + 2) : date.getMonth() + 2;
  MMM = (date.getMonth() + 2) < 10 ? '0' + (date.getMonth() + 2) : date.getMonth() + 2;
  console.log("14")
}
else if(DDD<DD){
  MMM = (date.getMonth() + 2) < 10 ? '0' + (date.getMonth() + 2) : date.getMonth() + 2;
}
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
      content: '修改教师信息' + M,
      showCancel: false
    })
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
   * 页面的初始数据
   * todo-优化
   */
  data: {
    teacher_name: "王老师",
    teacher_skill: "高数",
    date_1: Y + "-" + M + "-" + D,
    date_2: Y + "-" + MM + "-" + DD,
    date_3: Y + "-" + MMM + "-" + DDD,
    time_1: "12:01",
    time_2: "12:01",
    time_3: "12:01",
    time_4: "12:01",
    time_5: "12:01",
    time_6: "12:01",
    time_11: "12:01",
    time_22: "12:01",
    time_33: "12:01",
    time_44: "12:01",
    time_55: "12:01",
    time_66: "12:01",
    time_111: "12:01",
    time_222: "12:01",
    time_333: "12:01",
    time_444: "12:01",
    time_555: "12:01",
    time_666: "12:01",
  },


  //picker
  // bindDateChange(e) {
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   var flag = e.currentTarget.dataset.flag
  //   if (flag == 1) {
  //     this.setData({
  //       date_1: e.detail.value
  //     })
  //   }
  //   else if (flag == 2) {
  //     this.setData({
  //       date_2: e.detail.value
  //     })
  //   }
  //   else if (flag == 3) {
  //     this.setData({
  //       date_3: e.detail.value
  //     })
  //   }
  // },
  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var flag = e.currentTarget.dataset.flag
    if (flag == 1) {
      this.setData({
        time_1: e.detail.value
      })
    } else if (flag == 2) {
      this.setData({
        time_2: e.detail.value
      })
    } else if (flag == 3) {
      this.setData({
        time_3: e.detail.value
      })
    } else if (flag == 4) {
      this.setData({
        time_4: e.detail.value
      })
    } else if (flag == 5) {
      this.setData({
        time_5: e.detail.value
      })
    } else if (flag == 6) {
      this.setData({
        time_6: e.detail.value
      })
    } else if (flag == 11) {
      this.setData({
        time_11: e.detail.value
      })
    } else if (flag == 22) {
      this.setData({
        time_22: e.detail.value
      })
    } else if (flag == 33) {
      this.setData({
        time_33: e.detail.value
      })
    } else if (flag == 44) {
      this.setData({
        time_44: e.detail.value
      })
    } else if (flag == 55) {
      this.setData({
        time_55: e.detail.value
      })
    } else if (flag == 66) {
      this.setData({
        time_66: e.detail.value
      })
    } else if (flag == 111) {
      this.setData({
        time_111: e.detail.value
      })
    } else if (flag == 222) {
      this.setData({
        time_222: e.detail.value
      })
    } else if (flag == 333) {
      this.setData({
        time_333: e.detail.value
      })
    } else if (flag == 444) {
      this.setData({
        time_444: e.detail.value
      })
    } else if (flag == 555) {
      this.setData({
        time_555: e.detail.value
      })
    } else if (flag == 666) {
      this.setData({
        time_666: e.detail.value
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