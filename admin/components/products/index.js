import React from "react";

const Products = () => {
  return (
    <main className="h-full overflow-y-auto">
      <div className="grid mx-auto">
        <h1 className="text-2xl pb-5 font-bold text-gray-700">Products</h1>
        <div className="min-w-0 rounded-lg overflow-hidden bg-gray-50  shadow-xs  mb-5">
          <div className="p-4">
            <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <input
                  class="block w-full px-3 py-1 text-sm focus:outline-neutral-200 leading-5 rounded-md  border-gray-200 h-12  bg-gray-100 border-transparent focus:bg-white"
                  type="search"
                  // name="search"
                  placeholder="Search by product name"
                />
              </div>
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow"></div>
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow"></div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
