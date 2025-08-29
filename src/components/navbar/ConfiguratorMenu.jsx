
  import React from "react";
  import { FaTimes } from "react-icons/fa";

const ConfiguratorMenu = ({onClose}) => {
  return (
    <div className="bg-background text-white px-6 pb-6 pt-10 relative">
      <button
        onClick={onClose}
        className="absolute top-1 right-0 p-2 rounded hover:bg-white/10 transition"
      >
        <FaTimes className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default ConfiguratorMenu;
