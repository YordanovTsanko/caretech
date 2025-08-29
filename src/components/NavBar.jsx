import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import MarketsMenu from "./navbar/MarketsMenu";
import PromotionsMenu from "./navbar/PromotionsMenu";
import NewProductsMenu from "./navbar/NewProductsMenu";
import ConfiguratorMenu from "./navbar/ConfiguratorMenu";
import ServicesMenu from "./navbar/ServicesMenu";
import { MdEmail } from "react-icons/md";
import AuthDropDown from "./profile/AuthDropDown";

const navItems = [
  { name: "Магазин", to: "/markets" },
  { name: "Нови продукти", to: "/new" },
  { name: "Конфигуратор", to: "/configurator" },
  { name: "Сервизни услуги", to: "/services" },
  { name: "Промоции", to: "/promotions" },
];

const menuComponents = {
  "/markets": MarketsMenu,
  "/promotions": PromotionsMenu,
  "/new": NewProductsMenu,
  "/configurator": ConfiguratorMenu,
  "/services": ServicesMenu,
};

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  const [profileDropDown, setProfileDropDown] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", query);
  };

  const activeClass =
    "text-primary border-b-2 border-primary pb-1 transition-colors";

  const MenuComponent = openMenu ? menuComponents[openMenu] : null;

  return (
    <header className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center flex-shrink-0 py-2">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Care Tech"
                className="w-24 xl:w-28 h-auto object-contain"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6 px-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMenu(openMenu === item.to ? null : item.to);
                }}
                className={({ isActive }) =>
                  `text-xs xl:text-sm font-medium whitespace-nowrap ${
                    isActive ? activeClass : "text-white/90 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <form
              onSubmit={handleSearchSubmit}
              className={`hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 transition-all flex-shrink max-w-[200px] md:max-w-[250px] lg:max-w-[300px] ${
                searchOpen ? "ring-2 ring-primary/40" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setSearchOpen((s) => !s)}
                className="p-1 rounded-full flex-shrink-0"
                aria-label="Търси"
              >
                <FaSearch className="w-4 h-4 text-primary" />
              </button>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent outline-none text-sm text-white ml-2 placeholder-white/60 w-full min-w-0"
                placeholder="Търсене на продукти..."
                aria-label="Търсене на продукти"
              />
            </form>

            <Link
              to="/cart"
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition"
              aria-label="Количка"
            >
              <FaShoppingCart className="w-5 h-5 text-primary" />
              <span className="hidden md:inline text-sm text-white/90">
                Количка
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setProfileDropDown(!profileDropDown)}
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition"
              aria-label="Профил"
            >
              <FaUserCircle className="w-6 h-6 text-primary" />
              <span className="hidden md:inline text-sm text-white/90">
                Профил
              </span>
            </button>

            <AnimatePresence>
              {profileDropDown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[67px] right-20 shadow-lg z-50"
                >
                  <AuthDropDown />
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className="lg:hidden p-2 rounded hover:bg-white/5 transition"
              onClick={() => setMobileOpen(true)}
              aria-label="Отвори меню"
              aria-expanded={mobileOpen}
            >
              <FaBars className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {MenuComponent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-background text-white"
          >
            <div className="max-w-[1280px] mx-auto px-6 relative">
              <MenuComponent onClose={setOpenMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-primary py-2">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex tems-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-white/90">
              <FaMapMarkerAlt className="text-background w-4 h-4" />
              <span className="whitespace-nowrap">Враца, България</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/90">
              <FaPhone className="text-background w-4 h-4" />
              <span className="whitespace-nowrap">+359 899 850 777</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/90">
              <MdEmail className="text-background w-4 h-4" />
              <span className="whitespace-nowrap">info@caretech.bg</span>
            </div>
          </div>
          <div className="text-xs text-white flex items-center gap-4">
            <Link to="/for-us" className="hover:text-white/90 transition">
              За Нас
            </Link>
            <Link to="/contact" className="hover:text-white/90 transition">
              Контакти
            </Link>
            <Link to="/shipping" className="hover:text-white/90 transition">
              Доставка
            </Link>
            <Link to="/payment" className="hover:text-white/90 transition">
              Плащане
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
