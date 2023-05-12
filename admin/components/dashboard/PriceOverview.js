import React from "react";
import { priceOverview } from "../../configs";
import { TbCurrencyTaka } from "react-icons/tb";
import { numberWithCommas } from "@/app/utils/helpers";
import { FiLayers, FiShoppingCart } from "react-icons/fi";
import { ImCreditCard } from "react-icons/im";

const PriceOverview = () => {
  return (
    <div className="grid grid-cols-6 gap-4 w-full">
      <div
        className={`col-span-6 md:col-span-2 bg-sky-500 2xl:py-12 py-6 flex flex-col items-center justify-center text-gray-100 rounded-lg gap-2`}
      >
        <FiLayers size={30} />
        <h1 className="text-lg text-gray-100 capitalize">Today Order</h1>
        <h2 className="text-3xl font-semibold text-gray-50 flex items-center">
          <TbCurrencyTaka size={32} /> <span>{numberWithCommas(1000)}</span>
        </h2>
      </div>
      <div
        className={`col-span-6 md:col-span-2 bg-violet-500 2xl:py-12 py-6 flex flex-col items-center justify-center text-gray-100 rounded-lg gap-2`}
      >
        <FiShoppingCart size={30} />
        <h1 className="text-lg text-gray-100 capitalize">this month</h1>
        <h2 className="text-3xl font-semibold text-gray-50 flex items-center">
          <TbCurrencyTaka size={32} /> <span>{numberWithCommas(5430)}</span>
        </h2>
      </div>
      <div
        className={`col-span-6 md:col-span-2 bg-green-500 2xl:py-12 py-6 flex flex-col items-center justify-center text-gray-100 rounded-lg gap-2`}
      >
        <ImCreditCard size={30} />
        <h1 className="text-lg text-gray-100 capitalize">total order</h1>
        <h2 className="text-3xl font-semibold text-gray-50 flex items-center">
          <TbCurrencyTaka size={32} /> <span>{numberWithCommas(783400)}</span>
        </h2>
      </div>
      {/* {priceOverview.length &&
        priceOverview.map((item) => (
          <div
            key={item.title}
            className={`col-span-6 md:col-span-2 bg-${item.bg}-500 2xl:py-12 py-6 flex flex-col items-center justify-center text-gray-100 rounded-lg gap-2`}
          >
            <item.Icon size={30} />
            <h1 className="text-lg text-gray-100 capitalize">{item.title}</h1>
            <h2 className="text-3xl font-semibold text-gray-50 flex items-center">
              <TbCurrencyTaka size={32} />{" "}
              <span>{numberWithCommas(item.price)}</span>
            </h2>
          </div>
        ))} */}
    </div>
  );
};

export default PriceOverview;
