import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, removeUser } from "../redux/slices/authSlice";
import { selectItems, updateBasket } from "../redux/slices/basketSlice";
import { auth, db } from "../utils/firebase";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);

  useEffect(() => {
    // firebase user listeners
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              dispatch(updateUser(doc.data()));
            }
          });
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

  useEffect(() => {
    if (!cartItems.length) return;
    // save cart items to local storage
    const items = JSON.stringify(cartItems || []);
    localStorage.setItem("@CART_ITEMS", items);
  }, [cartItems]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
