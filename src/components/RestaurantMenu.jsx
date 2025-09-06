import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex,setShowIndex] = useState(null)

  // const {res} = useParams();
  // console.log(params);

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
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name || "Restaurant Name"}</h1>

        <h2 className="font-bold text-lg">
          Cuisines: {cuisines?.join(", ") || "Not available"} -{" "}
          <span>{costForTwoMessage || "Cost for two not available"}</span>
        </h2>
        {/* <p>{costForTwoMessage || "Cost for two not available"}</p> */}
        {/* <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {" Rs."}{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul> */}
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
