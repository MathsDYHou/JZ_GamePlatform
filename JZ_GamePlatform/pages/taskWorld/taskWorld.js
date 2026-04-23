Page({
  data: {
    tabs: ["主线任务", "支线任务", "限时任务"],
    currentTab: 0,
    openedTask: -1,
    navHeight: 0,                // 导航栏总高度（状态栏+胶囊区域）
    titleTop: 0,                  // 标题距离顶部的偏移量（使标题中心与胶囊中心对齐）
    statusBarHeight: 0,
    taskData: [
      // ================= 主线任务 =================
      [
        {
          title: "科普一刻角",
          desc: "VR/AR体验与周末15分钟科学演示互动区。",
          reward: [
            "互动区体验：50铁道币",
            "参与科普演示：100铁道币",
            "分享实验视频：150铁道币"
          ],
          badge: "【科普小达人】徽章"
        }
      ],
      // ================= 支线任务 =================
      [
        {
          title: "京张书院月度系列",
          desc: "主题讲座与技能工坊课程体系。",
          reward: [
            "参与讲座/工坊：300铁道币",
            "完成全系列：500铁道币",
            "提交作业：150铁道币"
          ],
          badge: "【京张书院学员】徽章"
        },
        {
          title: "静阅空间 / 午间读书会",
          desc: "碎片化阅读分享与免费阅读空间。",
          reward: [
            "参与读书会：100铁道币",
            "累计5次：250铁道币",
            "阅读分享：150铁道币"
          ],
          badge: "【书香同行者】徽章"
        }
      ],
      // ================= 限时任务 =================
      [
        {
          title: "走读京张文化节",
          desc: "研学地图串联文化活动与市集。",
          reward: [
            "全程参与：1500铁道币",
            "展览打卡：300铁道币",
            "提交记录：200铁道币"
          ],
          badge: "【京张文化大使】"
        },
        {
          title: "社区体育嘉年华",
          desc: "运动赛事与文化展演融合活动。",
          reward: [
            "赛事报名：200铁道币",
            "完成3项赛事：1000铁道币",
            "提交反馈：150铁道币"
          ],
          badge: "【运动全能王】"
        },
        {
          title: "未来城市科技文化节",
          desc: "科创大赛与黑科技展。",
          reward: [
            "参与科创大赛：400铁道币",
            "全馆打卡：300铁道币",
            "体验报告：200铁道币"
          ],
          badge: "【未来创想家】"
        }
      ]
    ],
    openedMap: [],
    // 内容区域宽度（根据机型动态计算）
    contentWidth: 0
  },

  onLoad() {
    const systemInfo = wx.getSystemInfoSync();
    const menuButton = wx.getMenuButtonBoundingClientRect();

    // 导航栏总高度 = 胶囊底部 + (胶囊顶部 - 状态栏高度) 【标准公式】
    const navHeight = menuButton.bottom + (menuButton.top - systemInfo.statusBarHeight);

    // 计算胶囊中心位置（相对于屏幕顶部）
    const menuCenterY = (menuButton.top + menuButton.bottom) / 2;

    // 标题容器高度固定为 44px（与导航栏常用高度一致），使其中心与胶囊中心对齐
    const TITLE_HEIGHT = 44; // px
    const titleTop = menuCenterY - TITLE_HEIGHT / 2;

    // 以屏幕宽度为基础，左右各预留 16px 作为安全留白
    const SIDE_MARGIN = 16; // px
    const contentWidth = systemInfo.windowWidth - SIDE_MARGIN * 2;

    const openedMap = this.data.taskData.map(list => list.map(() => false));

    this.setData({
      navHeight,
      titleTop,
      statusBarHeight: systemInfo.statusBarHeight,
      openedMap,
      contentWidth
    });
  },

  onShow() {
    if (this.getTabBar && this.getTabBar()) {
      this.getTabBar().setSelectedByPath("/pages/taskWorld/taskWorld");
    }
  },

  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index
    });
  },

  toggleTask(e) {
    const index = e.currentTarget.dataset.index;
    const { currentTab, openedMap } = this.data;
    const currentList = openedMap[currentTab] || [];

    currentList[index] = !currentList[index];
    openedMap[currentTab] = currentList;

    this.setData({ openedMap });
  }
});