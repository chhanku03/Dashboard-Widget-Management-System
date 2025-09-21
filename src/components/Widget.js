
import React from 'react';
import PieChart from './PieChart';

const Widget = ({ widget, categoryId, onRemove }) => {
  const handleRemove = () => {
    onRemove(categoryId, widget.id);
  };

  const renderContent = () => {
    switch(widget.type) {
      case 'pie':
        return <PieChart data={widget.chartData} />;
      case 'image':
        return (
          <div className="widget-image">
            <img src={widget.content} alt={widget.name} />
          </div>
        );
      default:
        return <p>{widget.content}</p>;
    }
  };

  return (
    <div className="widget">
      <div className="widget-header">
        <h3 className="widget-title">{widget.name}</h3>
        <div className="widget-controls">
          <span className="widget-time">
            {new Date(widget.createdAt).toLocaleTimeString()}
          </span>
          <button className="widget-remove-btn" onClick={handleRemove}>×</button>
        </div>
      </div>
      <div className="widget-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Widget;