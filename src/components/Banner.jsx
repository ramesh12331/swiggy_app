import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";

const Banner = () => {
  const [bannerImg, setBannerImg] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4447068&lng=78.4663812&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setBannerImg(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || []
    );
  };

  return (
    <div className="px-24 my-6">
      <h1 className="font-bold">what's on your mind?</h1>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide ">
        {bannerImg.map((banner, i) => (
          <div key={i} className="flex-shrink-0">
            <img
              src={`${CDN_URL}${banner?.imageId}`}
              className="w-20 h-24 object-cover rounded-lg"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
