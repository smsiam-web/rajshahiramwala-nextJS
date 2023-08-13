import React, { useEffect } from "react";
import AdminLayout from "@/admin/AdminLayout";
import DashBoard from "@/admin/components/dashboard";

const AdmainMain = () => {
  return (
    <AdminLayout>
      <DashBoard />
    </AdminLayout>
  );
};

export default AdmainMain;
