import { goBackToMainSite } from '@/hooks/useBeforePaint';
import { getSession } from '@/utils/session';
import { BIBaseApi as BaseApi } from './base';
// import { EnumList, getEnum } from './enum';

export interface RequestParams {
  type?: 'user' | 'device' | 'role'; // 留存类型，user - 用户; device - 设备; role - 角色
  dimensions: string[];
  condition: {
    // 维度条件
    areas?: string[]; // 区域信息, 可多个
    channels?: string[]; // 渠道, 可多个
    distributors?: string[]; // 发行商, 可多个
    os?: string; //	操作系统
    packageNames?: string[]; //	包名, 可多个
    payedUser?: string; // 是否只查询付费用户相关
    serverIds?: string[]; // 服务器id, 可多个

    // 时间条件
    discreteDates?: string[]; // 离散的日期值, 可多个, 格式yyyy-MM-dd

    startDate?: string; // 开始日期, 格式yyyy-MM-dd
    startDateTime?: string; //开始日期-时间, 格式yyyy-MM-dd HH:mm:ss
    startTime?: string; // 开始时间, 格式hh:mm

    endDate?: string; // 结束日期, 格式yyyy-MM-dd
    endDateTime?: string; //结束日期-时间, 格式yyyy-MM-dd HH:mm:ss
    endTime?: string; // 结束时间, 格式hh:mm
    ranges?: string[]; //	区间信息 前闭后开

    // 分页
    pageIndex?: number;
    pageSize?: number;

    // 分析
    sources?: string[]; // 来源、途径
    traces?: string[]; // 事件
  };
}

const getUrl = () => {
  const projectCode = getSession('gameCode');

  if (!projectCode) {
    goBackToMainSite();
    return;
  }

  return `/api/bi/${projectCode}`;
};

// 新增设备
export const getNewlyDevices = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/newly/device`, params);

// 新增用户
export const getNewlyUsers = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/newly/user`, params);

// // 新增设备漏斗
// export const getNewlyDeviceFunnel = (params) =>
//   BaseApi.post(`${getUrl()}/newly/device/funnel`, params);

// 活跃设备分析
export const getActiveDevices = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/active/device`, params);

// 活跃用户分析
export const getActiveUsers = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/active/user`, params);

// 设备分析
export const getDeviceAnalyze = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/device`, params);

// // 活跃用户漏斗
// export const getActiveUserFunnel = (params) =>
//   BaseApi.post(`${getUrl()}/active/user/funnel`, params);

// 单次游戏时长
export const getAvgOnceGameDuration = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/active/avgOnceGameDuration`, params);

// 平均游戏时长
export const getUserAvgGameDuration = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/active/userAvgGameDuration`, params);

// 平均游戏次数
export const getUserAvgGameTimes = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/active/userAvgGameTimes`, params);

// 用户流失
export const getUserLost = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/losing/user`, params);
// 用户流失
export const getLostRate = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/losing/userlosingRate`, params);
// 用户回流
export const getUserBack = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/back/user`, params);
// 设备流失
export const getDeviceLost = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/losing/device`, params);

// 用户留存
export const getUserRemain = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/remain/user`, params);
// 设备留存
export const getDeviceRemain = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/remain/device`, params);

// 平均在线用户
export const getOnelineAvgUsers = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/online/avgCurrentUser`, params);
// 最大在线大人
export const getOnelinePeakUsers = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/online/peakCurrentUser`, params);

// 储值用户
export const getPaidUsers = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/purchase/purchaseUserCount`, params);
// 储值金额
export const getPaidSum = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/purchase/sum`, params);
// 付费金额/活跃用户
export const getARPU = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/purchase/arpu`, params);
// 付费金额/付费玩家
export const getARPPU = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/purchase/arppu`, params);

// LTV
export const getLTV = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/ltv/user/actual`, params);

// 等级分析
// 新增用户
export const getNewlyLevelAnalyze = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/level/newly/role`, params);
// 活跃用户
export const getActiveLevelAnalyze = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/level/active/role`, params);

// 任务分析
// 新增用户
export const getNewlyTaskAnalyze = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/task/newly/role`, params);
// 活跃用户
export const getActiveTaskAnalyze = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/task/active/role`, params);

// 商城分析
// 商店商品购买总金额
export const getStorePaidSum = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/store/sumAmount`, params);

// 商店商品购买总次数
export const getStorePaidCount = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/store/countBuyTimes`, params);

// 商店商品购买总总人数
export const getStorePaidUser = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/store/countBuyRoleNumber`, params);

// 经济分析
// 消耗
export const getCurrencyConsume = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/currency/consumeSource`, params);
// 产出
export const getCurrencyProduce = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/currency/produceSource`, params);
// 产出 消耗对比
export const getCurrencyCompare = (params: RequestParams) =>
  BaseApi.post(`${getUrl()}/currency/produceAndConsume`, params);
