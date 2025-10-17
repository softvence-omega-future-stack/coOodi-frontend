import React from "react";

type ShopItemProps = {
  image: string;
  title: string;
  price?: string;
  fullWidth?: boolean;
};

const ShopItem: React.FC<ShopItemProps> = ({ image, title, price, fullWidth }) => {
  return (
    <div
      className={`py-8 px-6 chalk-frame shop-item relative transition-all overflow-hidden bg-transparent ${
        fullWidth ? "col-span-full" : ""
      }`}
    >
      {price ? (
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <img src={image} alt={title} className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain" />
          <div className="text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-400">{title}</h3>
            <p className="text-lg sm:text-xl text-yellow-400 font-bold">{price}</p>
          </div>
          <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-16 py-2 rounded-full text-sm sm:text-base transition-all mt-3">
            ADD TO BAG
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-5">
          <img src={image} alt={title} className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain" />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-400 text-center">
            {title}
          </h3>
          <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-16 py-2 rounded-full text-sm sm:text-base transition-all mt-2">
            ADD TO BAG
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopItem;
