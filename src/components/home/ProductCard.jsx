import { useNavigate } from "react-router-dom";

const ProductCard = ({ p, onBuy, onToggleCart, inCart }) => {
  const navigate = useNavigate();
  const euroRate = 1.96;
  const price = Number(p.finalPrice ?? 0);

  return (
    <article className="p-3 bg-white/5 rounded-lg hover:shadow-lg flex flex-col">
      <div onClick={() => navigate(`product/${p.id}`)} className="relative cursor-pointer">
        {/* {p.new && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold">
            НОВО
          </span>
        )} */}
        {/* {discounted > 0 && (
          <>
            <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold">
              -{discounted}%
            </span>
            <span
              className={`absolute ${
                p.new ? "top-10" : "top-2"
              } left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold`}
            >
              ПРОМО
            </span>
          </>
        )} */}
        <div className="w-full h-40 flex items-center justify-center mb-3">
          {p.primaryImageUrl ? (
            <img
              src={p.primaryImageUrl}
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
        {p.nameBg}
      </h3>

      <div className="mt-auto text-center">
        {false ? (
          <p className="text-black/60 line-through text-sm">
            {price.toFixed(2)} лв. / {(price / euroRate).toFixed(2)} €
          </p>
        ) : (
          <p className="text-transparent text-sm">–</p>
        )}
        <p className="text-black font-semibold mb-3">
          {p.finalPrice.toFixed(2)} лв. / {(p.finalPrice / euroRate).toFixed(2)} €
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

export default ProductCard;
