import Auth from "@/app/components/auth";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import React from "react";

const MyAccount = () => {
  return (
    <main>
      {/* Breadcumb */}
      <div className="bg-[#f5f5f5] p-5">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>

      <div className="p-5">
        <div className="mx-auto max-w-[400px] bg-slate-100 rounded-md">
          <Auth />
        </div>
      </div>
    </main>
  );
};

export default MyAccount;
