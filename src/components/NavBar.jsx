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
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AuthDropDown from "./profile/AuthDropDown";
import { BiMenuAltRight } from "react-icons/bi";
import NavDropDown from "./navbar/NavDropDown";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [profileDropDown, setProfileDropDown] = useState(false);
  const location = useLocation();
  const scrollYRef = useRef(0);

  // Improved scroll lock (works on iOS)
  useEffect(() => {
    if (mobileOpen) {
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
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
      if (top) {
        const restored = -parseInt(top || "0", 10);
        window.scrollTo(0, restored);
      }
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setProfileDropDown(false);
  }, [location]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setProfileDropDown(false);
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
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex items-center justify-between md:justify-normal gap-10 py-2">
          <div className="flex flex-col items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Care Tech"
                className="w-24 xl:w-28 h-auto object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center justify-end gap-3 w-full h-full">
            <form
              onSubmit={handleSearchSubmit}
              className={`hidden md:flex items-center bg-white/5  px-2 py-2 transition-all w-full h-full focus-within:bg-white/10 focus-within:ring rounded-sm focus-within:ring-primary/50 ${
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
            <button
              className="md:hidden p-2 rounded hover:bg-white/5 transition"
              onClick={() => setMobileOpen(true)}
              aria-label="Отвори меню"
              aria-expanded={mobileOpen}
            >
              <FaBars className="w-6 h-6 text-white" />
            </button>
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
      <div className="relative mx-auto max-w-[1280px] hidden md:block">
        <div
          className="absolute px-10 bg-primary shadow-lg py-2 left-0 md:clip-polygon-right xl:clip-polygon
  "
        >
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-md text-white hover:scale-105 relative z-20 cursor-pointer flex items-center gap-1 hover:underline transition-all duration-500"
          >
            <BiMenuAltRight size={24} />
            <button className="text-white/90">МЕНЮ</button>
          </div>
        </div>

        <NavDropDown isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        {/* Right Section */}
        <div className="absolute shadow-lg bg-background py-2 right-0 -top-1 z-[66] px-10 md:clip-polygon-left xl:clip-polygon">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-white/90">
              <FaMapMarkerAlt className="text-primary w-4 h-4" />
              <span className="whitespace-nowrap">Враца, България</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/90">
              <FaPhone className="text-primary w-4 h-4" />
              <span className="whitespace-nowrap">+359 899 850 777</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/90">
              <MdEmail className="text-primary w-4 h-4" />
              <span className="whitespace-nowrap">info@caretech.bg</span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu (backdrop + slide panel) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop: must be above header */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black z-50"
              aria-hidden="true"
            />

            {/* Sliding panel: use a solid (near-opaque) background inline to guarantee no transparency */}
            <motion.aside
              key="panel"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-full sm:w-4/5 md:w-3/5 text-white z-[60] shadow-xl overflow-auto"
              role="dialog"
              aria-modal="true"
              // inline style ensures a solid background color (no theme token opacity leaking through)
              style={{ backgroundColor: "rgba(3,7,18,0.98)" }}
            >
              <div className="flex items-center justify-between p-4 relative z-10 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="Care Tech"
                    className="w-24 h-auto object-contain"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 rounded hover:bg-white/5 transition"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Затвори меню"
                  >
                    ✕
                  </button>
                </div>
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
