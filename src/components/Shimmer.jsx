import React from "react";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const Shimmer = () => {
  return (
    <div className="px-24 py-6">
      <h1 className="font-bold mb-4">Loading restaurants...</h1>
      <div className="flex flex-wrap justify-center">
        {Array(12) // 12 shimmer cards
          .fill("")
          .map((_, i) => (
            <ShimmerRestaurantCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
