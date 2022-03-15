import { getSession } from '@/utils/session';
import { BIBaseApi, isDeveloping } from './base';

export const MetaList: { [key: string]: string } = {
  SERVER_ID: 'SERVER_ID', // 服务器列表分组
  OS: 'OS', // 操作系统分组
  PACKAGE_NAME: 'PACKAGE_NAME', // 包名分组
  CHANNEL: 'CHANNEL', // 渠道分组
  DISTRIBUTOR: 'DISTRIBUTOR', // 发行商
  AREA: 'AREA', // 地区
  RECHARGE_USER: 'RECHARGE_USER', // 付费类型
  CITY: 'CITY', // 地区
  CURRENCY_SOURCE: 'CURRENCY_SOURCE', // 货币来源
  LEVEL_TRACE: 'LEVEL_TRACE', // 等级追踪
  RESOURCE_SOURCE: 'RESOURCE_SOURCE', // 资源来源

  // CURRENCY_TRACE: 'CURRENCY_TRACE', // 货币类型
  // CURRENCY_SOURCE: 'CURRENCY_SOURCE', // 货币途径
  // RESOURCE_ID: 'RESOURCE_ID', // 道具类型
  // RESOURCE_SOURCE: 'RESOURCE_SOURCE', // 道具途径
  // PRODUCT_ID: 'PRODUCT_ID', // 品项类型
  // USER_ACTION_TRACE: 'USER_ACTION_TRACE', // 行为类型
  // ROLE_TRACE: 'ROLE_TRACE', // 角色类型
  // TASK_TRACE: 'TASK_TRACE', // 任务类型
  // PURCHASE_TRACE: 'PURCHASE_TRACE', // 支付类型分组
  // CARD_KEY: 'CARD_KEY', // 所有的图表标记分组
  // OS_VERSION: 'OS_VERSION', // 所有的操作系统版本分组
  // OPERATOR: 'OPERATOR', // 所有的运营商分组
  // DEVICE_MODEL: 'DEVICE_MODEL', // 所有的设备分组
  // RECHARGE_USER: 'RECHARGE_USER', // 付费用户标记分组
  // CITY: 'CITY', // 相关城市分组
  // NETWORK: 'NETWORK', // 所有的网络分组
  // ITEM: 'ITEM', // 道具
  // CHAT_CHANNEL: 'CHAT_CHANNEL', // 聊天频道
  // USER_TEAM_TYPE: 'USER_TEAM_TYPE', // 队伍type
  // USER_TEAM_SOLDIER_KIND: 'USER_TEAM_SOLDIER_KIND', // 士兵type
  // USER_TEAM_HERO: 'USER_TEAM_HERO', // 武将type
  // APP_VERSION_TYPE: 'APP_VERSION_TYPE', // APP版本类型
  // APP_VERSION_USER: 'APP_VERSION_USER', // APP版本配置_用户类型
  // FAMOUS_CITY: 'FAMOUS_CITY', // 名城
  // RESOURCE_TRACE: 'RESOURCE_TRACE', // 资源类型
  // ROLE_MODIFIABLE_ITEM: 'ROLE_MODIFIABLE_ITEM', // 背包道具
  // AB_TESTING_GROUP_MEMBER_TYPE: 'AB_TESTING_GROUP_MEMBER_TYPE', // APP版本 灰度组成员类型
};

// 格式化请求路径
const genPath = (key: string) => {
  const projectCode = isDeveloping ? 'xxczywin' : getSession('gameCode');
  return `/api/metadata/${projectCode}/dimensions/${key}/items`;
};

// 元数据接口
export const getMeta = ({ key }: { key: string }) =>
  BIBaseApi.get(genPath(key));
