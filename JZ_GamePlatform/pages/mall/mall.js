Page({
  data: {
    navHeight: 0,
    titleTop: 0,
    statusBarHeight: 0,
    // 内容区域宽度（根据机型动态计算，避免紧贴两侧）
    contentWidth: 0,
    coins: 2480,
    physicalGoods: [
      {
        id: "p1",
        name: "京张铁路主题明信片套装",
        iconType: "icon-postcard",
        icon: "/Picture/1.png",
        desc:
          "内含 8 张插画明信片，分别呈现京张铁路沿线经典车站与工业遗存场景，采用高克重艺术纸张，可书写寄送亦可装框收藏。",
        cost: 200,
        rule:
          "每人每月限兑 2 套；兑换成功后请前往园区「能量驿站」出示小程序记录线下领取，逾期未领视为自动放弃。"
      },
      {
        id: "p2",
        name: "铁道印记主题徽章盲盒",
        iconType: "icon-badge",
        icon: "/Picture/2.png",
        desc:
          "随机获得 1 枚铁路主题搪瓷徽章，包含「轨枕」「信号灯」「绿皮车厢」等多款设计，支持别在背包、衣帽或挂绳上。",
        cost: 500,
        rule:
          "每人每月限兑 3 个；盲盒款式随机，不支持指定与退换；请于园区线下指定点位抽取实物。"
      },
      {
        id: "p3",
        name: "京张铁路 1909 主题帆布包",
        iconType: "icon-bag",
        icon: "/Picture/3.png",
        desc:
          "以 1909 年京张铁路开通为灵感，正面印有老车票与铁轨纹样，厚磅帆布材质，支持 A4 文件与 13 寸笔记本日常通勤使用。",
        cost: 800,
        rule:
          "每人每月限兑 1 个；因为为限量联名款，兑换后不支持无理由退换，请在领取时当场检查完好。"
      },
      {
        id: "p4",
        name: "轨轨猫搪瓷马克杯",
        iconType: "icon-mug",
        icon: "/Picture/4.png",
        desc:
          "以 IP 角色「轨轨」为主视觉的搪瓷杯，杯身带有简化铁轨纹样，可用于日常饮水或作为办公桌摆件。",
        cost: 420,
        rule:
          "每人每月限兑 2 个；适用于常温 / 温热饮品，建议手洗保养，避免钢丝球等硬物刮擦图案。"
      },
      {
        id: "p5",
        name: "车厢工作室帆布票夹",
        iconType: "icon-ticket",
        icon: "/Picture/5.png",
        desc:
          "小尺寸帆布票夹，可收纳地铁票、校园卡与名片，内衬印有车厢工作室平面示意图，是铁路迷的日常随身小物。",
        cost: 260,
        rule:
          "每人不限总次数，但单次最多可兑 3 个；请前往「车厢工作室」周边柜台凭记录领取。"
      }
    ],
    coupons: [
      {
        id: "c1",
        name: "打车平台 15 元出行券",
        iconType: "icon-cab",
        icon: "/Picture/6.png",
        desc:
          "适用于合作打车平台的网约车服务，单笔订单实付满 30 元可用，限京张铁路遗址公园周边指定范围内上下车。",
        cost: 300,
        rule:
          "每人每月限兑 3 张；兑换后生成专属兑换码，请在对应打车平台「优惠券 / 兑换码」入口输入；自兑换起 7 日内有效。",
        code: ""
      },
      {
        id: "c2",
        name: "美团外卖 20 元满减券",
        iconType: "icon-food",
        icon: "/Picture/7.png",
        desc:
          "美团外卖通用满减券，单笔订单商品金额满 60 元即可抵扣 20 元，可与部分店铺满减叠加，具体以平台规则为准。",
        cost: 400,
        rule:
          "每人每月限兑 2 张；兑换后会展示一组兑换码，请在美团 App 内兑换；券码一经兑换不可退回铁道币。",
        code: ""
      },
      {
        id: "c3",
        name: "本地咖啡店买一送一券",
        iconType: "icon-coffee",
        icon: "/Picture/8.png",
        desc:
          "园区周边指定咖啡店参与活动，在店内点购指定饮品，即可享受同规格「买一送一」，第二杯可指定给同伴。",
        cost: 250,
        rule:
          "每人每月限兑 3 张；仅限堂食或自提使用，不支持外卖平台核销；具体参与门店以线下公示为准。",
        code: ""
      },
      {
        id: "c4",
        name: "园区文创市集摊位抵扣券 50 元",
        iconType: "icon-market",
        icon: "/Picture/9.png",
        desc:
          "可在园区指定文创市集摊位直接抵扣 50 元消费金额，适用于原创周边、手作、艺术印刷品等非餐饮类商品。",
        cost: 650,
        rule:
          "每人每月限兑 1 张；单笔订单实付金额需满 150 元可用，不找零、不兑现；请在结账前出示兑换码由摊主核销。",
        code: ""
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

  onRedeem(e) {
    const { id, type } = e.currentTarget.dataset;
    const coins = this.data.coins;
    let listKey = type === "physical" ? "physicalGoods" : "coupons";
    let list = this.data[listKey];
    const index = list.findIndex((item) => item.id === id);
    if (index === -1) return;
    const item = list[index];

    if (coins < item.cost) {
      wx.showToast({
        title: "铁道币不足",
        icon: "none"
      });
      return;
    }

    wx.showModal({
      title: "确认兑换",
      content: `确定消耗 ${item.cost} 铁道币兑换「${item.name}」吗？`,
      confirmText: "兑换",
      success: (res) => {
        if (!res.confirm) return;

        let newCoins = coins - item.cost;

        if (type === "coupon") {
          // 简单生成一个模拟兑换码
          const code =
            (item.code && item.code) ||
            `TDB-${Date.now().toString().slice(-6)}`;
          list[index].code = code;
        }

        this.setData({
          coins: newCoins,
          [listKey]: list
        });

        wx.showToast({
          title: "兑换成功",
          icon: "success"
        });
      }
    });
  },

  onShowDetail(e) {
    const { id, type } = e.currentTarget.dataset;
    const listKey = type === "physical" ? "physicalGoods" : "coupons";
    const list = this.data[listKey] || [];
    const item = list.find((it) => it.id === id);
    if (!item) return;

    const lines = [];
    if (item.desc) lines.push(item.desc);
    if (item.rule) lines.push(item.rule);
    if (type === "coupon" && item.code) {
      lines.push(`当前兑换码：${item.code}`);
    }

    wx.showModal({
      title: item.name,
      content: lines.join("\n\n") || "暂无详细说明",
      showCancel: false
    });
  }
});

