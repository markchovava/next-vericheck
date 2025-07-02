import React from "react";
import {
  Shield,
  Users,
  FileText,
  MapPin,
  CheckCircle,
  ArrowRight,
  Settings,
  BarChart3,
  Clock,
  Zap,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-full px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-light text-white">VeriCheck</span>
            </div>

            <div className="flex space-x-6">
              <button className="text-gray-300 hover:text-white transition-colors font-light text-lg">
                About
              </button>
              <button className="text-gray-300 hover:text-white transition-colors font-light text-lg">
                Contact
              </button>
              <button className="text-gray-300 hover:text-white transition-colors font-light text-lg">
                Support
              </button>
              <button className="bg-purple-600 text-white px-6 py-3 hover:bg-purple-700 transition-colors font-light text-lg">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-left max-w-3xl">
            <h1 className="text-6xl font-light text-white mb-6 leading-tight">
              verification
              <span className="text-purple-400 block font-extralight">
                made simple
              </span>
            </h1>
            <p className="text-2xl text-gray-300 font-light leading-relaxed">
              Comprehensive compliance and verification solutions for the modern
              enterprise
            </p>
          </div>
        </div>
      </section>

      {/* Metro Tiles Grid - Desktop Layout */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-full px-8">
          {/* Main Grid Container */}
          <div
            className="grid grid-cols-8 gap-0 max-w-7xl mx-auto"
            style={{ height: "600px" }}
          >
            {/* Sanction - Large Wide Tile */}
            <div className="col-span-4 row-span-2 bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <div className="p-12 h-full flex flex-col justify-between">
                <div>
                  <Shield className="w-20 h-20 mb-8" />
                  <h2 className="text-4xl font-light mb-4">sanction</h2>
                  <h3 className="text-2xl font-extralight text-purple-100">
                    screening
                  </h3>
                </div>
                <div>
                  <p className="text-xl text-purple-200 font-light leading-relaxed mb-6">
                    Comprehensive sanctions screening against global watchlists
                    and regulatory databases
                  </p>
                  <div className="flex items-center text-purple-100">
                    <span className="font-light text-lg">explore</span>
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-5">
                <Shield className="w-48 h-48" />
              </div>
            </div>

            {/* PEP - Medium Tile */}
            <div className="col-span-2 row-span-1 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <Users className="w-16 h-16 mb-1" />
                  <h2 className="text-2xl font-light">PEP</h2>
                  <h3 className="text-lg font-extralight text-blue-100">
                    screening
                  </h3>
                </div>
                <div className="flex items-center text-blue-100">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <Users className="w-24 h-24" />
              </div>
            </div>

            {/* Document Verification - Medium Tile */}
            <div className="col-span-2 row-span-1 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <FileText className="w-16 h-16 mb-4" />
                  <h2 className="text-2xl font-light">document</h2>
                  <h3 className="text-lg font-extralight text-green-100">
                    verification
                  </h3>
                </div>
                <div className="flex items-center text-green-100">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <FileText className="w-24 h-24" />
              </div>
            </div>

            {/* API Integration - Small Tile */}
            <div className="col-span-2 row-span-1 bg-gray-700 text-white hover:bg-gray-600 transition-all duration-300 cursor-pointer group">
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <Settings className="w-12 h-12 mb-3" />
                  <h3 className="text-lg font-light">API</h3>
                  <p className="text-sm font-extralight text-gray-300">
                    integration
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Real-time Results - Small Tile */}
            <div className="col-span-2 row-span-1 bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 cursor-pointer group">
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <Zap className="w-12 h-12 mb-3" />
                  <h3 className="text-lg font-light">real-time</h3>
                  <p className="text-sm font-extralight text-indigo-100">
                    results
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Address Search - Large Tile */}
            <div className="col-span-4 row-span-1 bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <div className="p-10 h-full flex justify-between items-center">
                <div>
                  <MapPin className="w-16 h-16 mb-4" />
                  <h2 className="text-3xl font-light mb-2">address search</h2>
                  <p className="text-xl text-orange-200 font-light">
                    Global address verification and validation
                  </p>
                </div>
                <div className="flex items-center text-orange-100">
                  <span className="font-light text-lg mr-3">explore</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 opacity-5">
                <MapPin className="w-32 h-32" />
              </div>
            </div>
          </div>

          {/* Secondary Grid */}
          <div
            className="grid grid-cols-6 gap-0 max-w-7xl mx-auto mt-0"
            style={{ height: "200px" }}
          >
            {/* Analytics - Medium Tile */}
            <div className="col-span-2 bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 cursor-pointer group">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <BarChart3 className="w-14 h-14 mb-4" />
                  <h3 className="text-xl font-light">analytics</h3>
                  <p className="text-sm font-extralight text-teal-100">
                    dashboard
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 24/7 Support - Medium Tile */}
            <div className="col-span-2 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 cursor-pointer group">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <Clock className="w-14 h-14 mb-4" />
                  <h3 className="text-xl font-light">24/7</h3>
                  <p className="text-sm font-extralight text-red-100">
                    support
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Get Started - CTA Tile */}
            <div className="col-span-2 bg-yellow-600 text-white hover:bg-yellow-700 transition-all duration-300 cursor-pointer group">
              <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-light mb-2">get started</h3>
                <p className="text-sm font-extralight text-yellow-100 mb-4">
                  free trial
                </p>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-5 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-purple-600 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-light text-white">VeriCheck</span>
              </div>
              <p className="text-gray-400 font-light text-lg leading-relaxed">
                Leading provider of verification and compliance solutions for
                businesses worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-light text-white mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sanction Screening
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    PEP Screening
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Document Verification
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Address Search
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-light text-white mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
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
    </div>
  );
}
