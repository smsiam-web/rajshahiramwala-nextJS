import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const NavUser = () => {
  const [isActive, setActive] = useState(false);
  const toggle = () => {
    {
      isActive === false ? setActive(true) : setActive(false);
    }
  };
  return (
    <div className="relative">
      <Image
        onClick={toggle}
        className="cursor-pointer hover:shadow-md rounded-full"
        src="/avatar.jpg"
        alt="Picture of the author"
        width={50}
        height={50}
        quality={100}
      />
      {isActive && (
        <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white p-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 ">
            <Link href={"/admin"}>
              <span className="flex items-center gap-3 text-sm">
                <RxDashboard size={18} />
                <span>Dashboard</span>
              </span>
            </Link>
          </li>
          <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 ">
            <Link href={"/admin/setting"}>
              <span className="flex items-center gap-3 text-sm">
                <AiOutlineSetting size={18} />
                <span>Edit Profile</span>
              </span>
            </Link>
          </li>
          <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 ">
            <a href="/dashboard">
              <span className="flex items-center gap-3 text-sm">
                <IoIosLogOut size={18} />
                <span>Log Out</span>
              </span>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavUser;
