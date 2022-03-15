export interface IDataCard {
  key: string; // 主键， 便于前端增加固定魔改
  title: string;
  preview: (PreviewList & PreviewItem)[]; // 展示配置
  downloadable: boolean; // 是否可下载图表，前提是 preview 有 table 展示类和columns
  privateForms?: PrivateForm[]; // 私有表单
  globalForms?: GlobalForm[]; // 全部表单
  fetcher?: Function; // 数据查看的 fetcher
  downloadFetcher?: Function; // 数据下载的 fetcher
  initialValues?: {
    // 表单默认值
    [key: string]: any;
  };
}

// 表单， 每个表单固定一个组件， 可根据业务扩充
// 私有表单
export type PrivateForm =
  | 'timeDimension'
  | 'characterDimension'
  | 'remainDimension'
  | 'deviceDimension'
  | 'levelDimension'
  | 'currencyDimension'
  | 'losingDay'
  | 'backDays'
  | 'remainDays'
  | 'ltvDays'
  | 'type'
  | 'levelTrace'
  | 'currencyTrace';

// 公共表单
export type GlobalForm =
  | 'dateRange'
  | 'serverIds'
  | 'os'
  | 'packageNames'
  | 'distributors'
  | 'channels'
  | 'city'
  | 'rechargeUser';

// 展示类型， 每一种独立写一个展示组件， 可根据业务扩充
export type PreviewType =
  | string
  | ('line' | 'table' | 'pie' | 'bar' | 'multline' | 'bargroup');

// 有多个子组件的展示类型
export interface PreviewList {
  type: PreviewType;
  label: string;
  children?: PreviewItem[];
}
// 单个子组件的展示类型
export interface PreviewItem {
  label: string;
  type: PreviewType;
  grid?: GridShare;

  // 图表
  x?: string;
  y?: string;
  z?: string;

  // 表格
  page?: number;
  pageSize?: number;
  columns?: Column[];
}
// 多个子组件的Grid分列
export type GridShare = 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1;

// 图表类型的 Column 定义
export interface Column {
  key: string;
  title: string;
  custom?: boolean; // 需要自定义渲染的， 须根据 DataCard 的 key 单独定制
  excel?: boolean; // 允许导出 Excel 的， 如果有特定的 Excel 导出规则， 则需要自定义
}
