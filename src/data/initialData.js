
export const initialData = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { 
          id: 1, 
          name: "Cloud Accounts", 
          content: "Connected (2) | Not Connected (2)",
          type: "text",
          createdAt: new Date()
        },
        { 
          id: 2, 
          name: "Compliance Status", 
          content: "Compliant with 4/5 standards",
          type: "pie",
          chartData: [
            { label: "Compliant", value: 4, color: "#4CAF50" },
            { label: "Non-Compliant", value: 1, color: "#F44336" }
          ],
          createdAt: new Date()
        }
      ]
    },
    {
      id: 2,
      name: "Threat Detection",
      widgets: [
        { 
          id: 3, 
          name: "Active Threats", 
          content: "3 active threats detected",
          type: "text",
          createdAt: new Date()
        },
        { 
          id: 4, 
          name: "Threat Trends", 
          content: "Monthly threats increased by 12%",
          type: "pie",
          chartData: [
            { label: "Critical", value: 2, color: "#F44336" },
            { label: "High", value: 5, color: "#FF9800" },
            { label: "Medium", value: 8, color: "#FFC107" },
            { label: "Low", value: 15, color: "#4CAF50" }
          ],
          createdAt: new Date()
        }
      ]
    },
    {
      id: 3,
      name: "Resource Monitoring",
      widgets: [
        { 
          id: 5, 
          name: "CPU Usage", 
          content: "Average CPU usage: 45%",
          type: "text",
          createdAt: new Date()
        },
        { 
          id: 6, 
          name: "Memory Consumption", 
          content: "Memory usage: 62%",
          type: "pie",
          chartData: [
            { label: "Used", value: 62, color: "#2196F3" },
            { label: "Available", value: 38, color: "#E0E0E0" }
          ],
          createdAt: new Date()
        }
      ]
    }
  ],
  allWidgets: [
    { id: 1, name: "Cloud Accounts", content: "Connected (2) | Not Connected (2)", type: "text" },
    { id: 2, name: "Compliance Status", content: "Compliant with 4/5 standards", type: "pie" },
    { id: 3, name: "Active Threats", content: "3 active threats detected", type: "text" },
    { id: 4, name: "Threat Trends", content: "Monthly threats increased by 12%", type: "pie" },
    { id: 5, name: "CPU Usage", content: "Average CPU usage: 45%", type: "text" },
    { id: 6, name: "Memory Consumption", content: "Memory usage: 62%", type: "pie" },
    { id: 7, name: "Network Traffic", content: "Network traffic: 1.2 Gbps", type: "text" },
    { id: 8, name: "User Activity", content: "124 active users", type: "text" },
    { id: 9, name: "Incident Reports", content: "5 incidents this week", type: "text" }
  ]
};