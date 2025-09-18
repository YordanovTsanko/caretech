import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheck, FiSettings } from "react-icons/fi";

const panelVariants = {
  hidden: { y: "100%", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 110, damping: 18 } },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.25 } }
};

// localStorage key
const STORAGE_KEY = "cookie_consent_v1";

export default function CookieConsentPopup({ delay = 1000 }) {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({ essential: true, analytics: false, marketing: false });
  const [saved, setSaved] = useState(false);
  const timeoutRef = useRef(null);

  // Check saved preference on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.choice) {
          setSaved(true);
          setPreferences(parsed.preferences || { essential: true });
          return;
        }
      }
    } catch (e) {}
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timeoutRef.current);
  }, [delay]);

  const persistChoice = (choice, prefs) => {
    try {
      const payload = { choice, preferences: prefs, at: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setSaved(true);
      setVisible(false);
    } catch (e) {
      setVisible(false);
    }
  };

  const acceptAll = () => {
    const prefs = { essential: true, analytics: true, marketing: true };
    setPreferences(prefs);
    persistChoice("accepted_all", prefs);
  };

  const acceptEssential = () => {
    const prefs = { essential: true, analytics: false, marketing: false };
    setPreferences(prefs);
    persistChoice("accepted_essential", prefs);
  };

  const saveSettings = () => {
    const prefs = { ...preferences, essential: true };
    setPreferences(prefs);
    persistChoice("custom", prefs);
    setShowSettings(false);
  };

  const handleClose = () => {
    persistChoice("dismissed", preferences);
  };

  const togglePref = (key) => {
    setPreferences((p) => ({ ...p, [key]: !p[key] }));
  };

  return (
    <AnimatePresence>
      {visible && !saved && (
        <motion.div
          className="fixed left-4 bottom-4 z-[60] flex items-end justify-start pointer-events-none"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={{ show: { transition: { when: "beforeChildren" } } }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Избор за бисквитки"
            variants={panelVariants}
            className="pointer-events-auto w-[92vw] sm:w-[320px] md:w-[360px] lg:w-[420px] bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-2xl p-3 md:p-4 rounded-2xl max-h-[70vh] overflow-auto"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.25)" }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="flex items-center flex-shrink-0 justify-center w-10 h-10 rounded-full bg-white/10">
                  <FiSettings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-white/90 leading-tight">Използваме бисквитки, за да подобрим потребителското преживяване и да персонализираме съдържанието. Можете да приемете всички или да изберете предпочитания.</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                aria-label="Затвори"
                className="ml-auto p-1.5 rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <FiX className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2 items-start">
              <div>
                <p className="text-xs text-white/80">Тези бисквитки са групирани по цел. Можете да промените настройките по-долу. За пълна информация вижте нашата <a href="/cookies" className="underline">Политика за бисквитки</a>.</p>

                {!showSettings && (
                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <button onClick={acceptAll} className="rounded-lg text-xs bg-white text-gray-900 font-semibold px-3 py-1.5 shadow hover:scale-[0.997] active:scale-100 transition">
                      Приемам всички
                    </button>
                    <button onClick={acceptEssential} className="rounded-lg text-xs border border-white/20 bg-transparent text-white px-3 py-1.5 font-medium hover:bg-white/5 transition">
                      Само необходими
                    </button>
                    <button onClick={() => setShowSettings(true)} className="ml-auto rounded-lg bg-white/10 px-3 py-1.5 flex items-center gap-1 hover:bg-white/20 transition text-xs">
                      <FiSettings className="w-3 h-3" />
                      Настройки
                    </button>
                  </div>
                )}

                {showSettings && (
                  <div className="mt-3 space-y-2 bg-white/5 p-2 rounded-lg text-xs">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Необходими бисквитки</p>
                        <p className="text-[10px] text-white/70">Винаги активни — позволяват основни функции на сайта.</p>
                      </div>
                      <span className="text-[10px] px-2 py-1 rounded bg-white/10">Задължително</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Аналитични</p>
                        <p className="text-[10px] text-white/70">Помагат ни да разберем как използвате сайта.</p>
                      </div>
                      <label className="inline-flex items-center cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={() => togglePref("analytics")}
                          className="sr-only"
                        />
                        <span className="w-9 h-5 bg-white/10 rounded-full flex items-center px-[2px] transition-all">
                          <motion.span
                            layout
                            initial={false}
                            animate={{ x: preferences.analytics ? 16 : 0 }}
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                            className="w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center"
                          >
                            {preferences.analytics ? <FiCheck className="w-3 h-3 text-gray-900" /> : <FiX className="w-3 h-3 text-red-500" />}
                          </motion.span>
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Маркетинг</p>
                        <p className="text-[10px] text-white/70">Използва се за персонализирани реклами.</p>
                      </div>
                      <label className="inline-flex items-center cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={() => togglePref("marketing")}
                          className="sr-only"
                        />
                        <span className="w-9 h-5 bg-white/10 rounded-full flex items-center px-[2px] transition-all">
                          <motion.span
                            layout
                            initial={false}
                            animate={{ x: preferences.marketing ? 16 : 0 }}
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                            className="w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center"
                          >
                            {preferences.marketing ? <FiCheck className="w-3 h-3 text-gray-900" /> : <FiX className="w-3 h-3 text-red-500" />}
                          </motion.span>
                        </span>
                      </label>
                    </div>

                    <div className="mt-2 flex gap-2">
                      <button onClick={saveSettings} className="rounded-lg text-xs bg-white text-gray-900 font-semibold px-3 py-1.5 shadow hover:scale-[0.997] transition">
                        Запази
                      </button>
                      <button onClick={() => setShowSettings(false)} className="rounded-lg text-xs border border-white/20 bg-transparent text-white px-3 py-1.5">
                        Откажи
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
