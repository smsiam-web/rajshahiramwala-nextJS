import React from "react";
import SectionHeading from "../shared/SectionHeading";
import ProductCard from "../product/ProductCard";

const PRODUCT = [
  {
    id: 1001,
    name: "গোপালভোগ আম",
    rating: "4.7",
    image: "gopalvhog_1.jpeg",
    category: "আম",
    price: 85,
    oldPrice: 115,
    stock: true,
  },
  {
    id: 1002,
    name: "হিমসাগর আম",
    rating: "4.7",
    image: "himsagor_1.jpeg",
    category: "আম",
    price: 90,
    stock: true,
  },
  {
    id: 1003,
    name: "আম্রপালি আম",
    rating: "4.7",
    image: "amropali_1.jpg",
    category: "আম",
    oldPrice: 120,
    price: 115,
    stock: false,
  },
  {
    id: 1001,
    name: "গোপালভোগ আম",
    rating: "4.7",
    image: "gopalvhog_1.jpeg",
    category: "আম",
    price: 85,
    oldPrice: 115,
    stock: true,
  },
  {
    id: 1002,
    name: "হিমসাগর আম",
    rating: "4.7",
    image: "himsagor_1.jpeg",
    category: "আম",
    price: 90,
    stock: true,
  },
  {
    id: 1003,
    name: "আম্রপালি আম",
    rating: "4.7",
    image: "amropali_1.jpg",
    category: "আম",
    oldPrice: 120,
    price: 115,
    stock: false,
  },
];

const TodaysDeals = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <SectionHeading title="Top Saver Today" link="All Offers" />
        {/* Category slider */}
        <div className="flex pt-8 items-center justify-items-stretch gap-7 overflow-x-auto mt-5 pb-14 pl-2 -ml-2 no-scrollbar">
          {PRODUCT.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodaysDeals;
