import HomePosters from "@/app/components/home/HomePosters";
import TodaysDeals from "@/app/components/home/TodaysDeals";
import React from "react";
import HomeCategory from "../app/components/home/HomeCategory";
import HomeHero from "../app/components/home/HomeHero";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeCategory />
      <TodaysDeals />
      <HomePosters />
    </>
  );
};

export default Home;
