import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomDropdown from "../components/CustomDropdown";
import ProductCard from "../components/products/ProductCard";
import ManufacturerFilter from "../components/products/ManufacturerFilter";
import ProcessorFilter from "../components/products/ProcessorFilter";
import MainFilter from "../components/products/MainFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { fetchCategories } from "../redux/categorySlice";

const Category = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items: products } = useSelector((state) => state.products);

  const { category: categoryParam } = useParams();
  const [match, setMatch] = useState(null);
  const [limit, setLimit] = useState(20);
  const [addedIds, setAddedIds] = useState(new Set());
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChangeFilter = (name) => {
    setSelectedFilters((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
    console.log(selectedFilters);
  };

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

  // Проверка за съществуваща категория
  useEffect(() => {
    setMatch(null);
    const getCategory = async () => {
      try {
        const res = await dispatch(fetchCategories()).unwrap();

        const foundCategory = res.find((c) => c.slug === categoryParam);
        if (!foundCategory) {
          navigate("/");
        } else {
          setMatch(foundCategory);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    getCategory();
  }, [dispatch, categoryParam, navigate]);

  // Продукти за текущата категория
  useEffect(() => {
    if (!match) return;
    match && dispatch(fetchProducts(match));
  }, [match, dispatch]);

  if (!match) return null;

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
    {products?.length >0 && (       <div className="hidden md:block col-span-2 xl:col-span-1 bg-gray-50 border-r p-2">
           
              <div className="flex flex-col gap-3">
                <MainFilter
                  selected={selectedFilters}
                  onChange={handleChangeFilter}
                />
                <ManufacturerFilter
                  products={products}
                  selected={selectedFilters}
                  onChange={handleChangeFilter}
                />{" "}
                <ProcessorFilter
                  products={products}
                  selected={selectedFilters}
                  onChange={handleChangeFilter}
                />
              </div>
          
          </div>  )}
          <h2 className="sm:hidden col-span-7 whitespace-pre-wrap block text-center font-semibold text-lg">
            {match?.nameBg?.toUpperCase()}
          </h2>
          <div className={`${products?.length > 0 ? "col-span-7 md:col-span-5 xl:col-span-6" : "col-span-7"}  p-4`}>
            <div className="relative flex items-center justify-between">
              <h2 className="text-center text-[10px] sm:text-sm">
                {products?.length || 0} ПРОДУКТА
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
            <div className={`mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`}>
              {products?.length > 0 ? (
                products.map((p) => (
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
