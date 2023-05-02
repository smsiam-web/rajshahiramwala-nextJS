import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";
import { BsStarFill, BsStarHalf, BsFillCartCheckFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  selectItems,
} from "@/app/redux/slices/basketSlice";
import { notifications } from "@mantine/notifications";

const ProductCard = ({ product }) => {
  const { id, name, image, price, oldPrice, rating, category, stock, weight } =
    product;

  // redux setup
  const cartItems = useSelector(selectItems);
  const dispatch = useDispatch();

  // check item exists
  const checkItemExists = (id) => {
    const find = cartItems?.filter((item) => item.id === id);
    return !!find.length;
  };

  // item add to basket
  const addToBasket = (product) => {
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
    notifications.show({
      title: "Add to cart successfully",
      message: `${name}, Weight: ${weight}kg`,
    });
  };

  // remove from basket
  const removeItems = (id) => {
    dispatch(removeItem(id));
    notifications.show({
      title: "Removed successfully!",
      message: `${name}, Weight: ${weight}kg`,
      color: "red",
    });
  };

  const offcalc = () => {
    const off = ((oldPrice - price) / oldPrice) * 100;
    return Math.round(off);
  };

  return (
    <Link
      href={`/products/akldfjadf`}
      className="product-card h-[400px] w-[250px]"
    >
      {/* stock out  */}
      {!stock && (
        <span className="absolute top-8 left-0 bg-red-500 px-3 mb-2 py-1 text-base font-bold text-slate-100 rounded-md -rotate-45">
          Stock Out.!
        </span>
      )}

      {/* disscunt %  */}
      {oldPrice && !!stock && (
        <span className="absolute top-2 left-2 bg-orange px-2 mb-2 py-1 text-sm font-bold text-slate-100 rounded-md bg-primary">
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
      <div className="flex flex-col gap-1 w-full mt-2">
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
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm tracking-tighter  text-mid">
              প্রতি কেজি
            </span>
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
          <div>
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
