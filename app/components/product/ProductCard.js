import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const { name, image, price, oldPrice, rating, category, stock } = product;

  const offcalc = () => {
    const off = ((oldPrice - price) / oldPrice) * 100;
    return Math.round(off);
  };

  return (
    <Link href={"/products"} className="product-card h-[400px]">
      {/* stock out  */}
      {!stock && (
        <span className="absolute top-8 left-0 bg-red-500 px-3 mb-2 py-1 text-base font-bold text-slate-100 rounded-md -rotate-45">
          Stock Out.!
        </span>
      )}

      {/* disscunt %  */}
      {oldPrice && !!stock && (
        <span className="absolute top-2 left-2 bg-orange px-2 mb-2 py-1 text-sm font-bold text-slate-100 rounded-md">
          {offcalc()}% Off
        </span>
      )}
      <div className="rounded-md flex flex-col justify-center overflow-hidden">
        {/* card image  */}
        <Image
          alt="mango"
          src={`/images/products/${image}`}
          width={270}
          height={270}
          // objectFit="contain"
        />
      </div>
      {/* card text  */}
      <div className="flex flex-col gap-1 mt-2">
        <h3 className="text-sm font-semibold text-mid">{category}</h3>
        <h1 className="text-xl font-semibold text-title truncate w-[300px]">
          {name}
        </h1>
        <div className="flex items-center gap-1">
          <span className="flex px-1 gap-1 text-primary text-sm">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </span>
          <span className="text-sub-mid text-sm">{rating}/5</span>
          <span className="text-sub-title text-sm">(169)</span>
        </div>
        <div>
          <span className="text-sm tracking-tighter  text-mid">প্রতি কেজি</span>
          <div className="flex items-center gap-1">
            <span
              className={`flex tracking-tighter items-center ${
                oldPrice ? "text-orange" : "text-greens"
              } font-bold text-lg`}
            >
              <TbCurrencyTaka size={20} />
              {price}
            </span>
            {oldPrice && (
              <span className="flex tracking-tighter items-center text-gray-400 font-bold text-base line-through">
                <TbCurrencyTaka size={18} />
                {oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
