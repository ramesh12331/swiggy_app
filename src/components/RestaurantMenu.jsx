import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // const {res} = useParams();
  // console.log(params);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4447068&lng=78.4663812&restaurantId="+resId+"&submitAction=ENTER"
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

  return (
    <div>
      <div>
        <h1>{name || "Restaurant Name"}</h1>

        <h2>Cuisines: {cuisines?.join(", ") || "Not available"}</h2>
        <p>{costForTwoMessage || "Cost for two not available"}</p>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {" Rs."}{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
