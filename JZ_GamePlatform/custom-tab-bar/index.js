Component({
  data: {
    selected: 0,
    list: [
      {
        pagePath: "/pages/map/map",
        text: "主地图"
      },
      {
        pagePath: "/pages/taskWorld/taskWorld",
        text: "任务世界"
      },
      {
        pagePath: "/pages/workshop/workshop",
        text: "创制工坊"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "我的"
      }
    ]
  },

  methods: {
    onTap(e) {
      const index = e.currentTarget.dataset.index;
      const item = this.data.list[index];
      if (!item) return;

      wx.switchTab({
        url: item.pagePath
      });
      this.setData({ selected: index });
    },

    setSelectedByPath(path) {
      const list = this.data.list || [];
      const idx = list.findIndex(i => i.pagePath === path);
      if (idx !== -1 && idx !== this.data.selected) {
        this.setData({ selected: idx });
      }
    }
  }
});

