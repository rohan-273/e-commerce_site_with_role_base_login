import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>      
      <div className="container mt-3">
        <h1>Welcome, {user.role}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
