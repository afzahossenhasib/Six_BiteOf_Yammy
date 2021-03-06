import React from "react";
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import './Dashboard.css'

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div className="chart-container">

    <div>
      <h1>Month Wise Sell</h1>
        <LineChart width={700} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"month"} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={"sell"} stroke="#8884d8" activeDot={{ r: 8 }}/>
        </LineChart>
    </div>

    <div>
      <h1>Investment</h1>
    <AreaChart width={700} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
      

    </div>
  );
};

export default Dashboard;
