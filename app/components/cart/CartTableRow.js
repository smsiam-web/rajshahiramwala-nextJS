import React from "react";
import Quantity from "../shared/Quantity";
import { MdDelete } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "@/app/redux/slices/basketSlice";

const CartTableRow = ({ id, name, image, price, quantity }) => {
  // redux setup
  const dispatch = useDispatch();

  // inCrease item quantity
  const increaseQuantity = () => {
    dispatch(increaseItemQuantity(id));
  };
  // deCrease item quantity
  const decreaseQuantity = () => {
    dispatch(decreaseItemQuantity(id));
  };

  return (
    <>
      <tr className="border-b md:border-r md:border-l table_row">
        <td className="py-5 pl-3">
          <img
            src={`/images/products/${image}`}
            loading="lazy"
            alt=""
            className="w-20 h-20 object-cover rounded-md"
          />
        </td>
        <td className="py-5 max-w-[250px]">
          <div className="">
            <h1 className="text-lg font-bold text-title">{name}</h1>
            <p className="text-sm text-gray-500">Weight: 12kg</p>
          </div>
        </td>
        <td className="py-5">
          <span className="flex items-center text-center">
            <TbCurrencyTaka />
            {price}
          </span>
        </td>
        <td className="py-5">
          <div className="w-32">
            <Quantity
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          </div>
        </td>
        <td className="py-5 ">
          <span className="flex items-center text-center">
            <TbCurrencyTaka />
            {(quantity * price).toFixed(2)}
          </span>
        </td>
        <td className="py-5">
          <MdDelete
            onClick={() => dispatch(removeItem(id))}
            className="text-2xl cursor-pointer hover-red"
          />
        </td>
      </tr>
    </>
  );
};

export default CartTableRow;
