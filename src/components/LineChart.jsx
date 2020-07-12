import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { Fade } from 'react-reveal';

function LineChart({ source }) {
  return (
    <Fade bottom duration={1000} distance="40px">
      <ReactEcharts
        notMerge={true}
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
    </Fade>
  );
}

export default LineChart;
