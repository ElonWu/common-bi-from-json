const ja_JP = {
  actions: {
    search: '検索',
    export: '出力',
    open: '展開',
    close: '収束',
  },
  units: {
    minute: 'Min',
    day: 'Day',
  },
  filters: {
    date: '日付',
    today: '当日',
    twoDays: '2日',
    week: '1週間',
    thisWeek: '当週',
    month: '1か月',
    thisMonth: '本月',
    server: 'サーバー',
    platform: 'パース',
    package: 'ファイル名',
    publisher: '運営元',
    region: '地域',
    paid: '課金',
    regularPlayer: '通常ユーザー',
    paidPlayer: '課金ユーザー',
    dimension: '緯度',
    timeDimension: '時間緯度',
    characteristicDimension: '特性次元',
    lostDays: '離脱日時',
    retentionDays: '継続日時',

    channel: '所属運営',
    operator: 'キャリア',
  },
  dimensions: {
    // 其他维度
    // 城市
    CITY: '所在地',
    // 分辨率
    RESOLUTION: 'ディスプレイ',
    // 游戏Id
    GAME_ID: 'ゲーム',
    // 包名
    PACKAGE_NAME: 'ファイル名',
    // 渠道
    CHANNEL: '所属運営',
    // 区服id
    SERVER_ID: 'サーバー',
    // 是否充值用户
    RECHARGE_USER: '課金類型',
    // 产品ID
    PRODUCT_ID: '項目',
    // 操作系统
    OS: 'パース',
    // 操作系统版本
    OS_VERSION: 'OSバージョン',
    // 运营商
    OPERATOR: 'キャリア',
    // 发行商
    DISTRIBUTOR: '運営元',
    // 网络
    NETWORK: 'ネット',
    // 设备型号
    DEVICE_MODEL: '端末名',
    // 等级
    LEVEL: 'レベル',
    // 商品
    PROP: '商品',
    // 货币类型
    CURRENCY: '貨幣',
    // 货币途径
    CURRENCY_SOURCE: '経由',
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
    TIME_HOUR: '一時間',
    // 日
    DATE_DAY: '1日',
    // 周
    DATE_WEEK: '一週間',
    // 月
    DATE_MONTH: '1か月',
    // 区间
    RANGE: '間隔',
  },
  routes: {
    analyze: 'データ分析',
    overview: 'メイン画面',
    newly: '新規分析',
    active: '活躍分析',
    distribution: '活躍分布',
    habit: 'オンライ習性',
    device: '端末分析',
    lost: '離脱分析',
    lostUser: '離脱ユーザー',
    returnedUser: '復帰ユーザー',
    retention: '継続分析',
    purchase: '課金分析',
    ltv: 'LTV',
    online: 'オンライ分析',
    level: 'レベル分析',
    task: 'クエスト分析',
    store: '付费分析',
    currency: '経済分析',
    report: 'データレポート',
  },

  columns: {
    TimePerSession: '1回プレイ時間（分）',
    TimePerUser: 'ユーザープレイ時間（分）',
    TimesPerUser: 'ユーザープレイ回数',
    TimePerSession: '1回プレイ時間（人数）',
    TotalTime: 'プレイ総時間（人数）',
    TotalTimes: 'プレイ回数（人数）',

    PlayerId: 'ユーザーID',
    CharacterId: 'キャラID',
    CharacterName: 'キャラ名',
    TotalPayment: '課金額',
    PurchaseTimes: '課金回数',
    FirstPayTime: '初チャージ日付',
    RecentlyPurchased: '最近課金',
    RecentlyLoggedIn: '最近ログイン',
    Channel: '所属運営',
    ServerId: 'サーバーID',

    // 付费分析
    PaidUser: '課金ユーザー',
    PaidRate: '課金率',
    ARPU: 'ARPU',
    ARPPU: 'ARPPU',
    ACU: 'ACU',
    PCU: 'PCU',

    // 报表
    NewlyDevice: '新規端末',
    NewlyUser: '新規ユーザー',
    NewlyRole: 'NewlyRole',
    ActiveDevice: '活躍端末',
    ActiveUser: '活躍ユーザー',
    LostUserIn7Days: '7日間離脱ユーザー',
    ReturnedUserIn7Days: '7日間復帰ユーザー',
    FirstPayRate: '新規課金率',
    NewlyUserFirstPay: '初日チャージ人数（新規）',
    NewlyUserPayTotal: '初日チャージ総額（新規）',
    FirstPay: '初チャージ人数',
    FirstPayTotal: '初チャージ総額',
  },

  // 新增
  Newly: '新',
  NewlyDevice: '新規端末',
  NewlyUser: '新規ユーザー',
  NewlyUserConvert: '新規ユーザー転換',
  NewlyDeviceConvert: '新規端末転換',
  NewlyTrend: '新規ユーザー成行',

  // 活跃
  ActiveDevice: '活躍端末',
  ActiveUser: '活躍ユーザー',
  ActiveUserConvert: '活躍ユーザー転換',
  ActiveTrend: '活躍ユーザー成行',

  // 分布
  ActiveUserDistribution: '活躍分布',
  OnlineDistribution: 'オンライ分布',

  // 习惯
  OnlineHabit: 'オンライ習性',
  GameTimePerSession: '1回プレイ時間',
  GameTimePerUser: 'ユーザープレイ時間',
  GameTimesPerUser: 'ユーザープレイ回数',

  // 流失
  LostUser: '離脱ユーザー',
  ReturnedUser: '復帰ユーザー',

  // 留存
  Retention: '継続分析',
  RetentionRate: '留存率',

  LTV: 'LTV',

  // 在线
  OnlineUser: 'オンライ人数',
  OnlineUserRate: 'オンライ率',
  OnlineUserMax: '最大オンライ人数',
  // 用于首页
  AvgOnline: '平均オンライ数',
  MaxOnline: '最大オンライ数',

  // 等级
  NewlyUserLevel: 'レベル分布（新規）',
  ActiveUserLevel: 'レベル分布（活躍）',
  LostUserLevel: '離脱ユーザーレベル',

  // 任务
  NewlyUserTask: '新規クエ分析',
  ActiveUserTask: '活躍クエ分析',
  LostUserTask: '離脱クエ分析',

  // 经济分析
  CurrenyIO: '産出/消耗',
  CurrenyProduce: '産出経由',
  CurrenyConsume: '消耗経由',
  CurrenyIOPerDay: '単日比較',
  CurrenyStorage: '貨幣所持数',
  CurrencyProduceTotal: '産出総量',
  CurrenyConsumeTotal: '産出消耗率',
  CurrenyIORate: '消耗総量',

  // 付费
  PaidUserAnalyze: '課金分析',
  PaidUserRank: '課金ランク',

  TotalPayment: '課金額',
  PaidUser: '課金ユーザー',
  PaidRate: '課金率',
  NewlyUserFirstPay: '初日チャージ人数（新規）',
  NewlyUserPayTotal: '初日チャージ総額（新規）',
  FirstPay: '初チャージ人数',
  FirstPayTotal: '初チャージ総額',
  ARPU: 'ARPU',
  ARPPU: 'ARPPU',

  PaymentTrend: '課金ユーザー成行',
  PaymentMountTrend: '課金額成行',

  // 数据报告
  DataReport: 'データレポート',
};

export default ja_JP;
