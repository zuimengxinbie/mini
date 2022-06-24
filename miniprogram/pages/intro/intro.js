// pages/intro/intro.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
  },

  /**
   * Lifecycle function--Called when page load
   */
  showQrcode: function () {
    wx.previewImage({
      current: 'https://staticqn.qizuang.com/custom/20220624/FgTBsG7fySZ4PlLngnJl-M9pmP33',
      urls: ['https://staticqn.qizuang.com/custom/20220624/FgTBsG7fySZ4PlLngnJl-M9pmP33']
    })
  },
  //电话拨打
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '18135515998',
      fail() {
        wx.showToast({
          title: '拨打失败',
          duration: 2000
        })
      }
    })
  },
  //保存通讯录
  saveContact: function () {
    wx.addPhoneContact({
      firstName: '琦',
      lastName: '陈',
      remark: '程序猿丫',
      mobilePhoneNumber: '18135515998',
      weChatNumber: 'cq74747474',
      success() {},
      fail() {
        wx.showToast({
          title: '保存失败',
          duration: 2000
        })
      }
    })
  },
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }
})