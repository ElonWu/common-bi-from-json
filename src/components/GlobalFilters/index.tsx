import { FC, useCallback, useMemo, useState } from 'react';

import { IconFilter } from '@douyinfe/semi-icons';
import { Button, DatePicker, IconButton, SideSheet } from '@douyinfe/semi-ui';

import Form, { useForm } from '@/components/Form';
import MetaSelect from '@/components/MetaSelect';

import useGlobalFormsState from '@/store/globalForms';
import useMediaQuery from '@/store/mediaQuery';
import { MetaList } from '@/api/meta';
import { subDays } from 'date-fns';
import { isDeveloping } from '@/api/base';

const GlobalFilters = () => {
  const [showGlobalFilters, setGlobalFilers] = useState(false);
  const {
    value: [isMobile],
  } = useMediaQuery();

  return (
    <>
      <IconButton
        className="w-8 h-8 rounded-full bg-gray-50"
        onClick={() => setGlobalFilers(true)}
        icon={<IconFilter />}
      />

      <SideSheet
        width={isMobile ? '100%' : 480}
        headerStyle={{
          padding: isMobile ? '16px 24px' : '28px 24px',
          boxShadow: '0 2px 8px 0 rgb(193 192 192 / 40%)',
        }}
        title={
          <div className="flex space-x-2 items-center justify-start">
            <IconFilter size="large" className="text-blue-500" />
            <h4>全局筛选</h4>
          </div>
        }
        visible={showGlobalFilters}
        onCancel={() => setGlobalFilers(false)}
      >
        <div
          className="w-full overflow-x-hidden overflow-y-auto"
          style={{ height: `calc(100vh - 68px)` }}
        >
          <GlobalForm onConfirm={() => setGlobalFilers(false)} />
        </div>
      </SideSheet>
    </>
  );
};

const GlobalForm: FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
  const { value, setValue } = useGlobalFormsState();

  const formItems = useMemo(() => {
    const formItemCls = 'flex-col space-y-2 items-start justify-start';
    return [
      {
        key: 'dateRange',
        label: '时间范围',
        formItemCls,
        options: {
          rules: { required: true },
          initialValue: isDeveloping
            ? [new Date('2021-11-20'), new Date('2021-12-20')] // 开发服默认时间段
            : [subDays(Date.now(), 7), Date.now()],
        },
        content: (
          <DatePicker
            type="dateRange"
            density="compact"
            style={{ width: '100%' }}
          />
        ),
      },
      {
        key: 'serverIds',
        label: '服务器',
        formItemCls,
        content: (
          <MetaSelect
            metaKey={MetaList.SERVER_ID}
            multiple
            style={{ width: '100%' }}
          />
        ),
      },
      {
        key: 'os',
        label: '平台',
        formItemCls,
        content: <MetaSelect metaKey={MetaList.OS} style={{ width: '100%' }} />,
      },
      {
        key: 'packageNames',
        label: '包名',
        formItemCls,
        content: (
          <MetaSelect
            metaKey={MetaList.PACKAGE_NAME}
            multiple
            style={{ width: '100%' }}
          />
        ),
      },
      {
        key: 'distributors',
        label: '发行商',
        formItemCls,
        content: (
          <MetaSelect
            metaKey={MetaList.DISTRIBUTOR}
            multiple
            style={{ width: '100%' }}
          />
        ),
      },
      {
        key: 'channels',
        label: '渠道',
        formItemCls,
        content: (
          <MetaSelect
            metaKey={MetaList.CHANNEL}
            multiple
            style={{ width: '100%' }}
          />
        ),
      },
      {
        key: 'city',
        label: '地区',
        formItemCls,
        content: (
          <MetaSelect
            metaKey={MetaList.CITY}
            multiple
            style={{ width: '100%' }}
          />
        ),
      },
      {
        key: 'rechargeUser',
        label: '付费',
        formItemCls,
        content: (
          <MetaSelect
            metaKey={MetaList.RECHARGE_USER}
            style={{ width: '100%' }}
          />
        ),
      },
    ];
  }, []);

  const { formItemDoms, onValidate } = useForm(formItems, value);

  const onSubmit = useCallback(async () => {
    // @ts-ignore
    const { error, values } = await onValidate();
    if (error) return;

    setValue(values);
    onConfirm();
  }, [onConfirm, onValidate, setValue]);

  return (
    <div className="h-full flex flex-col space-y-4 py-4">
      <Form className="flex-1 flex flex-col space-y-4 items-stretch justify-start overflow-y-auto">
        {Object.values(formItemDoms)}
      </Form>

      <Button theme="solid" type="primary" onClick={onSubmit}>
        确认
      </Button>
    </div>
  );
};

export default GlobalFilters;
