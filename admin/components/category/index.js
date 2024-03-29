import React from "react";
import SearchCategory from "./SearchCategory";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <main className="h-full overflow-y-auto">
      <div className="grid mx-auto">
        <h1 className="text-2xl pb-5 font-bold text-gray-700">Products</h1>
        <SearchCategory />
        <CategoryItem />
      </div>
    </main>
  );
};

export default Category;
