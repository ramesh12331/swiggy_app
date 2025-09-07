import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { FaUtensils } from "react-icons/fa";
import { PiChefHatThin } from "react-icons/pi";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4447068&lng=78.4663812&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };

  // Check if resInfo is null before destructuring
  if (resInfo === null) return <Shimmer />;
  // Destructure after confirming resInfo is not null
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  // const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4].card?.card?.categories;
  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  //   console.log(itemCards);
  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="">
        <div className="w-full md:w-6/12 mx-auto">
          <h1 className="font-bold mt-6 text-xl flex items-center gap-2">
            <PiChefHatThin className="text-red-500" />
            {name || "Restaurant Name"}
          </h1>

          <h2 className="flex items-center gap-2">
            <FaUtensils className="text-green-600" />
           <span className="font-bold text-md"> Cuisines:</span> <span className="text-xs"> {cuisines?.join(", ") || "Not available"} -{" "}</span>
            <span className="text-xs">{costForTwoMessage || "Cost for two not available"}</span>
          </h2>
        </div>

        {/* categories accordions */}
        {categories.map((category, i) => (
          // Controlled Component
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={i === showIndex ? true : false}
            setShowIndex={() => setShowIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
