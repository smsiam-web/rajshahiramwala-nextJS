import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const OrderItems = ({ name, quantity, price }) => {
  return (
    <div className="flex justify-between py-5 px-5 border-b">
      <h2 className="text-base font-medium">
        <span className="text-gray-400">{name}</span>
        <span className="text-gray-400 pl-2">x{quantity}</span>
      </h2>
      <h2 className="text-base font-bold ml-2 flex items-center w-3/12">
        <TbCurrencyTaka size={18} />
        <span>{price.toFixed(2)}</span>
      </h2>
    </div>
  );
};

export default OrderItems;
