import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser, removeUser } from "../redux/slices/authSlice";
import { auth } from "../utils/firebase";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          updateUser({
            email: user.email,
            name: user.displayName,
            imgae: user.photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
