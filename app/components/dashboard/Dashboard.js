import { selectUser } from "@/app/redux/slices/authSlice";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector(selectUser);
  console.log(user.name);

  return (
    <div className="px-8 py-4">
      <h1 className="text-xl">
        Hi, <span className="font-bold">{user.name}.</span>
        <span className="text-greens"> রাজশাহীর আম ওয়ালা</span> WebApp এ আপনাকে
        স্বাগতম |
      </h1>
    </div>
  );
};

export default Dashboard;
