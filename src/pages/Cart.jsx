import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import PromoProductsSection from "../components/home/PromoProductsSection";

export default function Cart() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Примерни продукти (имитиране на асинхронно зареждане)
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      // За да видите "празна количка" поставете тук []
      setProducts([]);
      setLoading(false);
    }, 900);

    return () => clearTimeout(t);
  }, []);

  const formatPrice = (n) => {
    return n.toLocaleString("bg-BG", { style: "currency", currency: "BGN" });
  };

  const changeQty = (id, delta) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p
      )
    );
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const emptyCart = () => {
    setProducts([]);
  };

  const subtotal = products.reduce((s, p) => s + p.price * p.qty, 0);
  const shipping = products.length ? 5.0 : 0;
  const total = subtotal + shipping;

  return (
    <div className="mx-auto p-6">
      <h2 className="text-2xl font-semibold mt-6 text-center">
        Вашата количка
      </h2>

      {loading && <Loader title="Зареждаме вашите продукти..." />}

      {!loading && products.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-6 py-16">
          <img
            src="/Shopping_Cart_Flat_Icon_Vector.svg.png"
            alt="Shopping Cart"
            className="w-44 h-44 -m-4 -ml-8"
          />
          <div className="text-center">
            <h3 className="text-xl font-medium">Количката е празна</h3>
            <p className="text-sm text-gray-600">
              Изглежда все още не сте добавили продукти. Можете да разгледате
              нашите предложения.
            </p>
          </div>
          <div className="flex gap-3 mb-10">
            <button className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-red-600 transition duration-500">
              Разгледай продукти
            </button>
            <button
              onClick={() =>
                navigate("/")
              }
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              Начална страница
            </button>
          </div>
          <PromoProductsSection/>
        </div>
      )}

      {/* Cart content */}
      {!loading && products.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-4">
            <ul className="divide-y">
              {products.map((p) => (
                <li key={p.id} className="flex gap-4 py-4 items-center">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{p.title}</h4>
                        <div className="text-sm text-gray-500 mt-1">
                          {formatPrice(p.price)}
                        </div>
                      </div>
                      <button
                        onClick={() => removeProduct(p.id)}
                        aria-label={`Премахни ${p.title}`}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Премахни
                      </button>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                          onClick={() => changeQty(p.id, -1)}
                          className="px-3 py-1 text-lg"
                          aria-label="Намали количество"
                        >
                          −
                        </button>
                        <div className="px-4">{p.qty}</div>
                        <button
                          onClick={() => changeQty(p.id, 1)}
                          className="px-3 py-1 text-lg"
                          aria-label="Увеличи количество"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm text-gray-600">
                        Общо:{" "}
                        <span className="font-medium">
                          {formatPrice(p.price * p.qty)}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={emptyCart}
                className="text-sm text-red-600 hover:underline"
              >
                Изчисти количката
              </button>

              <div className="text-sm text-gray-500">
                Имате <span className="font-medium">{products.length}</span>{" "}
                артикула
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="text-sm text-gray-600">Междинна сума</div>
              <div className="font-medium">{formatPrice(subtotal)}</div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm text-gray-600">Доставка</div>
              <div className="font-medium">
                {shipping === 0 ? "Безплатна" : formatPrice(shipping)}
              </div>
            </div>
            <div className="border-t pt-3 flex justify-between items-center">
              <div className="text-sm text-gray-600">Общо</div>
              <div className="text-xl font-semibold">{formatPrice(total)}</div>
            </div>

            <button
              onClick={() => alert("Към плащане — примерна фунцкия")}
              className="mt-2 w-full px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition"
            >
              Към плащане
            </button>

            <button
              onClick={() => alert("Още пазаруване — пример")}
              className="mt-1 w-full px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
            >
              Продължи пазаруването
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
