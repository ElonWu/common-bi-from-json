import React, { useCallback } from 'react';
import { registerShape } from '@antv/g2';

import { Chart, ChartRenderer, ChartProps, ArrayChartItem } from './base';
import { textStyle } from './theme';
import { isArray } from '@/utils/type';

export const Pie = React.forwardRef(
  ({ chartKey, ...props }: ChartProps, ref) => {
    // 渲染配置
    const configChart = useCallback<ChartRenderer>(({ chart, source }) => {
      chart.clear(); // 由于地图的背景绘制也是 chart, 不能放到全局

      // 自动排序， 仅取前十
      chart.data(
        source
          .sort((prev: ArrayChartItem, next: ArrayChartItem) => prev.y - next.y)
          .slice(0, 10),
      );

      chart.coordinate('theta', { radius: 0.7, innerRadius: 0.55 });
      chart.axis(false);

      chart.interaction('element-active');

      chart.tooltip({
        showTitle: false,
        showMarkers: false,
      });

      chart.legend({
        position: 'bottom',
      });

      // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
      const sliceNumber = 0.0025;

      // 自定义 other 的图形，增加两条线
      registerShape('interval', 'slicePie', {
        draw(cfg, container) {
          const points = cfg.points;
          let path = [];
          if (Array.isArray(points) && points.length >= 3) {
            // @ts-ignore
            path.push(['M', points[0].x, points[0].y]);
            // @ts-ignore
            path.push(['L', points[1].x, points[1].y - sliceNumber]);
            // @ts-ignore
            path.push(['L', points[2].x, points[2].y - sliceNumber]);
            // @ts-ignore
            path.push(['L', points[3].x, points[3].y]);
            path.push('Z');
          }
          // @ts-ignore
          path = this.parsePath(path);

          return container.addShape('path', {
            attrs: {
              fill: cfg.color,
              path,
            },
          });
        },
      });

      chart
        .interval()
        .adjust('stack')
        .position('y')
        .color('x')
        .label('x', () => ({
          content: ({ x, y, format = '' }) =>
            `${x}${format ? ':' + format : ''}`,
          // style: textStyle,
        }))
        .style({ stroke: 'transparent', strokeWidth: 10 })
        .shape(source.length > 2 ? 'slicePie' : 'pie')
        .state({
          active: {
            style: (element) => {
              const shape = element.shape;
              return {
                lineWidth: 6,
                stroke: shape.attr('fill'),
                strokeOpacity: shape.attr('fillOpacity'),
              };
            },
          },
        });
    }, []);

    return (
      <Chart
        ref={ref}
        // @ts-ignore
        chartKey={`Pie-${chartKey}`}
        configChart={configChart}
        {...props}
      />
    );
  },
);
