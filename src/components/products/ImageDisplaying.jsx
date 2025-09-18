import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -right-3 z-10 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center cursor-pointer transform -translate-y-1/2 hover:bg-gray-700"
    onClick={onClick}
  >
    &gt;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-3 z-10 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center cursor-pointer transform -translate-y-1/2 hover:bg-gray-700"
    onClick={onClick}
  >
    &lt;
  </div>
);

const ImageDisplaying = ({ primaryImageUrl, additionalImages, nameBg }) => {
  const [mainImage, setMainImage] = useState(primaryImageUrl);
  const [thumbnails, setThumbnails] = useState(additionalImages);

  const handleThumbnailClick = (index) => {
    const clickedImage = thumbnails[index];
    const newThumbnails = [...thumbnails];
    newThumbnails[index] = mainImage;
    setMainImage(clickedImage);
    setThumbnails(newThumbnails);
  };

  const sliderSettings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[800px] mx-auto">
      <div className="w-full h-[400px] flex items-center justify-center overflow-hidden bg-white">
        <img
          src={mainImage}
          alt={nameBg}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative">
        <Slider {...sliderSettings}>
          {thumbnails.map((img, i) => (
            <div key={i} className="px-1">
              <div
                className="h-[80px] flex items-center justify-center cursor-pointer hover:border-blue-500"
                onClick={() => handleThumbnailClick(i)}
              >
                <img
                  src={img}
                  alt={`${nameBg} thumbnail ${i + 1}`}
                  className="max-h-[70px] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageDisplaying;
