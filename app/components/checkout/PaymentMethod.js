import Link from "next/link";
import React from "react";
import { CgUnavailable } from "react-icons/cg";

const PaymentMethod = ({ id, title, image, available }) => {
  return (
    <>
      {available ? (
        <Link
          href={"/"}
          className="flex flex-col items-center max-w-[160px] bg-gray-300  hover:bg-gray-200 px-4 py-2 rounded-md"
        >
          <div className="max-w-[50px] md:max-w-[60px]">
            <img src={`/images/payment/${image}`} alt="" className="w-full" />
          </div>
          <span className="text-xs pt-1 md:text-sm capitalize font-semibold text-title">
            {title}
          </span>
        </Link>
      ) : (
        <div
          key={id}
          className="flex flex-col items-center max-w-[160px] bg-gray-400   px-4 py-2 rounded-md relative"
        >
          <div className="absolute text-red-500 top-1 right-1">
            <CgUnavailable size={24} />
          </div>
          <div className="max-w-[50px] md:max-w-[60px]">
            <img src={`/images/payment/${image}`} alt="" className="w-full" />
          </div>
          <span className="text-xs pt-1 md:text-sm capitalize font-semibold text-title">
            {title}
          </span>
        </div>
      )}
    </>
  );
};

export default PaymentMethod;
