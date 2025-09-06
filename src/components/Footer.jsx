import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white text-center py-3">
      <p className="text-sm">
        © {new Date().getFullYear()} Swiggy • Made with ❤️ by Ramesh
      </p>
    </footer>
  );
};

export default Footer;
