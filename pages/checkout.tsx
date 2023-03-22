import CheckoutContent from "@/app/components/checkout/CheckoutContent";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import React from "react";

const Checkout = () => {
  return (
    <main>
      {/* Breadcumb */}
      <div className="bg-[#f5f5f5] p-5">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>

      <div className="p-5">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl xl:text-5xl text-center font-bold">
            Checkout
          </h1>
          <CheckoutContent />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
