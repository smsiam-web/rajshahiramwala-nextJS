import React from "react";
import { priceOverview } from "../../configs";
import { TbCurrencyTaka } from "react-icons/tb";
import { numberWithCommas } from "@/app/utils/helpers";

const PriceOverview = () => {
  return (
    <div className="grid grid-cols-6 gap-4 w-full">
      {priceOverview.length &&
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
        ))}
    </div>
  );
};

export default PriceOverview;
