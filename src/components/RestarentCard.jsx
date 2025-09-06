import React from "react";
import { IoMdStar } from "react-icons/io";
import { CDN_URL } from "../utils/constants";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
const RestarentCard = (props) => {
  if (!props) return null;
  const { resData } = props;
  // Extract restaurant info
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
    locality,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  return (
    <div className="card bg-base-100 shadow-md m-3 w-[200px] sm:w-[220px] md:w-[240px] min-h-[240px] rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img
          className="rounded-t-xl w-full h-[140px] object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt="food"
        />
        <div className="absolute bottom-0 text-shadow-2xs/100 w-full ">
          <p className="font-bold p-1 text-white text-[13px] flex items-center space-x-1">
            {/* <FaTag className="text-orange-500 text-sm" /> */}
            <MdLocalOffer className="text-green-400 text-shadow-2xs/100 text-sm" />

            <span>{aggregatedDiscountInfoV3?.header}</span>
            <span>{aggregatedDiscountInfoV3?.subHeader || "offer"}</span>
          </p>
        </div>
      </div>
      <div className="p-2">
        <h2 className="text-[14px] font-bold">{name}</h2>
        <p className="text-[12px] flex items-center gap-1 font-semibold">
          <IoMdStar className="bg-green-600 rounded-full text-white p-[2px]" />
          <span>{avgRating || "--"}</span> <span>|</span>
          <span>{sla?.slaString || "N/A"}</span>
        </p>
        <p className="text-xs text-gray-600 flex space-x-1 items-center">
          <FaUtensils className="text-gray-600 text-sm" />
          <span>{cuisines?.join(", ") || "Not available"}</span>
        </p>
        <p className="text-xs text-gray-600 flex space-x-1 items-center">
          <FaMapMarkerAlt className="text-red-500 text-xs " />
          <span className="font-semibold">{locality}</span>
        </p>
      </div>
    </div>
  );
};

export default RestarentCard;
