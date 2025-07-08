"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  User,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form data:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-6">
      <section className="mb-10 max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-light text-white mb-2 leading-tight text-left">
          Get in Touch
          <span className="text-primary block font-extralight mt-1">
            Contact us today
          </span>
        </h1>
        <p className="text-lg text-gray-300 font-light max-w-md leading-relaxed text-left">
          We'd love to hear from you! Choose a tile to find contact info or send
          us a message.
        </p>
      </section>

      {/* Contact Info Tiles */}
      <section className="max-w-5xl mx-auto grid grid-cols-4 gap-6 mb-16">
        {/* Email Tile */}
        <div className="flip-tile bg-primary text-white h-48 rounded-xl shadow-lg cursor-default p-6 flex flex-col justify-center items-center">
          <Mail className="w-14 h-14 mb-3" />
          <h2 className="text-2xl font-light mb-1">Email Us</h2>
          <p className="text-sm font-extralight">support@example.com</p>
        </div>

        {/* Phone Tile */}
        <div className="flip-tile bg-blue-600 text-white h-48 rounded-xl shadow-lg cursor-default p-6 flex flex-col justify-center items-center">
          <Phone className="w-14 h-14 mb-3" />
          <h2 className="text-2xl font-light mb-1">Call Us</h2>
          <p className="text-sm font-extralight">+1 (234) 567-890</p>
        </div>

        {/* Address Tile */}
        <div className="flip-tile bg-green-600 text-white h-48 rounded-xl shadow-lg cursor-default p-6 flex flex-col justify-center items-center">
          <User className="w-14 h-14 mb-3" />
          <h2 className="text-2xl font-light mb-1">Visit Us</h2>
          <p className="text-sm font-extralight text-center">
            123 Main St,
            <br />
            City, Country
          </p>
        </div>

        {/* Placeholder Tile for layout symmetry */}
        <div className="h-48"></div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-3xl mx-48 px-6 pb-12">
        <h2 className="text-5xl font-light text-white mb-10 text-start tracking-wide">
          Send a Message
        </h2>
        <form onSubmit={handleSubmit} className="p-10s">
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
                <User className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
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

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-3 text-lg font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full p-4 bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none font-light"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white font-semibold text-lg py-4 px-16 shadow-lg hover:brightness-110 transform hover:scale-105 transition inline-flex items-center space-x-3"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      </section>

      
    </div>
  );
}
