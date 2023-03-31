import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DASHBOARD_NAV from "../../configs/dashboard_nav";
import Button from "../shared/Button";
import { auth } from "@/app/utils/firebase";
import { FiLogOut } from "react-icons/fi";

const DashboardNavigation = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-gray-100 p-3 rounded-md space-y-3 flex flex-col h-fit">
        {DASHBOARD_NAV.map((nav_item, index) => {
          return (
            <Link href={`${nav_item.href}`} key={index} legacyBehavior>
              <a
                className={`flex items-center gap-4 ${
                  router.pathname == nav_item.href && "bg-gray-200"
                } rounded-md cursor-pointer p-2`}
                key={nav_item.href}
                href={`${nav_item.href}`}
              >
                <div className="flex items-center justify-center text-base text-white bg-primary bg-opacity-80 p-2 rounded-md">
                  {nav_item.icon}
                </div>
                <h4 className="font-semibold">{nav_item.title}</h4>
              </a>
            </Link>
          );
        })}
        <div className="p-4">
          <Button
            onClick={() => auth.signOut()}
            icon={<FiLogOut size={20} />}
            title="Log Out"
            className={
              "bg-slate-800 opacity-90 hover:opacity-100 text-white w-full text-sm"
            }
          />
        </div>
      </div>
    </>
  );
};

export default DashboardNavigation;
