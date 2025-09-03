import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../utils/navLinks";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { FaArrowAltCircleUp } from "react-icons/fa";

const container = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    y: -6,
    transition: { when: "afterChildren", duration: 0.18 },
  },
  show: {
    opacity: 1,
    scaleY: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.02,
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    y: -6,
    transition: { duration: 0.18 },
  },
};

const leftItem = { hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } };
const rightPanel = {
  hidden: { opacity: 0, x: 8 },
  show: { opacity: 1, x: 0, transition: { staggerChildren: 0.04 } },
  exit: { opacity: 0, x: 6 },
};
const rightItem = { hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0 } };

const NavDropDown = ({ isOpen, onClose }) => {
  const ref = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!isOpen) setActiveIdx(0);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          initial="hidden"
          animate="show"
          exit="exit"
          variants={container}
          className="absolute left-0 -top-2 mt-2 w-full max-w-[1280px] z-[40] shadow-2xl overflow-hidden"
          style={{
            transformOrigin: isOpen ? "top center" : "bottom center",
          }}
        >
          <div className="bg-white shadow-xl grid grid-cols-[280px_1fr]">
            <motion.nav variants={container} className="bg-primary pt-10 text-white">
              <motion.ul className="divide-y border-t border-gray-200" variants={container}>
                {navLinks.map((section, i) => (
                  <motion.li
                    key={section.title + i}
                    variants={leftItem}
                    className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-red-700 ${
                      i === activeIdx ? "bg-red-700" : ""
                    }`}
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                  >
                    <div className="flex items-center gap-3">
                      <section.Icon className="w-4 h-4" aria-hidden="true" />
                      <span className="text-[14px] font-medium">
                        {section.title}
                      </span>
                    </div>
                    <svg
                      className="w-4 h-4 opacity-80"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M9 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>

            <motion.div variants={rightPanel} className="p-6 bg-white">
              <motion.h3
                variants={rightItem}
                className="text-lg font-semibold text-gray-800 mb-3"
              >
                {navLinks[activeIdx]?.title}
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={rightPanel}
              >
                {(navLinks[activeIdx]?.children || []).map((child) => (
                  <motion.div
                    key={child.title}
                    variants={rightItem}
                    className="space-y-2"
                  >
                    <Link
                      to={child.link || "#"}
                      onClick={onClose}
                      className="text-sm font-medium text-gray-900 hover:underline block"
                    >
                      {child.title}
                    </Link>
                    {Array.isArray(child.subItems) && (
                      <ul className="mt-1 space-y-1">
                        {child.subItems.map((si) => (
                          <li key={si.title}>
                            <Link
                              to={si.link || "#"}
                              onClick={onClose}
                              className="flex items-center text-xs text-gray-600 hover:text-gray-800"
                            >
                              <BsDot
                                className="w-5 h-5 text-primary flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span>{si.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <h2 className="absolute bottom-12 cursor-pointer hover:text-red-700 transition duration-500 right-3 text-sm underline text-primary">
              Разширено търсене
            </h2>
          </div>

          <div
            className="py-2 bg-primary border-t border-gray-200 flex justify-center cursor-pointer hover:bg-red-700 transition duration-500"
            onClick={onClose}
          >
            <FaArrowAltCircleUp className="text-white" size={25} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavDropDown;
