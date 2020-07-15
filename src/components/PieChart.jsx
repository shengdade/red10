import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { Fade } from 'react-reveal';

function PieChart({ source }) {
  const data = source.slice(1).map((player) => ({
    name: player[0],
    value: player[player.length - 1]
  }));

  const win = data.filter((d) => d.value > 0);
  const lose = data.filter((d) => d.value < 0);
  win.sort((a, b) => b.value - a.value);
  lose.sort((a, b) => b.value - a.value);

  const greens = ['#4caf50', '#8bc34a', '#cddc39'];
  const reds = ['#ff6d00', '#ff9100', '#ffab40'];

  const colors = [
    ...greens.slice(0, win.length),
    ...reds.slice(0, lose.length)
  ];

  return (
    <Fade bottom duration={1000} distance="40px">
      <ReactEcharts
        option={{
          tooltip: {},
          color: colors,
          series: [
            {
              name: 'Won',
              type: 'pie',
              data: win,
              center: ['25%', '50%'],
              label: {
                position: 'inner'
              }
            },
            {
              name: 'Lost',
              type: 'pie',
              data: lose,
              center: ['75%', '50%'],
              label: {
                position: 'inner'
              }
            }
          ]
        }}
      />
    </Fade>
  );
}

export default PieChart;
