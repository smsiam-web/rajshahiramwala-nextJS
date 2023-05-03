import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Rating } from "@mantine/core";

const ProductCard = () => {
  return (
    <div className="product-card group box-border overflow-hidden flex rounded-md shadow-sm p flex-col items-center relative">
      <Link href={`/shop/id=?fjakldfl`} className="">
        {/* stock out  */}
        {false && (
          <span className="absolute top-8 left-0 bg-red-500 px-3 mb-2 py-1 text-xs sm:text-sm font-bold text-slate-100 rounded-md -rotate-45">
            Stock Out.!
          </span>
        )}

        {/* disscunt %  */}
        {true && true && (
          <span className="absolute top-2 left-2 bg-orange px-2 mb-2 py-1 text-xs sm:text-sm font-bold text-slate-100 rounded-md bg-primary">
            10% Off
          </span>
        )}
        <div className="rounded-md flex flex-col justify-center overflow-hidden max-w-full">
          {/* card image  */}
          <Image
            alt="mango"
            src={`/images/products/gopalvhog_1.jpeg`}
            width={200}
            height={150}
            // objectFit="contain"
          />
        </div>
        {/* card text  */}
        <div className="flex flex-col gap-1 w-full mt-2 ">
          <h3 className="text-xs sm:text-sm font-semibold text-mid">
            category
          </h3>
          <h1 className="text-lg font-semibold text-title truncate">Name</h1>
          <div className="flex flex-wrap items-center gap-1">
            <span className="flex gap-1 text-primary text-sm">
              <Rating value={3.5} fractions={2} readOnly size="xs" />
            </span>
            <span className="text-sub-mid text-xs sm:text-sm">3.5/5</span>
            <span className="text-sub-title text-xs sm:text-sm">(169)</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs sm:text-sm tracking-tighter text-mid">
                প্রতি কেজি
              </span>
              <div className="flex items-center gap-1">
                <span
                  className={`flex tracking-tighter items-center ${
                    true ? "text-orange" : "text-greens"
                  } font-bold text-lg`}
                >
                  <TbCurrencyTaka size={20} />
                  34
                </span>

                <span className="flex tracking-tighter items-center text-gray-400 font-bold text-base line-through">
                  <TbCurrencyTaka size={18} />
                  30
                </span>
              </div>
            </div>
            {/* <div>
              {!checkItemExists(id) ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    addToBasket(product);
                  }}
                  className="text-white bg-primary p-3 rounded-full text-center flex items-center"
                >
                  <FaCartPlus className="" size={18} />
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    removeItems(id);
                  }}
                  className="text-gray-100 bg-gray-600 p-3 rounded-full text-center flex items-center"
                >
                  <BsFillCartCheckFill className="" size={18} />
                </button>
              )}
            </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
