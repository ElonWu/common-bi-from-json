import useSWR from 'swr';
import { queryParams } from '@/utils/format';
import { useMemo } from 'react';
import { isFunction, notNil } from '@/utils/type';
import { PublicConfiguration } from 'swr/dist/types';

const useApi = (
  fetcher: Function,
  params?: any,
  options?: PublicConfiguration | { shouldFetch?: boolean },
) => {
  const shouldPullRequest = useMemo(() => {
    if (options && 'shouldFetch' in options) {
      return options.shouldFetch;
    }
    return true;
  }, [options]);

  // key 为 null 时， 不会发出请求
  const key = useMemo(() => {
    try {
      let key = null;

      if (shouldPullRequest && isFunction(fetcher)) {
        key = `${fetcher.name}${queryParams(params)}`;
      }

      return key;
    } catch (err) {
      console.log({ useApiError: err });
    }
  }, [shouldPullRequest, fetcher, params]);

  // @ts-ignore
  const { shouldFetch, ...overrideOptions } = options || {};

  const { data, mutate, error, isValidating } = useSWR(
    key,
    () => fetcher(params),
    {
      // 错误后3秒内重试，最多三次
      shouldRetryOnError: true,
      errorRetryInterval: 2000,
      errorRetryCount: 2,

      // 2秒内不发出重复请求
      dedupingInterval: 2000,

      revalidateOnReconnect: true, // 断网重连后自动请求
      revalidateOnMount: true, // 所在组件挂载时自动更新， 如果不设置， 却传了 initialData 会自动设置为 false
      revalidateOnFocus: false, // 聚焦时自动请求

      ...overrideOptions,
    },
  );

  return {
    data,
    reload: mutate,
    error,
    loading: Boolean(key && !error && isValidating),
  };
};

export default useApi;
