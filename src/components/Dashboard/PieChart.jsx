import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // This imports the necessary chart types

const PieChart = ({ productLength, orderLength }) => {
  const data = {
    labels: ['Products', 'Orders'],
    datasets: [
      {
        label: '# of Votes',
        data: [productLength, orderLength],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
