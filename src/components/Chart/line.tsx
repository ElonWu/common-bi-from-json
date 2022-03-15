import React, { useCallback } from 'react';
import { Chart, ChartRenderer, ChartProps } from './base';

export const Line = React.forwardRef(
  ({ chartKey, ...props }: ChartProps, ref) => {
    // 渲染配置
    const configChart = useCallback<ChartRenderer>(({ chart, source }) => {
      chart.data(source);
      // 绘制线图
      chart.line().position('x*y').shape('smooth').size(5);

      chart.legend({
        position: 'bottom',
      });
    }, []);

    return (
      <Chart
        ref={ref}
        // @ts-ignore
        chartKey={`Line-${chartKey}`}
        configChart={configChart}
        {...props}
      />
    );
  },
);
