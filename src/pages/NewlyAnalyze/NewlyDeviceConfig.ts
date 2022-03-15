import { IDataCard } from '@/components/DataCard/type';

const NewlyDeviceConfig: IDataCard = {
  key: 'NewlyDevice',
  title: '新增设备',
  downloadable: true,
  privateForms: ['timeDimension', 'characterDimension'],
  globalForms: [
    'dateRange',
    'serverIds',
    'os',
    'packageNames',
    'distributors',
    'channels',
    'city',
    'rechargeUser',
  ],
  initialValues: {
    timeDimension: 'DATE_DAY',
  },
  preview: [
    {
      type: 'line',
      label: '线图',
      x: 'dateDay',
      y: 'value',
    },
    {
      type: 'table',
      label: '图表',
      columns: [
        {
          key: 'time',
          title: '时间',
          excel: true,
        },
        {
          key: 'value',
          title: '人数',
          excel: true,
        },
      ],
    },
    {
      type: 'multline-pie',
      label: '组合',
      children: [
        {
          type: 'line',
          label: '趋势',
          x: 'dateDay',
          y: 'value',
          grid: 6,
        },
        {
          type: 'pie',
          label: '来源',
          x: 'dateDay',
          y: 'value',
          grid: 6,
        },
      ],
    },
  ],
};

export default NewlyDeviceConfig;
