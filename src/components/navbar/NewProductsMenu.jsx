import React from "react";
import Slider from "react-slick";
import { newProducts } from "../../utils/utils";
import { FaTimes } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewProductsMenu = ({ onClose }) => {
  const euroRate = 1.96;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-background text-white px-6 pb-6 pt-10 relative">
      <button
        onClick={onClose}
        className="absolute top-1 right-0 p-2 rounded hover:bg-white/10 transition"
      >
        <FaTimes className="w-6 h-6 text-white" />
      </button>

      <Slider {...settings}>
        {newProducts.map((product) => {
          const discountedPrice = product.discount
            ? product.price * (1 - product.discount / 100)
            : product.price;

          return (
            <div key={product.id} className="p-2">
              <div className="relative p-4 bg-white/5 rounded-lg hover:bg-primary/20 flex flex-col h-full">
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold">
                  НОВО
                </span>

                {product.discount && (
                  <>
                    <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold">
                      -{product.discount}%
                    </span>
                    <span className="absolute top-10 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
                      ПРОМО
                    </span>
                  </>
                )}

                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-fit-contain mx-auto mb-2 rounded"
                  />
                )}

                <h3 className="text-sm font-semibold mb-2 min-h-[3.6rem] line-clamp-3">
                  {product.name}
                </h3>

                <div className="text-center mt-auto">
                  {product.discount ? (
                    <p className="text-white/60 line-through text-sm">
                      {product.price.toFixed(2)} лв. /{" "}
                      {(product.price / euroRate).toFixed(2)} €
                    </p>
                  ) : (
                    <p className="text-transparent text-sm">
                      {product.price.toFixed(2)} лв. /{" "}
                      {(product.price / euroRate).toFixed(2)} €
                    </p>
                  )}
                  <p className="text-white font-semibold">
                    {discountedPrice.toFixed(2)} лв. /{" "}
                    {(discountedPrice / euroRate).toFixed(2)} €
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default NewProductsMenu;
