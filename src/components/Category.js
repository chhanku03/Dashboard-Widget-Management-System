
import React from 'react';
import Widget from './Widget';

const Category = ({ category, onRemoveWidget }) => {
  return (
    <div className="category">
      <h2 className="category-title">{category.name}</h2>
      <div className="widgets-container">
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryId={category.id}
            onRemove={onRemoveWidget}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;