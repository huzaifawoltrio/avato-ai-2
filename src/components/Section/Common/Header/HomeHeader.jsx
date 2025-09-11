"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { Brain } from "lucide-react";

const HomeHeader = ({ roundedBtn }) => {
  const [isActive, setIsActive] = useState(false);
  const [subMenuArray, setSubMenuArray] = useState([]);
  const [subMenuTextArray, setSubMenuTextArray] = useState([]);
  const [scrollClassName, setScrollClassName] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollClassName("sticky-menu");
      } else {
        setScrollClassName("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuMainClickHandler = (e) => {
    if (typeof window !== "undefined" && window.innerWidth <= 991) {
      document.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("active");
      });

      const hasChildren = e.target.closest(".nav-item-has-children");
      if (hasChildren) {
        e.preventDefault();
        if (hasChildren.classList.contains("nav-item-has-children")) {
          showSubMenu(hasChildren);
        }
      }
    }
  };

  const goBackClickHandler = () => {
    const lastItem = subMenuArray.slice(-1)[0];
    const lastItemText = subMenuTextArray.slice(-2)[0];
    setSubMenuArray(subMenuArray.slice(0, -1));
    setSubMenuTextArray(subMenuTextArray.slice(0, -1));
    if (lastItem) {
      if (subMenuArray.length >= 0) {
        if (
          !document
            .getElementById(lastItem)
            .classList.contains("nav-item-has-children")
        ) {
          document.getElementById(lastItem).style.animation =
            "slideRight 0.5s ease forwards";
          document.querySelector(".current-menu-title").innerHTML =
            lastItemText;
          setTimeout(() => {
            document.getElementById(lastItem).classList.remove("active");
          }, 300);
        } else {
          document.querySelector(".go-back").classList.remove("active");
        }
      }
    }
    if (subMenuArray.length === 1) {
      document.querySelector(".mobile-menu-head").classList.remove("active");
    }
  };

  const menuTriggerClickHandler = () => {
    toggleMenu();
  };

  const closeMenuClickHandler = () => {
    toggleMenu();
    document
      .querySelectorAll(".sub-menu")
      .forEach((submenu) => submenu.classList.remove("active"));

    document.querySelector(".go-back").classList.remove("active");
  };

  const overlayClickHandler = () => {
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
    document.querySelector(".menu-overlay").classList.toggle("active");
  };

  const showSubMenu = (hasChildren) => {
    document.querySelectorAll(".sub-menu").forEach((submenu) => {
      submenu.classList.remove("active");
    });
    const subMenu = hasChildren.querySelector(".sub-menu");
    setSubMenuArray([...subMenuArray, subMenu.id]);
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector(".drop-trigger").textContent;
    setSubMenuTextArray([...subMenuTextArray, menuTitle]);
    document.querySelector(".current-menu-title").innerHTML = menuTitle;
    document.querySelector(".mobile-menu-head").classList.add("active");
  };

  useEffect(() => {
    const handleResize = () => {
      if (
        typeof window !== "undefined" &&
        window.innerWidth > 991 &&
        isActive
      ) {
        toggleMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive]);

  return (
    <header
      className={`site-header site-header--menu-center zubuz-header-section bg-white ${scrollClassName}`}
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <Link href={`/`}>
            <div
              className="brand-logo"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Brain size={32} color="#ff6b35" />
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                AvatoAi
              </span>
            </div>
          </Link>
          <div className="menu-block-wrapper">
            <div className="menu-overlay" onClick={overlayClickHandler}></div>
            <nav
              className={`menu-block ${isActive ? "active" : ""}`}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <div className="go-back" onClick={goBackClickHandler}>
                  <FaAngleLeft />
                </div>
                <div className="current-menu-title"></div>
                <div
                  className="mobile-menu-close"
                  onClick={closeMenuClickHandler}
                >
                  &times;
                </div>
              </div>
              <ul className="site-menu-main" onClick={menuMainClickHandler}>
                <li className="nav-item">
                  <Link href="/Services" className="nav-link-item">
                    Our Services
                  </Link>
                </li>
                <li className="nav-item nav-item-has-children">
                  <Link href="#" className="nav-link-item drop-trigger">
                    Tools{" "}
                    <i>
                      <FaAngleDown />
                    </i>
                  </Link>
                  <ul className="sub-menu" id="submenu-tools">
                    <li className="sub-menu--item">
                      <Link href="#">
                        <span className="menu-item-text">AI Chatbot</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="#">
                        <span className="menu-item-text">AI Writer</span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="#">
                        <span className="menu-item-text">
                          AI Image Generator
                        </span>
                      </Link>
                    </li>
                    <li className="sub-menu--item">
                      <Link href="#">
                        <span className="menu-item-text">
                          AI Code Assistant
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link-item">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link-item">
                    Integrations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link-item">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <Link
              className={` ${
                roundedBtn
                  ? "zubuz-default-btn zubuz-header-btn pill"
                  : "zubuz-default-btn zubuz-header-btn"
              }`}
              href="https://avato-dashboard.vercel.app/login"
            >
              <span>Get Started</span>
            </Link>
          </div>
          <div
            className="mobile-menu-trigger light"
            onClick={menuTriggerClickHandler}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
