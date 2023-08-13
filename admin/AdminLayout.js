import { selectUser } from "@/app/redux/slices/authSlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NotFound from "@/app/components/NotFound";

const AdminLayout = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (user?.email === process.env.ADMIN_AUTH_MAIL) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return <>{isAuth ? children : <NotFound />}</>;
};

export default AdminLayout;
