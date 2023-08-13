import AdminLayout from "@/admin/AdminLayout";
import PlaceOrder from "@/admin/components/placeOrder";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "@/app/redux/slices/orderSlice";
import { db } from "@/app/utils/firebase";
const products = () => {
  const dispatch = useDispatch();
  // Get order from firebase database
  useEffect(() => {
    const unSub = db
      .collection("placeOrder")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        const order = [];
        snap.docs.map((doc) => {
          order.push({
            id: doc.id,
            ...doc.data(),
            timestamp: doc.data().timestamp?.toDate().getTime(),
          });
        });
        dispatch(updateOrder(order));
      });
    return () => {
      unSub();
    };
  }, []);
  return (
    <AdminLayout>
      <PlaceOrder />
    </AdminLayout>
  );
};

export default products;
