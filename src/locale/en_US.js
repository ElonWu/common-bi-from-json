const en_US = {
  actions: {
    search: 'Search',
    export: 'Export',
    open: 'Open',
    close: 'Collapse',
  },
  units: {
    minute: 'Min',
    day: 'Day',
  },
  filters: {
    date: 'Date',
    today: 'Today',
    twoDays: 'Two Days',
    week: 'One Week',
    thisWeek: 'This Week',
    month: 'One Month',
    thisMonth: 'This Month',
    server: 'Server',
    platform: 'Platform',
    package: 'Package Name',
    publisher: 'Publisher',
    region: 'Region',
    paid: 'Paid',
    regularPlayer: 'Regular Players',
    paidPlayer: 'Paid Player',
    dimension: 'Dimension',
    timeDimension: 'Time Dimension',
    characteristicDimension: 'Characteristic Dimension',
    lostDays: 'Days Lost',
    retentionDays: 'Retention Days',

    channel: 'Channel',
    operator: 'Service Provider',
  },
  dimensions: {
    // 其他维度
    // 城市
    CITY: 'City',
    // 分辨率
    RESOLUTION: 'Resolution',
    // 游戏Id
    GAME_ID: 'Game Name',
    // 包名
    PACKAGE_NAME: 'Package Name',
    // 渠道
    CHANNEL: 'Channel',
    // 区服id
    SERVER_ID: 'Server',
    // 是否充值用户
    RECHARGE_USER: 'Paid',
    // 产品ID
    PRODUCT_ID: 'Product',
    // 操作系统
    OS: 'Platform',
    // 操作系统版本
    OS_VERSION: 'System Version',
    // 运营商
    OPERATOR: 'Operator',
    // 发行商
    DISTRIBUTOR: 'Publisher',
    // 网络
    NETWORK: 'Network Type',
    // 设备型号
    DEVICE_MODEL: 'Device model',
    // 等级
    LEVEL: 'Level Type',
    // 商品
    PROP: 'Commodity',
    // 货币类型
    CURRENCY: 'Currency Type',
    // 货币途径
    CURRENCY_SOURCE: 'Source',
    // 时间维度
    // 分钟
    TIME_MINUTE: '1 minute',
    // 5分钟
    TIME_FIVE_MINUTE: '5 minutes',
    // 10分钟
    TIME_TEN_MINUTE: '10 minutes',
    // 15分钟
    TIME_FIFTEEN_MINUTE: '15 minutes',
    // 30分钟
    TIME_THIRTY_MINUTE: '30 minutes',
    // 小时
    TIME_HOUR: 'One hour',
    // 日
    DATE_DAY: 'One day',
    // 周
    DATE_WEEK: 'A week',
    // 月
    DATE_MONTH: 'A month',
    // 区间
    RANGE: 'Interval',
  },
  routes: {
    analyze: 'Game Data Analysis',
    overview: 'Home',
    newly: 'New User Analysis',
    active: 'Active Users Analysis',
    distribution: 'Active Users Distribution',
    habit: 'Online Habit',
    device: 'Device Analysis',
    lost: 'Loss Analysis',
    lostUser: 'Lost Users',
    returnedUser: 'Returned Users',
    retention: 'Retention Analysis',
    purchase: 'Payment Analysis',
    ltv: 'Ltv',
    online: 'Online User Analytics',
    level: 'Level Analysis',
    task: 'Task Analysis',
    store: '付费分析',
    currency: 'Game Ecomony Analysis',
    report: 'Data Reports',
  },

  columns: {
    TimePerSession: 'Minutes Played In A Single Session',
    TimePerUser: 'Minutes Played Per User',
    TimesPerUser: 'Number Of Games Per User',
    TimePerSession: 'Minutes Played In A Single Session Per User',
    TotalTime: 'Total Minutes Played Per User',
    TotalTimes: 'Number Of Games Played Per User',

    PlayerId: 'Player Id',
    CharacterId: 'Character Id',
    CharacterName: 'Character Name',
    TotalPayment: 'Total Payment',
    PurchaseTimes: 'Number Of Purchases',
    FirstPayTime: 'Time Of First Top-Up',
    RecentlyPurchased: 'Recently Purchased',
    RecentlyLoggedIn: 'Recently Logged In',
    Channel: 'Method',
    ServerId: 'Server Id',

    // 付费分析
    PaidUser: 'Paid Users',
    PaidRate: 'Percentage of Paid Users',
    ARPU: 'ARPU',
    ARPPU: 'ARPPU',
    ACU: 'ACU',
    PCU: 'PCU',

    // 报表
    NewlyDevice: 'New Devices',
    NewlyUser: 'New Users',
    NewlyRole: 'NewlyRole',
    ActiveDevice: 'Active Devices',
    ActiveUser: 'Active Users',
    LostUserIn7Days: 'Lost Users In 7 Days',
    ReturnedUserIn7Days: 'Returned Users In 7 Days',
    FirstPayRate: 'Percentage of Online Users',
    NewlyUserFirstPay: 'Number Of New Users Paying For The First Day',
    NewlyUserPayTotal: 'Total Payment Of New Users Paying For The First Day',
    FirstPay: 'Number Of Users Paying For The First Time',
    FirstPayTotal: 'Total Payment Of Users Paying For The First Time',
  },

  // 新增
  Newly: 'New',
  NewlyDevice: ' New Devices',
  NewlyUser: 'New Users',
  NewlyUserConvert: 'New User Conversions',
  NewlyDeviceConvert: 'New Device Conversions',
  NewlyTrend: 'New User Trend',

  // 活跃
  ActiveDevice: 'Active Devices',
  ActiveUser: 'Active Users',
  ActiveUserConvert: 'Active User Conversions',
  ActiveTrend: 'Active User Trend',

  // 分布
  ActiveUserDistribution: 'Active Users Distribution',
  OnlineDistribution: 'Online Distribution',

  // 习惯
  OnlineHabit: 'Online Habit',
  GameTimePerSession: 'Game Time Per Session',
  GameTimePerUser: 'Game Time Per User',
  GameTimesPerUser: 'Number Of Games Per User',

  // 流失
  LostUser: 'Lost Users',
  ReturnedUser: 'Returned Users',

  // 留存
  Retention: 'Retention Analysis',
  RetentionRate: '留存率',

  LTV: 'LTV',

  // 在线
  OnlineUser: 'Players Online',
  OnlineUserRate: 'Percentage of Online Users',
  OnlineUserMax: 'Maximum Number Of Online Users',
  // 用于首页
  AvgOnline: 'Average Number Of Players Online',
  MaxOnline: 'Max Number Of Players Online',

  // 等级
  NewlyUserLevel: 'Level Distribution Of New Users',
  ActiveUserLevel: 'Level Distribution Of Active Users',
  LostUserLevel: 'Level Distribution Of Lost Users',

  // 任务
  NewlyUserTask: 'Task Analysis Of New Users',
  ActiveUserTask: 'Task Analysis Of Active Users',
  LostUserTask: 'Task Analysis Of Lost Users',

  // 经济分析
  CurrenyIO: 'Output / Consumption',
  CurrenyProduce: 'Output Paths',
  CurrenyConsume: 'Consumption Path',
  CurrenyIOPerDay: 'Single Day Comparison',
  CurrenyStorage: 'Money Stock',
  CurrencyProduceTotal: 'Total Output',
  CurrenyConsumeTotal: 'Output/consumption Ratio',
  CurrenyIORate: 'Total Consumption',

  // 付费
  PaidUserAnalyze: 'Payment Analysis',
  PaidUserRank: 'Payment Ranking',

  TotalPayment: 'Total Payment',
  PaidUser: 'Paid Users',
  PaidRate: 'Percentage of Paid Users',
  NewlyUserFirstPay: 'Number Of New Users Paying For The First Day',
  NewlyUserPayTotal: 'Total Payment Of New Users Paying For The First Day',
  FirstPay: 'Number Of Users Paying For The First Time',
  FirstPayTotal: 'Total Payment Of Users Paying For The First Time',
  ARPU: 'ARPU',
  ARPPU: 'ARPPU',

  PaymentTrend: 'Paid Users Trend',
  PaymentMountTrend: 'Paid Amount Trend',

  // 数据报告
  DataReport: 'Data Reports',
};

export default en_US;
