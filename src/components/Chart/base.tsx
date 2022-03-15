import React, {
  useMemo,
  useRef,
  useEffect,
  useLayoutEffect,
  MutableRefObject,
  Ref,
} from 'react';
import { Chart as G2Chart } from '@antv/g2';

// utils
import { isValidArray, isFunction, isArray } from '@/utils/type';

import {
  colors10,
  registerChartTheme,
  colors,
  darkTooltip,
  tooltip,
} from './theme';
import useIsDarkMode from '@/store/darkMode';
import useMediaQuery from '@/store/mediaQuery';
import { Empty } from '@douyinfe/semi-ui';
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from '@douyinfe/semi-illustrations';

export interface ChartEvents {
  [key: string]: (e: any) => void;
}

export interface ArrayChartItem {
  x: string;
  y: number;
  z?: number | string;
}

export type ChartRenderer = ({
  chart,
  source,
}: {
  chart: G2Chart;
  source: any;
}) => void;

export interface ChartProps {
  chartKey: string;
  loading?: boolean;
  dataSource?: any;

  configChart?: ChartRenderer;
  overrideConfigChart?: ChartRenderer;
  setConfig?: ChartRenderer;

  events?: ChartEvents;
  width?: number | string;
  height?: number;

  dataMarkers?: DataMarker[];

  theme?: 'light' | 'dark';
}

export interface UseChartProps {
  chartKey: string;
  events: ChartEvents;
  dataSource: any;
  width?: number;
  height?: number;
  theme?: 'light' | 'dark';
}

export interface UseChartUpdateProps {
  chartRef: MutableRefObject<G2Chart | undefined | null>;
  source: any;
  setConfig?: ChartRenderer;
  configChart?: ChartRenderer;
  dataMarkers?: DataMarker[];
  // theme?: 'light' | 'dark';
  isDarkMode: boolean;
}

export interface DataMarker {
  x: number | string;
  content: string;
}

// 设置数据标识
const setDataMarkers = ({
  chart,
  dataMarkers,
  source,
}: {
  chart: G2Chart;
  dataMarkers: DataMarker[] | undefined;
  source: any;
}): void => {
  if (isValidArray(dataMarkers)) {
    // @ts-ignore
    dataMarkers.forEach(({ x, content }) => {
      const position = source.find((data: ArrayChartItem) => data.x === x);

      if (position) {
        chart.annotation().dataMarker({
          animate: true,
          point: {
            style: {
              lineWidth: 1,
              stroke: colors10[3],
            },
          },
          line: {
            length: 32,
            style: {
              lineWidth: 1,
              stroke: colors10[3],
            },
          },
          text: {
            content,
            autoEllipsis: true, // 自动ellipsis
            // 文本样式
            style: {
              textAlign: 'center',
              fontSize: 16,
              fill: colors10[3],
            },
            // 背景样式
            background: {
              padding: 4,
              style: { fill: '#f5f5f5', fillOpacity: 0.4 },
            },
          },
          position,
        });
      }
    });
  }
};

// 初始化 chart 对象
const useChart = ({
  chartKey,
  events = {},
  dataSource,
  theme,
  ...rest
}: UseChartProps) => {
  // 图表实例
  const chartRef = useRef<G2Chart | null | undefined>();

  // 初始化
  useLayoutEffect(() => {
    // 注册主题
    registerChartTheme();

    const chart = new G2Chart({
      container: `ElonChart-${chartKey}`,
      appendPadding: 8,
      syncViewPadding: true,
      autoFit: true,
      height: 420,
      ...rest,
    });
    // 初始化配置
    chart.tooltip((theme === 'dark' ? darkTooltip : tooltip) as any);

    chartRef.current = chart;

    return () => chart.destroy();
  }, []);

  // 事件绑定
  useEffect(() => {
    const chart = chartRef?.current;

    if (!chart) return;

    // 事件绑定
    const eventKeys = Object.keys(events);

    if (isValidArray(eventKeys)) {
      eventKeys.forEach((eventKey) => {
        const callback = events[eventKey];
        // console.log(`attaching ${eventKey}`);
        if (isFunction(callback)) chart.on(eventKey, callback);
      });
    }

    // 事件解绑
    return () => {
      if (isValidArray(eventKeys)) {
        eventKeys.forEach((eventKey) => {
          const callback = events[eventKey];
          if (isFunction(callback)) chart.off(eventKey, callback);
        });
      }
    };
  }, [events, dataSource]);

  return chartRef;
};

// chart 动态配置
const useChartUpdate = ({
  chartRef,
  source,
  setConfig,
  dataMarkers,
  configChart,
  isDarkMode,
}: UseChartUpdateProps) => {
  useEffect(() => {
    const chart = chartRef?.current;
    if (!chart) return;

    const onUpdate = async () => {
      // 预设的图表配置， 如 LineEnhance
      // @ts-ignore
      if (isFunction(configChart)) await configChart({ chart, source });
      // 消费组件时 定义配置项
      // @ts-ignore
      if (isFunction(setConfig)) await setConfig({ chart, source });

      // 添加 dataMarker
      await setDataMarkers({ chart, dataMarkers, source });

      // 更新主题，目前只有 light dark
      chart.theme(isDarkMode ? 'dark' : 'light');

      chart.render();
      chart.forceFit();
    };

    onUpdate();
  }, [chartRef, source, configChart, dataMarkers, isDarkMode]);
};

// dom 渲染 chart
export const Chart = React.forwardRef(
  (
    {
      chartKey,
      loading,
      dataSource,

      configChart,
      overrideConfigChart,
      setConfig,

      dataMarkers,
      theme = 'light',

      events = {},
      height,
      width = '100%',
    }: ChartProps,
    ref,
  ) => {
    // 格式化 source
    const source = useMemo(
      () =>
        isValidArray(dataSource) || isValidArray(Object.keys(dataSource))
          ? dataSource
          : [],
      [dataSource],
    );

    // 加载完成且数据为空
    const empty = useMemo(
      () => !loading && isArray(source) && !isValidArray(source),
      [loading, source],
    );

    const { value: isDarkMode } = useIsDarkMode();

    const {
      value: [isMobile, isTablet],
    } = useMediaQuery();

    // 图表实例
    const chartRef = useChart({
      chartKey,
      events,
      dataSource,
      height: height || (isMobile ? 240 : isTablet ? 300 : 420),
      theme: isDarkMode ? 'dark' : 'light',
    });

    // 更新渲染
    useChartUpdate({
      chartRef,
      source,
      configChart: overrideConfigChart || configChart,
      setConfig,
      dataMarkers,
      isDarkMode,
    });

    // 实际渲染的 DOM
    return (
      <div
        id={`ElonChart-${chartKey}`}
        ref={ref as Ref<HTMLDivElement>}
        className="flex items-center justify-center relative"
        style={{ width, height }}
      >
        {empty && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <Empty
              image={
                <IllustrationConstruction style={{ width: 150, height: 150 }} />
              }
              darkModeImage={
                <IllustrationConstructionDark
                  style={{ width: 150, height: 150 }}
                />
              }
              title="暂无数据"
            />
          </div>
        )}
      </div>
    );
  },
);
