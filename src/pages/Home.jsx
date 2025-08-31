import React from "react";
import Banner from "../components/home/Banner";
import FeaturesSection from "../components/home/FeaturesSection";
import AdImageSection from "../components/home/AdImageSection";
import TopOrderedProducts from "../components/home/TopOrderedProducts";
import ShopByBrand from "../components/home/ShopByBrand";
import AdImageSectionTwo from "../components/home/AdImageSectionTwo";
import GamingSection from "../components/home/GamingSection";
import SubscriptionSection from "../components/home/SubscriptionSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <Banner />
      <FeaturesSection />
      <AdImageSection />
      <TopOrderedProducts />
      <GamingSection />
      <AdImageSectionTwo />
      <ShopByBrand />
      <hr class="h-px my-4 bg-primary border-0 w-full max-w-[1280px]" />
      <SubscriptionSection />
    </div>
  );
};

export default Home;
