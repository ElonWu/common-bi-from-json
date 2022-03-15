const ko_KR = {
  actions: {
    search: '검색',
    export: '추출',
    open: '펼침',
    close: '접기',
  },
  units: {
    minute: 'Min',
    day: 'Day',
  },
  filters: {
    date: '날짜',
    today: '당일',
    twoDays: '2일',
    week: '1주',
    thisWeek: '금주',
    month: '1개월',
    thisMonth: '본월',
    server: '서버',
    platform: '플랫폼',
    package: '패키지명',
    publisher: '배급사',
    region: '지역',
    paid: '결제',
    regularPlayer: '일반유저',
    paidPlayer: '과금유저',
    dimension: '緯度',
    timeDimension: '시간척도',
    characteristicDimension: '특정차원',
    lostDays: '이탈일수',
    retentionDays: '잔존일수',

    channel: '마켓',
    operator: '통신사/시간척도',
  },
  dimensions: {
    // 其他维度
    // 城市
    CITY: '지역',
    // 分辨率
    RESOLUTION: '해상도',
    // 游戏Id
    GAME_ID: '게임',
    // 包名
    PACKAGE_NAME: '패키지명',
    // 渠道
    CHANNEL: '채널',
    // 区服id
    SERVER_ID: '서버',
    // 是否充值用户
    RECHARGE_USER: '결제',
    // 产品ID
    PRODUCT_ID: '프로젝트',
    // 操作系统
    OS: '플랫폼',
    // 操作系统版本
    OS_VERSION: '시스템버전',
    // 运营商
    OPERATOR: '통신사',
    // 发行商
    DISTRIBUTOR: '배급사',
    // 网络
    NETWORK: '네트워크',
    // 设备型号
    DEVICE_MODEL: '단말모델',
    // 等级
    LEVEL: '레벨',
    // 商品
    PROP: '상품',
    // 货币类型
    CURRENCY: '통화 유형',
    // 货币途径
    CURRENCY_SOURCE: '경로',
    // 时间维度
    // 分钟
    TIME_MINUTE: '1 분',
    // 5分钟
    TIME_FIVE_MINUTE: '5 분',
    // 10分钟
    TIME_TEN_MINUTE: '10 분',
    // 15分钟
    TIME_FIFTEEN_MINUTE: '15 분',
    // 30分钟
    TIME_THIRTY_MINUTE: '30 분',
    // 小时
    TIME_HOUR: '1시간',
    // 日
    DATE_DAY: '어느 날',
    // 周
    DATE_WEEK: '일주일',
    // 月
    DATE_MONTH: '한 달',
    // 区间
    RANGE: '간격',
  },
  routes: {
    analyze: '게임 데이터분석',
    overview: '메인',
    newly: '신규분석',
    active: '활약분석',
    distribution: '활약분포',
    habit: '접속패턴',
    device: '단말분석',
    lost: '이탈분석',
    lostUser: '이탈유저',
    returnedUser: '복귀유저',
    retention: '잔존분석',
    purchase: '과금분석',
    ltv: 'LTV',
    online: '접속분석',
    level: '레벨분석',
    task: '임무분석',
    store: '付费分析',
    currency: '경제분석',
    report: '데이터테이블',
  },

  columns: {
    TimePerSession: '1회 게임 시간(분)',
    TimePerUser: '유저별 게임시간(분)',
    TimesPerUser: '유저별 게임횟수',
    TimePerSession: '1회 게임 분간 수(인수)',
    TotalTime: '총 게임 분간 수(인수)',
    TotalTimes: '게임 횟수(인수)',

    PlayerId: '유저 ID',
    CharacterId: '캐릭터 ID',
    CharacterName: '캐릭터명',
    TotalPayment: '총 과금',
    PurchaseTimes: '구매횟수',
    FirstPayTime: '첫충전 시간',
    RecentlyPurchased: '최근구매',
    RecentlyLoggedIn: '최근접속',
    Channel: '플랫폼',
    ServerId: '서버 ID',

    // 付费分析
    PaidUser: '과금유저',
    PaidRate: '결제율',
    ARPU: 'ARPU',
    ARPPU: 'ARPPU',
    ACU: 'ACU',
    PCU: 'PCU',

    // 报表
    NewlyDevice: '신규단말',
    NewlyUser: '신규유저',
    NewlyRole: 'NewlyRole',
    ActiveDevice: '활약단말',
    ActiveUser: '활약유저',
    LostUserIn7Days: '7일 이탈유저',
    ReturnedUserIn7Days: '7일 복귀유저',
    FirstPayRate: '신규과금비율',
    NewlyUserFirstPay: '신규유저 첫날 결제수',
    NewlyUserPayTotal: '신규유저 첫날 결제총액',
    FirstPay: '첫 결제 유저 수',
    FirstPayTotal: '첫 결제 총액',
  },

  // 新增
  Newly: '新',
  NewlyDevice: '신규단말',
  NewlyUser: '신규유저',
  NewlyUserConvert: '신규유저전화',
  NewlyDeviceConvert: '신규단말전환',
  NewlyTrend: '신규유저전환',

  // 活跃
  ActiveDevice: '활약단말',
  ActiveUser: '활약유저',
  ActiveUserConvert: '활약유저전환',
  ActiveTrend: '활약유저추세',

  // 分布
  ActiveUserDistribution: '활약분포',
  OnlineDistribution: '접속분포',

  // 习惯
  OnlineHabit: '접속패턴',
  GameTimePerSession: '1회 게임 시간',
  GameTimePerUser: '유저별 게임시간',
  GameTimesPerUser: '유저별 게임횟수',

  // 流失
  LostUser: '이탈유저',
  ReturnedUser: '복귀유저',

  // 留存
  Retention: '잔존분석',
  RetentionRate: '留存率',

  LTV: 'LTV',

  // 在线
  OnlineUser: '접속인수',
  OnlineUserRate: '접속비율',
  OnlineUserMax: '최대접속인수',
  // 用于首页
  AvgOnline: '평균접속인수',
  MaxOnline: '최대접속인수',

  // 等级
  NewlyUserLevel: '신규유저 레벨분포',
  ActiveUserLevel: '활약유저 레벨분포',
  LostUserLevel: '이탈유저레벨',

  // 任务
  NewlyUserTask: '신규유저 임무분석',
  ActiveUserTask: '활약유저 임무분석',
  LostUserTask: '이탈유저 임무분석',

  // 经济分析
  CurrenyIO: '획득/소비',
  CurrenyProduce: '획득경로',
  CurrenyConsume: '소비경로',
  CurrenyIOPerDay: '단일비교',
  CurrenyStorage: '화폐잔액',
  CurrencyProduceTotal: '획득총량',
  CurrenyConsumeTotal: '획득소비비율',
  CurrenyIORate: '소비총량',

  // 付费
  PaidUserAnalyze: '과금분석',
  PaidUserRank: '과금랭킹',

  TotalPayment: '총 과금',
  PaidUser: '과금유저',
  PaidRate: '결제율',
  NewlyUserFirstPay: '신규유저 첫날 결제수',
  NewlyUserPayTotal: '신규유저 첫날 결제총액',
  FirstPay: '첫 결제 유저 수',
  FirstPayTotal: '첫 결제 총액',
  ARPU: 'ARPU',
  ARPPU: 'ARPPU',

  PaymentTrend: '과금유저추세',
  PaymentMountTrend: '과금금액추세',

  // 数据报告
  DataReport: '데이터테이블',
};

export default ko_KR;
