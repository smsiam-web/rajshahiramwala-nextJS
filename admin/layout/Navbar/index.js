import { useState } from "react";
import Logo from "@/app/components/shared/Logo";
import styles from "./Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import NavUser from "@/admin/components/NavUser";
import Link from "next/link";

function Navbar({ setSidebarActive }) {
  return (
    <div className={`${styles.container} fixed`}>
      <div className={styles.wrapper}>
        <div className="flex px-4 py-2 justify-between w-full items-center gap-4">
          <div
            className="p-2 text-white bg-indigo-200 rounded-lg"
            onClick={() => setSidebarActive((old) => !old)}
          >
            <AiOutlineMenu className={styles.icon} />
          </div>
          <Link href={"/admin"}>
            <Logo />
          </Link>

          <NavUser />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
