import { useCallback, useEffect, useMemo } from 'react';
import type { IDataCard, PrivateForm, GlobalForm } from './type';

import { Select } from '@douyinfe/semi-ui';
import Form, { useForm, FormItem } from '../Form';
import MetaSelect from '../MetaSelect';

import useMediaQuery from '@/store/mediaQuery';
import { MetaList } from '@/api/meta';
import {
  CharacterDimensions,
  DeviceDimensions,
  RemainDemensions,
  TimeDimensions,
} from '@/api/dimension';

const CardFrom = function ({
  value,
  onChange,
  config,
  loading,
}: {
  value: any;
  onChange: (filters: any) => void;
  config: IDataCard;
  loading: boolean;
}) {
  const {
    value: [isMobile],
  } = useMediaQuery();

  const formItems = useMemo(() => {
    if (
      !Array.isArray(config?.privateForms) ||
      config?.privateForms?.length === 0
    ) {
      return [];
    }

    return config?.privateForms
      .map((key) => assembleFormItem(key, loading))
      .filter(Boolean);
  }, [config.privateForms, loading]);

  const { formItemDoms, onValidate, watch } = useForm(
    formItems as FormItem[],
    value,
  );

  const onSubmit = useCallback(async () => {
    // @ts-ignore
    const { values, error } = await onValidate();
    if (error) return;
    onChange(values);
  }, [config]);

  // 监听更新
  useEffect(() => {
    const subscription = watch(() => {
      onSubmit();
    });
    return () => subscription.unsubscribe();
  }, [watch, onSubmit]);

  return (
    <div className="flex items-end justify-start">
      <Form
        className={
          isMobile
            ? 'flex flex-col items-start justify-start space-y-4'
            : 'flex items-center justify-start flex-wrap space-x-4'
        }
      >
        {Object.values(formItemDoms)}
      </Form>
    </div>
  );
};

// 针对每个表单项生成一个组件
const assembleFormItem = (
  key: PrivateForm | GlobalForm,
  loading: boolean,
): FormItem | null => {
  const formItemCls = 'items-center space-x-2';
  switch (key) {
    case 'timeDimension':
      return {
        key: 'timeDimension',
        label: '时间维度',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            loading={loading}
            optionList={TimeDimensions}
          />
        ),
      };

    case 'characterDimension':
      return {
        key: 'characterDimension',
        label: '特性维度',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            loading={loading}
            optionList={CharacterDimensions}
          />
        ),
      };

    case 'deviceDimension':
      return {
        key: 'deviceDimension',
        label: '设备维度',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            loading={loading}
            optionList={DeviceDimensions}
          />
        ),
      };

    case 'remainDimension':
      return {
        key: 'remainDimension',
        label: '留存维度',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            loading={loading}
            optionList={RemainDemensions}
          />
        ),
      };

    case 'levelDimension':
      return {
        key: 'levelDimension',
        label: '维度',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            loading={loading}
            optionList={[{ value: 'LEVEL', label: '等级' }]}
          />
        ),
      };

    case 'currencyDimension':
      return {
        key: 'currencyDimension',
        label: '维度',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            loading={loading}
            optionList={[{ value: 'CURRENCY', label: '货币' }]}
          />
        ),
      };

    case 'losingDay':
      return {
        key: 'losingDay',
        label: '流失天数',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            loading={loading}
            optionList={[
              { value: 7, label: '7日' },
              { value: 14, label: '14日' },
              { value: 30, label: '30日' },
            ]}
          />
        ),
      };

    case 'backDays':
      return {
        key: 'backDays',
        label: '回流天数',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            loading={loading}
            optionList={[
              { value: 7, label: '7日' },
              { value: 14, label: '14日' },
              { value: 30, label: '30日' },
            ]}
          />
        ),
      };

    case 'remainDays':
      return {
        key: 'remainDays',
        label: '留存天数',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            multiple
            loading={loading}
            optionList={[
              { label: '次日', value: 2 },
              { label: '3天', value: 3 },
              { label: '4天', value: 4 },
              { label: '5天', value: 5 },
              { label: '6天', value: 6 },
              { label: '7天', value: 7 },
              { label: '8天', value: 8 },
              { label: '9天', value: 9 },
              { label: '10天', value: 10 },
              { label: '11天', value: 11 },
              { label: '12天', value: 12 },
              { label: '13天', value: 13 },
              { label: '14天', value: 14 },
              { label: '15天', value: 15 },
              { label: '16天', value: 16 },
              { label: '17天', value: 17 },
              { label: '18天', value: 18 },
              { label: '19天', value: 19 },
              { label: '20天', value: 20 },
              { label: '21天', value: 21 },
              { label: '22天', value: 22 },
              { label: '23天', value: 23 },
              { label: '24天', value: 24 },
              { label: '25天', value: 25 },
              { label: '26天', value: 26 },
              { label: '27天', value: 27 },
              { label: '28天', value: 28 },
              { label: '29天', value: 29 },
              { label: '30天', value: 30 },
              { label: '60天', value: 60 },
              { label: '90天', value: 90 },
              { label: '180天', value: 180 },
              { label: '360天', value: 360 },
            ]}
          />
        ),
      };

    case 'ltvDays':
      return {
        key: 'ltvDays',
        label: '天数',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            multiple
            loading={loading}
            optionList={[
              { label: '当天', value: 0 },
              { label: '1天', value: 1 },
              { label: '2天', value: 2 },
              { label: '3天', value: 3 },
              { label: '4天', value: 4 },
              { label: '5天', value: 5 },
              { label: '6天', value: 6 },
              { label: '7天', value: 7 },
              { label: '10天', value: 10 },
              { label: '14天', value: 14 },
              { label: '15天', value: 15 },
              { label: '30天', value: 30 },
              { label: '60天', value: 60 },
              { label: '90天', value: 90 },
              { label: '120天', value: 120 },
              { label: '150天', value: 150 },
              { label: '180天', value: 180 },
              { label: '270天', value: 270 },
              { label: '360天', value: 360 },
            ]}
          />
        ),
      };

    case 'levelTrace':
      return {
        key: 'traces',
        label: '等级类型',
        formItemCls,
        content: (
          <MetaSelect loading={loading} metaKey={MetaList.LEVEL_TRACE} />
        ),
      };

    case 'currencyTrace':
      return {
        key: 'traces',
        label: '货币类型',
        formItemCls,
        content: (
          <MetaSelect loading={loading} metaKey={MetaList.CURRENCY_SOURCE} />
        ),
      };

    case 'type':
      return {
        key: 'type',
        label: '留存类型',
        formItemCls,
        content: (
          <Select
            placeholder="请选择"
            loading={loading}
            optionList={[
              { value: 'user', lable: '用户' },
              { value: 'device', lable: '设备' },
              { value: 'role', lable: '角色' },
            ]}
          />
        ),
      };
    default:
      return null;
  }
};

export default CardFrom;
