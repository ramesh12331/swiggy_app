import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const info = item.card.info;
        return (
          <div
            key={info.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            {/* Left side - Text */}
            <div className="w-full md:w-8/12">
              <div className="flex flex-col">
                <span className="font-bold text-base md:text-sm text-gray-800">
                  {info.name}
                </span>
                <span className="  text-sm font-semibold">
                  ₹{(info.price || info.defaultPrice) / 100}
                </span>
              </div>
              {info.description && (
                <p className="text-xs md:text-xm text-gray-500 mt-2 line-clamp-2">
                  {info.description}
                </p>
              )}
            </div>

            {/* Right side - Image + Button */}
            <div className="w-full md:w-3/12 mt-3 md:mt-0 flex flex-col items-center relative">
              {info.imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${info.imageId}`}
                  alt={info.name}
                  className="w-28 h-24 object-cover rounded-lg shadow-sm"
                />
              )}
              <button
                onClick={() => handleAddItem(item)}
                className="absolute -bottom-3 px-4 bg-white  text-green-800 font-bold  text-sm rounded-lg shadow-2xl/100 border border-gray-400 hover:bg-gray-200 transition cursor-pointer"
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
