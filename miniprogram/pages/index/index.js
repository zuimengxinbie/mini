import util from '../../utils/util';
const app = getApp()
Page({

  data: {
    openid: '',
    animation: null,
    flag: true,
    entercolor: '',
    elements: [{
        title: '个人简介',
        name: 'intro',
        color: 'cyan',
        icon: 'gerenjianjieicon'
      },
      {
        title: '工作经历',
        name: 'company',
        color: 'blue',
        icon: 'gongzuojingyan1'
      },
      {
        title: '项目经验',
        name: 'project-list',
        color: 'purple',
        icon: 'xiangmujingyan1'
      },
      {
        title: '职业技能 ',
        name: 'skill',
        color: 'mauve',
        icon: 'jinengzu'
      }
    ]


  },
  nextpage(event) {
    const flag = event.currentTarget.dataset.flag
    const {
      entercolor
    } = this.data;
    if (flag === "true") {
      entercolor === 'entercolor'
    }
    this.opacityAnimate()


  },
  handletouchmove: function (A) {
    A.touches[0].pageX;
    this.opacityAnimate();
  },
  opacityAnimate: function (event) {
    let {
      animation
    } = this.data;
    animation = wx.createAnimation({
      duration: 1500,
      timingFunction: "ease-in-out",
      delay: 0,
      transformOrigin: "50% 50% 0%"
    })
    animation.translate(0, -1300).step(),
      this.setData({
        animationData: animation.export()
      });
  },
  onHide: function () {},

  //转发事件
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  },
  onShow() {
    this.getOpenid();
  },

  // 获取用户openid
  getOpenid() {
    let that = this;
    //调用本地云函数
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        var openid = res.result.openid;
        that.setData({
          openid: openid
        });
        //将openid存入缓存
        wx.setStorageSync('openid', this.data.openid);
        that.onQuery();
      }
    })
  },
  onQuery: function () {
    const db = wx.cloud.database(); //获取数据库的引用
    db.collection('user').where({ //获取数据库集合引用（表）
      _openid: this.data.openid
    }).get({
      success: res => {
        if (res.data.length > 0) {
          wx.setStorageSync('isLogin', true); //更改登录状态，缓存到本地
          wx.setStorageSync('openid', this.data.openid);
        } else {
          wx.setStorageSync('isLogin', false);
        }
      },
      fail: err => {
        wx.setStorageSync('isLogin', false);
      }
    })
  },

  toPage(e) {
    let isLogin = wx.getStorageSync('isLogin');
    let url = e.currentTarget.dataset.url;
    if (!isLogin) {
      this.getOpenid();
      url = "../login/login" //跳转到登录界面
    }
    wx.navigateTo({
      url: url,
    })
  },
  toUserList() {
    wx.navigateTo({
      url: "../user-list/user-list",
    })
  }

});