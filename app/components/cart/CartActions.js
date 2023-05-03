import React from "react";
import Button from "../shared/Button";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";
import { useSelector } from "react-redux";
import { selectItems, selectTotalPrice } from "@/app/redux/slices/basketSlice";

const CartActions = () => {
  const cartTotalPrice = useSelector(selectTotalPrice);

  return (
    <div className="ms:py-8 py-4 md:border-t">
      <div className="flex justify-between gap-5 flex-wrap">
        <div className="md:w-[40%] w-full">
          <h2 className="text-xl mb-3 font-bold">Using A Promo Code?</h2>
          <div className="flex max-w-full items-center">
            <div className="flex w-[70%] flex-1 items-center border p-4 rounded">
              <input
                type="text"
                placeholder="Coupon code"
                className="outline-none bg-transparent px-4 flex-1"
              />
            </div>
            <Button
              title="Apply"
              className="self-stretch bg-primary rounded-tr-md rounded-br-md w-[30%]"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded-md md:w-[40%] w-full">
          <div className="flex justify-between pb-5 border-b">
            <h2 className="text-lg font-bold">Subtotal</h2>
            <h2 className="text-lg font-bold">
              <span className="flex items-center text-center">
                <TbCurrencyTaka size={20} />
                {cartTotalPrice}
              </span>
            </h2>
          </div>
          <div className="py-5 border-b space-y-3">
            <span className="text-title font-semibold">Shipping</span>
            <div className="flex items-center justify-between space-y-3">
              <span className="text-sub-title">Courier Service point</span>
              <span className="flex items-center text-center">
                <TbCurrencyTaka size={20} />
                {100.0}
              </span>
            </div>
            <div className="flex items-center justify-between space-y-3">
              <span className="text-sub-title">Home Delivary</span>
              <span className="flex items-center text-center">
                <TbCurrencyTaka size={20} />
                {100.0}
              </span>
            </div>
          </div>
          <div className="flex justify-between py-5">
            <h2 className="text-xl font-bold">Subtotal</h2>
            <h2 className="text-xl font-bold text-green">
              <span className="flex items-center text-center text-primary">
                <TbCurrencyTaka />
                {cartTotalPrice}
              </span>
            </h2>
          </div>
          <Link href="/checkout">
            <Button title="Checkout" className="w-full py-3 bg-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartActions;
