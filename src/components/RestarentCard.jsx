// import React from "react";
// import { IoMdStar } from "react-icons/io";

// const RestarentCard = () => {
//   return (
//     <div className="card bg-base-100 shadow-sm m-4 p-2 w-[200px] rounded">
//       <div className="relative">
//         <img
//           className="rounded-xl"

//           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/625b2429-2fae-40b5-a232-c6a53803f6ea_698238.JPG"
//           alt="food"
//         />
//         <div className="absolute bottom-0">
//           <p className="font-bold p-2 text-gray-800 text-[14px]">
//             ITEMS AT $69
//           </p>
//         </div>
//       </div>
//       <div className="p-2">
//         <h2 className=" text-[12px] font-bold">
//           KFC
//           {/* <div className="badge badge-secondary">NEW</div> */}
//         </h2>
//         <p className="text-[12px] flex items-center space-x-1 font-semibold">
//           <span className="">
//             <IoMdStar className="bg-green-600 rounded-full text-white p-[1px]"/>
//           </span>{" "}
//            <span> 4.3</span> <span>|</span><span>25-30min</span>
//         </p>
//         <p className="text-xs">Biryani,Biryani</p>
//         <p className="text-xs">Hyderabad</p>
//       </div>
//     </div>
//   );
// };

// export default RestarentCard;

// *************************

import React from "react";
import { IoMdStar } from "react-icons/io";
import { CDN_URL } from "../utils/constants";
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
          <p className="font-bold p-1 text-white text-[13px] space-x-1">
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
        <p className="text-xs text-gray-600">
          {cuisines?.join(", ") || "Not available"}
        </p>
        <p className="text-xs text-gray-600">{locality}</p>
      </div>
    </div>
  );
};

export default RestarentCard;
