const zh_CN = {
  actions: {
    search: '搜索',
    export: '导出',
    open: '展开',
    close: '收起',
  },
  units: {
    minute: '分',
    day: '日',
  },
  filters: {
    date: '日期',
    today: '当天',
    twoDays: '两天',
    week: '一周',
    thisWeek: '本周',
    month: '一月',
    thisMonth: '本月',
    server: '服务器',
    platform: '平台',
    package: '包名',
    publisher: '发行商',
    region: '地区',
    paid: '付费',
    regularPlayer: '普通玩家',
    paidPlayer: '付费玩家',
    dimension: '维度',
    timeDimension: '时间维度',
    characteristicDimension: '特性维度',
    lostDays: '流失天数',
    retentionDays: '留存天数',

    channel: '渠道',
    operator: '运营商',
  },
  dimensions: {
    // 其他维度
    // 城市
    CITY: '城市',
    // 分辨率
    RESOLUTION: '分辨率',
    // 游戏Id
    GAME_ID: '游戏',
    // 包名
    PACKAGE_NAME: '包名',
    // 渠道
    CHANNEL: '渠道',
    // 区服id
    SERVER_ID: '服务器',
    // 是否充值用户
    RECHARGE_USER: '付费',
    // 产品ID
    PRODUCT_ID: '产品',
    // 操作系统
    OS: '平台',
    // 操作系统版本
    OS_VERSION: '系统版本',
    // 运营商
    OPERATOR: '运营商',
    // 发行商
    DISTRIBUTOR: '发行商',
    // 网络
    NETWORK: '网络',
    // 设备型号
    DEVICE_MODEL: '设备型号',
    // 等级
    LEVEL: '等级',
    // 商品
    PROP: '商品',
    // 货币类型
    CURRENCY: '货币类型',
    // 货币途径
    CURRENCY_SOURCE: '途径',
    // 时间维度
    // 分钟
    TIME_MINUTE: '1分',
    // 5分钟
    TIME_FIVE_MINUTE: '5分',
    // 10分钟
    TIME_TEN_MINUTE: '10分',
    // 15分钟
    TIME_FIFTEEN_MINUTE: '15分',
    // 30分钟
    TIME_THIRTY_MINUTE: '30分',
    // 小时
    TIME_HOUR: '时',
    // 日
    DATE_DAY: '日',
    // 周
    DATE_WEEK: '周',
    // 月
    DATE_MONTH: '月',
    // 区间
    RANGE: '区间',
  },
  routes: {
    analyze: '游戏数据分析',
    overview: '主页',
    newly: '新增分析',
    active: '活跃分析',
    distribution: '活跃分布',
    habit: '在线习惯',
    device: '设备分析',
    lost: '流失分析',
    lostUser: '洗失用户',
    returnedUser: '回流用户',
    retention: '留存分析',
    purchase: '付费分析',
    ltv: 'LTV',
    online: '在线分析',
    level: '等级分析',
    task: '任务分析',
    store: '付费分析',
    currency: '经济分析',
    report: '数据报表',
  },

  columns: {
    // 在线分析
    TimePerSession: '单次游戏时长（分钟）',
    TimePerUser: '每用户游戏时长（分钟）',
    TimesPerUser: '每用户游戏次数',
    TimePerSession: '单次游戏分钟数（人次）',
    TotalTime: '总游戏分钟数（人）',
    TotalTimes: '游戏次数（人）',

    // 付费排行
    PlayerId: '玩家ID',
    CharacterId: '角色ID',
    CharacterName: '角色名',
    TotalPayment: '总付费',
    PurchaseTimes: '购买次数',
    FirstPayTime: '首充时间',
    RecentlyPurchased: '最近购买',
    RecentlyLoggedIn: '最近登录',
    Channel: '渠道',
    ServerId: '服务器ID',

    // 付费分析
    PaidUser: '付费用户',
    PaidRate: '付费率',
    ARPU: 'ARPU',
    ARPPU: 'ARPPU',
    ACU: 'ACU',
    PCU: 'PCU',

    // 报表
    NewlyDevice: '新增设备',
    NewlyUser: '新增用户',
    NewlyRole: '新增角色',
    ActiveDevice: '活跃设备',
    ActiveUser: '活跃用户',
    LostUserIn7Days: '7日流失用户',
    ReturnedUserIn7Days: '7日回流用户',
    FirstPayRate: '新增付费占比',
    NewlyUserFirstPay: '新增用户首日付费数',
    NewlyUserPayTotal: '新增用户首日付费总额',
    FirstPay: '首次付费用户数',
    FirstPayTotal: '首次付费总额',
  },

  // 新增
  Newly: '新增',
  NewlyDevice: '新增设备',
  NewlyUser: '新增用户',
  NewlyUserConvert: '新增用户转化',
  NewlyDeviceConvert: '新增设备转化',
  NewlyTrend: '新增用户趋势',

  // 活跃
  ActiveDevice: '活跃设备',
  ActiveUser: '活跃用户',
  ActiveUserConvert: '活跃用户转化',
  ActiveTrend: '活跃用户趋势',

  // 分布
  ActiveUserDistribution: '活跃分布',
  OnlineDistribution: '在线分布',

  // 习惯
  OnlineHabit: '在线习惯',
  GameTimePerSession: '单次游戏时长',
  GameTimePerUser: '每用户游戏时长',
  GameTimesPerUser: '每用户游戏次数',

  // 流失
  LostUser: '洗失用户',
  ReturnedUser: '回流用户',

  // 留存
  Retention: '留存分析',
  RetentionRate: '留存率',

  LTV: 'LTV',

  // 在线
  OnlineUser: '在线人数',
  OnlineUserRate: '在线比',
  OnlineUserMax: '最大在线人数',
  // 用于首页
  AvgOnline: '平均在线数',
  MaxOnline: '最大在线数',

  // 等级
  NewlyUserLevel: '新增用户等级分布',
  ActiveUserLevel: '活跃用户等级分布',
  LostUserLevel: '流失用户等级',

  // 任务
  NewlyUserTask: '新增用户任务分析',
  ActiveUserTask: '活跃用户任务分析',
  LostUserTask: '流失用户任务分析',

  // 经济分析
  CurrenyIO: '产出/消耗',
  CurrenyProduce: '产出途径',
  CurrenyConsume: '消耗途径',
  CurrenyIOPerDay: '单日对比',
  CurrenyStorage: '货币存量',
  CurrencyProduceTotal: '产出总量',
  CurrenyConsumeTotal: '消耗总量',
  CurrenyIORate: '产出消耗比',

  // 付费
  PaidUserAnalyze: '付费分析',
  PaidUserRank: '付费排行',

  TotalPayment: '总付费',
  PaidUser: '付费用户',
  PaidRate: '付费率',
  NewlyUserFirstPay: '新增用户首日付费数',
  NewlyUserPayTotal: '新增用户首日付费总额',
  FirstPay: '首次付费用户数',
  FirstPayTotal: '首次付费总额',
  ARPU: 'ARPU',
  ARPPU: 'ARPPU',

  PaymentTrend: '付费用户趋势',
  PaymentMountTrend: '付费金额趋势',

  // 数据报告
  DataReport: '数据报表',
};

export default zh_CN;
