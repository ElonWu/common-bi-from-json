import React, { useCallback } from 'react';
import DataSet from '@antv/data-set';

import { Chart, ChartRenderer, ChartProps } from './base';
import { notNil } from '@/utils/type';
import { colors10 } from './theme';

export const Funnel = React.forwardRef(
  (
    {
      chartKey,
      width = 400,
      height = 400,
      reverseColor,
      baseColor,
      base,
      ...props
    }: ChartProps & {
      reverseColor: string;
      baseColor: string;
      base: string;
    },
    ref,
  ) => {
    // 渲染配置
    const configChart = useCallback<ChartRenderer>(
      ({ chart, source }) => {
        chart.clear();

        // arc diagram layout
        const ds = new DataSet();
        const dv = ds.createView().source(source);
        dv.transform({
          type: 'map',
          callback(row) {
            row.percent = row.y / (base || source[0].y);
            return row;
          },
        });

        chart.data(dv.rows);

        // ============= 绘图

        chart.axis(false);

        chart.scale('percent', {
          alias: '占比',
          formatter: (val) => `${val * 100}%`,
        });

        chart.tooltip({
          showTitle: true,
          showMarkers: false,
          showCrosshairs: false,
        });

        chart.coordinate('rect').transpose().scale(1, -1);

        chart
          .interval()
          .adjust('symmetric')
          .position('x*percent')
          .shape('funnel')
          .color(
            'x',
            genColors(source?.length, notNil(reverseColor), baseColor),
          )
          .tooltip('y*percent');

        chart.on('beforepaint', () => {
          chart.annotation().clear(true);
          const chartData = chart.getData();
          // 中间标签文本
          chartData.forEach((obj) => {
            chart.annotation().text({
              top: true,
              position: {
                x: obj.x,
                percent: 'median',
              },
              content: `${obj.x}-${obj.percent * 100}%`, // 显示的文本内容
              style: {
                stroke: null,
                fill: '#fff',
                textAlign: 'center',
              },
            });
          });
        });

        // 去除 legend 过滤
        chart.removeInteraction('legend-filter');

        // chart.interaction('element-active');
      },
      [reverseColor, baseColor],
    );

    return (
      <div style={{ width, height, margin: 'auto' }}>
        <Chart
          ref={ref}
          // @ts-ignore
          chartKey={`Funnel-${chartKey}`}
          configChart={configChart}
          height={height}
          {...props}
        />
      </div>
    );
  },
);

const genColors = (length = 1, reverse = false, baseColor = colors10[0]) => {
  const color = baseColor;

  let result = [color];

  // 根据颜色依次递减透明度
  const b = 25;
  const a = (255 - b) / Math.pow(length + 1, 2);

  for (let i = 1; i < length; i++) {
    // 颜色 16 进制
    // const opacity = Math.floor(255 - (a * Math.pow(i, 2) + b));
    // result.push(`${color}${opacity.toString(16)}`);

    // 颜色 rgb
    const opacity = Math.floor(255 - (a * Math.pow(i, 2) + b));
    const insert = color
      .replace(')', `,${opacity / 255})`)
      .replace('rgb', 'rgba');

    result.push(insert);
  }

  return reverse ? result.reverse() : result;
};
