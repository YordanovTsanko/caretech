import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  "Ремонт на лаптопи",
  "Ремонт на компютри",
  "Ремонт на таблети",
  "Ремонт на смартфони",
  "Ремонт на монитори",
  "Ремонт на принтери",
  "Зареждане на тонер",
  "Инсталации",
  "Резервни части",
  "Дистанционни услуги",
  "Допълнителни гаранции",
  "Услуги",
  "Други",
];

const ServicesMenu = ({ onClose }) => {
  const dropdownVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <motion.div
      className="bg-background text-white px-6 pb-10 pt-2 relative origin-top"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={dropdownVariants}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-2 rounded hover:bg-white/10 transition"
      >
        <FaTimes className="w-6 h-6 text-white" />
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8">
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={`/services/${link.toLowerCase().replace(/ /g, "-")}`}
            className="px-2 py-1 border-b border-white/20 hover:text-primary transition"
          >
            {link}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};
export default ServicesMenu;
