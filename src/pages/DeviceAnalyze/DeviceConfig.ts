import { IDataCard } from '@/components/DataCard/type';

const DeviceConfig: IDataCard = {
  key: 'Device',
  title: '设备分布',
  description: '描述设备分布规则',
  downloadable: true,
  privateForms: ['deviceDimension'],
  globalForms: ['dateRange', 'serverIds', 'packageNames', 'os', 'distributors'],
  initialValues: {
    deviceDimension: 'CITY',
  },
  preview: [
    {
      type: 'table-pie',
      label: '组合',
      children: [
        {
          type: 'table',
          label: '图表',
          grid: 6,
          columns: [
            {
              key: 'city',
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
          type: 'pie',
          label: '来源',
          x: 'city',
          y: 'value',
          grid: 6,
        },
      ],
    },
  ],
};

export default DeviceConfig;
