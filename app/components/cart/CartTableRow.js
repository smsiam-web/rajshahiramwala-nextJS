import React, { useEffect, useState } from "react";
import Quantity from "../shared/Quantity";
import { MdDelete } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  itemPriceCalc,
  removeItem,
} from "@/app/redux/slices/basketSlice";

const CartTableRow = ({ id, name, image, price, quantity, weight }) => {
  const [checked, setChecked] = useState(true);

  //priceCalc
  const priceCalc = weight * price;

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

  //priceCalc update on redux
  const setPriceCalc = (e) => {
    dispatch(itemPriceCalc(e));
  };

  useEffect(() => {
    {
      weight === 12 ? setChecked(true) : setChecked(false);
    }
  }, [weight]);

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
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <span>Weight:</span>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    id="12"
                    name={id + 12}
                    checked={checked}
                    onChange={() => {
                      setPriceCalc({ id: id, weight: 12 });
                    }}
                  />
                  <label htmlFor="12kg">12kg</label>
                  <div className="flex items-center gap-1"></div>
                  <input
                    type="radio"
                    id="23"
                    name={id + 23}
                    checked={!checked}
                    onChange={() => {
                      setPriceCalc({ id: id, weight: 23 });
                    }}
                  />
                  <label htmlFor="23kg">23kg</label>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td className="py-5">
          <span className="flex items-center text-center">
            <TbCurrencyTaka />
            {priceCalc}
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
            {(quantity * priceCalc).toFixed(2)}
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
