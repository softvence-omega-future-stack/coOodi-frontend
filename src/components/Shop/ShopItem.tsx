import React from "react";
import AnimatedButton from "../button/AnimatedButton";
import { useNavigate } from "react-router-dom";

type ShopItemProps = {
  image: string;
  title: string;
  price?: string;
  fullWidth?: boolean;
};

const ShopItem: React.FC<ShopItemProps> = ({
  image,
  title,
  price,
  fullWidth,
}) => {

  const navigate = useNavigate();

  return (
    <div
      className={`py-8 px-6 chalk-frame shop-item relative transition-all overflow-hidden ${
        fullWidth ? "col-span-full" : ""
      }`}
    >
      {price ? (
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <img
            src={image}
            alt={title}
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
          />
          <div className="text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#9F854B]">
              {title}
            </h3>
            <p className="text-lg sm:text-xl text-[#9F854B] font-bold">
              {price}
            </p>
          </div>
          <AnimatedButton text="ADD TO BAG" className="mt-3" onClick={() => navigate("/my-bag")}/>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-5">
          <img
            src={image}
            alt={title}
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
          />
          <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold text-[#9F854B] text-center`}>
            {title}
          </h3>
          <AnimatedButton text="ADD TO BAG" className="mt-2" onClick={() => navigate("/my-bag")}/>
        </div>
      )}
    </div>
  );
};

export default ShopItem;
