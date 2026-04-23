Page({
  data: {
    navHeight: 0,
    titleTop: 0,
    statusBarHeight: 0,
    // 图片缩放比例（双指缩放或按钮缩放）
    scale: 1,
    // 内容区域宽度（根据机型动态计算）
    contentWidth: 0,
    // 左侧工具栏当前选中项
    activeTool: "activity",

    // 活动弹窗
    showEventPopup: false,
    eventDetailExpanded: false
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
      this.getTabBar().setSelectedByPath("/pages/map/map");
    }
  },

  // ===== 双指缩放逻辑 =====
  onTouchStart(e) {
    if (e.touches.length === 2) {
      const distance = this._getDistance(e.touches[0], e.touches[1]);
      this.startDistance = distance;
      this.startScale = this.data.scale || 1;
    }
  },

  onTouchMove(e) {
    if (e.touches.length === 2 && this.startDistance) {
      const distance = this._getDistance(e.touches[0], e.touches[1]);
      if (!distance) return;

      let scale = (distance / this.startDistance) * (this.startScale || 1);
      // 限制缩放范围
      if (scale < 1) scale = 1;
      if (scale > 3) scale = 3;

      this.setData({ scale });
    }
  },

  onTouchEnd() {
    // 手指离开后，如果不足两指，则结束本次缩放
    this.startDistance = 0;
    this.startScale = this.data.scale || 1;
  },

  _getDistance(p1, p2) {
    const dx = p1.pageX - p2.pageX;
    const dy = p1.pageY - p2.pageY;
    return Math.sqrt(dx * dx + dy * dy);
  },

  // 左侧工具栏选中效果（仅视觉高亮，不触发业务逻辑）
  onSelectTool(e) {
    const { type } = e.currentTarget.dataset;
    if (!type) return;
    this.setData({
      activeTool: type
    });
  },

  // ===== 活动弹窗 =====
  openEventPopup() {
    this.setData({
      showEventPopup: true
    });
  },

  closeEventPopup() {
    this.setData({
      showEventPopup: false,
      eventDetailExpanded: false
    });
  },

  toggleEventDetail() {
    this.setData({
      eventDetailExpanded: !this.data.eventDetailExpanded
    });
  },

  onJoinNow() {
    wx.showToast({
      title: "已提交参与意向",
      icon: "success"
    });
  },

  noop() {}
});

