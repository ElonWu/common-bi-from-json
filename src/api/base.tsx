import mockRequest from '../../mock';
import Request from '@/utils/request';

import {
  DEV_BASEURL,
  TEST_BASEURL,
  RELEASE_BASEURL,
  DATA_DEV_BASEURL,
  DATA_TEST_BASEURL,
  DATA_RELEASE_BASEURL,
} from '../../defaultSettings';
import { Notification } from '@douyinfe/semi-ui';

let BI_BASEURL, DATA_BASEURL;

// @ts-ignore
export const isDeveloping = true;
// NODE_ENV !== 'production';
export const isTesting = false;
// @ts-ignore
// NODE_ENV === 'production' && WEBPACK_BUILD_TYPE === 'test';
export const isReleasing = false;
// @ts-ignore
// NODE_ENV === 'production' && WEBPACK_BUILD_TYPE === 'release';

if (isDeveloping) {
  BI_BASEURL = DEV_BASEURL;
  DATA_BASEURL = DATA_DEV_BASEURL;
  // mockRequest();
} else if (isTesting) {
  BI_BASEURL = TEST_BASEURL;
  DATA_BASEURL = DATA_TEST_BASEURL;
} else {
  BI_BASEURL = RELEASE_BASEURL;
  DATA_BASEURL = DATA_RELEASE_BASEURL;
}

const handleResolve = (response: any) => {
  if (response?.successful) return Promise.resolve(response?.data);
  return Promise.reject(response);
};

const handleError = (axiosError: any) => {
  const response = axiosError?.response || axiosError;

  if (response?.status === 401) {
    Notification.error({
      title: '权限异常',
      content: '没有此接口的访问权限，请返回数据后台重新登录',
    });
    return Promise.reject();
  }

  let message = response?.status;

  if (response?.data) {
    message =
      response.data?.desc ||
      response.data?.msg ||
      response.data?.message ||
      '未知错误信息';
  }
  // debugger;
  Notification.error({
    title: '请求异常',
    content: message,
  });

  return Promise.reject(message);
};

export const BIBaseApi = new Request(BI_BASEURL, {
  onSuccess: handleResolve,
  onError: handleError,
});

export const DataBaseApi = new Request(DATA_BASEURL, {
  onSuccess: handleResolve,
  onError: handleError,
});
