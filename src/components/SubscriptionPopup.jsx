import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMail, FiCheck } from "react-icons/fi";

const SubscriptionPopup = ({ delay = 15000 }) => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [tempChoice, setTempChoice] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const intervalRef = useRef(null);
  const showTimeout = useRef(null);

  useEffect(() => {
    showTimeout.current = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(showTimeout.current);
  }, [delay]);

  useEffect(() => {
    if (dontShowAgain) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setVisible(true);
    }, 60000);
    return () => clearInterval(intervalRef.current);
  }, [dontShowAgain]);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [visible]);

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubscribe = (e) => {
    e?.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Моля въведете валиден имейл.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleCloseWithX = () => {
    setDontShowAgain(tempChoice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Абонамент за бюлетин"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto w-full sm:w-[50%] bg-gradient-to-r from-primary to-primary-dark text-white shadow-2xl p-4 md:p-6 max-h-[80vh] overflow-auto rounded-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/90 mt-1">
                    Абонирай се за нашият бюлетин и вземи отстъпка за първата си
                    поръчка.
                  </p>
                </div>
              </div>
              <button
                onClick={handleCloseWithX}
                aria-label="Затвори"
                className="ml-auto p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
              >
                <FiX className="w-5 h-5 text-white" />
              </button>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_160px] gap-3 items-center"
            >
              <label htmlFor="sub-email" className="sr-only">
                Имейл
              </label>
              <input
                id="sub-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Въведи имейл адрес"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-1 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  disabled={loading || success}
                  className="w-full rounded-lg bg-white text-primary font-semibold px-4 py-[9px] shadow hover:scale-[0.997] active:scale-100 transition disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <svg
                      className="w-4 h-4 animate-spin"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray="31.4 31.4"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  ) : success ? (
                    <>
                      <FiCheck className="w-4 h-4 text-primary" />
                      <span className="text-xs">Готово</span>
                    </>
                  ) : (
                    <span className="text-xs text-primary">Абонирай се</span>
                  )}
                </button>
              </div>
            </form>
            {error && (
              <p className="mt-3 text-xs text-yellow-200">{error}</p>
            )}
            {success && (
              <p className="mt-3 text-xs text-white/90">
                Благодарим! Вие ще получавате нашите новини на посочения имейл.
              </p>
            )}
            <div className="mt-4 flex items-center justify-between">
              <label className="relative inline-flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={tempChoice}
                  onChange={(e) => setTempChoice(e.target.checked)}
                  className="sr-only"
                />
                <span className="w-11 h-6 bg-white/10 rounded-full flex items-center px-[3px] transition-all">
                  <motion.span
                    layout
                    initial={false}
                    animate={{ x: tempChoice ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                    className="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
                  >
                    {tempChoice ? (
                      <FiCheck className="w-3 h-3 text-primary" />
                    ) : (
                      <FiX className="w-3 h-3 text-red-500" />
                    )}
                  </motion.span>
                </span>
                <span className="ml-3 text-xs text-white/90">
                  Не показвай отново
                </span>
              </label>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionPopup;
