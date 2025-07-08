"use client";

import React, { useState } from "react";
import {
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Users,
  ArrowRight,
  Globe,
  FileText,
} from "lucide-react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle support request submission here
    console.log("Support Request:", formData);
    alert("Support request submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      issue: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-6">
      <section className="mb-10 max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-light text-white mb-2 leading-tight text-left">
          Support Center
          <span className="text-primary block font-extralight mt-1">
            How can we help you?
          </span>
        </h1>
        <p className="text-lg text-gray-300 font-light max-w-md leading-relaxed text-left">
          Need assistance? Reach out to us through the options below or submit a
          support request.
        </p>
      </section>

      {/* Support Info Tiles */}
      <section className="max-w-5xl mx-auto grid grid-cols-4 gap-6 mb-16">
        {/* Security Tile */}
        <div className="flip-tile bg-primary text-white h-48 rounded-xl shadow-lg cursor-default p-6 flex flex-col justify-center items-center">
          <Shield className="w-14 h-14 mb-3" />
          <h2 className="text-2xl font-light mb-1">Enterprise Security</h2>
          <p className="text-sm font-extralight text-center">
            Bank-level security to keep your data safe and private
          </p>
        </div>

        {/* Phone Support Tile */}
        <div className="flip-tile bg-blue-600 text-white h-48 rounded-xl shadow-lg cursor-default p-6 flex flex-col justify-center items-center">
          <Phone className="w-14 h-14 mb-3" />
          <h2 className="text-2xl font-light mb-1">Phone Support</h2>
          <p className="text-sm font-extralight">+1 (234) 567-890</p>
        </div>

        {/* Email Support Tile */}
        <div className="flip-tile bg-green-600 text-white h-48 rounded-xl shadow-lg cursor-default p-6 flex flex-col justify-center items-center">
          <Mail className="w-14 h-14 mb-3" />
          <h2 className="text-2xl font-light mb-1">Email Support</h2>
          <p className="text-sm font-extralight">support@example.com</p>
        </div>

        {/* Documentation Tile */}
        <div className="flip-tile bg-orange-600 text-white h-48 rounded-xl shadow-lg cursor-default p-6 flex flex-col justify-center items-center">
          <FileText className="w-14 h-14 mb-3" />
          <h2 className="text-2xl font-light mb-1">Documentation</h2>
          <p className="text-sm font-extralight">
            Access product guides and API documentation
          </p>
        </div>
      </section>

      {/* Support Request Form Section */}
      <section className="max-w-3xl mx-96 pb-12">
        <h2 className="text-5xl font-light text-white mb-10 text-center tracking-wide">
          Submit a Support Request
        </h2>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-10 shadow-xl">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-3 text-lg font-medium"
              >
                Name
              </label>
              <div className="relative">
                <Users className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-600 text-white font-light focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-3 text-lg font-medium"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-600 text-white font-light focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-300 mb-3 text-lg font-medium"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-600 text-white font-light focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Issue Description */}
            <div>
              <label
                htmlFor="issue"
                className="block text-gray-300 mb-3 text-lg font-medium"
              >
                Describe Your Issue
              </label>
              <textarea
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Please describe your issue or question here..."
                className="w-full p-4 bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none font-light"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white font-semibold text-lg py-4 px-16 shadow-lg hover:brightness-110 transform hover:scale-105 transition inline-flex items-center space-x-3"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      </section>

     
    </div>
  );
}
