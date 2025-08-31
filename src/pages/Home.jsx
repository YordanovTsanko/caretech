import React from "react";
import Banner from "../components/home/Banner";
import FeaturesSection from "../components/home/FeaturesSection";
import AdImageSection from "../components/home/AdImageSection";
import TopOrderedProducts from "../components/home/TopOrderedProducts";
import ShopByBrand from "../components/home/ShopByBrand";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <Banner/>
      <FeaturesSection />
      <AdImageSection />
      <TopOrderedProducts />
      <AdImageSection />
      <ShopByBrand />
    </div>
  );
};

export default Home;
