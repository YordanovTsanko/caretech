import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { partners } from "../../utils/partners";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous partners"
    className="hidden sm:inline-flex absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 rounded-full text-white hover:bg-primary transition"
    type="button"
  >
    <FaChevronLeft size={16} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next partners"
    className="hidden sm:inline-flex absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 rounded-full text-white hover:bg-primary transition"
    type="button"
  >
    <FaChevronRight size={16} />
  </button>
);

// NOTE: exported as default React component (single-file)
export default function OurPartnersSection() {
  const visiblePartners = partners;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    // fewer slides visible -> each image can be larger
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    // make the active slide slightly more centered/noticeable
    centerMode: false,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
    accessibility: true,
    pauseOnHover: true,
    lazyLoad: "ondemand",
  };

  return (
    <section className="max-w-[1280px] flex flex-col w-full mx-auto px-4 relative py-6">
      <h2 className="text-xl font-semibold mb-4">НАШИТЕ ПАРТНЬОРИ</h2>

      <div className="relative border-b-4 border-t-4 border-primary rounded-lg">
        <Slider {...settings}>
          {visiblePartners.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-center p-6 group"
              role="group"
              aria-label={`Partner ${p.alt}`}
            >
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                draggable="false"
                // increased fixed responsive heights so logos appear larger
                className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto object-contain mx-auto transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
