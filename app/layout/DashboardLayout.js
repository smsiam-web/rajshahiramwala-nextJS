import React from "react";
import Auth from "../components/auth";
import DashboardWrapper from "../components/dashboard/DashboardWrapper";
import Breadcrumb from "../components/shared/Breadcrumb";

const DashboardLayout = ({ children }) => {
  const user = {};
  return (
    <main>
      {/* Breadcumb */}
      <div className="bg-[#f5f5f5] p-5 min-h-[64px]">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>
      {user ? <DashboardWrapper>{children}</DashboardWrapper> : <Auth />}
    </main>
  );
};

export default DashboardLayout;
