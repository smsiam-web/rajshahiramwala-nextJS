import React from "react";
import SearchOrder from "./SearchOrder";
import OrderList from "./OrderList";

const Order = () => {
  return (
    <main>
      <div className="grid mx-auto">
        <h1 className="text-2xl pb-5 font-bold text-gray-700">Orders</h1>
        <SearchOrder />
        <OrderList />
      </div>
    </main>
  );
};

export default Order;
