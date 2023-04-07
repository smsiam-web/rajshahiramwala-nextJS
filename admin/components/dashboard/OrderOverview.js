import React from "react";
import { FiShoppingCart, FiTruck } from "react-icons/fi";
import { MdOutlineDownloadDone, MdOutlinePendingActions } from "react-icons/md";
import Orders from "../order";

const OrderOverview = () => {
  return (
    <div className="grid grid-cols-6 2xl:grid-cols-12 gap-4 w-full">
      <div className="col-span-6 md:col-span-3 bg-gray-50 p-4 rounded-md border border-gray-200 shadow">
        <div className="flex items-center gap-3">
          <span className="p-4 text-red-600 bg-red-200 rounded-full text-center">
            <FiShoppingCart size={20} />
          </span>
          <h1 className="text-base flex flex-col text-title">
            Total Order{" "}
            <span className="text-2xl font-medium text-title">
              0{Orders.length}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3 bg-gray-50 p-4 rounded-md border border-gray-200 shadow">
        <div className="flex items-center gap-3">
          <span className="p-4 text-orange-600 bg-orange-200 rounded-full text-center">
            <MdOutlinePendingActions size={20} />
          </span>
          <h1 className="text-base flex flex-col text-title">
            Order Pending{" "}
            <span className="text-2xl font-medium text-title">
              0{Orders.length}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3 bg-gray-50 p-4 rounded-md border border-gray-200 shadow">
        <div className="flex items-center gap-3">
          <span className="p-4 text-emerald-600 bg-emerald-200 rounded-full text-center">
            <FiTruck size={20} />
          </span>
          <h1 className="text-base flex flex-col text-title">
            Order Processing{" "}
            <span className="text-2xl font-medium text-title">
              0{Orders.length}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3 bg-gray-50 p-4 rounded-md border border-gray-200 shadow">
        <div className="flex items-center gap-3">
          <span className="p-4 text-red-600 bg-red-200 rounded-full text-center">
            <FiShoppingCart size={20} />
          </span>
          <h1 className="text-base flex flex-col text-title">
            Order Delivered{" "}
            <span className="text-2xl font-medium text-title">
              0{Orders.length}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;
