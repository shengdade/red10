import React from 'react';
import ReactEcharts from 'echarts-for-react';

function PieChart({ name, data, color }) {
  return (
    <ReactEcharts
      style={{ width: '100%', height: 180 }}
      option={{
        tooltip: {},
        color,
        series: [
          {
            name,
            type: 'pie',
            data,
            label: {
              position: 'inner'
            }
          }
        ]
      }}
    />
  );
}

export default PieChart;
