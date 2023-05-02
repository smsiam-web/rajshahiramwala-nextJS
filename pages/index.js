import HomePosters from "@/app/components/home/HomePosters";
import TodaysDeals from "@/app/components/home/TodaysDeals";
import React from "react";
import HomeCategory from "../app/components/home/HomeCategory";
import HomeHero from "../app/components/home/HomeHero";
import { getPage, getPageServer } from "../app/utils/helpers";
import Shop from "@/app/components/home/shop";
// import AdmainMain from "@/admin";

const Home = ({ page }) => {
  // if (page === "admin") return <AdmainMain />;

  return (
    <>
      <HomeHero />
      <HomeCategory />
      <TodaysDeals />
      <Shop />
      <HomePosters />
    </>
  );
};

export default Home;
export async function getServerSideProps(context) {
  let page;
  const { req } = context;
  if (req) {
    let host = req.headers.host;
    page = getPageServer(host) || null;
  }

  return {
    props: {
      page: page,
    },
  };
}
