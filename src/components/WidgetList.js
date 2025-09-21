
import React, { useState } from 'react';
import AddWidgetModal from './AddWidgetModal';

const WidgetList = ({ widgets, categories, onAddWidgetToCategory, onCreateNewWidget, onClose }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || 1);

  const handleAddToCategory = (widgetId) => {
    const widgetToAdd = widgets.find(widget => widget.id === widgetId);
    if (widgetToAdd) {
      onAddWidgetToCategory(selectedCategory, widgetToAdd);
    }
  };

  return (
    <div className="widget-list-modal">
      <div className="widget-list-content">
        <div className="widget-list-header">
          <h2>Add Widgets to Dashboard</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="widget-list-controls">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          
          <button 
            className="btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            Create New Widget
          </button>
        </div>
        
        <div className="widgets-grid">
          {widgets.map(widget => (
            <div key={widget.id} className="widget-item">
              <h4>{widget.name}</h4>
              <p>{widget.content}</p>
              <button 
                className="btn-secondary"
                onClick={() => handleAddToCategory(widget.id)}
              >
                Add to Category
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {showAddModal && (
        <AddWidgetModal
          categories={categories}
          onCreateNewWidget={onCreateNewWidget}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
};

export default WidgetList;