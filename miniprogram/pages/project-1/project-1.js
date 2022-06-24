const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'https://staticqn.qizuang.com/custom/20220606/Fo3rCfNbptmQXsVNfvUsRITeh6Ze',
        'https://staticqn.qizuang.com/custom/20220606/Fr0tQFX-_fplt-c1BF7vHynitLAs',
        'https://staticqn.qizuang.com/custom/20220606/FgrRk-68tp17gA-M8KVHRfyYzpGw',
        'https://staticqn.qizuang.com/custom/20220606/FlyPvOPZ59rPn2ce7v9OUsr8X-7B'
      ],
      descriptionList: [
        '一、部分页面展示',
      ]
    }]
  },
  clickImg(event) {
    console.log('event', event);
    const imageUrl = event.currentTarget.dataset.url

    wx.previewImage({
      current: imageUrl,
      urls: [imageUrl]
    })
  },
  onUnload: function () {},
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }
});