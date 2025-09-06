// import React from "react";
// import { CDN_URL } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";

// const ItemList = ({ items }) => {
//   console.log(items)
//   const dispatch = useDispatch();
//   const handleAddItem = (item) => {
//     // Dispatch an action
//     // dispatch(addItem("pizza"))
//     dispatch(addItem(item));
//   };
//   return (
//     <div>
//       {items.map((item) => (
//         <div
//           key={item.card.info.id}
//           className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
//         >
//           <div className="w-9/12">
//             <div className="py-2">
//               <span>{item.card.info.name}</span>
//               <span> - $ {item.card.info.defaultPrice / 100}</span>
//             </div>
//             <p className="text-xs">{item.card.info.description}</p>
//           </div>
//           <div className="w-3/12 p-2">
//             <div className="absolute">
//               <button
//                 className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg cursor-pointer"
//                 onClick={() => handleAddItem(item)}
//               >
//                 Add +
//               </button>
//             </div>
//             <img
//               src={
//                 `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
//                 item.card.info.imageId
//               }
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;


// *******************

import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const info = item.card.info;
        return (
          <div
            key={info.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            {/* Left side - Text */}
            <div className="w-full md:w-8/12">
              <div className="flex flex-col">
                <span className="font-semibold text-base md:text-lg text-gray-800">
                  {info.name}
                </span>
                <span className="text-green-600 font-medium text-sm md:text-base">
                  ₹{(info.price || info.defaultPrice) / 100}
                </span>
              </div>
              {info.description && (
                <p className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-2">
                  {info.description}
                </p>
              )}
            </div>

            {/* Right side - Image + Button */}
            <div className="w-full md:w-3/12 mt-3 md:mt-0 flex flex-col items-center relative">
              {info.imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${info.imageId}`}
                  alt={info.name}
                  className="w-28 h-24 object-cover rounded-lg shadow-sm"
                />
              )}
              <button
                onClick={() => handleAddItem(item)}
                className="absolute -bottom-3 px-4 py-1.5 bg-lime-950 text-white text-sm rounded-lg shadow hover:bg-lime-800 transition"
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
