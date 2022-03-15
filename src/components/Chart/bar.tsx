import React, { useCallback } from 'react';
import { Chart, ChartRenderer, ChartProps, ArrayChartItem } from './base';

export const Bar = React.forwardRef(
  ({ chartKey, ...props }: ChartProps, ref) => {
    // 渲染配置
    const configChart = useCallback<ChartRenderer>(({ chart, source }) => {
      chart.clear();

      // 条形图， 自动筛选前十、倒序
      const sortedData = source
        .sort((prev: ArrayChartItem, next: ArrayChartItem) => next.y - prev.y)
        .slice(0, 10)
        .reverse();

      chart.data(sortedData);

      chart.scale('y', { nice: true });
      chart.coordinate().transpose();

      chart
        .interval()
        .position('x*y')
        .style({ radius: [8, 8, 0, 0] });
    }, []);

    return (
      <Chart
        ref={ref}
        // @ts-ignore
        chartKey={`Bar-${chartKey}`}
        configChart={configChart}
        {...props}
      />
    );
  },
);
