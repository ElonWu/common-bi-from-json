import type {
  Column,
  PreviewItem,
  PreviewList,
} from '@/components/DataCard/type';
import useMediaQuery from '@/store/mediaQuery';
import { Empty, Spin, Table } from '@douyinfe/semi-ui';
import type { FC } from 'react';
import { Line, Pie, Bar } from '@/components/Chart';
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from '@douyinfe/semi-illustrations';

const Preview: FC<{
  primaryKey: string;
  config: PreviewList & PreviewItem;
  dataSource: any[];
  loading: boolean;
  error: boolean;
}> = ({ primaryKey, config, dataSource, loading, error }) => {
  const {
    value: [isMobile],
  } = useMediaQuery();

  // 无效配置
  if (!config) return null;

  // 报错
  if (error)
    return (
      <div
        className="flex items-center justify-center p-2 bg-gray-50 dark:bg-gray-300 rounded-sm"
        style={{ height: 420 }}
      >
        <Empty
          image={
            <IllustrationConstruction style={{ width: 150, height: 150 }} />
          }
          darkModeImage={
            <IllustrationConstructionDark style={{ width: 150, height: 150 }} />
          }
          title="请求发生错误"
        />
      </div>
    );

  // 加载中
  if (loading)
    return (
      <div
        className="flex flex-col items-center justify-center p-4 space-y-4 bg-gray-50 rounded-sm"
        style={{ height: 420 }}
      >
        <Spin size="large" spinning={loading} />
        <p className="text-bold text-md text-gray-800">数据加载中...</p>
      </div>
    );

  // 多列
  if (config.children) {
    return (
      <div
        className={
          isMobile
            ? 'flex flex-col items-stretch justify-start space-y-4'
            : 'flex items-stretch justify-start space-x-4'
        }
      >
        {config.children.map((config: PreviewItem) => (
          <div
            className="flex items-stretch justify-start p-2 bg-gray-50 dark:bg-gray-200 rounded-sm"
            key={`${primaryKey} - ${config.type}`}
            style={{ flex: config.grid, minHeight: isMobile ? 248 : 320 }}
          >
            <PreviewItemRenderer
              primaryKey={`${primaryKey} - ${config.type}`}
              config={config}
              dataSource={dataSource}
              loading={loading}
            />
          </div>
        ))}
      </div>
    );
  }

  // 单列
  return (
    <div className="flex items-stretch justify-start p-2 bg-gray-50 dark:bg-gray-200 rounded-sm">
      <PreviewItemRenderer
        primaryKey={`${primaryKey} - ${config.type}`}
        config={config}
        dataSource={dataSource}
        loading={loading}
      />
    </div>
  );
};

const PreviewItemRenderer: FC<{
  primaryKey: string;
  config: PreviewItem;
  dataSource: any[];
  loading: boolean;
}> = ({ primaryKey, config, dataSource, loading }) => {
  if (!Array.isArray(dataSource)) return null;

  if (config.type === 'table') {
    const columns = (config.columns || []).map((col: Column) => ({
      ...col,
      dataIndex: col.key,
    }));

    return (
      <Table columns={columns} loading={loading} dataSource={dataSource} />
    );
  }

  if (config.type === 'line') {
    return (
      <Line
        chartKey={`Line-${primaryKey}`}
        loading={loading}
        dataSource={formatChartDate(dataSource, config)}
      />
    );
  }

  if (config.type === 'pie') {
    return (
      <Pie
        chartKey={`Pie-${primaryKey}`}
        loading={loading}
        dataSource={formatChartDate(dataSource, config)}
      />
    );
  }

  if (config.type === 'bar') {
    return (
      <Bar
        chartKey={`Bar-${primaryKey}`}
        loading={loading}
        dataSource={formatChartDate(dataSource, config)}
      />
    );
  }

  return <div className="p-2">preview: {JSON.stringify(config)}</div>;
};

const formatChartDate = (dataSource: any[], config: PreviewItem) => {
  return dataSource.map((el) => {
    let item: { x?: string; y?: string; z?: string } = {};
    if ('x' in config && config.x) item.x = el[config.x];
    if ('y' in config && config.y) item.y = el[config.y];
    if ('z' in config && config.z) item.z = el[config.z];
    return item;
  });
};

export default Preview;
