import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { image: "https://placehold.co/1400x440" },
  { image: "https://placehold.co/1400x440" },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden sm:inline-flex absolute left-3 top-1/2 -translate-y-1/2 z-40 p-2 bg-black/40 rounded-full text-white hover:bg-primary transition"
    aria-label="Previous"
  >
    <FaChevronLeft size={18} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden sm:inline-flex absolute right-3 top-1/2 -translate-y-1/2 z-40 p-2 bg-black/40 rounded-full text-white hover:bg-primary transition"
    aria-label="Next"
  >
    <FaChevronRight size={18} />
  </button>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="relative w-full flex justify-center z-40 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 py-1 bottom-12">
          {dots}
        </div>
      </div>
    ),
  };

  return (
    <div className="banner relative w-full mx-auto">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="relative">
            <img
              src={slide.image}
              alt={`slide-${i}`}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
