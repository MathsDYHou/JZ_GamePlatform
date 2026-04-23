Page({
  data: {
    navHeight: 0,
    titleTop: 0,
    statusBarHeight: 0,
    modules: [
      {
        key: "apply",
        title: "活动申请",
        desc: "提交活动策划与需求，等待空间方审核与反馈。",
        short: "申",
        iconClass: "icon-apply"
      },
      {
        key: "official",
        title: "官方委托",
        desc: "查看来自运营方的主题活动与共创任务。",
        short: "委",
        iconClass: "icon-official"
      },
      {
        key: "venue",
        title: "场地预约",
        desc: "选择时间与空间，完成城市公共空间的预约。",
        short: "场",
        iconClass: "icon-venue"
      },
      {
        key: "settlement",
        title: "收益结算",
        desc: "活动结束后，对费用与收益进行在线结算。",
        short: "结",
        iconClass: "icon-settlement"
      }
    ]
  },

  onLoad() {
    const systemInfo = wx.getSystemInfoSync();
    const menuButton = wx.getMenuButtonBoundingClientRect();

    const navHeight = menuButton.bottom + (menuButton.top - systemInfo.statusBarHeight);
    const menuCenterY = (menuButton.top + menuButton.bottom) / 2;
    const TITLE_HEIGHT = 44;
    const titleTop = menuCenterY - TITLE_HEIGHT / 2;

    this.setData({
      navHeight,
      titleTop,
      statusBarHeight: systemInfo.statusBarHeight
    });
  },

  onShow() {
    if (this.getTabBar && this.getTabBar()) {
      this.getTabBar().setSelectedByPath("/pages/workshop/workshop");
    }
  },

  goModule(e) {
    const key = e.currentTarget.dataset.key;
    if (key === "apply") {
      wx.navigateTo({
        url: "/pages/apply/apply"
      });
    }
  }
});

