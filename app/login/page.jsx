"use client";

import React, { useState } from "react";
import {
  Shield,
  CheckCircle,
  Eye,
  EyeOff,
  ArrowRight,
  Lock,
  Mail,
  Globe,
  Users,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function VeriCheckLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const router = useRouter();

  const handleGotoPage = (page) => {
    router.push(page);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex min-h-screen">
        {/* Left Side - Login Form */}
        <div
          className="w-1/2 flex items-center justify-center bg-gray-900 px-16"
          style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div className="w-full max-w-md">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-purple-600 flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-light text-white mb-4">
                welcome back
              </h1>
              <p className="text-xl text-gray-300 font-light">
                Sign in to your VeriCheck account
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-light text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 text-white font-light text-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-light text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 bg-gray-800 border border-gray-600 text-white font-light text-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 focus:ring-purple-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm font-light text-gray-300">
                    Remember me
                  </span>
                </label>
                <button className="text-sm font-light text-purple-400 hover:text-purple-300 transition-colors">
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-purple-600 text-white py-4 font-light text-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-3"
              >
                <span>Sign In</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-900 text-gray-400 font-light">
                    or continue with
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="bg-gray-800 border border-gray-600 text-white py-3 font-light hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Globe className="w-5 h-5" />
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="bg-gray-800 border border-gray-600 text-white py-3 font-light hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Users className="w-5 h-5" />
                  <span>Microsoft</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-8">
                <p className="text-gray-400 font-light">
                  Don't have an account?{" "}
                  <button
                    onClick={() => handleGotoPage("/registration")}
                    className="text-purple-400 hover:text-purple-300 transition-colors font-light"
                  >
                    Create one here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="w-1/2 bg-gray-800 flex items-center justify-center px-16">
          <div className="max-w-lg">
            <h2 className="text-4xl font-light text-white mb-8">
              secure verification
              <span className="text-purple-400 block font-extralight">
                made simple
              </span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-2">
                    Advanced Security
                  </h3>
                  <p className="text-gray-300 font-light">
                    Bank-grade encryption and security protocols to protect your
                    sensitive data and transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-2">
                    Instant Verification
                  </h3>
                  <p className="text-gray-300 font-light">
                    Real-time document and identity verification with sub-second
                    response times.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-2">
                    Comprehensive Reports
                  </h3>
                  <p className="text-gray-300 font-light">
                    Detailed verification reports with audit trails for
                    compliance and record-keeping.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-2">
                    Global Coverage
                  </h3>
                  <p className="text-gray-300 font-light">
                    Verify documents and identities across multiple countries
                    and jurisdictions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-purple-600 text-white">
              <h4 className="text-xl font-light mb-3">
                Trusted by 1000+ Businesses
              </h4>
              <p className="font-light text-purple-100">
                From startups to enterprises, organizations worldwide trust
                VeriCheck for their verification needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
