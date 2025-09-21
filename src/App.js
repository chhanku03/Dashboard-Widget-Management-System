
import React, { useState} from 'react';
import Dashboard from './components/Dashboard';
import WidgetList from './components/WidgetList';
import { initialData } from './data/initialData';
import './App.css';

function App() {
  const [data, setData] = useState(initialData);
  const [showWidgetList, setShowWidgetList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Function to add a widget to a category
  const addWidgetToCategory = (categoryId, widget) => {
    setData(prevData => {
      const updatedCategories = prevData.categories.map(category => {
        if (category.id === categoryId) {
          // Check if widget already exists in this category
          const widgetExists = category.widgets.some(w => w.id === widget.id);
          if (!widgetExists) {
            return {
              ...category,
              widgets: [...category.widgets, {...widget, createdAt: new Date()}]
            };
          }
        }
        return category;
      });
      
      return {
        ...prevData,
        categories: updatedCategories
      };
    });
    setLastUpdated(new Date());
  };

  // Function to remove a widget from a category
  const removeWidgetFromCategory = (categoryId, widgetId) => {
    setData(prevData => {
      const updatedCategories = prevData.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== widgetId)
          };
        }
        return category;
      });
      
      return {
        ...prevData,
        categories: updatedCategories
      };
    });
    setLastUpdated(new Date());
  };

  // Function to create a new widget
  const createNewWidget = (widgetName, widgetContent, categoryId, widgetType, chartData) => {
    const newWidget = {
      id: Date.now(), // Simple ID generation
      name: widgetName,
      content: widgetContent,
      type: widgetType || 'text',
      chartData: chartData || null,
      createdAt: new Date()
    };
    
    // Add to all widgets list
    setData(prevData => ({
      ...prevData,
      allWidgets: [...prevData.allWidgets, newWidget]
    }));
    
    // Add to the specified category
    addWidgetToCategory(categoryId, newWidget);
  };

  // Function to refresh dashboard data
  const refreshDashboard = () => {
    setLastUpdated(new Date());
  };

  // Filter widgets based on search term
  const filteredWidgets = data.allWidgets.filter(widget =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="app-header">
        <div>
          <h1>CMAPP Dashboard</h1>
          <p className="last-updated">Last updated: {lastUpdated.toLocaleTimeString()}</p>
        </div>
        <div className="header-controls">
          <button className="btn-refresh" onClick={refreshDashboard} title="Refresh Dashboard">
            ↻
          </button>
          <button 
            className="btn-primary"
            onClick={() => setShowWidgetList(!showWidgetList)}
          >
            {showWidgetList ? 'Hide Widget List' : '+ Add Widget'}
          </button>
          <input
            type="text"
            placeholder="Search widgets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </header>
      
      {showWidgetList && (
        <WidgetList
          widgets={filteredWidgets}
          categories={data.categories}
          onAddWidgetToCategory={addWidgetToCategory}
          onCreateNewWidget={createNewWidget}
          onClose={() => setShowWidgetList(false)}
        />
      )}
      
      <Dashboard
        categories={data.categories}
        onRemoveWidget={removeWidgetFromCategory}
      />
    </div>
  );
}

export default App;