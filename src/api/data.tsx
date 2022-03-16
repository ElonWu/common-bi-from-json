import { getSession } from '@/utils/session';
import { DataBaseApi } from './base';

// 菜单
export const getMenus = () => {
  const projectCode = getSession('gameCode');
  return DataBaseApi.get(`/api/project/${projectCode}/menus`);
};

// 项目信息
export const getProject = () => {
  const projectCode = getSession('gameCode');
  return DataBaseApi.get(`/api/project/dashboard/project/${projectCode}`);
};

// 获取用户信息
export const getUser = () => DataBaseApi.get('/api/account/details');
