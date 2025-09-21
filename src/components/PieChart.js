
import React from 'react';

const PieChart = ({ data }) => {
  // Default data if none provided
  const chartData = data || [
    { label: 'Resolved', value: 65, color: '#4CAF50' },
    { label: 'Failed', value: 15, color: '#F44336' },
    { label: 'Pending', value: 20, color: '#FFC107' }
  ];

  // Calculate total for percentages
  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  
  // Generate SVG path data for pie chart
  let currentAngle = 0;
  
  return (
    <div className="pie-chart">
      <svg width="100%" height="150" viewBox="0 0 100 100">
        {chartData.map((item, index) => {
          const angle = (item.value / total) * 360;
          const largeArcFlag = angle > 180 ? 1 : 0;
          const x1 = 50 + 50 * Math.cos(currentAngle * Math.PI / 180);
          const y1 = 50 + 50 * Math.sin(currentAngle * Math.PI / 180);
          const x2 = 50 + 50 * Math.cos((currentAngle + angle) * Math.PI / 180);
          const y2 = 50 + 50 * Math.sin((currentAngle + angle) * Math.PI / 180);
          
          const pathData = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `Z`
          ].join(' ');
          
          currentAngle += angle;
          
          return (
            <path
              key={index}
              d={pathData}
              fill={item.color}
              stroke="#fff"
              strokeWidth="0.5"
            />
          );
        })}
        <circle cx="50" cy="50" r="30" fill="white" />
        <text x="50" y="50" textAnchor="middle" dy="0.3em" fontSize="12">
          {total}
        </text>
      </svg>
      
      <div className="pie-legend">
        {chartData.map((item, index) => (
          <div key={index} className="legend-item">
            <div 
              className="legend-color" 
              style={{backgroundColor: item.color}}
            ></div>
            <span className="legend-label">{item.label}</span>
            <span className="legend-value">
              {item.value} ({(item.value / total * 100).toFixed(1)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;