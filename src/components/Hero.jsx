import React from "react";
import LocationDropdown from "./LocationDropdown";

const Hero = () => {
  return (
    <>
      <div className="bg-[#ff5200] text-white py-6 relative">
        <div className="absolute top-5 left-0 right-0 flex justify-between">
          <img src="Veggies_new.avif" className="w-[12%]" alt="" />
          <img
            src="Sushi_replace.avif"
            className="w-[12%] float-right "
            alt=""
          />
          {/* <div>
            <img src="Veggies_new.avif" className="w-[10%]" alt="" />
          </div>
          <div>
            <img src="Sushi_replace.avif" className="w-[10%] float-right " alt="" />
          </div> */}
        </div>
        {/*  */}
        <div className="pt-8">
          <p className="text-center max-w-120 mx-auto font-bold text-3xl">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </p>
        </div>

        {/* input */}
        <LocationDropdown />
        {/* cards */}
        <div className="flex justify-center">
          <img src="card1.avif" className="w-[25%] h-[25%]" alt="" />
          <img src="card2.avif" className="w-[25%] h-[25%]" alt="" />
          <img src="card3.avif" className="w-[25%] h-[25%]" alt="" />
        </div>

        
      </div>
    </>
  );
};

export default Hero;
