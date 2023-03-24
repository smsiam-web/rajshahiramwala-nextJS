import { MdDelete } from "react-icons/md";
import Quantity from "../shared/Quantity";
import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "@/app/redux/slices/basketSlice";

const CartTableMobile = ({ id, name, image, price, quantity }) => {
  // redux setup
  const dispatch = useDispatch();

  // inCrease item quantity
  const increaseQuantity = () => {
    dispatch(increaseItemQuantity(id));
  };
  // deCrease item quantity
  const decreaseQuantity = () => {
    dispatch(decreaseItemQuantity(id));
  };
  return (
    <div className="md:hidden flex gap-3 mb-5 border-b pb-5">
      <div>
        <img
          src={`/images/products/${image}`}
          loading="lazy"
          alt=""
          className="w-20 h-20 object-cover rounded-md"
        />
      </div>
      <div className="flex-grow space-y-1">
        <h1 className="text-lg font-bold text-title">{name}</h1>
        <p className="text-sm text-gray-500">Weight: 12kg</p>
        <p className="text-sm text-gray-500 flex items-center">
          Price:
          <span className="text-primary font-semibold">
            <span className="flex items-center text-center">
              <TbCurrencyTaka />
              {price}
            </span>
          </span>
        </p>
        <div className="py-2">
          <Quantity
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </div>
        <p className="text-sm text-gray-500 flex items-center">
          Price:
          <span className="text-green font-semibold">
            <span className="flex items-center text-center">
              <TbCurrencyTaka />
              {(quantity * price).toFixed(2)}
            </span>
          </span>
        </p>
      </div>
      <div className="mt-2">
        <MdDelete
          onClick={() => dispatch(removeItem(id))}
          className="text-2xl cursor-pointer hover-red"
        />
      </div>
    </div>
  );
};

export default CartTableMobile;
