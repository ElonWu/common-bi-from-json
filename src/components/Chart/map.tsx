import React, { useCallback, useEffect, useState } from 'react';
import DataSet from '@antv/data-set';

import { Chart, ChartRenderer, ChartProps } from './base';
import { colors20 } from './theme';

import { isNil } from '@/utils/type';
import useApi from '@/hooks/useApi';
import Request from '@/utils/request';

// 获取 g2 的地图绘制 json

export const gwApi = new Request('https://gw.alipayobjects.com', {
  onSuccess: (data: any) => data,
  onError: (err: any) => console.log(err),
});

const getMapData = ({ type }: { type: MapType }) =>
  gwApi.get(`/os/antvdemo/assets/data/${type}.geo.json`);

export type MapType = 'world' | 'china-provinces';
export type LocateType = 'REGION' | 'LNGLAT' | 'NAME';

export const Map = React.forwardRef(
  (
    {
      chartKey,
      locateType,
      renderDataView,
      mapType,
      ...props
    }: ChartProps & {
      locateType: LocateType;
      renderDataView: any;
      mapType: MapType;
    },
    ref,
  ) => {
    const { data: mapData } = useApi(
      getMapData,
      { type: mapType || 'world' },
      // {
      //   dedupingInterval: 1000 * 60 * 60 * 24, // 24 小时内复用数据
      // },
    );

    // 渲染配置
    const configChart = useCallback<ChartRenderer>(
      async ({ chart, source }) => {
        if (isNil(mapData)) return;

        const ds = new DataSet();

        // 图表基础配置
        chart.scale({
          x: { sync: true },
          y: { sync: true },
        });
        chart.coordinate('rect').reflect('y');
        chart.legend(false);
        chart.axis(false);

        // TODO 更新 tooltip 自定义样式
        chart.tooltip({
          showTitle: false,
          shared: true,
          showMarkers: false,
          containerTpl:
            '<div class="g2-tooltip"><table class="g2-tooltip-list"></table></div>',
          itemTpl:
            '<tr data-index="{index}"><td style="padding:5px;background-color:#545454;">{name}</td><td style="padding:5px;background-color:#fff;color:#000;">{value}</td></tr>',
          domStyles: {
            'g2-tooltip': {
              borderRadius: '2px',
              backgroundColor: '#DDDDDD',
              padding: 0,
              border: '1px solid #333333',
            },
          },
        });

        // 绘制地图背景
        const mapView = ds
          .createView('map')
          .source(mapData, {
            type: 'GeoJSON',
          })
          .transform({
            type: 'geo.projection',
            projection: 'geoMercator',
            as: ['lng', 'lat', 'centroidX', 'centroidY'],
          });
        const bgView = chart.createView();
        bgView.data(mapView.rows);
        bgView.tooltip(false);

        // 边框
        bgView.polygon().position('lng*lat').style({
          fill: colors20[23],
          stroke: colors20[0],
          lineWidth: 0.4,
          fillOpacity: 0.75,
        });

        const dataView = ds.createView().source(source);

        switch (locateType) {
          // 按名称定位数据点
          case 'NAME':
            dataView.transform({
              geoDataView: mapView,
              field: 'name',
              type: 'geo.region', // TODO 改为按名称查找

              as: ['lng', 'lat'],
            });
            break;
          // 按国家或地区名定位数据点
          case 'REGION':
            dataView.transform({
              geoDataView: mapView,
              field: 'region',
              type: 'geo.region',
              as: ['lng', 'lat'],
            });
            break;
          // 按经纬度定位数据点
          case 'LNGLAT':
            dataView.transform({
              type: 'map',
              callback: (obj) => {
                const projectedCoord = mapView.geoProjectPosition(
                  [obj.lng * 1, obj.lat * 1],
                  'geoMercator',
                );
                obj.lng = projectedCoord[0];
                obj.lat = projectedCoord[1];
                return obj;
              },
            });
            break;
        }

        renderDataView && renderDataView({ chart, dataView, source, mapView });

        chart.render();
      },
      [mapData, locateType, renderDataView],
    );

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
