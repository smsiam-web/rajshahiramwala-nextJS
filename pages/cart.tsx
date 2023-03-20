import Breadcrumb from "@/app/components/shared/Breadcrumb";
import React from "react";

const Cart = () => {
  return (
    <main>
      {/* Breadcumb */}
      <div className="bg-[#f5f5f5] p-5">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>
    </main>
  );
};

export default Cart;
