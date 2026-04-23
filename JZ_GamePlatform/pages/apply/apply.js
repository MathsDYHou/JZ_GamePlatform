Page({
  data: {
    navHeight: 0,
    titleTop: 0,
    statusBarHeight: 0,
    // 内容区域宽度（根据机型动态计算）
    contentWidth: 0,
    applicantTypeOptions: [
      "个人创作者",
      "高校社团",
      "社群主理人",
      "独立设计师",
      "品牌方",
      "专业机构",
      "其他"
    ],
    applicantTypeIndex: -1,
    activityTypeOptions: [
      "展览展示",
      "工作坊",
      "市集",
      "演出",
      "分享会",
      "研学课程",
      "体育赛事",
      "快闪活动",
      "艺术装置",
      "其他"
    ],
    activityTypeIndex: -1,
    activityThemeOptions: [
      "京张历史文化",
      "生态环保",
      "科创交流",
      "社区生活",
      "亲子家庭",
      "艺文创作",
      "其他"
    ],
    activityThemeIndex: -1,
    activityLevelOptions: [
      "日常主线活动（公益 / 低门槛）",
      "支线主题活动（周期性 / 商业）",
      "赛季级大型活动（年度 / IP 级）"
    ],
    activityLevelIndex: -1,
    chargeOptions: ["免费", "公益随喜", "收费"],
    chargeIndex: -1,
    coopModeOptions: [
      "公益支持",
      "小额补贴",
      "场地租赁",
      "营收分成",
      "单独议价",
      "其他"
    ],
    coopModeIndex: -1
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

  goBack() {
    wx.navigateBack({
      delta: 1
    });
  },

  onApplicantTypeChange(e) {
    this.setData({
      applicantTypeIndex: e.detail.value
    });
  },

  onActivityTypeChange(e) {
    this.setData({
      activityTypeIndex: e.detail.value
    });
  },

  onActivityThemeChange(e) {
    this.setData({
      activityThemeIndex: e.detail.value
    });
  },

  onActivityLevelChange(e) {
    this.setData({
      activityLevelIndex: e.detail.value
    });
  },

  onChargeChange(e) {
    this.setData({
      chargeIndex: e.detail.value
    });
  },

  onCoopModeChange(e) {
    this.setData({
      coopModeIndex: e.detail.value
    });
  }
});

