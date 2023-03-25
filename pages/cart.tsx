import CartActions from "@/app/components/cart/CartActions";
import CartTable from "@/app/components/cart/CartTable";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import { selectTotalCartItems } from "@/app/redux/slices/basketSlice";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector(selectTotalCartItems);
  return (
    <main>
      {/* Breadcumb */}
      <div className="bg-[#f5f5f5] p-5">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb />
        </div>
      </div>
      {!cartItem ? (
        <div className="p-5">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-2xl md:text-3xl xl:text-4xl text-center font-bold pb-6 capitalize">
              your cart is empty!!!
            </h1>
            <div className=" flex items-center justify-center">
              <img src="/gif/empty_cart.gif" alt="Empty_gif" />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-2xl md:text-3xl xl:text-4xl text-center font-bold">
              Cart
            </h1>
            <CartTable />
            <CartActions />
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
