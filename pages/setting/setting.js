// setting.js
var app =getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_tap: 0,
    item_text: ['身份管理', '店铺管理', '意见反馈', '关于我们', '软件版本'],
    nickName: '',
    avatarUrl: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var _this = this
    app.getUserInfo(function(userInfo){
      _this.setData({
        nickName:userInfo.nickName,
        avatarUrl:userInfo.avatarUrl
      })
      console.log(userInfo)
      
    })
  

  },
  itemTap: function (e) {
    this.data.item_tap = e.target.dataset.idx;
    console.log(this.data.item_tap)
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