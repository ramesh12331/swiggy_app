import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";

const Banner = () => {
  const [bannerImg, setBannerImg] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4447068&lng=78.4663812&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json.data);
    setBannerImg(
      json?.data?.cards[0].card?.card?.gridElements?.infoWithStyle?.info
    );
    // console.log(json.data.cards[1]);
    // setListofRestaurants(
    //   json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setFilteredRestants(
    //   json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };
  // if (!bannerImg) return null;
  return (
    <>
      <div className="flex px-24 overflow-x-auto space-x-4 scrollbar-hide">
        {bannerImg.map((banner, i) => (
          <div key={i}>
            <img src={`${CDN_URL}${banner?.imageId}`} className="w-30" alt="" />
          </div>
        ))}
      </div>
      {/* <p>{bannerImg?.info[0]?.imageId}</p> */}
    </>
  );
};

export default Banner;
