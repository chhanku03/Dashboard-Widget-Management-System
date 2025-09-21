Dashboard Widget Management System

  A React-based dashboard application that allows users to dynamically manage widgets with graphical representations, image uploads, and real-time updates.
Features :-

    📊 Dynamic widget management with JSON configuration

    🎯 Graphical representations (Pie charts) for data visualization

    🖼️ Image upload support for widgets

    ⏰ Real-time timestamps on all widgets

    🔄 Refresh functionality for dashboard updates

    🔍 Search functionality across all widgets

    ➕ Add/remove widgets from categories

    📱 Responsive design

Prerequisites :-

    * Before running this project, make sure you have the following installed:

    * Node.js (version 14 or higher)

    * npm (Node Package Manager)

  Installation Steps :-
  
   1. Clone the Repository
      
               git clone <https://github.com/chhanku03/Dashboard-Widget-Management-System.git>
               cd dashboard-widget-system

  3. Install Dependencies
     
         npm install
         This command will install all the required dependencies including:
         * React
        
         * React DOM
       
         * Other development dependencies
       
 3. Start the Development Server
    
        npm start
    
        This will run the app in development mode. Open http://localhost:3000 to view it in your browser.
  
        The page will automatically reload if you make changes to the code.

Project Structure   

      src/
         ├── components/
            │   ├── Dashboard.js
            │   ├── Category.js
            │   ├── Widget.js
            │   ├── WidgetList.js
            │   ├── AddWidgetModal.js
            │   └── PieChart.js
            ├── data/
            │   └── initialData.js
            ├── styles/
            │   └── App.css
            ├── App.js
            └── index.js

Usage Guide :-

  Adding Widgets
  
       Click the "+ Add Widget" button in the header
       
       Select a category from the dropdown
       
       Choose a widget type (Text, Pie Chart, or Image)
       
       For Pie Charts, customize the data with labels, values, and colors
       
       For Image widgets, provide an image URL
       
       Click "Create Widget" to add it to the dashboard

Managing Widgets

     Remove any widget by clicking the "×" button in the widget header
     
     Search for widgets using the search box in the header
     
     Refresh the dashboard using the refresh button (↻)

Widget Types

    Text Widgets: Display textual information

    Pie Chart Widgets: Visualize data with interactive pie charts

    Image Widgets: Display images from provided URLs

Troubleshooting

Common Issues

     Port already in use: If port 3000 is busy, the terminal will prompt you to use another port

    Dependencies issues: Delete node_modules folder and run npm install again

    Build errors: Ensure you have the correct Node.js version (14+)

Getting Help

    If you encounter any problems:

    Check the console for error messages

    Ensure all dependencies are properly installed

     Verify your Node.js and npm versions

Technologies Used

    React.js

    CSS3 (with Flexbox and Grid)

    JavaScript (ES6+)

    Browser Support

This application supports all modern browsers including:

    Chrome (recommended)

    Firefox

    Safari

    Edge

Available Scripts

    In the project directory, you can run:

     npm start - Runs the app in development mode

    npm test - Launches the test runner

    npm run build - Builds the app for production

    npm run eject - Ejects from Create React App (one-way operation)

Contributing

      Fork the repository
      Create a feature branch
      Make your changes
     Test your changes
    Submit a pull request
