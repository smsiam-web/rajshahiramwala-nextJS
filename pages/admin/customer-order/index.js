import React from "react";
import AdminLayout from "@/admin/AdminLayout";
import { BsFillHandbagFill } from "react-icons/bs";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const CustomerOrder = () => {
  return (
    <AdminLayout>
      <div className="grid mx-auto">
        <h1 className="text-2xl pb-5 font-bold text-gray-700">
          Customer order list
        </h1>
        <div className="bg-white w-[50%] mx-auto text-center py-16 rounded-md">
          <span className="text-red-500 flex items-center justify-center">
            <BsFillHandbagFill size={100} />
          </span>
          <p className="py-4">This customer have no order yet..!</p>
          <Link href={"/admin/customers"}>
            <div className="flex items-center justify-center gap-1">
              <BiArrowBack size={18} />
              <span>Back</span>
            </div>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CustomerOrder;
