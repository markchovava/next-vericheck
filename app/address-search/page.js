"use client";

import Peps from "./_components/AddressSearch";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";


export default function Home() {
  

  return (
    <>
      <style>{`
        /* Acrylic blur background for Windows 11 style tiles */
        .acrylic-blur {
          backdrop-filter: saturate(180%) blur(10px);
          background-color: rgba(255, 255, 255, 0.3);
        }
        /* line-clamp for descriptions */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
      <div className="min-h-screen bg-gray-900 text-gray-300 pb-[5rem]">

        <ul className='w-[94%] mx-auto flex justify-start items-center gap-2 py-1 mb-[4rem] border-b border-gray-600'>
            <Link href="/">
                <li>Home</li>
            </Link>
            <li><FaAngleRight /></li>
            <Link href="/address-search">
                <li className='font-semibold'>Address Search</li>
            </Link>
        </ul>
       
        <Peps />

      </div>
    </>
  );
}
