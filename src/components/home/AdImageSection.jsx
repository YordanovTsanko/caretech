import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { id: 1, src: "https://placehold.co/800x600?text=Promo+1" },
  { id: 2, src: "https://placehold.co/800x600?text=Promo+2" },
  { id: 3, src: "https://placehold.co/800x600?text=Promo+3" },
];

const AdImageSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const handle = () => setIsMobile(mq.matches);
    handle();
    if (mq.addEventListener) mq.addEventListener("change", handle);
    else mq.addListener(handle);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handle);
      else mq.removeListener(handle);
    };
  }, []);

  if (!isMobile) {
    return (
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-3 gap-4">
          {slides.slice(0, 3).map((s) => (
            <div key={s.id} className="overflow-hidden bg-gray-100">
              <img
                src={s.src}
                alt={`promo-${s.id}`}
                className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover block"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Mobile slider settings - no padding, full-width images
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    appendDots: (dots) => (
      <div className="relative w-full flex justify-center z-40 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 py-1 bottom-8">{dots}</div>
      </div>
    ),
    customPaging: () => <div className="w-2 h-2 rounded-full bg-white/90" />,
    swipeToSlide: true,
  };

  return (
    <div className="max-w-[1280px] mx-auto w-full px-0 relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((s) => (
          <div key={s.id} className="w-full">
            <div className="relative overflow-hidden w-full">
              <img
                src={s.src}
                alt={`promo-${s.id}`}
                className="w-full max-w-full h-auto object-cover block"
                draggable={false}
                style={{ display: "block" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdImageSection;
