import React, { useCallback } from 'react';
import { Chart, ChartRenderer, ChartProps } from './base';

export const BarGroup = React.forwardRef(
  ({ chartKey, ...props }: ChartProps, ref) => {
    // 渲染配置
    const configChart = useCallback<ChartRenderer>(({ chart, source }) => {
      chart.data(source);

      chart.scale('y', { nice: true });
      chart.coordinate().transpose();

      chart
        .interval()
        .position('x*y')
        .color('z')
        .adjust([
          {
            type: 'dodge',
            marginRatio: 0.2,
          },
        ])
        .style({ radius: [8, 8, 0, 0] });
    }, []);

    return (
      <Chart
        ref={ref}
        // @ts-ignore
        chartKey={`BarGroup-${chartKey}`}
        configChart={configChart}
        {...props}
      />
    );
  },
);
