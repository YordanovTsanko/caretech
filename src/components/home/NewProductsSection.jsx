import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import laptops from "../../utils/laptops.json";

const NewProductsSection = () => {
  const euroRate = 1.96;
  const navigate = useNavigate();
  const defaultVisible = 10;
  const products = laptops?.content || [];
  const initialVisible = Math.min(defaultVisible, products.length);
  const [isExpanded, setIsExpanded] = useState(false);
  const [addedIds, setAddedIds] = useState(new Set());
  const extraRef = useRef(null);
  const [extraMax, setExtraMax] = useState("0px");

  useEffect(() => {
    const el = extraRef.current;
    if (!el) return;
    if (isExpanded) {
      setExtraMax(el.scrollHeight + "px");
      const t = setTimeout(() => setExtraMax("none"), 420);
      return () => clearTimeout(t);
    } else {
      setExtraMax(el.scrollHeight ? el.scrollHeight + "px" : "0px");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setExtraMax("0px"))
      );
    }
  }, [isExpanded]);

  const handleToggleCart = (id) => {
    setAddedIds((prev) => {
      const next = new Set(prev);
      next.add(id); // show "ДОБАВЕНО"
      return next;
    });

    // Remove after 4 seconds
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 1000);
  };

  const handleBuy = (id) => navigate(`/product/${id}?buyNow=1`);

  const visible = products.slice(0, initialVisible);
  const extras = products.slice(initialVisible);

  return (
    <section className="max-w-[1280px] flex flex-col w-full mx-auto px-4 relative">
      <h2 className="text-xl font-semibold mb-4">НАЙ-НОВИ ПРОДУКТИ</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2">
        {visible.map((p) => (
          <ProductCard
            key={p.id}
            p={p}
            euroRate={euroRate}
            onBuy={handleBuy}
            onToggleCart={handleToggleCart}
            inCart={addedIds.has(p.id)}
          />
        ))}
      </div>

      {extras.length > 0 && (
        <div
          style={{ maxHeight: extraMax }}
          className="overflow-hidden transition-[max-height,opacity] duration-400 ease-[cubic-bezier(.2,.9,.2,1)] mt-4"
          aria-hidden={!isExpanded}
        >
          <div
            ref={extraRef}
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4"
          >
            {extras.map((p) => (
              <ProductCard
                key={p.id}
                p={p}
                euroRate={euroRate}
                onBuy={handleBuy}
                onToggleCart={handleToggleCart}
                inCart={addedIds.has(p.id)}
              />
            ))}
          </div>
        </div>
      )}

      {extras.length > 0 && (
        <div className="relative mt-0 self-end">
          <button
            onClick={() => setIsExpanded((s) => !s)}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary text-white shadow hover:opacity-95 transition"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Затвори" : "Зареди още"}
          </button>
        </div>
      )}
    </section>
  );
};

export default NewProductsSection;
