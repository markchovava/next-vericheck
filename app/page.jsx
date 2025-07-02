"use client";

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
  User,
  Banknote,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 pb-[5rem]">
      {/* Custom CSS for flip animations */}
      <style jsx>{`
        .flip-tile {
          perspective: 1000px;
        }

        .flip-tile-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-tile:hover .flip-tile-inner {
          transform: rotateY(180deg);
        }

        .flip-tile-front,
        .flip-tile-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-tile-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gray-800">
        <div className={styles.heroWrapper}>
          <div className={styles.heroPanel}>
            <div className={styles.heroContent}>
              <div className={styles.heroContentIn}>
                <div>
                  <div
                    style={{
                      fontSize: "54px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0px",
                    }}
                    className="text-purple-700"
                  >
                    Verification made simple
                  </div>
                  <p>
                    Comprehensive compliance and verification solutions for the
                    modern enterprise
                  </p>
                  <div className="flex gap-2 mt-15">
                    <Link href="/address-search">
                      <button className="bg-purple-700 hover:drop-shadow-lg text-white font-semibold rounded-2xl p-2 px-4">
                        Address Search
                      </button>
                    </Link>
                    <Link href="/explore">
                    <button className="border-2 border-purple-700 text-purple-700 rounded-2xl p-1 px-4 font-bold">
                      Explore Vericheck
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.heroImageIn}>
                <Image
                  src="/6534510-removebg-preview.png"
                  alt=""
                  height={350}
                  width={350}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="max-w-7xl mx-auto px-8">
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
        </div> */}
      </section>

     {/*  <section className="bg-gray-700">
        <div className={styles.statesWrapper}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={styles.statesItem}>
              <Shield className="w-20 h-20" />
              <div className={styles.statesBody}>
                <h5>20000+</h5>
                <p>Students</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Metro Tiles Grid - Desktop Layout */}
      <section className="pt-[5rem] pb-[2rem] bg-gray-900">
        <div className="max-w-full px-8">
          {/* Main Grid Container */}
          <div
            className="grid grid-cols-8 gap-0 max-w-7xl mx-auto"
            style={{ height: "600px" }}
          >
            {/* Sanction - Large Wide Tile */}
            <div className="col-span-4 row-span-2 flip-tile cursor-pointer">
              <div className="flip-tile-inner">
                {/* Front */}
                <div className="flip-tile-front bg-purple-600 text-white">
                  <div className="p-12 h-full flex flex-col justify-start">
                    <div>
                      <Shield className="w-20 h-20 mb-8" />
                      <h2 className="text-4xl font-light mb-4 text-start">
                        sanction
                      </h2>
                      <h3 className="text-2xl font-extralight text-purple-100 text-start">
                        screening
                      </h3>
                    </div>
                    <div>
                      <p className="text-xl text-purple-200 font-light leading-relaxed mb-1 text-start">
                        Comprehensive sanctions screening against global
                        watchlists and regulatory databases
                      </p>
                      <div className="flex items-center text-purple-100">
                        <span className="font-light text-lg">explore</span>
                        <ArrowRight className="w-6 h-6 ml-3" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 opacity-5">
                    <Shield className="w-48 h-48" />
                  </div>
                </div>
                {/* Back */}
                <div
                  className="flip-tile-back bg-purple-700 text-white"
                  onClick={() => router.push("/sanctions")}
                >
                  <div className="p-12 h-full flex flex-col justify-center">
                    <h2 className="text-3xl font-light mb-8 text-center">
                      Sanction Screening
                    </h2>
                    <div className="space-y-4 text-purple-100">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="font-light">
                          Screen against 1000+ global sanctions lists including
                          OFAC, UN, EU, and HMT
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="font-light">
                          Real-time updates and continuous monitoring
                          capabilities
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="font-light">
                          Advanced fuzzy matching and false positive reduction
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="font-light">
                          Comprehensive audit trails and compliance reporting
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PEP - Medium Tile */}
            <div className="col-span-2 row-span-1 flip-tile cursor-pointer">
              <div className="flip-tile-inner">
                {/* Front */}
                <div className="flip-tile-front bg-blue-600 text-white">
                  <div className="p-8 h-full flex flex-col justify-start">
                    <div>
                      <Users className="w-16 h-16 mb-4" />
                      <h2 className="text-2xl font-light text-start">PEP</h2>
                      <h3 className="text-lg font-extralight text-blue-100 text-start">
                        screening
                      </h3>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 opacity-10">
                    <Users className="w-24 h-24" />
                  </div>
                </div>
                {/* Back */}
                <div
                  className="flip-tile-back bg-blue-700 text-white"
                  onClick={() => router.push("/pep")}
                >
                  <div className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-light mb-4 text-center">
                      PEP Screening
                    </h3>
                    <div className="space-y-3 text-blue-100 text-sm">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light text-start">
                          Identify politically exposed persons and their
                          associates
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light text-start">
                          Global database coverage with regular updates
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light text-start">
                          Risk-based categorization and scoring
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Verification - Medium Tile */}
            <div className="col-span-2 row-span-1 flip-tile cursor-pointer">
              <div className="flip-tile-inner">
                {/* Front */}
                <div className="flip-tile-front bg-green-600 text-white">
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <FileText className="w-16 h-16 mb-4" />
                      <h2 className="text-2xl font-light text-start">
                        document
                      </h2>
                      <h3 className="text-lg font-extralight text-green-100 text-start">
                        verification
                      </h3>
                    </div>
                    <div className="flex items-center text-green-100">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 opacity-10">
                    <FileText className="w-24 h-24" />
                  </div>
                </div>
                {/* Back */}
                <div
                  className="flip-tile-back bg-green-700 text-white"
                  onClick={() => router.push("/document-auth")}
                >
                  <div className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-light mb-4 text-center">
                      Document Verification
                    </h3>
                    <div className="space-y-3 text-green-100 text-sm">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">
                          AI-powered authenticity detection
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">
                          Support for 200+ document types
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">
                          Real-time OCR and data extraction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* API Integration - Small Tile */}
            <div className="col-span-2 row-span-1 flip-tile cursor-pointer">
              <div className="flip-tile-inner">
                {/* Front */}
                <div className="flip-tile-front bg-gray-700 text-white">
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <Settings className="w-12 h-12 mb-3" />
                      <h3 className="text-lg font-light text-start">API</h3>
                      <p className="text-sm font-extralight text-gray-300 text-start">
                        integration
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                {/* Back */}
                <div className="flip-tile-back bg-gray-600 text-white">
                  <div className="p-4 h-full flex flex-col justify-center">
                    <h4 className="text-lg font-light mb-3 text-center">
                      API Integration
                    </h4>
                    <div className="space-y-2 text-gray-200 text-xs">
                      <div className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-gray-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">
                          RESTful API with comprehensive documentation
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-gray-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">
                          SDKs for popular programming languages
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-gray-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">
                          Webhook support for real-time notifications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Results - Small Tile */}
            <div className="col-span-2 row-span-1 flip-tile cursor-pointer">
              <div className="flip-tile-inner">
                {/* Front */}
                <div className="flip-tile-front bg-indigo-600 text-white">
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <Zap className="w-12 h-12 mb-3" />
                      <h3 className="text-lg font-light text-start">
                        real-time
                      </h3>
                      <p className="text-sm font-extralight text-indigo-100 text-start">
                        results
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                {/* Back */}
                <div className="flip-tile-back bg-indigo-700 text-white">
                  <div className="p-4 h-full flex flex-col justify-center">
                    <h4 className="text-lg font-light mb-3 text-center">
                      Real-time Results
                    </h4>
                    <div className="space-y-2 text-indigo-200 text-xs">
                      <div className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-indigo-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">Sub-second response times</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-indigo-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">99.9% uptime SLA guarantee</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-indigo-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">
                          Global CDN for optimal performance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Search - Large Tile */}
            <div className="col-span-4 row-span-1 flip-tile cursor-pointer overflow-hidden">
              <div className="flip-tile-inner">
                {/* Front */}
                <div className="flip-tile-front bg-orange-600 text-white">
                  <div className="p-10 h-full flex justify-between items-center">
                    <div>
                      <MapPin className="w-16 h-16 mb-4" />
                      <h2 className="text-3xl font-light mb-2 text-start">
                        address search
                      </h2>
                      <p className="text-xl text-orange-200 font-light">
                        Global address verification and validation
                      </p>
                    </div>
                    <div className="flex items-center text-orange-100">
                      <span className="font-light text-lg mr-3">explore</span>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 opacity-5">
                    <MapPin className="w-32 h-32" />
                  </div>
                </div>
                {/* Back */}
                <div
                  className="flip-tile-back bg-orange-700 text-white"
                  onClick={() => router.push("/address-search")}
                >
                  <div className="p-8 h-full flex items-center">
                    <div className="w-full">
                      <h2 className="text-2xl font-light mb-6 text-center">
                        Address Search & Validation
                      </h2>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-300 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="font-light text-orange-100">
                              Global coverage across 240+ countries
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-300 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="font-light text-orange-100">
                              Real-time address standardization
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-300 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="font-light text-orange-100">
                              Geocoding and reverse geocoding
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-300 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="font-light text-orange-100">
                              Address validation and cleansing
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-300 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="font-light text-orange-100">
                              Postal code verification
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-300 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="font-light text-orange-100">
                              Bulk processing capabilities
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 24/7 Support - Medium Tile */}
            <div className="col-span-2 flip-tile cursor-pointer">
              <div className="flip-tile-inner">
                {/* Front */}
                <div className="flip-tile-front bg-red-600 text-white">
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <Clock className="w-14 h-14 mb-4" />
                      <h3 className="text-xl font-light text-start">24/7</h3>
                      <p className="text-sm font-extralight text-red-100 text-start">
                        support
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                {/* Back */}
                <div className="flip-tile-back bg-red-700 text-white">
                  <div className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-lg font-light mb-4 text-center">
                      24/7 Support
                    </h3>
                    <div className="space-y-3 text-red-100 text-sm">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">
                          Round-the-clock technical support
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">
                          Dedicated account management
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="font-light">
                          Priority response for enterprise clients
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Started - CTA Tile */}
            <div className="col-span-2 flip-tile cursor-pointer">
              <div className="flip-tile-inner">
                {/* Front */}
                <div className="flip-tile-front bg-yellow-600 text-white">
                  <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-light mb-2">get started</h3>
                    <p className="text-sm font-extralight text-yellow-100 mb-4">
                      free trial
                    </p>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
                {/* Back */}
                <div className="flip-tile-back bg-yellow-700 text-white">
                  <div className="p-6 h-full flex flex-col justify-center text-center">
                    <h3 className="text-lg font-light mb-4">
                      Start Your Free Trial
                    </h3>
                    <div className="space-y-3 text-yellow-100 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full flex-shrink-0"></div>
                        <p className="font-light">30-day free trial</p>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full flex-shrink-0"></div>
                        <p className="font-light">No credit card required</p>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full flex-shrink-0"></div>
                        <p className="font-light">Full feature access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </section>
    </div>
  );
}
