import styles from "./Sidebar.module.css";
import { useRouter } from "next/router";
import { menus } from "../../configs/menus";
import Link from "next/link";
import Logo from "@/app/components/shared/Logo";
import { RxCross1 } from "react-icons/rx";

function Sidebar({ setSidebarActive }) {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div
          className={"items-center justify-between gap-2 mb-8 " + styles.logo}
        >
          <Logo />
          <div
            className={styles.sidebarToggle}
            onClick={() => setSidebarActive((old) => !old)}
          >
            <RxCross1 className={styles.icon} />
          </div>
        </div>
        <div className={styles.sidebar__items}>
          {/* <h5>Title</h5> */}
          {menus &&
            menus?.map(({ pathname, Icon, title }) => (
              <Link
                onClick={() => setSidebarActive((old) => !old)}
                href={pathname}
                key={pathname}
                className={
                  styles.sidebar__item +
                  " " +
                  (router.asPath === pathname
                    ? styles.sidebar__item_active
                    : "")
                }
                // onClick={() =>
                //   router.asPath !== pathname && router.push(pathname)
                // }
              >
                <div className={styles.sidebar__item_icon_wrapper}>
                  <Icon className={styles.icon} />
                </div>
                <span>{title}</span>
              </Link>
            ))}
        </div>
      </div>
      <div
        onClick={() => setSidebarActive((old) => !old)}
        className={styles.backdrop}
      />
    </>
  );
}

export default Sidebar;
