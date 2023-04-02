import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Dashboard = () => {
  const marksArray = [
    { id: 1, name: "Alice", phy: 90, chem: 85, math: 95 },
    { id: 2, name: "Bob", phy: 80, chem: 75, math: 90 },
    { id: 3, name: "Charlie", phy: 70, chem: 90, math: 85 },
    { id: 4, name: "David", phy: 60, chem: 80, math: 80 },
    { id: 5, name: "Emily", phy: 95, chem: 95, math: 90 },
    { id: 6, name: "Frank", phy: 85, chem: 70, math: 75 },
    { id: 7, name: "Grace", phy: 80, chem: 90, math: 85 },
    { id: 8, name: "Harry", phy: 75, chem: 80, math: 90 },
    { id: 9, name: "Isabel", phy: 90, chem: 85, math: 75 },
    { id: 10, name: "Jack", phy: 85, chem: 90, math: 80 },
    { id: 11, name: "Kate", phy: 80, chem: 70, math: 85 },
    { id: 12, name: "Luke", phy: 75, chem: 85, math: 90 },
  ];
  

  return (
    <div>
     <LineChart
     width={1000}
     height={300}
     data={marksArray}
     >

      <Line dataKey="phy"  stroke="#8884d8"></Line>
      <Line dataKey="math"></Line>
      <XAxis dataKey="name" />
      <YAxis></YAxis>
      <Tooltip />
     </LineChart>

    </div>
  );
};

export default Dashboard;