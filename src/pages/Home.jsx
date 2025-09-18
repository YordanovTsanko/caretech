import React from "react";
import Banner from "../components/home/Banner";
import FeaturesSection from "../components/home/FeaturesSection";
import PromoProductsSection from "../components/home/PromoProductsSection";
import AdImageSectionTwo from "../components/home/AdImageSectionTwo";
import NewProductsSection from "../components/home/NewProductsSection";
import OurPartnersSection from "../components/home/OurPartnersSection";
import ReviewsSlider from "../components/home/ReviewsSlider";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full md:px-20 max-w-[2000px] mx-auto">
      <Banner />
      <FeaturesSection />
      <PromoProductsSection />
      <OurPartnersSection />
      <NewProductsSection />
      <ReviewsSlider />
      <AdImageSectionTwo />
    </div>
  );
};

export default Home;
