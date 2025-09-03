// FeaturesSection.jsx
import React from "react";
import {
  FaTruck,
  FaUndoAlt,
  FaClock,
  FaGift,
  FaHandshake,
} from "react-icons/fa";

const MINI_FEATURES = [
  { icon: FaTruck, label: "БЕЗПЛАТНА ДОСТАВКА С ПРЕГЛЕД НА ПРАТКАТА" },
  { icon: FaGift, label: "КОНКУРЕНТНИ ИЗГОДНИ ЦЕНИ" },
  { icon: FaHandshake, label: "20+ ГОДИНИ ОПИТ И ДОВЕРИЕ" },
  { icon: FaClock, label: "БЪРЗО ОДОБРЕНИЕ ЗА ЛИЗИНГ" },
  { icon: FaUndoAlt, label: "30 ДНИ ПРАВО НА ВРЪЩАНЕ" },
];

const FeaturesSection = ({ data = MINI_FEATURES }) => {
  return (
    <section className="w-full bg-gray-50">
      <div className="bg-white/0">
        <div className="hidden md:flex items-center justify-between gap-6 py-6">
          {data.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-primary/90"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-xs text-gray-700 uppercase max-w-[180px] leading-tight">
                  {m.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Below md: responsive grid (replaces the carousel) */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
          {data.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-2 rounded-md shadow-sm"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className="font-semibold text-xs text-gray-700">{m.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
