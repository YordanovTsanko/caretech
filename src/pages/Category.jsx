import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import categories from "../utils/categories.json";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomDropdown from "../components/CustomDropdown";
import ProductCard from "../components/home/ProductCard";
import laptops from "../utils/laptops.json";

const filtersList = [
  { id: "new", label: "Нови" },
  { id: "promo", label: "Промоционални" },
  { id: "sale", label: "Разпродажба" },
  { id: "available", label: "Налични" },
];

const Category = () => {
  const [addedIds, setAddedIds] = useState(new Set());
  const [products, setProducts] = useState([]);

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

  const { category: categoryParam } = useParams();
  const navigate = useNavigate();
  const [match, setMatch] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [limit, setLimit] = useState(20);

  // Проверка за съществуваща категория
  useEffect(() => {
      setProducts([]);
    const found = categories.find((c) => c.slug === categoryParam);
    if (!found) {
      navigate("/");
    } else {
      setMatch(found);
    }
  }, [categoryParam, navigate]);

  // Филтриране на laptopsParms за текущата категория
  useEffect(() => {
    if (!match) return;
    if (match.nameEn === "Laptops") {
      setProducts(laptops);
    } 
    console.log(products);
  }, [match, products]);

  if (!match) return null;

  const sendAPI = (filters) => {
    console.log("API call with filters:", filters);
    // fetch("/api/products", { method: "POST", body: JSON.stringify(filters) })
  };

  const handleFilterChange = (id, checked) => {
    const updated = { ...selectedFilters, [id]: checked };
    setSelectedFilters(updated);
    sendAPI(updated);
  };

  return (
    <div className="pt-14 flex flex-col items-center w-full md:px-20 max-w-[2000px] mx-auto">
      <div className="w-full">
        {/* breadcrumbs */}
        <div className="px-4 sm:px-0 flex gap-2 text-[10px] text-gray-500 flex-wrap">
          <h4>НАЧАЛО</h4>
          {match?.parent && <h4>- {match?.parent?.nameBg?.toUpperCase()}</h4>}
          <h4>- {match?.nameBg?.toUpperCase()}</h4>
        </div>

        {/* grid */}
        <div className="grid grid-cols-7 my-4 gap-4">
          {/* Sidebar filter */}
          <div className="hidden md:block col-span-2 xl:col-span-1 bg-gray-50 border-r p-2">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold mb-2 underline decoration-primary underline-offset-2">
                ФИЛТЪР
              </h4>
              {filtersList.map((filter) => (
                <CustomCheckbox
                  key={filter.id}
                  label={filter.label}
                  checked={!!selectedFilters[filter.id]}
                  onChange={(checked) => handleFilterChange(filter.id, checked)}
                />
              ))}
              {/* <h4 className="font-semibold mb-2 mt-4 underline decoration-primary underline-offset-2">
                ПРОИЗВОДИТЕЛИ
              </h4> */}
              {/* Ако искаш можеш да мапнеш производители от categoryParams */}
              {/* {categoryParams.map((param) => (
                <CustomCheckbox
                  key={param.id}
                  label={param.name}
                  checked={!!selectedFilters[param.id]}
                  onChange={(checked) => handleFilterChange(param.id, checked)}
                />
              ))} */}
            </div>
          </div>
          <h2 className="sm:hidden col-span-7 whitespace-pre-wrap block text-center font-semibold text-lg">
            {match?.nameBg?.toUpperCase()}
          </h2>
          <div className="col-span-7 md:col-span-5 xl:col-span-6 p-4">
            <div className="relative flex items-center justify-between">
              <h2 className="text-center text-[10px] sm:text-sm">
                {products?.content?.length || 0} ПРОДУКТА
              </h2>
              <h2
                className="hidden sm:block absolute left-1/2 -translate-x-1/2 text-center font-semibold text-lg
               truncate max-w-[50%] sm:max-w-[40%]"
                title={match?.nameBg}
              >
                {match?.nameBg?.toUpperCase()}
              </h2>

              <div className="flex items-center gap-2">
                <h4 className="text-xs text-gray-500">Покажи:</h4>
                <CustomDropdown value={limit} onChange={setLimit} />
              </div>
            </div>
            <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {products?.content?.length > 0 ? (
                products.content.map((p) => (
                  <ProductCard
                    key={p.id}
                    p={p}
                    onBuy={handleBuy}
                    onToggleCart={handleToggleCart}
                    inCart={addedIds.has(p.id)}
                  />
                ))
              ) : (
                <p className="text-center col-span-5 mt-10">
                  Няма продукти за тази категория
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
