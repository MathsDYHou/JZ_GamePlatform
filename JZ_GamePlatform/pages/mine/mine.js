Page({
  data: {
    navHeight: 0,
    titleTop: 0,
    statusBarHeight: 0,
    // 内容区域宽度（根据机型动态计算）
    contentWidth: 0
  },

  onLoad() {
    const systemInfo = wx.getSystemInfoSync();
    const menuButton = wx.getMenuButtonBoundingClientRect();

    const navHeight = menuButton.bottom + (menuButton.top - systemInfo.statusBarHeight);
    const menuCenterY = (menuButton.top + menuButton.bottom) / 2;
    const TITLE_HEIGHT = 44;
    const titleTop = menuCenterY - TITLE_HEIGHT / 2;

    // 以屏幕宽度为基础，左右各预留 16px 作为安全留白
    const SIDE_MARGIN = 16; // px
    const contentWidth = systemInfo.windowWidth - SIDE_MARGIN * 2;

    this.setData({
      navHeight,
      titleTop,
      statusBarHeight: systemInfo.statusBarHeight,
      contentWidth
    });
  },

  onShow() {
    if (this.getTabBar && this.getTabBar()) {
      this.getTabBar().setSelectedByPath("/pages/mine/mine");
    }
  },

  goMyTask() {
    wx.switchTab({
      url: "/pages/taskWorld/taskWorld"
    });
  },

  goMall() {
    wx.navigateTo({
      url: "/pages/mall/mall"
    });
  },

  goMark() {
    wx.showToast({
      title: "铁道印记 · 敬请期待",
      icon: "none"
    });
  },

  goProjects() {
    wx.showToast({
      title: "我的创制项目 · 敬请期待",
      icon: "none"
    });
  }
});

