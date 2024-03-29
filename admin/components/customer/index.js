import React from "react";
import SearchCustomer from "./SearchCustomer";
import CustomersRow from "./CustomersRow";

const Customers = () => {
  return (
    <main className="h-full overflow-y-auto">
      <div className="grid mx-auto">
        <h1 className="text-2xl pb-5 font-bold text-gray-700">Customers</h1>
        <div>
          <SearchCustomer />
          <CustomersRow />
        </div>
      </div>
    </main>
  );
};

export default Customers;
