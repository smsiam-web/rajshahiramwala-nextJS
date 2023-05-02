import React from "react";
import SectionHeading from "../../shared/SectionHeading";
import Card from "./Card";
import { setBackgroundImage } from "@/app/utils/helpers";

const Shops = () => {
  return (
    <section
      className="bg-white"
      style={setBackgroundImage("/images/homepage-bg.jpg")}
    >
      <div className="container py-8">
        <div className="pb-8 md:pb-10 lg:pb-12">
          <SectionHeading
            title="Shop"
            link="All Products"
            path="products"
            bg="white"
          />
        </div>
        {/* Category slider */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
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
    </section>
  );
};

export default Shops;
