import React from "react";
import ItemList from "./ItemList";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full md:w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg ">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-base md:text-md">
          {data.title} ({data.itemCards.length})
        </span>
        {showItems ? (
          <IoIosArrowUp className="text-xl md:text-2xl" />
        ) : (
          <IoIosArrowDown className="text-xl md:text-2xl" />
        )}
      </div>

      {/* Accordion Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
