import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white text-center py-3 fixed bottom-0 right-0 left-0">
      <p className="text-sm">
        © {new Date().getFullYear()} Swiggy • Made with ❤️ by Ramesh
      </p>
    </footer>
  );
};

export default Footer;
