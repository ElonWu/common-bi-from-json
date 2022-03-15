import { IDataCard } from '@/components/DataCard/type';

const CurrencyConfig: IDataCard = {
  key: 'Currency',
  title: '货币分析',
  downloadable: true,
  privateForms: ['currencyDimension', 'currencyTrace'],
  globalForms: ['dateRange', 'serverIds', 'os', 'city', 'rechargeUser'],
  initialValues: {
    currencyDimension: 'CURRENCY',
  },
  preview: [
    {
      type: 'multline-pie',
      label: '组合',
      children: [
        {
          type: 'table',
          label: '图表',
          grid: 6,
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

export default CurrencyConfig;
