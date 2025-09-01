import React from "react";
import { useParams } from "react-router-dom";
import { gamingProducts } from "../utils/utils";
import SimilarProducts from "../components/products/SimilarProducts";

const ProductsPage = () => {
  const { id } = useParams();
  const euroRate = 1.96;

  const currentProduct = id
    ? gamingProducts.find((product) => product.id === parseInt(id, 10))
    : null;

  const translateKey = (key) => {
    const map = {
      type: "Тип",
      material: "Материал",
      color: "Цвят",
      weight: "Тегло",
      dimensions: "Размери",
      features: "Характеристики",
      connectivity: "Свързаност",
      dpi: "DPI",
      battery: "Батерия",
      screen: "Екран",
      resolution: "Резолюция",
      refreshRate: "Честота на опресняване",
      panel: "Панел",
      responseTime: "Време за отговор",
      size: "Размер",
      surface: "Повърхност",
      processor: "Процесор",
      ram: "RAM",
      storage: "Памет",
      ssd: "SSD",
      os: "ОС",
    };
    return map[key] ?? key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
  };

  if (!currentProduct) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-6 text-center text-lg">
        Продуктът не е намерен
      </div>
    );
  }

  const price = Number(currentProduct.price ?? 0);
  const discount = Number(currentProduct.discount ?? 0);
  const finalPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center bg-white/5 p-6 rounded-lg">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="rounded-lg shadow-lg max-h-[600px] object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-3">{currentProduct.name}</h1>

          <div className="flex items-center gap-4 mb-3">
            <span className="text-sm">
              Код: <span className="font-medium">{currentProduct.code}</span>
            </span>
            <span
              className={`text-sm font-medium px-2 py-1 rounded ${currentProduct.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {currentProduct.stock > 0 ? "В наличност" : "Изчерпано"}
            </span>
            {currentProduct.new && (
              <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">НОВО</span>
            )}
            {discount > 0 && (
              <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">-{discount}%</span>
            )}
          </div>

          <div className="mb-4">
            {discount > 0 && (
              <p className="text-sm line-through text-gray-500">
                {price.toFixed(2)} лв. / {(price / euroRate).toFixed(2)} €
              </p>
            )}
            <p className="text-2xl font-semibold">
              {finalPrice.toFixed(2)} лв. / {(finalPrice / euroRate).toFixed(2)} €
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Спецификации</h2>
            <ul className="space-y-2">
              {currentProduct.utils &&
                Object.entries(currentProduct.utils).map(([key, value]) => (
                  <li key={key} className="text-sm border-b pb-2">
                    <span className="font-medium">{translateKey(key)}:</span>{" "}
                    <span className="ml-1">{value}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <SimilarProducts/>
    </div>
  );
};

export default ProductsPage;
