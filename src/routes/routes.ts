import { ElonRoute } from '.';

const routes: ElonRoute[] = [
  {
    path: '/',
    key: 'layout',
    component: 'Layout',
    routes: [
      {
        index: true,
        key: 'overview',
        component: 'Home',
      },
      {
        path: '/newly',
        component: 'NewlyAnalyze',
        key: 'newly',
        title: '新增分析',
      },
      {
        path: '/active',
        component: 'ActiveAnalyze',
        key: 'active',
        title: '活跃分析',
      },
      {
        path: '/device',
        component: 'DeviceAnalyze',
        key: 'device',
        title: '设备分析',
      },
      {
        path: '/distribution',
        component: 'DistributionAnalyze',
        key: 'distribution',
        title: '活跃分布',
      },

      {
        path: '/currency',
        component: 'CurrencyAnalyze',
        key: 'currency',
        title: '货币分析',
      },

      // {
      //   key: 'lostUser',
      //   title: '流出用户',
      //   path: '/lostUser',
      //   component: 'LostUser',
      // },
      // {
      //   key: 'backUser',
      //   title: '回流用户',
      //   path: '/backUser',
      //   component: 'BackUser',
      // },

      {
        path: '*',
        key: 'notFount',
        component: 'NotFound',
      },
    ],
  },
];
export default routes;
