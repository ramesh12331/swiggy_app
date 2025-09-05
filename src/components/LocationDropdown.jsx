import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const LocationDropdown = () => {
  const [open, setOpen] = useState(true); // set false initially if you want hidden

  return (
    <div className="w-full flex items-center justify-center mt-6">
      <div className="flex justify-center items-center space-x-2 w-[90%] md:w-[60%]">
        {/* Location Input */}
        <div
          className="flex items-center bg-white rounded-md px-3 py-2 w-1/4 cursor-pointer border"
          onClick={() => setOpen(!open)}
        >
          <IoLocationSharp className="text-[#ff5200]" />
          <span className="ml-2 truncate text-gray-950">
            Begumpet, Hyderabad,...
          </span>
        </div>

        {/* Search Input */}
        <div className="flex items-center bg-white  rounded-md px-3 py-2 w-[300px] border">
          <input
            type="text"
            placeholder="Search for restaurant, item or more"
            className="w-full outline-none text-sm text-gray-500>"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-63 left-1/2 -translate-x-1/2 w-[90%] md:w-[39%] bg-white rounded-lg shadow-lg p-4 z-50 md:hidden">
          {/* Current Location */}
          <div className="flex items-center space-x-2 text-[#ff5200] font-bold cursor-pointer">
            <IoLocationSharp />
            <span>Use my current location</span>
          </div>

          <hr className="my-3" />

          {/* Recent Searches */}
          <div className=" border-gray-300 border-t-1 ">
            <p className="text-xs text-gray-500 font-semibold mb-2 pt-2">
              RECENT SEARCHES
            </p>

            <div className="flex items-start space-x-2 mb-3 cursor-pointer">
              <IoLocationSharp className="text-gray-500 mt-1" />
              <span className="text-sm text-gray-900">
                Banjara Hills, Hyderabad, Telangana, India
              </span>
            </div>
            <div className="flex items-start space-x-2 cursor-pointer">
              <IoLocationSharp className="text-gray-500 mt-1" />
              <span className="text-sm text-gray-900">
                RTC Cross Road, P & T Colony, Ashok Nagar, Himayatnagar,
                Hyderabad, Telangana, India
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
