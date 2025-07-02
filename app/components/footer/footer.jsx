"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("address-search")) {
    return null;
  }

  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-5 gap-12">
          <div className="col-span-2">
            <Link href="/">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-purple-600 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-light text-white">VeriCheck</span>
            </div>
            </Link>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              Leading provider of verification and compliance solutions for
              businesses worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-light text-white mb-6 text-lg">Services</h3>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>
                <Link href="/sanctions" className="hover:text-white transition-colors">
                  Sanction Screening
                </Link>
              </li>
              <li>
                <Link href="/pep" className="hover:text-white transition-colors">
                  PEP Screening
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Document Verification
                </a>
              </li>
              <li>
                <Link href="/address-search" className="hover:text-white transition-colors">
                  Address Search
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-light text-white mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
             
            </ul>
          </div>
          <div>
            <h3 className="font-light text-white mb-6 text-lg">Support</h3>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-light">
            &copy; 2025 VeriCheck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
