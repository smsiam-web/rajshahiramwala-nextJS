import { selectUser } from "@/app/redux/slices/authSlice";
import { db } from "@/app/utils/firebase";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FiShoppingCart, FiTruck } from "react-icons/fi";
import { MdOutlineDownloadDone, MdOutlinePendingActions } from "react-icons/md";

const Dashboard = () => {
  const user = useSelector(selectUser);

  const [orders, setOrders] = useState([]);

  // Get orders from firebase
  useEffect(() => {
    db.collection("orders")
      .orderBy("created_at", "desc")
      .get()
      .then((querySnapshot) => {
        const orders = [];
        querySnapshot.forEach((doc) => {
          orders.push({
            id: doc.id,
            ...doc.data(),
            created_at: doc.data().created_at.toDate().getTime(),
          });
        });
        const filterOrder = orders.filter((item) => {
          const filterItem = [];
          if (item.user_details.uid !== user.uid) return;
          //
          filterItem.push(item);
          return filterItem;
        });
        setOrders(filterOrder);
      });
  }, []);

  return (
    <div className="md:px-8 md:py-4 bg-gray-50 rounded-md">
      <div className="relative">
        <div className="h-2/5">
          <img
            src="/dash_cover.jpg"
            alt=""
            className="h-[200px] w-full object-cover rounded-md"
          />
        </div>
        <div className="flex gap-3 py-6 border-b bg-white">
          <img
            src={user.image}
            alt="user_img"
            className="rounded-full w-[120px]"
          />
          <div className="flex flex-col py-2 gap-1">
            <h1 className="text-2xl font-bold text-title ">{user.name}</h1>
            <span className="text-sub-title text-sm">{user.email}</span>
            <span className="text-sub-title text-sm">
              {user.billing_details?.phone || "01234 567889"}
            </span>
          </div>
        </div>
        <div className="p-6 grid grid-cols-6 gap-6 bg-white rounded-b-md">
          <div className="col-span-6 sm:col-span-3 p-6 border rounded-md hover:shadow-lg animate-duration">
            <div className="flex items-center gap-3">
              <span className="p-4 text-red-600 bg-red-200 rounded-full text-center">
                <FiShoppingCart size={20} />
              </span>
              <h1 className="text-base flex flex-col font-semibold text-sub-title">
                Total Order{" "}
                <span className="text-2xl font-bold text-title">
                  0{orders.length}
                </span>
              </h1>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3 p-6 border rounded-md hover:shadow-lg animate-duration">
            <div className="flex items-center gap-3">
              <span className="p-4 text- text-orange-600 bg-orange-200 rounded-full text-center">
                <MdOutlinePendingActions size={20} />
              </span>
              <h1 className="text-base flex flex-col font-semibold text-sub-title">
                Pending Order{" "}
                <span className="text-2xl font-bold text-title">
                  0{orders.length}
                </span>
              </h1>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3 p-6 border rounded-md hover:shadow-lg animate-duration">
            <div className="flex items-center gap-3">
              <span className="p-4 text-indigo-600 bg-indigo-200 rounded-full text-center">
                <FiTruck size={20} />
              </span>
              <h1 className="text-base flex flex-col font-semibold text-sub-title">
                Processing Order{" "}
                <span className="text-2xl font-bold text-title">00</span>
              </h1>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3 p-6 border rounded-md hover:shadow-lg animate-duration">
            <div className="flex items-center gap-3">
              <span className="p-4 text-emerald-600 bg-emerald-200  rounded-full text-center">
                <MdOutlineDownloadDone size={20} />
              </span>
              <h1 className="text-base flex flex-col font-semibold text-sub-title">
                Complete Order{" "}
                <span className="text-2xl font-bold text-title">
                  0{orders.length}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
