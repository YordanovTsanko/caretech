import React, { useCallback, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const STORAGE_KEY = "theme";

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readStoredTheme() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === "light" || raw === "dark") return raw;
    return null;
  } catch {
    return null;
  }
}

function applyThemeToDocument(theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  root.style.colorScheme = theme;
}

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const stored = readStoredTheme();
    const initial = stored ?? getSystemTheme();
    setTheme(initial);
    applyThemeToDocument(initial);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const stored = readStoredTheme();
    if (stored) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      const next = e.matches ? "dark" : "light";
      setTheme(next);
      applyThemeToDocument(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyThemeToDocument(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, [theme]);

  if (!isMounted) {
    return (
      <div
        className={`h-6 w-12 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-inner ${className}`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={theme === "dark"}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className={`group inline-flex items-center justify-between relative h-6 w-12 select-none rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 backdrop-blur px-1 shadow-sm hover:shadow transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
        <FaSun className="h-3 w-3 opacity-80 transition-transform" />
        <FaMoon className="h-3 w-3 opacity-80 transition-transform" />
      </div>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
        className="z-10 h-5 w-5 rounded-full shadow-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
        style={{ x: theme === "dark" ? 24 : 0 }}
      />
    </button>
  );
}

export function ThemeToggleDemo() {
  return (
    <div className="">
      <ThemeToggle />
    </div>
  );
}
