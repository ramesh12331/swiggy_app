// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 px-6 md:px-24 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Brand */}
//         <div>
//           <h2 className="text-white text-xl font-bold mb-3">Swiggy</h2>
//           <p className="text-sm">
//             Order food from your favorite restaurants and get it delivered fast
//             at your doorstep.
//           </p>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Company</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="/" className="hover:text-white">About</a></li>
//             <li><a href="/" className="hover:text-white">Careers</a></li>
//             <li><a href="/" className="hover:text-white">Team</a></li>
//             <li><a href="/" className="hover:text-white">Swiggy Blog</a></li>
//           </ul>
//         </div>

//         {/* Help */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Help</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="/" className="hover:text-white">FAQs</a></li>
//             <li><a href="/" className="hover:text-white">Support</a></li>
//             <li><a href="/" className="hover:text-white">Partner with us</a></li>
//             <li><a href="/" className="hover:text-white">Ride with us</a></li>
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Follow Us</h3>
//           <div className="flex space-x-4">
//             <a href="/" className="hover:text-white"><FaFacebookF /></a>
//             <a href="/" className="hover:text-white"><FaTwitter /></a>
//             <a href="/" className="hover:text-white"><FaInstagram /></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
//         © {new Date().getFullYear()} Swiggy Clone. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// ******************
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white text-center py-3">
      <p className="text-sm">
        © {new Date().getFullYear()} Swiggy  • Made with ❤️ by Ramesh
      </p>
    </footer>
  );
};

export default Footer;

