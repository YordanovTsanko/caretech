import React from "react";
import { useParams } from "react-router-dom";
import laptops from "../utils/laptops.json";
import SimilarProducts from "../components/products/SimilarProducts";
import laptopsParms from "../utils/laptopsParms.json";
import ImageDisplaying from "../components/products/ImageDisplaying";

const translations = {
  Type: "Тип",
  CPU: "Процесор",
  "CPU model": "Модел процесор",
  "Number of cores": "Брой ядра",
  "Number of Threads": "Брой нишки",
  Frequency: "Честота",
  Cache: "Кеш памет",
  "Display type": "Тип дисплей",
  "Screen Size": "Размер на екрана",
  "Format display": "Формат на дисплея",
  Resolution: "Резолюция",
  "Aspect Ratio": "Съотношение на страните",
  RAM: "Оперативна памет",
  "Memory type": "Тип памет",
  "Frequency Memory": "Честота на паметта",
  "Max. capacity memory": "Максимален капацитет памет",
  "Number of slots": "Брой слотове",
  "Hard disk type": "Тип твърд диск",
  "Hard disk capacity": "Капацитет твърд диск",
  "Video chipset": "Видео чипсет",
  Series: "Серия",
  "Type Video Memory": "Тип видео памет",
  "Memory card type": "Тип карта памет",
  "Capacity Video Memory": "Капацитет видео памет",
  Audio: "Аудио",
  "Card readers": "Четци за карти",
  "Supported cards": "Поддържани карти",
  Ports: "Портове",
  "Audio output": "Аудио изход",
  Microphone: "Микрофон",
  LAN: "Локална мрежа (LAN)",
  Wireless: "Безжична връзка (Wi-Fi)",
  Bluetooth: "Bluetooth",
  "Web Camera": "Уеб камера",
  "Readers / writers": "Устройства за четене/запис",
  Battery: "Батерия",
  Security: "Сигурност",
  Keyboard: "Клавиатура",
  OS: "Операционна система",
  Dimension: "Размери",
  Colour: "Цвят",
  "Line-up": "Моделна линия",
  "Additional extras": "Допълнителни екстри",
  "Battery warranty": "Гаранция батерия",
};

const ProductsPage = () => {
  const { id } = useParams();
  const euroRate = 1.96;

  const currentProduct = id
    ? laptops?.content.find((product) => product.id === parseInt(id, 10))
    : null;

  const translateTehnicalKey = (key) => translations[key] || key;

  if (!currentProduct) {
    return (
      <div className="max-w-[1280px] mt-14 mx-auto px-4 py-6 text-center text-lg">
        Продуктът не е намерен
      </div>
    );
  }

  const price = Number(currentProduct.finalPrice ?? 0);

  return (
    <div className="max-w-[1280px] mx-auto px-4 my-14">
      {/* Main product section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ImageDisplaying
          primaryImageUrl={currentProduct?.primaryImageUrl}
          additionalImages={currentProduct?.additionalImages}
          nameBg={currentProduct?.nameBg}
        />

        <div className="flex flex-col">
         <h1 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-sm whitespace-normal break-words">
  {currentProduct?.nameBg}
</h1>


          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-3">
            <span className="text-sm">
              Код: <span className="font-medium">{currentProduct.code}</span>
            </span>
            <span
              className={`text-sm font-medium px-2 py-1 rounded ${
                currentProduct?.active
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {currentProduct?.active ? "В наличност" : "Изчерпано"}
            </span>
            {false && (
              <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                НОВО
              </span>
            )}
          </div>

          <div className="mb-4">
            <p className="text-2xl md:text-3xl font-semibold drop-shadow-sm">
              {price.toFixed(2)} лв. / {(price / euroRate).toFixed(2)} €
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2 drop-shadow-sm">
              Основни характеристики:
            </h2>
            <ul className="space-y-2"></ul>
          </div>
        </div>
      </div>

      {/* Technical specifications */}
      <div className="mt-10">
        <h2 className="text-lg md:text-xl font-semibold text-center my-6">
          ТЕХНИЧЕСКИ ХАРАКТЕРИСТИКИ:
        </h2>
        <div className="flex flex-col px-2 md:px-4 w-full">
          {laptopsParms.map((item, index) => (
            <div
              key={item.key}
              className={`p-2 md:p-3 mb-1 rounded ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <h3 className="text-sm md:text-md font-medium">
                {item.name !== "" && translateTehnicalKey(item.name)}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Similar products */}
      <SimilarProducts />
    </div>
  );
};

export default ProductsPage;
