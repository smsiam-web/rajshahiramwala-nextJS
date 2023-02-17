import React from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import LeftRight from "./LeftRight";

const SectionHeading = ({ title = "", link = "" }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="md:flex items-center gap-4 sm:gap-6 lg:gap-10">
        <h1 className="text-title text-xl font-bold sm:text-2xl md:text-3xl pb-1 sm:pb-2 md:pb-0">
          {title}
        </h1>
        <Link href={"/"} legacyBehavior>
          <a href="/" className="text-sub-title flex items-center gap-2">
            <span>{link}</span> <AiOutlineRight size={16} />
          </a>
        </Link>
      </div>
      {/* Left & Right button  */}
      <LeftRight />
    </div>
  );
};

export default SectionHeading;
