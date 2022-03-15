import { useMemo } from 'react';
import type { FC } from 'react';
import type { SelectProps } from '@douyinfe/semi-ui/lib/es/select';

import useApi from '@/hooks/useApi';
import { notNil } from '@/utils/type';
import { Select } from '@douyinfe/semi-ui';
import { getMeta } from '@/api/meta';

const MetaSelect: FC<
  {
    metaKey: string;
    value?: any;
    onChange?: (value: any) => void;
  } & SelectProps
> = ({ value, onChange, metaKey, ...rest }) => {
  const { data, loading } = useApi(
    getMeta,
    { key: metaKey },
    {
      shouldFetch: notNil(metaKey),
      // 五分钟不再重复请求
      dedupingInterval: 1000 * 60 * 5,
    },
  );

  const optionList = useMemo(() => {
    if (!Array.isArray(data) || data?.length === 0) return [];

    return data.map((item: { name: string; value: number | string }) => ({
      label: item.name,
      value: item.value,
    }));
  }, [data]);

  return (
    <Select
      key={metaKey}
      value={value}
      onChange={onChange}
      optionList={optionList}
      placeholder="请选择"
      loading={loading}
      {...rest}
    />
  );
};

export default MetaSelect;
