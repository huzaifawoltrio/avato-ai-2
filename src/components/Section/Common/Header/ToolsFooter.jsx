"use client";

import React from "react";
import {
  Brain,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Call to Action Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Take your startup
                <br />
                to the next level
              </h2>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                Get started now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Brain size={32} className="text-orange-500" />
                <span className="text-2xl font-bold">AvatoAi</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Empowering SMBs with AI-driven tools for growth, automation,
                compliance, and smarter customer engagement.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* AI Tools Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                AI Tools
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    Smart Content Shield
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    Branding Assistant
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    AI Video & Avatar Studio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    Communication Automator
                  </a>
                </li>
              </ul>
            </div>

            {/* Additional Tools Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                More Tools
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    Review & Reputation Genie
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    Local Lead Radar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    UGC Rights Manager
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    Compliance Copilot
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-orange-500 flex-shrink-0" />
                  <a
                    href="tel:+18001234567"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    +1 (800) 123-4567
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-orange-500 flex-shrink-0" />
                  <a
                    href="mailto:hello@avatoai.com"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    hello@avatoai.com
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin
                    size={18}
                    className="text-orange-500 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-300">San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © Copyright 2024, All Rights Reserved by AvatoAi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
