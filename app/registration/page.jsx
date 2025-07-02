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
  User,
  Building,
  Phone,
  Globe,
  Users,
  FileText,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
    accountType: "individual",
    agreeToTerms: false,
    subscribeNewsletter: false,
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
    // Handle registration logic here
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex min-h-screen">
        {/* Left Side - Registration Form */}
        <div className="w-3/5 flex items-center justify-center bg-gray-900 px-16 py-12">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-600 flex items-center justify-center mx-auto mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-light text-white mb-4">
                create account
              </h1>
              <p className="text-xl text-gray-300 font-light">
                Join VeriCheck and start verifying today
              </p>
            </div>

            <div className="space-y-6">
              {/* Account Type Selection */}
              <div>
                <label className="block text-sm font-light text-gray-300 mb-3">
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label
                    className={`flex items-center justify-center p-4 border cursor-pointer transition-colors ${
                      formData.accountType === "individual"
                        ? "border-purple-500 bg-purple-600 bg-opacity-20"
                        : "border-gray-600 bg-gray-800"
                    }`}
                  >
                    <input
                      type="radio"
                      name="accountType"
                      value="individual"
                      checked={formData.accountType === "individual"}
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <div className="flex items-center space-x-3">
                      <User className="w-6 h-6 text-white" />
                      <span className="text-white font-light">Individual</span>
                    </div>
                  </label>
                  <label
                    className={`flex items-center justify-center p-4 border cursor-pointer transition-colors ${
                      formData.accountType === "business"
                        ? "border-purple-500 bg-purple-600 bg-opacity-20"
                        : "border-gray-600 bg-gray-800"
                    }`}
                  >
                    <input
                      type="radio"
                      name="accountType"
                      value="business"
                      checked={formData.accountType === "business"}
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <div className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-white" />
                      <span className="text-white font-light">Business</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-light text-gray-300 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 text-white font-light focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-300 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 text-white font-light focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
              </div>

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
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 text-white font-light focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone and Company Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-light text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 text-white font-light focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-300 mb-2">
                    Company{" "}
                    {formData.accountType === "individual" ? "(Optional)" : ""}
                  </label>
                  <div className="relative">
                    <Building className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 text-white font-light focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-4">
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
                      className="w-full pl-12 pr-12 py-3 bg-gray-800 border border-gray-600 text-white font-light focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Create password"
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
                <div>
                  <label className="block text-sm font-light text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-3 bg-gray-800 border border-gray-600 text-white font-light focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 focus:ring-purple-500 focus:ring-2 mt-1"
                  />
                  <span className="ml-3 text-sm font-light text-gray-300">
                    I agree to the{" "}
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      Privacy Policy
                    </button>
                  </span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 focus:ring-purple-500 focus:ring-2 mt-1"
                  />
                  <span className="ml-3 text-sm font-light text-gray-300">
                    Subscribe to our newsletter for updates and verification
                    tips
                  </span>
                </label>
              </div>

              {/* Create Account Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-purple-600 text-white py-4 font-light text-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-3"
              >
                <span>Create Account</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-900 text-gray-400 font-light">
                    or sign up with
                  </span>
                </div>
              </div>

              {/* Social Registration Buttons */}
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

              {/* Sign In Link */}
              <div className="text-center mt-6">
                <p className="text-gray-400 font-light">
                  Already have an account?{" "}
                  <button
                    onClick={() => handleGotoPage("/login")}
                    className="text-purple-400 hover:text-purple-300 transition-colors font-light"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Benefits */}
        <div className="w-2/5 bg-gray-800 flex items-center justify-center px-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-light text-white mb-6">
              join thousands of
              <span className="text-purple-400 block font-extralight">
                satisfied customers
              </span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-light text-white mb-1">
                    Free Trial
                  </h3>
                  <p className="text-gray-300 font-light text-sm">
                    Start with a 30-day free trial, no credit card required
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-light text-white mb-1">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-300 font-light text-sm">
                    Bank-level security with SSL encryption and data protection
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-600 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-light text-white mb-1">
                    24/7 Support
                  </h3>
                  <p className="text-gray-300 font-light text-sm">
                    Round-the-clock customer support and dedicated account
                    management
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-light text-white mb-1">
                    API Integration
                  </h3>
                  <p className="text-gray-300 font-light text-sm">
                    Seamless integration with your existing systems and
                    workflows
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-8 p-6 bg-purple-600 text-white">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current text-yellow-300"
                    />
                  ))}
                </div>
              </div>
              <p className="font-light text-purple-100 text-sm mb-3">
                "VeriCheck has streamlined our verification process and reduced
                fraud by 85%. The API integration was seamless."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-light text-white">Sarah Johnson</p>
                  <p className="text-xs font-light text-purple-200">
                    CTO, FinanceCorr
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-light text-white">1M+</div>
                <div className="text-sm font-light text-gray-300">
                  Verifications
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-white">99.9%</div>
                <div className="text-sm font-light text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
