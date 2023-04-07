import React from "react";
import AdminLayout from "@/admin/AdminLayout";
import { BsFillHandbagFill } from "react-icons/bs";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import Customers from "@/admin/components/customer";

const Customer = () => {
  return (
    <AdminLayout>
      <Customers />
    </AdminLayout>
  );
};

export default Customer;
