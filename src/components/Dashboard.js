
import React from 'react';
import Category from './Category';

const Dashboard = ({ categories, onRemoveWidget }) => {
  return (
    <div className="dashboard">
      {categories.map(category => (
        <Category
          key={category.id}
          category={category}
          onRemoveWidget={onRemoveWidget}
        />
      ))}
    </div>
  );
};

export default Dashboard;