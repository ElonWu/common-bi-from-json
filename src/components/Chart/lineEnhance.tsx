import React, { useCallback } from 'react';
import { colors } from '.';

import { Chart, ChartRenderer, ChartProps } from './base';
import { colors10 } from './theme';

export const LineEnhance = React.forwardRef(
  ({ chartKey, ...props }: ChartProps, ref) => {
    // 渲染配置
    const configChart = useCallback<ChartRenderer>(({ chart, source }) => {
      chart.clear();

      chart.data(source);

      // 绘制线图
      chart
        .line()
        .position('x*y')
        .tooltip(false) // 点图和线图不显示 tooltip
        .shape('smooth')
        .size(5)
        .style({
          lineCap: 'round',
          lineJoin: 'round',
          shadowColor: `${colors10[0]}25`,
          shadowBlur: 4,
          shadowOffsetX: 2,
          shadowOffsetY: 12,
        });

      // 绘制面积图
      chart
        .area()
        .position('x*y')
        .shape('smooth')
        .color(`l(90) 0:${colors.primary[400]} 1:${colors.blue[400]}66`);

      // 绘制点图
      chart
        .point()
        .position('x*y')
        .tooltip(false) // 点图和线图不显示 tooltip
        .size(3);

      chart.legend({
        position: 'bottom',
      });
    }, []);

    return (
      <Chart
        ref={ref}
        // @ts-ignore
        chartKey={`LineEnhance-${chartKey}`}
        configChart={configChart}
        {...props}
      />
    );
  },
);
