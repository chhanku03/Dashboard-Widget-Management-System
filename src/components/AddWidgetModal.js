
import React, { useState } from 'react';

const AddWidgetModal = ({ categories, onCreateNewWidget, onClose }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || 1);
  const [widgetType, setWidgetType] = useState('text');
  const [chartData, setChartData] = useState([
    { label: 'Resolved', value: 65, color: '#4CAF50' },
    { label: 'Failed', value: 15, color: '#F44336' },
    { label: 'Pending', value: 20, color: '#FFC107' }
  ]);
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName.trim()) {
      let finalContent = widgetContent;
      let finalChartData = null;
      
      if (widgetType === 'image') {
        finalContent = imageUrl || 'https://via.placeholder.com/300x150?text=Widget+Image';
      } else if (widgetType === 'pie') {
        finalChartData = chartData;
        finalContent = 'Pie Chart Visualization';
      }
      
      onCreateNewWidget(widgetName, finalContent, selectedCategory, widgetType, finalChartData);
      setWidgetName('');
      setWidgetContent('');
      setImageUrl('');
      onClose();
    }
  };

  const updateChartValue = (index, field, value) => {
    const newChartData = [...chartData];
    newChartData[index][field] = field === 'value' ? parseInt(value) || 0 : value;
    setChartData(newChartData);
  };

  const addChartItem = () => {
    setChartData([
      ...chartData,
      { label: `Item ${chartData.length + 1}`, value: 10, color: '#999' }
    ]);
  };

  const removeChartItem = (index) => {
    if (chartData.length > 1) {
      setChartData(chartData.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Create New Widget</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="widget-form">
          <div className="form-group">
            <label htmlFor="widgetName">Widget Name:</label>
            <input
              type="text"
              id="widgetName"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="widgetType">Widget Type:</label>
            <select
              id="widgetType"
              value={widgetType}
              onChange={(e) => setWidgetType(e.target.value)}
            >
              <option value="text">Text Widget</option>
              <option value="pie">Pie Chart</option>
              <option value="image">Image Widget</option>
            </select>
          </div>
          
          {widgetType === 'text' && (
            <div className="form-group">
              <label htmlFor="widgetContent">Widget Content:</label>
              <textarea
                id="widgetContent"
                value={widgetContent}
                onChange={(e) => setWidgetContent(e.target.value)}
                required
              />
            </div>
          )}
          
          {widgetType === 'image' && (
            <div className="form-group">
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="url"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>
          )}
          
          {widgetType === 'pie' && (
            <div className="form-group">
              <label>Pie Chart Data:</label>
              <div className="chart-data-editor">
                {chartData.map((item, index) => (
                  <div key={index} className="chart-data-row">
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) => updateChartValue(index, 'label', e.target.value)}
                      placeholder="Label"
                    />
                    <input
                      type="number"
                      value={item.value}
                      onChange={(e) => updateChartValue(index, 'value', e.target.value)}
                      placeholder="Value"
                    />
                    <input
                      type="color"
                      value={item.color}
                      onChange={(e) => updateChartValue(index, 'color', e.target.value)}
                    />
                    <button 
                      type="button" 
                      className="btn-remove"
                      onClick={() => removeChartItem(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button type="button" className="btn-secondary" onClick={addChartItem}>
                  + Add Data Item
                </button>
              </div>
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="widgetCategory">Category:</label>
            <select
              id="widgetCategory"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create Widget
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;