import { IDataCard } from '@/components/DataCard/type';

const OnlineUserDistributionConfig: IDataCard = {
  key: 'OnlineUserDistribution',
  title: '在线分布',
  description: '描述何为在线分布',
  downloadable: true,
  privateForms: ['timeDimension'],
  globalForms: ['dateRange', 'serverIds'],
  initialValues: {
    timeDimension: 'TIME_HOUR',
  },
  preview: [
    {
      type: 'bar',
      label: '条形图',
      x: 'timeHour',
      y: 'value',
      scaleY: '在线人数',
    },
    {
      type: 'table',
      label: '图表',
      columns: [
        {
          key: 'timeHour',
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
  ],
};

export default OnlineUserDistributionConfig;
