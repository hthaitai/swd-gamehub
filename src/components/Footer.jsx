import React from "react";

function Footer() {
  return (
    <footer className="  py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">GAMEHUB</h2>
          <p className="mt-2 ">
          A place to share the most wonderful things.
          </p>
        </div>
        
        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold">Navigation</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className=" hover:text-white">Home</a></li>
            <li><a href="#gamelist" className=" hover:text-white">Games</a></li>
          </ul>
        </div>
        
        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2 ">Email: contact@mywebsite.com</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center  text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
