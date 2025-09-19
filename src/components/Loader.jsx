import React from "react";

const Loader = ({title}) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <svg className="w-12 h-12 animate-spin" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
            stroke="currentColor"
            strokeOpacity="0.2"
          ></circle>
          <path
            d="M45 25a20 20 0 0 0-20-20"
            fill="none"
            strokeWidth="5"
            stroke="currentColor"
            strokeLinecap="round"
          ></path>
        </svg>
        <div className="text-sm text-gray-700">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Loader;
