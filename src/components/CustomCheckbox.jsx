import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <div
        className={`w-4 h-4 flex items-center justify-center rounded-md border transition
          ${checked ? "bg-primary border-primary" : "bg-white border-gray-300"}
        `}
        onClick={() => onChange(!checked)}
      >
        {checked ? (
          <FiCheck className="text-white text-sm" />
        ) : (
          <FiX className="text-gray-400 text-sm" />
        )}
      </div>
      <span className="text-sm text-gray-500">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
