import FooterCard from "../FooterCard";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaAngleDoubleRight, FaMinus } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import Description from "./Description";
import Link from "next/link";
import ProductMoreInfo from "./ProductMoreInfo";
import Button from "../shared/Button";
// import Breadcrumb from "../shared/Breadcrumb";
// import Quantity from "../shared/Quantity";

const ProductDetails = ({ price = 90, oldPrice = "100" }) => {
  return (
    <div className="py-6 sm:py-12 bg-[#F5F5F5]">
      <div className="container">
        <div className="px-6 sm:px-10 py-8 sm:py-14 bg-white rounded-2xl">
          <div className="flex flex-wrap lg:flex-row flex-col lg:gap-0 gap-7">
            <div className="lg:w-2/5 w-full lg:border-r p-2">
              <img
                src="/images/products/gopalvhog_1.jpeg"
                alt=""
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            <div className="lg:w-2/5 w-full lg:px-10 pl-0">
              {/* <Breadcrumb /> */}
              <h4 className="md:text-xl text-base font-bold mb-2 mt-5 text-orange">
                আম
              </h4>
              <h1 className="text-title md:text-3xl text-xl font-semibold mb-2 sm:mb-3 xl:mb-5">
                গোপালভোগ আম
              </h1>
              <span className="text-sub-title text-xs">
                ⭐⭐⭐⭐⭐ (1 customer review)
              </span>
              <div className="my-3">
                <span className="text-sm text-sub-title mb-2 block">
                  প্রতি কেজি
                </span>
                <div className="flex items-center gap-1">
                  <span
                    className={`text-xl flex items-center font-bold ${
                      oldPrice ? "text-orange" : "text-green"
                    }`}
                  >
                    <TbCurrencyTaka className="text-2xl font-bold" />
                    {price}
                  </span>
                  {oldPrice && (
                    <span className="text-lg flex items-center line-through text-gray-400">
                      <TbCurrencyTaka className="text-xl font-bold" />
                      {oldPrice}
                    </span>
                  )}
                </div>
              </div>
              <div className="my-5 bg-[#EBFAE9] w-fit px-3 py-2 border border-[#82d45e] rounded-md">
                Availability:
                <span className="text-green ml-1 font-bold">In stock</span>
              </div>
              <div className="border-t"></div>
              <div className="my-5 flex flex-col gap-5">
                <div className="flex xl:flex-row flex-col w-full justify-between gap-5">
                  <div className="flex flex-col">
                    <span className="text-sm pb-2 block text-sub-title">
                      আমের পরিমানঃ
                    </span>
                    <select
                      name="product_quantity"
                      id="ss"
                      className="px-6 py-3 text-base text-sub-title bg-[#f5f5f5] rounded-md w-full items-center "
                    >
                      <option value="0">পরিমান নির্বাচন করুন</option>
                      <option value="1">১২ কেজি (ছোট ক্যারেট)</option>
                      <option value="2">২৩ কেজি (বড় ক্যারেট)</option>
                    </select>
                  </div>
                  {/* <Quantity /> */}
                  <div className="flex flex-col">
                    <span className="text-sm pb-2 block text-sub-title">
                      ক্যারেট সংখ্যাঃ
                    </span>
                    <div className="flex justify-between border rounded-md">
                      <button className="bg-[#f5f5f5] font-bold px-3 py-3 hover-primary text-sub-title">
                        <FaMinus />
                      </button>
                      <div className="px-5 flex-grow flex items-center justify-center">
                        {1}
                      </div>
                      <button className="bg-[#f5f5f5] px-3 py-3 font-bold hover-primary text-sub-title">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                </div>
                {/* product button  */}
                <div className="flex gap-3">
                  <Button btnName="Add to Cart" style={"bg-primary"} />
                  <Link href={"/checkout"}>
                    <Button
                      btnName={"Order Now"}
                      style={"bg-black text-white"}
                    />
                  </Link>
                </div>
              </div>
              <div className="border-t my-7"></div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <FaAngleDoubleRight className="text-greens text-xl" />
                  <p className="text-gray-900">
                    <span className="text-sub-title">কোয়ালিটিঃ</span> Best
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaAngleDoubleRight className="text-greens text-xl" />
                  <p className="text-gray-900">
                    <span className="text-sub-title">জাতঃ</span> গোপালভোগ
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaAngleDoubleRight className="text-greens text-xl" />
                  <p className="text-gray-900">
                    <span className="text-sub-title">
                      রাজশাহী অঞ্চলের অন্যতম জনপ্রিয় আম
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaAngleDoubleRight className="text-greens text-xl" />
                  <p className="text-gray-900">
                    <span className="text-sub-title">
                      প্রতিটি আমের সাইজ প্রায় ২০০-২৫০ গ্রাম
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaAngleDoubleRight className="text-greens text-xl" />
                  <p className="text-gray-900">
                    <span className="text-sub-title">
                      প্রতি কেজিতে ৫-৬ টি আম
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaAngleDoubleRight className="text-greens text-xl" />
                  <p className="text-gray-900">
                    <span className="text-sub-title">অনেক বেশি রসালো</span>
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaAngleDoubleRight className="text-greens text-xl" />
                  <p className="text-gray-900">
                    <span className="text-sub-title">
                      অর্ডার করার ৪-৫ দিনের ভিতর কুরিয়ারের বুকিং করা হবে
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaAngleDoubleRight className="text-greens text-xl" />
                  <p className="text-gray-900">
                    <span className="text-sub-title">
                      যেকোন তথ্য জানতে কল করুন 01313147532
                    </span>
                  </p>
                </div>

                <p className="text-gray-900">
                  <span className="text-greens">Categories:</span> আম, রাজশাহীর
                  আম, ফল, গোপালভোগ আম।
                </p>
                <p className="text-gray-900">
                  <span className="text-sub-title">Tag:</span> Best Seller
                </p>
              </div>
            </div>
            <div className="lg:w-1/5 w-full">
              <div className="bg-[#F3F3F3] px-5 py-7 rounded-md">
                <FooterCard
                  image="/icons/icon_rocket.svg"
                  title="Free Shipping"
                  subTitle="For all orders over BDT:2000/-"
                />
                <div className="border-t my-5"></div>
                <FooterCard
                  image="/icons/icon_reload.svg"
                  title="1 & 1 Returns"
                  subTitle="Cancellation after 1 day"
                />
                <div className="border-t my-5"></div>
                <FooterCard
                  image="/icons/icon_protect.svg"
                  title="Secure Payment"
                  subTitle="100% secure payments"
                />
              </div>
              <div className="bg-[#F3F3F3] px-5 mt-5 py-7 rounded-md">
                <p className="font-bold text-title">Hotline Order:</p>
                <span className="text-sub-title">
                  Mon - Fri: 7:00 am - 18:00PM
                </span>
                <p className="text-xl md:text-2xl font-bold text-title mt-5">
                  +880 1313-147532
                </p>
              </div>
            </div>
          </div>
        </div>

        <ProductMoreInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
