import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import categories from "../../utils/categories.json";
import { iconCategories } from "../../utils/navIcons";
import { FaRegFolder } from "react-icons/fa";

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
  exit: { opacity: 0, scaleY: 0, y: -6, transition: { duration: 0.18 } },
};

const leftItem = { hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } };

const rightPanel = {
  hidden: { opacity: 0, width: 0 },
  show: {
    opacity: 1,
    width: "calc(100% - 280px)",
    transition: { type: "tween", ease: "easeOut", duration: 0.28 },
  },
  exit: {
    opacity: 0,
    width: 0,
    transition: { type: "tween", ease: "easeIn", duration: 0.18 },
  },
};

const rightItem = { hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0 } };

const NavDropDown = ({ isOpen, onClose, buttonRef }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [showWhitePanel, setShowWhitePanel] = useState(false);

  const parentCategories = useMemo(
    () =>
      categories
        .filter((c) => c.isParentCategory)
        .map((c) => ({
          ...c,
          Icon: iconCategories[c.slug] || FaRegFolder,
        })),
    []
  );

  const navLinks = useMemo(() => {
    const subs = categories.filter(
      (c) => !c.isParentCategory && c.parent && c.parent.id
    );
    const subsByParent = subs.reduce((acc, s) => {
      const pid = s.parent.id;
      if (!acc[pid]) acc[pid] = [];
      acc[pid].push(s);
      return acc;
    }, {});
    return parentCategories.map((p) => ({
      id: p.id,
      title: p.nameBg || p.nameEn || "No title",
      slug: p.slug,
      Icon: p.Icon,
      subItems: (subsByParent[p.id] || []).map((si) => ({
        title: si.nameBg || si.nameEn || "No name",
        link: si.slug ? `/category/${si.slug}` : `/category/id/${si.id}`,
      })),
    }));
  }, [parentCategories]);

  useEffect(() => {
    if (!isOpen) {
      setActiveIdx(0);
      setShowWhitePanel(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        buttonRef?.current &&
        !buttonRef.current.contains(event.target)
      ) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose, buttonRef]);

  const safeActiveIdx = Math.max(0, Math.min(activeIdx, navLinks.length - 1));

  const handleActivate = (i) => {
    setActiveIdx(i);
    const hasSubs =
      Array.isArray(navLinks[i]?.subItems) && navLinks[i].subItems.length > 0;
    setShowWhitePanel(hasSubs);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          initial="hidden"
          animate="show"
          exit="exit"
          variants={container}
          className="absolute left-0 -top-2 mt-2 w-full z-[40] overflow-visible"
          style={{ transformOrigin: "top center" }}
        >
          <div className="bg-transparent grid grid-cols-[280px_1fr] max-h-[496px] relative">
            <motion.nav
              variants={container}
              className="bg-primary shadow-lg overflow-y-auto overflow-x-hidden max-h-[496px] pt-10 text-white scrollbar-hide"
            >
              <motion.ul
                className="divide-y border-t border-gray-200"
                variants={container}
              >
                {navLinks.map((section, i) => (
                  <motion.li
                    key={section.id}
                    variants={leftItem}
                    className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-red-700 ${
                      i === safeActiveIdx ? "bg-red-700" : ""
                    }`}
                    onClick={() => {
                      if (
                        Array.isArray(navLinks[i]?.subItems) &&
                        navLinks[i].subItems.length > 0
                      ) {
                        handleActivate(i);
                      } else {
                        navigate("category/" + navLinks[i]?.slug);
                      }
                    }}
                    tabIndex={0}
                  >
                    <div className="flex items-center gap-3">
                      {section.Icon ? (
                        <section.Icon
                          className="w-4 h-4 flex-shrink-0"
                          aria-hidden="true"
                        />
                      ) : (
                        <FaRegFolder
                          className="w-4 h-4 flex-shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <span className="text-[14px] font-medium">
                        {section.title}
                      </span>
                    </div>
                    {navLinks[i]?.subItems?.length > 0 && (
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
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>

            <AnimatePresence initial={false} mode="wait">
              {showWhitePanel &&
                navLinks[safeActiveIdx]?.subItems?.length > 0 && (
                  <motion.div
                    key={navLinks[safeActiveIdx].id}
                    variants={rightPanel}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute left-[280px] top-0 bottom-0 p-0 shadow-xl bg-white max-h-[496px] overflow-hidden"
                    style={{ willChange: "width" }}
                  >
                    <div className="w-full h-full p-6 overflow-auto">
                      <motion.h3
                        variants={rightItem}
                        className="text-lg font-semibold text-gray-800 mb-3"
                      >
                        {navLinks[safeActiveIdx].title}
                      </motion.h3>

                      <motion.div
                        className="flex flex-col gap-4"
                        initial="hidden"
                        animate="show"
                        exit="exit"
                      >
                        <motion.div variants={rightItem} className="space-y-2">
                          <ul className="mt-1 flex flex-wrap -mx-2">
                            {navLinks[safeActiveIdx].subItems.map((si) => (
                              <li
                                key={si.title + si.link}
                                className="px-2 w-1/2"
                              >
                                <Link
                                  to={si.link}
                                  onClick={onClose}
                                  className="flex items-center text-xs text-gray-600 hover:text-gray-800 py-1"
                                >
                                  <BsDot
                                    className="w-5 h-5 text-primary flex-shrink-0 mr-1"
                                    aria-hidden="true"
                                  />
                                  <span>{si.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
            </AnimatePresence>

            {showWhitePanel && (
              <h2 className="absolute bottom-6 cursor-pointer hover:text-red-700 transition duration-500 right-3 text-sm underline text-primary">
                Разширено търсене
              </h2>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavDropDown;
