import React, { useCallback } from 'react';

import { Chart, ChartRenderer, ChartProps } from './base';

export const Point = React.forwardRef(
  ({ chartKey, ...props }: ChartProps, ref) => {
    // 渲染配置
    const configChart = useCallback<ChartRenderer>(({ chart, source }) => {
      chart.clear();

      chart.data(source);

      let temp = chart.point().shape('circle').position('x*y');
      // 绘制点图
      if ('z' in source?.[0]) {
        temp = temp.color('z');
      }

      // 绘制点图
      if ('size' in source?.[0]) {
        temp = temp.size('size', [4, 36]);
      } else {
        temp = temp.size(5);
      }

      chart.legend({
        position: 'bottom',
      });
    }, []);

    return (
      <Chart
        ref={ref}
        // @ts-ignore
        chartKey={`Point-${chartKey}`}
        configChart={configChart}
        {...props}
      />
    );
  },
);
