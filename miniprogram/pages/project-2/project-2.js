const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'https://staticqn.qizuang.com/custom/20220606/FpuryYjOja-_46SzA2m2bRzU8qus',
        'https://staticqn.qizuang.com/custom/20220606/FpPFf-7ZtuZosY5CnYbqa6l6TCrX'
      ],
      descriptionList: [
        '一、部分页面展示'
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