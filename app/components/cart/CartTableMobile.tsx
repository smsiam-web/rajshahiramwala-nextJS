import { MdDelete } from "react-icons/md";
import Quantity from "../shared/Quantity";
import { TbCurrencyTaka } from "react-icons/tb";

const CartTableMobile = () => {
  return (
    <div className="md:hidden flex gap-3 mb-5 border-b pb-5">
      <div>
        <img
          src="http://localhost:3000/_next/image?url=%2Fimages%2Fproducts%2Fgopalvhog_1.jpeg&w=384&q=75"
          loading="lazy"
          alt=""
          className="w-20 h-20 object-cover rounded-md"
        />
      </div>
      <div className="flex-grow space-y-1">
        <h1 className="text-lg font-bold text-title">গোপালভোগ আম</h1>
        <p className="text-sm text-gray-500">Weight: 12kg</p>
        <p className="text-sm text-gray-500 flex items-center">
          Price:{" "}
          <span className="text-primary font-semibold">
            <span className="flex items-center text-center">
              <TbCurrencyTaka />
              100
            </span>
          </span>
        </p>
        <div className="py-2">
          <Quantity />
        </div>
        <p className="text-sm text-gray-500 flex items-center">
          Price:
          <span className="text-green font-semibold">
            <span className="flex items-center text-center">
              <TbCurrencyTaka />
              100
            </span>
          </span>
        </p>
      </div>
      <div className="mt-2">
        <MdDelete className="text-2xl cursor-pointer hover-red" />
      </div>
    </div>
  );
};

export default CartTableMobile;
