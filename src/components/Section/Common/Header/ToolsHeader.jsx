"use client";

import React, { useEffect, useState } from "react";
import { Brain, ChevronDown, ChevronLeft, X, Menu } from "lucide-react";

const Header = ({ roundedBtn = false }) => {
  const [isActive, setIsActive] = useState(false);
  const [subMenuArray, setSubMenuArray] = useState([]);
  const [subMenuTextArray, setSubMenuTextArray] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isActive) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive]);

  const closeMenu = () => {
    setIsActive(false);
    setSubMenuArray([]);
    setSubMenuTextArray([]);
    setCurrentMenuTitle("");

    document
      .querySelectorAll(".menu-overlay")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelectorAll(".mobile-menu-head")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelectorAll(".go-back")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelectorAll(".sub-menu")
      .forEach((el) => el.classList.remove("active"));
  };

  const menuMainClickHandler = (e) => {
    if (window.innerWidth <= 991) {
      document.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("active");
      });

      const target = e.target;
      const hasChildren = target.closest(".nav-item-has-children");
      if (hasChildren) {
        e.preventDefault();
        showSubMenu(hasChildren);
      }
    }
  };

  const goBackClickHandler = () => {
    const newSubMenuArray = [...subMenuArray];
    const newSubMenuTextArray = [...subMenuTextArray];

    const lastItem = newSubMenuArray.pop();
    const lastItemText = newSubMenuTextArray.pop();

    setSubMenuArray(newSubMenuArray);
    setSubMenuTextArray(newSubMenuTextArray);
    setCurrentMenuTitle(lastItemText || "");

    if (lastItem) {
      const element = document.getElementById(lastItem);
      if (element && newSubMenuArray.length >= 0) {
        if (!element.classList.contains("nav-item-has-children")) {
          element.style.animation = "slideRight 0.5s ease forwards";
          setTimeout(() => {
            element.classList.remove("active");
          }, 300);
        } else {
          document
            .querySelectorAll(".go-back")
            .forEach((el) => el.classList.remove("active"));
        }
      }
    }

    if (newSubMenuArray.length === 0) {
      document
        .querySelectorAll(".mobile-menu-head")
        .forEach((el) => el.classList.remove("active"));
    }
  };

  const menuTriggerClickHandler = () => {
    setIsActive(!isActive);
    document
      .querySelectorAll(".menu-overlay")
      .forEach((el) => el.classList.toggle("active"));
  };

  const overlayClickHandler = () => {
    closeMenu();
  };

  const showSubMenu = (hasChildren) => {
    document.querySelectorAll(".sub-menu").forEach((submenu) => {
      submenu.classList.remove("active");
    });

    const subMenu = hasChildren.querySelector(".sub-menu");
    if (subMenu) {
      setSubMenuArray([...subMenuArray, subMenu.id]);
      subMenu.classList.add("active");
      subMenu.style.animation = "slideLeft 0.5s ease forwards";

      const dropTrigger = hasChildren.querySelector(".drop-trigger");
      const menuTitle = dropTrigger?.textContent || "";
      setSubMenuTextArray([...subMenuTextArray, menuTitle]);
      setCurrentMenuTitle(menuTitle);

      document
        .querySelectorAll(".mobile-menu-head")
        .forEach((el) => el.classList.add("active"));
      document
        .querySelectorAll(".go-back")
        .forEach((el) => el.classList.add("active"));
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideLeft {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes slideRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
        .sub-menu {
          transform: translateX(100%);
        }
        .sub-menu.active {
          transform: translateX(0);
        }
        .menu-overlay {
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        .mobile-menu-head {
          transform: translateX(-100%);
          transition: all 0.3s ease;
        }
        .mobile-menu-head.active {
          transform: translateX(0);
        }
        .go-back {
          opacity: 0;
          transition: all 0.3s ease;
        }
        .go-back.active {
          opacity: 1;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 ${
          isSticky ? "shadow-md" : ""
        }`}
        id="sticky-menu"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand Logo */}
            <div className="flex items-center space-x-2">
              <Brain size={32} className="text-orange-500" />
              <span className="text-xl lg:text-2xl font-bold text-gray-800">
                AvatoAi
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                <a
                  href="/dashboard"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
                >
                  Mission Control
                </a>

                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">
                    <span>Tools</span>
                    <ChevronDown
                      size={16}
                      className="transform group-hover:rotate-180 transition-transform duration-200"
                    />
                  </button>

                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors duration-200"
                      >
                        AI Chatbot
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors duration-200"
                      >
                        AI Writer
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors duration-200"
                      >
                        AI Image Generator
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors duration-200"
                      >
                        AI Code Assistant
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
                >
                  Contact
                </a>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <a
                  href="/sign-in"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
                >
                  Login
                </a>
                <a
                  href="/contact-us"
                  className={`px-6 py-2 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors duration-200 
                  rounded-full
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              className="lg:hidden flex items-center justify-center w-8 h-8"
              onClick={menuTriggerClickHandler}
              aria-label="Toggle menu"
            >
              <Menu size={24} className="text-gray-600" />
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          {/* Overlay */}
          <div
            className="menu-overlay fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={overlayClickHandler}
          ></div>

          {/* Mobile Menu Panel */}
          <nav
            className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 z-50 ${
              isActive ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Mobile Menu Header */}
            <div className="mobile-menu-head flex items-center justify-between p-4 border-b border-gray-200">
              <button
                className="go-back flex items-center text-gray-600 hover:text-orange-500"
                onClick={goBackClickHandler}
              >
                <ChevronLeft size={20} />
              </button>
              <div className="current-menu-title font-medium text-gray-800">
                {currentMenuTitle}
              </div>
              <button
                className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-orange-500"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <ul className="site-menu-main py-4" onClick={menuMainClickHandler}>
              <li className="nav-item">
                <a
                  href="/dashboard"
                  className="block px-6 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  Mission Control
                </a>
              </li>
              <li className="nav-item nav-item-has-children">
                <a
                  href="#"
                  className="drop-trigger flex items-center justify-between px-6 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span>Tools</span>
                  <ChevronDown size={16} />
                </a>
                <ul
                  className="sub-menu absolute inset-0 bg-white"
                  id="submenu-tools"
                >
                  <li className="sub-menu--item">
                    <a
                      href="#"
                      className="block px-6 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                    >
                      AI Chatbot
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a
                      href="#"
                      className="block px-6 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                    >
                      AI Writer
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a
                      href="#"
                      className="block px-6 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                    >
                      AI Image Generator
                    </a>
                  </li>
                  <li className="sub-menu--item">
                    <a
                      href="#"
                      className="block px-6 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                    >
                      AI Code Assistant
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="block px-6 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="block px-6 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  Integrations
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="block px-6 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Auth Buttons */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
              <div className="space-y-3">
                <a
                  href="/sign-in"
                  className="block text-center py-3 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
                >
                  Login
                </a>
                <a
                  href="/contact-us"
                  className={`block text-center py-3 px-6 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors duration-200 ${
                    roundedBtn ? "rounded-full" : "rounded-lg"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
