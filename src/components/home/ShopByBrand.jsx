import React, { useState } from "react";
import { motion } from "framer-motion";

const ShopByBrand = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

const brands = [
  { id: 1, name: "DELL", color: "#007DB8", logo: "DELL" },
  { id: 2, name: "MSI", color: "gradient", logo: "MSI" },
  { id: 3, name: "HP", color: "#0096D6", logo: "HP" },
  { id: 4, name: "Logitech", color: "#000", logo: "Logitech" },
  {
    id: 5,
    name: "Lenovo",
    color: "#E1140A",
    logo: "Lenovo",
    special: "lenovo",
  },
  { id: 6, name: "Intel", color: "#0071C5", logo: "Intel" },
  { id: 7, name: "Samsung", color: "#1428A0", logo: "SAMSUNG" },
  { id: 8, name: "ASUS", color: "#00539B", logo: "ASUS" },
  { id: 9, name: "Acer", color: "#83B81A", logo: "Acer" },
  { id: 10, name: "AOC", color: "#000000", logo: "AOC" },
  { id: 11, name: "Apple", color: "#A3AAAE", logo: "APPLE" },
  {
    id: 12,
    name: "Others",
    color: "#ed1c24",
    logo: "ДРУГИ",
    fontSize: "1.5rem",
  },
];


  const handleBrandClick = (brand) => {
    if (brand.name === "See More") {
      console.log("Show more brands");
    } else {
      console.log(`Navigate to ${brand.name} products`);
    }
  };

  const brandLogoStyle = (brand, isHovered) => {
    const base = {
      fontSize: brand.fontSize || "2rem",
      fontWeight: "bold",
      transform: isHovered ? "scale(1.1)" : "scale(1)",
      transition: "transform 0.3s",
      userSelect: "none",
    };

    if (brand.special === "lenovo") {
      return {
        ...base,
        backgroundColor: brand.color,
        color: "white",
        padding: "8px 20px",
        borderRadius: "4px",
      };
    }

    if (brand.color === "gradient") {
      return {
        ...base,
        background: "linear-gradient(135deg, #000 50%, #ff0000 50%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };
    }

    return { ...base, color: brand.color };
  };

  return (
    <section className="max-w-[1280px] w-full mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-8">ПАЗАРУВАЙ ПО МАРКА</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-none xl:grid-flow-col xl:grid-rows-2 gap-2 sm:gap-4">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            className="bg-white rounded-xl flex-shrink-0 h-28 w-full sm:w-44 flex items-center justify-center shadow-md cursor-pointer relative overflow-hidden"
            whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleBrandClick(brand)}
          >
            <p className="text-xs py-4" style={brandLogoStyle(brand, hoveredIndex === index)}>
              {brand.logo}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopByBrand;
