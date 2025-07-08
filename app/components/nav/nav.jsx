"use client";

import { CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { HandleGotoPage } from "../../(msc)/goto_page";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
            <div className="h-[50px] aspect-[5.5/1] relative">
              <Image
                src="/assets/img/logo.png"
                fill
                alt="Company Logo"
                className="object-fill w-[100%]"
              /> 
            </div>
          </Link>


          <div className="flex space-x-6">
            <button
              onClick={() => handleNavigation("/", 1)}
              className={`text-gray-300 hover:text-white transition-colors font-light text-lg ${indexPage === 1 && "border-b border-primary"}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/about", 2)}
              className={`text-gray-300 hover:text-white transition-colors font-light text-lg ${indexPage === 2 && "border-b border-primary"}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("/contact", 3)}
              className={`text-gray-300 hover:text-white transition-colors font-light text-lg ${indexPage === 3 && "border-b border-primary"}`}
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation("/support", 4)}
              className={`text-gray-300 hover:text-white transition-colors font-light text-lg ${indexPage === 4 && "border-b border-primary"}`}
            >
              Support
            </button>
            <button
              onClick={() => handleNavigation("/login", 5)}
              className="bg-primary text-white px-6 py-3 hover:bg-secondary transition-colors font-light text-lg"
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
