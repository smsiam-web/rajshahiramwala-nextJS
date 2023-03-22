import React from "react";

import { FormBtn } from "../shared/Form";

const YourOrder = ({ placeOrder, loading }) => {
  return (
    <div>
      <h3 className="text-2xl mb-4 text-sub-title">Your order</h3>
      <div className="bg-gray-100 p-5 rounded-md">
        <div className="flex justify-between pb-5 border-b">
          <h2 className="text-base font-bold">PRODUCT</h2>
          <h2 className="text-base font-bold">TOTAL</h2>
        </div>
        <div className=" bg-white">
          <div className="flex justify-between py-5 px-5 border-b">
            <h2 className="text-base font-medium">
              <span className="text-gray-400">গোপালভোগ আম (12kg)</span>
              <span className="text-gray-400 pl-2">x2</span>
            </h2>
            <h2 className="text-base font-bold ml-2">$100</h2>
          </div>
          <div className="flex justify-between p-5  border-b">
            <h2 className="text-base font-medium">
              <span className="text-gray-400">গোপালভোগ আম (12kg)</span>
              <span className="text-gray-400 pl-2">x2</span>
            </h2>
            <h2 className="text-base font-bold ml-2">$100</h2>
          </div>
        </div>
        <div className="flex justify-between py-5 border-b">
          <h2 className="text-base font-bold">Subtotal</h2>
          <h2 className="text-base font-bold text-green">$200</h2>
        </div>
        <div className="py-5 border-b space-y-3">
          <span className="text-title">Shipping</span>
          <ul className="">
            <li className="">- Flat rate</li>
          </ul>
        </div>
        <div className="flex justify-between py-5 border-b">
          <h2 className="text-lg font-bold">Total</h2>
          <h2 className="text-lg font-bold text-green">$200</h2>
        </div>
        <div className="pt-5">
          <h2 className="text-lg font-bold">Payment method</h2>
          <p className="text-gray-500 mt-3"> - Pay with a Credit/Debit Card</p>
        </div>
      </div>
      <FormBtn title="Place Order" onClick={placeOrder} loading={loading} />
    </div>
  );
};

export default YourOrder;
