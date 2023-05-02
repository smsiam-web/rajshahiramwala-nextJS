import Link from "next/link";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const SingleProduct = () => {
  return (
    <div>
      <Link href={"/admin/products"}>
        <div className="flex items-center justify-start text-sub-title">
          <BsArrowLeftShort size={22} />
          <span>Back</span>
        </div>
      </Link>
      <h1>SingleProduct</h1>
    </div>
  );
};

export default SingleProduct;
