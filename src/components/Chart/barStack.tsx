import React, { useCallback } from 'react';
import { Chart, ChartRenderer, ChartProps, ArrayChartItem } from './base';

export const BarStack = React.forwardRef(
  ({ chartKey, ...props }: ChartProps, ref) => {
    // 渲染配置
    const configChart = useCallback<ChartRenderer>(({ chart, source }) => {
      // 堆叠时， 自动排序
      chart.data(
        source
          .slice()
          .sort(
            (prev: ArrayChartItem, next: ArrayChartItem) => next.y - prev.y,
          ),
      );

      chart.scale('y', { nice: true });
      chart.coordinate().transpose();

      // 绘制堆叠的条形图
      chart
        .interval()
        .position('x*y')
        .style({ radius: [2, 2, 2, 2] })
        .adjust('stack')
        .color('z');
    }, []);

    return (
      <Chart
        ref={ref}
        // @ts-ignore
        chartKey={`BarStack-${chartKey}`}
        configChart={configChart}
        {...props}
      />
    );
  },
);
