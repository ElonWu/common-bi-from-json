export interface IDataCard {
  key: string; // 主键， 便于前端增加固定魔改
  title: string; // 标题
  description?: string; // 描述
  preview: (PreviewList & PreviewItem)[]; // 展示配置
  downloadable: boolean; // 是否可下载图表，前提是 preview 有 table 展示类和columns
  privateForms?: PrivateForm[]; // 私有表单配置
  globalForms?: GlobalForm[]; // 全部表单配置
  fetcher?: Function; // 数据查看的 fetcher
  downloadFetcher?: Function; // 数据下载的 fetcher
  initialValues?: {
    // 私有表单默认值
    [key: string]: any;
  };
}

// 表单， 每个表单固定一个组件， 可根据业务扩充
// 私有表单
export type PrivateForm =
  | 'timeDimension' // 时间维度
  | 'characterDimension' // 特性维度
  | 'remainDimension' // 留存维度
  | 'deviceDimension' // 设备维度
  | 'levelDimension' // 等级维度
  | 'currencyDimension' // 货币维度
  | 'losingDay' // 流失天数
  | 'backDays' // 回流天数
  | 'remainDays' // 留存天数
  | 'ltvDays' // ltv 天数
  | 'levelTrace' // 等级类型
  | 'currencyTrace' // 货币类型
  | 'type'; // 留存类型 ， 可能会改为维度

// 公共表单
export type GlobalForm =
  | 'dateRange' // 日期范围
  | 'serverIds' // 服务器
  | 'os' // 平台
  | 'packageNames' // 包名
  | 'distributors' // 发行商
  | 'channels' // 渠道
  | 'city' // 城市
  | 'rechargeUser'; // 充值用户

// 展示类型， 每一种独立写一个展示组件， 可根据业务扩充
export type PreviewType =
  | string // 自定义的任意名称， 可能无法渲染
  | ('line' | 'table' | 'pie' | 'bar' | 'multline' | 'bargroup'); // 固定的组件名称， 方便前端意义实现组件

// 有多个子组件的展示类型
export interface PreviewList {
  // 用于切换展示的组件
  type: PreviewType;
  label: string;

  children?: PreviewItem[];
}
// 单个子组件的展示类型
export interface PreviewItem {
  // 用于切换展示的组件
  label: string;
  type: PreviewType;

  // 在组合中占据的比例
  grid?: GridShare;

  // 图表
  x?: string;
  y?: string;
  z?: string;
  zMap?: { [key: string]: string }; // z 值的映射文本，不设置可直接使用返回的字段
  scaleY?: string; // y 轴的自定义文本

  // 表格
  page?: number;
  pageSize?: number;
  columns?: Column[];
}
// 多个子组件的Grid分列
export type GridShare = 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1;

// 图表类型的 Column 定义
export interface Column {
  key: string; // 字段 key
  title: string; // 字段展示标题
  custom?: boolean; // 需要自定义渲染的， 须根据 DataCard 的 key 单独定制
  excel?: boolean; // 允许导出 Excel 的， 如果有特定的 Excel 导出规则， 则需要自定义
}
