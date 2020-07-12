import React from 'react';
import ReactEcharts from 'echarts-for-react';

function LineChart({ source }) {
  return (
    <ReactEcharts
      option={{
        legend: {},
        tooltip: {
          trigger: 'axis'
        },
        dataset: {
          source
        },
        grid: {
          left: '3%',
          right: '3%'
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        dataZoom: {},
        series: [
          { type: 'line', smooth: true, seriesLayoutBy: 'row' },
          { type: 'line', smooth: true, seriesLayoutBy: 'row' },
          { type: 'line', smooth: true, seriesLayoutBy: 'row' },
          { type: 'line', smooth: true, seriesLayoutBy: 'row' }
        ]
      }}
    />
  );
}

export default LineChart;