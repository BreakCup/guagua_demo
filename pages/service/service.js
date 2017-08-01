// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    group:{
      group_name:['服务组1','服务组2','服务组3','服务组4'],
      group_list:['list1','list2']},
    currentTab:0,
    isPopping:false,
    animPlus:{}
  
  },
  plusTap:function(e){
    //弹出菜单
    if (this.data.isPopping) {
      this.popp();  
      this.setData({  
        isPopping: false  
      })

    }
    //收回菜单
    else{
      this.takeback();  
      this.setData({  
        isPopping: true  
      })  

    }

  },
   //弹出动画  
    popp: function () {  
        //plus顺时针旋转  
        var animationPlus = wx.createAnimation({  
            duration: 500,  
            timingFunction: 'ease-out'  
        })  
        var animationcollect = wx.createAnimation({  
            duration: 500,  
            timingFunction: 'ease-out'  
        })  
        var animationTranspond = wx.createAnimation({  
            duration: 500,  
            timingFunction: 'ease-out'  
        })  
        var animationInput = wx.createAnimation({  
            duration: 500,  
            timingFunction: 'ease-out'  
        })  
        animationPlus.rotateZ(180).step();  
        animationcollect.translate(-100, -100).rotateZ(180).opacity(1).step();  
        animationTranspond.translate(-140, 0).rotateZ(180).opacity(1).step();  
        animationInput.translate(-100, 100).rotateZ(180).opacity(1).step();  
        this.setData({  
            animPlus: animationPlus.export(),  
            /*animCollect: animationcollect.export(),  
            animTranspond: animationTranspond.export(),  
            animInput: animationInput.export(),  */
        })  
    },  
    //收回动画  
    takeback: function () {  
        //plus逆时针旋转  
        var animationPlus = wx.createAnimation({  
            duration: 500,  
            timingFunction: 'ease-out'  
        })  
        var animationcollect = wx.createAnimation({  
            duration: 500,  
            timingFunction: 'ease-out'  
        })  
        var animationTranspond = wx.createAnimation({  
            duration: 500,  
            timingFunction: 'ease-out'  
        })  
        var animationInput = wx.createAnimation({  
            duration: 500,  
            timingFunction: 'ease-out'  
        })  
        animationPlus.rotateZ(0).step();  
        animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();  
        animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();  
        animationInput.translate(0, 0).rotateZ(0).opacity(0).step();  
        this.setData({  
            animPlus: animationPlus.export(),  
           /* animCollect: animationcollect.export(),  
            animTranspond: animationTranspond.export(),  
            animInput: animationInput.export(),  */
        })  
    },  
  
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx

    })

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