import { useEffect, useLayoutEffect, useState } from 'react';
import { isDeveloping, isReleasing, isTesting } from '@/api/base';
import { getSession, setSession } from '@/utils/session';
import { Toast } from '@douyinfe/semi-ui';
import useIntl from '@/store/intl';
import { getProject, getUser } from '@/api/data';

// 返回数据后台首页
export const goBackToMainSite = () => {
  let mainSite: string = '';

  // 开发
  if (isDeveloping) {
    console.log('__developing__');
    mainSite = `https://test-data.bbgdata.com`;
  }
  // 测试服
  else if (isTesting) {
    mainSite = `https://test-data.bbgdata.com`;
  }
  // 正式服
  else if (isReleasing) {
    mainSite = `https://data.bbgdata.com`;
  }
  // 返回 referer
  else if (
    document.referrer &&
    document.referrer.endsWith(`data.bbgdata.com`)
  ) {
    mainSite = document.referrer;
  }

  if (mainSite) window.location.replace(mainSite);
};

// 获取 url 参数中的指定值
const findTargetSerach = (search: string, target: string) => {
  const pairs = search?.slice(1).split('&');

  for (let pair of pairs) {
    const [key, value] = pair.split('=');

    if (key && key === target) return value;
  }

  return null;
};

const useBeforePaint = () => {
  const [userAuthencated, setUserAuthencated] = useState(false);
  const { setValue: setLocaleType } = useIntl();

  // 从 url 中提取并保存数据
  useLayoutEffect(() => {
    if (location?.search) {
      const gameCode = findTargetSerach(location?.search, 'gameCodeOn');
      const gameId = findTargetSerach(location?.search, 'gameIdOn');
      const gameName = findTargetSerach(location?.search, 'gameName');
      const gameRegion = findTargetSerach(location?.search, 'gameRegion');
      const gameTimezone = findTargetSerach(location?.search, 'gameTimezone');

      // console.log({ gameCode, gameId, gameName, gameRegion });

      if (gameCode) {
        setSession('gameCode', gameCode);
        setSession('gameId', gameId);
        setSession('gameName', gameName);
        setSession('gameRegion', gameRegion);
        setSession('gameTimezone', gameTimezone || 'Asia/Shanghai');
      }
    }

    // 开发中
    if (isDeveloping) {
      setSession('gameCode', 'xxczywin');
      setSession('gameName', '信长之野望');
      setSession('gameTimezone', 'Asia/Shanghai');
    }

    // 验证缓存的 gameCode
    const sessionGameCode = getSession('gameCode');

    // 返回首页
    if (!sessionGameCode) goBackToMainSite();
  }, [location]);

  // 获取登录用户信息
  useEffect(() => {
    const init = async () => {
      try {
        const [user, project]: [any, any] = await Promise.all([
          getUser(),
          getProject(),
        ]);

        // 用户相关
        setSession('user', user);
        setLocaleType(user?.language || 'zh_CN');

        // 项目相关
        setSession('project', project);
        setSession('gameTimezone', project.timezone);

        setUserAuthencated(true);
      } catch (err) {
        Toast.error('获取身份信息失败');
        goBackToMainSite();
      }
    };

    const user = getSession('user');
    const project = getSession('project');

    if (user && project) {
      setUserAuthencated(true);
    } else {
      init();
    }
  }, []);

  return userAuthencated;
};

export default useBeforePaint;
