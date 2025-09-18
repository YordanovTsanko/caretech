import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ReviewsCard = ({ name, time, review, rating }) => {
  const [expanded, setExpanded] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-400 w-4 h-4" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 w-4 h-4" />
      );
    }

    while (stars.length < 5) {
      stars.push(
        <FaRegStar
          key={`empty-${stars.length}`}
          className="text-gray-400 w-4 h-4"
        />
      );
    }

    return stars;
  };

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-md p-4 md:p-6 flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="font-semibold text-gray-900 text-sm md:text-base">
          {name}
        </h3>
        <span className="text-xs font-light text-gray-500">{time}</span>
      </div>
      {/* Stars */}
      <div className="flex items-center gap-1">{renderStars(rating)}</div>
      {/* Review text */}
      <div className="text-gray-700 text-sm">
        {!expanded ? (
          <p className="line-clamp-3 min-h-[4rem]">
            {review}
          </p>
        ) : (
          <p>{review}</p>
        )}

        {/* Show "още" button only if text is long */}
        {review.length > 150 && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="text-blue-600 text-sm font-medium mt-1 hover:underline"
          >
            още
          </button>
        )}
      </div>
      <p className="flex items-center justify-end text-[10px] font-medium gap-1 -mb-3 text-gray-700">
        Отзив от
        <span className="flex items-start">
          <FcGoogle className="w-3 h-3 mt-[1px]" />
          <span className="ml-1 font-semibold tracking-tight">
            <span className="text-[#4285F4] -ml-1">o</span>
            <span className="text-[#DB4437]">o</span>
            <span className="text-[#F4B400]">g</span>
            <span className="text-[#0F9D58]">l</span>
            <span className="text-[#DB4437]">e</span>
          </span>
        </span>
      </p>
    </div>
  );
};

export default ReviewsCard;
