import React from "react";

const ShimmerRestaurantCard = () => {
  return (
    <div className="card bg-base-100 shadow-md m-3 w-[200px] sm:w-[220px] md:w-[240px] min-h-[240px] rounded-xl overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-[140px] bg-gray-200"></div>

      <div className="p-2 space-y-2">
        {/* Title skeleton */}
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>

        {/* Rating + Time */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/6"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        </div>

        {/* Cuisines */}
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>

        {/* Locality */}
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default ShimmerRestaurantCard;
