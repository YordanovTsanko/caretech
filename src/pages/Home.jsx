import React from "react";
import Banner from "../components/home/Banner";
import FeaturesSection from "../components/home/FeaturesSection";
import AdImageSection from "../components/home/AdImageSection";
import TopOrderedProducts from "../components/home/TopOrderedProducts";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <Banner/>
      <FeaturesSection />
      <AdImageSection />
      <TopOrderedProducts />
    </div>
  );
};

export default Home;
