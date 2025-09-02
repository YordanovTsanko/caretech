import React, { useRef, useState, useEffect } from "react";
import { newProducts } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ p, euroRate, onBuy, onToggleCart, inCart }) => {
  const discounted = p.discount ?? 0;
  const price = Number(p.price ?? 0);
  const finalPrice = discounted ? price * (1 - discounted / 100) : price;

  return (
    <article className="p-3 bg-white/5 rounded-lg hover:shadow-lg flex flex-col">
      <div onClick={() => onBuy(p.id)} className="relative cursor-pointer">
        {p.new && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold">
            НОВО
          </span>
        )}
        {discounted > 0 && (
          <>
            <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold">
              -{discounted}%
            </span>
            <span
              className={`absolute ${p.new ? "top-10" : "top-2"} left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold`}
            >
              ПРОМО
            </span>
          </>
        )}
        <div className="w-full h-40 flex items-center justify-center mb-3">
          {p.image ? (
            <img
              src={p.image}
              alt={p.name}
              className="max-h-40 object-contain"
              draggable={false}
            />
          ) : (
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
              No Image
            </div>
          )}
        </div>
      </div>

      <h3
        onClick={() => onBuy(p.id)}
        className="text-sm font-semibold mb-2 line-clamp-3 min-h-[3.6rem] cursor-pointer"
      >
        {p.name}
      </h3>

      <div className="mt-auto text-center">
        {discounted > 0 ? (
          <p className="text-black/60 line-through text-sm">
            {price.toFixed(2)} лв. / {(price / euroRate).toFixed(2)} €
          </p>
        ) : (
          <p className="text-transparent text-sm">–</p>
        )}
        <p className="text-black font-semibold mb-3">
          {finalPrice.toFixed(2)} лв. / {(finalPrice / euroRate).toFixed(2)} €
        </p>

        <div className="flex flex-col gap-2 items-center">
          <button
            onClick={() => onBuy(p.id)}
            className="w-full px-3 py-1 rounded-md bg-primary text-white text-sm hover:opacity-90"
          >
            КУПИ СЕГА
          </button>
          <button
            onClick={() => onToggleCart(p.id)}
            className={`w-full px-3 py-1 rounded-md border text-sm ${
              inCart
                ? "bg-red-900 text-white border-red-900"
                : "bg-white/10 text-black border-gray-300"
            }`}
          >
            {inCart ? "ДОБАВЕНО" : "ДОБАВИ В КОШНИЦАТА"}
          </button>
        </div>
      </div>
    </article>
  );
};

const TopOrderedProducts = () => {
  const euroRate = 1.96;
  const navigate = useNavigate();
  const defaultVisible = 10;
  const products = newProducts || [];
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
      next.add(id);
      return next;
    });

    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 4000);
  };

  const handleBuy = (id) => navigate(`/product/${id}?buyNow=1`);

  const visible = products.slice(0, initialVisible);
  const extras = products.slice(initialVisible);

  return (
    <section className="max-w-[1280px] flex flex-col w-full mx-auto px-4 py-8 relative">
      <h2 className="text-xl font-semibold mb-4">НАЙ-ПОРЪЧВАНИ ПРОДУКТИ</h2>

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

export default TopOrderedProducts;
