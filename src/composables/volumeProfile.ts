import { SeriesOption } from 'echarts';
import { XAXisOption, YAXisOption } from 'echarts/types/dist/shared';
import { computed } from 'vue-demi';

export function useVolumeProfile(useVolumeProfile: boolean) {
  const volumeProfileSeries = computed<SeriesOption[]>(() => {
    return useVolumeProfile
      ? [
          {
            name: 'VolumeProfile',
            type: 'bar',
            // seriesLayoutBy: 'column',
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
              color: '#777777',
            },
            large: true,
            data: [200, 200, 500, 66],
            // encode: {
            //   y: colOpen,
            //   x: colVolume,
            // },
          },
        ]
      : [];
  });

  const volumeProfileXaxis = computed<XAXisOption[]>(() => {
    return useVolumeProfile
      ? [
          {
            // VolumeProfile
            type: 'value',
            gridIndex: 2,
            scale: true,
            boundaryGap: false,
            axisLine: { onZero: false },
            axisTick: { show: false },
            axisLabel: { show: false },
            axisPointer: {
              label: { show: false },
            },
            splitLine: { show: false },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax',
          },
        ]
      : [];
  });
  const volumeProfileYaxis = computed<YAXisOption[]>(() => {
    return useVolumeProfile
      ? [
          {
            scale: true,
            gridIndex: 2,
            splitNumber: 0,
            type: 'category',
            name: 'volumeProfile',
            nameLocation: 'middle',

            // position: 'right',
            nameGap: 55,
            axisLabel: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
          },
        ]
      : [];
  });

  return {
    volumeProfileSeries,
    volumeProfileXaxis,
    volumeProfileYaxis,
  };
}
