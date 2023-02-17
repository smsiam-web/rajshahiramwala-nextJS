import React from "react";
import Link from "next/link";
import Search from "../components/Search";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import Logo from "../components/shared/Logo";

const Header = () => {
  return (
    <header className="bg-white py-5 sm:py-7 border-b">
      <div className="container">
        {/* Header Top Area */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* {Search} */}
          <Search />

          {/* Contact */}
          <div className="group xl:flex flex-col hidden">
            <a className="text-2xl font-bold" href="tel:+8801837666008">
              +880 1313-147532
            </a>
            <p className="self-end group-hover:text-primary animate-duration text-sub-title">
              Support 24/7
            </p>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-3 ">
            <a href="tel:+8801837666008" className="xl:hidden">
              <div className="relative">
                <BiSupport className="text-3xl text-title hover-greens" />
                <span className="bg-green-500 rounded-full text-center absolute  text-sm p-[1px] -right-1 -top-1 font-semibold">
                  <TiTick className="text-white" />
                </span>
              </div>
            </a>
            <Link href="/my-account" legacyBehavior>
              <a href="/my-account" className="">
                <AiOutlineUser className="text-3xl text-title hover-primary" />
              </a>
            </Link>
            <Link href="/cart" legacyBehavior>
              <a href="/cart" className="flex items-center gap-5">
                <div className="relative">
                  <AiOutlineShoppingCart className="text-3xl text-title hover-primary" />
                  <span className="bg-primary rounded text-center absolute px-2 text-sm -right-3 -top-2 font-semibold">
                    0
                  </span>
                </div>
                <div className="hidden lg:block">
                  <span className="text-sub-title text-sm">Your Cart</span>
                  <p className="text-title font-bold text-lg">
                    $ <span className="text-primary font-semibold">0.00</span>
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
