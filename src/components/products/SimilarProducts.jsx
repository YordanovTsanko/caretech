import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import laptops from "../../utils/laptops.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Prev"
    className="absolute left-1 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 sm:flex hidden"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next"
    className="absolute right-1 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 sm:flex hidden"
  >
    <FaChevronRight />
  </button>
);

const SimilarProducts = () => {
  const euroRate = 1.96;
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="max-w-[1280px] w-full mx-auto px-4 py-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left">
        ПОДОБНИ ПРОДУКТИ
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {laptops.content.map((product) => {
            const discounted = product.discount ?? 0;
            const price = Number(product.price ?? 0);
            const finalPrice = discounted
              ? price * (1 - discounted / 100)
              : price;

            return (
              <div
                key={product.id}
                className="px-2"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col h-full cursor-pointer hover:bg-primary/10">
                  {/* Badges */}
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

                  {/* Image */}
                  <div className="w-full h-40 sm:h-48 md:h-56 flex items-center justify-center mb-3">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                        draggable={false}
                      />
                    ) : (
                      <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-semibold text-center break-words mb-2 min-h-[3rem]">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mt-auto">
                    {discounted > 0 ? (
                      <p className="text-black/60 line-through text-sm">
                        {price.toFixed(2)} лв. / {(price / euroRate).toFixed(2)} €
                      </p>
                    ) : (
                      <p className="text-transparent text-sm">–</p>
                    )}
                    <p className="text-black font-semibold text-sm md:text-base">
                      {finalPrice.toFixed(2)} лв. /{" "}
                      {(finalPrice / euroRate).toFixed(2)} €
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

export default SimilarProducts;
