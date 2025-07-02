"use client";

import { CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { HandleGotoPage } from "../../(msc)/goto_page";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const [indexPage, setIndexPage] = useState(1);

  const router = useRouter();

  const handleNavigation = (page, indexPage) => {
    setIndexPage(indexPage);
    router.push(page);
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-full px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-600 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-light text-white">VeriCheck</span>
          </div>
          </Link>

          <div className="flex space-x-6">
            <button
              onClick={() => handleNavigation("/", 1)}
              className={`text-gray-300 hover:text-white transition-colors font-light text-lg ${indexPage === 1 && "border-b border-purple-600"}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/about", 2)}
              className={`text-gray-300 hover:text-white transition-colors font-light text-lg ${indexPage === 2 && "border-b border-purple-600"}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("/contact", 3)}
              className={`text-gray-300 hover:text-white transition-colors font-light text-lg ${indexPage === 3 && "border-b border-purple-600"}`}
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation("/support", 4)}
              className={`text-gray-300 hover:text-white transition-colors font-light text-lg ${indexPage === 4 && "border-b border-purple-600"}`}
            >
              Support
            </button>
            <button
              onClick={() => handleNavigation("/login", 5)}
              className="bg-purple-600 text-white px-6 py-3 hover:bg-purple-700 transition-colors font-light text-lg"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
