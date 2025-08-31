// TopOrderedProducts.jsx
import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { newProducts } from "../../utils/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Prev"
    className="hidden sm:inline-flex absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 rounded-full text-white hover:bg-black/60"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next"
    className="hidden sm:inline-flex absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 rounded-full text-white hover:bg-black/60"
  >
    <FaChevronRight />
  </button>
);

const TopOrderedProducts = () => {
  const euroRate = 1.96;
  const sliderRef = useRef(null);

  const popularityKey =
    newProducts.length && Object.prototype.hasOwnProperty.call(newProducts[0], "orders")
      ? "orders"
      : newProducts.length && Object.prototype.hasOwnProperty.call(newProducts[0], "sold")
      ? "sold"
      : newProducts.length && Object.prototype.hasOwnProperty.call(newProducts[0], "popularity")
      ? "popularity"
      : null;

  const sorted = [...newProducts].sort((a, b) => {
    const ai = popularityKey ? a[popularityKey] ?? 0 : a.orders ?? a.sold ?? a.popularity ?? 0;
    const bi = popularityKey ? b[popularityKey] ?? 0 : b.orders ?? b.sold ?? b.popularity ?? 0;
    return bi - ai;
  });

  const topProducts = sorted.slice(0, 12);

  const settings = {
    dots: false,
    infinite: false,
    speed: 450,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false, dots: true } },
    ],
  };

  return (
    <section className="max-w-[1280px] w-full mx-auto px-4 py-8">
      <style jsx global>{`
        .slick-dots {
          bottom: -30px;
        }
        .slick-dots li button:before {
          font-size: 10px;
          color: rgba(0, 0, 0, 0.3);
        }
        .slick-dots li.slick-active button:before {
          color: rgba(0, 0, 0, 0.75);
        }
      `}</style>
      <h2 className="text-xl font-semibold mb-4">НАЙ-ПОРЪЧВАНИ ПРОДУКТИ</h2>
      <div className="relative pb-8 sm:pb-0">
        <Slider ref={sliderRef} {...settings}>
          {topProducts.map((product) => {
            const discounted = product.discount ?? 0;
            const price = Number(product.price ?? 0);
            const finalPrice = discounted ? price * (1 - discounted / 100) : price;

            return (
              <div key={product.id} className="p-2 h-full">
                <div className="relative p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-primary/20 flex flex-col h-full">
                  {product.new && (
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold">
                      НОВО
                    </span>
                  )}
                  {discounted > 0 && (
                    <>
                      <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold">
                        -{discounted}%
                      </span>
                      <span
                        className={`absolute ${
                          product.new ? "top-10" : "top-2"
                        } left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold`}
                      >
                        ПРОМО
                      </span>
                    </>
                  )}
                  <div className="w-32 h-32 mx-auto mb-2 flex items-center justify-center">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                        draggable={false}
                      />
                    ) : (
                      <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
                        No Image
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold mb-2 min-h-[3.6rem] line-clamp-3 text-center">
                    {product.name}
                  </h3>
                  <div className="text-center mt-auto">
                    {discounted > 0 ? (
                      <p className="text-black/60 line-through text-sm">
                        {price.toFixed(2)} лв. / {(price / euroRate).toFixed(2)} €
                      </p>
                    ) : (
                      <p className="text-transparent text-sm">–</p>
                    )}
                    <p className="text-black font-semibold">
                      {finalPrice.toFixed(2)} лв. / {(finalPrice / euroRate).toFixed(2)} €
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default TopOrderedProducts;