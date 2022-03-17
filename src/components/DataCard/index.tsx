import { useCallback, useMemo, useState } from 'react';
import type { IDataCard, PreviewItem, PreviewList, Column } from './type';

import { Select, IconButton, Toast, Tooltip } from '@douyinfe/semi-ui';
import {
  IconDownload,
  IconInfoCircle,
  IconRefresh,
} from '@douyinfe/semi-icons';
import Preview from './Preview';

import { notNil } from '@/utils/type';
import useApi from '@/hooks/useApi';

import { RequestParams } from '@/api/bi';
import exportExcel from '@/utils/excel';
import useGlobalFormsState from '@/store/globalForms';
import { format, subDays } from 'date-fns';
import CardFrom from './CardForm';

const DataCard = ({ config }: { config: IDataCard }) => {
  // 当前渲染配置
  const [preview, setPreview, previewOptions] = usePreview(config?.preview);

  const previewConfig = useMemo(() => {
    return config?.preview.find((item) => item.type === preview);
  }, [preview, config?.preview]);

  // 局部表单
  const [filters, setFilters] = useState(config?.initialValues || {});
  // 全局表单
  const { value: globalFormValues } = useGlobalFormsState();

  // 请求 payload
  const requestPayload = useMemo(() => {
    let payload: any = {
      ...filters, // 将私有表单收集到 payload
    };
    // 将公用表单收集到 payload
    if (config?.globalForms) {
      for (let key of config?.globalForms) {
        if (key in globalFormValues) {
          payload[key] = globalFormValues[key];
        }
      }
    }

    // 格式化所有表单数据到 requestPayload
    const requestPayload = {
      condition: {},
      dimensions: [],
    } as unknown as RequestParams;

    for (let key of Object.keys(payload)) {
      if (key === 'dateRange') {
        requestPayload.condition.startDate = format(
          payload[key][0],
          'yyyy-MM-dd',
        );
        requestPayload.condition.endDate = format(
          payload[key][1],
          'yyyy-MM-dd',
        );
      } else if (key.endsWith('Dimension')) {
        if (typeof payload[key] === 'string') {
          requestPayload.dimensions.push(payload[key]);
        }
      } else if (key === 'type') {
        if (typeof payload[key] === 'string') {
          requestPayload.type = payload[key];
        }
      } else {
        // @ts-ignore
        requestPayload.condition[key] = payload[key];
      }
    }

    // 确保有时间范围
    if (!requestPayload.condition.startDate) {
      requestPayload.condition.startDate = format(new Date(), 'yyyy-MM-dd');
    }

    if (!requestPayload.condition.endDate) {
      requestPayload.condition.endDate = format(
        subDays(new Date(), 7),
        'yyyy-MM-dd',
      );
    }

    return requestPayload;
  }, [filters, globalFormValues, config.globalForms]);

  // 发起请求
  const {
    data = [],
    loading,
    error,
    reload,
  } = useApi(config.fetcher as any, requestPayload);

  // 是否允许下载
  const canDownload = useMemo(() => {
    return (
      config?.downloadable &&
      config.downloadFetcher &&
      config?.preview?.find((item) => {
        // @ts-ignore
        if (item.type === 'table' && item?.columns?.length > 0) return true;
      })
    );
  }, [config?.downloadable, config?.preview]);

  // 导出为 excel
  const onDownload = useCallback(async () => {
    if (!config.downloadFetcher) {
      Toast.error('未配置数据导出的接口');
      return;
    }

    const previewConfig = config.preview.find((item) => item.type === 'table');
    if (!previewConfig?.columns || previewConfig.columns.length === 0) {
      Toast.error('未配置数据导出的列');
      return;
    }

    // 获取导出数据
    const dataSource = await config.downloadFetcher(requestPayload);
    if (dataSource.length === 0) {
      Toast.warning('暂无数据可导出');
      return;
    }

    // 转换为导出的列配置
    const columns: any[] = previewConfig.columns
      .filter((col: Column) => Boolean(col.excel))
      .map((col: Column) => {
        return {
          header: col.title,
          key: col.key,
        };
      });

    // 触发下载导出文件
    exportExcel({
      dataSource,
      columns,
      title: config?.title,
    });
  }, [config, requestPayload]);

  const multipleDemension = useMemo(() => {
    return requestPayload?.dimensions?.length > 1;
  }, [requestPayload]);

  return (
    <div className="w-full p-4 rounded-md flex flex-col space-y-4 items-stretch justify-start min-w-0 bg-white dark:bg-gray-100 shadow-md">
      {/* 头部 */}
      <div
        className="flex items-center justify-between border-b pb-4"
        style={{ borderColor: '#ededed99' }}
      >
        {/* 标题 */}
        <div className="flex items-center justify-start space-x-2">
          <h3 className="font-bold text-md text-gray-800">
            {config.title} - {multipleDemension ? '多维度' : '单维度'}
          </h3>

          {config.description && (
            <Tooltip
              trigger="hover"
              position="right"
              showArrow
              content={<p className="text-sm">{config.description}</p>}
            >
              <IconInfoCircle size="small" className="text-primary-500" />
            </Tooltip>
          )}
        </div>
        {/* 通用操作 */}
        <div className="flex space-x-2 items-center justify-end">
          {notNil(reload) && (
            <IconButton
              onClick={reload}
              loading={loading}
              className="w-8 h-8 rounded-full bg-gray-50"
              icon={<IconRefresh />}
            />
          )}
          {canDownload && (
            <IconButton
              onClick={onDownload}
              loading={loading}
              className="w-8 h-8 rounded-full bg-gray-50"
              icon={<IconDownload />}
            />
          )}

          {previewOptions && previewOptions?.length > 1 && (
            <Select
              value={preview}
              optionList={previewOptions as any[]}
              onChange={setPreview as any}
            />
          )}
        </div>
      </div>

      {/* 表单 */}
      {config?.privateForms?.length && (
        <CardFrom
          value={filters}
          onChange={setFilters}
          config={config}
          loading={loading}
        />
      )}

      {/* 渲染 */}
      {previewConfig && (
        <Preview
          primaryKey={config.key}
          config={previewConfig}
          dataSource={data as any[]}
          loading={loading}
          error={Boolean(error)}
        />
      )}
    </div>
  );
};

export default DataCard;

const usePreview = (previews: (PreviewItem | PreviewList)[]) => {
  const { options: previewOptions, defaultValue: defaultPreview } =
    useMemo(() => {
      if (!Array.isArray(previews) || previews.length === 0) {
        return {
          options: [],
          defaultValue: undefined,
        };
      }
      return {
        options: previews.map(({ type, label }) => ({
          value: type,
          label,
        })),
        defaultValue: previews[0].type,
      };
    }, [previews]);

  const [preview, setPreview] = useState(defaultPreview);

  return [preview, setPreview, previewOptions];
};
