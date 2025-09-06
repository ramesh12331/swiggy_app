

// import { useState } from "react";
// import { GoArrowUpRight } from "react-icons/go";
// import { IoPersonSharp } from "react-icons/io5";
// import { HiMenu, HiX } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const cartItems = useSelector((store)=>store.cart.items)

//   return (
//     <div className="flex justify-around items-center py-2 px-4 bg-[#ff5200] text-white">
//       {/* Logo */}
//       <div>
//         <img src="/logo.avif" className="w-20 md:w-24" alt="logo" />
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden md:block">
//         <ul className="flex space-x-6 text-xs font-bold items-center">
//           <li className="cursor-pointer">Swiggy Corporate</li>
//           <li className="cursor-pointer">Partner with us</li>
//           <li className="flex items-center border p-2 rounded-xl cursor-pointer">
//             Get the App <GoArrowUpRight className="ml-1 size-4 font-bold" />
//           </li>
//           <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
//           <li className="bg-[#43464a] rounded-full p-2 cursor-pointer">
//             <IoPersonSharp className="size-5" />
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <button onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="absolute top-14 left-0 w-full bg-[#ff5200] p-4 md:hidden z-50">
//           <ul className="flex flex-col space-y-4 text-sm font-bold">
//             <li className="cursor-pointer">Swiggy Corporate</li>
//             <li className="cursor-pointer">Partner with us</li>
//             <li className="flex items-center border p-2 rounded-xl cursor-pointer w-fit">
//               Get the App <GoArrowUpRight className="ml-1 size-4 font-bold" />
//             </li>
//             <li className="bg-[#43464a] rounded-full p-2 w-fit cursor-pointer">
//               <IoPersonSharp className="size-5" />
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

// *********************

import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between md:justify-around items-center py-2 px-4 bg-[#ff5200] text-white relative">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src="/logo.avif" className="w-20 md:w-24" alt="logo" />
        </Link>
        
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex space-x-6 text-xs font-bold items-center">
          <li className="cursor-pointer">Swiggy Corporate</li>
          <li className="cursor-pointer">Partner with us</li>
          <li className="flex items-center border p-2 rounded-xl cursor-pointer">
            Get the App <GoArrowUpRight className="ml-1 size-4 font-bold" />
          </li>

          {/* Cart with icon */}
          <li>
            <Link to="/cart" className="relative flex items-center">
              <FiShoppingCart className="size-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-[#ff5200] text-[10px] font-bold rounded-full px-1.5 py-0.5 shadow">
                  {cartItems.length || 0}
                </span>
              )}
            </Link>
          </li>

          {/* Profile Icon */}
          <li className="bg-[#43464a] rounded-full p-2 cursor-pointer">
            <IoPersonSharp className="size-5" />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#ff5200] p-4 md:hidden z-50">
          <ul className="flex flex-col space-y-4 text-sm font-bold">
            <li className="cursor-pointer">Swiggy Corporate</li>
            <li className="cursor-pointer">Partner with us</li>
            <li className="flex items-center border p-2 rounded-xl cursor-pointer w-fit">
              Get the App <GoArrowUpRight className="ml-1 size-4 font-bold" />
            </li>

            {/* Cart Icon for Mobile */}
            <li>
              <Link to="/cart" className="relative flex items-center">
                <FiShoppingCart className="size-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-[#ff5200] text-[10px] font-bold rounded-full px-1.5 py-0.5 shadow">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>

            {/* Profile Icon */}
            <li className="bg-[#43464a] rounded-full p-2 w-fit cursor-pointer">
              <IoPersonSharp className="size-5" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

