import { selectItems } from "@/app/redux/slices/basketSlice";
import React from "react";
import { useSelector } from "react-redux";
import { TbCurrencyTaka } from "react-icons/tb";
import { FormBtn } from "../shared/Form";
import OrderItems from "./OrderItems";
import PaymentMethod from "./PaymentMethod";

const PAYMENT = [
  {
    id: "cod",
    title: "Cash on Delivery",
    image: "payment_cod.png",
  },
  {
    id: "dr_cr",
    title: "Credit/Debit Card",
    image: "payment_dr_cr.png",
  },
  {
    id: "bkash",
    title: "bkash",
    image: "payment_bkash.png",
  },
  {
    id: "nagod",
    title: "nagod",
    image: "payment_nagod.png",
  },
  {
    id: "rocket",
    title: "rocket",
    image: "payment_rocket.png",
  },
];

const YourOrder = ({ placeOrder, loading }) => {
  const orderItem = useSelector(selectItems);

  return (
    <div>
      <h3 className="text-2xl mb-4 text-sub-title">Your order</h3>
      <div className="bg-gray-100 p-5 rounded-md">
        <div className="flex justify-between pb-5 border-b">
          <h2 className="text-base font-bold">PRODUCT</h2>
          <h2 className="text-base font-bold">TOTAL</h2>
        </div>
        <div className=" bg-white">
          {orderItem?.map((item, i) => (
            <OrderItems key={i} {...item} />
          ))}
        </div>
        <div className="flex justify-between py-5 border-b">
          <h2 className="text-base font-bold">Subtotal</h2>
          <h2 className="text-lg font-bold flex items-center w-2/12">
            <TbCurrencyTaka size={20} />
            <span>200</span>
          </h2>
        </div>
        <div className="py-5 border-b space-y-3">
          <span className="text-title">Shipping</span>
          <ul className="">
            <li className="">- Flat rate</li>
          </ul>
        </div>
        <div className="flex justify-between py-5 border-b">
          <h2 className="text-lg font-bold">Total</h2>
          <h2 className="text-lg font-bold text-green flex items-center w-2/12">
            <TbCurrencyTaka size={20} />
            <span className="text-greens">200</span>
          </h2>
        </div>
        <div className="pt-5">
          <h2 className="text-lg font-bold">Payment method</h2>
          <div className="flex flex-1 flex-wrap items-center gap-4 p-3">
            {PAYMENT?.map((item) => (
              <PaymentMethod key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <FormBtn title="Place Order" onClick={placeOrder} loading={loading} />
    </div>
  );
};

export default YourOrder;
