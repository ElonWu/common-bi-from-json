import React, { useCallback } from 'react';
import { Chart, ChartRenderer, ChartProps } from './base';

export const AreaStack = React.forwardRef(
  ({ chartKey, ...props }: ChartProps, ref) => {
    // 渲染配置
    const configChart = useCallback<ChartRenderer>(({ chart, source }) => {
      chart.data(source);

      // 绘制堆叠面积图
      chart
        .area()
        .position('x*y')
        .adjust('stack')
        .color('z')
        .style({ fillOpacity: 0.8 });

      chart.legend({ position: 'bottom' });
    }, []);

    return (
      <Chart
        ref={ref}
        // @ts-ignore
        chartKey={`AreaStack-${chartKey}`}
        configChart={configChart}
        {...props}
      />
    );
  },
);
