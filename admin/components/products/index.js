import React from "react";
import SearchBy from "./SearchBy";
import DropDownload from "./DropDownload";
import ProductTable from "./ProductTable";

const Products = () => {
  return (
    <main className="h-full overflow-y-auto">
      <div className="grid mx-auto">
        <h1 className="text-2xl pb-5 font-bold text-gray-700">Products</h1>
        <SearchBy />
        <DropDownload />
        <ProductTable />
      </div>
    </main>
  );
};

export default Products;
