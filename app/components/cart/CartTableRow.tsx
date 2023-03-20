import React from "react";
import Quantity from "../shared/Quantity";
import { MdDelete } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const CartTableRow = () => {
  return (
    <>
      <tr className="border-b md:border-r md:border-l table_row">
        <td className="py-5 pl-3">
          <img
            src="http://localhost:3000/_next/image?url=%2Fimages%2Fproducts%2Fgopalvhog_1.jpeg&w=384&q=75"
            loading="lazy"
            alt=""
            className="w-20 h-20 object-cover rounded-md"
          />
        </td>
        <td className="py-5 max-w-[250px]">
          <div className="">
            <h1 className="text-lg font-bold text-title">গোপালভোগ আম</h1>
            <p className="text-sm text-gray-500">Weight: 12kg</p>
          </div>
        </td>
        <td className="py-5">
          <span className="flex items-center text-center">
            <TbCurrencyTaka />
            100
          </span>
        </td>
        <td className="py-5">
          <div className="w-32">
            <Quantity />
          </div>
        </td>
        <td className="py-5 ">
          <span className="flex items-center text-center">
            <TbCurrencyTaka />
            100
          </span>
        </td>
        <td className="py-5">
          <MdDelete className="text-2xl cursor-pointer hover-red" />
        </td>
      </tr>
    </>
  );
};

export default CartTableRow;
