import React from "react";
import ArrowSvg from '../assets/icons/arrow-right-black.svg';
import Star from '../assets/icons/star-yellow-fill.svg';
import { FiShoppingCart } from "react-icons/fi";

const Card = ({ imgSrc, rating, title, priceRange, berat, onOrder }) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
      <div className="h-[250px] w-full overflow-hidden">
        <img className="h-full w-full object-cover" src={imgSrc} alt={title} />
      </div>

      <div className="flex flex-col p-6 space-y-4">
        <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <img className="h-6 w-6" src={Star} alt="rating" />
          <span className="font-semibold text-[#FFB800]">{rating}</span>
          <span className="text-[#656565] text-sm">(6K+)</span>
        </div>
        <div className="flex items-center gap-2 justify-between">

        <p className="text-lg font-semibold text-gray-600">{priceRange}</p>
        <p className="text-sm text-gray-500">Berat: {berat}</p>
        </div>

      </div>

      <div className="w-full flex justify-center mb-4">
        <button onClick={onOrder} className="flex items-center justify-between bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded-full transition duration-300">
          <span className="text-sm font-semibold">Pesan Sekarang</span>
          {/* <img className="w-5 h-5 ml-2" src={ArrowSvg} alt="arrow-right" /> */}
          <FiShoppingCart className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Card;
