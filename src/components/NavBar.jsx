import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaHeart,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import AuthDropDown from "./profile/AuthDropDown";
import NavDropDown from "./navbar/NavDropDown";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [profileDropDown, setProfileDropDown] = useState(false);
  const location = useLocation();
  const scrollYRef = useRef(0);
  const menuButtonRef = useRef(null);

  // Prevent background scroll for mobile menu
  useEffect(() => {
    if (mobileOpen) {
      scrollYRef.current = window.scrollY || 0;
      document.documentElement.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      const top = document.body.style.top;
      document.body.style.top = "";
      document.body.style.width = "";
      if (top) window.scrollTo(0, -parseInt(top || "0", 10));
    }
  }, [mobileOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setProfileDropDown(false);
    setMenuOpen(false);
  }, [location]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setProfileDropDown(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", query);
  };

  return (
    <header className="w-full sticky top-0 z-10 bg-background shadow-sm">
      <div className="px-4 md:px-20 mx-auto">
        <div className="flex items-center justify-between md:justify-normal gap-10 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Care Tech"
              className="w-30 xl:w-36 h-auto object-contain"
            />
          </Link>

          {/* Right side */}
          <div className="flex items-center justify-end gap-3 w-full h-full">
            {/* Desktop search */}
            <form
              onSubmit={handleSearchSubmit}
              className={`hidden md:flex items-center bg-white/5 px-2 py-2 transition-all w-full h-full focus-within:bg-white/10 focus-within:ring rounded-sm focus-within:ring-primary/50 ${
                searchOpen ? "ring-2 ring-primary/40" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setSearchOpen((s) => !s)}
                className="p-1 rounded-full flex-shrink-0"
              >
                <FaSearch className="w-4 h-4 text-primary" />
              </button>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent outline-none text-sm text-white ml-2 placeholder-white/60 w-full min-w-0"
                placeholder="Търсене на продукти..."
              />
            </form>

            {/* Favorites */}
            <Link
              to="/cart"
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition"
            >
              <FaHeart className="w-5 h-5 text-primary" />
              <span className="hidden md:inline text-sm text-white/90">
                Любими
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition"
            >
              <FaShoppingCart className="w-5 h-5 text-primary" />
              <span className="hidden md:inline text-sm text-white/90">
                Количка
              </span>
            </Link>

            {/* Profile */}
            <button
              type="button"
              onClick={() => setProfileDropDown(!profileDropDown)}
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition"
            >
              <FaUserCircle className="w-5 h-5 text-primary" />
              <span className="hidden md:inline text-sm text-white/90">
                Профил
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded hover:bg-white/5 transition"
              onClick={() => setMobileOpen(true)}
            >
              <FaBars className="w-6 h-6 text-white" />
            </button>

            {/* Profile dropdown */}
            <AnimatePresence>
              {profileDropDown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[59px] xl:top-[67px] inset-x-0 sm:inset-x-auto sm:right-20 shadow-lg z-[99]"
                >
                  <AuthDropDown />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Top info bar */}
      <div className="relative mx-auto px-4 md:px-20 hidden md:block">
        <div className="relative mx-auto flex justify-between items-start">
          {/* Menu button + dropdown */}
          <div className="relative inline-block w-full">
            <button
              ref={menuButtonRef}
              className={`absolute z-[66] transition-all duration-500 -top-[1px] cursor-pointer shadow-lg py-2 ps-3 pe-[65px] left-0 clip-polygon-right ${
                menuOpen ? "bg-background" : "bg-primary"
              }`}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <div className="text-md text-white hover:scale-105 relative flex items-center gap-1 hover:underline transition-all duration-500">
                <BiMenuAltRight size={24} />
                <span className="text-white/90">МЕНЮ</span>
              </div>
            </button>

            <NavDropDown
              isOpen={menuOpen}
              onClose={() => setMenuOpen(false)}
              buttonRef={menuButtonRef}
            />
          </div>

          {/* Right info */}
          <div className="absolute shadow-lg bg-background py-2 right-0 -top-1 z-[66] ps-10 pe-4 clip-polygon-left">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-white/90">
                <FaMapMarkerAlt className="text-primary w-4 h-4" />
                <span>Враца, България</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <FaPhone className="text-primary w-4 h-4" />
                <span>+359 899 850 777</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <MdEmail className="text-primary w-4 h-4" />
                <span>info@caretech.bg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />

            {/* Slide panel */}
            <motion.aside
              key="panel"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-full sm:w-4/5 md:w-3/5 text-white z-[60] shadow-xl overflow-auto"
              style={{ backgroundColor: "rgba(3,7,18,0.98)" }}
            >
              <div className="flex items-center justify-between p-4 relative z-10 border-b border-white/10">
                <img
                  src="/logo.png"
                  alt="Care Tech"
                  className="w-24 h-auto object-contain"
                />
                <button
                  className="p-2 rounded hover:bg-white/5 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div className="p-4">
                {/* Mobile search */}
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center bg-white/5 rounded-full px-3 py-2 mb-4"
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
                    className="bg-transparent outline-none text-sm text-white ml-3 placeholder-white/60 w-full"
                    placeholder="Търсене на продукти..."
                    aria-label="Търсене на продукти"
                  />
                </form>

                <div className="border-t border-white my-4" />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
