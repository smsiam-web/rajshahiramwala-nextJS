import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, removeUser, selectUser } from "../redux/slices/authSlice";
import { selectItems, updateBasket } from "../redux/slices/basketSlice";
import { updateProduct } from "../redux/slices/productSlice";
import { auth, db } from "../utils/firebase";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
import { getPage } from "../utils/helpers";
import AdminLayout from "@/admin/layout";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);
  const [page, setPage] = useState(null);

  useEffect(() => {
    if (!cartItems.length) return;
    // save cart items to local storage

    const items = JSON.stringify(cartItems || []);
    localStorage.setItem("@CART_ITEMS", items);
  }, [cartItems]);

  // firebase user listeners
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .onSnapshot((snap) => {
            if (snap.exists) {
              dispatch(updateUser(snap.data()));
            }
          });
        // .get()
        // .then((doc) => {
        //   if (doc.exists) {
        //     dispatch(updateUser(doc.data()));
        //   }
        // });
      } else {
        dispatch(removeUser());
      }
    });

    // get cart items from local storage
    const local_items = localStorage.getItem("@CART_ITEMS")
      ? JSON.parse(localStorage.getItem("@CART_ITEMS"))
      : [];

    dispatch(updateBasket(local_items));

    return unsubscribe;
  }, [router.asPath]);

  // Get products from firebase and update Redux
  useEffect(() => {
    setLoading(true);
    const unSub = db
      .collection("products")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        const product = [];
        snap.docs.map((doc) => {
          product.push({
            id: doc.id,
            ...doc.data(),
            timestamp: doc.data().timestamp.toDate().getTime(),
          });
        });
        dispatch(updateProduct(product));
      });
    setLoading(false);
    return () => {
      unSub();
    };
  }, []);

  useEffect(() => {
    setPage(getPage());
  }, []);

  if (page === null) return null;

  return (
    <>
      {user?.email === "admin@amwala.com" ? (
        <AdminLayout>{children}</AdminLayout>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
