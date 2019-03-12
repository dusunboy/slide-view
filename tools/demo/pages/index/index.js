Page({
  data: {
    isCloseSlide: false,
  },
  //关闭右侧滑
  closeSlide() {
    this.setData({
      isCloseSlide: true
    })
   }
})
