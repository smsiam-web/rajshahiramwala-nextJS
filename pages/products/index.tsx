import React from "react";
import Card from "./Card";
import Breadcrumb from "@/app/components/shared/Breadcrumb";

const Products = () => {
  return (
    <>
      <main>
        {/* Breadcumb */}
        <div className="bg-[#f5f5f5] p-5">
          <div className="mx-auto max-w-5xl">
            <Breadcrumb />
          </div>
        </div>

        <div className="p-5">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-2xl md:text-3xl xl:text-4xl text-center font-bold pb-6">
              Shop
            </h1>
            <div>
              {/* Category slider */}
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
