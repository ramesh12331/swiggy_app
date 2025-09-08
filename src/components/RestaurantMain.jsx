import React, { useEffect, useState } from "react";
import RestarentCard from "./RestarentCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaSearch } from "react-icons/fa";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Shimmer from "./Shimmer";

const RestaurantMain = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestants, setFilteredRestants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variable update , react triggers a reconcilation cycle(re-renders the component)
  console.log("Body render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4447068&lng=78.4663812&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);
    // console.log(json.data.cards[1]);
    setListofRestaurants(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestants(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false)
    return <h1>You are in offline !! check your internet connection</h1>;

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Hero />
      <>
        {/* Search Input */}

        <div className="flex justify-center space-x-1">
          <div className="flex items-center bg-white  rounded-md px-3 py-2 w-[300px] border  my-6">
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="w-full outline-none text-sm text-gray-500"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={searchText}
            />
            <FaSearch
              onClick={() => {
                // Filter the restaurant cards and update the UI
                //I need search text in inputbox
                console.log(searchText);
                // const filteredRestaurant = listofRestaurants.filter((res)=>res.info.name.includes(searchText));
                const filteredRestaurant = listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                // setListofRestaurants(filteredRestaurant);
                setFilteredRestants(filteredRestaurant);
              }}
              className="text-gray-500 ml-2"
            />
          </div>
        </div>
        <Banner />
      </>
      <h1 className="font-bold px-24">Top restaurant chains in Hyderabad</h1>
      <div className="flex flex-wrap justify-center py-6 mb-10">
        {filteredRestants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestarentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RestaurantMain;
