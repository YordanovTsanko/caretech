import React, { useState } from "react";
import {
  FaLaptop,
  FaDesktop,
  FaVideo,
  FaMicrochip,
  FaPlug,
  FaSnowflake,
  FaKeyboard,
  FaMouse,
  FaHeadphones,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "Лаптопи",
    href: "/laptops",
    icon: <FaLaptop className="text-primary" />,
  },
  {
    name: "Компютри",
    href: "/pcs",
    icon: <FaDesktop className="text-primary" />,
  },
  {
    name: "Видеокарти",
    href: "/graphics-cards",
    icon: <FaVideo className="text-primary" />,
  },
  {
    name: "Дънни платки",
    href: "/motherboards",
    icon: <FaMicrochip className="text-primary" />,
  },
  {
    name: "Захранвания",
    href: "/power-supplies",
    icon: <FaPlug className="text-primary" />,
  },
  {
    name: "Охладители",
    href: "/coolers",
    icon: <FaSnowflake className="text-primary" />,
  },
  {
    name: "Клавиатури",
    href: "/keyboards",
    icon: <FaKeyboard className="text-primary" />,
  },
  { name: "Мишки", href: "/mice", icon: <FaMouse className="text-primary" /> },
  {
    name: "Слушалки",
    href: "/headphones",
    icon: <FaHeadphones className="text-primary" />,
  },
];

const subcategories = {
  Лаптопи: [
    "Гейминг лаптопи",
    "Бизнес лаптопи",
    "Ултрабук",
    "2-в-1 лаптопи",
    "Бюджетни лаптопи",
    "Работни станции",
    "Chromebook",
    "Конвертируеми лаптопи",
    "Аксесоари за лаптопи",
    "Рефурбишд лаптопи",
    "Лаптопи с тъчскрийн",
    "Лаптопи за студенти",
    "Мултимедийни лаптопи",
    "Лаптопи с голям SSD",
    "Лаптопи с AMD процесор",
  ],
  Компютри: [
    "Десктоп компютри",
    "Всичко-в-едно",
    "Мини ПК",
    "Работни станции",
    "Домашни компютри",
    "Офис компютри",
    "Гейминг ПК",
    "Barebone комплекти",
    "Рефурбишд компютри",
    "Персонализирани компютри",
    "Компютри за графика",
    "Компютри за програмиране",
    "Мултимедийни компютри",
    "Компютри с водно охлаждане",
  ],
  Видеокарти: [
    "NVIDIA",
    "AMD",
    "Професионални GPU",
    "Гейминг GPU",
    "Workstation GPU",
    "Външни GPU",
    "Рефурбишд GPU",
    "Овърклокнати GPU",
    "Бюджетни GPU",
    "GPU за криптовалута",
    "GPU с RGB",
    "Компактни GPU",
    "Мониторинг GPU",
  ],
  "Дънни платки": [
    "Intel дънни платки",
    "AMD дънни платки",
    "Mini-ITX",
    "ATX",
    "Micro-ATX",
    "Работни станции",
    "Сървърни дънни платки",
    "Гейминг дънни платки",
    "Овърклок дънни платки",
    "Дънни платки с Wi-Fi",
    "Дънни платки с RGB",
    "Компактни дънни платки",
    "High-End дънни платки",
  ],
  Захранвания: [
    "Модулни",
    "Немодулни",
    "SFX",
    "ATX",
    "Висока мощност",
    "80 Plus Gold",
    "80 Plus Platinum",
    "Тихи PSU",
    "Бюджетни PSU",
    "Рефурбишд PSU",
    "PSU с RGB",
    "PSU за гейминг",
    "Малки PSU",
    "PSU за работни станции",
  ],
  Охладители: [
    "Въздушни охладители",
    "Водни охладители",
    "CPU охладители",
    "GPU охладители",
    "Tower охладители",
    "Компактни охладители",
    "All-in-One охладители",
    "Custom Loop охладители",
    "Комплекти вентилатори",
    "Термична паста",
    "Охладители с RGB",
    "Silent охладители",
    "Охладители за лаптопи",
  ],
  Клавиатури: [
    "Механични",
    "Мембранни",
    "Безжични",
    "RGB клавиатури",
    "Ергономични",
    "Гейминг клавиатури",
    "Tenkeyless",
    "Bluetooth",
    "Компактни клавиатури",
    "Рефурбишд клавиатури",
    "Клавиатури с макро бутони",
    "Клавиатури за офис",
    "Клавиатури с подсветка",
    "Клавиатури за програмисти",
  ],
  Мишки: [
    "Гейминг мишки",
    "Офис мишки",
    "Безжични мишки",
    "RGB мишки",
    "Ергономични",
    "Оптични мишки",
    "Лазерни мишки",
    "Trackball мишки",
    "Портативни мишки",
    "Бюджетни мишки",
    "Мишки за студенти",
    "Мишки за дизайн",
    "Мишки с допълнителни бутони",
  ],
  Слушалки: [
    "Over-Ear",
    "In-Ear",
    "Безжични слушалки",
    "Гейминг слушалки",
    "Шумопотискащи",
    "Студио монитори",
    "Bluetooth",
    "Headband слушалки",
    "Спортни слушалки",
    "Бюджетни слушалки",
    "Слушалки с микрофон",
    "Слушалки с RGB",
    "Слушалки за пътуване",
  ],
};

const MarketsMenu = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);

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
        className="absolute top-1 right-0 p-2 rounded hover:bg-white/10 transition"
      >
        <FaTimes className="w-6 h-6 text-white" />
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-primary/20 transition cursor-pointer"
            onClick={() =>
              setActiveCategory(
                activeCategory === category.name ? null : category.name
              )
            }
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <span className="text-sm font-semibold text-center">
              {category.name}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence className="w-full">
        {categories.map(
          (category) =>
            activeCategory === category.name && (
              <motion.div
                key={category.name}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {subcategories[category.name].map((sub, idx) => (
                  <Link
                    key={idx}
                    to={`/${category.name.toLowerCase()}/${sub
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="px-2 py-1 border-b border-white/20 hover:text-primary transition"
                  >
                    {sub}
                  </Link>
                ))}
              </motion.div>
            )
        )}
      </AnimatePresence>
<div className="flex w-full">
  <h3 className="text-sm ms-auto mt-4 text-primary underline hover:text-primary/70 cursor-pointer">
    Разширено търсене
  </h3>
</div>
    </motion.div>
  );
};

export default MarketsMenu;
