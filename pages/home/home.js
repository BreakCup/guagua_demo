// home.js

var order_handle = []
var order_appoi = []


Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['处理中', '预约'],
    currentTab: 0,
    order_handle_list: [],
    order_appoi_list: [],

    inputShowed: false,
    inputVal: ""
  },



  
  showInput: function () {
      this.setData({
          inputShowed: true
       });
   },
   hideInput: function () {
       this.setData({
            inputVal: "",
            inputShowed: false
        });
   },
  clearInput: function () {
       this.setData({
           inputVal: ""
      });
   },
   inputTyping: function (e) {
       this.setData({
           inputVal: e.detail.value
       });
   },


  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx

    })

  },
  orderLongTap: function (e) {
    var _this = this
    console.log(e)
    wx.showModal({
      title: '提示',
      content: '确定删除该订单吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          order_handle.splice(e.target.dataset.place, 1)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
        _this.setData({
          order_handle_list: order_handle
        })
      }
    })
  },

  addTap: function (e) {
    console.log(e)
    if (this.data.currentTab == 0) {
      order_handle.push("new")
    }
    else {
      order_appoi.push("new")
    }
    this.setData({
      order_handle_list: order_handle,
      order_appoi_list: order_appoi
    })
  },

  Upper:function(e){
   console.log("上拉")
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  
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