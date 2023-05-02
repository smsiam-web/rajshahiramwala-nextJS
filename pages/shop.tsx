import Breadcrumb from "@/app/components/shared/Breadcrumb";
import React from "react";

const Shop = () => {
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
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-center font-bold">
            Shop
          </h1>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
